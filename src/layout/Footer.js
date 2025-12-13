import React from 'react'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">

        <div className='footer__social'>
            <a href="https://www.instagram.com/limor_sadot/" target="_blank" rel="noopener noreferrer"><img src="img/social-media/insta-purple.png" alt="instagram" className='footer__social-icon'/></a>
            <a href="https://www.facebook.com/limor.sadot" target="_blank" rel="noopener noreferrer"><img src="img/social-media/fb-purple.png" alt="facebook" className='footer__social-icon'/></a>          
            <a href="https://www.pinterest.com/limisan/" target="_blank" rel="noopener noreferrer"><img src="img/social-media/pinterest-purple.png" alt="pinterest" className='footer__social-icon footer__social-icon--3'/></a>
        </div>

        <p className="footer__text">
            &copy; {currentYear} Limor Sadot. All rights reserved. 
        </p>
    </footer>  )
}

export default Footer