import Navbar from "@/components/Navbar";
import BackgroundTexture from "@/components/BackgroundTexture";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#060606]">
      <BackgroundTexture />
      <Navbar />

      {/* Hero Section - Intro */}
      <section className="relative z-10 pt-32 pb-16 px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Info, Bio & Terminal */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-[#9a9a9a] text-sm uppercase tracking-widest">About Me</p>
              <h1 className="font-zen-dots text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent leading-tight">
                I&apos;m Revanshu
              </h1>
              
              {/* Mobile/Tablet Profile Image */}
              <div className="block lg:hidden my-6">
                <div className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-[320px] rounded-2xl overflow-hidden border border-[#4d4d4d] bg-linear-to-b from-[#161616] to-[#0c0c0c] group/img shadow-2xl transition-all duration-500 hover:border-[#6d6d6d] hover:scale-[1.02]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#d9d9d9]/10 to-transparent blur-xl opacity-50 group-hover/img:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#555] group-hover/img:border-[#d9d9d9] transition-colors duration-300 z-20" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#555] group-hover/img:border-[#d9d9d9] transition-colors duration-300 z-20" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#555] group-hover/img:border-[#d9d9d9] transition-colors duration-300 z-20" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#555] group-hover/img:border-[#d9d9d9] transition-colors duration-300 z-20" />
                  <Image
                    src="/images/profile.webp"
                    alt="Revanshu Profile Image"
                    fill
                    className="object-cover transition-transform duration-500 group-hover/img:scale-105 z-10"
                    priority
                  />
                </div>
              </div>

              <p className="text-[#b1b1b1] text-base md:text-lg leading-relaxed max-w-xl">
                A 20-year-old Full Stack Developer and creator based in India. I am always tinkering and trying to build fun things that can wow people. I specialize in bridging the gap between design, technology, and business to build interfaces that feel different.
              </p>
            </div>

            {/* Terminal Window with GitHub README Details */}
            <div className="border border-[#333] rounded-lg bg-[#0c0c0c] font-mono text-xs md:text-sm p-4 md:p-6 shadow-2xl relative overflow-hidden max-w-xl">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#222] mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[#666] text-xs font-mono">about.txt</span>
                <div className="w-8" />
              </div>
              {/* Terminal Content */}
              <div className="space-y-3 text-[#cecece]">
                <p className="text-[#888]">~ $ cat about.txt</p>
                <p className="text-white">&gt; hi, i&apos;m revanshu.</p>
                <p className="text-white">&gt; always trying to build fun things that can wow people.</p>
                <div className="pt-3 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[#1a1a1a] mt-4">
                  <div>
                    <span className="text-[#888] block mb-1">Focus Areas:</span>
                    <ul className="space-y-1 text-[#b1b1b1]">
                      <li className="flex items-center gap-2">
                        <span className="text-[#ff4343] font-bold">─</span> tech · business
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#ff4343] font-bold">─</span> content creation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#ff4343] font-bold">─</span> design / art
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#ff4343] font-bold">─</span> night owl 🌙
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-[#888] block mb-1">Current Status:</span>
                    <ul className="space-y-1 text-[#b1b1b1]">
                      <li className="flex items-center gap-2">
                        <span className="text-white font-bold">$</span> currently → DinoDash
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-white font-bold">$</span> learning → soft skills
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-white font-bold">$</span> fueled by → music & runs
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-white font-bold">$</span> location → india 🇮🇳
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Button & Social Icons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Resume Button */}
              <a
                href="/Revanshu_Resume.pdf"
                download="Revanshu_Resume.pdf"
                className="btn-resume inline-flex items-center gap-3 bg-[#d9d9d9] text-black text-xs font-extrabold px-6 py-3.5 rounded-lg active:scale-95"
              >
                <span>Download Resume</span>
                <svg
                  className="w-4 h-4"
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

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                {/* GitHub */}
                <a
                  href="https://github.com/Rey004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg border border-[#4d4d4d] bg-[#111] hover:bg-white hover:text-black hover:border-white text-white flex items-center justify-center transition-all duration-300 active:scale-95"
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
                  className="w-11 h-11 rounded-lg border border-[#4d4d4d] bg-[#111] hover:bg-white hover:text-black hover:border-white text-white flex items-center justify-center transition-all duration-300 active:scale-95"
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
                  className="w-11 h-11 rounded-lg border border-[#4d4d4d] bg-[#111] hover:bg-white hover:text-black hover:border-white text-white flex items-center justify-center transition-all duration-300 active:scale-95"
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
                  className="w-11 h-11 rounded-lg border border-[#4d4d4d] bg-[#111] hover:bg-white hover:text-black hover:border-white text-white flex items-center justify-center transition-all duration-300 active:scale-95"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="lg:col-span-5 pt-8 lg:pt-0 hidden lg:flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden border border-[#4d4d4d] bg-linear-to-b from-[#161616] to-[#0c0c0c] group/img shadow-2xl transition-all duration-500 hover:border-[#6d6d6d] hover:scale-[1.02]">
              {/* Ambient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d9d9d9]/10 to-transparent blur-xl opacity-50 group-hover/img:opacity-100 transition-opacity duration-700" />
              
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#555] group-hover/img:border-[#d9d9d9] transition-colors duration-300 z-20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#555] group-hover/img:border-[#d9d9d9] transition-colors duration-300 z-20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#555] group-hover/img:border-[#d9d9d9] transition-colors duration-300 z-20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#555] group-hover/img:border-[#d9d9d9] transition-colors duration-300 z-20" />
              
              {/* Image */}
              <Image
                src="/images/profile.webp"
                alt="Revanshu Profile Image"
                fill
                className="object-cover transition-transform duration-500 group-hover/img:scale-105 z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="relative z-10 py-16 px-6 md:px-20 lg:px-32">
        <h2 className="text-[#d3d3d3] text-xl md:text-2xl font-semibold mb-8">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Web Design */}
          <div className="p-6 border border-[#4d4d4d] rounded-xl hover:border-[#6d6d6d] transition-colors">
            <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#d9d9d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-[#d3d3d3] font-semibold mb-2">Web Design</h3>
            <p className="text-[#9a9a9a] text-sm">UI/UX design, landing pages, and user-focused interfaces.</p>
          </div>

          {/* Web Development */}
          <div className="p-6 border border-[#4d4d4d] rounded-xl hover:border-[#6d6d6d] transition-colors">
            <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#d9d9d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-[#d3d3d3] font-semibold mb-2">Web Development</h3>
            <p className="text-[#9a9a9a] text-sm">Frontend-focused development with modern frameworks.</p>
          </div>

          {/* Visual Design */}
          <div className="p-6 border border-[#4d4d4d] rounded-xl hover:border-[#6d6d6d] transition-colors">
            <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#d9d9d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-[#d3d3d3] font-semibold mb-2">Visual Design</h3>
            <p className="text-[#9a9a9a] text-sm">Branding, posters, and visual identity systems.</p>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="relative z-10 py-16 px-6 md:px-20 lg:px-32">
        <h2 className="text-[#d3d3d3] text-xl md:text-2xl font-semibold mb-8">How I Work</h2>
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 bg-[#d9d9d9] rounded-full shrink-0" />
            <p className="text-[#b1b1b1] text-base">I care about <span className="text-white font-medium">clarity over decoration</span> — every element has a purpose.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 bg-[#d9d9d9] rounded-full shrink-0" />
            <p className="text-[#b1b1b1] text-base">I prefer <span className="text-white font-medium">minimal systems</span> that scale without becoming messy.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 bg-[#d9d9d9] rounded-full shrink-0" />
            <p className="text-[#b1b1b1] text-base">I focus on <span className="text-white font-medium">usability and aesthetics equally</span> — one doesn&apos;t compromise the other.</p>
          </div>
        </div>
      </section>

      {/* Personality Section */}
      <section className="relative z-10 py-16 px-6 md:px-20 lg:px-32">
        <h2 className="text-[#d3d3d3] text-xl md:text-2xl font-semibold mb-8">Beyond the Screen</h2>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 border border-[#4d4d4d] rounded-full text-[#cecece] text-sm">Builder mindset 🛠️</span>
          <span className="px-4 py-2 border border-[#4d4d4d] rounded-full text-[#cecece] text-sm">Late-night side projects 🌙</span>
          <span className="px-4 py-2 border border-[#4d4d4d] rounded-full text-[#cecece] text-sm">Fitness 💪</span>
          <span className="px-4 py-2 border border-[#4d4d4d] rounded-full text-[#cecece] text-sm">Football ⚽</span>
          <span className="px-4 py-2 border border-[#4d4d4d] rounded-full text-[#cecece] text-sm">Creative chaos ✨</span>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative z-10 py-20 px-6 md:px-20 lg:px-32 border-t border-[#2a2a2a]">
        <div className="max-w-2xl">
          <h2 className="font-zen-dots text-2xl md:text-3xl lg:text-4xl bg-linear-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-[#9a9a9a] text-base mb-8">
            Got a project in mind? I&apos;m always open to discussing new ideas and opportunities.
          </p>
          
          <div className="flex items-center gap-4">
            {/* Email Link */}
            <a
              href="mailto:revanshu444@gmail.com"
              className="inline-flex items-center gap-3 bg-[#111] border border-[#4d4d4d] text-[#cecece] text-sm font-medium px-6 py-3.5 rounded-lg hover:border-[#6d6d6d] hover:text-white transition-all duration-300"
            >
              <span>Email: revanshu444@gmail.com</span>
              <svg className="w-4 h-4 text-[#9a9a9a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
