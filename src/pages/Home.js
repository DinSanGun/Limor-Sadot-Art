import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

const Home = () => {

  
  window.scrollTo(0,0)

  setTimeout(() => {
    var point = document.getElementById('scroll-point')
    point.scrollIntoView({behavior: 'smooth'})
  }, 7500)

  return (
    <Layout banner="color">

      <img src='img/home/mobile-home-banner.jpg' className='introduction__top-banner' alt="Collage art circle"/>

      <section className="introduction">
        
        <div className='introduction__top-image'>
          <img src='img/home/home-half-circle.jpg' className='introduction__top-image--1' alt="Collage art circle"/>
        </div>

        <p className="introduction__text">
            <span className="introduction__text--1">Whimsical darkness</span>
            <span className="introduction__text--2">is my special way</span>
            <span id="scroll-point" className="introduction__text--3">to force my light</span>
            <span className="introduction__text--4">to invite my shadow</span>
            <span className="introduction__text--5">for a dance</span>
            <span className="introduction__text--6">so I can refrain</span>
            <span className="introduction__text--7">from choosing</span>
              <span className="flex-wrap">
                <span className="introduction__text--8">
                  sides
                </span>
                <span className="introduction__text--dot">.</span>
              </span>
            </p>

            <button className="introduction__btn">
              <Link to="/work">
              <span className="introduction__btn--1">Work</span>
              <span className="introduction__btn--2">Collage<hr className='introduction__hr'/>Illustration</span>
              </Link>
            </button>

        <img src="img/home/home-bottom-sketch.jpg" className="introduction__bottom-image" alt="Line art sketch"/>
      </section>
    </Layout>
  )
}

export default Home