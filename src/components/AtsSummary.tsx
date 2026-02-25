"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, FileSearch } from "lucide-react";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { atsSummary } from "@/lib/data";

export default function AtsSummary() {
  const [open, setOpen] = useState(false);

  const listSections = [
    { title: "Core Skills", items: atsSummary.coreSkills },
    { title: "Tools & Technologies", items: atsSummary.toolsAndTechnologies },
    { title: "Experience Highlights", items: atsSummary.experienceHighlights },
    {
      title: "Education & Certifications",
      items: atsSummary.educationAndCertifications,
    },
  ];

  return (
    <Section id="ats">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="border-red-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="flex items-center gap-2 text-lg text-white">
              <FileSearch className="h-5 w-5 text-red-400" />
              Recruiter / ATS View
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="ats-content"
            >
              {open ? (
                <>
                  Collapse <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  Expand <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          </CardHeader>

          {open && (
            <CardContent id="ats-content" className="pt-4 space-y-6">
              {/* Professional Summary – rendered as paragraphs */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-2">
                  Professional Summary
                </h3>
                <div className="space-y-3">
                  {atsSummary.professionalSummary
                    .trim()
                    .split("\n\n")
                    .map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="text-sm leading-relaxed text-gray-400"
                      >
                        {paragraph.trim()}
                      </p>
                    ))}
                </div>
              </div>

              {/* List-based sections */}
              {listSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          )}
        </Card>
      </div>
    </Section>
  );
}
