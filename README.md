# Ikechukwu Achom — Portfolio

Recruiter-focused portfolio built with **React 19 + Vite + React Router + CSS Modules**, deployed to GitHub Pages at
`https://grittydude.github.io/ikechukwu-achom-portfolio/`.

One data layer drives a homepage, four standalone career-path pages, a project index and case studies. Before launch, see **[CONTENT-TODO.md](CONTENT-TODO.md)** for items to confirm or supply.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Identity, career-path picker, selected work, experience, toolkit |
| `/mobile-engineer` | Mobile engineering portfolio (shareable on its own) |
| `/web-developer` | Web development portfolio |
| `/product-design` | Product design portfolio |
| `/product-leadership` | Product & technical leadership portfolio |
| `/projects` | All projects; `?role=mobile` etc. filters and is shareable |
| `/projects/:slug` | Case study (only for projects with `caseStudy` data) |
| `/about` | Background, principles, full experience, education, certifications |
| `/books`, `/books/:slug`, `/dedline`, `/ideas` | Writing and product pages from the previous site, kept and linked from the footer |

Every page ends with the shared contact section (`#contact`), with a CV download, email, LinkedIn, GitHub and a Formspree form.

## Where content lives

```
src/data/
├── personal.js     # name, positioning, contact, verified stats, photo path
├── roles.js        # the four career paths: copy, capabilities + evidence, meta
├── projects.js     # projects + case-study fields (null = hidden in prod, flagged in dev)
├── experience.js   # employment history from the CV, tagged by role
├── credentials.js  # education + certifications
├── toolkit.js      # tools grouped by discipline (no proficiency percentages)
├── seo.js          # per-route titles/descriptions (used at runtime and build time)
└── site.js         # deploy origin/base path, CV file mapping
```

- **Add a project:** append to `PROJECTS` in `projects.js`. Give it `roles` so it shows on the right pages, and a `caseStudy` object if it deserves its own page. Put screenshots in `public/projects/<slug>/`.
- **Add a role-specific CV:** drop the PDF in `public/cv/` and add a key to `CV_FILES` in `site.js` (e.g. `mobile`).
- **Add your photo:** see `photo` in `personal.js`.
- **Design tokens:** `src/styles/tokens.css` (light canvas, ink black, orange `#f4511e`; `--accent-strong` `#c93a0c` for small text and buttons, so contrast passes AA).

## Scripts

```bash
npm install
npm run dev        # http://localhost:5173/ikechukwu-achom-portfolio/
npm run lint
npm run build      # vite build + scripts/generate-route-html.mjs
npm run preview    # serve dist/ at http://localhost:4173/ikechukwu-achom-portfolio/
npm run deploy     # build and publish dist/ to the gh-pages branch
```

`scripts/generate-route-html.mjs` runs after `vite build`. For every route in `src/data/seo.js` it writes `dist/<route>/index.html` with that route's title, description, canonical URL and Open Graph tags. That way LinkedIn and Slack previews are right without JavaScript, and direct visits get a 200 instead of the `404.html` redirect. It also writes `sitemap.xml` and `robots.txt`. Unknown deep links still fall back to the `404.html` → `index.html` SPA redirect.

## Moving to a custom domain

Update `SITE_ORIGIN`/`BASE_PATH` in `src/data/site.js`, `base` in `vite.config.js`, `basename` in `src/main.jsx`, the absolute URLs in `index.html`, and `pathSegmentsToKeep` in `public/404.html`. `robots.txt` only takes effect at a domain root.
