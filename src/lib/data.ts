import type {
  PersonalInfo,
  HeroData,
  CodeSnippetData,
  AboutData,
  ExperienceEntry,
  SkillCategory,
  Project,
  AtsSection,
  ContactData,
  NavLink,
} from "./types";

/* ─── Navigation ─── */
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ─── Personal ─── */
export const personal: PersonalInfo = {
  name: "Ali Rezai",
  location: "Malmö, Sweden",
  title: "Full Stack Developer | Software Engineer",
  email: "aliabc@live.se",
  linkedin: "https://www.linkedin.com/in/ali-rezai-314172168",
  github: "https://github.com/AliDevEng",
  resumePdf: "/Ali-Rezai-CV.pdf",
};

/* ─── Hero ─── */
export const heroData: HeroData = {
  heading: "Full Stack Developer building scalable web applications",
  subtext:
    "Software Engineer Intern with a structured engineering mindset, building modern web applications with Node.js, TypeScript, React, and SQL — with growing cloud focus (Azure Fundamentals).",
  keywordLine:
    "Full Stack • Backend • REST APIs • SQL • CI/CD • Docker • Azure • Agile",
  ctaPrimary: { label: "Let's Connect", href: "#contact" },
  ctaSecondary: { label: "Download Resume", href: "/Ali-Rezai-CV.pdf" },
};

/* ─── Decorative code snippet ─── */
export const codeSnippetData: CodeSnippetData = {
  title: "Portfolio.ts",
  lines: [
    `const developer = {`,
    `  name: "Ali Rezai",`,
    `  role: "Full Stack Developer / Software Engineer",`,
    `  location: "Malmö, Sweden",`,
    `  stack: ["Node.js", "TypeScript", "React", "SQL", "Docker", "CI/CD", "Azure (AZ-900)"],`,
    `  focus: ["Backend APIs", "Frontend UX", "Quality", "Maintainability"]`,
    `}`,
    ``,
    `export default developer;`,
  ],
};

/* ─── About ─── */
export const aboutData: AboutData = {
  heading: "About",
  subheading: "About the engineer",
  paragraph:
    "I'm a Software Engineer Intern at Peak Energy, bringing a structured and quality-driven mindset from my previous background in civil and structural engineering. I enjoy building maintainable systems and bridging backend, frontend, and infrastructure. I'm motivated to grow in cloud computing and modern engineering practices — always focused on delivering clean, reliable solutions.",
  stats: [
    { label: "Current Role", value: "Internship: Peak Energy" },
    { label: "Core Stack", value: "Node.js • TypeScript • React • SQL" },
  ],
  image: "/projects/developer.png",
};

/* ─── Experience ─── */
export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Peak Energy",
    role: "Software Engineer Intern",
    dates: "Dec 2025 – Present",
    location: "Malmö",
    bullets: [
      "Built and improved backend and frontend features using Node.js, TypeScript, and React.",
      "Developed and maintained REST APIs and SQL-backed data flows.",
      "Worked with Docker and CI/CD (CircleCI) to support reliable releases.",
      "Collaborated in Agile workflows, focusing on quality, scalability, and maintainability.",
    ],
  },
  {
    company: "OGR Handel & Service",
    role: "Project Manager / Operations Manager",
    dates: "2021 – 2024",
    location: "Malmö",
    bullets: [
      "Planned operations, coordinated stakeholders, and improved processes with clear documentation.",
      "Managed priorities, delivery, and follow-ups with responsibility and structure.",
      "Strengthened communication and collaboration across teams/partners.",
    ],
  },
  {
    company: "WSP & COWI",
    role: "Bridge / Structural Designer",
    dates: "2019 – 2021",
    location: "Malmö",
    bullets: [
      "Produced technical design documentation, calculations, and quality assurance.",
      "Worked in multidisciplinary teams and followed structured engineering standards.",
      "Strong attention to detail, compliance, and professional documentation.",
    ],
  },
];

