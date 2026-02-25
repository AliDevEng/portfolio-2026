"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { personal, contactData } from "@/lib/data";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Thanks! I'll get back to you soon.");
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <Section id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-red-400 mb-2">
            Connect
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {contactData.heading}
          </h2>
          <p className="mt-3 text-gray-400">{contactData.subtext}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left – direct info */}
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed">
              Whether it&apos;s an internship opportunity, a junior role, or
              just a chat about tech — I&apos;d love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-red-400 transition-colors"
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
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-red-400 transition-colors"
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
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-red-400 transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900/60">
                  <Github className="h-4 w-4 text-red-400" />
                </span>
                GitHub
              </a>
            </div>
          </div>

          {/* Right – form */}
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the opportunity..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={sending}>
                  <Send className="mr-2 h-4 w-4" />
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
