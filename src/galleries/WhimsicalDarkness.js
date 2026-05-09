import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const WhimsicalDarkness = () => {
  const gallery = getGalleryBySlug('whimsical-darkness');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Whimsical Darkness',
        description: 'analogue paper collage',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default WhimsicalDarkness;
