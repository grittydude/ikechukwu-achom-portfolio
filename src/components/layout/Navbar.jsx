import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useNavScroll } from "../../hooks/useNavScroll";
import { PERSONAL } from "../../data/personal";
import { ROLES } from "../../data/roles";
import { IconChevronDown, IconClose, IconMenu } from "../ui/Icons";
import SocialLinks from "../shared/SocialLinks";
import CvButton from "../shared/CvButton";
import styles from "./Navbar.module.css";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
];

export function Logo({ className = "" }) {
  return (
    <Link to="/" className={`${styles.logo} ${className}`} aria-label={`${PERSONAL.name} — home`}>
      <span className={styles.logoMark} aria-hidden="true">
        {PERSONAL.firstName[0]}
      </span>
      <span>
        {PERSONAL.firstName}
        <span className={styles.logoDot}>.</span>
      </span>
    </Link>
  );
}

function PortfoliosMenu() {
  const { pathname } = useLocation();
  // Remember which page the menu was opened on, so navigating closes it.
  const [openAt, setOpenAt] = useState(null);
  const open = openAt === pathname;
  const setOpen = (next) => setOpenAt(next ? pathname : null);
  const ref = useRef(null);
  const active = ROLES.some((r) => pathname.startsWith(r.path));

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpenAt(null);
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenAt(null);
        ref.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.menuWrap} ref={ref}>
      <button
        type="button"
        className={`${styles.link} ${active ? styles.active : ""}`}
        aria-expanded={open}
        aria-controls="portfolios-menu"
        onClick={() => setOpen(!open)}
      >
        Portfolios <IconChevronDown size={14} />
      </button>
      <ul id="portfolios-menu" className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
        {ROLES.map((r) => (
          <li key={r.id}>
            <NavLink
              to={r.path}
              className={({ isActive }) => (isActive ? styles.menuActive : undefined)}
              onClick={() => setOpen(false)}
            >
              <strong>{r.label}</strong>
              <small>{r.path}</small>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const scrolled = useNavScroll(24);
  const { pathname } = useLocation();
  const [openAt, setOpenAt] = useState(null);
  const menuOpen = openAt === pathname;
  const setMenuOpen = (next) => setOpenAt(next ? pathname : null);
  const close = () => setOpenAt(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setOpenAt(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav} aria-label="Main">
        <Logo />

        <ul className={styles.links}>
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <PortfoliosMenu />
          </li>
        </ul>

        <a href="#contact" className={`btn btn-primary btn-sm ${styles.cta}`}>
          Contact Me
        </a>

        <button
          type="button"
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      <div id="mobile-menu" className={`${styles.sheet} ${menuOpen ? styles.sheetOpen : ""}`} hidden={!menuOpen}>
        <ul className={styles.sheetLinks}>
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} onClick={close}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <p className={styles.sheetLabel}>Portfolios</p>
        <ul className={styles.sheetRoles}>
          {ROLES.map((r) => (
            <li key={r.id}>
              <NavLink to={r.path} onClick={close}>
                {r.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.sheetActions}>
          <a href="#contact" className="btn btn-primary" onClick={close}>
            Contact Me
          </a>
          <CvButton />
        </div>
        <SocialLinks />
      </div>
    </header>
  );
}
