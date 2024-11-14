// src/pages/Buy.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import '../App.css';

const propertiesForSale = [
  {
    id: 1,
    title: 'Modern Family Home',
    price: '350 000',
    image: 'https://th.bing.com/th/id/OIP.0qV8zT5CWnZSZMX0DDDuWQHaE7?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 2,
    title: 'City Apartment',
    price: '100 000',
    image: 'https://th.bing.com/th/id/OIP.no0nQCRwQW-hoIf3qBptYAHaE7?w=319&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 3,
    title: 'Beach House',
    price: '750 000',
    image: 'https://th.bing.com/th/id/OIP.soM7AhSVyAkxeQeHW9zJDAHaE8?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
];

const Buy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'propertyInquiries'), {
        propertyId: selectedProperty.id,
        propertyTitle: selectedProperty.title,
        ...formData,
      });
      alert("Your inquiry has been sent!");
      setFormData({ name: '', email: '', phone: '' });
      setSelectedProperty(null);
    } catch (error) {
      alert("Failed to send inquiry. Please try again.");
    }
  };

  const filteredProperties = propertiesForSale.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="buy-page">
      <h2>Properties for Sale</h2>
      <input
        type="text"
        placeholder="Search for properties..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="properties-list">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <h3>{property.title}</h3>
            <p>Price: R{property.price}</p>
            <button onClick={() => setSelectedProperty(property)}>I'm Interested</button>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <div className="contact-form">
          <h3>Contact Us About {selectedProperty.title}</h3>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Send Inquiry</button>
          </form>
          <button onClick={() => setSelectedProperty(null)} className="cancel-button">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Buy;
