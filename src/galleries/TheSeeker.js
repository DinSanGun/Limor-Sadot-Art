import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const TheSeeker = () => {
  const gallery = getGalleryBySlug('the-seeker');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'The Seeker',
        description: 'digital collage',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '2'} series={series} />;
};

export default TheSeeker;
