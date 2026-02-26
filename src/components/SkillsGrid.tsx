"use client";

import Section from "@/components/Section";
import { skillCategories } from "@/lib/data";
import type { IconType } from "react-icons";
import {
  SiAdobephotoshop,
  SiBitbucket,
  SiCircleci,
  SiConfluence,
  SiDocker,
  SiDotnet,
  SiFigma,
  SiGit,
  SiJavascript,
  SiJira,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSqlite,
  SiSpring,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiOpenjdk,
  SiSharp,
} from "react-icons/si";
import {
  TbApi,
  TbBrandAzure,
  TbBraces,
  TbDatabase,
  TbFileDescription,
  TbShieldCheck,
  TbTestPipe,
  TbUsers,
} from "react-icons/tb";

const allSkills = skillCategories.flatMap((cat) =>
  cat.items.map((skill) => ({ name: skill, category: cat.name })),
);

const iconBySkill: Record<string, IconType> = {
  "C#": SiSharp,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Java: SiOpenjdk,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "REST APIs": TbApi,
  SQL: TbDatabase,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  ".NET Core": SiDotnet,
  Spring: SiSpring,
  "Microsoft Azure (AZ-900)": TbBrandAzure,
  Docker: SiDocker,
  "CI/CD (CircleCI)": SiCircleci,
  Git: SiGit,
  Jira: SiJira,
  Trello: SiTrello,
  Bitbucket: SiBitbucket,
  Confluence: SiConfluence,
  Figma: SiFigma,
  Photoshop: SiAdobephotoshop,
  Agile: TbUsers,
  Documentation: TbFileDescription,
  "Testing mindset": TbTestPipe,
  "Quality assurance": TbShieldCheck,
};

const fallbackIcon = TbBraces;

export default function SkillsGrid() {
  const splitIndex = Math.ceil(allSkills.length / 2);
  const topRow = allSkills.slice(0, splitIndex);
  const bottomRow = allSkills.slice(splitIndex);

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

        <div className="space-y-8">
          <TechMarqueeRow items={topRow} direction="left" />
          <TechMarqueeRow items={bottomRow} direction="right" />
        </div>
      </div>
    </Section>
  );
}

type SkillItem = {
  name: string;
  category: string;
};

function TechMarqueeRow({
  items,
  direction,
}: {
  items: SkillItem[];
  direction: "left" | "right";
}) {
  const scrollingItems = [...items, ...items];

  return (
    <div className="tech-marquee">
      <div
        className={`tech-marquee-track ${
          direction === "left" ? "tech-marquee-left" : "tech-marquee-right"
        }`}
      >
        {scrollingItems.map((skill, index) => {
          const Icon = iconBySkill[skill.name] ?? fallbackIcon;

          return (
            <div key={`${skill.name}-${index}`} className="tech-card group">
              <span className="relative z-10 flex h-8 w-8 items-center justify-center shrink-0 text-red-500/90">
                <Icon className="h-5.5 w-5.5 tech-card-icon" />
              </span>
              <div className="relative z-10 leading-tight">
                <p className="text-[1.1rem] leading-none font-semibold text-white uppercase tracking-tight whitespace-nowrap">
                  {skill.name}
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-500">
                  Technology
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
