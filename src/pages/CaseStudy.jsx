import { Link, useParams } from "react-router-dom";
import { PROJECTS, PROJECT_KINDS, getProject } from "../data/projects";
import { ROLES } from "../data/roles";
import { publicUrl } from "../data/site";
import ProjectVisual from "../components/projects/ProjectVisual";
import { ProjectLinks } from "../components/projects/ProjectShowcase";
import Reveal from "../components/ui/Reveal";
import { IconArrowRight, IconCheck } from "../components/ui/Icons";
import NotFound from "./NotFound";
import styles from "./CaseStudy.module.css";

const DEV = import.meta.env.DEV;

/** Dev-only marker for an empty section; production omits the section entirely. */
function Missing({ label }) {
  return <p className="dev-missing">Missing: {label} — add it in /admin or content/projects/*.json (see CONTENT-TODO.md)</p>;
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

const has = (v) => (Array.isArray(v) ? v.length > 0 : Boolean(v));

/** Screens gallery: real screenshots, or (dev only) labelled slots to fill. */
function Screens({ project }) {
  if (project.screens?.length) {
    return (
      <div className={styles.gallery}>
        {project.screens.map((s) => (
          <figure key={s.src} className={styles.shot}>
            <img src={publicUrl(s.src)} alt={s.alt} loading="lazy" decoding="async" />
            {s.caption && <figcaption>{s.caption}</figcaption>}
          </figure>
        ))}
      </div>
    );
  }
  return (
    <div className={styles.gallery}>
      {project.screenSlots.map((label) => (
        <div key={label} className={styles.slot}>
          <span>{label}</span>
          <small>public/projects/{project.slug}/</small>
        </div>
      ))}
    </div>
  );
}

function Facts({ project, roles }) {
  const rows = [
    ["My role", project.myRole],
    ["Type", PROJECT_KINDS[project.kind]],
    ["Platform", project.platform],
    ["Status", project.status],
  ].filter(([, v]) => v);

  return (
    <div className={styles.facts}>
      <p className={styles.factsTitle}>Project facts</p>
      <dl>
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      {project.stack?.length > 0 && (
        <>
          <p className={styles.factsLabel}>Stack</p>
          <ul className={styles.stack}>
            {project.stack.map((s) => (
              <li key={s} className="pill">
                {s}
              </li>
            ))}
          </ul>
        </>
      )}
      <ProjectLinks links={project.links} className={styles.factLinks} />
      {roles.length > 0 && (
        <>
          <p className={styles.factsLabel}>Part of these portfolios</p>
          <ul className={styles.stack}>
            {roles.map((r) => (
              <li key={r.id}>
                <Link to={r.path} className={`pill ${styles.roleLink}`}>
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project || !project.caseStudy) return <NotFound />;

  const cs = project.caseStudy;
  const relatedRoles = ROLES.filter((r) => project.roles.includes(r.id));
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  const showScreens = !project.confidential && (project.screens?.length > 0 || (DEV && project.screenSlots?.length > 0));

  const sections = [
    { key: "overview", title: "Overview", value: cs.overview, render: (v) => <p className={styles.lead}>{v}</p> },
    { key: "problem", title: "The problem", value: cs.problem, render: (v) => <p>{v}</p> },
    {
      key: "contribution",
      title: "My role & contribution",
      value: cs.contribution,
      render: (v) => (
        <>
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
          {v.map((d, i) => (
            <div key={d.title} className={styles.decision}>
              <span className={styles.decisionNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      ),
    },
    { key: "screens", title: "Screens", value: showScreens, render: () => <Screens project={project} /> },
    {
      key: "outcomes",
      title: "Outcomes",
      value: cs.outcomes,
      render: (v) => (
        <ul className={styles.outcomes}>
          {v.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      ),
    },
    { key: "lessons", title: "Lessons learned", value: cs.lessons, render: (v) => <p>{v}</p> },
  ];

  // Number only the sections that actually render.
  const numbered = sections
    .filter((s) => s.key !== "screens" || showScreens)
    .reduce((acc, s) => {
      const n = has(s.value) ? acc.filter((x) => x.filled).length + 1 : null;
      return [...acc, { ...s, filled: has(s.value), n }];
    }, []);

  return (
    <article>
      <header className={styles.head}>
        <div className={styles.headInner}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link to="/projects">Projects</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <p className="section-tag">
            {PROJECT_KINDS[project.kind]} · Case study
          </p>
          <h1 className={styles.title}>
            {project.title} <span>– {project.tagline}</span>
          </h1>
          <p className={styles.summary}>{project.summary}</p>
        </div>
        <div className={styles.cover}>
          <ProjectVisual project={project} size="lg" />
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.side} aria-label="Project facts">
          <Facts project={project} roles={relatedRoles} />
        </aside>

        <div className={styles.main}>
          {project.confidential && (
            <div className={styles.notice} role="note">
              <strong>Confidential work.</strong> This project is under NDA or owned by the company, so screenshots,
              code and client details aren't shared. What's below is what can be said publicly.
            </div>
          )}

          {numbered.map((s) => {
            if (!s.filled) {
              return DEV ? (
                <section key={s.key} className={styles.block}>
                  <p className={styles.blockNum}>—</p>
                  <div>
                    <h2 className={styles.blockTitle}>{s.title}</h2>
                    <Missing label={s.title} />
                  </div>
                </section>
              ) : null;
            }
            return (
              <Reveal as="section" key={s.key} className={styles.block}>
                <p className={styles.blockNum} aria-hidden="true">
                  {String(s.n).padStart(2, "0")}
                </p>
                <div>
                  <h2 className={styles.blockTitle}>{s.title}</h2>
                  {s.render(s.value)}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <nav className={styles.pager} aria-label="More case studies">
        <Link to={`/projects/${prev.slug}`} className={styles.pagerLink}>
          <span className={`${styles.pagerArrow} ${styles.flipArrow}`} aria-hidden="true">
            <IconArrowRight size={18} />
          </span>
          <span>
            <small>Previous</small>
            <strong>{prev.title}</strong>
          </span>
        </Link>
        <Link to="/projects" className={styles.pagerAll}>
          All projects
        </Link>
        <Link to={`/projects/${next.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
          <span>
            <small>Next</small>
            <strong>{next.title}</strong>
          </span>
          <span className={styles.pagerArrow} aria-hidden="true">
            <IconArrowRight size={18} />
          </span>
        </Link>
      </nav>
    </article>
  );
}
