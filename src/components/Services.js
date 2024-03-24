import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1543965170-e3d16958f280?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpcmN1dCUyMHdvbWVufGVufDB8fDB8fHww"
            alt="Service 1"
            className="mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Mens Cut</h3>
          <p className="text-gray-700">
            Includes shampoo, scalp massage, cut and style. The average price
            for a mens hair cut is $28
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1550791752-97b2f57d2b15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpcmN1dCUyMHdvbWVufGVufDB8fDB8fHww"
            alt="Service 2"
            className="mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Womens Cut</h3>
          <p className="text-gray-700">
            Hair is shaped and texturized to deliver the desired look and
            enhance face shape and highlight features. Includes shampoo, scalp
            massage, cut and blowdry style. The average price for a womens hair
            cut is $43
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5217b22fe4b0e22c06d62715/1467222264511-G0HN5TX8GTCHJ3U3ZZ4B/image-asset.jpeg"
            alt="Service 3"
            className="mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Speality Haircutting</h3>
          <p className="text-gray-700">
            Advanced haircutting techniques designed especially for curly hair,
            precision dry cutting, and avant-garde methods all fall under the
            umbrella of specialty haircutting. These services require additional
            training and mastery by stylists and demand a premium price.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Service 4"
            className="mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Hair Color Services</h3>
          <p className="text-gray-700">
            Salon hair color has undergone a renaissance in the last five years.
            Gone are the days when women simply came in for gray coverage or a
            few highlights. Thanks to social media, women now charge into the
            salon armed with Instagram screenshots of their favorite celebrity
            stylist’s work–and they ask for techniques by name.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmFjZSUyMGZyYW1lJTIwaGlnaGxpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Service 5"
            className="mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Face Frame Highlights</h3>
          <p className="text-gray-700">
            Using foils or painting, just the very front of hair around the face
            is lightened.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1702598589566-e460020a4de6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Service 6"
            className="mb-4"
          />
          <h3 className="text-xl font-bold mb-2">
            COLOR CORRECTION: PRICED BY CONSULTATION ONLY
          </h3>
          <p className="text-gray-700">
            A variety of techniques are used to achieve a drastic change,
            including removing permanent hair color, correcting red or orange
            tones, or changing color family. This service is very customized,
            and often time-consuming, so must involve a thorough consultation
            with the client to determine time and pricing. Includes blowdry
            style.
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/contact"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Contact Us
       </Link>
      </div>
    </div>
  );
};

export default Services;
