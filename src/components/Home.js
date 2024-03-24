import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our Salon</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Service Image 1" className="w-full" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Hair Styling</h2>
            <p className="text-gray-700">We'll style, you'll smile!</p>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <img src="https://img.freepik.com/free-photo/pedicurist-master-makes-pedicure-woman-s-legs-spa-treatment-concept_186202-7772.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711152000&semt=ais" alt="Service Image 2" className="w-full" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Manicure & Pedicure</h2>
            <p className="text-gray-700">Don't underestimate the power of red nail polish</p>
          </div>
        </div>
      </div>
      <Link to="/services" className="block mt-8 text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Explore Services</Link>
    </div>
  );
}

export default Home;
