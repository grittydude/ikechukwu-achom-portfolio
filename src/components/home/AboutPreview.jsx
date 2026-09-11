import { Link } from "react-router-dom";
import { PERSONAL } from "../../data/personal";
import Reveal from "../ui/Reveal";
import { useInView } from "../../hooks/useInView";
import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
  const [tagRef, tagV] = useInView();
  const [titleRef, titleV] = useInView();

  return (
    <section id="about-preview">
      <div className="section-inner">
        <div className={styles.grid}>
          <Reveal className={styles.monogramWrap}>
            <div className={styles.monogram}>
              <span>{PERSONAL.initials}</span>
            </div>
            <div className={styles.badgeStats}>
              {PERSONAL.stats.slice(0, 3).map((s) => (
                <div key={s.label} className={styles.badge}>
                  <span className={styles.badgeNum}>{s.num}</span>
                  <span className={styles.badgeLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className={styles.copy}>
            <p ref={tagRef} className={`section-tag reveal ${tagV ? "visible" : ""}`}>
              Who's Behind This
            </p>
            <h2 ref={titleRef} className={`reveal delay-1 ${titleV ? "visible" : ""} ${styles.title}`}>
              A writer with a
              <br />
              <span className={styles.editorial}>developer's discipline.</span>
            </h2>
            <Reveal delay="delay-2">
              <p className={styles.body}>
                {PERSONAL.name} is a Flutter Developer who writes about the
                same thing he builds software for: closing the gap between
                admiring excellence and actually practicing it. Fans of
                Excellence is the book. Dedline is the tool. Both come from
                the same standard applied to different mediums.
              </p>
            </Reveal>
            <Reveal delay="delay-3">
              <Link to="/about" className="btn btn-outline">
                More About Me →
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
