import React from 'react'
import YouTubeVideo from '../components/YouTubeVideo'
import Layout from '../layout/Layout'

const Videos = () => {

  window.scrollTo(0,0)

  return (
    <Layout banner="grey">

      <div className='videos'>
        
        <div className='videos__item'>
          <h2 className='heading-2 videos__title'>Psychedelic Days</h2>
          <h5 className='heading-4'>An original art journal made in the qurantine days of 2020</h5>
          <YouTubeVideo link="https://www.youtube.com/embed/nt2idwDFzH0"/>
        </div>


        <div className='videos__item reveal'>
          <h2 className='heading-2 videos__title'>Wabi Sabi - Mixed Media</h2>
          <h5 className='heading-4'>A short demonstration of one work</h5>
          <YouTubeVideo link="https://www.youtube.com/embed/PUjYCkNugtg"/>
        </div>


        <div className='videos__item reveal'>
          <h2 className='heading-2 videos__title'>The Spiritual Trilogy 1</h2>
          <h5 className='heading-4'>A taste of spiritual collage course</h5>
          <YouTubeVideo link="https://www.youtube.com/embed/SxPdd_t_G-4"/>
        </div>


      </div>

      <div className='videos__footer'>
        &nbsp;{/* <img src="img/videos/videos-footer.jpg" alt="videos footer" /> */}
      </div>

    </Layout>
  )
}

export default Videos