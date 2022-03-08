import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className='layout'>
        <Header banner={props.banner === 'color' ? '/img/banner-colored.jpg' : '/img/banner-grey.jpg'}/>
        <Navigation/> 
        <main>{props.children}</main>
        <Footer/>
    </div>
  )
}

export default Layout