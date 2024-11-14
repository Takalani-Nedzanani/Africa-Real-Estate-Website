// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import '../App.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <nav className="navbar">
      <h1>Africa Real Estate</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
       
        {isAuthenticated ? (
          <>
            <li><Link to="/buy">Buy</Link></li>
            <li><Link to="/rent">Rent</Link></li>
            <li><Link to="/sell">Sell</Link></li>
            {/* <li><Link to="/about">About</Link></li> */}
            <li><Link to="/agents">Agents</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
