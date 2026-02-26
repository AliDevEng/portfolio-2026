import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navLinks, personal } from "@/lib/data";

const footerLinks = [...navLinks];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-bold text-white hover:text-red-400 transition-colors"
            >
              {personal.name}
            </Link>
            <p className="mt-1 text-sm text-gray-500">{personal.title}</p>
          </div>

          {/* Links */}
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
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

        <Separator className="my-8" />

        <p className="text-center text-xs text-gray-500">
          &copy; 2026 {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
