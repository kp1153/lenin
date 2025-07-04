"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Initiatives", href: "/about/initiatives" },
      { name: "Recognition", href: "/about/recognition" },
    ],
  },
  { name: "Life Events", href: "/life-events" },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#FF8800] min-h-[70px] shadow-lg sticky top-0 z-50 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white drop-shadow">
          LENIN RAGHUVANSHI
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map((item) =>
            item.children ? (
              <li
                key={item.name}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`font-semibold px-3 py-2 rounded transition text-black flex items-center gap-1 ${
                    pathname === item.href ? "underline underline-offset-4" : ""
                  }`}
                >
                  {item.name}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {/* Dropdown */}
                <div
                  className={`absolute left-0 mt-2 w-56 bg-white rounded shadow-lg z-10 ${
                    dropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="px-4 py-3 border-b text-gray-600 text-sm italic">
                    Know more about Lenin Raghuvanshi
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={`block px-4 py-2 font-semibold text-black hover:bg-gray-100 transition ${
                        pathname === child.href ? "underline underline-offset-4" : ""
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`font-semibold px-3 py-2 rounded transition text-black ${
                    pathname === item.href ? "underline underline-offset-4" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden absolute top-[70px] left-0 w-full bg-[#FF8800] pb-4 shadow-lg z-40">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.name} className="border-b border-white/20">
                <div className="font-semibold px-4 py-2 text-black">{item.name}</div>
                <div className="px-4 py-2 text-gray-600 text-sm italic border-b">
                  Know more about Lenin Raghuvanshi
                </div>
                <ul>
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <Link
                        href={child.href}
                        className={`block px-6 py-2 font-semibold text-black hover:bg-gray-100 transition ${
                          pathname === child.href ? "underline underline-offset-4" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 font-semibold text-black ${
                    pathname === item.href ? "underline underline-offset-4" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
}
