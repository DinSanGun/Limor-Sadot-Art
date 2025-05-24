import React from 'react'
import { Link } from 'react-router-dom'


const OpeningScreen = () => {

  return (
    <div className='opening'>
        <div className='opening__name-box'>
                <h1 className='heading-1' class="notranslate">
                    <Link to='/home'>
                        Limor Sadot
                    </Link>
                </h1>
        </div>
    </div>
  )
}

export default OpeningScreen