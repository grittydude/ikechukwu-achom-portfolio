import styles from "./Marquee.module.css";

const WORDS = ["Mindset", "Discipline", "Execution"];

function Track() {
  return (
    <div className={styles.track}>
      {WORDS.map((w) => (
        <span className={styles.word} key={w}>
          {w}
          <span className={styles.sep} aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.inner}>
        <Track />
        <Track />
      </div>
    </div>
  );
}
