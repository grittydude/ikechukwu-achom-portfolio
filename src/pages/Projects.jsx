import { useSearchParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { ROLES } from "../data/roles";
import ProjectCard from "../components/projects/ProjectCard";
import { WithBurst } from "../components/ui/SectionHeader";
import styles from "./Projects.module.css";

const FILTERS = [{ id: "all", short: "All" }, ...ROLES];

export default function Projects() {
  const [params, setParams] = useSearchParams();
  const active = FILTERS.some((f) => f.id === params.get("role")) ? params.get("role") : "all";
  const list = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.roles.includes(active));

  const select = (id) => setParams(id === "all" ? {} : { role: id }, { replace: true });

  return (
    <>
      <section className={styles.head} aria-labelledby="projects-title">
        <div className={styles.headInner}>
          <p className="section-tag">Projects</p>
          <h1 id="projects-title" className={styles.title}>
            Work I've{" "}
            <span>
              <WithBurst text="built and led" />
            </span>
          </h1>
          <p className={styles.sub}>
            Client apps, personal products and programs. Projects with a case study cover the problem, my part in it,
            the decisions and the results. Client work under NDA is described without screenshots or code.
          </p>

          <div className={styles.filters} role="group" aria-label="Filter projects by role">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`${styles.filter} ${active === f.id ? styles.filterActive : ""}`}
                aria-pressed={active === f.id}
                onClick={() => select(f.id)}
              >
                {f.short}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Project list">
        <div className="section-inner" style={{ paddingTop: 48 }}>
          <p className={styles.count} aria-live="polite">
            {list.length} project{list.length === 1 ? "" : "s"}
          </p>
          <div className={styles.grid}>
            {list.map((p) => (
              <ProjectCard key={p.slug} project={p} headingLevel={2} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
