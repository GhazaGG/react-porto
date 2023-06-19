import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pwztfoo', 'template_z7pejbp', form.current, '2BEfOoplm_-gd-8US')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
          alert("Error Message")
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <artiicle className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ghazagg7@gmail.com</h5>
            <a href="mailto:ghazagg7@gmail.com">Send a message</a>
          </artiicle>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>


    </section>
  )
}

export default Contact