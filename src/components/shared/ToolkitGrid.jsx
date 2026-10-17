import Reveal from "../ui/Reveal";
import styles from "./ToolkitGrid.module.css";

/**
 * Arch-topped tool cards (the reference's "Design Tools" row), grouped.
 * Deliberately no skill percentages — they can't be backed by evidence.
 */
export default function ToolkitGrid({ groups }) {
  return (
    <div className={styles.groups}>
      {groups.map((g, gi) => (
        <Reveal key={g.id} delay={`delay-${Math.min(gi + 1, 5)}`}>
          <h3 className={styles.groupTitle}>{g.title}</h3>
          <ul className={styles.grid}>
            {g.items.map((t) => (
              <li key={t.name} className={styles.card}>
                <span className={styles.mark} aria-hidden="true">
                  {t.mark}
                </span>
                <span className={styles.name}>{t.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
