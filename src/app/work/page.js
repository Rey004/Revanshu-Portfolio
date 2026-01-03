"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import BackgroundTexture from "@/components/BackgroundTexture";
import ProjectCard from "@/components/ProjectCard";
import { projects, categories } from "@/data/projects";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <main className="relative min-h-screen bg-[#060606]">
      <BackgroundTexture />
      <Navbar />

      <section className="relative z-10 pt-32 pb-20 px-6 md:px-20">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-lg text-xs font-extrabold transition-all duration-300 ${
                activeFilter === category
                  ? category === "Favourites"
                    ? "bg-[#ff4343] text-white"
                    : "bg-[#d9d9d9] text-black"
                  : "bg-transparent border border-white text-white hover:bg-white/10"
              }`}
            >
              {category === "Favourites" ? "Favourites ❤️" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#9a9a9a] text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
