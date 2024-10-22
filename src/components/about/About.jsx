import React from 'react';
import './about.css';
import ME from '../../assets/IMG_0277.jpg';
import { FaAward } from 'react-icons/fa';
import { GoGoal } from "react-icons/go";
import { GrProjects } from "react-icons/gr";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year IT Cybersecurity and 3 Years Forensic Biology</small>
            </article>

            <article className='about__card'>
              <GoGoal className='about__icon' />
              <h5>Current Goals</h5>
              <small>Specializing in Cybersecurity, Internship Opportunities</small>
            </article>

            <article className='about__card'>
              <GrProjects className='about__icon' />
              <h5>Projects</h5>
              <small>Research on Java Testing with EvoSuite</small>
            </article>

          </div>

          <p>
            Hi, I'm Valentina! I'm an Information Technology student specializing in Cybersecurity at Kean University. I am passionate about leveraging technology to enhance security and protect digital information.
          </p>

          <p>
            I am currently pursuing a B.S. in Information Technology with a focus on Cybersecurity, maintaining a GPA of 3.9. Some of my courses include Network Technology, Web Client-Side Programming, and IT Database Management Systems.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
