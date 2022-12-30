import React from 'react'
import ProjectOne from '../../assets/project-1.png';
import ProjectTwo from '../../assets/project-2.png';
import ProjectThree from '../../assets/project-3.png';
import ProjectFour from '../../assets/project-4.png';


import './project.css';

const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className="container project__container">
        <article className='project__item'>
          <div className="project__item-image">
            <img src={ProjectOne} alt='project1'/>
          </div>
          <h3>This is an ecommerce shop website</h3>
          <div className="project__item-cta">
            <a href="https://github.com/vanbats1122/ecommerce" className='btn' target='_blank'>Github</a>
            <a href="https://youtu.be/LJFXcIMQr_8" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={ProjectTwo} alt='project2'/>
          </div>
          <h3>This is a delievery sample website </h3>
          <div className="project__item-cta">
            <a href="https://github.com/vanbats1122/delievery" 
              className='btn' 
              target='_blank'>
                Github</a>
            <a href="https://youtu.be/3zzXvvSVBVM" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={ProjectThree} alt='project3'/>
          </div>
          <h3>This is a sample exercise website</h3>
          <div className="project__item-cta">
            <a href="https://github.com/vanbats1122/exercise" className='btn' target='_blank'>Github</a>
            <a href="https://youtu.be/BXcXNBFrcdY" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={ProjectFour} alt='project4'/>
          </div>
          <h3>This is a sample admin board</h3>
          <div className="project__item-cta">
            <a href="https://github.com/vanbats1122/adminboard" className='btn' target='_blank'>Github</a>
            <a href="https://youtu.be/3YqYVt6gNFI" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
       
      </div>
    </section>
  )
};

export default Project;