import { publicUrl } from "../../data/site";
import styles from "./ProjectVisual.module.css";

function Skeleton({ lines = 4 }) {
  return (
    <div className={styles.skel}>
      <span className={styles.skelHead} />
      {Array.from({ length: lines }, (_, i) => (
        <span key={i} className={styles.skelLine} style={{ width: `${88 - ((i * 17) % 40)}%` }} />
      ))}
      <span className={styles.skelBlock} />
    </div>
  );
}

/**
 * A real screenshot when one exists (project.screenshot). Otherwise an
 * abstract device frame — wireframe bars only, never a fabricated product
 * screen — so it can't be mistaken for evidence. Add real screenshots under
 * public/projects/<slug>/ to replace these.
 */
export default function ProjectVisual({ project, size = "md" }) {
  const isWeb = project.platform === "Web";
  const isProgram = project.kind === "program";

  if (project.screenshot) {
    return (
      <div className={`${styles.visual} ${styles[size]} ${styles.shot}`}>
        <div className={styles.browser}>
          <div className={styles.bar} aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <img
            src={publicUrl(project.screenshot.src)}
            alt={project.screenshot.alt}
            loading="lazy"
            decoding="async"
            width="1280"
            height="800"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.visual} ${styles[size]}`} aria-hidden="true">
      {isProgram ? (
        <div className={styles.program}>
          <span className={styles.programNum}>700+</span>
          <span className={styles.programLabel}>graduates · 4 bootcamps</span>
        </div>
      ) : isWeb ? (
        <div className={styles.browser}>
          <div className={styles.bar}>
            <i />
            <i />
            <i />
          </div>
          <div className={styles.browserBody}>
            <span className={styles.webTitle}>{project.title}</span>
            <Skeleton lines={3} />
          </div>
        </div>
      ) : (
        <div className={styles.phones}>
          <div className={`${styles.phone} ${styles.phoneBack}`}>
            <Skeleton lines={5} />
          </div>
          <div className={`${styles.phone} ${styles.phoneFront}`}>
            <span className={styles.appIcon}>{project.title.slice(0, 1)}</span>
            <span className={styles.appName}>{project.title}</span>
            <Skeleton lines={3} />
          </div>
        </div>
      )}
      {project.confidential && <span className={styles.badge}>Confidential client work</span>}
    </div>
  );
}
