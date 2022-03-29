import React, { useRef } from 'react'
import Layout from '../layout/Layout'
import emailjs from '@emailjs/browser';

const Contact = () => {

    window.scrollTo(0,0)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, window.process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, window.process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
          alert("Message sent succesfuly!");
      }, (error) => {
          alert("Some error occured!");
      });

      e.target.reset()
  };

  return (
    <Layout banner="contact">
        <div className='contact'>
            <img className='contact__image' src='img/half-circle-contact.jpg' alt='circle-background' />
            <div className='contact__form-area'>
                <h1 className='contact__title'>contact</h1>
                <div className='vl'></div>
                <form className='form' autoComplete='off' ref={form} onSubmit={sendEmail}>

                    <label htmlFor='form-name' className='form__label'>Please enter your name</label>
                    <input id='form-name' name='name' type='text' className='form__input' />

                    <label htmlFor='form-subject' className='form__label'>Please enter the subject of your message</label>
                    <input id='form-subject' name='subject' type='text' className='form__input' />

                    <label htmlFor='form-email' className='form__label'>Please enter a valid Email</label>
                    <input id='form-email' name='email' type='email' className='form__input' />

                    <label htmlFor='form-message' className='form__label'>Please write your message here</label>
                    <textarea id='form-message' name='message' rows="10" col="80" className='form__textarea' />

                    <input type='submit' value="send" className='form__submit' />
                </form>

                <button onClick={() => console.log(process)} >HEYA</button>

            </div>
        </div>
    </Layout>
  )
}

export default Contact