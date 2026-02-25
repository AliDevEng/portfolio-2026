"use client";

import { Briefcase, MapPin, Calendar } from "lucide-react";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { experienceEntries } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <Section id="experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-red-400 mb-2">
            Career
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Professional <span className="text-red-400">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/40 via-gray-800 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experienceEntries.map((entry, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={entry.company + entry.role}
                  className={`relative flex flex-col md:flex-row md:items-start gap-8 ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 z-10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-red-500/40 bg-gray-950">
                      <Briefcase className="h-4 w-4 text-red-400" />
                    </div>
                  </div>

                  {/* Date badge */}
                  <div
                    className={`hidden md:flex w-1/2 ${
                      isLeft ? "justify-start pl-12" : "justify-end pr-12"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-950/80 px-4 py-1.5 text-sm text-gray-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {entry.dates}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <Card className="hover:border-red-500/30 transition-colors">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-white">
                          {entry.role}
                        </h3>
                        <p className="mt-1 flex items-center gap-2 text-sm text-red-400">
                          <Briefcase className="h-3.5 w-3.5" />
                          {entry.company}
                        </p>
                        <p className="mt-1 flex items-center gap-2 text-xs text-gray-500 md:hidden">
                          <Calendar className="h-3 w-3" />
                          {entry.dates}
                        </p>
                        <p className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                          <MapPin className="h-3 w-3" />
                          {entry.location}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {entry.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-2 text-sm text-gray-400"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/60" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
