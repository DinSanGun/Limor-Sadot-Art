import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

const Home = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})

  setTimeout(() => {
    var point = document.getElementById('scroll-point')
    point.scrollIntoView({behavior: 'smooth'})
  }, 7500)

  return (
    <Layout banner="color">
      <section className="introduction">
        <img src={process.env.PUBLIC_URL + 'img/half-circle.jpg'} className="introduction__top-image" alt="Home page background top"/>
          <Link to="/work">
            <button className="introduction__btn">
              <span className="introduction__btn--1">Work</span>
              <span className="introduction__btn--2">Collage<hr className='introduction__hr'/>Illustration</span>
            </button>
        </Link>
        <p className="introduction__text">
            <span id="scroll-point" className="introduction__text--1">Whimsical darkness</span>
            <span className="introduction__text--2">is my special way</span>
            <span className="introduction__text--3">to force my light</span>
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
        <img src="img/main-bottom-sketch.jpg" className="introduction__bottom-image" alt="Home page background bottom"/>
      </section>
    </Layout>
  )
}

export default Home