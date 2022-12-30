import React, {useState} from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';


const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState('');
  return (
    <nav>
      <a href="#"
      onClick={() => setActiveNavbar('#')} 
      className={activeNavbar === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNavbar('#about')}
      className={activeNavbar === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNavbar('#experience')} className={activeNavbar === '#experience' ? 'active': ''}><BiBook/></a>
      <a href="#project" onClick={() => setActiveNavbar('#project')} className={activeNavbar === '#project' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNavbar('#contact')} className={activeNavbar === '#contact' ? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
};

export default Navbar;