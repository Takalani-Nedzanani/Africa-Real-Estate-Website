// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';
import '../App.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-logo">
        <img src="https://th.bing.com/th?q=Black+and+White+Africa+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-ZA&cc=ZA&setlang=en&adlt=strict&t=1&mw=247" alt="Company Logo" />
      </div>
      <div className="forgot-password-form-container">
        <h2>Reset Password</h2>
        <form onSubmit={handleReset} className="auth-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <button type="submit" className="auth-button">Reset Password</button>
        </form>
        <p className="login-prompt">
          Remembered your password? <Link to="/login">Proceed to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
