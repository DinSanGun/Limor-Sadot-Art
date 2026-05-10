import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const HumanKinda = () => {
  const gallery = getGalleryBySlug('human-kinda');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Human Kinda',
        description: 'digital illustration',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default HumanKinda;
