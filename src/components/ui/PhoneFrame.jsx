import styles from "./PhoneFrame.module.css";

const ROWS = [
  { label: "Domain Renewal", due: "Due in 2 days", urgency: "urgent" },
  { label: "Client Deliverable", due: "Due in 5 days", urgency: "soon" },
  { label: "Insurance Premium", due: "Due in 3 weeks", urgency: "fine" },
];

/**
 * Generic phone mockup used anywhere Dedline needs a "this is a mobile app"
 * visual — the Home hero slide and the Dedline landing page hero. Abstract
 * UI, not a real screenshot, styled with the Execution (violet/cyan) pillar
 * gradient to match the rest of Dedline's visual language.
 */
export default function PhoneFrame({ className = "" }) {
  return (
    <div className={`${styles.phoneWrap} ${className}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.phone}>
        <div className={styles.notch} />
        <div className={styles.screen}>
          <div className={styles.statusBar}>
            <span className={styles.time}>9:41</span>
            <span className={styles.signal} />
          </div>

          <div className={styles.appHeader}>
            <span className={styles.appName}>Dedline</span>
            <span className={styles.bell}>🔔</span>
          </div>

          <div className={styles.rows}>
            {ROWS.map((row) => (
              <div className={styles.row} key={row.label}>
                <span className={`${styles.dot} ${styles[row.urgency]}`} />
                <div className={styles.rowText}>
                  <span className={styles.rowLabel}>{row.label}</span>
                  <span className={styles.rowDue}>{row.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.floatBadge}>
        <span className={styles.floatDot} />
        Reminder sent
      </div>
    </div>
  );
}
