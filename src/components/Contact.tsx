"use client";

import { toast } from "sonner";
import { Mail, MapPin, Github, Linkedin, Copy, ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { personal, contactData } from "@/lib/data";

export default function Contact() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      toast.success("Email copied.");
    } catch {
      toast.error("Couldn't copy email. Please copy it manually.");
    }
  };

  return (
    <Section id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-red-400">
            Connect
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {contactData.heading}
          </h2>
          <p className="mt-3 text-gray-400">{contactData.subtext}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="leading-relaxed text-gray-400">
              Whether it&apos;s an internship opportunity, a junior role, or
              just a chat about tech, I&apos;d love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-red-400"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900/60">
                  <Mail className="h-4 w-4 text-red-400" />
                </span>
                {personal.email}
              </a>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900/60">
                  <MapPin className="h-4 w-4 text-red-400" />
                </span>
                {personal.location}
              </div>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-red-400"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900/60">
                  <Linkedin className="h-4 w-4 text-red-400" />
                </span>
                LinkedIn
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-red-400"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900/60">
                  <Github className="h-4 w-4 text-red-400" />
                </span>
                GitHub
              </a>
            </div>
          </div>

          <Card>
            <CardContent className="space-y-6 p-6">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-400">
                  Contact
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  Direct Email
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  For opportunities, collaborations, or questions, please reach
                  out by email. This is the most reliable way to contact me.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-4">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  My email
                </p>
                <p className="mt-1 break-all text-base font-medium text-white">
                  {personal.email}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={copyEmail}
                  className="min-w-[160px]"
                >
                  <Copy className="h-4 w-4" />
                  Copy Email
                </Button>
                <Button asChild className="min-w-[160px]">
                  <a href={`mailto:${personal.email}`}>
                    <Mail className="h-4 w-4" />
                    Open Email App
                  </a>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900/60 px-4 py-3 text-sm text-gray-300 transition-colors hover:border-red-500/40 hover:text-white"
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4 text-red-400" />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900/60 px-4 py-3 text-sm text-gray-300 transition-colors hover:border-red-500/40 hover:text-white"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4 text-red-400" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
