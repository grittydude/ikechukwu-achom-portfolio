import { TESTIMONIALS } from "../../data/testimonials";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./Testimonials.module.css";

function TestimonialCard({ t, delay }) {
  return (
    <Reveal delay={delay}>
      <blockquote className={styles.card}>
        <div className={styles.stars}>★★★★★</div>
        <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
        <footer className={styles.author}>
          <div
            className={styles.avatar}
            style={{ background: t.avatarGradient }}
            aria-hidden="true"
          >
            {t.initials}
          </div>
          <div>
            <cite className={styles.name}>{t.name}</cite>
            <p className={styles.role}>{t.role}</p>
          </div>
        </footer>
      </blockquote>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="section-inner">
        <SectionHeader
          tag="Social Proof"
          title="What Clients"
          highlight="Say"
          sub="Feedback from clients and collaborators across different projects and industries."
        />
        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={t.id}
              t={t}
              delay={i % 3 > 0 ? `delay-${i % 3}` : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
