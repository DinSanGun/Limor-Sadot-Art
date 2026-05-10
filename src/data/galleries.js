export const GALLERY_CATEGORIES = {
  COLLAGE: 'collage',
  LINE_ART: 'line-art',
};

export const galleries = [
  {
    slug: 'assemblage',
    title: 'Assemblage',
    description: 'Between 2D-3D',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '3',
  },
  {
    slug: 'botanical-wanders',
    title: 'Botanical Wanders',
    description: 'leafy bloomy dark collage',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '2',
  },
  {
    slug: 'dreamland-passport',
    title: 'The Dreamland Passport',
    description: 'digital collage',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '3',
  },
  {
    slug: 'falling-empires',
    title: 'Falling Empires',
    description: 'mixed media paintings',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '2',
  },
  {
    slug: 'liquid-thoughts',
    title: 'Liquid Thoughts',
    description: 'neuro art - mixed media',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '2',
  },
  {
    slug: 'pink-bloodlines',
    title: 'Pink Bloodlines',
    description: 'mixed media collage',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '3',
  },
  {
    slug: 'spiritual-path',
    title: 'On The Spiritual Path',
    description: 'mixed media collage',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '3',
  },
  {
    slug: 'storytelling-collage',
    title: 'Storytelling Collage',
    description: 'mixed media paintings',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '3',
  },
  {
    slug: 'the-japanese-window',
    title: 'The Japanese Window',
    description: 'digital collage',
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
  {
    slug: 'the-seeker',
    title: 'The Seeker',
    description: 'digital collage',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '2',
  },
  {
    slug: 'wabi-sabi',
    title: 'Eternal Randomness',
    description: 'wabi Sabi - mixed media',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '3',
  },
  {
    slug: 'whimsical-darkness',
    title: 'Whimsical Darkness',
    description: 'analogue paper collage',
    category: GALLERY_CATEGORIES.COLLAGE,
    grid: '3',
  },
  {
    slug: 'entangled-living',
    title: 'Entangled Living',
    description: 'ink sketches art book',
    category: GALLERY_CATEGORIES.LINE_ART,
    grid: '2',
  },
  {
    slug: 'families-diptychs-cold',
    title: 'Winter Colors Families',
    description: 'cold color markers diptychs',
    category: GALLERY_CATEGORIES.LINE_ART,
    grid: '3',
  },
  {
    slug: 'families-diptychs-warm',
    title: 'Summer Colors Families',
    description: 'warm color markers diptychs',
    category: GALLERY_CATEGORIES.LINE_ART,
    grid: '3',
  },
  {
    slug: 'floating-world',
    title: 'Pictures of the Floating World',
    description: 'digital Ukiyo-e inspired',
    category: GALLERY_CATEGORIES.LINE_ART,
    grid: '3',
  },
  {
    slug: 'human-kinda',
    title: 'Human Kinda',
    description: 'digital illustration',
    category: GALLERY_CATEGORIES.LINE_ART,
    grid: '3',
  },
  {
    slug: 'surreal-neuro-trip',
    title: 'Surreal Neuro Trip',
    description: 'psychedalic line art',
    category: GALLERY_CATEGORIES.LINE_ART,
    grid: '3',
  },
  {
    slug: 'the-human-lines',
    title: 'The Human Lines',
    description: 'intuitive line-art sketches',
    category: GALLERY_CATEGORIES.LINE_ART,
    grid: '3',
  },
  {
    slug: 'black-white-brown',
    title: 'B&W & Brown',
    description: 'black ink and old paper',
    category: GALLERY_CATEGORIES.LINE_ART,
    grid: '3',
  },
];

export const getGalleriesByCategory = (category) =>
  galleries.filter((g) => g.category === category);

export const getGalleryBySlug = (slug) =>
  galleries.find((g) => g.slug === slug);
