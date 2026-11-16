"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ResumeViewer() {
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const viewerContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handlePrint = () => {
    const iframe = document.getElementById("resume-iframe");
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } catch {
        window.open("/Revanshu_Resume.pdf", "_blank");
      }
    } else {
      window.open("/Revanshu_Resume.pdf", "_blank");
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div className="space-y-8">
      {/* Header Info & Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#222]">
        <div className="space-y-2">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#888]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Resume</span>
          </div>

          <h1 className="font-zen-dots text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent leading-tight">
            Resume / CV
          </h1>

          <p className="text-[#9a9a9a] text-sm md:text-base max-w-xl">
            View the verified curriculum vitae of Revanshu — Full Stack Developer & Designer. Preview the document below or download a copy.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Primary Download Button */}
          <a
            href="/Revanshu_Resume.pdf"
            download="Revanshu_Resume.pdf"
            className="group inline-flex items-center gap-2.5 bg-[#d9d9d9] hover:bg-white text-black font-extrabold text-xs md:text-sm px-5 py-3 rounded-lg active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <span>Download PDF</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
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

          {/* Open in New Window */}
          <a
            href="/Revanshu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#121212] hover:bg-[#1f1f1f] border border-[#333] hover:border-[#666] text-[#cecece] hover:text-white text-xs md:text-sm font-semibold px-4 py-3 rounded-lg active:scale-95 transition-all"
            title="Open PDF in new tab"
          >
            <span>Open in Tab</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-2 bg-[#121212] hover:bg-[#1f1f1f] border border-[#333] hover:border-[#666] text-[#cecece] hover:text-white text-xs md:text-sm font-semibold px-3.5 py-3 rounded-lg active:scale-95 transition-all"
            title="Print Resume"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24-1.282-1.27-2.329-2.52-2.329H3.75A2.25 2.25 0 001.5 13.75v5.25c0 .621.504 1.125 1.125 1.125h18.75c.621 0 1.125-.504 1.125-1.125v-5.25a2.25 2.25 0 00-2.25-2.25h-.45c-1.25 0-2.28 1.047-2.52 2.329m-10.5 0a3 3 0 006 0m-6 0h6m-9-6.75V4.5a2.25 2.25 0 012.25-2.25h9A2.25 2.25 0 0118.75 4.5v2.579M6 9.75h12"
              />
            </svg>
          </button>

          {/* Copy Share Link */}
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 bg-[#121212] hover:bg-[#1f1f1f] border border-[#333] hover:border-[#666] text-[#cecece] hover:text-white text-xs md:text-sm font-semibold px-3.5 py-3 rounded-lg active:scale-95 transition-all"
            title="Copy Page Link"
          >
            {copied ? (
              <>
                <svg
                  className="w-3.5 h-3.5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-green-400">Copied</span>
              </>
            ) : (
              <>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-3.364l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Resume File Interface Container */}
      <div
        ref={viewerContainerRef}
        className={`border border-[#333] rounded-xl bg-[#0c0c0c] shadow-2xl relative transition-all duration-300 ${
          isFullscreen
            ? "fixed inset-4 z-[9999] md:inset-8 flex flex-col bg-[#0c0c0c] border-[#555]"
            : "overflow-hidden"
        }`}
      >
        {/* Terminal / File Viewer Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#222] bg-[#111]/80 backdrop-blur-sm select-none">
          {/* Left: Window Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 hover:bg-[#ff5f56] transition-colors" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 hover:bg-[#ffbd2e] transition-colors" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 hover:bg-[#27c93f] transition-colors" />
            </div>

            {/* File info pill */}
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#2a2a2a] text-xs font-mono">
              <svg
                className="w-3.5 h-3.5 text-[#ff4343]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 12h8v2H8v-2zm0 4h8v2H8v-2z" />
              </svg>
              <span className="text-[#cecece]">Revanshu_Resume.pdf</span>
              <span className="text-[#666] text-[10px] bg-[#1c1c1c] px-1.5 py-0.5 rounded border border-[#2e2e2e]">
                568 KB
              </span>
            </div>
          </div>

          {/* Center: Status indicator */}
          <div className="flex items-center gap-2 text-xs text-[#888] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden md:inline text-[#aaa]">Ready to View &amp; Download</span>
            <span className="md:hidden text-[#aaa]">PDF Preview</span>
          </div>

          {/* Right: Window actions */}
          <div className="flex items-center gap-2">
            {/* Direct download icon button */}
            <a
              href="/Revanshu_Resume.pdf"
              download="Revanshu_Resume.pdf"
              className="p-1.5 text-[#888] hover:text-white hover:bg-[#222] rounded transition-colors"
              title="Download file"
              aria-label="Download PDF"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>

            {/* Fullscreen toggle button */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 text-[#888] hover:text-white hover:bg-[#222] rounded transition-colors"
              title={isFullscreen ? "Exit Fullscreen" : "Expand to Fullscreen"}
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9L4 4m0 0h4m-4 0v4m11 11l5 5m0 0h-4m4 0v-4m-11 0l-5 5m0 0h4m-4 0v-4m11-11l5-5m0 0h-4m4 0v4"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile notice banner (helper for small screens where iframe PDF scrolling can be awkward) */}
        {isMobile && (
          <div className="bg-[#141414] border-b border-[#222] px-4 py-2.5 flex items-center justify-between text-xs text-[#999]">
            <span>Mobile user? For optimal reading, open PDF directly:</span>
            <a
              href="/Revanshu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline font-medium hover:text-[#d9d9d9] ml-2 shrink-0"
            >
              Open Fullscreen →
            </a>
          </div>
        )}

        {/* Embedded PDF Viewer */}
        <div
          className={`relative w-full bg-[#161616] ${
            isFullscreen
              ? "flex-1 min-h-0"
              : "h-[70vh] sm:h-[78vh] md:h-[84vh] lg:h-[90vh] min-h-[550px]"
          }`}
        >
          <iframe
            id="resume-iframe"
            src="/Revanshu_Resume.pdf#toolbar=1&navpanes=0&view=FitH"
            title="Revanshu's Resume PDF"
            className="w-full h-full border-0 rounded-b-xl"
          />

          {/* Fallback if iframe fails to render */}
          <noscript>
            <div className="p-8 text-center text-[#cecece]">
              <p className="mb-4">PDF preview requires JavaScript enabled.</p>
              <a
                href="/Revanshu_Resume.pdf"
                download="Revanshu_Resume.pdf"
                className="bg-[#d9d9d9] text-black px-6 py-2.5 rounded-lg font-bold"
              >
                Download PDF
              </a>
            </div>
          </noscript>
        </div>

        {/* File window bottom status bar */}
        <div className="hidden sm:flex items-center justify-between px-4 py-2 bg-[#0d0d0d] border-t border-[#1f1f1f] text-[11px] font-mono text-[#666]">
          <div className="flex items-center gap-3">
            <span>Encoding: PDF-1.7</span>
            <span>•</span>
            <span>Target: Revanshu_Resume.pdf</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/Revanshu_Resume.pdf"
              download="Revanshu_Resume.pdf"
              className="text-[#999] hover:text-white transition-colors"
            >
              Direct Download Link (568 KB)
            </a>
          </div>
        </div>
      </div>

      {/* Highlights & Quick Details Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="border border-[#2d2d2d] rounded-xl bg-[#0e0e0e] p-5 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#ff4343] font-bold text-sm">
            01
          </div>
          <h3 className="text-white text-base font-semibold">Core Expertise</h3>
          <p className="text-[#8e8e8e] text-xs leading-relaxed">
            Full Stack Development, Web Architecture, Responsive UI/UX, React, Next.js, Tailwind CSS, Node.js &amp; Modern API integrations.
          </p>
        </div>

        <div className="border border-[#2d2d2d] rounded-xl bg-[#0e0e0e] p-5 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#ff4343] font-bold text-sm">
            02
          </div>
          <h3 className="text-white text-base font-semibold">Availability</h3>
          <p className="text-[#8e8e8e] text-xs leading-relaxed">
            Open for full-time engineering roles, high-impact contract projects, and freelance collaboration on ambitious digital products.
          </p>
        </div>

        <div className="border border-[#2d2d2d] rounded-xl bg-[#0e0e0e] p-5 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#ff4343] font-bold text-sm">
            03
          </div>
          <h3 className="text-white text-base font-semibold">Get in Touch</h3>
          <p className="text-[#8e8e8e] text-xs leading-relaxed">
            Have an opportunity or project in mind? Reach out via email directly at{" "}
            <a
              href="mailto:revanshu444@gmail.com"
              className="text-white underline hover:text-[#d9d9d9]"
            >
              revanshu444@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
