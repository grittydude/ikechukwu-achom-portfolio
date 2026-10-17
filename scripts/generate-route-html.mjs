// Post-build step (runs after `vite build`, see package.json).
//
// GitHub Pages serves static files only, and link-preview crawlers (LinkedIn,
// Slack, X, WhatsApp) don't run JavaScript. So for every route listed in
// src/data/seo.js this writes dist/<route>/index.html — a copy of the app
// shell with that route's title, description, canonical URL and Open Graph
// tags baked in. Direct visits then get a real 200 instead of going through
// the 404.html redirect, and shared links show the right preview.
//
// It also writes sitemap.xml and robots.txt.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTE_META, DEFAULT_META } from "../src/data/seo.js";
import { absoluteUrl, publicUrl, SITE_ORIGIN } from "../src/data/site.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const escapeAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function setTag(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`generate-route-html: couldn't find ${label} in dist/index.html`);
  return html.replace(pattern, replacement);
}

function renderHead(shell, meta) {
  const title = escapeAttr(meta.title);
  const desc = escapeAttr(meta.description);
  const url = absoluteUrl(meta.path);
  const image = SITE_ORIGIN + publicUrl(meta.image ?? DEFAULT_META.image);

  let html = shell;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, "<title>");
  html = setTag(html, /<meta name="description" content="[^"]*"/, `<meta name="description" content="${desc}"`, "description");
  html = setTag(html, /<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`, "canonical");
  html = setTag(html, /<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`, "og:title");
  html = setTag(html, /<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${desc}"`, "og:description");
  html = setTag(html, /<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`, "og:url");
  html = setTag(html, /<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${image}"`, "og:image");
  html = setTag(html, /<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${title}"`, "twitter:title");
  html = setTag(html, /<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${desc}"`, "twitter:description");
  html = setTag(html, /<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${image}"`, "twitter:image");
  return html;
}

const shell = await readFile(join(dist, "index.html"), "utf8");
let count = 0;

for (const meta of ROUTE_META) {
  const html = renderHead(shell, meta);
  const out = meta.path === "/" ? join(dist, "index.html") : join(dist, meta.path, "index.html");
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html);
  count += 1;
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTE_META.map(
  (m) => `  <url><loc>${absoluteUrl(m.path)}</loc><lastmod>${today}</lastmod><priority>${m.priority ?? "0.5"}</priority></url>`
).join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);

// Note: on a GitHub Pages *project* site, crawlers read robots.txt from the
// domain root, not this subpath — this file takes effect if the site moves to
// its own domain. The sitemap can be submitted in Search Console meanwhile.
await writeFile(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/")}sitemap.xml\n`);

console.log(`generate-route-html: wrote ${count} route pages, sitemap.xml and robots.txt`);
