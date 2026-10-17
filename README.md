# Ikechukwu Achom — Portfolio

Recruiter-focused portfolio built with **React 19 + Vite + React Router + CSS Modules**, published on GitHub Pages at
`https://grittydude.github.io/ikechukwu-achom-portfolio/`.

All content lives in JSON files under `content/` and can be edited through the **admin page** at `/admin`. Every save is a git commit, and the site redeploys itself automatically. See **[CONTENT-TODO.md](CONTENT-TODO.md)** for content still to confirm or supply.

## Editing content in the admin (`/admin`)

Open **https://grittydude.github.io/ikechukwu-achom-portfolio/admin/**

### First-time sign-in (about 2 minutes)

The admin signs in with a GitHub **personal access token**, so there's no login server to run.

1. Signed in to GitHub as **grittydude**, open **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
2. Name it something like "Portfolio admin" and pick an expiry (for example, 1 year).
3. **Repository access:** choose *Only select repositories* → `grittydude/ikechukwu-achom-portfolio`.
4. **Permissions → Repository permissions → Contents: Read and write.** Nothing else is needed.
5. Generate it and copy the token. GitHub only shows it once.
6. On the admin page, click **Sign In Using Access Token** and paste it. The browser remembers it, so you only do this once per device.

Treat the token like a password: anyone holding it can edit the site. If it leaks, revoke it in the same GitHub settings page and create a new one.

### What you can edit

| Section | What's in it |
|---------|--------------|
| **Projects** | Add, edit, delete and reorder projects (lower *Order* comes first). Each has a card plus a case-study page with an overview, problem, contribution, constraints, approach, decisions, screens, outcomes and lessons. Empty sections are hidden on the live site. Upload a **Cover image** and **Screens gallery** images right in the form. |
| **Site content → Profile & contact** | Name, headline, intro, current roles, email, phone, LinkedIn/GitHub, headline stats, portrait. |
| **Site content → Portfolios** | The four role pages (`/mobile-engineer` etc.): intro, "at a glance", capabilities and which projects back them up, link-preview title and description. |
| **Site content → Experience / Education & certifications / Toolkit** | Work history, education, certifications, tool groups, marquee words. |
| **Site content → Site settings** | Switches such as "Show source code links". |

### What happens when you click Save

1. The admin commits the change to the `main` branch.
2. **GitHub Actions** (`.github/workflows/deploy.yml`) lints, checks the content, builds and publishes to `gh-pages`.
3. GitHub Pages serves the new version, usually **1–3 minutes** after saving. Follow progress in the repo's **Actions** tab. A red ✗ there means the build failed and the live site still shows the previous version.

A new project's URL comes from its title when first created (for example, "Acme App" becomes `/projects/acme-app`). Renaming the project later doesn't change its URL. Changing a role page's *URL path* or *Id* breaks links you've already shared.

### Editing locally instead

On the admin login screen, **Work with Local Repository** (Chrome or Edge) edits the files in your local checkout without GitHub. Run `npm run dev` to preview, then commit and push as usual.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Identity, career-path picker, selected work, experience, toolkit |
| `/mobile-engineer`, `/web-developer`, `/product-design`, `/product-leadership` | Standalone role portfolios (from `content/roles.json`) |
| `/projects` | All projects; `?role=mobile` etc. filters and is shareable |
| `/projects/:slug` | Case study (one per file in `content/projects/`) |
| `/about` | Background, principles, experience, education, certifications |
| `/books`, `/books/:slug`, `/dedline`, `/ideas` | Writing and product pages from the previous site |
| `/admin` | Content admin (Sveltia CMS); not indexed |

## Where things live

```
content/                      # ← all editable content (JSON; the admin edits these)
├── projects/<slug>.json      # one file per project; file name = URL slug
├── personal.json  roles.json  experience.json  credentials.json  toolkit.json  settings.json
src/data/                     # thin loaders that read content/ (+ normalize.js, seo.js, site.js)
public/admin/                 # admin page; config.json is generated — don't edit it by hand
scripts/
├── build-cms-config.mjs      # generates public/admin/config.json (edit fields here)
├── check-cms-config.mjs      # fails the build if content has keys the admin can't edit
└── generate-route-html.mjs   # per-route HTML with SEO/link-preview tags, sitemap, robots
.github/workflows/deploy.yml  # build + publish on every push to main
```

**Adding a new field to projects** (or any content): add it to the JSON, render it in the component, and add a matching field in `scripts/build-cms-config.mjs`. `npm run check:cms` (also run during the build) fails if a content key has no admin field. That matters because the admin only saves fields it knows about.

Site-level constants that aren't content (deploy URL/base path, CV file mapping) stay in `src/data/site.js`.

## Scripts

```bash
npm install
npm run dev         # http://localhost:5173/ikechukwu-achom-portfolio/  (admin at /admin/)
npm run lint
npm run check:cms   # regenerate the admin config and check it covers all content
npm run build       # cms config + check + vite build + per-route HTML
npm run preview     # serve dist/ at http://localhost:4173/ikechukwu-achom-portfolio/
npm run deploy      # manual publish to gh-pages (normally GitHub Actions does this)
```

## Moving to a custom domain

Update `SITE_ORIGIN`/`BASE_PATH` in `src/data/site.js`, `base` in `vite.config.js`, `basename` in `src/main.jsx`, the absolute URLs in `index.html`, `site_url` in `scripts/build-cms-config.mjs`, and `pathSegmentsToKeep` in `public/404.html`. `robots.txt` only takes effect at a domain root.
