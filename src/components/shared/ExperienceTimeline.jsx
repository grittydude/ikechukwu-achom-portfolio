import Reveal from "../ui/Reveal";
import { IconCheck } from "../ui/Icons";
import styles from "./ExperienceTimeline.module.css";

/** Detailed experience entries with responsibilities, from data/experience.js. */
export default function ExperienceTimeline({ items, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <ol className={styles.list}>
      {items.map((e) => (
        <li key={e.id}>
          <Reveal className={styles.item}>
            <div className={styles.side}>
              <span className={styles.period}>{e.period}</span>
              <p className={styles.company}>{e.company}</p>
            </div>
            <div className={styles.main}>
              <H className={styles.role}>{e.role}</H>
              <p className={styles.summary}>{e.summary}</p>
              <ul className={styles.highlights}>
                {e.highlights.map((h) => (
                  <li key={h}>
                    <span className={styles.check}>
                      <IconCheck size={12} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <ul className={styles.tags} aria-label="Focus areas">
                {e.tags.map((t) => (
                  <li key={t} className="pill">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
