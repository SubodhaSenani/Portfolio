import React, { useState } from 'react';
import '../styles/Header.css';
import profileImg from '../assets/images/profile.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-content">

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-img-container">
            <img src={profileImg} alt="Profile" className="profile-img" />
          </div>
          <h1 className="profile-name">SUBODHA</h1>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "bar bar1 active" : "bar bar1"}></span>
          <span className={menuOpen ? "bar bar2 active" : "bar bar2"}></span>
          <span className={menuOpen ? "bar bar3 active" : "bar bar3"}></span>
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <ul>
            <li><a href="#landingpage" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
