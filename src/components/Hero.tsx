"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeSnippet from "@/components/CodeSnippet";
import { heroData, personal } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-red-500/8 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-red-900/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-red-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column – text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.p
              variants={item}
              className="mb-4 text-sm font-medium uppercase tracking-wider text-red-400"
            >
              {personal.title}
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {heroData.heading}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-lg leading-relaxed text-gray-400"
            >
              {heroData.subtext}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-3 text-xs font-medium tracking-wide text-gray-500"
            >
              {heroData.keywordLine}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-2 text-xs text-red-400/70 font-medium"
            >
              Open to: Internship / Junior Full Stack / Backend / Cloud-leaning
              roles
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={heroData.ctaPrimary.href}>
                  {heroData.ctaPrimary.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a
                  href={heroData.ctaSecondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {heroData.ctaSecondary.label}
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column – code snippet */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <CodeSnippet />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
