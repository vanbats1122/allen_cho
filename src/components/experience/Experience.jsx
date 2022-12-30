import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-_container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill 
              className='experience__details-icon'/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Tailwind Css</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>React JS</h4>
              <small className='text-light'>Experienced</small>
            </article>
        </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Next JS</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Express JS</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </article>
              
          </div>

        </div>
      </div>
    </section>
  )
};

export default Experience;