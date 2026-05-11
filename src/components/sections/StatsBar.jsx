import { PERSONAL } from "../../data/personal";
import Reveal from "../ui/Reveal";
import styles from "./StatsBar.module.css";

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {PERSONAL.stats.map((s, i) => (
          <Reveal key={s.label} delay={i > 0 ? `delay-${i}` : ""} className={styles.item}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.label}>{s.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
