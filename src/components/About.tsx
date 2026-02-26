"use client";

import Image from "next/image";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { aboutData } from "@/lib/data";

export default function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-sm font-medium uppercase tracking-wider text-red-400 mb-2">
          Discovery
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {aboutData.heading}{" "}
          <span className="text-red-400">
            {aboutData.subheading.replace("About the engineer", "The Engineer")}
          </span>
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 items-center">
          {/* Left – illustration */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-square">
              <Image
                src={aboutData.image}
                alt="Developer illustration"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                sizes="(max-width: 768px) 100vw, 380px"
                priority
              />
            </div>
          </div>

          {/* Right – text + stats */}
          <div>
            <Card className="border-l-2 border-l-red-500 border-t-0 border-r-0 border-b-0 rounded-none bg-transparent">
              <CardContent className="py-6 pl-6">
                <p className="text-base leading-relaxed text-gray-400 italic">
                  {aboutData.paragraph}
                </p>
              </CardContent>
            </Card>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutData.stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="text-center p-5 hover:border-red-500/40 transition-colors"
                >
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
