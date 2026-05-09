import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const LiquidThoughts = () => {
  const gallery = getGalleryBySlug('liquid-thoughts');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Liquid Thoughts',
        description: 'neuro art - mixed media',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '2'} series={series} />;
};

export default LiquidThoughts;
