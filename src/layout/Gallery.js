import React, { useState } from 'react'
import Layout from '../layout/Layout'

const Gallery = (props) => {

  const [single, setSingle] = useState(false);
  const [image, setImage] = useState('');
  const [fade, setFade] = useState('in');

  const getImg = (image) => {
      setImage(image);
      setSingle(true);
  }

  const back = () => {
    if(image.id > 1){
      setFade('out')
      setTimeout(() => {
        setFade('in')
        setImage(props.series.images[image.id - 2])
      }
      ,800)
    }
  }

  const next = () => {
    if(image.id < props.series.images.length){
      setFade('out')
      setTimeout(() => {
        setFade('in')
        setImage(props.series.images[image.id])
      }, 1000)
    }
  }


  return (

    <Layout banner="/img/banner-grey.jpg">

        <div className={single ? "gallery__single gallery__single--open" : "gallery__single"} >
        
          <div className="gallery__arrow-left" onClick={() => back()}>
            &nbsp;
          </div>

          <img src={ image.bigSrc } className={ fade === 'in' ? 'fadeIn-class' : 'fadeOut-class'}/>

          <div className="gallery__close" onClick={() => setSingle(false)}>
            <span className="gallery__x-mark">&nbsp;</span>
          </div> 

          <div className="gallery__arrow-right" onClick={() => next()}>
            &nbsp;
          </div>

        </div>

        <div className="gallery__header">

            <div className="gallery__back-btn">
              <span className="gallery__back-sign">
                &#9664;
              </span>
            </div>

            <h2 className='heading-2 gallery__title'>{props.series.title}</h2>
            <p className="gallery__description">{props.series.description}</p>

        </div>

        <div className='gallery'>

        {
            props.series.images.map((image) => {
                return(
                    <div class="gallery__item reveal" key={image.id} onClick={() => getImg(image)}>
                        <img src={image.smallSrc} alt="img" class="gallery__image" />
                    </div>
                )
            })
        }


      </div>
    </Layout>
  )
}

export default Gallery