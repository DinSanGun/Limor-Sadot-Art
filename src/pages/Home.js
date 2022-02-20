import React from 'react'
import Layout from '../layout/Layout'

const Home = () => {
  return (
    <Layout>
      <section className="introduction">
        <img src={process.env.PUBLIC_URL + 'img/half-circle.jpg'} className="introduction__top-image"/>
        <button className="introduction__btn">all
            works
        </button>
        <p className="introduction__text">
            Whimsical darkness
            is my way to force
            my light to invite
            my shadow for 
            a dance so I can 
            refrain from
            choosing sides
        </p>
        <img src="img/main-bottom-sketch.jpg" className="introduction__bottom-image"/>
      </section>
    </Layout>
  )
}

export default Home