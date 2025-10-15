import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 Subodha Senani | All Rights Reserved</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:subodhahsenani@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;