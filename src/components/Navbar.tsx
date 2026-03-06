"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks, personal } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isHoveringNav, setIsHoveringNav] = useState(false);

  // Refs for the sliding pill
  const navContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  // Compute pill position from a given href key
  const updatePill = useCallback((key: string | null) => {
    if (!key || !linkRefs.current[key] || !navContainerRef.current) {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const container = navContainerRef.current.getBoundingClientRect();
    const el = linkRefs.current[key]!.getBoundingClientRect();
    setPillStyle({
      left: el.left - container.left,
      width: el.width,
      opacity: 1,
    });
  }, []);

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* IntersectionObserver to highlight active nav link */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            if (!isHoveringNav) updatePill(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHoveringNav, updatePill]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white hover:text-red-400 transition-colors"
          aria-label="Home"
        >
          {personal.name.split(" ")[0]}
          <span className="text-red-400">.</span>
        </Link>

        {/* Desktop links with sliding pill */}
        <div
          ref={navContainerRef}
          className="hidden md:flex items-center gap-1 relative"
          onMouseLeave={() => {
            setIsHoveringNav(false);
            updatePill(activeSection || null);
          }}
        >
          {/* Animated pill background */}
          <span
            className="absolute top-0 h-full rounded-lg bg-white/[0.06] border border-white/[0.08] pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
              opacity: pillStyle.opacity,
            }}
          />

          {navLinks.map((link) => {
            const key = link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[key] = el;
                }}
                onMouseEnter={() => {
                  setIsHoveringNav(true);
                  updatePill(key);
                }}
                className={`relative z-10 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeSection === key
                    ? "text-red-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={personal.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              <FileText className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    className="block px-3 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}

              <div className="mt-6 pt-6 border-t border-gray-800 flex items-center gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
