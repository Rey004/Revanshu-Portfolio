"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/work/${project.id}`} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="relative bg-transparent border border-[#4d4d4d] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#6d6d6d] hover:scale-[1.02]">
        {/* Thumbnail */}
        <div className="relative aspect-16/10 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60 z-10" />
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="absolute top-4 left-4 z-20">
          <h3 className="text-[#d3d3d3] text-base font-semibold">{project.title}</h3>
          <p className="text-[#9a9a9a] text-xs mt-1">{project.subtitle}</p>
        </div>

        {/* View More Button */}
        <div className="absolute bottom-4 right-4 z-20">
          <div className="flex items-center gap-2 bg-black border border-[#4d4d4d] rounded-full px-4 py-2 transition-all duration-300 group-hover:bg-[#1a1a1a] group-hover:border-[#6d6d6d]">
            <span className="text-[#cecece] text-xs font-medium">View More</span>
            <div className="w-5 h-5 bg-[#d9d9d9] rounded-full flex items-center justify-center">
              <svg
                className="w-2.5 h-2.5 text-black transition-transform duration-300 -rotate-45 group-hover:rotate-45"
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
          </div>
        </div>
      </div>
    </Link>
  );
}
