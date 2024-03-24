import React from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" className="border border-gray-300 rounded-md w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="border border-gray-300 rounded-md w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="border border-gray-300 rounded-md w-full px-3 py-2"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">Submit</button>
          </div>
        </form>
      </div>
      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
}

export default ContactForm;
