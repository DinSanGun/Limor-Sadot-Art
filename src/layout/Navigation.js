import React from 'react'
import { NavLink } from 'react-router-dom'


const Navigation = () => {

  const activeClass = (nav) => {
    return (nav.isActive ? "navigation__link-active" : "navigation__link")
  }

  return (
    <nav className="navigation">

      <h1 className="heading-1 navigation__title"><a href="/home">Limor Sadot</a></h1>

      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <ul id="navbar" className="navigation__list">

        <li className="navigation__item"><NavLink to="/home" className={(navData) => activeClass(navData)}>home</NavLink></li>
        <li className="navigation__item"><NavLink to="/work" className={(navData) => activeClass(navData)}>work</NavLink></li>
        <li className="navigation__item"><NavLink to="/about" className={(navData) => activeClass(navData)}>about</NavLink></li>
        <li className="navigation__item"><NavLink to="/videos" className={(navData) => activeClass(navData)}>videos</NavLink></li>
        <li className="navigation__item"><NavLink to="/contact" className={(navData) => activeClass(navData)}>contact</NavLink></li>
        <li className="navigation__item"><a href="https://www.redbubble.com/people/Limor-Sadot/shop" className="navigation__link" target="_blank" rel="noopener noreferrer">shop</a></li>

        <li className="navigation__item">
          <a href="https://www.instagram.com/limor_sadot/" target="_blank" rel="noopener noreferrer"><img src="img/social-media/instagram-logo.png" alt="instagram" className='navigation__social-media'/></a>
          <a href="https://www.instagram.com/limor_sadot/" target="_blank" rel="noopener noreferrer"><img src="img/social-media/insta-purple.png" alt="instagram" className='navigation__social-media--mobile'/></a>
          <a href="https://www.facebook.com/limor.sadot" target="_blank" rel="noopener noreferrer"><img src="img/social-media/facebook-logo.png" alt="facebook" className='navigation__social-media'/></a>          
          <a href="https://www.facebook.com/limor.sadot" target="_blank" rel="noopener noreferrer"><img src="img/social-media/fb-purple.png" alt="facebook" className='navigation__social-media--mobile'/></a>          
          <a href="https://www.pinterest.com/limisan/" target="_blank" rel="noopener noreferrer"><img src="img/social-media/pinterest-logo.png" alt="pinterest" className='navigation__social-media navigation__social-media--3'/></a>
          <a href="https://www.pinterest.com/limisan/" target="_blank" rel="noopener noreferrer"><img src="img/social-media/pinterest-purple.png" alt="pinterest" className='navigation__social-media--mobile navigation__social-media--mobile--3'/></a>

        </li>
      </ul>
  </nav>
  )
}

export default Navigation