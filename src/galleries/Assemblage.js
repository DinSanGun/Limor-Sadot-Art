import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const Assemblage = () => {
  const gallery = getGalleryBySlug('assemblage');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Assemblage',
        description: 'Between 2D-3D',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default Assemblage;
