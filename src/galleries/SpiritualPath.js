import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const SpiritualPath = () => {
  const gallery = getGalleryBySlug('spiritual-path');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'On The Spiritual Path',
        description: 'mixed media collage',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default SpiritualPath;
