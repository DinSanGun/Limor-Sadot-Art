import sImage1 from '../img/collage/assemblage/small/assemblage_small (1).jpg';
import sImage2 from '../img/collage/assemblage/small/assemblage_small (2).jpg';
import sImage3 from '../img/collage/assemblage/small/assemblage_small (3).jpg';
import sImage4 from '../img/collage/assemblage/small/assemblage_small (4).jpg';
import sImage5 from '../img/collage/assemblage/small/assemblage_small (5).jpg';
import sImage6 from '../img/collage/assemblage/small/assemblage_small (6).jpg';
import sImage7 from '../img/collage/assemblage/small/assemblage_small (7).jpg';
import sImage8 from '../img/collage/assemblage/small/assemblage_small (8).jpg';
import sImage9 from '../img/collage/assemblage/small/assemblage_small (9).jpg';
import sImage10 from '../img/collage/assemblage/small/assemblage_small (10).jpg';
import sImage11 from '../img/collage/assemblage/small/assemblage_small (11).jpg';
import sImage12 from '../img/collage/assemblage/small/assemblage_small (12).jpg';
import sImage13 from '../img/collage/assemblage/small/assemblage_small (13).jpg';
import sImage14 from '../img/collage/assemblage/small/assemblage_small (14).jpg';
import sImage15 from '../img/collage/assemblage/small/assemblage_small (15).jpg';
import sImage16 from '../img/collage/assemblage/small/assemblage_small (16).jpg';
import sImage17 from '../img/collage/assemblage/small/assemblage_small (17).jpg';
import sImage18 from '../img/collage/assemblage/small/assemblage_small (18).jpg';

import bImage1 from '../img/collage/assemblage/big/assemblage_big (1).jpg'
import bImage2 from '../img/collage/assemblage/big/assemblage_big (2).jpg'
import bImage3 from '../img/collage/assemblage/big/assemblage_big (3).jpg'
import bImage4 from '../img/collage/assemblage/big/assemblage_big (4).jpg'
import bImage5 from '../img/collage/assemblage/big/assemblage_big (5).jpg'
import bImage6 from '../img/collage/assemblage/big/assemblage_big (6).jpg'
import bImage7 from '../img/collage/assemblage/big/assemblage_big (7).jpg'
import bImage8 from '../img/collage/assemblage/big/assemblage_big (8).jpg'
import bImage9 from '../img/collage/assemblage/big/assemblage_big (9).jpg'
import bImage10 from '../img/collage/assemblage/big/assemblage_big (10).jpg';
import bImage11 from '../img/collage/assemblage/big/assemblage_big (11).jpg';
import bImage12 from '../img/collage/assemblage/big/assemblage_big (12).jpg';
import bImage13 from '../img/collage/assemblage/big/assemblage_big (13).jpg';
import bImage14 from '../img/collage/assemblage/big/assemblage_big (14).jpg';
import bImage15 from '../img/collage/assemblage/big/assemblage_big (15).jpg';
import bImage16 from '../img/collage/assemblage/big/assemblage_big (16).jpg';
import bImage17 from '../img/collage/assemblage/big/assemblage_big (17).jpg';
import bImage18 from '../img/collage/assemblage/big/assemblage_big (18).jpg';

// import { assemblage } from '../img/collage/assemblage/assemblage'

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
          smallSrc: sImage1,
          bigSrc: bImage1
      },
      {
          id: 2,
          smallSrc: sImage2,
          bigSrc: bImage2
      },
      {
          id: 3,
          smallSrc: sImage3,
          bigSrc: bImage3
      },
      {
          id: 4,
          smallSrc: sImage4,
          bigSrc: bImage4
      },
      {
          id: 5,
          smallSrc: sImage5,
          bigSrc: bImage5
      },
      {
          id: 6,
          smallSrc: sImage6,
          bigSrc: bImage6
      },
      {
          id: 7,
          smallSrc: sImage7,
          bigSrc: bImage7
      },
      {
          id: 8,
          smallSrc: sImage8,
          bigSrc: bImage8
      },
      {
          id: 9,
          smallSrc: sImage9,
          bigSrc: bImage9
      },
      {
          id: 10,
          smallSrc: sImage10,
          bigSrc: bImage10
      },
      {
          id: 11,
          smallSrc: sImage11,
          bigSrc: bImage11
      },
      {
          id: 12,
          smallSrc: sImage12,
          bigSrc: bImage12
      },
      {
          id: 13,
          smallSrc: sImage13,
          bigSrc: bImage13
      },
      {
          id: 14,
          smallSrc: sImage14,
          bigSrc: bImage14
      },
      {
          id: 15,
          smallSrc: sImage15,
          bigSrc: bImage15
      },
      {
          id: 16,
          smallSrc: sImage16,
          bigSrc: bImage16
      },
      {
          id: 17,
          smallSrc: sImage17,
          bigSrc: bImage17
      },
      {
          id: 18,
          smallSrc: sImage18,
          bigSrc: bImage18
      }
    ]
  }

  return <Gallery grid="3" series={ AssemblageGallery } />
}

export default Assemblage