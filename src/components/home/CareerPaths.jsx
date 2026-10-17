import { useId, useState } from "react";
import { ROLES } from "../../data/roles";
import SectionHeader from "../ui/SectionHeader";
import SplitButton from "../shared/SplitButton";
import { IconArrowUpRight } from "../ui/Icons";
import styles from "./CareerPaths.module.css";

/**
 * The reference's numbered "Services" accordion, repurposed as career-path
 * navigation: each row expands to a summary and links to that role's page.
 */
export default function CareerPaths() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section className="section" id="paths" aria-labelledby="paths-title">
      <div className="section-inner">
        <SectionHeader
          tag="Choose a path"
          title=""
          highlight="Portfolios"
          after="by role"
          id="paths-title"
          aside="Hiring for something specific? Each path has its own page you can open or share directly — the relevant projects, experience and skills, nothing else."
        />

        <ol className={styles.list}>
          {ROLES.map((role, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const btnId = `${baseId}-btn-${i}`;
            return (
              <li key={role.id} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                <h3 className={styles.rowHeading}>
                  <button
                    id={btnId}
                    type="button"
                    className={styles.row}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className={styles.num}>{String(i + 1).padStart(2, "0")}.</span>
                    <span className={styles.label}>{role.label}</span>
                    <span className={styles.arrow} aria-hidden="true">
                      <IconArrowUpRight size={16} />
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={btnId} className={styles.panel} hidden={!isOpen}>
                  <ul className={styles.tags}>
                    {role.capabilities.map((c) => (
                      <li key={c.title}>{c.title}</li>
                    ))}
                  </ul>
                  <p className={styles.intro}>{role.intro}</p>
                  <SplitButton to={role.path}>Open the {role.short.toLowerCase()} portfolio</SplitButton>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
