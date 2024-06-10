// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from './logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} className="logo" alt="Little Lemon Logo" />
      </div>
    </header>
  );
};

export default Header;