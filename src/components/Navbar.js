"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar with fade effect */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <nav className="flex items-center justify-between px-6 md:px-8 lg:px-20 py-4 md:py-6">
          <Link href="/" className="font-zen-dots text-2xl md:text-3xl lg:text-4xl text-white hover:opacity-80 transition-opacity">
            REY
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex flex-col justify-center items-center gap-1.5 w-10 h-10 md:w-12 md:h-12 hover:opacity-80 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <span className={`w-5 md:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 md:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 md:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
        {/* Fade gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-[#060606]/80 to-transparent pointer-events-none -z-10" />
      </div>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Background with texture */}
        <div 
          className={`absolute inset-0 bg-[#060606] transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Texture overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{ mixBlendMode: 'soft-light' }}
          >
            <Image
              src="/images/Texture.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          
          {/* Spotlight effect */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-40 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}
          />
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className={`absolute top-4 md:top-6 right-6 md:right-8 lg:right-20 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 hover:opacity-80 transition-all duration-300 ${isMenuOpen ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'}`}
          aria-label="Close menu"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {[
              { href: "/", label: "Home", delay: "delay-100" },
              { href: "/work", label: "Work", delay: "delay-200" },
              { href: "/about", label: "About", delay: "delay-300" },
              { href: "/contact", label: "Contact", delay: "delay-400" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`group relative text-4xl md:text-5xl lg:text-6xl font-zen-dots text-[#9a9a9a] hover:text-white transition-all duration-300 ${isMenuOpen ? `opacity-100 translate-y-0 ${link.delay}` : 'opacity-0 translate-y-8'}`}
              >
                <span className="relative">
                  {link.label}
                  {/* Hover underline */}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom Section - Social Links */}
          <div className={`absolute bottom-8 md:bottom-12 flex items-center gap-4 md:gap-6 flex-wrap justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-4'}`}>
            <a
              href="https://github.com/Rey004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9a9a9a] hover:text-white transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <span className="w-1 h-1 bg-[#4d4d4d] rounded-full"></span>
            <a
              href="https://www.linkedin.com/in/revanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9a9a9a] hover:text-white transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
            <span className="w-1 h-1 bg-[#4d4d4d] rounded-full"></span>
            <a
              href="https://instagram.com/revanshu_04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9a9a9a] hover:text-white transition-colors text-sm font-medium"
            >
              Instagram
            </a>
            <span className="w-1 h-1 bg-[#4d4d4d] rounded-full"></span>
            <a
              href="https://x.com/Revanshu04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9a9a9a] hover:text-white transition-colors text-sm font-medium"
            >
              X
            </a>
            <span className="w-1 h-1 bg-[#4d4d4d] rounded-full"></span>
            <a
              href="mailto:revanshu444@gmail.com"
              className="text-[#9a9a9a] hover:text-white transition-colors text-sm font-medium"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
