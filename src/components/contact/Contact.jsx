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

    emailjs.sendForm('service_khq4h2g', 'service_khq4h2g', form.current, 'QQMgqvgpKuaETFcBU')

    e.target.reset();
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


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
            <h5>chjaeik11@gmail.com</h5>
            <a href="mailto:chjaeik11@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>chjaeik11@gmail.com</h5>
            <a href="mailto:chjaeik11@gmail.com" target='_blank'>Send a message</a>
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