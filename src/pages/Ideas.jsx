import { Link } from "react-router-dom";
import styles from "./Ideas.module.css";

export default function Ideas() {
  return (
    <div className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <span className="section-tag">Ideas</span>
        <h1 className={styles.title}>
          Writing on Mindset, Discipline<br />&amp; <span className={styles.editorial}>Execution</span> — Coming Soon
        </h1>
        <p className={styles.sub}>
          Shorter-form thinking that doesn't need a whole book: notes on
          becoming excellent, staying consistent, and building the tools
          that keep you honest about both.
        </p>
        <div className={styles.actions}>
          <Link to="/books" className="btn btn-primary">Read the Books →</Link>
          <Link to="/" className="btn btn-outline">Back Home</Link>
        </div>
      </div>
    </div>
  );
}
