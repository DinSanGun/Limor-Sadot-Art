/**
 * Loads standardized collage gallery images from `src/img/collage/<slug>/small|big/`.
 * `gallery.slug` must match the folder name (e.g. `wabi-sabi`, `the-purple-era`).
 */

const IMAGE_EXT_RE = /\.(jpe?g|png|webp)$/i;

const collageImagesContext = require.context(
  '../img/collage',
  true,
  /\.(jpe?g|png|webp)$/i
);

/** Reject slugs that could escape the intended collage subfolder. */
const isSafeSlug = (slug) => typeof slug === 'string' && /^[a-z0-9-]+$/i.test(slug);

const numericSortValue = (fileName) => {
  const base = fileName.replace(IMAGE_EXT_RE, '');
  const match = base.match(/^(\d+)/);
  if (!match) return 0;
  const n = parseInt(match[1], 10);
  return Number.isFinite(n) ? n : 0;
};

const sortSmallKeysNaturally = (smallKeys, getFileName) =>
  [...smallKeys].sort((a, b) => {
    const fa = getFileName(a);
    const fb = getFileName(b);
    const na = numericSortValue(fa);
    const nb = numericSortValue(fb);
    if (na !== nb) return na - nb;
    return fa.localeCompare(fb, undefined, { numeric: true, sensitivity: 'base' });
});

const buildBigSrcByFileName = (allKeys, bigPrefix, resolve) => {
  const map = new Map();
  for (const key of allKeys) {
    if (!key.startsWith(bigPrefix)) continue;
    const name = key.slice(bigPrefix.length);
    if (!name || name.includes('/')) continue;
    try {
      map.set(name, resolve(key));
    } catch {
      // Skip unreadable entries; keep loader defensive.
    }
  }
  return map;
};

/**
 * @param {{ slug?: string } | null | undefined} gallery - Metadata object (e.g. from galleries.js).
 * @returns {{ id: number; smallSrc: string; bigSrc: string }[]}
 */
export const getGalleryImages = (gallery) => {
  if (!gallery || typeof gallery !== 'object') return [];

  const slug = typeof gallery.slug === 'string' ? gallery.slug.trim() : '';
  if (!slug || !isSafeSlug(slug)) return [];

  const smallPrefix = `./${slug}/small/`;
  const bigPrefix = `./${slug}/big/`;

  let allKeys;
  try {
    allKeys = collageImagesContext.keys();
  } catch {
    return [];
  }

  const keysList = Array.isArray(allKeys) ? [...allKeys] : [...allKeys];
  const smallKeys = keysList.filter(
    (k) => k.startsWith(smallPrefix) && !k.slice(smallPrefix.length).includes('/')
  );

  if (!smallKeys.length) return [];

  const getSmallFileName = (key) => key.slice(smallPrefix.length);
  const sortedSmallKeys = sortSmallKeysNaturally(smallKeys, getSmallFileName);
  const bigByName = buildBigSrcByFileName(keysList, bigPrefix, (key) =>
    collageImagesContext(key)
  );

  const out = [];
  let index = 0;

  for (const smallKey of sortedSmallKeys) {
    const fileName = getSmallFileName(smallKey);
    const bigSrc = bigByName.get(fileName);
    if (bigSrc == null) continue;

    let smallSrc;
    try {
      smallSrc = collageImagesContext(smallKey);
    } catch {
      continue;
    }

    index += 1;
    out.push({
      id: index,
      smallSrc,
      bigSrc,
    });
  }

  return out;
};
