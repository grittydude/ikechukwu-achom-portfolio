import { EXPERIENCE } from "../../data/experience";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./Experience.module.css";

function TimelineItem({ item, delay }) {
  return (
    <Reveal delay={delay} className={styles.item}>
      <div className={styles.dot} />
      <p className={styles.period}>{item.period}</p>
      <h3 className={styles.role}>{item.role}</h3>
      <p className={styles.company}>{item.company}</p>
      <p className={styles.desc}>{item.description}</p>
      <div className={styles.tags}>
        {item.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <SectionHeader
          tag="Journey"
          title="Experience &"
          highlight="Growth"
          sub="A timeline of development, client work, and continuous learning."
        />
        <div className={styles.timeline}>
          {EXPERIENCE.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              delay={i > 0 ? `delay-${Math.min(i, 4)}` : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
