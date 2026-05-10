import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const FamilliesDiptychsWinter = () => {
  const gallery = getGalleryBySlug('families-diptychs-cold');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Winter Colors Families',
        description: 'cold color markers diptychs',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default FamilliesDiptychsWinter;
