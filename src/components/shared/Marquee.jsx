import { IconSpark } from "../ui/Icons";
import styles from "./Marquee.module.css";

function Track({ words }) {
  return (
    <ul className={styles.track}>
      {words.map((w) => (
        <li className={styles.word} key={w}>
          {w}
          <IconSpark size={18} className={styles.sep} />
        </li>
      ))}
    </ul>
  );
}

/**
 * Black scrolling band with orange sparkles. Decorative: the same skills are
 * listed in real content on every page, so the band is hidden from assistive
 * tech. Stops scrolling under prefers-reduced-motion.
 */
export default function Marquee({ words }) {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.inner}>
        <Track words={words} />
        <Track words={words} />
      </div>
    </div>
  );
}
