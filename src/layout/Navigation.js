import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item"><NavLink to="#" className="navigation__link">home</NavLink></li>
        <li className="navigation__item"><NavLink to="/work" className="navigation__link">work</NavLink></li>
        <li className="navigation__item"><NavLink to="#" className="navigation__link">about</NavLink></li>
        <li className="navigation__item"><NavLink to="#" className="navigation__link">contact</NavLink></li>
        <li className="navigation__item"><NavLink to="#" className="navigation__link">shop</NavLink></li>

        <li className="navigation__social-media">
            {/* <svg class="navigation__icon">
                <use xlink:href="/img/sprite.svg#instagram"></use>
            </svg>
            <svg class="navigation__icon">
                <use xlink:href="/img/sprite.svg#facebook"></use>
            </svg>
            <svg class="navigation__icon">
                <use xlink:href="/img/sprite.svg#pinterest"></use>
            </svg> */}
        </li>
      </ul>
  </nav>
  )
}

export default Navigation