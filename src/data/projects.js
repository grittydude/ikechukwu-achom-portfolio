// Projects and case studies. The content lives in content/projects/*.json —
// one file per project, edited through the admin (/admin) or by hand. The
// file name is the project's URL slug: content/projects/dedline.json →
// /projects/dedline. See CONTENT-TODO.md for evidence rules and gaps.

import { normalizeProject, sortProjects } from "./normalize.js";

export { PROJECT_KINDS } from "./normalize.js";

const files = import.meta.glob("../../content/projects/*.json", { eager: true, import: "default" });

export const PROJECTS = sortProjects(
  Object.entries(files).map(([path, raw]) => normalizeProject(path.split("/").pop().replace(/\.json$/, ""), raw))
);

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
export const projectsFor = (roleId) => PROJECTS.filter((p) => p.roles.includes(roleId));
export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const hasCaseStudy = (p) => Boolean(p.caseStudy);
