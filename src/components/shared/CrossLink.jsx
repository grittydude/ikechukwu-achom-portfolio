import { Link } from "react-router-dom";
import styles from "./CrossLink.module.css";

/**
 * A soft, single-line invitation to the next product in the ecosystem —
 * not a banner ad. Used at the bottom of every product page.
 */
export default function CrossLink({ body, to, label, color = "var(--primary)" }) {
  return (
    <div className={styles.card}>
      <span className={styles.eyebrow}>Continue the Ecosystem</span>
      <p className={styles.body}>{body}</p>
      <Link to={to} className={styles.link} style={{ background: color }}>
        {label} →
      </Link>
    </div>
  );
}
