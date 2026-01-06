import Navbar from "@/components/Navbar";
import BackgroundTexture from "@/components/BackgroundTexture";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#060606]">
      <BackgroundTexture />
      <Navbar />

      {/* Hero Section - Intro */}
      <section className="relative z-10 pt-32 pb-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-2xl">
          {/* Intro Text */}
          <div className="space-y-6">
            <p className="text-[#9a9a9a] text-sm uppercase tracking-widest">About Me</p>
            <h1 className="font-zen-dots text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent leading-tight">
              I'm Revanshu
            </h1>
            <p className="text-[#b1b1b1] text-base md:text-lg leading-relaxed max-w-lg">
              A designer & developer who enjoys building clean, functional products. I focus on creating things that work well and look good doing it.
            </p>
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
            <p className="text-[#b1b1b1] text-base">I focus on <span className="text-white font-medium">usability and aesthetics equally</span> — one doesn't compromise the other.</p>
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
            Let's Build Something
          </h2>
          <p className="text-[#9a9a9a] text-base mb-8">
            Got a project in mind? I'm always open to discussing new ideas and opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Let's Work Button */}
            <Link
              href="mailto:revanshu444@gmail.com"
              className="flex items-center gap-3 bg-black border border-[#4d4d4d] rounded-full px-6 py-3 hover:border-[#6d6d6d] transition-all duration-300 group"
            >
              <span className="text-[#cecece] text-sm font-medium">Let's Work</span>
              <div className="w-7 h-7 bg-[#d9d9d9] rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <svg
                  className="w-3 h-3 text-black -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Link>

            {/* Email */}
            <a
              href="mailto:revanshu444@gmail.com"
              className="text-[#9a9a9a] text-sm hover:text-white transition-colors"
            >
              revanshu444@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
