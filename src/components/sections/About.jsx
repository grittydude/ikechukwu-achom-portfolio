import { PERSONAL } from "../../data/personal";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className={styles.grid}>
          <div>
            <SectionHeader tag="About Me" title="Crafting Apps That" highlight="Matter" />
            <div className={styles.bio}>
              {PERSONAL.bio.map((para, i) => (
                <Reveal key={i} delay={`delay-${i + 2}`}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className={styles.highlights}>
            {PERSONAL.highlights.map((h, i) => (
              <Reveal key={h.title} delay={`delay-${i + 1}`}>
                <div className={styles.card}>
                  <span className={styles.icon}>{h.icon}</span>
                  <div>
                    <h4 className={styles.cardTitle}>{h.title}</h4>
                    <p className={styles.cardBody}>{h.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
