import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#000000] overflow-hidden">
      {/* Spotlight Effect */}
      <div 
        className="absolute lg:top-[-300] left-1/2 -translate-x-1/2 w-[1000px] md:w-[500px] lg:w-[2000px] h-[300px] md:h-[450px] lg:h-[600px] md:opacity-100 opacity-80 blur-lg pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)' }}
      />
      
      {/* Secondary spotlight glow */} 
      <div 
        className="absolute -top-[80px] md:-top-[150px] lg:-top-[200px] left-1/2 -translate-x-1/2 w-[250px] md:w-[400px] lg:w-[600px] h-[180px] md:h-[300px] lg:h-[400px] rounded-full blur-[50px] md:blur-[80px] lg:blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}
      />

      {/* Orb Video */}
      <div className="absolute bottom-[-80px] md:bottom-[-150px] lg:bottom-[-200px] left-1/2 -translate-x-1/2 w-[200vw] md:max-w-3xl lg:max-w-5xl h-[280px] md:h-[450px] lg:h-[600px] pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-contain"
        >
          <source src="/video/Orb.webm" type="video/webm" />
        </video>
      </div>

      {/* Floating Debris Elements */}
      <div className="absolute top-[60%] md:top-[55%] left-[5%] md:left-[10%] lg:left-[15%] w-10 md:w-16 lg:w-24 h-10 md:h-16 lg:h-24 pointer-events-none z-10 animate-float">
        <Image
          src="/images/home/Debris 1.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-[55%] md:top-[50%] right-[5%] md:right-[8%] lg:right-[12%] w-8 md:w-16 lg:w-24 h-8 md:h-16 lg:h-24 pointer-events-none z-10 animate-float-reverse">
        <Image
          src="/images/home/Debris 2.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Texture Overlay - Soft Light Blend Mode */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{ mixBlendMode: 'soft-light' }}
      >
        <Image
          src="/images/Texture.webp"
          alt=""
          fill
          className="object-cover opacity-30"
        />
      </div>

      <Navbar />

      {/* Hero Content */}
      <section className="relative top-[-80px] z-30 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 text-center">
        {/* Greeting */}
        <p className="text-white text-base md:text-md font-bold mb-3 md:mb-4">
          Hey There, I&apos;m Revanshu 👋
        </p>

        {/* Main Heading */}
        <h1 className="font-zen-dots text-[1.5rem] md:text-3xl lg:text-5xl bg-linear-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
          Designer. Developer. Builder.
        </h1>

        {/* Subheading */}
        <p className="text-[#b1b1b1] text-xs md:text-xs lg:text-base max-w-[280px] md:max-w-md lg:max-w-xl mb-8 md:mb-10">
          I do web design, development & visuals for modern brands and creators.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 sm:">
          {/* View More Button */}
          <Link
            href="/work"
            className="flex items-center gap-2 md:gap-3 bg-black border border-[#4d4d4d] rounded-full px-5 md:px-6 py-2.5 md:py-3 hover:border-[#6d6d6d] transition-all duration-300 group"
          >
            <span className="text-[#cecece] text-xs md:text-2xs font-medium">View Work</span>
            <div className="w-6 md:w-7 h-6 md:h-7 bg-[#d9d9d9] rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
              <svg
                className="w-2.5 md:w-3 h-2.5 md:h-3 text-black -rotate-45"
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

          {/* About Me Button */}
          <Link
            href="/about"
            className="bg-[#d9d9d9] text-black text-xs md:text-2xs font-semibold px-5 md:px-6 py-2.5 md:py-3 hover:bg-white transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>
    </main>
  );
}
