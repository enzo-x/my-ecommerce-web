// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center my-5">
      <h1>Welcome to Our E-Commerce Store!</h1>
      <p>Your one-stop shop for all your needs.</p>
      <Link to="/products" className="btn btn-primary">Browse Products</Link>
    </div>
  );
};

export default HomePage;