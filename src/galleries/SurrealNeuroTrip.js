import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const SurrealNeuroTrip = () => {
  const gallery = getGalleryBySlug('surreal-neuro-trip');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Surreal Neuro Trip',
        description: 'psychedalic line art',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default SurrealNeuroTrip;
