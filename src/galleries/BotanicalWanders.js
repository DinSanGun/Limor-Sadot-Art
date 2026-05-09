import sImage1  from '../img/collage/botanical-wanders/small/01-botanicollage001A_small.jpg'
import sImage2  from '../img/collage/botanical-wanders/small/01-botanicollage002A_small.jpg'
import sImage3  from '../img/collage/botanical-wanders/small/01-botanicollage003A_small.jpg'
import sImage4  from '../img/collage/botanical-wanders/small/01-botanicollage004A_small.jpg'
import sImage5  from '../img/collage/botanical-wanders/small/01-botanicollage005A_small.jpg'
import sImage6  from '../img/collage/botanical-wanders/small/01-botanicollage006A_small.jpg'
import sImage7  from '../img/collage/botanical-wanders/small/01-botanicollage007A_small.jpg'
import sImage8  from '../img/collage/botanical-wanders/small/01-botanicollage008A_small.jpg'
import sImage9  from '../img/collage/botanical-wanders/small/01-botanicollage009A_small.jpg'
import sImage10 from '../img/collage/botanical-wanders/small/01-botanicollage010A_small.jpg'
import sImage11 from '../img/collage/botanical-wanders/small/01-botanicollage011A_small.jpg'
import sImage12 from '../img/collage/botanical-wanders/small/01-botanicollage012A_small.jpg'

import bImage1  from '../img/collage/botanical-wanders/big/01-botanicollage001A_big.jpg'
import bImage2  from '../img/collage/botanical-wanders/big/01-botanicollage002A_big.jpg'
import bImage3  from '../img/collage/botanical-wanders/big/01-botanicollage003A_big.jpg'
import bImage4  from '../img/collage/botanical-wanders/big/01-botanicollage004A_big.jpg'
import bImage5  from '../img/collage/botanical-wanders/big/01-botanicollage005A_big.jpg'
import bImage6  from '../img/collage/botanical-wanders/big/01-botanicollage006A_big.jpg'
import bImage7  from '../img/collage/botanical-wanders/big/01-botanicollage007A_big.jpg'
import bImage8  from '../img/collage/botanical-wanders/big/01-botanicollage008A_big.jpg'
import bImage9  from '../img/collage/botanical-wanders/big/01-botanicollage009A_big.jpg'
import bImage10 from '../img/collage/botanical-wanders/big/01-botanicollage010A_big.jpg'
import bImage11 from '../img/collage/botanical-wanders/big/01-botanicollage011A_big.jpg'
import bImage12 from '../img/collage/botanical-wanders/big/01-botanicollage012A_big.jpg'

import Gallery from '../pages/Gallery'

const BotanicalWanders = () => {

    const BotanicalWandersGallery = {
        title: "Botanical Wanders",
        description: "leafy bloomy dark collage",
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

  return <Gallery grid="2" series={ BotanicalWandersGallery } />
}

export default BotanicalWanders