import React, { useEffect, useRef, useState } from 'react'
import Layout from '../layout/Layout'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const formElement = useRef()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [messageLength, setMessageLength] = useState(0)

  const sendEmail = async (e) => { 
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = formElement.current.elements;

    const data = {
        name: formData.name.value,
        subject: formData.subject.value,
        email: formData.email.value,
        message: formData.message.value,
        website: formData.website.value
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
        const response = await fetch('https://bmftwyrzihotxnzagtutsalgtu0ujita.lambda-url.us-east-1.on.aws/', requestDetails);
        if(response.status === 200)
            alert('Form submitted succesfully!')
        else
            alert('Some error occured on the server')
    } catch(error) {
        alert('Error sending the form')
    } finally {
        setIsSubmitting(false);
    }

    e.target.reset()
    setMessageLength(0)
  };

  return (
    <Layout banner="contact">
        <div className='contact'>
            <img className='contact__image' src='img/contact/contact-half-circle.jpg' alt='circle-background' />
            <div className='contact__form-area'>
                <h1 className='contact__title'>contact</h1>
                <div className='vl'></div>

                <form className='form' autoComplete='off' ref={formElement} onSubmit={sendEmail} > 
                    <input
                        type='text'
                        name='website'
                        className='form__honeypot'
                        tabIndex={-1}
                        autoComplete='off'
                        aria-hidden={true}
                    />

                    <label htmlFor='form-name' className='form__label'>Please enter your name</label>
                    <input id='form-name' name='name' type='text' className='form__input' maxLength={100} required/>

                    <label htmlFor='form-subject' className='form__label'>Please enter the subject of your message</label>
                    <input id='form-subject' name='subject' type='text' className='form__input' maxLength={150} required/>

                    <label htmlFor='form-email' className='form__label'>Please enter a valid Email</label>
                    <input id='form-email' name='email' type='email' className='form__input' maxLength={200} required/>

                    <label htmlFor='form-message' className='form__label'>Please write your message here</label>
                    <textarea id='form-message' name='message' rows="10" col="80" className='form__textarea' maxLength={5000} onChange={(e) => setMessageLength(e.target.value.length)} required/>
                    <p className={messageLength >= 5000 ? 'form__limit form__limit--error' : 'form__limit'}>
                        {messageLength >= 5000 ? 'Message limit reached (5000 characters).' : `${messageLength} / 5000`}
                    </p>

                    <input type='submit' value={isSubmitting ? "..." : "Send"} className='form__submit' disabled={isSubmitting} />
                </form>
                
            </div>
        </div>
    </Layout>
  )
}

export default Contact