import { useInView } from "../../hooks/useInView";
import { useCursorGlow } from "../../hooks/useCursorGlow";
import { PERSONAL } from "../../data/personal";
import { IconGitHub, IconEmail, IconWhatsApp } from "../ui/Icons";
import styles from "./Hero.module.css";

function PhoneMockup() {
  return (
    <div className={styles.phoneWrap}>
      <div className={styles.phoneGlow} />
      <div className={styles.phone}>
        <div className={styles.notch} />
        <div className={styles.screen}>
          <div className={styles.statRow}>
            <div className={styles.stat}>
              <div className={styles.statVal}>98%</div>
              <div className={styles.statLbl}>PERFORMANCE</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statVal}>4.9★</div>
              <div className={styles.statLbl}>RATING</div>
            </div>
          </div>
          <div className={styles.barSection}>
            <div className={styles.barTitle}>App Performance Metrics</div>
            <div className={styles.bar}><div className={styles.barFill} style={{ width: "92%" }} /></div>
            <div className={styles.bar}><div className={styles.barFill} style={{ width: "78%", background: "linear-gradient(135deg,#22D3EE,#0EA5E9)" }} /></div>
            <div className={styles.bar}><div className={styles.barFill} style={{ width: "85%" }} /></div>
          </div>
          <div className={styles.phoneCard} style={{ background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.15)" }}>
            <div className={styles.phoneCardTitle} style={{ color: "var(--accent)" }}>CURRENT PROJECT</div>
            <div className={styles.phoneCardVal}>Flutter × Firebase</div>
          </div>
          <div className={styles.phoneCard} style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.2)" }}>
            <div className={styles.phoneCardTitle} style={{ color: "#a78bfa" }}>STATUS</div>
            <div className={styles.phoneCardVal} style={{ color: "#c4b5fd" }}>In Development</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const cursor = useCursorGlow();
  const [ref1, v1] = useInView();
  const [ref2, v2] = useInView();
  const [ref3, v3] = useInView();
  const [ref4, v4] = useInView();
  const [ref5, v5] = useInView();

  return (
    <section id="hero" className={styles.hero}>
      {/* Cursor glow */}
      <div
        className={styles.cursorGlow}
        style={{ left: cursor.x, top: cursor.y }}
        aria-hidden="true"
      />

      {/* Background layers */}
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div ref={ref1} className={`reveal ${v1 ? "visible" : ""} ${styles.badge}`}>
            <span className={styles.dot} />
            Available for Remote Opportunities
          </div>

          <h1 ref={ref2} className={`reveal delay-1 ${v2 ? "visible" : ""} ${styles.h1}`}>
            Building{" "}
            <span className={styles.grad}>High-Performance</span>
            <br />
            Flutter Apps with
            <br />
            Clean Architecture
            <br />
            <span className={styles.grad}>&amp; Exceptional UX.</span>
          </h1>

          <p ref={ref3} className={`reveal delay-2 ${v3 ? "visible" : ""} ${styles.sub}`}>
            {PERSONAL.subheadline}
          </p>

          <div ref={ref4} className={`reveal delay-3 ${v4 ? "visible" : ""} ${styles.buttons}`}>
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Contact Me
            </a>
            <a href="#" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); alert("Resume download coming soon!"); }}>
              ↓ Download Resume
            </a>
          </div>

          <div ref={ref5} className={`reveal delay-4 ${v5 ? "visible" : ""} ${styles.socials}`}>
            <span className={styles.socialsLabel}>Find me on</span>
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
              <IconGitHub />
            </a>
            <a href={`mailto:${PERSONAL.email}`} className="social-btn" aria-label="Email">
              <IconEmail />
            </a>
            <a href={PERSONAL.whatsappHref} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
              <IconWhatsApp />
            </a>
          </div>
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}
