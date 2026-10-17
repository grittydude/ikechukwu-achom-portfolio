import { EDUCATION, CERTIFICATIONS } from "../../data/credentials";
import Reveal from "../ui/Reveal";
import { IconBriefcase, IconCap } from "../ui/Icons";
import styles from "./ResumeCards.module.css";

function Card({ icon, title, rows }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        <span className={styles.icon}>{icon}</span>
        {title}
      </h3>
      <ul className={styles.rows}>
        {rows.map((r) => (
          <li key={r.key} className={styles.row}>
            <div>
              <p className={styles.rowTitle}>{r.title}</p>
              <p className={styles.rowSub}>{r.sub}</p>
            </div>
            <span className={styles.date}>{r.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Education & Work Experience side-by-side cards from the reference. */
export default function ResumeCards({ experience, certifications = CERTIFICATIONS.slice(0, 3) }) {
  const eduRows = [
    ...EDUCATION.map((e) => ({ key: e.id, title: e.school, sub: e.qualification, date: e.year })),
    ...certifications.map((c) => ({ key: c.id, title: c.title, sub: c.issuer, date: c.year })),
  ];
  const workRows = experience.map((e) => ({
    key: e.id,
    title: e.company,
    sub: e.role,
    date: e.period.replace(" — ", " – "),
  }));

  return (
    <div className={styles.wrap}>
      <Reveal>
        <Card icon={<IconCap size={18} />} title="Education & Certifications" rows={eduRows} />
      </Reveal>
      <Reveal delay="delay-1">
        <Card icon={<IconBriefcase size={18} />} title="Work Experience" rows={workRows} />
      </Reveal>
    </div>
  );
}
