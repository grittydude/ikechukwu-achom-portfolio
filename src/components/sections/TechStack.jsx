import { TECH_STACK } from "../../data/techStack";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./TechStack.module.css";

function TechCard({ tech, delay }) {
  return (
    <Reveal delay={delay}>
      <div className={styles.card}>
        <div className={styles.iconWrap} style={{ background: tech.bg }}>
          {tech.svg ? (
            <span dangerouslySetInnerHTML={{ __html: tech.svg }} />
          ) : (
            <span className={styles.emoji}>{tech.emoji}</span>
          )}
        </div>
        <div className={styles.name}>{tech.name}</div>
        <div className={styles.type}>{tech.type}</div>
      </div>
    </Reveal>
  );
}

export default function TechStack() {
  return (
    <section id="tech">
      <div className="section-inner">
        <SectionHeader
          tag="Tech Stack"
          title="Tools of the"
          highlight="Trade"
          sub="A carefully curated toolkit for building exceptional mobile experiences."
        />
        <div className={styles.grid}>
          {TECH_STACK.map((tech, i) => (
            <TechCard
              key={tech.id}
              tech={tech}
              delay={i % 4 > 0 ? `delay-${i % 4}` : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
