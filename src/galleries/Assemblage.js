// import sImage1 from '../img/collage/assemblage/small/assemblage_small (1).jpg';
// import sImage2 from '../img/collage/assemblage/small/assemblage_small (2).jpg';
// import sImage3 from '../img/collage/assemblage/small/assemblage_small (3).jpg';
// import sImage4 from '../img/collage/assemblage/small/assemblage_small (4).jpg';
// import sImage5 from '../img/collage/assemblage/small/assemblage_small (5).jpg';
// import sImage6 from '../img/collage/assemblage/small/assemblage_small (6).jpg';
// import sImage7 from '../img/collage/assemblage/small/assemblage_small (7).jpg';
// import sImage8 from '../img/collage/assemblage/small/assemblage_small (8).jpg';
// import sImage9 from '../img/collage/assemblage/small/assemblage_small (9).jpg';
// import sImage10 from '../img/collage/assemblage/small/assemblage_small (10).jpg';
// import sImage11 from '../img/collage/assemblage/small/assemblage_small (11).jpg';
// import sImage12 from '../img/collage/assemblage/small/assemblage_small (12).jpg';
// import sImage13 from '../img/collage/assemblage/small/assemblage_small (13).jpg';
// import sImage14 from '../img/collage/assemblage/small/assemblage_small (14).jpg';
// import sImage15 from '../img/collage/assemblage/small/assemblage_small (15).jpg';
// import sImage16 from '../img/collage/assemblage/small/assemblage_small (16).jpg';
// import sImage17 from '../img/collage/assemblage/small/assemblage_small (17).jpg';
// import sImage18 from '../img/collage/assemblage/small/assemblage_small (18).jpg';

// import bImage1 from '../img/collage/assemblage/big/assemblage_big (1).jpg'
// import bImage2 from '../img/collage/assemblage/big/assemblage_big (2).jpg'
// import bImage3 from '../img/collage/assemblage/big/assemblage_big (3).jpg'
// import bImage4 from '../img/collage/assemblage/big/assemblage_big (4).jpg'
// import bImage5 from '../img/collage/assemblage/big/assemblage_big (5).jpg'
// import bImage6 from '../img/collage/assemblage/big/assemblage_big (6).jpg'
// import bImage7 from '../img/collage/assemblage/big/assemblage_big (7).jpg'
// import bImage8 from '../img/collage/assemblage/big/assemblage_big (8).jpg'
// import bImage9 from '../img/collage/assemblage/big/assemblage_big (9).jpg'
// import bImage10 from '../img/collage/assemblage/big/assemblage_big (10).jpg';
// import bImage11 from '../img/collage/assemblage/big/assemblage_big (11).jpg';
// import bImage12 from '../img/collage/assemblage/big/assemblage_big (12).jpg';
// import bImage13 from '../img/collage/assemblage/big/assemblage_big (13).jpg';
// import bImage14 from '../img/collage/assemblage/big/assemblage_big (14).jpg';
// import bImage15 from '../img/collage/assemblage/big/assemblage_big (15).jpg';
// import bImage16 from '../img/collage/assemblage/big/assemblage_big (16).jpg';
// import bImage17 from '../img/collage/assemblage/big/assemblage_big (17).jpg';
// import bImage18 from '../img/collage/assemblage/big/assemblage_big (18).jpg';

import { assemblage } from '../img/collage/assemblage/assemblage'

import React from 'react'
import Gallery from '../pages/Gallery'

const Assemblage = () => {

  const AssemblageGallery = {
    title: "Assemblage",
    description: "Between 2D-3D",
    images: 
    [
      {
          id: 1,
          smallSrc: assemblage.small[1],
          bigSrc: assemblage.big[1]
      },
      {
          id: 2,
          smallSrc: assemblage.small[2],
          bigSrc: assemblage.big[2]
      },
      {
          id: 3,
          smallSrc: assemblage.small[3],
          bigSrc: assemblage.big[3]
      },
      {
          id: 4,
          smallSrc: assemblage.small[4],
          bigSrc: assemblage.big[4]
      },
      {
          id: 5,
          smallSrc: assemblage.small[5],
          bigSrc: assemblage.big[5]
      },
      {
          id: 6,
          smallSrc: assemblage.small[6],
          bigSrc: assemblage.big[6]
      },
      {
          id: 7,
          smallSrc: assemblage.small[7],
          bigSrc: assemblage.big[7]
      },
      {
          id: 8,
          smallSrc: assemblage.small[8],
          bigSrc: assemblage.big[8]
      },
      {
          id: 9,
          smallSrc: assemblage.small[9],
          bigSrc: assemblage.big[9]
      },
      {
          id: 10,
          smallSrc: assemblage.small[10],
          bigSrc: assemblage.big[10]
      },
      {
          id: 11,
          smallSrc: assemblage.small[11],
          bigSrc: assemblage.big[11]
      },
      {
          id: 12,
          smallSrc: assemblage.small[12],
          bigSrc: assemblage.big[12]
      },
      {
          id: 13,
          smallSrc: assemblage.small[13],
          bigSrc: assemblage.big[13]
      },
      {
          id: 14,
          smallSrc: assemblage.small[14],
          bigSrc: assemblage.big[14]
      },
      {
          id: 15,
          smallSrc: assemblage.small[15],
          bigSrc: assemblage.big[15]
      },
      {
          id: 16,
          smallSrc: assemblage.small[16],
          bigSrc: assemblage.big[16]
      },
      {
          id: 17,
          smallSrc: assemblage.small[17],
          bigSrc: assemblage.big[17]
      },
      {
          id: 18,
          smallSrc: assemblage.small[18],
          bigSrc: assemblage.big[18]
      }
    ]
  }

  return <Gallery grid="3" series={ AssemblageGallery } />
}

export default Assemblage