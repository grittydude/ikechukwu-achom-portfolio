import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>This page doesn't exist yet.</h1>
      <p className={styles.sub}>
        It might have moved, or the link might just be wrong. Either way,
        here's the way back.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home →</Link>
    </div>
  );
}
