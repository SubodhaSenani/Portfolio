import React, { useState } from 'react';
import '../styles/Resume.css';
import cvFile from '../assets/cv/Subodha_Resume.pdf';

// Certificate images
import cert1 from '../assets/certificates/python UOM.jpg';
import cert2 from '../assets/certificates/gads.JPG';
import cert3 from '../assets/certificates/risk.JPG';
import cert4 from '../assets/certificates/wordpress.JPG';
import cert5 from '../assets/certificates/ms.JPG';
import cert6 from '../assets/certificates/ba.JPG';

function Resume() {
  const [showCV, setShowCV] = useState(false);

  return (
    <section id="resume" className="resume">
      <div className="resume-container fade-in">
        <h2>My Resume</h2>
        <p className="resume-intro">
          A blend of education, professional experience, and personal growth — shaping my path as a creative and dedicated web developer.
        </p>

        {/* Education */}
        <div className="resume-section slide-up">
          <h3>🎓 Education</h3>
          <div className="resume-cards">
            <div className="resume-card glass">
              <h4>Higher National Diploma in Information Technology</h4>
              <p className="institution">SLIATE Kandy</p>
              <p className="duration">Duration: 2½ years</p>
              <p>Specialized in software development, web technologies, and database management.</p>
            </div>

            <div className="resume-card glass">
              <h4>G.C.E. Advanced Level Examination</h4>
              <p className="institution">B/Little Flower Convent - Bandarawela</p>
              <p className="stream">Commerce Stream – 2020</p>
              <p>Index Number: 3548665</p>
              <p>Subjects & Grades: Business Studies (C), ICT (C), Accounting (S), English (C)</p>
            </div>

            <div className="resume-card glass">
              <h4>G.C.E. Ordinary Level Examination – 2017</h4>
              <p className="institution">B/Little Flower Convent - Bandarawela</p>
              <p>Index Number: 74174843</p>
              <p>
                Subjects & Grades: 
                Sinhala (A), Buddhism (B), History (B), ICT (B),
                Mathematics (C), English (C), Business Studies & Accounting (C), Dancing (C), Science (S)
              </p>
            </div>

            <div className="resume-card glass">
              <h4>G.C.E. Ordinary Level Examination – 2018</h4>
              <p>Index Number: 85137898</p>
              <p>Subjects & Grades: Tamil (C)</p>
            </div>
          </div>
        </div>

        {/* Other Certificates */}
        <div className="resume-section slide-up delay-1">
          <h3>📜 Other Certificates</h3>
          <ul className="other-certificates">
            <li>English Certificate Course – Sabaragamuwa University of Sri Lanka</li>
            <li>IT Certificate Course – Open University of Sri Lanka, Wewathanna (2021)</li>
            <li>AAT Stage 1 – AAT Sri Lanka (2018)</li>
          </ul>
        </div>

        {/* Certificates */}
        <div className="resume-section slide-up delay-2">
          <h3>🧾 Certificates</h3>
          <div className="certificate-gallery">
            {[cert1, cert2, cert3, cert4, cert5, cert6].map((cert, index) => (
              <div key={index} className="certificate-item glass-hover">
                <img src={cert} alt={`Certificate ${index + 1}`} />
                <p>
                  {[
                    "Python for Beginners – University of Moratuwa",
                    "Business Analysis & Process Management – Coursera",
                    "Google Ads for Beginners – Coursera",
                    "Investment Risk Management – Coursera",
                    "Build a Free Website with WordPress – Coursera",
                    "Introduction to Microsoft Excel – Coursera",
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="resume-section slide-up delay-3">
          <h3>💻 Experience</h3>
          <div className="resume-cards">
            <div className="resume-card glass">
              <h4>Frontend Developer Intern</h4>
              <p className="institution">Builtapps Business Solution (Pvt) Ltd</p>
              <p className="duration">6 Months</p>
              <p>
                Developed responsive interfaces using React.js, Tailwind, and Bootstrap.
                Gained hands-on experience in GitHub-based workflows and agile development.
              </p>
            </div>

            <div className="resume-card glass">
              <h4>Senior Web Developer</h4>
              <p className="institution">ITX Digital Services</p>
              <p className="duration">4 Months</p>
              <p>
                Led website redesign projects using WordPress and Elementor, improving
                UI/UX and optimizing performance across multiple business websites.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="resume-section slide-up delay-4">
          <h3>💡 Skills & Soft Skills</h3>
          <div className="skills-list">
            {[
              "Team Work",
              "Problem Solving",
              "Flexibility",
              "Time Management",
              "Adaptability",
              "Communication",
              "Critical Thinking",
              "Creativity",
              "Leadership",
              "Collaboration",
            ].map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="download-section">
          <button className="view-btn glow" onClick={() => setShowCV(true)}>View CV</button>
          <a href={cvFile} download className="download-btn outline">Download CV</a>
        </div>

        {/* CV Modal */}
        {showCV && (
          <div className="cv-modal">
            <div className="cv-content fade-in">
              <iframe src={cvFile} title="CV Preview"></iframe>
              <button className="close-btn" onClick={() => setShowCV(false)}>✖</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Resume;
