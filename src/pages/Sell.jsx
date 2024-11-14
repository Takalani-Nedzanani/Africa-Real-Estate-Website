// src/pages/SellProperty.js
import React, { useState, useEffect } from 'react';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
//import PropertyCard from '../components/PropertyCard';
import '../App.css';

const Sell = () => {
  const [, setProperties] = useState([]);
  const [newProperty, setNewProperty] = useState({
    title: '',
    description: '',
    price: '',
  });
  const [image, setImage] = useState(null);

  const propertiesCollectionRef = collection(db, 'properties');

  // Fetch properties from Firestore
  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getDocs(propertiesCollectionRef);
      setProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchProperties();
  }, [propertiesCollectionRef]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image of the property.");
      return;
    }

    try {
      const imageRef = ref(storage, `property-images/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Save property info in Firestore
      await addDoc(propertiesCollectionRef, {
        ...newProperty,
        imageUrl,
        createdAt: new Date(),
      });

      alert("Property listed successfully!");
      setNewProperty({ title: '', description: '', price: '' });
      setImage(null);

      // Fetch updated list of properties
      const data = await getDocs(propertiesCollectionRef);
      setProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      alert("Error listing property: " + error.message);
    }
  };

  return (
    <div className="sell-property-page">
      <h2>List Your Property for Sale</h2>

      <form onSubmit={handleSubmit} className="property-form">
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={newProperty.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Property Description"
          value={newProperty.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Property Price"
          value={newProperty.price}
          onChange={handleInputChange}
          required
        />
        <input type="file" onChange={handleImageChange} required />
        <button type="submit" className="submit-button">Submit Property</button>
      </form>
       
      {/* <h3>Available Properties for Sale</h3> */}
      {/* <div className="property-list"> */}
        {/* {properties.length > 0 ? ( */}
        {/* //   properties.map((property) => ( */}
            {/* // <PropertyCard key={property.id} property={property} /> */}
        {/* //   )) */}
        {/* // ) : ( */}
          {/* //<p>No properties found.</p> */}
        {/* // )} */}
      {/* </div> */}
    </div>
  );
};

export default Sell;
