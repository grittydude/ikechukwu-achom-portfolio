import { Link } from "react-router-dom";
import { getRole, ROLES } from "../data/roles";
import { PERSONAL } from "../data/personal";
import { getProject, projectsFor, hasCaseStudy } from "../data/projects";
import { experienceFor } from "../data/experience";
import { toolkitFor } from "../data/toolkit";
import { certificationsFor, EDUCATION } from "../data/credentials";
import Marquee from "../components/shared/Marquee";
import CvButton from "../components/shared/CvButton";
import SocialLinks from "../components/shared/SocialLinks";
import ToolkitGrid from "../components/shared/ToolkitGrid";
import ExperienceTimeline from "../components/shared/ExperienceTimeline";
import ProjectShowcase from "../components/projects/ProjectShowcase";
import ProjectCard from "../components/projects/ProjectCard";
import SectionHeader, { WithBurst } from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";
import { IconArrowRight } from "../components/ui/Icons";
import styles from "./RolePage.module.css";

/**
 * One template for every career path (/mobile-engineer, /web-developer, …).
 * Each page has to stand on its own when a recruiter opens it cold, so it
 * repeats the name, current role, CV and contact rather than assuming the
 * visitor came from the homepage.
 */
export default function RolePage({ roleId }) {
  const role = getRole(roleId);
  const projects = projectsFor(roleId);
  const showcased = projects.filter(hasCaseStudy).slice(0, 4);
  const more = projects.filter((p) => !showcased.includes(p));
  const experience = experienceFor(roleId);
  const certs = certificationsFor(roleId);
  const others = ROLES.filter((r) => r.id !== roleId);

  return (
    <>
      <section className={styles.hero} aria-labelledby="role-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className="section-tag">{role.eyebrow}</p>
            <h1 id="role-title" className={styles.title}>
              {role.title}{" "}
              <span>
                <WithBurst text={role.highlight} />
              </span>
            </h1>
            <p className={styles.byline}>
              <strong>{PERSONAL.name}</strong> · {PERSONAL.currentRole}, {PERSONAL.currentCompany}
            </p>
            <p className={styles.intro}>{role.intro}</p>
            <div className={styles.actions}>
              <CvButton role={roleId} variant="btn-accent" />
              <a href="#contact" className="btn btn-outline">
                Contact me
              </a>
            </div>
            <SocialLinks only={["linkedin", "github", "email"]} />
          </div>

          <Reveal className={styles.glance} delay="delay-1">
            <h2 className={styles.glanceTitle}>At a glance</h2>
            <dl>
              {role.glance.map((g) => (
                <div key={g.label}>
                  <dt>{g.label}</dt>
                  <dd>{g.value}</dd>
                </div>
              ))}
              <div>
                <dt>Education</dt>
                <dd>
                  {EDUCATION[0].qualification}, {EDUCATION[0].school}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <Marquee words={role.marquee} />

      <section className="section" aria-labelledby="cap-title">
        <div className="section-inner">
          <SectionHeader
            tag="What I bring"
            title="Capabilities, with"
            highlight="evidence"
            id="cap-title"
            aside="Each capability links to the projects that back it up."
          />
          <ol className={styles.caps}>
            {role.capabilities.map((c, i) => (
              <Reveal as="li" key={c.title} className={styles.cap}>
                <span className={styles.capNum}>{String(i + 1).padStart(2, "0")}.</span>
                <div>
                  <h3 className={styles.capTitle}>{c.title}</h3>
                  <p className={styles.capBody}>{c.body}</p>
                  <ul className={styles.evidence} aria-label="Evidence">
                    {c.evidence.map((slug) => {
                      const p = getProject(slug);
                      if (!p) return null;
                      return (
                        <li key={slug}>
                          {hasCaseStudy(p) ? (
                            <Link to={`/projects/${slug}`} className="pill">
                              {p.title}
                            </Link>
                          ) : (
                            <span className="pill">{p.title}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="proj-title">
        <div className="section-inner">
          <SectionHeader tag="Selected projects" title="Relevant" highlight="work" id="proj-title" />
          <div className={styles.showcase}>
            {showcased.map((p, i) => (
              <ProjectShowcase key={p.slug} project={p} flip={i % 2 === 1} />
            ))}
          </div>
          {more.length > 0 && (
            <>
              <h3 className={styles.moreTitle}>More {role.short.toLowerCase()} work</h3>
              <div className={styles.grid}>
                {more.map((p) => (
                  <ProjectCard key={p.slug} project={p} headingLevel={4} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="section" aria-labelledby="exp-title">
        <div className="section-inner">
          <SectionHeader tag="Experience" title="Where I've" highlight="done this" id="exp-title" />
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="tools-title">
        <div className="section-inner">
          <SectionHeader tag="Toolkit" title="Tools for" highlight={role.short.toLowerCase()} after="work" id="tools-title" />
          <ToolkitGrid groups={toolkitFor(roleId)} />
          {certs.length > 0 && (
            <div className={styles.certs}>
              <h3 className={styles.moreTitle}>Relevant certifications</h3>
              <ul>
                {certs.map((c) => (
                  <li key={c.id}>
                    <strong>{c.title}</strong>
                    <span>
                      {c.issuer}, {c.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section" aria-labelledby="other-title">
        <div className="section-inner">
          <SectionHeader tag="Other paths" title="Looking for a" highlight="different role?" id="other-title" />
          <ul className={styles.others}>
            {others.map((r) => (
              <li key={r.id}>
                <Link to={r.path} className={styles.other}>
                  <span>
                    <strong>{r.label}</strong>
                    <small>{r.meta.description}</small>
                  </span>
                  <span className={styles.otherArrow} aria-hidden="true">
                    <IconArrowRight size={18} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
