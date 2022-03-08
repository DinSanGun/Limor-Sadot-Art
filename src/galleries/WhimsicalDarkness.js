import sImage1 from '../img/collage/whimsical-darkness/small/01-sisterhood_s.jpg';
import sImage2 from '../img/collage/whimsical-darkness/small/02-new-territories_s.jpg';
import sImage3 from '../img/collage/whimsical-darkness/small/03-cradle-of-growth_big_s.jpg';
import sImage4 from '../img/collage/whimsical-darkness/small/04-yes-you-can_s.jpg';
import sImage5 from '../img/collage/whimsical-darkness/small/05-a-Seed_small.jpg';
import sImage6 from '../img/collage/whimsical-darkness/small/06-the-Prophecy_s.jpg';
import sImage7 from '../img/collage/whimsical-darkness/small/07-inner-child_s.jpg';
import sImage8 from '../img/collage/whimsical-darkness/small/08-A-Cup-of-tea_s.jpg';
import sImage9 from '../img/collage/whimsical-darkness/small/09-your-karma_s.jpg';
import sImage10 from '../img/collage/whimsical-darkness/small/10-the-owl_s.jpg';
import sImage11 from '../img/collage/whimsical-darkness/small/11-new-dawn_s.jpg';
import sImage12 from '../img/collage/whimsical-darkness/small/12-bird-of-paradise_s.jpg';
import sImage13 from '../img/collage/whimsical-darkness/small/13-the-shepherd_s.jpg';
import sImage14 from '../img/collage/whimsical-darkness/small/14-new-journey_s.jpg';
import sImage15 from '../img/collage/whimsical-darkness/small/15-sanctuary_s.jpg';
import sImage16 from '../img/collage/whimsical-darkness/small/16-gates-of-soul_s.jpg';
import sImage17 from '../img/collage/whimsical-darkness/small/17-busy-busy-queen_s.jpg';
import sImage18 from '../img/collage/whimsical-darkness/small/18-history-herstory_s.jpg';

import bImage1 from '../img/collage/whimsical-darkness/big/01-sisterhood_big.jpg';
import bImage2 from '../img/collage/whimsical-darkness/big/02-new-territiries_big_new.jpg';
import bImage3 from '../img/collage/whimsical-darkness/big/03-cradle of growth_big.jpg';
import bImage4 from '../img/collage/whimsical-darkness/big/04-yes you can_big_new.jpg';
import bImage5 from '../img/collage/whimsical-darkness/big/05-a-Seed_big.jpg';
import bImage6 from '../img/collage/whimsical-darkness/big/06-the-prophecy_big.jpg';
import bImage7 from '../img/collage/whimsical-darkness/big/07-inner-child_big.jpg';
import bImage8 from '../img/collage/whimsical-darkness/big/08-A-Cup-of tea_big.jpg';
import bImage9 from '../img/collage/whimsical-darkness/big/09-your-karma_big.jpg';
import bImage10 from '../img/collage/whimsical-darkness/big/10-the-owl_big.jpg';
import bImage11 from '../img/collage/whimsical-darkness/big/11-new dawn_big_new.jpg';
import bImage12 from '../img/collage/whimsical-darkness/big/12-bird-of-paradise_big.jpg';
import bImage13 from '../img/collage/whimsical-darkness/big/13-the shepherd_big_new.jpg';
import bImage14 from '../img/collage/whimsical-darkness/big/14-new-journey_big.jpg';
import bImage15 from '../img/collage/whimsical-darkness/big/15-sanctuary_big_new.jpg';
import bImage16 from '../img/collage/whimsical-darkness/big/16-gates-of-soul_big.jpg';
import bImage17 from '../img/collage/whimsical-darkness/big/17-busy busy queen_big_new.jpg';
import bImage18 from '../img/collage/whimsical-darkness/big/18-history-herstory_big.jpg';



import React from 'react'
import Gallery from '../pages/Gallery'

const WhimsicalDarkness = () => {

    const WhimsicalDarknessGallery = {
        title: "Whimsical Darkness",
        description: "analogue collage",
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

  return <Gallery grid="3" series={ WhimsicalDarknessGallery } />
}

export default WhimsicalDarkness