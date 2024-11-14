// src/pages/Logout.js
import React from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out successfully.");
      navigate('/login');
    } catch (error) {
      alert("Failed to logout: " + error.message);
    }
  };

  return (
    <div className="logout-container">
      <h2>Are you sure you want to log out?</h2>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <button onClick={() => navigate('/')} className="cancel-button">Cancel</button>
    </div>
  );
};

export default Logout;
