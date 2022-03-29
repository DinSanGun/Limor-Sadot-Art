import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton';
import Blocker from '../components/Blocker';
import Layout from '../layout/Layout'

const Gallery = (props) => {

  useEffect(() => {
    window.scrollTo({top: 100, behavior: 'smooth'})
  },[])

  const [lightbox, setLightbox] = useState(false);
  const [image, setImage] = useState('');
  const [fade, setFade] = useState('in');

  const getImg = (image) => {
      setImage(image);
      setLightbox(true);
  }

  const back = () => {
    if(image.id > 1){
      setFade('out')
      setTimeout(() => {
        setFade('in')
        setImage(props.series.images[image.id - 2])
      }
      ,600)
    }
  }

  const next = () => {
    if(image.id < props.series.images.length){
      setFade('out')
      setTimeout(() => {
        setFade('in')
        setImage(props.series.images[image.id])
      }, 600)
    }
  }
  

  useEffect(() => {
    window.addEventListener("keydown", function (event) {

      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
      // Cancel the default action to avoid it being handled twice

      switch (event.key) {
        case "Esc": // IE/Edge
        case "Escape": setLightbox(false); 
          break;
        default:
          return;
      }

      event.preventDefault();
    
    }, true);

  },[setLightbox])


    


  return (

    <Layout banner="/img/banner-grey.jpg">

        <Blocker/>
        <div className={lightbox ? "gallery__lightbox gallery__lightbox--open" : "gallery__lightbox"} >
        
          <div className="gallery__arrow-left" onClick={() => back()}>
            &nbsp;
          </div>

          <img src={ image.bigSrc } className={ fade === 'in' ? 'fadeIn-class' : 'fadeOut-class'} alt="Gallery item"/>

          <div className="gallery__close" onClick={() => setLightbox(false)}>
            <span className="gallery__x-mark">&nbsp;</span>
          </div> 

          <div className="gallery__arrow-right" onClick={() => next()}>
            &nbsp;
          </div>

        </div>

        <div className="gallery__header">

            <div className="gallery__back-btn">
              <BackButton/>
            </div>

            <h2 className='heading-2 gallery__title'>{props.series.title}</h2>
            <p className="gallery__description">{props.series.description}</p>

        </div>

        <div className={'gallery ' + (props.grid === "2" ? 'gallery--grid-2' : 'gallery--grid-3')}>

        {
            props.series.images.map((image) => {
                return(
                    <div className="gallery__item reveal" key={image.id} onClick={() => getImg(image)}>
                        <img src={image.smallSrc} alt="img" className="gallery__image" />
                    </div>
                )
            })
        }


      </div>
    </Layout>
  )
}

export default Gallery