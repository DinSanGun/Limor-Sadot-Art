import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

const TheHumanLines = () => {
  const gallery = getGalleryBySlug('the-human-lines');
  const images = gallery ? getGalleryImages(gallery) : [];

  const series = gallery
    ? {
        title: gallery.title,
        description: gallery.description,
        images,
      }
    : {
        title: 'The Human Lines',
        description: 'intuitive line-art sketches',
        images,
      };

  return <Gallery grid={gallery?.grid ?? '3'} series={series} />;
};

export default TheHumanLines;
