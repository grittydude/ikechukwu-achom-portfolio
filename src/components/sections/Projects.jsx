import { PROJECTS } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import ProjectMockup from "./ProjectMockup";
import { IconGitHub } from "../ui/Icons";
import { openLink } from "../../utils/helpers";
import styles from "./Projects.module.css";

const STATUS_CONFIG = {
  live:         { cls: styles.statusLive,         label: "● Personal Project" },
  dev:          { cls: styles.statusDev,          label: "● In Development" },
  confidential: { cls: styles.statusConfidential, label: "● Private Client Build" },
};

function ProjectCard({ project, delay }) {
  const status = STATUS_CONFIG[project.status] ?? STATUS_CONFIG.confidential;

  return (
    <Reveal delay={delay}>
      <article className={styles.card}>
        <ProjectMockup
          theme={project.mockupTheme}
          isConfidential={project.status === "confidential" || project.statusLabel === "NDA Protected"}
        />

        <div className={styles.content}>
          <span className={`${styles.status} ${status.cls}`}>
            {project.statusLabel ? `● ${project.statusLabel}` : status.label}
          </span>

          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.description}</p>

          <div className={styles.pills}>
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>

          <ul className={styles.features}>
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <div className={styles.actions}>
            {project.githubUrl && (
              <button
                className="btn btn-outline btn-sm"
                onClick={() => openLink(project.githubUrl)}
              >
                <IconGitHub size={14} /> GitHub
              </button>
            )}
            {project.caseStudy && (
              <button
                className="btn btn-outline btn-sm"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                📄 Case Study
              </button>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <SectionHeader
          tag="Portfolio"
          title="Featured"
          highlight="Work"
          sub="A selection of projects built with precision, passion, and production-grade standards."
        />
        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i % 3 > 0 ? `delay-${i % 3}` : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
