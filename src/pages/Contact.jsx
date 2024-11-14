// src/pages/Contact.js
import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Feel free to reach out with any questions or inquiries about our services.</p>
      
      <div className="contact-info">
        <p>Email: info@africarealestate.com</p>
        <p>Phone: +27 78 767 0983</p>
        <p>Address: 80 King Edwards Willows, BloemFontein, South Africa</p>
      </div>

      <h3>Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
