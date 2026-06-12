export const projects = [
  {
    id: "repostory",
    title: "RepoStory",
    subtitle: "Turn your GitHub repository stats into beautiful developer story cards",
    category: ["Favourites", "Brand/Products"],
    thumbnail: "/images/projects/repostory/repostory-thumb.webp",
    images: [
      "/images/projects/repostory/repostory-thumb.webp",
      "/images/projects/repostory/rs1.webp",
      "/images/projects/repostory/rs2.webp"
    ],
    roles: ["Design", "Development"],
    tools: ["Github API, NextJS"],
    timeline: "2 Days",
    type: "Personal",
    socials: [
      { platform: "Github", url: "https://github.com/Rey004/RepoStory" }
    ],
    liveLink: "https://use-repostory.vercel.app",

    problems: `Developers build projects, push commits, and track progress through [[GitHub]] — but the raw data tells no story by itself.
- [[Commit histories]] are just chronological logs with no personality
- [[Language stats]] are bare percentages with no narrative context
- [[Release tags]] are version strings with no human meaning
- Sharing a GitHub link forces others to interpret raw data themselves — most simply won't

**The gap:** there's no easy way to look at a repository and immediately understand its character — who built it, how they worked, and what kind of project it really is.`,

    solutions: `[[RepoStory]] transforms any public [[GitHub]] repository into a shareable visual **story card** in seconds.
## How It Works
- Paste a repo URL → the app fetches [[commit data]], [[language distributions]], and [[release milestones]] via the [[GitHub API]]
- Assigns a **developer archetype** based on contributor count, age, and star metrics
- Classifies **commit habits** by analysing timestamps of when commits were made
- Optionally generates a developer narrative via [[Google Gemini]]
- Export as [[PNG]] or copy directly to clipboard

## Developer Archetypes & Commit Habits
| Label | Type | Signal |
| --- | --- | --- |
| [[Solo Builder]] | Archetype | Single contributor, consistent commits |
| [[Rising Star]] | Archetype | Fast growth in stars and forks |
| [[Legacy Giant]] | Archetype | Long-running, stable project age |
| [[Night Owl]] | Habit | Majority of commits after 10 PM |
| [[Weekend Warrior]] | Habit | Most commits on Saturday & Sunday |

## Tech Stack
| Layer | Technology | Notes |
| --- | --- | --- |
| Framework | [[Next.js]] + custom CSS | Deployed on [[Vercel]] |
| Data | [[GitHub REST API]] | [[60 req/hr]] unauth · [[5,000 req/hr]] with token |
| AI Layer | [[Gemini API]] | Optional — enhances without blocking |`,

    learnings: `This project demonstrates how to build a meaningful product on top of a [[public API]] **without** a backend database.
## Key Patterns
- **Fetch → Classify → Render:** structured API data → [[classification logic]] → polished visual output
- [[Archetype scoring]] is heuristic scoring — turning quantitative signals into qualitative labels people care about
- [[Next.js]] + [[Vercel]] = zero infrastructure, fast iteration, live URL from day one

## What to Take Away
- [[Rate limit awareness]] is non-negotiable: always design for both unauthenticated and authenticated flows
- [[Environment variable management]] keeps API keys safe while keeping the codebase portable
- Making [[Gemini AI]] optional keeps the core product functional — AI enhances, but never blocks
- The **data → classify → card** pattern is reusable across dozens of other product ideas`
  },
  {
    id: "dinodash",
    title: "DinoDash",
    subtitle: "Chrome Extention - Interactive New Tab Page with productivity widgets and a dino runner game",
    category: ["Favourites", "Brand/Products"],
    thumbnail: "/images/projects/dinodash/dinodash-thumb.webp",
    images: [
      "/images/projects/dinodash/dinodash-thumb.webp",
      "/images/projects/dinodash/dd1.webp",
      "/images/projects/dinodash/dd2.webp"
    ],
    roles: ["Design", "Development"],
    tools: ["Chrome Extension APIs"],
    timeline: "Ongoing",
    type: "Personal",
    socials: [
      { platform: "Website", url: "https://use-dino-dash.vercel.app" }
    ],
    liveLink: "https://chromewebstore.google.com/detail/dinodash-interactive-new/biplgpkmcbidebfejmdkgppgifjpdggi?hl=en&authuser=0",

    problems: `[[Chrome]]'s default new tab page is uninspiring and static — a missed opportunity for both **productivity** and **delight**. The goal was to build a privacy-first, offline-ready [[Chrome Extension]] that reimagines this space entirely.
## Technical Challenges
- Achieving a **deterministic [[60fps]]** physics simulation across varied host machines without heavy libraries
- Building a high-performance [[canvas]] game within the constraints of an extension environment
- Handling [[browsing history]] categorisation and [[favourites]] tracking entirely client-side
- Storing persistent high scores using [[localStorage]] — guaranteeing data privacy and instant responsiveness`,

    solutions: `## Game Engine
- Designed a custom [[2D rendering pipeline]] running at a deterministic **60fps**
- Modular **procedural obstacle generation** — each run is fresh but supports seeding for replays
- Zero external servers — all processing happens via [[Web Extension APIs]] on the user's device

## Themes
| Theme | Aesthetic | Effect |
| --- | --- | --- |
| [[Dark Valley]] | Neon city | Glowing skyscraper silhouettes, blue-purple palette |
| [[Mystic Forest]] | Nature atmosphere | Deep greens, fog overlays, earthy tones |

## Dashboard Features
- [[Arrow key]] controls let users jump from search to game sprint in one keystroke
- [[Browsing analytics]], bookmarks, and history all rendered locally — **no data ever leaves the device**
- Theme changes update the **entire visual colour space** of every widget simultaneously`,

    learnings: `## What This Reinforced
- [[Client-side-only execution]] is far more powerful than most developers assume
- [[Web Extension APIs]] provide a surprisingly capable local data layer when used intentionally
- Canvas game development inside an extension demands a very different performance mindset

## What I'd Build Next
- Expand **community voting mechanics** for theme popularity rankings
- Introduce **web-monetized customisable visual components** for power users
- Push [[performance testing]] across lower-spec machines to find edge cases

**Bottom line:** The new tab page can be more than a utility — it can breathe life into a browser.`
  },
  {
    id: "code-vantage",
    title: "Code Vantage",
    subtitle: "3D Interactive Agency Website",
    category: ["Favourites", "Websites"],
    thumbnail: "/images/projects/code-vantage/code-vantage-thumb.webp",
    images: [
      "/images/projects/code-vantage/code-vantage-thumb.webp",
      "/images/projects/code-vantage/cv1.webp",
      "/images/projects/code-vantage/cv2.webp"
    ],
    roles: ["Web Design", "Development"],
    tools: ["Figma", "Spline", "React"],
    timeline: "1 week",
    type: "Personal",
    socials: [
      { platform: "GitHub", url: "https://github.com/Rey004/Code-Vantage-2.0" }
    ],
    liveLink: "https://codevantage.in",

    problems: `The goal was to build a **professional, client-facing agency website** — modern, interactive, and visually striking enough to confidently pitch clients.
## Challenges Encountered
- **Performance degradation** as the website grew: heavy assets and animated elements caused slow load times and laggy interactions — directly hurting the user experience
- No deep expertise in creating **custom [[3D elements]]** from scratch — we wanted a unique visual aligned with agency branding
- Risk that unoptimised [[3D assets]] would make the site feel slow and unpolished — the **opposite** of what a client-facing website should communicate

Without solving both, the site would have undermined the very credibility it was built to establish.`,

    solutions: `## 3D Visuals Approach
- Used a pre-existing [[3D element]] from [[Spline]] and customised its shape and material to match the agency logo
- Achieved the interactive 3D feel **without overengineering** — stayed within our technical comfort zone
- Intentionally avoided [[Three.js]] to keep development faster, simpler, and more maintainable

## Performance Optimisations
| Optimisation | Action | Impact |
| --- | --- | --- |
| Image formats | Converted all [[PNG]] assets to [[WebP]] | Significant file size reduction |
| 3D mesh | Kept [[low-poly]], reduced edge density | Preserved quality, improved render speed |
| Library choice | Used [[Spline]] embed instead of [[Three.js]] | Simpler setup, lighter bundle weight |

## Design Philosophy
- Overall design kept **minimal, clean, and futuristic**
- The 3D element was designed to **enhance** the experience — not dominate or slow it down`,

    learnings: `## What Worked
- The final site was **visually striking and performant** — smoother animations, faster loads, client-ready
- Well appreciated by peers for its unique 3D execution and overall aesthetic polish

## Skills Built
- **Balancing aesthetics with performance** — knowing precisely when to cut and when to push visually
- Optimising [[3D assets]] and visual media for real-world web delivery conditions
- Extracting **consistent, high-quality outputs** from [[AI image generation]] tools for production use
- Delivering interactive, modern sites with [[3D elements]] — without relying on heavy frameworks like [[Three.js]]

**Key realisation:** Choosing the right level of technical complexity is itself a design decision — and often, less is more powerful.`
  },
  {
  id: "freak-lifestyle",
  title: "Freak Lifestyle",
  subtitle: "Streetwear Clothing Brand",
  category: ["Favourites", "Brand/Products"],
  thumbnail: "/images/projects/freak-lifestyle/fl.webp",
  images: [
    "/images/projects/freak-lifestyle/fl1.webp",
    "/images/projects/freak-lifestyle/fl2.webp",
    "/images/projects/freak-lifestyle/fl3.webp"
  ],
  roles: ["Design", "Development", "Branding", "Operations"],
  tools: ["Photoshop", "WordPress"],
  timeline: "1 year 3 months",
  type: "Personal",
  socials: [
    { platform: "Instagram", url: "https://www.instagram.com/freaklifestyleofficial/" }
  ],
  liveLink: "https://freaklifestyle.com",

  problems: `[[Freak Lifestyle]] was started by **four 17-year-old teenagers** with one clear vision: build an affordable [[streetwear]] brand that delivers unique designs without compromising on quality.
## What We Handled In-House
- [[Product design]] — every design conceptualised and created by the team
- [[Website development]] — built and maintained entirely using [[WordPress]]
- [[Packaging]] — custom branded packaging designed from scratch
- [[Operations]] — end-to-end order management and fulfilment

## The Core Problem
Despite a solid product and strong branding, **marketing became the wall**. After launch we lacked:
- A structured [[marketing roadmap]]
- Experience in [[brand promotion]] and [[customer acquisition]] at scale
- A clear strategy for building consistent visibility with the right audience`,

  solutions: `## Branding & Quality First
- Invested heavily in [[branding]], [[packaging]], and product quality to create a strong first impression
- Switched manufacturers — **reduced production costs** while improving quality, resulting in healthier [[profit margins]]

## Marketing Approach
| Channel | Strategy | Outcome |
| --- | --- | --- |
| [[Influencer collabs]] | Selected by credibility and audience trust — not follower count | Authentic reach to target audience |
| [[Event sponsorships]] | Sponsored 2 local events | Direct customer interaction, real-world brand presence |
| [[Visual upgrades]] | Refreshed product mockups and website assets | Elevated brand identity, more premium perception |

## Core Principle
- Every decision followed a **quality over quantity** philosophy
- Event sponsorships enabled **real-world brand validation** directly from customers`,

  learnings: `## Business Lessons
- [[End-to-end brand building]] is a discipline — [[product design]], [[operations]], [[marketing]], and [[cost management]] are all interconnected
- **Choosing the right manufacturer** can be as impactful as any campaign — it directly affects [[profit margins]] and [[product quality]]
- [[Marketing]] must be planned **alongside product development**, not retrofitted after launch

## What Customers Validated
- Strong response specifically to [[product quality]] and [[packaging]] — premium feel was consistently noticed
- Direct event interactions confirmed the brand's design decisions were resonating with the target audience

## What We'd Do Differently
- Build a **data-driven [[marketing roadmap]]** from day one
- Iterate faster using [[customer feedback]] loops to scale reach and refine messaging
- Invest in [[social media strategy]] earlier — before launch, not after`
},
{
  id: "vetric-website",
  title: "Vetric Website",
  subtitle: "Minimal Agency Website Concept",
  category: ["Websites"],
  thumbnail: "/images/projects/vetric-website/vw.webp",
  images: [
    "/images/projects/vetric-website/vw.webp",
    "/images/projects/vetric-website/vw1.webp",
    "/images/projects/vetric-website/vw2.webp"
  ],
  roles: ["Development"],
  tools: ["React"],
  timeline: "2 days",
  type: "Concept",
  socials: [{ platform: "GitHub", url: "https://github.com/Rey004/vetric-website" }],
  liveLink: "https://vetric-website.vercel.app/",

  problems: `This was a **concept agency website** built to present information in a sleek, elegant, and modern way — within a tight [[2-day timeline]].
## Key Challenges
- Determining the right approach for [[mode switching]] without overcomplicating the codebase
- Maintaining **clean structure and visual consistency** while keeping UI logic simple and scalable
- Delivering a result that felt **polished rather than rushed** — no room for overengineering given the timeline`,

  solutions: `## Design Approach
- Kept the site **minimal and content-driven** — typography, spacing, and layout carry all the weight
- Every section intentionally simple so the concept felt **polished, not overbuilt**

## Technical Decisions
| Decision | Choice | Reason |
| --- | --- | --- |
| Framework | [[React]] | Fast iteration, clean component structure |
| Mode switching | State-based [[useState]] | Simple, predictable, easy to maintain |
| Design direction | Minimal, content-driven | Appropriate for the concept scope and timeline |

## Development Approach
- [[React]] enabled rapid layout iteration and interaction experimentation within the tight timeframe
- Avoided complex theming systems — kept everything scoped to the project's actual needs`,

  learnings: `## What This Built
- Clarity on **structuring [[state management]] for UI modes** in a clean and scalable way
- Understanding of how small architectural choices ripple into long-term maintainability

## Key Takeaways
- [[UI logic simplicity]] matters most under tight deadlines — over-engineering has a real hidden cost
- A **minimal, elegant concept** often communicates more than a feature-heavy one
- [[React]]'s component model makes even 2-day sprints feel organised and manageable

## What I'd Revisit
- Explore a more **scalable [[theming approach]]** for mode switching if the scope were larger
- Add [[micro-animations]] to mode transitions for a more satisfying, polished feel`
},
{
  id: "food-truck-website",
  title: "Food Truck Website",
  subtitle: "Energetic Brand Website Concept",
  category: ["Design"],
  thumbnail: "/images/projects/food-truck/ft.webp",
  images: [
    "/images/projects/food-truck/ft.webp",
    "/images/projects/food-truck/ft1.webp",
    "/images/projects/food-truck/ft2.webp"
  ],
  roles: ["Web Design"],
  tools: ["Figma"],
  timeline: "2 days",
  type: "Concept",
  liveLink: "https://www.figma.com/design/bJiO99MKY2X3IfsNIrJWY4/Food-Truck-Website?node-id=0-1&t=wWhpfYJMDiza4II4-1",

  problems: `This was a **design-only [[Figma]] concept** for a food truck brand — the goal was to translate the brand's lively personality into a digital experience people would immediately connect with.
## Design Challenges
- Balancing **high visual energy** with a layout that stays clear and easy to navigate
- Avoiding an interface that felt **chaotic or overwhelming** despite the brand's bold visual style
- Maintaining **[[brand consistency]]** across all sections while pushing creative boundaries
- Delivering a complete, polished concept within a [[2-day]] timeline`,

  solutions: `## Design Approach
- Built energy through **bold [[typography]]**, expressive [[colour palettes]], and dynamic layout decisions
- Every section designed to reflect the food truck's personality while maintaining **clarity and visual hierarchy**
- Used the brand's existing visual elements as **creative constraints**, not limitations

## Tools & Techniques
| Aspect | Approach | Outcome |
| --- | --- | --- |
| Tool | [[Figma]] | Full layout, components, and prototype |
| Colour | High-contrast, brand-matched [[palette]] | Energy and identity without visual chaos |
| Typography | Bold, expressive [[typefaces]] | Personality-driven visual communication |
| Layout | Dynamic, rhythm-based sections | Guides the eye naturally through content |

This project was a deliberate opportunity to **explore a visual style outside my usual aesthetic** — more playful, vibrant, and expressive.`,

  learnings: `## What the Project Proved
- **Strong visual storytelling** can elevate even a simple layout into something memorable
- Adapting design decisions to a brand's personality leads to more **authentic and impactful** outcomes

## Skills Developed
- Controlling **visual energy without sacrificing usability** — knowing when to dial up and when to restrain
- Designing within an aesthetic that differs from personal preference — a key [[professional design skill]]
- Working at speed in [[Figma]] without losing attention to quality or craft

## What I'd Push Further
- Develop the concept into a **full interactive [[Figma]] prototype** with animation
- Add a [[mobile-first]] layout variation to stress-test the design across screen sizes
- Expand the design system into a **full brand identity package**`
}
];

export const categories = ["All", "Favourites", "Brand/Products", "Websites", "Design"];

export function getProjectById(id) {
  return projects.find(project => project.id === id);
}

export function getRandomProjects(excludeId, count = 4) {
  const filtered = projects.filter(project => project.id !== excludeId);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
