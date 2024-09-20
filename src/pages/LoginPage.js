// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement basic validation
    if (credentials.username && credentials.password) {
      // Redirect to products page on successful login
      navigate('/products');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2>Login</h2>
      <div className="mb-3">
        <label>Username</label>
        <input type="text" name="username" className="form-control" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input type="password" name="password" className="form-control" onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default LoginPage;
