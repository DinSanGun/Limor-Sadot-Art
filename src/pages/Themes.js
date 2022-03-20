import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Blocker from '../components/Blocker'
import Layout from '../layout/Layout'

const Themes = () => {

  const [fade, setFade] = useState(0)
  const navigate = useNavigate();

  setTimeout(() => {
    window.scrollTo({top: 150, behavior: 'smooth'})
  }, 1000)

  return (
    <Layout banner="grey" className="black">

      <Blocker/>

      <div className='themes' fade={fade}>

          <figure className='themes__figure themes__figure--1'>
            <img src={process.env.PUBLIC_URL + 'img/big-circle-left.png'} alt="theme-collage" className="themes__image" 
                onClick={() => navigate('/collage')}
                />
            <figcaption className='themes__caption'>Collage & mixed media</figcaption>
          </figure>

        <figure className='themes__figure'>
          <img src={process.env.PUBLIC_URL + 'img/big-circle-right.png'} alt="theme-line-art" 
            className="themes__image fadeOut-class"
            onClick={() => navigate('/line-art')}
            onAnimationEnd={() => setFade(0)}
            />
          <figcaption className='themes__caption'>Line art illustration</figcaption>
        </figure>

      </div>

    </Layout>
  )
}

export default Themes