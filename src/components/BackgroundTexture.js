import Image from "next/image";

export default function BackgroundTexture() {
  return (
    <>
      {/* Primary Spotlight Effect - Top */}
      <div 
        className="fixed top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] md:w-[1500px] lg:w-[2000px] h-[400px] md:h-[500px] lg:h-[600px] opacity-60 blur-lg pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)' }}
      />
      
      {/* Secondary Spotlight Glow */}
      <div 
        className="fixed -top-[100px] md:-top-[150px] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] lg:w-[700px] h-[200px] md:h-[300px] lg:h-[400px] rounded-full blur-[60px] md:blur-[80px] lg:blur-[120px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
      />

      {/* Bottom Ambient Glow */}
      <div 
        className="fixed bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] lg:w-[1600px] h-[300px] md:h-[400px] lg:h-[500px] opacity-40 blur-[80px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 60%)' }}
      />

      {/* Corner Accent - Left */}
      <div 
        className="fixed top-[20%] left-[-100px] w-[300px] md:w-[400px] h-[400px] md:h-[600px] opacity-30 blur-[100px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
      />

      {/* Corner Accent - Right */}
      <div 
        className="fixed top-[40%] right-[-100px] w-[300px] md:w-[400px] h-[400px] md:h-[600px] opacity-30 blur-[100px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)' }}
      />

      {/* Side Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Left edge gradient */}
        <div className="absolute left-0 top-0 w-[200px] md:w-[300px] h-full opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
        </div>
        
        {/* Right edge gradient */}
        <div className="absolute right-0 top-0 w-[200px] md:w-[300px] h-full opacity-20">
          <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent" />
        </div>

        {/* Top edge gradient */}
        <div className="absolute top-0 left-0 right-0 h-[200px] opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        </div>
      </div>

      {/* Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{ mixBlendMode: 'soft-light' }}
      >
        <Image
          src="/images/Texture.webp"
          alt=""
          fill
          className="object-cover opacity-25"
        />
      </div>

      {/* Subtle Noise/Grain Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-[2] opacity-[0.015]"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
    </>
  );
}