/* ─── Skills ─── */
export const skillCategories: SkillCategory[] = [
  { name: "Languages", items: ["C#", "TypeScript", "JavaScript", "Java"] },
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { name: "Backend", items: ["Node.js", ".NET Core", "Spring", "REST APIs"] },
  { name: "Data", items: ["SQL", "MySQL", "SQLite"] },
  {
    name: "Cloud / DevOps",
    items: ["Microsoft Azure", "Docker", "CI/CD"],
  },
  {
    name: "Tools",
    items: [
      "Git",
      "Jira",
      "Trello",
      "Bitbucket",
      "Confluence",
      "Figma",
      "Photoshop",
    ],
  },
  {
    name: "Methods",
    items: ["Agile", "Documentation", "Testing mindset", "Quality assurance"],
  },
];

/* ─── Projects ─── */
export const projects: Project[] = [
  {
    title: "Car Rental Management System – Backend API (.NET)",
    description:
      "Scalable RESTful backend API built with .NET 10 and Clean Architecture principles, designed for managing car inventory, bookings, and administrative operations. Features a layered architecture with Entity Framework Core, code-first migrations, and a foundation for JWT-based authentication.",
    tech: [
      ".NET 10",
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "MySQL",
      "REST API",
      "Clean Architecture",
    ],
    source: "https://github.com/AliDevEng/car-rental-api-net10",
  },
  {
    title: "Fullstack Car Rental System (Java)",
    description:
      "End-to-end car rental platform with booking workflows, admin dashboards, and customer-facing views. Built with a structured domain model, RESTful API layer using Spring Boot, and SQL persistence via MySQL. Includes role-based access and data validation across the full stack.",
    tech: ["Java", "Spring Boot", "MySQL", "JavaScript", "REST API"],
    source:
      "https://github.com/AliDevEng/Fullstack-car-rental-and-admin-management-system",
  },
  {
    title: "Energy-Tech Internship – Production Contributions",
    description:
      "Delivered production-grade backend and frontend improvements during internship at an energy-tech company. Focused on building reliable REST APIs, React-based UI features, and SQL-backed data flows within Agile workflows, Docker containers, and CI/CD pipelines.",
    tech: ["Node.js", "TypeScript", "React", "SQL", "Docker", "CI/CD"],
    source: "#",
    confidential: true,
  },
];

/* ─── ATS / Recruiter summary ─── */
export const atsSummary: AtsSection = {
  professionalSummary: `
Full Stack Developer and Software Engineer Intern based in Malmö, Sweden, with hands-on experience building scalable web applications using Node.js, TypeScript, React, and SQL databases.

Strong foundation in backend API development, frontend architecture, and system integration. Experience working in Agile environments with CI/CD pipelines, Docker containerization, and Microsoft Azure Fundamentals (AZ-900).

Background in structured engineering disciplines, bringing a quality-driven and documentation-focused approach to software development.

Open to Internship, Junior Full Stack, Backend, and Cloud-oriented roles.
  `,

  coreSkills: [
    "Full Stack Development",
    "Backend Development",
    "Frontend Development",
    "REST API Design & Integration",
    "SQL Database Modeling",
    "System Integration",
    "CI/CD Pipelines",
    "Docker & Containerization",
    "Cloud Fundamentals (Microsoft Azure)",
    "Agile Methodologies",
    "Technical Documentation",
    "Quality & Maintainability Focus",
  ],

  toolsAndTechnologies: [
    "TypeScript",
    "JavaScript",
    "Java",
    "Node.js",
    "React",
    "Next.js",
    "Tailwind CSS",
    "SQL (MySQL, SQLite)",
    "Docker",
    "CircleCI",
    "Git",
    "Jira",
    "Bitbucket",
    "Confluence",
    "Trello",
    "Microsoft Azure (AZ-900)",
  ],

  experienceHighlights: [
    "Developed and maintained backend services and REST APIs using Node.js and TypeScript.",
    "Implemented frontend features using React with focus on usability and maintainability.",
    "Worked with relational databases and structured SQL queries.",
    "Supported CI/CD workflows and containerized deployments using Docker.",
    "Collaborated in Agile development teams with structured task management.",
    "Applied engineering discipline and quality assurance mindset from previous technical career.",
  ],

  educationAndCertifications: [
    "Fullstack Developer (Java track) – Lunds Tekniska Högskola (ongoing)",
    "Microsoft Azure Fundamentals (AZ-900)",
  ],
};

/* ─── Contact ─── */
export const contactData: ContactData = {
  heading: "Get in Touch",
  subtext: "Want to talk about an internship or junior role? Send a message.",
};
