import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const FloatingWorld = () => {
  const gallery = getGalleryBySlug('floating-world');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Pictures of the Floating World',
        description: 'digital Ukiyo-e inspired',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default FloatingWorld;
