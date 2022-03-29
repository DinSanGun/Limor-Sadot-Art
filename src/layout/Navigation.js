import React from 'react'
import { NavLink } from 'react-router-dom'


const Navigation = () => {

  const activeClass = (nav) => {
    return (nav.isActive ? "navigation__link-active" : "navigation__link")
    // const link = "navigation__link"
    // const active = "navigation__link-active"
    // if(nav.isActive)
    //   return active
    // else
    //   return link
  }

  return (
    <nav className="navigation">
      <h1 className="heading-1 navigation__title">Limor Sadot</h1>

      <ul id="navbar" className="navigation__list">
        <li className="navigation__item"><NavLink to="/home" className={(navData) => activeClass(navData)}>home</NavLink></li>
        <li className="navigation__item"><NavLink to="/work" className={(navData) => activeClass(navData)}>work</NavLink></li>
        <li className="navigation__item"><NavLink to="/about" className={(navData) => activeClass(navData)}>about</NavLink></li>
        <li className="navigation__item"><NavLink to="/contact" className={(navData) => activeClass(navData)}>contact</NavLink></li>
        {/* <li className="navigation__item"><NavLink to="#" className="navigation__link">shop</NavLink></li> */}
        <li className="navigation__item">
          <a href="https://www.instagram.com/limor_sadot/"><img src="img/social-media/instagram-logo.png" alt="instagram" className='navigation__social-media-icon'/></a>
          <a href="https://www.facebook.com/limor.sadot"><img src="img/social-media/facebook-logo.png" alt="facebook" className='navigation__social-media-icon'/></a>          
          <a href="https://www.pinterest.com/limisan/"><img src="img/social-media/pinterest-logo.png" alt="pinterest" className='navigation__social-media-icon navigation__social-media-icon--3'/></a>
        </li>
      </ul>
  </nav>
  )
}

export default Navigation