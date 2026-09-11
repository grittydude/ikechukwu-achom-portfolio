import { Link } from "react-router-dom";
import { PERSONAL } from "../../data/personal";
import { IconEmail, IconWhatsApp } from "../ui/Icons";
import styles from "./Footer.module.css";

const COLUMNS = [
  {
    title: "Books",
    links: [
      { label: "All Books", to: "/books" },
      { label: "Fans of Excellence", to: "/books/fans-of-excellence" },
      { label: "Grit365", to: "/books/grit365" },
    ],
  },
  {
    title: "Software",
    links: [
      { label: "Dedline", to: "/dedline" },
      { label: "Ideas", to: "/ideas" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Me", to: "/about" },
      { label: "Get In Touch", to: "/about#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>{PERSONAL.name}</Link>
          <p className={styles.tagline}>Mindset. Discipline. Execution.</p>
          <div className={styles.socials}>
            <a href={`mailto:${PERSONAL.email}`} className="social-btn" aria-label="Email">
              <IconEmail size={16} />
            </a>
            <a href={PERSONAL.whatsappHref} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
              <IconWhatsApp size={16} />
            </a>
          </div>
        </div>

        <div className={styles.columns}>
          {COLUMNS.map((col) => (
            <div key={col.title} className={styles.column}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
