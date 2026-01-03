export default function BackgroundTexture() {
  return (
    <>
      {/* Spotlight Effect */}
      <div className="fixed top-[-400px] left-1/2 -translate-x-1/2 w-[1012px] h-[700px] pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#1a3a4a]/40 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Side Textures */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Left texture */}
        <div className="absolute left-0 top-0 w-[300px] h-full opacity-10 mix-blend-soft-light">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
        </div>
        
        {/* Right texture */}
        <div className="absolute right-0 top-0 w-[300px] h-full opacity-10 mix-blend-soft-light">
          <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent" />
        </div>
      </div>
    </>
  );
}
