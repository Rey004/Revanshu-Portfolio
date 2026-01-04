import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import BackgroundTexture from "@/components/BackgroundTexture";
import ProjectCard from "@/components/ProjectCard";
import { getProjectById, getRandomProjects, projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.subtitle,
  };
}

export default async function CaseStudyPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  // Get random recommendations excluding current project
  const recommendations = getRandomProjects(project.id, 4);

  return (
    <main className="relative min-h-screen bg-[#060606]">
      <BackgroundTexture />
      <Navbar />

      <article className="relative z-10 pt-32 pb-20 px-6 md:px-20 lg:px-32">
        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Left: Project Info */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="font-semibold text-[#d3d3d3] text-4xl md:text-5xl mb-3">
                {project.title}
              </h1>
              <p className="text-[#9a9a9a] text-base md:text-lg">
                {project.subtitle}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.socials?.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-black border-2 border-[#4d4d4d] rounded-full px-5 py-3 hover:border-[#6d6d6d] transition-all duration-300 group"
                >
                  <span className="text-[#cecece] text-sm font-semibold">{social.platform}</span>
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
                </a>
              ))}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#d9d9d9] text-black text-sm font-semibold px-7 py-3 hover:bg-white transition-colors"
                >Live Link</a>
              )}
            </div>

            {/* Metadata */}
            <div className="space-y-4 pt-4">
              {/* Role */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[#d3d3d3] text-sm font-bold">Role</span>
                {project.roles.map((role) => (
                  <span
                    key={role}
                    className="px-4 py-2 border border-[#767676] rounded-md text-[#cecece] text-xs font-semibold"
                  >
                    {role}
                  </span>
                ))}
              </div>

              {/* Tools */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[#d3d3d3] text-sm font-bold">Tools</span>
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 border border-[#767676] rounded-md text-[#cecece] text-xs font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Timeline & Type */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#d9d9d9] text-black text-xs">
                  <span className="font-bold">Timeline:</span> {project.timeline}
                </span>
                <span className="px-4 py-2 bg-[#d9d9d9] text-black text-xs">
                  <span className="font-bold">Type:</span> {project.type}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Main Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#4d4d4d]">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Case Study Content */}
          <div className="space-y-12">
            {/* Problems */}
            <section>
              <h2 className="text-[#d3d3d3] text-xl font-semibold mb-4">Problems</h2>
              <div className="text-[#9a9a9a] text-sm leading-relaxed whitespace-pre-line">
                {project.problems}
              </div>
            </section>

            {/* Solutions */}
            <section>
              <h2 className="text-[#d3d3d3] text-xl font-semibold mb-4">Solutions</h2>
              <div className="text-[#9a9a9a] text-sm leading-relaxed whitespace-pre-line">
                {project.solutions}
              </div>
            </section>

            {/* Learnings */}
            <section>
              <h2 className="text-[#d3d3d3] text-xl font-semibold mb-4">Learnings</h2>
              <div className="text-[#9a9a9a] text-sm leading-relaxed whitespace-pre-line">
                {project.learnings}
              </div>
            </section>

            {/* Work With Me Button */}
            <Link
              href="mailto:revanshu444@gmail.com"
              className="inline-flex items-center gap-3 bg-black border border-[#4d4d4d] rounded-full px-6 py-4 hover:border-[#6d6d6d] transition-all duration-300 group"
            >
              <span className="text-[#cecece] text-sm font-medium">Work with me</span>
              <div className="w-8 h-8 bg-[#d9d9d9] rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <svg
                  className="w-3.5 h-3.5 text-black -rotate-45"
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
          </div>

          {/* Right: Project Images */}
          <div className="space-y-6">
            {project.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-2xl overflow-hidden border border-[#4d4d4d]"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* More Case Studies Divider */}
      <div className="relative py-8 overflow-hidden bg-[#d9d9d9]">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-zen-dots text-xl text-black mx-8">MORE CASESTUDIES</span>
          <span className="text-black mx-4">•</span>
          <span className="font-zen-dots text-xl text-black mx-8">MORE CASESTUDIES</span>
          <span className="text-black mx-4">•</span>
          <span className="font-zen-dots text-xl text-black mx-8">MORE CASESTUDIES</span>
          <span className="text-black mx-4">•</span>
          <span className="font-zen-dots text-xl text-black mx-8">MORE CASESTUDIES</span>
          <span className="text-black mx-4">•</span>
          <span className="font-zen-dots text-xl text-black mx-8">MORE CASESTUDIES</span>
          <span className="text-black mx-4">•</span>
          <span className="font-zen-dots text-xl text-black mx-8">MORE CASESTUDIES</span>
          <span className="text-black mx-4">•</span>
        </div>
      </div>

      {/* Recommendations Section */}
      <section className="relative z-10 py-16 px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((rec) => (
            <ProjectCard key={rec.id} project={rec} />
          ))}
        </div>
      </section>
    </main>
  );
}
