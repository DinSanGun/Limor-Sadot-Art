import sImage1 from '../img/pink-bloodlines/small/01-The Visionary_s.jpg';
import sImage2 from '../img/pink-bloodlines/small/02-The monarch_s.jpg';
import sImage3 from '../img/pink-bloodlines/small/03-The Shrewd Uncle_s.jpg';
import sImage4 from '../img/pink-bloodlines/small/04-Le Petit  Princess_s.jpg';
import sImage5 from '../img/pink-bloodlines/small/05-The Attractive Niece_S.jpg';
import sImage6 from '../img/pink-bloodlines/small/06-The Crown Prince_s.jpg';
import sImage7 from '../img/pink-bloodlines/small/07-Second Cousin_s.jpg';
import sImage8 from '../img/pink-bloodlines/small/08-The Head Butler_s.jpg';
import sImage9 from '../img/pink-bloodlines/small/09-The Black Ship_S.jpg';
import sImage10 from '../img/pink-bloodlines/small/10-The Busy Aunt_s.jpg';
import sImage11 from '../img/pink-bloodlines/small/11-The Family  Poet_s.jpg';
import sImage12 from '../img/pink-bloodlines/small/12-The Wise Queen_s.jpg';

import bImage1 from '../img/pink-bloodlines/big/01-The Visionary_big.jpg';
import bImage2 from '../img/pink-bloodlines/big/02-The Monarch_big.jpg';
import bImage3 from '../img/pink-bloodlines/big/03-The Shrewd Uncle_big.jpg';
import bImage4 from '../img/pink-bloodlines/big/04-Le Petit  Princess_big.jpg';
import bImage5 from '../img/pink-bloodlines/big/05-The Attractive Niece_big.jpg';
import bImage6 from '../img/pink-bloodlines/big/06-The Crown Prince_BIG.jpg';
import bImage7 from '../img/pink-bloodlines/big/07-Second Cousin_big.jpg';
import bImage8 from '../img/pink-bloodlines/big/08-The Head Butler_big.jpg';
import bImage9 from '../img/pink-bloodlines/big/09-The Black Ship_BIG.jpg';
import bImage10 from '../img/pink-bloodlines/big/10-The Busy Aunt_BIG.jpg';
import bImage11 from '../img/pink-bloodlines/big/11-The Family  Poet_BIG.jpg';
import bImage12 from '../img/pink-bloodlines/big/12-The Wise Queen_big.jpg';

import React from 'react'
import Gallery from '../layout/Gallery'

const PinkBloodlines = () => {

    const PinkBloodlinesGallery = {
        title: "Pink Bloodlines",
        description: "Mixed media collage",
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
            }
        ]
    }

  return <Gallery series={ PinkBloodlinesGallery } />
}

export default PinkBloodlines