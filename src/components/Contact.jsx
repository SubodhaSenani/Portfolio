import React, { useState } from 'react';
import '../styles/Contact.css';
import Swal from 'sweetalert2';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(event.target);
    formData.append("access_key", "636108d5-bae4-4f05-8338-267cd674c2a6");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully!",
          icon: "success"
        });
        setStatus('Message sent successfully!');
      }
    } catch (error) {
      setStatus('Failed to send message');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>I'm always open to new opportunities and collaborations</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope" style={{ marginRight: '10px' }}></i>
              <a href="mailto:subodhasenani2002@gmail.com">subodhasenani2002@gmail.com</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin" style={{ marginRight: '10px' }}></i>
              <a href="https://www.linkedin.com/in/subodha-senani-9102152b9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github" style={{ marginRight: '10px' }}></i>
              <a href="https://github.com/SubodhaSenani" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <input 
            type="hidden" 
            name="to_email" 
            value="subodhasenani2002@gmail.com"
          />
          <button type="submit" disabled={status === 'Sending...'}>
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className={`status-message ${status.includes('Failed') ? 'error' : 'success'}`}>{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;