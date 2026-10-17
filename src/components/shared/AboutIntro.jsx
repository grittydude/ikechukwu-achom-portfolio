import { PERSONAL } from "../../data/personal";
import { EDUCATION } from "../../data/credentials";
import Portrait from "./Portrait";
import Reveal from "../ui/Reveal";
import { Heading } from "../ui/SectionHeader";
import { IconCap, IconEmail, IconPhone } from "../ui/Icons";
import styles from "./AboutIntro.module.css";

/** "Who is …?" block: arch portrait with floating facts, bio, stats, contact chips. */
export default function AboutIntro({ as = "h2", children, showStats = true }) {
  const degree = EDUCATION[0];
  return (
    <div className={styles.wrap}>
      <Reveal className={styles.visual}>
        <Portrait variant="about">
          <div className={`${styles.float} ${styles.floatTop}`}>
            <span className={styles.floatNum}>700+</span>
            <span className={styles.floatLabel}>KodeCamp graduates</span>
          </div>
          <div className={`${styles.float} ${styles.floatBottom}`}>
            <span className={styles.floatIcon}>
              <IconCap size={16} />
            </span>
            {degree.qualification}, {degree.year}
          </div>
        </Portrait>
      </Reveal>

      <Reveal className={styles.copy} delay="delay-1">
        <p className="section-tag">About me</p>
        <Heading as={as} title="Who is" highlight={`${PERSONAL.name}?`} />
        {children ?? (
          <>
            <p>
              I'm a mobile engineer who kept taking on more of the product around the code. At KodeHauz I'm{" "}
              {PERSONAL.currentRole} as well as {PERSONAL.alsoRole}, and I run KodeCamp, the company's training
              program.
            </p>
            <p>
              Along the way I've designed apps in Figma before building them, taught mobile development and UX, and
              led teams of designers, developers and product managers. The common thread: get a useful product into
              people's hands, then make it better.
            </p>
          </>
        )}

        {showStats && (
          <dl className={styles.stats}>
            {PERSONAL.stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.num}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul className={styles.chips}>
          <li>
            <a href={`tel:${PERSONAL.phone.replace(/\s/g, "")}`}>
              <span className={styles.chipIcon}>
                <IconPhone size={14} />
              </span>
              {PERSONAL.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${PERSONAL.email}`}>
              <span className={styles.chipIcon}>
                <IconEmail size={14} />
              </span>
              {PERSONAL.email}
            </a>
          </li>
        </ul>
      </Reveal>
    </div>
  );
}
