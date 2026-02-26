/* ─── Shared type definitions ─── */

export interface PersonalInfo {
  name: string;
  location: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  resumePdf: string;
}

export interface HeroData {
  heading: string;
  subtext: string;
  keywordLine: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface CodeSnippetData {
  title: string;
  lines: string[];
}

export interface StatCard {
  label: string;
  value: string;
}

export interface AboutData {
  heading: string;
  subheading: string;
  paragraph: string;
  stats: StatCard[];
  image: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  source: string;
  confidential?: boolean;
}

export interface ContactData {
  heading: string;
  subtext: string;
}

export interface NavLink {
  label: string;
  href: string;
}
