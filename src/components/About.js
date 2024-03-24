import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="mb-4">Our mission at Cosmo salon is to provide a friendly, personalized service through a team of highly skilled and creative professionals. Teamwork is our most valuable asset which ensures our clients are always number one, and we strive to exceed your expectations.</p>
          <p className="mb-4">We celebrate women and men in their real, most raw, authentic brilliance, who believe in themselves and are ready to step into the look they love. We employ hair products with some of the most natural and rich ingredients because we believe you should never expect less.</p>
          <Link to="/contact" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Contact Us</Link>
        </div>
        <div className="w-1/2">
          <img src="https://images.unsplash.com/photo-1595475884562-073c30d45670?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" className="rounded-lg shadow-lg animate-pulse " />
        </div>
      </div>
    </div>
  );
}

export default About;
