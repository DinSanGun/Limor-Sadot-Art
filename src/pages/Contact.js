import React, { useRef } from 'react'
import Layout from '../layout/Layout'

const Contact = () => {
    
    window.scrollTo(0,0)

    const formElement = useRef()

  const sendEmail = async (e) => { 
    e.preventDefault();

    const formData = formElement.current.elements;

    const data = {
        name: formData.name.value,
        subject: formData.subject.value,
        email: formData.email.value,
        message: formData.message.value
    };

    const requestDetails = {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    };

    try{
        const response = await fetch('https://limorsadot.link/email', requestDetails);
        console.log(response)
        if(response.status === 200)
            alert('Form submitted succesfully!')
        else
            alert('Some error occured on the server')
    } catch(error) {
        alert('Error sending the form')
    }

    e.target.reset()
  };

  return (
    <Layout banner="contact">
        <div className='contact'>
            <img className='contact__image' src='img/contact/contact-half-circle.jpg' alt='circle-background' />
            <div className='contact__form-area'>
                <h1 className='contact__title'>contact</h1>
                <div className='vl'></div>

                <form className='form' autoComplete='off' ref={formElement} onSubmit={sendEmail} > 

                    <label htmlFor='form-name' className='form__label'>Please enter your name</label>
                    <input id='form-name' name='name' type='text' className='form__input' required/>

                    <label htmlFor='form-subject' className='form__label'>Please enter the subject of your message</label>
                    <input id='form-subject' name='subject' type='text' className='form__input' required/>

                    <label htmlFor='form-email' className='form__label'>Please enter a valid Email</label>
                    <input id='form-email' name='email' type='email' className='form__input' required/>

                    <label htmlFor='form-message' className='form__label'>Please write your message here</label>
                    <textarea id='form-message' name='message' rows="10" col="80" className='form__textarea' required/>

                    <input type='submit' value="Send" className='form__submit' />
                </form>
                
            </div>
        </div>
    </Layout>
  )
}

export default Contact