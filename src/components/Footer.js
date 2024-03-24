import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">COSMO SALON</h2>
            <p className="mb-4">Success is when I see my client smile.</p>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li className="mb-2"><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li className="mb-2"><Link to="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm">© 2024 COSMO SALON. All Rights Reserved | Design by <a href="https://www.linkedin.com/in/arpit-27p/" className="text-blue-500 hover:underline">Arpit Pandey</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
