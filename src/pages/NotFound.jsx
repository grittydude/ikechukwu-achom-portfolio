import { Link } from "react-router-dom";
import Seo from "../components/layout/Seo";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Seo title="Page not found — Ikechukwu Achom" noindex />
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>This page doesn't exist yet.</h1>
      <p className={styles.sub}>
        It might have moved, or the link might just be wrong. Either way,
        here's the way back.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/" className="btn btn-primary">Back to home</Link>
        <Link to="/projects" className="btn btn-outline">See projects</Link>
      </div>
    </div>
  );
}
