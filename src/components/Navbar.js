"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-20 py-6">
      <Link href="/" className="font-zen-dots text-3xl md:text-4xl text-white hover:opacity-80 transition-opacity">
        REY
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex flex-col gap-1.5 p-2 hover:opacity-80 transition-opacity"
        aria-label="Toggle menu"
      >
        <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl text-white hover:text-gray-300 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/work"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl text-white hover:text-gray-300 transition-colors font-medium"
          >
            Work
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl text-white hover:text-gray-300 transition-colors font-medium"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
