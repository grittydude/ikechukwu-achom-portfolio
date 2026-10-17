// Per-route metadata. Pure (no imports of content), so the app
// (src/data/routes.js) and the Node build script
// (scripts/generate-route-html.mjs) build the exact same list.

export const DEFAULT_META = {
  title: "Ikechukwu Achom — Mobile Engineer & Product Builder",
  description:
    "Ikechukwu Achom builds mobile products end to end — Flutter, Kotlin and React Native — and leads the teams and KodeCamp training program behind them.",
  image: "og-image.jpg",
};

const STATIC_ROUTES = [
  { path: "/", ...DEFAULT_META, priority: "1.0" },
  {
    path: "/projects",
    title: "Projects — Ikechukwu Achom",
    description:
      "Mobile apps, web projects and programs by Ikechukwu Achom, with case studies covering the problem, his role, decisions and outcomes.",
    priority: "0.8",
  },
  {
    path: "/about",
    title: "About & Experience — Ikechukwu Achom",
    description:
      "Experience, education and certifications: Senior Technical Lead, Operations Manager and Lead Mobile Developer at KodeHauz, Program Manager of KodeCamp, and mobile developer on enterprise banking work.",
    priority: "0.8",
  },
  {
    path: "/books",
    title: "Books — Ikechukwu Achom",
    description: "Books by Ikechukwu Achom: Fans of Excellence and Grit365.",
    priority: "0.4",
  },
  {
    path: "/books/fans-of-excellence",
    title: "Fans of Excellence — Ikechukwu Achom",
    description: "Fans of Excellence: From Applauding Greatness to Becoming It — a book by Ikechukwu Achom.",
    priority: "0.4",
  },
  {
    path: "/dedline",
    title: "Dedline — Never Miss a Renewal",
    description: "Dedline is a Flutter app for tracking subscriptions, renewals and deadlines with smart reminders.",
    priority: "0.4",
  },
];

/** @param roles ROLES  @param projects normalized PROJECTS */
export function buildRouteMeta(roles, projects) {
  return [
    ...STATIC_ROUTES,
    ...roles.map((r) => ({ path: r.path, ...r.meta, priority: "0.9" })),
    ...projects
      .filter((p) => p.caseStudy)
      .map((p) => ({
        path: `/projects/${p.slug}`,
        title: `${p.title} — ${p.tagline} | Ikechukwu Achom`,
        description: p.summary,
        priority: "0.6",
      })),
  ];
}
