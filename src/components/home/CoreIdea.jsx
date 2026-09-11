import { BRAND_IDEA } from "../../data/ecosystem";
import Reveal from "../ui/Reveal";
import { useInView } from "../../hooks/useInView";
import styles from "./CoreIdea.module.css";

export default function CoreIdea() {
  const [tagRef, tagV] = useInView();
  const [titleRef, titleV] = useInView();

  return (
    <section id="core-idea" className={styles.section}>
      <div className="section-inner">
        <p ref={tagRef} className={`section-tag reveal ${tagV ? "visible" : ""}`}>
          {BRAND_IDEA.eyebrow}
        </p>
        <h2 ref={titleRef} className={`reveal delay-1 ${titleV ? "visible" : ""} ${styles.title}`}>
          {BRAND_IDEA.title}
        </h2>

        <div className={styles.steps}>
          {BRAND_IDEA.steps.map((step, i) => (
            <Reveal key={step.label} delay={i > 0 ? `delay-${i + 1}` : ""} className={styles.stepWrap}>
              <div className={styles.step}>
                <div className={styles.dot} style={{ background: step.color, boxShadow: `0 0 0 6px color-mix(in srgb, ${step.color} 18%, transparent)` }} />
                <h3 className={styles.stepLabel} style={{ color: step.color }}>{step.label}</h3>
                <p className={styles.stepProduct}>{step.product}</p>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
              {i < BRAND_IDEA.steps.length - 1 && <div className={styles.connector} aria-hidden="true" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
