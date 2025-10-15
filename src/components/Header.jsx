import React from 'react';
import '../styles/Header.css';
import profileImg from '../assets/images/profile.png'; 
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-img-container">
            <img src={profileImg} alt="Profile" className="profile-img"/>
          </div>
          <h1 className="profile-name">SUBODHA</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#landingpage" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;