import Gallery from '../pages/Gallery';

const smallImagesContext = require.context(
  '../img/collage/whimsical-darkness/small',
  false,
  /\.jpg$/
);

const bigImagesContext = require.context(
  '../img/collage/whimsical-darkness/big',
  false,
  /\.jpg$/
);

const extractImageNumber = (fileName) => {
  const match = fileName.match(/^\.\/(\d+)/);
  return match ? Number(match[1]) : 0;
};

const sortImages = (a, b) => {
  return extractImageNumber(a) - extractImageNumber(b);
};

const smallImages = smallImagesContext.keys().sort(sortImages);
const bigImages = bigImagesContext.keys().sort(sortImages);

const WhimsicalDarknessGallery = {
  title: 'Whimsical Darkness',
  description: 'analogue paper collage',

  images: smallImages.map((smallImagePath, index) => ({
    id: index + 1,
    smallSrc: smallImagesContext(smallImagePath),
    bigSrc: bigImagesContext(bigImages[index]),
  })),
};

const WhimsicalDarkness = () => {
  return <Gallery grid="3" series={WhimsicalDarknessGallery} />;
};

export default WhimsicalDarkness;