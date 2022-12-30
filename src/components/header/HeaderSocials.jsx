import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/allen-cho-981458a9/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/vanbats1122" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com/chjaeik11" target="_blank"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials