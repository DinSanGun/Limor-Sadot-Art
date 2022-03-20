import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import BackButton from '../components/BackButton'
import Blocker from '../components/Blocker'

const LineArtSeries = () => {
    return (
    <Layout banner="grey">
        <Blocker/>
        
        <div className="series">

            <div className='series__back-btn'>
                <BackButton/>
            </div>

            <h2 className='heading-2 series__heading'>Line Art Illustration</h2>

            <div className='series__grid'>

                <Link to='/the-human-lines' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--1' alt='series #3' src="/img/series-icons/line-art/the-human-lines_button.png" />
                        <figcaption className='series__caption'>The Human Lines</figcaption>
                    </figure>
                </Link>
                
                <Link to='/human-kinda' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--2' alt='series #1' src="/img/series-icons/line-art/human-kinda_button.png" />
                        <figcaption className='series__caption'>Human Kinda</figcaption>
                    </figure>
                </Link>

                <Link to='/B&W-&-Brown' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--3' alt='series #6' src="/img/series-icons/line-art/bw-and-brown_button.png" />
                        <figcaption className='series__caption'>B&W & Brown</figcaption>
                    </figure> 
                </Link>

                <Link to='/pictures-of-the-floating-world' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--4' alt='series #2' src="/img/series-icons/line-art/floating-world_button.png" />
                        <figcaption className='series__caption'>Pictures of the Floating World</figcaption>
                    </figure>
                </Link>

                <Link to='/entangled-living' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--5' alt='series #8' src="/img/series-icons/line-art/entangled_button.png" />
                        <figcaption className='series__caption'>Entangled Living</figcaption>
                    </figure>
                </Link>

                <Link to='/surreal-neuro-trip' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--6' alt='series #7' src="/img/series-icons/line-art/surreal_button.png" />
                        <figcaption className='series__caption'>Surreal Neuro Trip</figcaption>
                    </figure> 
                </Link>

                <Link to='/families-diptychs-summer' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--7' alt='series #5' src="/img/series-icons/line-art/summer_button.png" />
                        <figcaption className='series__caption'>Families diptychs - Summer</figcaption>
                    </figure> 
                </Link>

                <Link to='/families-diptychs-winter' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--8' alt='series #4' src="/img/series-icons/line-art/winter_button.png" />
                        <figcaption className='series__caption'>Families diptychs - Winter</figcaption>
                    </figure>
                </Link>
         
            </div>
        </div>
    </Layout>
    )
}

export default LineArtSeries