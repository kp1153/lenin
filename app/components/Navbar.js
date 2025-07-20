"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="bg-amber-700 text-white shadow sticky top-0 z-50">
      {/* Brand Name */}
      <div className="pt-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">Lenin Raghuvanshi</h1>
        <p className="text-sm md:text-base text-gray-200 mt-1">
          Human Rights Defender and Founder-Convenor, PVCHR
        </p>

        {/* Artistic Divider */}
        <div className="flex justify-center my-4">
          <div className="w-40 h-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 rounded-full shadow-md"></div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden flex justify-end px-4 pb-2">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Navigation Menu */}
      <div className={`md:flex ${menuOpen ? "block" : "hidden"} pb-4 md:pb-6`}>
        <ul className="w-full flex flex-col md:flex-row justify-evenly items-center gap-4 md:gap-6 font-medium text-base px-4">
          <li>
            <Link href="/" className="text-red-300 hover:text-white hover:underline">
              Home
            </Link>
          </li>

          <li className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="text-green-300 hover:text-white hover:underline focus:outline-none"
            >
              About
            </button>
            {aboutOpen && (
              <ul className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white text-black rounded shadow-md w-44 text-left z-50">
                <li>
                  <Link
                    href="/about/initiatives"
                    className="block px-4 py-2 hover:bg-amber-100 text-blue-600"
                  >
                    Initiatives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/recognition"
                    className="block px-4 py-2 hover:bg-amber-100 text-purple-600"
                  >
                    Recognition
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/life-events"
              className="text-yellow-300 hover:text-white hover:underline"
            >
              Life Events
            </Link>
          </li>

          <li>
            <Link
              href="/writings"
              className="text-pink-300 hover:text-white hover:underline"
            >
              Writings
            </Link>
          </li>

          <li>
            <Link
              href="/withpeople"
              className="text-pink-300 hover:text-white hover:underline"
            >
              WithPeople
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
