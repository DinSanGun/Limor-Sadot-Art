import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const BotanicalWanders = () => {
  const gallery = getGalleryBySlug('botanical-wanders');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Botanical Wanders',
        description: 'leafy bloomy dark collage',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '2'} series={series} />;
};

export default BotanicalWanders;
