"use client";

import { Github, FolderOpen, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-red-400 mb-2">
            Showcase
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Projects <span className="text-red-400">Showcase</span>
          </h2>
          <p className="mt-3 text-gray-400">Selected work</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="group overflow-hidden hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-500/5 h-full flex flex-col">
                {/* Accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-red-500 to-rose-500" />

                <CardContent className="flex-1 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                      <FolderOpen className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  {project.confidential ? (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="opacity-60 cursor-not-allowed"
                    >
                      <Lock className="mr-1.5 h-3.5 w-3.5" />
                      Confidential
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Source
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
