// src/pages/Register.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-logo">
        <img src="https://th.bing.com/th?q=Black+and+White+Africa+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-ZA&cc=ZA&setlang=en&adlt=strict&t=1&mw=247" alt="Company Logo" />
      </div>
      <div className="register-form-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister} className="auth-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className="auth-button">Register</button>
        </form>
        <p className="login-prompt">
          Already have an account? <Link to="/login">Proceed to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
