import { Link } from "react-router-dom";
import styles from "./FinalCta.module.css";

/**
 * Full-width closing CTA used at the bottom of product/landing pages.
 * {tag, title, highlight, sub, primary:{label,to}, secondary:{label,to}}
 */
export default function FinalCta({ tag, title, highlight, sub, primary, secondary, accent = "var(--primary)" }) {
  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className={styles.card} style={{ "--accent-color": accent }}>
          {tag && <span className={styles.tag}>{tag}</span>}
          <h2 className={styles.title}>
            {title} {highlight && <span style={{ color: accent }}>{highlight}</span>}
          </h2>
          {sub && <p className={styles.sub}>{sub}</p>}
          <div className={styles.actions}>
            {primary && (
              <Link to={primary.to} className="btn btn-primary">
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link to={secondary.to} className="btn btn-outline">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
