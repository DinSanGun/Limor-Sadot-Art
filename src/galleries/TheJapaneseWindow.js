import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const TheJapaneseWindow = () => {
  const gallery = getGalleryBySlug('the-japanese-window');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'The Japanese Window',
        description: 'digital collage',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default TheJapaneseWindow;
