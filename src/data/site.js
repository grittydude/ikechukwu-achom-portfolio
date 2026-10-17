// Site-wide constants. Kept free of asset imports so the post-build script
// (scripts/generate-route-html.mjs) can import this file directly in Node.

// Public origin + subpath the site is served from (GitHub Pages project site).
// If you move to a custom domain, change SITE_ORIGIN and BASE_PATH here and
// `base` in vite.config.js / `basename` in main.jsx to match.
export const SITE_ORIGIN = "https://grittydude.github.io";
export const BASE_PATH = "/ikechukwu-achom-portfolio/";
export const SITE_URL = SITE_ORIGIN + BASE_PATH.replace(/\/$/, "");

/**
 * Absolute canonical URL for a router path, e.g. "/mobile-engineer".
 * Non-root paths end in "/" because each route is emitted as
 * <route>/index.html and GitHub Pages redirects the slash-less form.
 */
export function absoluteUrl(path = "/") {
  const clean = path.replace(/\/+$/, "");
  return clean ? `${SITE_URL}${clean}/` : `${SITE_URL}/`;
}

/** URL for a file in /public, respecting the deploy subpath. */
export function publicUrl(file) {
  return `${BASE_PATH}${file.replace(/^\//, "")}`;
}

// Project "Source code" links are hidden for now. The repo URLs stay in
// data/projects.js — flip this to true to show them again.
export const SHOW_SOURCE_LINKS = false;

// CV files live in public/cv/. Only one master CV exists today; when
// role-specific CVs are added, point the matching key at the new file and
// every page that uses `cvFor(role)` picks it up automatically.
export const CV_FILES = {
  default: { file: "cv/Ikechukwu-Achom-CV.pdf", label: "Download CV" },
  // mobile: { file: "cv/Ikechukwu-Achom-Mobile-Engineer-CV.pdf", label: "Download Mobile CV" },
};

export function cvFor(roleId) {
  const entry = CV_FILES[roleId] ?? CV_FILES.default;
  return { href: publicUrl(entry.file), label: entry.label, fileName: entry.file.split("/").pop() };
}
