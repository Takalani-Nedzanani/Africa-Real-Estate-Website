// src/pages/Rent.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import '../App.css';

const properties = [
  {
    id: 1,
    title: 'Modern Apartment in Johannesburg',
    description: 'A spacious apartment with city views and modern amenities.',
    price: '30 000',
    image: 'https://th.bing.com/th/id/R.92f8cd91d61a4f75e321a288b431c48e?rik=VNpcnzlEsgxUhA&riu=http%3a%2f%2fmultimedia.persquare.co.za%2fs838x629_-1715038670.jpg&ehk=Jlqq%2fjdetIlKtdEGBFwKZMQ8bp6JWTwqxemeFw%2b%2biMY%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 2,
    title: 'Cozy Home in Cape Town',
    description: 'A comfortable home with a private garden and near the beach.',
    price: '4000',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/505552329.jpg?k=0fbc652553cdd050c211f67ed63875495ceadf23b6b2da6ad92a9cddbcfb67d5&o=&hp=1',
  },
  {
    id: 3,
    title: 'Luxury Villa',
    description: 'A large villa with a swimming pool and stunning interiors.',
    price: '70 000',
    image: 'https://th.bing.com/th/id/OIP.7fbVcGUvTybN23CYP6gq9AHaE7?rs=1&pid=ImgDetMain',
  },
];

const Rent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleSelectProperty = (property) => setSelectedProperty(property);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'propertyInquiries'), {
        ...userInfo,
        propertyId: selectedProperty.id,
        propertyTitle: selectedProperty.title,
        timestamp: new Date(),
      });
      alert('Your inquiry has been sent!');
      setSelectedProperty(null);
      setUserInfo({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert('Error submitting inquiry: ' + error.message);
    }
  };

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rent-page">
      <h2>Properties for Rent</h2>
      <input
        type="text"
        placeholder="Search for properties..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="property-list">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <p className="property-price">Price: {property.price} / month</p>
              <button onClick={() => handleSelectProperty(property)} className="select-property-button">
                Choose this Apartment
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <div className="inquiry-form">
          <h3>Inquire about {selectedProperty.title}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={userInfo.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={userInfo.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={userInfo.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={userInfo.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-inquiry-button">Send Inquiry</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Rent;
