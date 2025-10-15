import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "../styles/Home.css";

function LandingPage() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1200 },
  });

  return (
    <section className="new-landing">
      <div className="animated-bg"></div>

      <div className="hero-content">
        <animated.h1 style={fadeIn} className="hero-title">
          Hi, I’m <span className="highlight">Subodha Senani</span>
        </animated.h1>

        <p className="hero-subtitle">
          Frontend Developer | UI/UX Enthusiast | WordPress Designer
        </p>

        <div className="skills-container">
          <div className="skill-card">
           
            <h3>Frontend Development</h3>
            <p>React.js • JavaScript • Tailwind • Bootstrap</p>
          </div>

          <div className="skill-card">
           
            <h3>UI / UX Design</h3>
            <p>Figma • Prototyping • User Experience</p>
          </div>

          <div className="skill-card">
            
            <h3>WordPress Development</h3>
            <p>Elementor • WooCommerce • PHP</p>
          </div>
        </div>

        <a href="#projects" className="cta-btn">
          Explore My Work
        </a>
      </div>
    </section>
  );
}

export default LandingPage;
