import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          <span className="inline-block mr-2 animate-bounce">🌟</span> Salon Spa
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300 transition duration-300">About</Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-300 transition duration-300">Services</Link>
          </li>
          <li>
            <Link to="/gallery" className="text-white hover:text-gray-300 transition duration-300">Gallery</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300 transition duration-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
