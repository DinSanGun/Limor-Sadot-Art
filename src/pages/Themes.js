import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

const Themes = () => {

  const linkTo = (url) => {
    setTimeout(() => { window.location = url }, 1500)
  }

  window.scrollTo(0,0)

  setTimeout(() => {
    window.scrollTo({top: 150, behavior: 'smooth'})
  }, 1500)

  return (
    <Layout banner="/img/banner-grey.jpg">

      <div className='themes'>

        {/* <Link to="/collage" className="link"> */}
          <figure className='themes__figure themes__figure--1'>
            <img src={process.env.PUBLIC_URL + 'img/big-circle-left.png'} alt="theme-collage" className="themes__image" onClick={() => {linkTo('/collage')}}/>
            <figcaption className='themes__caption'>Collage & mixed media</figcaption>
          </figure>
        {/* </Link> */}

        <figure className='themes__figure'>
          <img src={process.env.PUBLIC_URL + 'img/big-circle-right.png'} alt="theme-line-art" className="themes__image"/>
          <figcaption className='themes__caption'>Line art illustration</figcaption>
        </figure>

      </div>

    </Layout>
  )
}

export default Themes