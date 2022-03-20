import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import BackButton from '../components/BackButton'
import Blocker from '../components/Blocker'

const Series = () => {

    return (
    <Layout banner="grey" className="series__layout">
        <Blocker/>
        <div className="series">

            <div className='series__back-btn'>
                <BackButton/>
            </div>

            <h2 className='heading-2 series__heading'>Collage & Mixed Media</h2>

            <div className='series__grid'>
                
                <Link to='/whimsical-darkness' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--1' alt='series #1' src="/img/series-icons/collage/whimsical-darkness_button.png" />
                        <figcaption className='series__caption'>Whimsical Darkness</figcaption>
                    </figure>
                </Link>


                <Link to='/storytelling-collage' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--2' alt='series #2' src="/img/series-icons/collage/storytelling-collage_button.png" />
                        <figcaption className='series__caption'>Storytelling Collage</figcaption>
                    </figure> 
                </Link>

                <Link to='/eternal-randomness' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--3' alt='series #3' src="/img/series-icons/collage/eternal-randomness_button.png" />
                        <figcaption className='series__caption'>Eternal Randomness Wabi-Sabi</figcaption>
                    </figure> 
                </Link> 

                <Link to='/spiritual-path' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--4' alt='series #4' src="/img/series-icons/collage/on-the-spiritual-path_button.png" />
                        <figcaption className='series__caption'>On the Spiritual Path</figcaption>
                    </figure>
                </Link>

                <Link to='/the-japanese-window' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--5' alt='series #5' src="/img/series-icons/collage/the-japanese-window_button.png" />
                        <figcaption className='series__caption'>The Japanese Window</figcaption>
                    </figure> 
                </Link>

                <Link to='/liquid-thoughts' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--6' alt='series #6' src="/img/series-icons/collage/liquid-thoughts_button.png" />
                        <figcaption className='series__caption'>Liquid Thoughts</figcaption>
                    </figure> 
                </Link>
                
                <Link to='/falling-empires' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--7' alt='series #7' src="/img/series-icons/collage/falling-empires_button.png" />
                        <figcaption className='series__caption'>Falling Empires</figcaption>
                    </figure> 
                </Link>

                <Link to='/the-seeker' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--8' alt='series #8' src="/img/series-icons/collage/the-seeker_button.png" />
                        <figcaption className='series__caption'>The Seeker</figcaption>
                    </figure>
                </Link>

                <Link to='/assemblage' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--9' alt='series #9' src="/img/series-icons/collage/assemblage_button.png" />
                        <figcaption className='series__caption'>Assemblage</figcaption>
                    </figure>
                </Link>
                
                <Link to='/dreamland-passport' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--10' alt='series #10' src="/img/series-icons/collage/a-passport-to-dreamland_button.png" />
                        <figcaption className='series__caption'>A Passport to Dreamland</figcaption>
                    </figure>
                </Link>
                
                <Link to='/the-purple-era' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--11' alt='series #11' src="/img/series-icons/collage/the-purple-era_button.png" />
                        <figcaption className='series__caption'>The Purple Era</figcaption>
                    </figure>
                </Link>
                
                <Link to='/pink-bloodlines' className='link'>
                    <figure className='series__item'>
                        <img className='series__icon series__icon--12' alt='series #12' src="/img/series-icons/collage/pink-blooodlines_button.png" />
                        <figcaption className='series__caption'>Pink Bloodlines</figcaption>
                    </figure>
                </Link>
                
                
            </div>
        </div>
    </Layout>
    )
}

export default Series