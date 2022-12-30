import React from 'react';
import './about.css';
import Profile from '../../assets/profile.jpg';
import { FaSchool } from 'react-icons/fa';
import {AiFillBook, AiFillProject} from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Profile} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaSchool className='about__icon'/>
              <h5> Education </h5>
              <small>University of Toronto</small>
            </article>
            <article className='about__card'>
              <AiFillBook className='about__icon' />
              <h5> Skills </h5>
              <small>10+ development skills</small>
            </article>
            <article className='about__card'>
              <AiFillProject className='about__icon' />
              <h5> Projects </h5>
              <small>5+ projects</small>
            </article>
          </div>

          <p>
          After graduating high school in China, I moved to Toronto to study at University of Toronto. At the University of Toronto, I specialized in management and majored in finance. After succesfully completing the Bachelor degree program, I started learning about software engineering at Centennial College and Bootcamp. Through these programs, I was able to learn over 10 frontend and backend developing skills and create over 5 projects using the skills I newly attained.
          </p>

          {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>
      
      </section>
  )
};

export default About;