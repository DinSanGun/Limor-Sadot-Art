import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'

const Themes = () => {

  const [fade, setFade] = useState(0)
  const navigate = useNavigate();

  setTimeout(() => {
    window.scrollTo({top: 150, behavior: 'smooth'})
  }, 1000)

  return (
    <Layout banner="grey" className="black">

      <div className='themes' fade={fade}>

          <figure className='themes__figure themes__figure--1'>
            <img src={process.env.PUBLIC_URL + 'img/big-circle-left.png'} alt="theme-collage" className="themes__image" 
                onClick={
                  () => {
                    setFade(1)
                    setTimeout(() => navigate('/collage'), 1000)
                  } 
                }
                />
            <figcaption className='themes__caption'>Collage & mixed media</figcaption>
          </figure>

        <figure className='themes__figure'>
          <img src={process.env.PUBLIC_URL + 'img/big-circle-right.png'} alt="theme-line-art" 
            className="themes__image fadeOut-class"
            onClick={
                  () => {
                    setFade(2)
                    setTimeout(() => navigate('/line-art'), 1000)
                  } 
                }
            onAnimationEnd={() => setFade(0)}
            />
          <figcaption className='themes__caption'>Line art illustration</figcaption>
        </figure>

      </div>

    </Layout>
  )
}

export default Themes