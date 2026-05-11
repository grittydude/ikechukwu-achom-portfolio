import { useState } from "react";
import { useNavScroll } from "../../hooks/useNavScroll";
import { PERSONAL } from "../../data/personal";
import { scrollToSection } from "../../utils/helpers";
import { IconGitHub, IconEmail, IconWhatsApp } from "../ui/Icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const scrolled = useNavScroll(50);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <a href="#hero" className={styles.logo} onClick={(e) => handleNav(e, "#hero")}>
          {PERSONAL.name}.
        </a>

        <ul className={styles.links}>
          {PERSONAL.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNav(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={styles.cta}
              onClick={(e) => handleNav(e, "#contact")}
            >
              Let's Talk
            </a>
          </li>
        </ul>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ""}`} aria-hidden={!menuOpen}>
        {PERSONAL.navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className={styles.mobileCta} onClick={(e) => handleNav(e, "#contact")}>
          Let's Talk
        </a>
        <div className={styles.mobileSocials}>
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="social-btn">
            <IconGitHub />
          </a>
          <a href={`mailto:${PERSONAL.email}`} className="social-btn">
            <IconEmail />
          </a>
          <a href={PERSONAL.whatsappHref} target="_blank" rel="noopener noreferrer" className="social-btn">
            <IconWhatsApp />
          </a>
        </div>
      </div>
    </>
  );
}
