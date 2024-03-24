import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
            <img src="https://as2.ftcdn.net/v2/jpg/01/96/07/43/1000_F_196074365_AlruXARNe3SYD7tUgvtqvTh2g01eHthI.jpg" alt="Logo" className="w-10 h-10 animate-bounce mr-2" />
            <span className="text-xl font-bold">COSMO SALON</span>
          </div>
        </Link>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
