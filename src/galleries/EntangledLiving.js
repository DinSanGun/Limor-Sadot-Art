import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const EntangledLiving = () => {
  const gallery = getGalleryBySlug('entangled-living');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Entangled Living',
        description: 'ink sketches art book',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '2'} series={series} />;
};

export default EntangledLiving;
