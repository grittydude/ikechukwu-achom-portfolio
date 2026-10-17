import { Link, Navigate, useParams } from "react-router-dom";
import { PROJECTS, PROJECT_KINDS, getProject, hasCaseStudy } from "../data/projects";
import { ROLES } from "../data/roles";
import ProjectVisual from "../components/projects/ProjectVisual";
import { ProjectLinks } from "../components/projects/ProjectShowcase";
import Reveal from "../components/ui/Reveal";
import { IconArrowRight, IconCheck } from "../components/ui/Icons";
import NotFound from "./NotFound";
import styles from "./CaseStudy.module.css";

/**
 * Shown only in `npm run dev` so missing case-study content stays visible
 * while editing; production simply omits the section.
 */
function Missing({ label }) {
  if (!import.meta.env.DEV) return null;
  return <p className="dev-missing">Missing content: {label} — add it in src/data/projects.js (see CONTENT-TODO.md)</p>;
}

function Block({ n, title, children, missing }) {
  if (missing) {
    return import.meta.env.DEV ? (
      <section className={styles.block}>
        <p className={styles.blockNum}>{n}</p>
        <div>
          <h2 className={styles.blockTitle}>{title}</h2>
          <Missing label={title} />
        </div>
      </section>
    ) : null;
  }
  return (
    <Reveal as="section" className={styles.block}>
      <p className={styles.blockNum} aria-hidden="true">
        {n}
      </p>
      <div>
        <h2 className={styles.blockTitle}>{title}</h2>
        {children}
      </div>
    </Reveal>
  );
}

function List({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((t) => (
        <li key={t}>
          <span className={styles.check}>
            <IconCheck size={12} />
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;
  if (!hasCaseStudy(project)) return <Navigate to="/projects" replace />;

  const cs = project.caseStudy;
  const withStudies = PROJECTS.filter(hasCaseStudy);
  const idx = withStudies.findIndex((p) => p.slug === slug);
  const next = withStudies[(idx + 1) % withStudies.length];
  const relatedRoles = ROLES.filter((r) => project.roles.includes(r.id));

  // Number only the sections that actually render.
  const sections = [
    { key: "overview", title: "Overview", value: cs.overview, render: (v) => <p>{v}</p> },
    { key: "problem", title: "The problem", value: cs.problem, render: (v) => <p>{v}</p> },
    {
      key: "contribution",
      title: "My role & contribution",
      value: cs.contribution,
      render: (v) => (
        <>
          {project.myRole && (
            <p className={styles.roleLine}>
              <strong>Role:</strong> {project.myRole}
            </p>
          )}
          <List items={v} />
          {cs.team && (
            <p className={styles.team}>
              <strong>Team context:</strong> {cs.team}
            </p>
          )}
        </>
      ),
    },
    { key: "constraints", title: "Constraints", value: cs.constraints, render: (v) => <List items={v} /> },
    { key: "approach", title: "Approach", value: cs.approach, render: (v) => <p>{v}</p> },
    {
      key: "decisions",
      title: "Key decisions & trade-offs",
      value: cs.decisions,
      render: (v) => (
        <div className={styles.decisions}>
          {v.map((d) => (
            <div key={d.title} className={styles.decision}>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      ),
    },
    { key: "outcomes", title: "Outcomes", value: cs.outcomes, render: (v) => <List items={v} /> },
    { key: "lessons", title: "Lessons learned", value: cs.lessons, render: (v) => <p>{v}</p> },
  ];
  let n = 0;

  return (
    <article>
      <header className={styles.head}>
        <div className={styles.headInner}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link to="/projects">Projects</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <p className="section-tag">{PROJECT_KINDS[project.kind]} · Case study</p>
          <h1 className={styles.title}>
            {project.title} <span>– {project.tagline}</span>
          </h1>
          <p className={styles.summary}>{project.summary}</p>

          <dl className={styles.facts}>
            {[
              ["My role", project.myRole],
              ["Platform", project.platform],
              ["Status", project.status],
            ]
              .filter(([, v]) => v)
              .map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            {project.stack?.length > 0 && (
              <div>
                <dt>Stack</dt>
                <dd>{project.stack.join(", ")}</dd>
              </div>
            )}
          </dl>
          <ProjectLinks links={project.links} />
        </div>
      </header>

      <div className={styles.body}>
        <div className={styles.visual}>
          <ProjectVisual project={project} size="lg" />
          {!project.screenshot && !project.confidential && import.meta.env.DEV && (
            <p className="dev-missing" style={{ marginTop: 12 }}>
              Missing: real screenshots — add to public/projects/{project.slug}/ and set `screenshot` in projects.js
            </p>
          )}
        </div>

        {sections.map((s) => {
          const has = Array.isArray(s.value) ? s.value.length > 0 : Boolean(s.value);
          if (has) n += 1;
          return (
            <Block key={s.key} n={has ? String(n).padStart(2, "0") : "—"} title={s.title} missing={!has}>
              {has && s.render(s.value)}
            </Block>
          );
        })}

        <footer className={styles.foot}>
          {relatedRoles.length > 0 && (
            <div>
              <p className={styles.footLabel}>Part of these portfolios</p>
              <ul className={styles.roleLinks}>
                {relatedRoles.map((r) => (
                  <li key={r.id}>
                    <Link to={r.path} className="pill">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {next && next.slug !== slug && (
            <Link to={`/projects/${next.slug}`} className={styles.next}>
              <span>
                <small>Next case study</small>
                <strong>{next.title}</strong>
              </span>
              <span className={styles.nextArrow} aria-hidden="true">
                <IconArrowRight size={18} />
              </span>
            </Link>
          )}
        </footer>
      </div>
    </article>
  );
}
