import { PERSONAL } from "../../data/personal";
import { IconGitHub, IconEmail, IconWhatsApp } from "../ui/Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.logo}>{PERSONAL.name}</div>
          <p className={styles.tagline}>{PERSONAL.tagline}</p>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
        </p>

        <div className={styles.socials}>
          {/* <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
            <IconGitHub size={16} />
          </a> */}
          <a href={`mailto:${PERSONAL.email}`} className="social-btn" aria-label="Email">
            <IconEmail size={16} />
          </a>
          <a href={PERSONAL.whatsappHref} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
            <IconWhatsApp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
