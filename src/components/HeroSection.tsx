"use client";
import { useState, useEffect } from "react";

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
  "/7.jpeg",
  "/8.jpeg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-100 to-blue-100 px-4 py-8">
      <div className="relative mb-6 flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white/80 rounded-full px-2 py-1 shadow hover:bg-gray-200"
          aria-label="Previous"
          style={{ left: "-2.5rem" }}
        >
          ◀
        </button>
        <img
          src={images[current]}
          alt={`Lenin Raghuvanshi Slide ${current + 1}`}
          className="shadow-md"
          style={{
            maxWidth: "90vw",
            maxHeight: "60vh",
            width: "auto",
            height: "auto",
            borderRadius: "1rem",
          }}
        />
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white/80 rounded-full px-2 py-1 shadow hover:bg-gray-200"
          aria-label="Next"
          style={{ right: "-2.5rem" }}
        >
          ▶
        </button>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Dr. Lenin Raghuvanshi
      </h1>
      <h2 className="text-lg md:text-xl text-blue-700 font-medium mb-2">
        Human Rights Defender & Director, PVCHR
      </h2>
      <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl">
        Renowned physician, social activist, and founder of People's Vigilance Committee on Human Rights (PVCHR), Varanasi. <br />
        Dedicated to empowering marginalized communities and advocating for justice, equality, and human dignity.
      </p>
      <a
        href="mailto:leninraghuvanshi@gmail.com"
        className="inline-block bg-blue-700 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-800 transition"
      >
        Contact: leninraghuvanshi@gmail.com
      </a>
    </section>
  );
}
