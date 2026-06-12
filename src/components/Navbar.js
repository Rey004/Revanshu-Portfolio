"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Navbar with fade effect */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <nav className="flex items-center justify-between px-6 md:px-8 lg:px-20 py-4 md:py-6 relative">
          <Link href="/" className="font-zen-dots text-2xl md:text-3xl lg:text-4xl text-white hover:opacity-80 transition-opacity">
            REY
          </Link>

          {/* Centered navigation links for Desktop */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {[
              { href: "/", label: "Home" },
              { href: "/work", label: "Work" },
              { href: "/about", label: "About" },
            ].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-xs uppercase tracking-widest font-medium transition-all duration-300 py-1.5 ${
                    isActive ? "text-white" : "text-[#9a9a9a] hover:text-white"
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    {/* Hover and Active Underline */}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Header Actions Container */}
          <div className="flex items-center gap-3.5 md:gap-5 ml-auto">
            {/* Desktop header social icons */}
            <div className="hidden md:flex items-center gap-4 border-r border-[#333] pr-5">
              {/* GitHub */}
              <a href="https://github.com/Rey004" target="_blank" rel="noopener noreferrer" className="text-[#9a9a9a] hover:text-white transition-colors" aria-label="GitHub">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/revanshu" target="_blank" rel="noopener noreferrer" className="text-[#9a9a9a] hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/revanshu_04" target="_blank" rel="noopener noreferrer" className="text-[#9a9a9a] hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              {/* X */}
              <a href="https://x.com/Revanshu04" target="_blank" rel="noopener noreferrer" className="text-[#9a9a9a] hover:text-white transition-colors" aria-label="X (Twitter)">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:revanshu444@gmail.com" className="text-[#9a9a9a] hover:text-white transition-colors" aria-label="Email">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            
            {/* Resume Button - always visible beside hamburger */}
            <a
              href="/Revanshu_Resume.pdf"
              download="Revanshu_Resume.pdf"
              className="btn-resume inline-flex items-center gap-1.5 bg-[#d9d9d9] text-black text-[10px] md:text-xs font-extrabold px-3 py-1.5 md:px-4 md:py-2 rounded-lg active:scale-95 mr-1 md:mr-2"
            >
              <span>Resume</span>
              <svg
                className="w-3 h-3 md:w-3.5 md:h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex md:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 md:w-12 md:h-12 hover:opacity-80 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <span className={`w-5 md:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 md:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 md:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </nav>
        {/* Fade gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-[#060606]/80 to-transparent pointer-events-none -z-10" />
      </div>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      >
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
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(false);
          }}
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
          <div className="flex flex-col items-center gap-6 md:gap-8" onClick={(e) => e.stopPropagation()}>
            {[
              { href: "/", label: "Home", delay: "delay-100" },
              { href: "/work", label: "Work", delay: "delay-200" },
              { href: "/about", label: "About", delay: "delay-300" },
            ].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group relative text-4xl md:text-5xl lg:text-6xl font-zen-dots transition-all duration-300 ${
                    isActive ? "text-white" : "text-[#9a9a9a] hover:text-white"
                  } ${isMenuOpen ? `opacity-100 translate-y-0 ${link.delay}` : 'opacity-0 translate-y-8'}`}
                >
                  <span className="relative">
                    {link.label}
                    {/* Hover and Active Underline */}
                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </span>
                </Link>
              );
            })}

            {/* Resume Button inside Hamburger Menu */}
            <a
              href="/Revanshu_Resume.pdf"
              download="Revanshu_Resume.pdf"
              className={`btn-resume mt-6 inline-flex items-center gap-2 bg-[#d9d9d9] text-black font-extrabold text-xs px-6 py-3 rounded-lg active:scale-95 ${isMenuOpen ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-8'}`}
            >
              <span>Resume</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          </div>

          {/* Bottom Section - Social Icons */}
          <div 
            className={`absolute bottom-8 md:bottom-12 flex items-center gap-4 md:gap-5 justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-4'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* GitHub */}
            <a
              href="https://github.com/Rey004"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 rounded-lg border border-[#333] bg-[#0d0d0d] hover:bg-white hover:text-black hover:border-white text-[#9a9a9a] flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/revanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 rounded-lg border border-[#333] bg-[#0d0d0d] hover:bg-white hover:text-black hover:border-white text-[#9a9a9a] flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/revanshu_04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 rounded-lg border border-[#333] bg-[#0d0d0d] hover:bg-white hover:text-black hover:border-white text-[#9a9a9a] flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>

            {/* X */}
            <a
              href="https://x.com/Revanshu04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 rounded-lg border border-[#333] bg-[#0d0d0d] hover:bg-white hover:text-black hover:border-white text-[#9a9a9a] flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:revanshu444@gmail.com"
              className="w-10 h-10 md:w-11 md:h-11 rounded-lg border border-[#333] bg-[#0d0d0d] hover:bg-white hover:text-black hover:border-white text-[#9a9a9a] flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
