import { Link } from "react-router-dom";
import { PERSONAL } from "../../data/personal";
import { ROLES } from "../../data/roles";
import { cvFor } from "../../data/site";
import SocialLinks from "../shared/SocialLinks";
import styles from "./Footer.module.css";

const EXPLORE = [
  { label: "Projects", to: "/projects" },
  { label: "About & Experience", to: "/about" },
  { label: "Dedline", to: "/projects/dedline" },
  { label: "Books", to: "/books" },
];

export default function Footer() {
  const cv = cvFor();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            {PERSONAL.name}
            <span>.</span>
          </Link>
          <p className={styles.tagline}>
            {PERSONAL.headline}. {PERSONAL.currentRole} at {PERSONAL.currentCompany}.
          </p>
          <SocialLinks className={styles.socials} />
        </div>

        <nav className={styles.columns} aria-label="Footer">
          <div>
            <h2 className={styles.colTitle}>Portfolios</h2>
            <ul>
              {ROLES.map((r) => (
                <li key={r.id}>
                  <Link to={r.path}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.colTitle}>Explore</h2>
            <ul>
              {EXPLORE.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.colTitle}>Connect</h2>
            <ul>
              <li>
                <a href={`mailto:${PERSONAL.email}`}>{PERSONAL.email}</a>
              </li>
              <li>
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href={cv.href} download={cv.fileName}>Download CV (PDF)</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} {PERSONAL.name}</p>
        <a href="#top" className={styles.top}>Back to top ↑</a>
      </div>
    </footer>
  );
}
