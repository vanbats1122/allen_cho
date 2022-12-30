import React from 'react';
import './header.css';
import CTA from './CTA'
import Profile from '../../assets/hero-image.png';
import HeaderScoial from './HeaderSocials';
import { useTypewriter } from 'react-simple-typewriter';


const Header = () => {
  
  const [text] = useTypewriter({
    words: [
      "Hi, My name is Allen",
      "I am  a Fullstack Developer",
      "< Designer . Builder. Innovator / >"
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <header className='header'>
      <div className="container header__container">
        <h2>{text}</h2>
        <CTA />
        <HeaderScoial />

        <div className="me">
          <img src={Profile} alt='softwareengineer' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
};

export default Header;