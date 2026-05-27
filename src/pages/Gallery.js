import React, { useCallback, useEffect, useRef, useState } from 'react';
import BackButton from '../components/BackButton';
import Blocker from '../components/Blocker';
import Layout from '../layout/Layout';
import { reveal } from '../App';

const FADE_DURATION_MS = 1000;
const ADJACENT_PRELOAD_OFFSETS = [1, 2];
const GRID_EAGER_IMAGE_COUNTS = { 2: 4, 3: 6 };
const HIGH_PRIORITY_IMAGE_COUNT = 3;
const GALLERY_REVEAL_THRESHOLD = 0;

const getGridImageLoadingProps = (index, grid) => {
  const eagerCount = GRID_EAGER_IMAGE_COUNTS[grid] ?? GRID_EAGER_IMAGE_COUNTS[3];
  const props = {
    loading: index < eagerCount ? 'eager' : 'lazy',
  };

  if (index < HIGH_PRIORITY_IMAGE_COUNT) {
    props.fetchPriority = 'high';
  }

  return props;
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Gallery = (props) => {
  const [lightbox, setLightbox] = useState(false);
  const [image, setImage] = useState(null);
  const [fade, setFade] = useState('in');
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const isMountedRef = useRef(true);
  const transitionTokenRef = useRef(0);
  const preloadedSrcRef = useRef(new Set());
  const preloadPromisesRef = useRef(new Map());

  const markImageLoaded = useCallback((src) => {
    setLoadedImages((prev) => {
      if (prev[src]) {
        return prev;
      }

      return { ...prev, [src]: true };
    });
  }, []);

  const handleGridImageRef = useCallback(
    (src) => (node) => {
      if (node?.complete && node.naturalWidth > 0) {
        markImageLoaded(src);
      }
    },
    [markImageLoaded]
  );

  const runGalleryReveal = useCallback(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!isMountedRef.current) {
          return;
        }

        reveal('.reveal-image', GALLERY_REVEAL_THRESHOLD);
      });
    });
  }, []);

  const preloadBigImage = (imageOrSrc) => {
    const src = typeof imageOrSrc === 'string' ? imageOrSrc : imageOrSrc?.bigSrc;

    if (!src) {
      return Promise.resolve();
    }

    if (preloadedSrcRef.current.has(src)) {
      return Promise.resolve();
    }

    const inFlight = preloadPromisesRef.current.get(src);
    if (inFlight) {
      return inFlight;
    }

    const promise = new Promise((resolve) => {
      const img = new Image();
      img.loading = 'eager';

      const finish = () => {
        preloadedSrcRef.current.add(src);
        preloadPromisesRef.current.delete(src);
        resolve();
      };

      img.onload = () => {
        if (typeof img.decode === 'function') {
          img.decode().then(finish).catch(finish);
          return;
        }

        finish();
      };

      img.onerror = finish;
      img.src = src;
    });

    preloadPromisesRef.current.set(src, promise);
    return promise;
  };

  // Warm nearby full-size images so next/prev transitions rarely wait on the network.
  const preloadAdjacentBigImages = (currentImage) => {
    if (!currentImage) return;

    const images = props.series.images;
    const index = currentImage.id - 1;

    ADJACENT_PRELOAD_OFFSETS.forEach((offset) => {
      const previousImage = images[index - offset];
      const nextImage = images[index + offset];

      if (previousImage) {
        preloadBigImage(previousImage);
      }

      if (nextImage) {
        preloadBigImage(nextImage);
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  window.onscroll = () => {
    reveal('.reveal-image', GALLERY_REVEAL_THRESHOLD);
  };

  const closeLightbox = () => {
    transitionTokenRef.current += 1;
    setIsAnimating(false);
    setLightbox(false);
  };

  const getImg = (image) => {
    if (window.innerWidth > 600) {
      transitionTokenRef.current += 1;
      setIsAnimating(false);
      setImage(image);
      setFade('in');
      setLightbox(true);
    }
  };

  const changeImage = async (newImage) => {
    if (isAnimating) return;
    if (!lightbox || !newImage) return;

    const transitionToken = transitionTokenRef.current + 1;
    transitionTokenRef.current = transitionToken;
    setIsAnimating(true);
    setFade('out');

    await Promise.all([wait(FADE_DURATION_MS), preloadBigImage(newImage)]);

    if (!isMountedRef.current || transitionToken !== transitionTokenRef.current || !lightbox) {
      return;
    }

    setImage(newImage);
    setFade('in');

    await wait(FADE_DURATION_MS);

    if (!isMountedRef.current || transitionToken !== transitionTokenRef.current || !lightbox) {
      return;
    }

    setIsAnimating(false);
  };

  const back = () => {
    if (image?.id > 1) {
      changeImage(props.series.images[image.id - 2]);
    }
  };

  const next = () => {
    if (image?.id < props.series.images.length) {
      changeImage(props.series.images[image.id]);
    }
  };

  useEffect(() => {
    if (!lightbox || !image) return;

    preloadAdjacentBigImages(image);
  }, [image, lightbox, props.series.images]);

  useEffect(() => {
    const point = document.getElementById('scroll-point');

    if (point) {
      point.scrollIntoView({ behavior: 'smooth' });
    }

    runGalleryReveal();
  }, [runGalleryReveal]);

  useEffect(() => {
    if (Object.keys(loadedImages).length === 0) {
      return;
    }

    runGalleryReveal();
  }, [loadedImages, runGalleryReveal]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.defaultPrevented) {
        return;
      }

      switch (event.key) {
        case 'Esc':
        case 'Escape':
          closeLightbox();
          break;
        default:
          return;
      }

      event.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown, true);

    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  return (
    <Layout banner="grey">
      <Blocker />

      <div className={lightbox ? 'gallery__lightbox gallery__lightbox--open' : 'gallery__lightbox'}>
        <div className="gallery__arrow-left" onClick={back}>
          &nbsp;
        </div>

        {image && (
          <img
            src={image.bigSrc}
            className={fade === 'in' ? 'fadeIn-class' : 'fadeOut-class'}
            alt="Gallery item"
          />
        )}

        <div className="gallery__close" onClick={closeLightbox}>
          <span className="gallery__x-mark">&nbsp;</span>
        </div>

        <div className="gallery__arrow-right" onClick={next}>
          &nbsp;
        </div>
      </div>

      <div id="scroll-point" className="gallery__header">
        <div className="gallery__back-btn">
          <BackButton />
        </div>
        <h2 className="heading-2">{props.series.title}</h2>
        <h5 className="heading-4">{props.series.description}</h5>
      </div>

      <div className={'gallery ' + (props.grid === '2' ? 'gallery--grid-2' : 'gallery--grid-3')}>
        {props.series.images.map((image, index) => {
          const isLoaded = Boolean(loadedImages[image.smallSrc]);

          return (
            <div
              className={
                'gallery__item reveal-image' + (isLoaded ? ' gallery__item--loaded' : '')
              }
              key={image.id}
              onClick={() => getImg(image)}
            >
              <img
                src={image.smallSrc}
                alt="img"
                className="gallery__image"
                {...getGridImageLoadingProps(index, props.grid)}
                onLoad={() => markImageLoaded(image.smallSrc)}
                onError={() => markImageLoaded(image.smallSrc)}
                ref={handleGridImageRef(image.smallSrc)}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Gallery;