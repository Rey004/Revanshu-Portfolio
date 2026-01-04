export const projects = [
  {
    id: "code-vantage",
    title: "Code Vantage",
    subtitle: "3D Interactive Agency Website",
    category: ["Favourites", "Websites"],
    thumbnail: "/images/projects/code-vantage-thumb.webp",
    images: [
      "/images/projects/code-vantage-thumb.webp",
      "/images/projects/cv1.webp",
      "/images/projects/cv2.webp"
    ],
    roles: ["Web Design", "Development"],
    tools: ["Figma", "Spline", "React"],
    timeline: "1 week",
    type: "Personal",
    socials: [
      { platform: "GitHub", url: "https://github.com/Rey004/Code-Vantage-2.0" }
    ],
    liveLink: "https://codevantage.in",
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
  id: "freak-lifestyle",
  title: "Freak Lifestyle",
  subtitle: "Streetwear Clothing Brand",
  category: ["Favourites","Brands"],
  thumbnail: "/images/projects/fl.webp",
  images: [
    "/images/projects/fl1.webp",
    "/images/projects/fl2.webp",
    "/images/projects/fl3.webp"
  ],
  roles: ["Design", "Development", "Branding", "Operations"],
  tools: ["Photoshop", "WordPress"],
  timeline: "1 year 3 months",
  type: "Personal",
  socials: [
    { platform: "Instagram", url: "https://www.instagram.com/freaklifestyleofficial/" }
  ],
  liveLink: "https://freaklifestyle.com",
  problems: `Freak Lifestyle was started by a team of four 17-year-old teenagers with a clear vision—to build an affordable streetwear brand that delivers unique designs without compromising on quality. While we successfully handled product design, website development, packaging, and operations in-house, the biggest challenge emerged after launch: marketing.

Despite having a solid product and strong branding, we lacked a structured marketing roadmap. Reaching the right audience, building consistent visibility, and scaling awareness became difficult due to limited experience in brand promotion and customer acquisition.`,

  solutions: `From day one, the focus was to make the brand feel premium and trustworthy. We invested heavily in branding, packaging, and product quality to create a strong first impression and long-term brand recall. A major turning point was switching manufacturers, which significantly reduced production costs while improving quality—resulting in healthier profit margins.

For marketing, we took a quality-over-quantity approach. Influencer collaborations were carefully selected based on credibility and audience trust rather than follower count. Additionally, we sponsored two events, allowing us to interact directly with customers and build real-world brand presence. As the brand evolved, we upgraded our product mockups and visual assets on the website to elevate the overall identity and maintain a premium look.`,

  learnings: `The brand received a strong response from customers, especially for product quality, packaging, and overall brand image. Direct interactions at sponsored events validated our design and quality decisions, reinforcing the importance of customer feedback in shaping future products.

This project taught me end-to-end brand building—from product design and operations to marketing strategy and cost optimization. I learned how critical it is to plan marketing alongside product development and how small operational decisions, like choosing the right manufacturer, can massively impact profitability. If we were to do this again, we would create a clear, data-driven marketing roadmap from the start and iterate faster based on customer feedback to scale reach and impact.`
},
{
  id: "vetric-website",
  title: "Vetric Website",
  subtitle: "Minimal Agency Website Concept",
  category: ["Websites"],
  thumbnail: "/images/projects/vw.webp",
  images: [
    "/images/projects/vw.webp",
    "/images/projects/vw1.webp",
    "/images/projects/vw2.webp"
  ],
  roles: ["Development"],
  tools: ["React"],
  timeline: "2 days",
  type: "Concept",
  socials: [{ platform: "GitHub", url: "https://github.com/Rey004/vetric-website" }],
  liveLink: "https://vetric-website.vercel.app/",

  problems: `This project was created as a concept website for an agency, with the goal of presenting information in a sleek, elegant, and modern way. While the visual direction was clear from the start, the main challenge came during implementation—specifically figuring out the right approach for handling mode switching without complicating the codebase.

Since the project had a short timeline, the challenge was to maintain clean structure and visual consistency while ensuring the UI logic remained simple and scalable.`,

  solutions: `The focus was to keep the website minimal and content-driven, allowing typography, spacing, and layout to carry the design. Instead of overengineering the mode-switching logic, a straightforward state-based approach was implemented to ensure predictable behavior and easier maintenance.

React was chosen to rapidly iterate on layout and interactions, allowing fast experimentation within the limited timeframe. Design decisions were intentionally kept simple to support the concept nature of the project and to ensure the final result felt polished rather than overbuilt.`,

  learnings: `The final outcome was a clean and elegant agency concept website that clearly communicates information without visual clutter. The project helped reinforce the importance of approaching UI logic with simplicity, especially when working under tight deadlines.

Through this build, I gained clarity on structuring state management for UI modes and learned how small architectural decisions can significantly affect maintainability. If revisited, I would explore a more scalable theming approach for mode switching, but the current implementation served its purpose effectively within the scope of the project.`
},
{
  id: "food-truck-website",
  title: "Food Truck Website",
  subtitle: "Energetic Brand Website Concept",
  category: ["Design"],
  thumbnail: "/images/projects/ft.webp",
  images: [
    "/images/projects/ft.webp",
    "/images/projects/ft1.webp",
    "/images/projects/ft2.webp"
  ],
  roles: ["Web Design"],
  tools: ["Figma"],
  timeline: "2 days",
  type: "Concept",
  liveLink: "https://www.figma.com/design/bJiO99MKY2X3IfsNIrJWY4/Food-Truck-Website?node-id=0-1&t=wWhpfYJMDiza4II4-1",

  problems: `This project was a design concept aimed at creating an energetic and visually engaging website for a food truck brand. The main challenge was to translate the brand’s lively personality into a digital experience while keeping the layout clear and easy to navigate.

Since this was a design-only project with a short timeline, the challenge was to balance creativity with brand consistency and avoid making the interface feel chaotic or overwhelming.`,

  solutions: `The design approach focused on building energy through bold colors, expressive typography, and dynamic layout choices that aligned closely with the brand’s visual elements. Every section was designed to reflect the food truck’s personality while maintaining clarity and hierarchy.

Special attention was given to using brand elements consistently across the layout, ensuring the design felt cohesive and recognizable. This project was also an opportunity to intentionally explore a visual style different from my usual work, pushing creative boundaries and experimenting with a more playful and vibrant design language.`,

  learnings: `The final outcome was a distinct and high-energy website concept that clearly reflects the brand’s identity. The project reinforced how strong visual storytelling and brand alignment can elevate even simple layouts.

On a personal level, this design helped me step outside my comfort zone and experiment with a different aesthetic. I learned how to control visual energy without sacrificing usability, and how adapting design decisions to a brand’s personality leads to more authentic and impactful results.`
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
