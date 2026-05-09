import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const WabiSabi = () => {
  const gallery = getGalleryBySlug('wabi-sabi');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Eternal Randomness',
        description: 'wabi Sabi - mixed media',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default WabiSabi;
