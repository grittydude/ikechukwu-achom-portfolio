import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavScroll } from "../../hooks/useNavScroll";
import { PERSONAL } from "../../data/personal";
import { IconEmail, IconWhatsApp } from "../ui/Icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const scrolled = useNavScroll(50);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          {PERSONAL.name}.
        </Link>

        <ul className={styles.links}>
          {PERSONAL.navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/about#contact" className={styles.cta}>
              Let's Talk
            </Link>
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
          <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={closeMenu}>
            {link.label}
          </NavLink>
        ))}
        <Link to="/about#contact" className={styles.mobileCta} onClick={closeMenu}>
          Let's Talk
        </Link>
        <div className={styles.mobileSocials}>
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
