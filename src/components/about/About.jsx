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
          I am a graduate of University of Toronto's Rotman School of Commerce with a major in finance and a specialization in management. I furthered my studies for software engineering at Centennial College and through various online bootcamps. Applying my newly acquired skills, I've created over 4 sample projects to showcase my frontend and backend developing skills. I am looking for opportunities to continue growing my skillset and to further challenge myself as a developer.
          </p>

          {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>
      
      </section>
  )
};

export default About;