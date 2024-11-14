// src/pages/Agents.js
import React from 'react';
import '../App.css';

const agents = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Senior Property Consultant',
    description: 'John has over 15 years of experience in real estate, specializing in residential properties in Lagos and Abuja.',
    image: 'https://th.bing.com/th/id/OIP.GKAbRpYzDlJa139WC8xPtwHaIC?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Commercial Real Estate Expert',
    description: 'Jane specializes in commercial real estate and is an expert in the Johannesburg market, helping clients find the perfect investment properties.',
    image: 'https://th.bing.com/th/id/OIP.8FzDTbGUEW8ala2USvjMSgAAAA?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    title: 'Luxury Real Estate Specialist',
    description: 'Mike has extensive knowledge of luxury properties and helps clients find dream homes in Cape Town’s premium neighborhoods.',
    image: 'https://th.bing.com/th/id/OIP.Z5xrn8KFNL6gZhF_qXMBJgHaJd?w=152&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 4,
    name: 'Emily Clark',
    title: 'Rental Property Manager',
    description: 'Emily manages rental properties across Kenya and assists clients in finding ideal rental homes and apartments.',
    image: 'https://th.bing.com/th/id/OIP.jEm7Q_4-5ZvtTrUmNkq2aAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3',
  },
];

const Agents = () => {
  return (
    <div className="agents-page">
      <h2>Meet Our Agents</h2>
      <p>Our experienced agents are dedicated to helping you find your perfect property across Africa. Meet our team below.</p>
      <div className="agents-list">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-card">
            <img src={agent.image} alt={agent.name} className="agent-image" />
            <h4>{agent.name}</h4>
            <p className="agent-title">{agent.title}</p>
            <p className="agent-description">{agent.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
