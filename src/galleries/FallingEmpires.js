import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const FallingEmpires = () => {
  const gallery = getGalleryBySlug('falling-empires');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Falling Empires',
        description: 'mixed media paintings',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '2'} series={series} />;
};

export default FallingEmpires;
