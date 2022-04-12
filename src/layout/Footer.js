import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">

        <div className='footer__social'>
            <a href="https://www.instagram.com/limor_sadot/" target="_blank" rel="noopener noreferrer" className='footer__social-circle'><img src="img/social-media/instagram-logo.png" alt="instagram" className='footer__social-icon'/></a>
            <a href="https://www.facebook.com/limor.sadot" target="_blank" rel="noopener noreferrer" className='footer__social-circle'><img src="img/social-media/facebook-logo.png" alt="facebook" className='footer__social-icon'/></a>          
            <a href="https://www.pinterest.com/limisan/" target="_blank" rel="noopener noreferrer" className='footer__social-circle'><img src="img/social-media/pinterest-logo.png" alt="pinterest" className='footer__social-icon'/></a>
        </div>

        <p className="footer__text">
            &copy; 2022 Limor Sadot. All rights reserved. 
        </p>
    </footer>  )
}

export default Footer