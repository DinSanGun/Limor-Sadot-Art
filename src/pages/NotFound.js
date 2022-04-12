import React from 'react'
import Layout from '../layout/Layout'

const NotFound = () => {
  return (
    <Layout banner="color">
      <div className='notfound'>
        <img src='/img/not-found/face.jpg' alt='Not Found face' className='notfound__image'/>
        <h1 className='notfound__title'>Oops...</h1>
        <p className='notfound__text'>The page you we're looking for was not found!</p>
      </div>
    </Layout>
  )
}

export default NotFound