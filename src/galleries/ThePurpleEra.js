import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const ThePurpleEra = () => {
  const gallery = getGalleryBySlug('the-purple-era');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'The Purple Era',
        description: 'mixed media paintings',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default ThePurpleEra;
