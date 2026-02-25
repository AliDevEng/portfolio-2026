import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Rezai — Full Stack Developer | Software Engineer",
  description:
    "Portfolio of Ali Rezai — Software Engineer Intern specializing in Node.js, TypeScript, React, SQL, Docker, CI/CD and Azure. Based in Malmö, Sweden.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Node.js",
    "TypeScript",
    "React",
    "SQL",
    "Docker",
    "CI/CD",
    "Azure",
    "REST API",
    "Backend",
    "Frontend",
    "Malmö",
    "Sweden",
  ],
  authors: [{ name: "Ali Rezai" }],
  openGraph: {
    title: "Ali Rezai — Full Stack Developer",
    description:
      "Software Engineer Intern building scalable web applications with Node.js, TypeScript, React, and SQL.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1e293b",
              color: "#e5e7eb",
              border: "1px solid #334155",
            },
          }}
        />
      </body>
    </html>
  );
}
