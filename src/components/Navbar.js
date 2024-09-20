// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/slices/cartSlice';

const Navbar = () => {
  const cartItems = useSelector(selectCartItems);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">E-Commerce</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link> {/* Add this line */}
          </li>
        </ul>
      </div>
      <Link to="/cart" className="btn btn-primary">
        Cart <span className="badge badge-light">{cartItems.length}</span>
      </Link>
    </nav>
  );
};

export default Navbar;