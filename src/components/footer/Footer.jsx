import React from 'react'
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className='footer__container'>
      <a href="#" className='footer__logo'>Allen</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#project'>Project</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><AiFillInstagram /></a>
        <a href="https://twitter.com"><AiFillTwitterCircle /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Allen Cho. All rights reserved</small>
      </div>
    </footer>
  )
};

export default Footer;