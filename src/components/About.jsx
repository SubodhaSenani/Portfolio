import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/images/about.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Subodha Senani" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p className="intro">
            Hi, I'm <span className="highlight">Subodha Senani</span>. A passionate front-end developer who loves
            crafting elegant and interactive web experiences using modern technologies.
          </p>

          {/* Personal Details Section */}
          <div className="personal-details">
            <h3>Personal Details</h3>
            <ul>
              <li><strong>Name:</strong> Subodha Senani Senarathna</li>
              <li><strong>Age:</strong> 23 Years</li>
              <li><strong>Status:</strong> Unmarried</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <h3>My Skills</h3>
            <div className="skill-tags">
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>React TS</span>
              <span>Tailwind CSS</span>
              <span>Bootstrap</span>
              <span>WordPress</span>
              <span>UI Design</span>
            </div>
          </div>

          <p className="description">
            I specialize in building responsive, user-focused websites with a balance
            of creativity and functionality. My focus is on writing clean, maintainable
            code and delivering designs that truly stand out.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
