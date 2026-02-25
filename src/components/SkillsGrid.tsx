"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { skillCategories } from "@/lib/data";

/* Flatten all skills into individual cards */
const allSkills = skillCategories.flatMap((cat) =>
  cat.items.map((skill) => ({ name: skill, category: cat.name })),
);

export default function SkillsGrid() {
  return (
    <Section id="skills">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-red-400 mb-2">
            Inventory
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl italic">
            The <span className="text-red-400">Tech Stack</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {allSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -3, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group"
            >
              <div className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-950/60 backdrop-blur-sm px-5 py-3.5 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 transition-all cursor-default">
                {/* Icon placeholder — styled monogram */}
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase shrink-0">
                  {getInitials(skill.name)}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white uppercase tracking-wide leading-tight">
                    {skill.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-0.5">
                    {skill.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/** Generate 2-letter initials from a skill name */
function getInitials(name: string): string {
  // Handle special cases
  const map: Record<string, string> = {
    TypeScript: "TS",
    JavaScript: "JS",
    React: "Re",
    "Next.js": "Nx",
    "Tailwind CSS": "Tw",
    "Node.js": "No",
    "REST APIs": "AP",
    SQL: "SQ",
    MySQL: "My",
    SQLite: "SL",
    "Microsoft Azure (AZ-900)": "Az",
    Docker: "Dk",
    "CI/CD (CircleCI)": "CI",
    Git: "Gi",
    Jira: "Ji",
    Trello: "Tr",
    Bitbucket: "Bb",
    Confluence: "Cf",
    Agile: "Ag",
    Documentation: "Dc",
    "Testing mindset": "Ts",
    "Quality assurance": "QA",
    Java: "Ja",
  };
  return map[name] || name.slice(0, 2).toUpperCase();
}
