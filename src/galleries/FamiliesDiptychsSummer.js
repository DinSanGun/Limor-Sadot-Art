import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const FamilliesDiptychsSummer = () => {
  const gallery = getGalleryBySlug('families-diptychs-warm');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Summer Colors Families',
        description: 'warm color markers diptychs',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default FamilliesDiptychsSummer;
