// components/WithPeople.jsx
"use client";

import React, { useState, useEffect } from 'react';

const images = ['/11.jpg', '/12.jpg', '/13.jpg', '/14.jpg'];

export default function WithPeople() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Image Slider */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-md shadow-md mb-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 11}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          With the People, Every Step of the Way
        </h2>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
          Dr. Lenin Raghuvanshi: A name that lives not only in principles but in ground reality.
        </p>

        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Lenin Raghuvanshi is not just a visionary thinker, but also a companion in the joys and sorrows of every hardworking and poor person for whom he has fought throughout his life. His presence is not limited to platforms; it is felt in fields, slums, and every place where marginalized people are fighting for their rights.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            This is not just a slogan; it is a way of life. Real change comes only by being among the people, understanding their pain, and becoming their voice. Dr. Raghuvanshi has lived this philosophy in every action he has taken.
          </p>
        </div>

        <p className="mt-10 text-lg opacity-80">
          "Justice and dignity are the birthright of every individual who breathes on this earth." - Dr. Lenin Raghuvanshi
        </p>
      </div>
    </section>
  );
}