import sImage1 from '../img/falling-empires/small/falling-empires_small (1).jpg';
import sImage2 from '../img/falling-empires/small/falling-empires_small (2).jpg';
import sImage3 from '../img/falling-empires/small/falling-empires_small (3).jpg';
import sImage4 from '../img/falling-empires/small/falling-empires_small (4).jpg';
import sImage5 from '../img/falling-empires/small/falling-empires_small (5).jpg';
import sImage6 from '../img/falling-empires/small/falling-empires_small (6).jpg';
import sImage7 from '../img/falling-empires/small/falling-empires_small (7).jpg';
import sImage8 from '../img/falling-empires/small/falling-empires_small (8).jpg';
import sImage9 from '../img/falling-empires/small/falling-empires_small (9).jpg';
import sImage10 from '../img/falling-empires/small/falling-empires_small (10).jpg';
import sImage11 from '../img/falling-empires/small/falling-empires_small (11).jpg';
import sImage12 from '../img/falling-empires/small/falling-empires_small (12).jpg';
import sImage13 from '../img/falling-empires/small/falling-empires_small (13).jpg';
import sImage14 from '../img/falling-empires/small/falling-empires_small (14).jpg';

import bImage1 from '../img/falling-empires/big/falling-empires_big (1).jpg';
import bImage2 from '../img/falling-empires/big/falling-empires_big (2).jpg';
import bImage3 from '../img/falling-empires/big/falling-empires_big (3).jpg';
import bImage4 from '../img/falling-empires/big/falling-empires_big (4).jpg';
import bImage5 from '../img/falling-empires/big/falling-empires_big (5).jpg';
import bImage6 from '../img/falling-empires/big/falling-empires_big (6).jpg';
import bImage7 from '../img/falling-empires/big/falling-empires_big (7).jpg';
import bImage8 from '../img/falling-empires/big/falling-empires_big (8).jpg';
import bImage9 from '../img/falling-empires/big/falling-empires_big (9).jpg';
import bImage10 from '../img/falling-empires/big/falling-empires_big (10).jpg';
import bImage11 from '../img/falling-empires/big/falling-empires_big (11).jpg';
import bImage12 from '../img/falling-empires/big/falling-empires_big (12).jpg';
import bImage13 from '../img/falling-empires/big/falling-empires_big (13).jpg';
import bImage14 from '../img/falling-empires/big/falling-empires_big (14).jpg';

import React from 'react'
import Gallery from '../layout/Gallery'

const FallingEmpires = () => {

    const FallingEmpiresGallery = {
        title: "Falling Empires",
        description: "mixed media paintings",
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
            }
        ]
    }

  return <Gallery grid="2" series={ FallingEmpiresGallery } />
}

export default FallingEmpires