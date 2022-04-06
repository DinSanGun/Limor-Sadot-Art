import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer';

const Layout = (props) => {

  let bannerSrc = ""
  switch(props.banner) {
    case 'color': bannerSrc = '/img/banner-colored.jpg'; break;
    case 'grey': bannerSrc = '/img/banner-grey.jpg'; break;
    case 'contact': bannerSrc = '/img/banner-contact.jpg'; break;
    default: bannerSrc = '/img/banner-colored.jpg';
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