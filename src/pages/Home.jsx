import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";
import CareerPaths from "../components/home/CareerPaths";
import Marquee from "../components/shared/Marquee";
import AboutIntro from "../components/shared/AboutIntro";
import ResumeCards from "../components/shared/ResumeCards";
import ToolkitGrid from "../components/shared/ToolkitGrid";
import SplitButton from "../components/shared/SplitButton";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectShowcase from "../components/projects/ProjectShowcase";
import { FEATURED_PROJECTS } from "../data/projects";
import { EXPERIENCE } from "../data/experience";
import { TOOLKIT, DISCIPLINES } from "../data/toolkit";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee words={DISCIPLINES} />
      <CareerPaths />

      <section className="section section--alt" aria-label="About">
        <div className="section-inner">
          <AboutIntro />
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="section-inner">
          <SectionHeader
            tag="Selected work"
            title="Let's look at"
            highlight="the evidence"
            id="work-title"
            action={<SplitButton to="/projects">All projects</SplitButton>}
          />
          <div style={{ display: "grid", gap: 20 }}>
            {FEATURED_PROJECTS.map((p, i) => (
              <ProjectShowcase key={p.slug} project={p} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <Marquee words={DISCIPLINES} />

      <section className="section section--alt" aria-labelledby="exp-title">
        <div className="section-inner">
          <SectionHeader
            tag="Education & work"
            title="My"
            highlight="Education"
            after="& Experience"
            id="exp-title"
            center
          />
          <ResumeCards experience={EXPERIENCE} />
          <p style={{ marginTop: 32, textAlign: "center" }}>
            <Link to="/about" className="text-link">
              Full experience, responsibilities and certifications
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="tools-title">
        <div className="section-inner">
          <SectionHeader
            tag="Toolkit"
            title="Tools that"
            highlight="ship my work"
            id="tools-title"
            aside="Everything here is on my CV or in the source of a project on this site."
          />
          <ToolkitGrid groups={TOOLKIT} />
        </div>
      </section>
    </>
  );
}
