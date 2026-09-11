import Hero from "../components/sections/Hero";
import StatsBar from "../components/sections/StatsBar";
import AboutSection from "../components/sections/About";
import TechStack from "../components/sections/TechStack";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

// This page carries the original site's Execution/technical visual language
// (violet + cyan) on purpose — see tokens.css comments. It's the "developer"
// side of the brand; the gold reskin covers the rest of the ecosystem.
export default function About() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
