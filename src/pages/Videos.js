import React from 'react'
import YouTubeVideo from '../components/YouTubeVideo'
import Layout from '../layout/Layout'

const Videos = () => {
  return (
    <Layout>

      <div className='videos'>
        
        <div className='videos__item'>
          <h2 className='videos__title'>Psychedelic Days</h2>
          <p className='videos__description'>An original art journal made in the qurantine days of 2020</p>
          <YouTubeVideo link="https://www.youtube.com/embed/nt2idwDFzH0"/>
        </div>


        <div className='videos__item'>
          <h2 className='videos__title'>Wabi Sabi - Mixed Media</h2>
          <p className='videos__description'>A short demonstration of one work</p>
          <YouTubeVideo link="https://www.youtube.com/embed/PUjYCkNugtg"/>
        </div>


      </div>

      <img src="img/videos/videos-footer.jpg" alt="videos footer" className='videos__footer' />

    </Layout>
  )
}

export default Videos