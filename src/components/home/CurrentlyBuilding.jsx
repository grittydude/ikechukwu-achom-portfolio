import { Link } from "react-router-dom";
import { DEDLINE } from "../../data/dedlineProduct";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./CurrentlyBuilding.module.css";

export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className={styles.section}>
      <div className="section-inner">
        <SectionHeader
          tag="Currently Building"
          title="Execution,"
          highlight="in Progress"
          sub="The same discipline that goes into the books is going into a piece of software right now."
        />

        <Reveal>
          <div className={styles.card}>
            <div className={styles.glow} aria-hidden="true" />
            <div className={styles.content}>
              <span className={styles.status}>● {DEDLINE.platform} · {DEDLINE.status}</span>
              <h3 className={styles.title}>Dedline</h3>
              <p className={styles.headline}>
                {DEDLINE.headline} <span className={styles.highlight}>{DEDLINE.headlineHighlight}</span>
              </p>
              <p className={styles.sub}>{DEDLINE.subheadline}</p>

              <div className={styles.tech}>
                {DEDLINE.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>

              <div className={styles.actions}>
                <Link to="/dedline" className="btn btn-primary btn-sm">
                  Explore Dedline →
                </Link>
                <a href={DEDLINE.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
