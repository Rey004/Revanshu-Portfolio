import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import BackgroundTexture from "@/components/BackgroundTexture";
import ProjectCard from "@/components/ProjectCard";
import { getProjectById, getRandomProjects, projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

// Renders inline markup: [[tag]] pills and **bold** text
function renderInline(text) {
  const parts = text.split(/(\[\[.*?\]\]|\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    const tagMatch = part.match(/^\[\[(.*?)\]\]$/);
    const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
    if (tagMatch) {
      return (
        <span
          key={i}
          className="inline-block mx-[2px] px-2 py-[2px] text-[11px] font-semibold bg-[#161616] border border-[#3d3d3d] text-[#d3d3d3] rounded-sm align-middle leading-normal"
        >
          {tagMatch[1]}
        </span>
      );
    }
    if (boldMatch) {
      return <strong key={i} className="text-[#cecece] font-medium">{boldMatch[1]}</strong>;
    }
    return part;
  });
}

// Full rich-text parser: [[tag]], **bold**, - bullets, | tables |, ## subheadings
function renderRichText(text) {
  if (!text) return null;
  const lines = text.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Empty line — skip
    if (line.trim() === '') { i++; continue; }

    // Subheading: ## text
    if (line.startsWith('## ')) {
      elements.push(
        <p key={`h-${i}`} className="text-[#d3d3d3] text-[10px] font-bold uppercase tracking-[0.2em] mt-5 mb-2">
          {line.slice(3)}
        </p>
      );
      i++; continue;
    }

    // Bullet list: lines starting with "- "
    if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-2 space-y-1.5">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-[#9a9a9a] text-sm leading-relaxed">
              <span className="mt-[8px] w-[4px] h-[4px] rounded-full border border-[#555] shrink-0" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Table: lines starting with "|"
    if (line.trim().startsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const l = lines[i].trim();
        // skip separator rows like | --- | --- |
        if (!l.replace(/\|/g, '').trim().match(/^[-:\s]+$/)) {
          tableLines.push(l);
        }
        i++;
      }
      if (tableLines.length > 0) {
        const [headerRow, ...bodyRows] = tableLines;
        const headers = headerRow.split('|').filter(c => c.trim()).map(c => c.trim());
        const rows = bodyRows.map(row => row.split('|').filter(c => c.trim()).map(c => c.trim()));
        elements.push(
          <div key={`tbl-${i}`} className="my-3 overflow-x-auto border border-[#1e1e1e] rounded-sm">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#222] bg-[#0d0d0d]">
                  {headers.map((h, j) => (
                    <th key={j} className="px-3 py-2 text-left text-[#d3d3d3] font-semibold uppercase tracking-wider text-[10px] whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, j) => (
                  <tr key={j} className="border-b border-[#141414] last:border-0">
                    {row.map((cell, k) => (
                      <td key={k} className="px-3 py-2 text-[#9a9a9a] align-top">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Regular paragraph — collect consecutive non-special lines
    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('- ') &&
      !lines[i].trim().startsWith('|') &&
      !lines[i].startsWith('## ')
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      elements.push(
        <p key={`p-${i}`} className="text-[#9a9a9a] text-sm leading-[1.85] mb-1">
          {renderInline(paraLines.join(' '))}
        </p>
      );
    }
  }

  return <div className="space-y-0.5">{elements}</div>;
}

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
                      className="w-3 h-3 text-black transition-transform duration-300 -rotate-45 group-hover:rotate-45"
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
          <div className="space-y-10">

            {/* Problems */}
            {project.problems && (
              <section>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-[#4d4d4d]">01</span>
                  <h2 className="text-[#d3d3d3] text-sm font-bold uppercase tracking-widest">Problem</h2>
                  <div className="h-px flex-1 bg-[#1e1e1e]" />
                </div>
                <div className="text-[#9a9a9a] text-sm leading-[1.85]">
                  {renderRichText(project.problems)}
                </div>
              </section>
            )}

            {/* Solutions */}
            {project.solutions && (
              <section>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-[#4d4d4d]">02</span>
                  <h2 className="text-[#d3d3d3] text-sm font-bold uppercase tracking-widest">Solution</h2>
                  <div className="h-px flex-1 bg-[#1e1e1e]" />
                </div>
                <div className="text-[#9a9a9a] text-sm leading-[1.85]">
                  {renderRichText(project.solutions)}
                </div>
              </section>
            )}

            {/* Learnings */}
            {project.learnings && (
              <section>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-[#4d4d4d]">03</span>
                  <h2 className="text-[#d3d3d3] text-sm font-bold uppercase tracking-widest">Learnings</h2>
                  <div className="h-px flex-1 bg-[#1e1e1e]" />
                </div>
                <div className="text-[#9a9a9a] text-sm leading-[1.85]">
                  {renderRichText(project.learnings)}
                </div>
              </section>
            )}

            {/* Work With Me Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-black border border-[#4d4d4d] rounded-full px-6 py-4 hover:border-[#6d6d6d] transition-all duration-300 group"
            >
              <span className="text-[#cecece] text-sm font-medium">Work with me</span>
              <div className="w-8 h-8 bg-[#d9d9d9] rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <svg
                  className="w-3.5 h-3.5 text-black transition-transform duration-300 -rotate-45 group-hover:rotate-45"
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
                key={image}
                className="relative aspect-video rounded-2xl overflow-hidden border border-[#4d4d4d]"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 2}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* More Case Studies Divider */}
      <div className="relative py-4 overflow-hidden">
        <div className="-rotate-[1.5deg] bg-[#d9d9d9] py-5 overflow-hidden">
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
