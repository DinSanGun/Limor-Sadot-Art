import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className='layout'>
        <Header/>
        <Navigation/> 
        <main>{props.children}</main>
        <Footer/>
    </div>
  )
}

export default Layout