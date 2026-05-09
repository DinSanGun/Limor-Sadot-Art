import Gallery from '../pages/Gallery';
import { getGalleryBySlug } from '../data/galleries';
import { getGalleryImages } from '../data/galleryImages';

/**
 * Renders a collage gallery from metadata in src/data/galleries.js.
 * @param {{ slug: string }} props
 */
const GalleryPage = ({ slug }) => {
  const gallery = typeof slug === 'string' ? getGalleryBySlug(slug) : undefined;

  if (!gallery) {
    return <p>Gallery not found.</p>;
  }

  const images = getGalleryImages(gallery);
  const series = {
    title: gallery.title,
    description: gallery.description,
    images,
  };

  return <Gallery grid={gallery.grid ?? '3'} series={series} />;
};

export default GalleryPage;
