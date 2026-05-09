import Gallery from '../pages/Gallery';

const smallImagesContext = require.context(
  '../img/collage/wabi-sabi/small',
  false,
  /\.(png|jpe?g|webp)$/
);

const bigImagesContext = require.context(
  '../img/collage/wabi-sabi/big',
  false,
  /\.(png|jpe?g|webp)$/
);

const extractImageNumber = (fileName) => {
  const match = fileName.match(/\((\d+)\)/);
  return match ? Number(match[1]) : 0;
};

const sortImages = (a, b) => {
  return extractImageNumber(a) - extractImageNumber(b);
};

const smallImages = smallImagesContext.keys().sort(sortImages);
const bigImages = bigImagesContext.keys().sort(sortImages);

const WabiSabiGallery = {
  title: 'Eternal Randomness',
  description: 'wabi Sabi - mixed media',

  images: smallImages.map((smallImagePath, index) => ({
    id: index + 1,
    smallSrc: smallImagesContext(smallImagePath),
    bigSrc: bigImagesContext(bigImages[index]),
  })),
};

const WabiSabi = () => {
  return <Gallery grid="3" series={WabiSabiGallery} />;
};

export default WabiSabi;