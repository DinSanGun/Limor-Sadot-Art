import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <img src={process.env.PUBLIC_URL + "/img/top-banner-colored.jpg"} alt="banner" className="header__img" />
        <h1 className="heading-1 header__title">Limor Sadot</h1>
    </header>
)
}

export default Header