import { Link } from "react-router-dom";
import { DEDLINE } from "../data/dedlineProduct";
import Reveal from "../components/ui/Reveal";
import PhoneFrame from "../components/ui/PhoneFrame";
import CrossLink from "../components/shared/CrossLink";
import FinalCta from "../components/shared/FinalCta";
import styles from "./Dedline.module.css";

export default function Dedline() {
  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={`section-inner ${styles.heroInner}`}>
          <Reveal className={styles.heroCopy}>
            <span className={styles.status}>● {DEDLINE.platform} · {DEDLINE.status}</span>
            <h1 className={styles.h1}>
              {DEDLINE.headline} <span className={styles.highlight}>{DEDLINE.headlineHighlight}</span>
            </h1>
            <p className={styles.sub}>{DEDLINE.subheadline}</p>
            <div className={styles.actions}>
              <a href={DEDLINE.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Try the Live Demo →
              </a>
              {DEDLINE.githubUrl ? (
                <a href={DEDLINE.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  View on GitHub
                </a>
              ) : (
                <Link to="/projects/dedline" className="btn btn-outline">
                  Read the case study
                </Link>
              )}
            </div>
            <div className={styles.tech}>
              {DEDLINE.tech.map((t) => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay="delay-2" className={styles.heroVisual}>
            <PhoneFrame />
          </Reveal>
        </div>
      </section>

      {/* ── Problem / Solution ── */}
      <section className={styles.altSection}>
        <div className="section-inner">
          <div className={styles.twoCol}>
            <Reveal>
              <h2 className={styles.h2}>The Problem</h2>
              <p className={styles.body}>{DEDLINE.problem}</p>
            </Reveal>
            <Reveal delay="delay-1">
              <h2 className={styles.h2}>The Solution</h2>
              <p className={styles.body}>{DEDLINE.solution}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section>
        <div className="section-inner">
          <h2 className={styles.h2Center}>How It Works</h2>
          <div className={styles.stepsGrid}>
            {DEDLINE.steps.map((step, i) => (
              <Reveal key={step.title} delay={i > 0 ? `delay-${i}` : ""}>
                <div className={styles.stepCard}>
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.body}>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.altSection}>
        <div className="section-inner">
          <h2 className={styles.h2Center}>Core Features</h2>
          <div className={styles.featureGrid}>
            {DEDLINE.features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.body}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section>
        <div className="section-inner">
          <h2 className={styles.h2Center}>Built For</h2>
          <ul className={styles.useCases}>
            {DEDLINE.useCases.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className={styles.philosophySection}>
        <div className="section-inner">
          <blockquote className={styles.philosophy}>{DEDLINE.philosophy}</blockquote>
        </div>
      </section>

      {/* ── Cross-link ── */}
      <section>
        <div className="section-inner">
          <CrossLink {...DEDLINE.crossLink} color="var(--pillar-execution)" />
        </div>
      </section>

      <FinalCta
        tag="Execution"
        title="Keep Exploring the"
        highlight="Ecosystem"
        sub="Dedline is the Execution pillar. Mindset and Discipline live in the books."
        primary={{ label: "Explore the Books", to: "/books" }}
        secondary={{ label: "Back to Home", to: "/" }}
        accent="var(--pillar-execution)"
      />
    </div>
  );
}
