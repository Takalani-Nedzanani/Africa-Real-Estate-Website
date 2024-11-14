// src/pages/About.js
import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about-page">
      <h2>About Africa Real Estate</h2>
      <p>Africa Real Estate is dedicated to helping individuals and businesses find their dream properties across the beautiful and diverse continent of Africa. Our mission is to make real estate accessible, transparent, and enjoyable for all.</p>
      
      <h3>Our Mission</h3>
      <p>Our mission is to empower property buyers, sellers, and investors by providing a comprehensive platform to access a wide range of properties, insights, and professional guidance tailored to the African real estate market.</p>
      
      <h3>Meet Our Team</h3>
      <div className="team">
        <div className="team-member">
          <img src="https://th.bing.com/th/id/OIP.GKAbRpYzDlJa139WC8xPtwHaIC?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="CEO" />
          <h4>John Doe</h4>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="https://th.bing.com/th/id/OIP.8FzDTbGUEW8ala2USvjMSgAAAA?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="COO" />
          <h4>Jane Smith</h4>
          <p>COO</p>
        </div>
        <div className="team-member">
          <img src="https://th.bing.com/th/id/OIP.Z5xrn8KFNL6gZhF_qXMBJgHaJd?w=152&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="CTO" />
          <h4>Mike Johnson</h4>
          <p>CTO</p>
        </div>
      </div>
    </div>
  );
};

export default About;
