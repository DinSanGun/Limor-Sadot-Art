import React from 'react'
import Navigation from './Navigation'

const Header = (props) => {
  return (
    <header className="header">
        <img src={process.env.PUBLIC_URL + props.banner} alt="banner" className="header__img" />
    </header>
)
}

export default Header