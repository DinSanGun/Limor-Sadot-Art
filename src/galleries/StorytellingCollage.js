import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const StorytellingCollage = () => {
  const gallery = getGalleryBySlug('storytelling-collage');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'Storytelling Collage',
        description: 'mixed media paintings',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default StorytellingCollage;
