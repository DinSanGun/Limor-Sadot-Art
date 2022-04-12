import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Blocker from '../components/Blocker'
import Layout from '../layout/Layout'

const Themes = () => {

  const [fade, setFade] = useState(0)
  const navigate = useNavigate();

  window.scrollTo({top: 0, behavior: 'smooth'})

  setTimeout(() => {
    const nav = document.getElementById('navbar')
    nav.scrollIntoView(true)
  }, 1000)

  return (
    <Layout banner="grey" className="black">

      <Blocker/>

      <img src='img/mobile-home-banner.jpg' alt="Themes banner" className='themes__mobile-banner'/>

      <div className='themes' fade={fade}>

          <figure className='themes__figure themes__figure--1'>
            <img src={process.env.PUBLIC_URL + 'img/big-circle-left.png'} alt="collage theme" className="themes__image" 
                onClick={() => navigate('/collage')}
                />
            <figcaption className='themes__caption'>Collage &<br/>mixed media</figcaption>
          </figure>

        <figure className='themes__figure'>
          <img src={process.env.PUBLIC_URL + 'img/big-circle-right.png'} alt="line art theme" 
            className="themes__image fadeOut-class"
            onClick={() => navigate('/line-art')}
            onAnimationEnd={() => setFade(0)}
            />
          <figcaption className='themes__caption'>Line art<br/>illustration</figcaption>
        </figure>

      </div>

    </Layout>
  )
}

export default Themes