// src/pages/Home.js
import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import '../App.css';

const properties = [
  {
    id: 1,
    title: 'Modern Family Home',
    description: 'A beautiful and spacious family home in the suburbs.',
    price: '350,000',
    image: 'https://th.bing.com/th/id/OIP.0qV8zT5CWnZSZMX0DDDuWQHaE7?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 2,
    title: 'City Apartment',
    description: ' Modern apartment in the heart of downtown.',
    price: '100,000',
    image: 'https://th.bing.com/th/id/OIP.no0nQCRwQW-hoIf3qBptYAHaE7?w=319&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 3,
    title: 'Beach House',
    description: 'Relax in this stunning beach house with ocean views.',
    price: '750,000',
    image: 'https://th.bing.com/th/id/OIP.soM7AhSVyAkxeQeHW9zJDAHaE8?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 4,
    title: 'Town House',
    description: 'Relax in this stunning beach house with ocean views.',
    price: '3,000',
    image: 'https://th.bing.com/th/id/OIP.16AZTKc3ZEcb5Tdinwy2KQHaFF?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
];
const properties1 = [
    {
      id: 1,
      title: 'Farming Land',
      description: 'A beautiful and spacious family home in the suburbs.',
      price: '450,000',
      image: 'https://th.bing.com/th/id/OIP.Z12IXzJPBVNCGOnKJ0mlfAHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      id: 2,
      title: 'Kasi Apartment',
      description: 'A modern apartment in the heart of downtown.',
      price: '1,000',
      image: 'https://th.bing.com/th/id/OIP.7Of-xHuqfsLhfQkge_4oaAHaFj?w=259&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      id: 3,
      title: 'Woodlands Estate',
      description: 'Relax in this stunning beach house with ocean views.',
      price: '750,000',
      image: 'https://th.bing.com/th/id/OIP.P9aBGuN45_idW3u0l76y2gHaE7?w=294&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      id: 4,
      title: 'Amusement Area',
      description: 'Relax in this stunning beach house with ocean views.',
      price: '1000,000',
      image: 'https://th.bing.com/th/id/R.425cf0ffb60d74585169bf9cad3d4b8e?rik=mwx4BPoPPWzGyg&pid=ImgRaw&r=0',
    },
  ];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter properties based on search term
  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProperties1 = properties1.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <h2>Featured Properties</h2>
      <input
        type="text"
        placeholder="Search for properties..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="property-list">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
      <br />
      <div className="property-list">
        {filteredProperties1.length > 0 ? (
          filteredProperties1.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
