import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import BackButton from '../components/BackButton'

const Series = () => {

    return (
    <Layout banner="grey" className="series__layout">
        <div className="series">

            <div className='series__back-btn'>
                <BackButton/>
            </div>

            <h2 className='heading-2 series__heading'>Collage & mixed media</h2>

            <div className='series__grid'>
                
                <Link to='/whimsical-darkness' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #1' src="/img/series-icons/01-whimsical_darkness_button.png" />
                        <figcaption className='series__caption'>Whimsical Darkness</figcaption>
                    </figure>
                </Link>


                <Link to='/storytelling-collage' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #2' src="/img/series-icons/02-storytelling_collage_button.png" />
                        <figcaption className='series__caption'>Storytelling Collage</figcaption>
                    </figure> 
                </Link>

                <Link to='/eternal-randomness' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #3' src="/img/series-icons/03-eternal_randomness_button.png" />
                        <figcaption className='series__caption'>Eternal Randomness</figcaption>
                    </figure> 
                </Link> 

                <Link to='/spiritual-path' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #4' src="/img/series-icons/04-on_the_spiritual_path_button.png" />
                        <figcaption className='series__caption'>On the Spiritual Path</figcaption>
                    </figure>
                </Link>

                <Link to='/the-japanese-window' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #5' src="/img/series-icons/05-the_japanese_window_button.png" />
                        <figcaption className='series__caption'>The Japanese Window</figcaption>
                    </figure> 
                </Link>

                <Link to='/liquid-thoughts' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #6' src="/img/series-icons/06-liquid_thoughts_button.png" />
                        <figcaption className='series__caption'>Liquid Thoughts</figcaption>
                    </figure> 
                </Link>
                
                <Link to='/falling-empires' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #7' src="/img/series-icons/07-falling_empires_button.png" />
                        <figcaption className='series__caption'>Falling Empires</figcaption>
                    </figure> 
                </Link>

                <Link to='/the-seeker' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #8' src="/img/series-icons/08-the_seeker_button.png" />
                        <figcaption className='series__caption'>The Seeker</figcaption>
                    </figure>
                </Link>

                <Link to='/assemblage' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #9' src="/img/series-icons/09-assemblage_button.png" />
                        <figcaption className='series__caption'>Assemblage</figcaption>
                    </figure>
                </Link>
                
                <Link to='/dreamland-passport' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #10' src="/img/series-icons/10-a_passport_to_dreamland_button.png" />
                        <figcaption className='series__caption'>A Passport to Dreamland</figcaption>
                    </figure>
                </Link>
                
                <Link to='/the-purple-era' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #11' src="/img/series-icons/11-the_purple_era_button.png" />
                        <figcaption className='series__caption'>The Purple Era</figcaption>
                    </figure>
                </Link>
                
                <Link to='/pink-bloodlines' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon' alt='series #12' src="/img/series-icons/12-pink_bloodlines_button.png" />
                        <figcaption className='series__caption'>Pink Bloodlines</figcaption>
                    </figure>
                </Link>
                
                
            </div>
        </div>
    </Layout>
    )
}

export default Series