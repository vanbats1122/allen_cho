import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_khq4h2g', 'template_38pw6u9', form.current, 'xq1iWJNkKZ1YE0HH1')

    e.target.reset();
    alert("Message was sent successfully")
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>chjaeik11@gmail.com</h5>
            <a href="mailto:chjaeik11@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <a href="https://m.me/allen.c.cho" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+1(647)8334510</h5>
            <a href="https://api.whatsapp.com/send?phone=16478334510" target='_blank'>Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'required />
          <input type="email" name='email' placeholder='Your Email'required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button 
            type='submit' 
            className='btn btn-primary'
          >Send Message</button>
        </form>
      </div>
    </section>
  )
};

export default Contact;