import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer';

const Layout = (props) => {

  let bannerSrc = ""
  switch(props.banner) {
    case 'color': bannerSrc = '/img/top-banners/banner-colored.jpg'; break;
    case 'grey': bannerSrc = '/img/top-banners/banner-grey.jpg'; break;
    case 'contact': bannerSrc = '/img/top-banners/banner-contact.jpg'; break;
    default: bannerSrc = '/img/top-banners/banner-colored.jpg';
  }

  return (
    <div className='layout'>
        <Header banner={bannerSrc} />
        <Navigation/> 
        <main className='layout__main'>{props.children}</main>
        <Footer/>
    </div>
  )
}

export default Layout