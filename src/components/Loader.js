"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null);
  const orbRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const blocksContainerRef = useRef(null);
  const blocksRef = useRef([]);
  const BLOCK_SIZE = 60;

  // Create transition blocks for exit animation
  const createTransitionBlocks = () => {
    if (!blocksContainerRef.current) return;

    const container = blocksContainerRef.current;
    container.innerHTML = "";
    blocksRef.current = [];

    const gridWidth = window.innerWidth;
    const gridHeight = window.innerHeight;

    const columns = Math.ceil(gridWidth / BLOCK_SIZE);
    const rows = Math.ceil(gridHeight / BLOCK_SIZE) + 1;

    const offsetX = (gridWidth - columns * BLOCK_SIZE) / 2;
    const offsetY = (gridHeight - rows * BLOCK_SIZE) / 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const block = document.createElement("div");
        block.className = "loader-block";
        block.style.cssText = `
          position: absolute;
          width: ${BLOCK_SIZE}px;
          height: ${BLOCK_SIZE}px;
          left: ${col * BLOCK_SIZE + offsetX}px;
          top: ${row * BLOCK_SIZE + offsetY}px;
          background: #0a0a0a;
          opacity: 1;
        `;
        container.appendChild(block);
        blocksRef.current.push(block);
      }
    }
  };

  useEffect(() => {
    createTransitionBlocks();

    // Animate orb glow
    gsap.to(orbRef.current, {
      scale: 1.1,
      opacity: 0.8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate progress
        const increment = prev < 70 ? Math.random() * 15 + 5 : Math.random() * 8 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Complete animation sequence
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Fade out loader content
      tl.to([orbRef.current, textRef.current, progressRef.current], {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "power2.inOut",
      });

      // Transition blocks fade out (same as page transition)
      tl.to(
        blocksRef.current,
        {
          opacity: 0,
          duration: 0.05,
          ease: "power2.inOut",
          stagger: { amount: 0.5, from: "random" },
        },
        "-=0.2"
      );

      // Hide entire loader
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.1,
        pointerEvents: "none",
      });
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ background: "#000000" }}
    >
      {/* Transition Blocks Container */}
      <div
        ref={blocksContainerRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Loader Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Orb Effect */}
        <div
          ref={orbRef}
          className="relative w-32 h-32 md:w-40 md:h-40 mb-8"
        >
          {/* Central glow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          {/* Inner core */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(217,217,217,0.5) 50%, transparent 100%)",
              filter: "blur(10px)",
            }}
          />
          {/* Orbiting ring */}
          <div
            className="absolute inset-2 rounded-full border border-white/20 animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute inset-4 rounded-full border border-white/10 animate-spin"
            style={{ animationDuration: "5s", animationDirection: "reverse" }}
          />
        </div>

        {/* Loading Text */}
        <div ref={textRef} className="text-center">
          <h2 className="font-zen-dots text-lg md:text-xl bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mb-4">
            Loading
          </h2>
        </div>

        {/* Progress Bar */}
        <div ref={progressRef} className="w-48 md:w-64">
          <div className="h-[2px] bg-[#2a2a2a] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#666666] via-white to-[#666666] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[#6d6d6d] text-xs text-center mt-3 font-mono">
            {Math.round(progress)}%
          </p>
        </div>
      </div>

      {/* Ambient Spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
