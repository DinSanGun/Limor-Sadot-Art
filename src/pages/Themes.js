import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Blocker from '../components/Blocker'
import Layout from '../layout/Layout'

const Themes = () => {

  const [fade, setFade] = useState(0)
  const navigate = useNavigate();

  window.scrollTo(0,0)
  

  return (
    <Layout banner="grey" className="black">

      <Blocker/>

      <img src='img/work/work-mobile-banner.jpg' alt="Themes banner" className='themes__mobile-banner'/>

      <div className='themes' fade={fade}>

          <figure className='themes__figure themes__figure--1'>
            <img src='img/work/big-circle-left.png' alt="collage theme" className="themes__image" 
                onClick={() => navigate('/collage')}
                />
            <figcaption className='themes__caption'>Collage &<br/>Mixed Media</figcaption>
          </figure>

        <figure className='themes__figure'>
          <img src='img/work/big-circle-right-color.png' alt="line art theme" 
            className="themes__image themes__image--1 fadeOut-class"
            onClick={() => navigate('/line-art')}
            onAnimationEnd={() => setFade(0)}
            />
          <figcaption className='themes__caption'>Line Art<br/>Illustration</figcaption>
        </figure>

      </div>

    </Layout>
  )
}

export default Themes