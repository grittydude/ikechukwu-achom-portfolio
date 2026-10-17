import { EXPERIENCE } from "../data/experience";
import { EDUCATION, CERTIFICATIONS } from "../data/credentials";
import { DISCIPLINES } from "../data/toolkit";
import AboutIntro from "../components/shared/AboutIntro";
import ExperienceTimeline from "../components/shared/ExperienceTimeline";
import Marquee from "../components/shared/Marquee";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";
import styles from "./About.module.css";

// Working principles, each grounded in something on the CV. Review the
// wording — it's the one part of this page written as opinion, not record.
const PRINCIPLES = [
  {
    title: "Ship, then keep improving",
    body: "Getting an app into the store is the start. Post-launch analytics, bug fixes and feature work driven by user feedback are where products get good.",
  },
  {
    title: "Structure that outlasts version one",
    body: "Clean architecture, clear state and modular code — so the second and third releases are as easy to ship as the first.",
  },
  {
    title: "Grow the people around the product",
    body: "Running KodeCamp, with 10,000+ participants across seven bootcamps, taught me that a team's skill sets the ceiling on what it can ship.",
  },
];

export default function About() {
  return (
    <>
      <section className={styles.head} aria-label="Introduction">
        <div className="section-inner" style={{ paddingTop: 0 }}>
          <AboutIntro as="h1" />
        </div>
      </section>

      <Marquee words={DISCIPLINES} />

      <section className="section" aria-labelledby="principles-title">
        <div className="section-inner">
          <SectionHeader tag="How I work" title="Three" highlight="working principles" id="principles-title" />
          <ol className={styles.principles}>
            {PRINCIPLES.map((p, i) => (
              <Reveal as="li" key={p.title} className={styles.principle} delay={`delay-${i + 1}`}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="exp-title">
        <div className="section-inner">
          <SectionHeader
            tag="Experience"
            title="Work"
            highlight="history"
            id="exp-title"
            aside="From the CV. Client details on enterprise banking work are confidential."
          />
          <ExperienceTimeline items={EXPERIENCE} />
        </div>
      </section>

      <section className="section" aria-labelledby="edu-title">
        <div className="section-inner">
          <SectionHeader tag="Education" title="Education &" highlight="certifications" id="edu-title" />
          <div className={styles.eduGrid}>
            {EDUCATION.map((e) => (
              <Reveal key={e.id} className={styles.degree}>
                <span className={styles.degreeYear}>{e.year}</span>
                <h3>{e.qualification}</h3>
                <p>{e.school}</p>
              </Reveal>
            ))}
            <ul className={styles.certs}>
              {CERTIFICATIONS.map((c, i) => (
                <Reveal as="li" key={c.id} className={styles.cert}>
                  <span className={styles.certNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <strong>{c.title}</strong>
                  <span>
                    {c.issuer} · {c.year}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
