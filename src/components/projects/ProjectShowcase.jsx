import { PROJECT_KINDS, hasCaseStudy } from "../../data/projects";
import { SHOW_SOURCE_LINKS } from "../../data/settings";
import ProjectVisual from "./ProjectVisual";
import SmartLink from "../shared/SmartLink";
import Reveal from "../ui/Reveal";
import { IconArrowUpRight } from "../ui/Icons";
import styles from "./ProjectShowcase.module.css";

const LINK_LABELS = { live: "Visit site", demo: "Try the demo", store: "Google Play", code: "Source code" };

export function ProjectLinks({ links, className = "" }) {
  const entries = Object.entries(links ?? {}).filter(([key, href]) => href && (SHOW_SOURCE_LINKS || key !== "code"));
  if (!entries.length) return null;
  return (
    <ul className={`${styles.links} ${className}`}>
      {entries.map(([key, href]) => (
        <li key={key}>
          <SmartLink to={href} className={styles.extLink}>
            {LINK_LABELS[key] ?? key}
            <IconArrowUpRight size={14} />
            <span className="visually-hidden"> (opens in a new tab)</span>
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}

/**
 * The reference's portfolio card: visual on one side, title with an italic
 * tagline, summary, a small facts table, and a "View details" link.
 * `flip` alternates the visual to the right on wide screens.
 */
export default function ProjectShowcase({ project, flip = false, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  const facts = [
    ["Type", PROJECT_KINDS[project.kind]],
    ["My role", project.myRole],
    ["Platform", project.platform],
    ["Status", project.status],
  ].filter(([, v]) => v);

  return (
    <Reveal>
      <article className={`${styles.card} ${flip ? styles.flip : ""}`}>
        <div className={styles.media}>
          <ProjectVisual project={project} />
        </div>
        <div className={styles.body}>
          <H className={styles.title}>
            {project.title} – <span>{project.tagline}</span>
          </H>
          <p className={styles.summary}>{project.summary}</p>

          <dl className={styles.facts}>
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          {project.stack?.length > 0 && (
            <ul className={styles.stack} aria-label="Stack">
              {project.stack.slice(0, 6).map((s) => (
                <li key={s} className="pill">
                  {s}
                </li>
              ))}
            </ul>
          )}

          <div className={styles.actions}>
            {hasCaseStudy(project) && (
              <SmartLink to={`/projects/${project.slug}`} className={styles.details}>
                View case study<span className="visually-hidden">: {project.title}</span>
              </SmartLink>
            )}
            <ProjectLinks links={project.links} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}
