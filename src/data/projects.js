export const projects = [
  {
    id: "code-vantage",
    title: "Code Vantage",
    subtitle: "3D Interactive Agency Website",
    category: ["Favourites", "Websites"],
    thumbnail: "/images/projects/code-vantage-thumb.svg",
    images: [
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg"
    ],
    roles: ["Web Design", "Development"],
    tools: ["Figma", "Spline", "React"],
    timeline: "1 week",
    type: "Personal",
    github: "https://github.com/yourusername/code-vantage",
    liveLink: "https://code-vantage.vercel.app",
    problems: `The goal of this project was to build a professional, modern, and interactive website for our web design agency to confidently pitch clients. While aiming for a sleek and futuristic look, we ran into performance issues as the website grew in complexity. Heavy assets and animated elements started causing slow load times and laggy interactions, which directly hurt the user experience.

Another challenge was the lack of expertise in creating custom 3D elements from scratch. We wanted to include a unique 3D visual aligned with our agency's branding, but without proper optimization, these elements risked making the site feel slow and unpolished—exactly the opposite of what a client-facing website should be.`,
    solutions: `Instead of forcing a complex setup, we took a practical approach. We used a pre-existing 3D element from Spline and customized its shape and material to match our agency's logo, allowing us to maintain brand consistency without overengineering the solution. This helped us achieve the interactive 3D feel while staying within our technical comfort zone.

To fix performance issues, we focused heavily on optimization. All image assets were converted from PNG to WebP to reduce file size, and the 3D model was simplified by keeping the mesh low-poly—reducing unnecessary edge density while preserving visual quality. We intentionally avoided using Three.js to keep development faster, simpler, and more maintainable, prioritizing real-world usability over technical complexity.

The overall design was kept minimal, clean, and futuristic, ensuring the 3D element enhanced the experience instead of overwhelming it.`,
    learnings: `The final result was a visually striking yet performant website that felt professional and client-ready. The smoother animations and faster load times significantly improved usability, and the project was well appreciated by our peer group for its uniqueness and execution.

On a personal level, this project boosted my confidence massively. I learned how to balance aesthetics with performance, how to optimize 3D and visual assets effectively, and how to extract high-quality, consistent outputs from AI image-generation tools. Most importantly, it proved to me that I can build interactive, modern websites with 3D elements—even without relying on heavy frameworks like Three.js.

If I were to revisit this project, I'd push performance testing even further and explore deeper 3D customization—but the foundation built here already unlocked a new level of creative confidence.`
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    subtitle: "Visual Identity Design System",
    category: ["Brands", "Design"],
    thumbnail: "/images/projects/placeholder.svg",
    images: [
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg"
    ],
    roles: ["Brand Design", "Visual Design"],
    tools: ["Figma", "Illustrator", "Photoshop"],
    timeline: "2 weeks",
    type: "Client",
    github: "",
    liveLink: "",
    problems: `The client needed a complete visual identity overhaul to better represent their modern approach to business. Their existing brand felt outdated and didn't resonate with their target audience.`,
    solutions: `Created a comprehensive brand identity system including logo variations, color palette, typography guidelines, and application examples across various media.`,
    learnings: `This project taught me the importance of understanding client vision and translating abstract ideas into tangible visual elements that communicate effectively.`
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Shopping Experience",
    category: ["Websites", "Favourites"],
    thumbnail: "/images/projects/placeholder.svg",
    images: [
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg"
    ],
    roles: ["Full Stack Development", "UI Design"],
    tools: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
    timeline: "4 weeks",
    type: "Personal",
    github: "https://github.com/yourusername/ecommerce",
    liveLink: "https://ecommerce-demo.vercel.app",
    problems: `Building a complete e-commerce solution with secure payments, inventory management, and a seamless user experience required careful planning and execution.`,
    solutions: `Implemented a headless architecture with Next.js, integrated Stripe for payments, and created an intuitive admin dashboard for inventory management.`,
    learnings: `Learned the complexities of handling real-time inventory, secure payment flows, and optimizing for conversion rates through UX improvements.`
  },
  {
    id: "mobile-app-design",
    title: "Fitness Tracker App",
    subtitle: "Mobile App UI/UX Design",
    category: ["Design", "Favourites"],
    thumbnail: "/images/projects/placeholder.svg",
    images: [
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg"
    ],
    roles: ["UI Design", "UX Research"],
    tools: ["Figma", "Protopie", "Maze"],
    timeline: "3 weeks",
    type: "Personal",
    github: "",
    liveLink: "https://figma.com/proto/example",
    problems: `Designing an intuitive fitness tracking experience that motivates users while not overwhelming them with data was a key challenge.`,
    solutions: `Created a clean, motivating interface with gamification elements and progressive disclosure of complex data to keep users engaged.`,
    learnings: `User research and iterative testing proved invaluable in creating an experience that truly resonates with the target audience.`
  },
  {
    id: "portfolio-redesign",
    title: "Portfolio Redesign",
    subtitle: "Personal Brand Website",
    category: ["Websites", "Design"],
    thumbnail: "/images/projects/placeholder.svg",
    images: [
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg"
    ],
    roles: ["Web Design", "Development"],
    tools: ["Next.js", "Tailwind", "Framer Motion"],
    timeline: "2 weeks",
    type: "Personal",
    github: "https://github.com/yourusername/portfolio",
    liveLink: "https://myportfolio.com",
    problems: `Needed a portfolio that showcases work effectively while maintaining fast performance and a unique visual identity.`,
    solutions: `Built with Next.js for optimal performance, incorporated subtle animations, and designed a dark theme that makes project visuals stand out.`,
    learnings: `Balancing personal expression with usability taught me a lot about effective self-presentation in the design industry.`
  },
  {
    id: "startup-landing",
    title: "SaaS Landing Page",
    subtitle: "Conversion-Focused Design",
    category: ["Websites", "Brands"],
    thumbnail: "/images/projects/placeholder.svg",
    images: [
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg",
      "/images/projects/placeholder.svg"
    ],
    roles: ["Web Design", "Development"],
    tools: ["Figma", "React", "GSAP"],
    timeline: "1 week",
    type: "Client",
    github: "",
    liveLink: "https://saas-landing.com",
    problems: `The startup needed a landing page that effectively communicates their value proposition and converts visitors into users.`,
    solutions: `Designed a clear, benefit-focused layout with strategic CTAs, social proof sections, and smooth scroll animations to guide users.`,
    learnings: `Learned the art of conversion-focused design and the importance of clear messaging in SaaS marketing.`
  }
];

export const categories = ["All", "Favourites", "Brands", "Websites", "Design"];

export function getProjectById(id) {
  return projects.find(project => project.id === id);
}

export function getRandomProjects(excludeId, count = 4) {
  const filtered = projects.filter(project => project.id !== excludeId);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
