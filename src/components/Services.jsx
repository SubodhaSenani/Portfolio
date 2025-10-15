import React from 'react';
import '../styles/Services.css';
import frontendIcon from '../assets/services/fDev.png';
import wordpressIcon from '../assets/services/wpDev.png';
import uiuxIcon from '../assets/services/ui.png';

function Services() {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-container fade-in">
          <h2>My Services</h2>
          <p className="services-intro">
            I deliver creative, scalable, and high-performing web solutions with a focus on
            clean design and seamless user experiences.
          </p>

          <div className="services-grid">
            <div className="service-card slide-up">
              <div className="icon-wrapper">
                <img src={frontendIcon} alt="Frontend Development" />
              </div>
              <h3>Frontend Development</h3>
              <p>
                I develop responsive, high-performing web interfaces using
                <strong> React, JavaScript, HTML, CSS, and Bootstrap</strong>,
                ensuring a seamless user experience across all devices.
              </p>
            </div>

            <div className="service-card slide-up delay-1">
              <div className="icon-wrapper">
                <img src={wordpressIcon} alt="WordPress Development" />
              </div>
              <h3>WordPress Development</h3>
              <p>
                I design and customize <strong>WordPress websites</strong> that are
                modern, optimized, and easy to manage—perfectly aligned with your brand.
              </p>
            </div>

            <div className="service-card slide-up delay-2">
              <div className="icon-wrapper">
                <img src={uiuxIcon} alt="UI/UX Design" />
              </div>
              <h3>UI / UX Design</h3>
              <p>
                I craft visually appealing, user-centered designs that bring clarity,
                consistency, and emotion into every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Services;
