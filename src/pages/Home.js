import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

const Home = () => {

  return (
    <Layout banner="/img/banner-colored.jpg">
      <section className="introduction">
        <img src={process.env.PUBLIC_URL + 'img/half-circle.jpg'} className="introduction__top-image"/>
          <Link to="/work">
            <button className="introduction__btn">
              <span className="introduction__btn--1">Work</span>
              <span className="introduction__btn--2">Collage<br/>Mixed Media<br/>Illustration</span>
            </button>
        </Link>
        <p className="introduction__text">
            <span className="introduction__text--1">Whimsical darkness</span>
            <span className="introduction__text--2">is my special way</span>
            <span className="introduction__text--3">to force my light</span>
            <span className="introduction__text--4">to invite my shadow</span>
            <span className="introduction__text--5">for a dance</span>
            <span className="introduction__text--6">so I can refrain</span>
            <span className="introduction__text--7">from choosing</span>
            <span className="introduction__text--8">sides.</span>
        </p>
        <img src="img/main-bottom-sketch.jpg" className="introduction__bottom-image"/>
      </section>
    </Layout>
  )
}

export default Home