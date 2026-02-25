import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsGrid from "@/components/SkillsGrid";
import Projects from "@/components/Projects";
import AtsSummary from "@/components/AtsSummary";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <ExperienceTimeline />
        <SkillsGrid />
        <Projects />
        <AtsSummary />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
