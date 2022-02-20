import React from 'react'
import Layout from '../layout/Layout'

const Gallery = () => {
  return (
    <Layout>

      <div className='gallery__themes'>

        <figure>
          <img src={process.env.PUBLIC_URL + 'img/big-circle-left.png'} alt="theme-collage" />
          <figcaption>Collage & mixed media</figcaption>
        </figure>

        <figure>
          <img src={process.env.PUBLIC_URL + 'img/big-circle-right.png'} alt="theme-line-art" />
          <figcaption>Line art illustration</figcaption>
        </figure>
        
      </div>

    </Layout>
  )
}

export default Gallery