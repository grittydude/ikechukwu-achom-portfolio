import { SOCIAL_PROOF } from "../../data/socialProof";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./SocialProof.module.css";

export default function SocialProof() {
  return (
    <section id="social-proof">
      <div className="section-inner">
        <SectionHeader
          tag="Social Proof"
          title="Early"
          highlight="Feedback"
          sub="Draft placeholders for now — this section will hold real quotes as they come in."
        />
        <div className={styles.grid}>
          {SOCIAL_PROOF.map((t, i) => (
            <Reveal key={t.id} delay={i > 0 ? `delay-${i}` : ""}>
              <blockquote className={styles.card} style={{ "--pillar-color": t.pillarColor }}>
                <span className={styles.pillarTag}>{t.pillar}</span>
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <cite className={styles.role}>{t.role}</cite>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
