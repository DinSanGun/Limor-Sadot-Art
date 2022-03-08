import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import BackButton from '../components/BackButton'

const LineArtSeries = () => {
    return (
    <Layout banner="grey">
        <div className="series">

            <div className='series__back-btn'>
                <BackButton/>
            </div>

            <h2 className='heading-2 series__heading'>Line Art Illustration</h2>

            <div className='series__grid'>
                
                <Link to='/human-kinda' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #1' src="/img/series-icons/01-whimsical_darkness_button.png" />
                        <figcaption className='series__caption'>Human Kinda</figcaption>
                    </figure>
                </Link>

                <Link to='/pictures-of-the-floating-world' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #2' src="/img/series-icons/02-storytelling_collage_button.png" />
                        <figcaption className='series__caption'>Pictures of the Floating World</figcaption>
                    </figure>
                </Link>

                <Link to='/the-human-lines' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #3' src="/img/series-icons/03-eternal_randomness_button.png" />
                        <figcaption className='series__caption'>The Human Lines</figcaption>
                    </figure>
                </Link>

                <Link to='/families-diptychs-winter' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #4' src="/img/series-icons/04-on_the_spiritual_path_button.png" />
                        <figcaption className='series__caption'>Families diptychs - Winter</figcaption>
                    </figure>
                </Link>

                <Link to='/families-diptychs-summer' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #5' src="/img/series-icons/05-the_japanese_window_button.png" />
                        <figcaption className='series__caption'>Families diptychs - Summer</figcaption>
                    </figure> 
                </Link>

                <Link to='/B&W-&-Brown' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #6' src="/img/series-icons/06-liquid_thoughts_button.png" />
                        <figcaption className='series__caption'>B&W & Brown</figcaption>
                    </figure> 
                </Link>

                <Link to='/surreal-neuro-trip' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #7' src="/img/series-icons/07-falling_empires_button.png" />
                        <figcaption className='series__caption'>Surreal Neuro Trip</figcaption>
                    </figure> 
                </Link>

                <Link to='/entangled-living' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #8' src="/img/series-icons/08-the_seeker_button.png" />
                        <figcaption className='series__caption'>Entangled Living</figcaption>
                    </figure>
                </Link>
         
            </div>
        </div>
    </Layout>
    )
}

export default LineArtSeries