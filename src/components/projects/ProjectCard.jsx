import { Link } from "react-router-dom";
import { PROJECT_KINDS, hasCaseStudy } from "../../data/projects";
import ProjectVisual from "./ProjectVisual";
import { ProjectLinks } from "./ProjectShowcase";
import { IconArrowUpRight } from "../ui/Icons";
import styles from "./ProjectCard.module.css";

/**
 * Compact grid card. When a case study exists the whole card is one link
 * (stretched over the title); external links stay separately focusable.
 */
export default function ProjectCard({ project, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  const linked = hasCaseStudy(project);
  return (
    <article className={`${styles.card} ${linked ? styles.linked : ""}`}>
      <ProjectVisual project={project} size="sm" />
      <div className={styles.body}>
        <p className={styles.meta}>
          {PROJECT_KINDS[project.kind]}
          {project.status && <> · {project.status}</>}
        </p>
        <H className={styles.title}>
          {linked ? (
            <Link to={`/projects/${project.slug}`} className={styles.stretch}>
              {project.title}
            </Link>
          ) : (
            project.title
          )}
          {linked && (
            <span className={styles.arrow} aria-hidden="true">
              <IconArrowUpRight size={14} />
            </span>
          )}
        </H>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.summary}>{project.summary}</p>
        <ProjectLinks links={project.links} className={styles.links} />
      </div>
    </article>
  );
}
