import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

const Home = () => {

  useEffect(() => {
    
    window.scrollTo(0,0)

    if(window.innerWidth > 600) {
      setTimeout(() => {
      var point = document.getElementById('scroll-point')
      point.scrollIntoView({behavior: 'smooth'})
      }, 7500)
    }

    else {
      setTimeout(() => {
        window.scrollTo({
          top: 250,
          behavior: 'smooth'
        })
        }, 3500)
    }
  
  }, [])
  

  return (
    <Layout banner="color">

      <img src='img/home/mobile-home-banner.jpg' className='introduction__top-banner' alt="Collage art circle"/>

      <section className="introduction">
        
        <div className='introduction__top-image'>
          <img src='img/home/home-half-circle.jpg' className='introduction__top-image--1' alt="Collage art circle"/>
        </div>

        <p className="introduction__text">
            <span className="introduction__text--1" class="notranslate">Whimsical darkness</span>
            <span className="introduction__text--2" class="notranslate">is my special way</span>
            <span id="scroll-point" className="introduction__text--3" class="notranslate">to force my light</span>
            <span className="introduction__text--4" class="notranslate">to invite my shadow</span>
            <span className="introduction__text--5" class="notranslate">for a dance</span>
            <span className="introduction__text--6" class="notranslate">so I can refrain</span>
            <span className="introduction__text--7" class="notranslate">from choosing</span>
              <span className="flex-wrap">
                <span className="introduction__text--8" class="notranslate">
                  sides
                </span>
                <span className="introduction__text--dot">.</span>
              </span>
            </p>

            <button className="introduction__btn">
              <Link to="/work">
              <span className="introduction__btn--1" class="notranslate">Work</span>
              <span className="introduction__btn--2" class="notranslate">Collage<hr className='introduction__hr'/>Illustration</span>
              </Link>
            </button>

        <img src="img/home/home-bottom-sketch.jpg" className="introduction__bottom-image" alt="Line art sketch"/>
      </section>
    </Layout>
  )
}

export default Home