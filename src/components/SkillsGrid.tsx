"use client";

import Section from "@/components/Section";
import { skillCategories } from "@/lib/data";
import type { IconType } from "react-icons";
import { SiCircleci, SiConfluence, SiDotnet, SiJira } from "react-icons/si";
import {
  TbApi,
  TbBraces,
  TbBrandAdobe,
  TbBrandAzure,
  TbBrandBitbucket,
  TbBrandCSharp,
  TbBrandDocker,
  TbBrandFigma,
  TbBrandGit,
  TbBrandJavascript,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTrello,
  TbBrandTypescript,
  TbCoffee,
  TbDatabase,
  TbFileDescription,
  TbLeaf,
  TbShieldCheck,
  TbTestPipe,
  TbUsers,
} from "react-icons/tb";

const allSkills = skillCategories.flatMap((cat) =>
  cat.items.map((skill) => ({ name: skill, category: cat.name })),
);

const iconBySkill: Record<string, IconType> = {
  "C#": TbBrandCSharp,
  TypeScript: TbBrandTypescript,
  JavaScript: TbBrandJavascript,
  Java: TbCoffee,
  React: TbBrandReact,
  "Next.js": TbBrandNextjs,
  "Tailwind CSS": TbBrandTailwind,
  "Node.js": TbBrandNodejs,
  "REST APIs": TbApi,
  SQL: TbDatabase,
  MySQL: TbBrandMysql,
  SQLite: TbDatabase,
  ".NET Core": SiDotnet,
  Spring: TbLeaf,
  "Microsoft Azure": TbBrandAzure,
  Docker: TbBrandDocker,
  "CI/CD": SiCircleci,
  Git: TbBrandGit,
  Jira: SiJira,
  Trello: TbBrandTrello,
  Bitbucket: TbBrandBitbucket,
  Confluence: SiConfluence,
  Figma: TbBrandFigma,
  Photoshop: TbBrandAdobe,
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
              <span className="relative z-10 flex h-11 w-11 items-center justify-center shrink-0 text-red-500/90">
                <Icon
                  className="h-[2.15rem] w-[2.15rem] tech-card-icon"
                  strokeWidth={1.5}
                />
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
