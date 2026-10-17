// Per-route metadata. Used at runtime by components/layout/Seo.jsx and at
// build time by scripts/generate-route-html.mjs (which writes a static
// index.html per route so link previews work without JavaScript).

import { ROLES } from "./roles.js";
import { PROJECTS, hasCaseStudy } from "./projects.js";

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

export const ROUTE_META = [
  ...STATIC_ROUTES,
  ...ROLES.map((r) => ({ path: r.path, ...r.meta, priority: "0.9" })),
  ...PROJECTS.filter(hasCaseStudy).map((p) => ({
    path: `/projects/${p.slug}`,
    title: `${p.title} — ${p.tagline} | Ikechukwu Achom`,
    description: p.summary,
    priority: "0.6",
  })),
];

export function metaFor(path) {
  return ROUTE_META.find((m) => m.path === path) ?? null;
}
