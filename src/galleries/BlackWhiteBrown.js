import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const BlackWhiteBrown = () => {
  const gallery = getGalleryBySlug('black-white-brown');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'B&W & Brown',
        description: 'black ink and old paper',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default BlackWhiteBrown;
