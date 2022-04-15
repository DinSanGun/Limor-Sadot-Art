import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import BackButton from '../components/BackButton'
import Blocker from '../components/Blocker'

const LineArtSeries = () => {

    useEffect(() => {
        var point = document.getElementById('scroll-point')
        point.scrollIntoView({behavior: 'smooth'})
    }, [])

    return (
    <Layout banner="grey">
        <Blocker/>
        
        <div className="series">

            <div id='scroll-point' className='series__top'>
                <div className='series__back-btn'>
                    <BackButton/>
                </div>

                <h2 className='heading-2 series__heading'>Line Art Illustration</h2>
            </div>



            <div className='series__grid'>

                <Link to='/the-human-lines' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--1' alt='series #3' src="/img/series-icons/line-art/the-human-lines_button.png" />
                        <figcaption className='series__caption'>The Human Lines</figcaption>
                    </figure>
                </Link>
                
                <Link to='/human-kinda' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--2' alt='Human Kinda' src="/img/series-icons/line-art/human-kinda_button.png" />
                        <figcaption className='series__caption'>Human Kinda</figcaption>
                    </figure>
                </Link>

                <Link to='/B&W-&-Brown' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--3' alt='B&W & Brown' src="/img/series-icons/line-art/bw-and-brown_button.png" />
                        <figcaption className='series__caption'>B&W & Brown</figcaption>
                    </figure> 
                </Link>

                <Link to='/pictures-of-the-floating-world' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--4' alt='Pictures of the floating world - ukiyo e' src="/img/series-icons/line-art/floating-world_button.png" />
                        <figcaption className='series__caption'>Pictures of the Floating World</figcaption>
                    </figure>
                </Link>

                <Link to='/entangled-living' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--5' alt='Entangled living' src="/img/series-icons/line-art/entangled_button.png" />
                        <figcaption className='series__caption'>Entangled Living</figcaption>
                    </figure>
                </Link>

                <Link to='/surreal-neuro-trip' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--6' alt='Surreal Neuro art trip' src="/img/series-icons/line-art/surreal_button.png" />
                        <figcaption className='series__caption'>Surreal Neuro Trip</figcaption>
                    </figure> 
                </Link>

                <Link to='/families-diptychs-summer' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--7' alt='Families diptychs Summer' src="/img/series-icons/line-art/summer_button.png" />
                        <figcaption className='series__caption'>Families diptychs - Summer</figcaption>
                    </figure> 
                </Link>

                <Link to='/families-diptychs-winter' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--8' alt='Families diptychs Winter' src="/img/series-icons/line-art/winter_button.png" />
                        <figcaption className='series__caption'>Families diptychs - Winter</figcaption>
                    </figure>
                </Link>
         
            </div>
        </div>
    </Layout>
    )
}

export default LineArtSeries