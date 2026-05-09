import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Blocker from '../components/Blocker';
import Layout from '../layout/Layout';
import { reveal } from '../App';

const Gallery = (props) => {
  const [lightbox, setLightbox] = useState(false);
  const [image, setImage] = useState(null);
  const [fade, setFade] = useState('in');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onscroll = () => {
    reveal('.reveal-image', 100);
  };

  const getImg = (image) => {
    if (window.innerWidth > 600) {
      setImage(image);
      setFade('in');
      setLightbox(true);
    }
  };

  const changeImage = (newImage) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setFade('out');

    setTimeout(() => {
      setImage(newImage);

      requestAnimationFrame(() => {
        setFade('in');

        setTimeout(() => {
          setIsAnimating(false);
        }, 600);
      });
    }, 600);
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
    const point = document.getElementById('scroll-point');

    if (point) {
      point.scrollIntoView({ behavior: 'smooth' });
    }

    reveal('.reveal-image', 80);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.defaultPrevented) {
        return;
      }

      switch (event.key) {
        case 'Esc':
        case 'Escape':
          setLightbox(false);
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

        <div className="gallery__close" onClick={() => setLightbox(false)}>
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
        {props.series.images.map((image) => (
          <div className="gallery__item reveal-image" key={image.id} onClick={() => getImg(image)}>
            <img src={image.smallSrc} alt="img" className="gallery__image" />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Gallery;