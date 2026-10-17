// Shared, dependency-free helpers for turning CMS-edited JSON (content/) into
// the shapes the site expects. Used by the app (via Vite) and by the Node
// build script, so neither can drift from the other.
//
// The CMS saves empty fields as "" or [] rather than null. Everything below
// folds those back to null, so "not filled in yet" means one thing everywhere:
// hidden in production, flagged in `npm run dev`.

export const PROJECT_KINDS = {
  personal: "Personal product",
  client: "Client project",
  employer: "Company project",
  program: "Program",
};

const text = (v) => (typeof v === "string" && v.trim() ? v.trim() : null);
const list = (v) => {
  const items = (Array.isArray(v) ? v : []).map((x) => (typeof x === "string" ? x.trim() : x)).filter(Boolean);
  return items.length ? items : null;
};

function normalizeCaseStudy(cs = {}) {
  const decisions = (cs.decisions ?? []).filter((d) => text(d?.title) && text(d?.body));
  return {
    overview: text(cs.overview),
    problem: text(cs.problem),
    contribution: list(cs.contribution),
    team: text(cs.team),
    constraints: list(cs.constraints),
    approach: text(cs.approach),
    decisions: decisions.length ? decisions : null,
    outcomes: list(cs.outcomes),
    lessons: text(cs.lessons),
  };
}

/** `slug` comes from the file name (content/projects/<slug>.json). */
export function normalizeProject(slug, raw) {
  const links = Object.fromEntries(Object.entries(raw.links ?? {}).filter(([, href]) => text(href)));
  return {
    ...raw,
    slug,
    order: Number(raw.order ?? 999),
    roles: raw.roles ?? [],
    featured: Boolean(raw.featured),
    confidential: Boolean(raw.confidential),
    myRole: text(raw.myRole),
    platform: text(raw.platform),
    status: text(raw.status),
    stack: list(raw.stack) ?? [],
    links,
    highlight: text(raw.highlight?.value) ? raw.highlight : null,
    screenshot: text(raw.screenshot?.src) ? raw.screenshot : null,
    screens: (raw.screens ?? []).filter((s) => text(s?.src)),
    screenSlots: list(raw.screenSlots) ?? [],
    caseStudy: normalizeCaseStudy(raw.caseStudy),
  };
}

export const sortProjects = (projects) =>
  [...projects].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
