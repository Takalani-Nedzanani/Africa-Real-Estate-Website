// src/components/PropertyCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import '../App.css';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    // Check if the user is authenticated
    if (auth.currentUser) {
      navigate(`/property/${property.id}`); // Redirect to property details page
    } else {
      alert("Please log in to view more details.");
      navigate('/login'); // Redirect to login page
    }
  };

  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-info">
        <h3>{property.title}</h3>
        <p>{property.description}</p>
        <p className="property-price">R{property.price}</p>
        <button onClick={handleViewMore} className="view-more-button">
          View More
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
