import Navbar from "@/components/Navbar";
import BackgroundTexture from "@/components/BackgroundTexture";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#060606]">
      <BackgroundTexture />
      <Navbar />

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Work in Progress */}
        <div className="flex flex-col items-center gap-6">
          {/* Animated Icon */}
          <div className="relative">
            <div className="w-24 h-24 border-4 border-[#4d4d4d] border-t-[#d9d9d9] rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl">🚧</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-zen-dots text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
            Work in Progress
          </h1>

          {/* Description */}
          <p className="text-[#9a9a9a] text-sm md:text-base max-w-md">
            This page is currently under construction. Check back soon to learn more about me!
          </p>

          {/* Back Button */}
          <Link
            href="/"
            className="mt-6 flex items-center gap-3 bg-black border border-[#4d4d4d] rounded-full px-6 py-3 hover:border-[#6d6d6d] transition-all duration-300 group"
          >
            <div className="w-7 h-7 bg-[#d9d9d9] rounded-full flex items-center justify-center group-hover:bg-white transition-colors rotate-180">
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
            <span className="text-[#cecece] text-sm font-medium">Go Back Home</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
