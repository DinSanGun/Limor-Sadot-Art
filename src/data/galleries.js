export const GALLERY_CATEGORIES = {
  COLLAGE: 'collage',
};

export const galleries = [
  {
    slug: 'wabi-sabi',
    title: 'Eternal Randomness',
    description: 'wabi Sabi - mixed media',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '3',
  },
  {
    slug: 'the-purple-era',
    title: 'The Purple Era',
    description: 'mixed media paintings',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '3',
  },
];

export const getGalleriesByCategory = (category) =>
  galleries.filter((g) => g.category === category);

export const getGalleryBySlug = (slug) =>
  galleries.find((g) => g.slug === slug);
