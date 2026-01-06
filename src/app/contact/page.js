import Navbar from "@/components/Navbar";
import BackgroundTexture from "@/components/BackgroundTexture";
import Link from "next/link";

export const metadata = {
  title: "Contact | Revanshu",
  description: "Get in touch with me for collaborations, projects, or just to say hi.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#060606]">
      <BackgroundTexture />
      <Navbar />

      <section className="relative z-10 pt-32 pb-20 px-6 md:px-20 lg:px-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-[#9a9a9a] text-sm uppercase tracking-widest mb-4">Contact</p>
            <h1 className="font-zen-dots text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent leading-tight mb-6">
              Let's Talk
            </h1>
            <p className="text-[#b1b1b1] text-base md:text-lg max-w-lg">
              Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <a
              href="mailto:revanshu444@gmail.com"
              className="group p-8 border border-[#4d4d4d] rounded-xl hover:border-[#6d6d6d] transition-all duration-300 hover:bg-[#0a0a0a]"
            >
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#252525] transition-colors">
                <svg className="w-6 h-6 text-[#d9d9d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[#d3d3d3] font-semibold text-lg mb-2">Email Me</h3>
              <p className="text-[#9a9a9a] text-sm mb-4">Best for project inquiries and collaborations.</p>
              <span className="text-white text-sm font-medium group-hover:underline">revanshu444@gmail.com</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/revanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-[#4d4d4d] rounded-xl hover:border-[#6d6d6d] transition-all duration-300 hover:bg-[#0a0a0a]"
            >
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#252525] transition-colors">
                <svg className="w-6 h-6 text-[#d9d9d9]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-[#d3d3d3] font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-[#9a9a9a] text-sm mb-4">Let's connect professionally.</p>
              <span className="text-white text-sm font-medium group-hover:underline">Connect with me →</span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Rey004"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-[#4d4d4d] rounded-xl hover:border-[#6d6d6d] transition-all duration-300 hover:bg-[#0a0a0a]"
            >
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#252525] transition-colors">
                <svg className="w-6 h-6 text-[#d9d9d9]" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </div>
              <h3 className="text-[#d3d3d3] font-semibold text-lg mb-2">GitHub</h3>
              <p className="text-[#9a9a9a] text-sm mb-4">Check out my projects and contributions.</p>
              <span className="text-white text-sm font-medium group-hover:underline">View my work →</span>
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/revanshu_04"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-[#4d4d4d] rounded-xl hover:border-[#6d6d6d] transition-all duration-300 hover:bg-[#0a0a0a]"
            >
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#252525] transition-colors">
                <svg className="w-6 h-6 text-[#d9d9d9]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-[#d3d3d3] font-semibold text-lg mb-2">Instagram</h3>
              <p className="text-[#9a9a9a] text-sm mb-4">Follow my creative journey.</p>
              <span className="text-white text-sm font-medium group-hover:underline">Follow me →</span>
            </a>

            {/* X (Twitter) Card */}
            <a
              href="https://x.com/Revanshu04"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-[#4d4d4d] rounded-xl hover:border-[#6d6d6d] transition-all duration-300 hover:bg-[#0a0a0a]"
            >
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#252525] transition-colors">
                <svg className="w-6 h-6 text-[#d9d9d9]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <h3 className="text-[#d3d3d3] font-semibold text-lg mb-2">X (Twitter)</h3>
              <p className="text-[#9a9a9a] text-sm mb-4">Follow for updates and thoughts.</p>
              <span className="text-white text-sm font-medium group-hover:underline">Follow me →</span>
            </a>
          </div>

          {/* Direct CTA */}
          <div className="text-center pt-8 border-t border-[#2a2a2a]">
            <p className="text-[#9a9a9a] text-sm mb-6">Prefer a quick message?</p>
            <a
              href="mailto:revanshu444@gmail.com"
              className="inline-flex items-center gap-3 bg-[#d9d9d9] text-black font-semibold px-8 py-4 hover:bg-white transition-colors"
            >
              <span>Send a Message</span>
              <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
