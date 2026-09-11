import { useState } from "react";
import { Link } from "react-router-dom";
import { ECOSYSTEM } from "../../data/ecosystem";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./Ecosystem.module.css";

function Row({ item, open, onToggle }) {
  return (
    <div className={`${styles.row} ${open ? styles.open : ""}`}>
      <button
        className={styles.header}
        onClick={onToggle}
        aria-expanded={open}
        style={{ "--pillar-color": item.pillarColor }}
      >
        <span className={styles.number}>{item.number}</span>
        <span className={styles.titleWrap}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.tagline}>{item.tagline}</span>
        </span>
        <span className={styles.pillarTag}>{item.pillar}</span>
        <span className={`${styles.plus} ${open ? styles.plusOpen : ""}`}>+</span>
      </button>

      <div className={styles.panel}>
        <div className={styles.panelInner}>
          <p className={styles.desc}>{item.description}</p>
          <div className={styles.tags}>
            {item.tags.map((t) => (
              <span key={t} className={styles.tagPill} style={{ "--pillar-color": item.pillarColor }}>
                {t}
              </span>
            ))}
          </div>
          <Link to={item.route} className={styles.cta} style={{ background: item.pillarColor }}>
            {item.cta} →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Ecosystem() {
  const [openId, setOpenId] = useState(ECOSYSTEM[0].id);

  return (
    <section id="ecosystem">
      <div className="section-inner">
        <SectionHeader
          tag="The Ecosystem"
          title="Three Products,"
          highlight="One Idea"
          sub="Everything here traces back to the same idea: excellence is a decision, a practice, and a system — a book, a habit, and a tool for each."
        />
        <Reveal>
          <div className={styles.list}>
            {ECOSYSTEM.map((item) => (
              <Row
                key={item.id}
                item={item}
                open={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
