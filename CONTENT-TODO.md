# Content to confirm or supply before launch

Everything on the site comes from the CV (`public/cv/Ikechukwu-Achom-CV.pdf`), project source code, public repos, or copy from the previous version of the site. Nothing was invented to fill gaps. The items below are either missing or need your confirmation.

In `npm run dev`, every missing case-study field shows as a dashed orange "Missing content" box. Production builds hide those sections.

## Resolved (2026-10-17)

- **Email**: `ikechukwu.a.achom@gmail.com` everywhere on the site. (The source CV still lists `ikechukwuachom@gmail.com`; update it when you next edit the CV.)
- **Title**: Senior Technical Lead & Operations Manager, and Lead Mobile Developer, at KodeHauz.
- **References**: the public CV (`public/cv/`) now says "References available on request". Referee names and numbers were removed from the page, the accessibility tags and the bookmarks. Your original file in Downloads is unchanged.
- **Availability**: open to mobile and web development, product design, technical leadership and product management roles.
- **GitHub**: `github.com/grittydude` is the main profile everywhere.
- **Projects (2026-10-17)**: KodeCamp updated (7 bootcamps, 10,000+ participants, kode.camp); MSF renamed Saleslify; Go removed; RMS listed as a client project; iFusion listed as a confidential company project; project "Source code" links hidden (turn back on in /admin → Site content → Site settings).
- **Portrait**: added (`public/images/ikechukwu-achom.webp`) and used in the share image.

## Still worth a look

| # | Item | Where |
|---|------|-------|
| 1 | **CV numbers are out of date**: the site now says KodeCamp has run 7 bootcamps with 10,000+ participants; the CV still says 4 bootcamps and 700+ graduates. | your CV source file |
| 2 | **Working principles** on /about are opinion, not record. Make sure they sound like you. | `src/pages/About.jsx` |
| 3 | **CV title line** reads "Lead Mobile Developer, Senior Tech Lead". Consider adding "Operations Manager" there too. | your CV source file |

## Assets needed

- **Higher-resolution portrait** (optional): the supplied photo is 329×405px. A ~900px-tall cut-out would look sharper on retina screens. Replace `public/images/ikechukwu-achom.webp`.
- **Project screenshots.** Only House on the Rock, Eket has a real screenshot (captured from the live site). Everything else shows an abstract device frame. Add real screens to `public/projects/<slug>/` via /admin (Projects → Cover image / Screens gallery). Priority: Dedline, Blood Donation, Craftzone, King of Glory, Bezimeni.
- **Role-specific CVs (optional).** Add a file to `public/cv/` and map it in `CV_FILES` in `src/data/site.js`. Each role page picks it up automatically.

## Broken or changed links found on 2026-10-17

- `github.com/theteemofficial/dedline` returns 404 (private or removed). Removed from the site.
- Mentors Tower on Google Play (`app.app.mentorstower`) returns 404. Status changed to "Previously on Google Play".
- `kingofgloryhealthcare.com` does not resolve. The "Visit site" link was removed and the status changed to "Delivered". The repo link remains.
- `chota.app` does not resolve. No live link is shown.
- `bezimeniresources.com` is up but sits behind a bot check, so no screenshot was captured.

## Case-study gaps (by project)

Fill these in /admin (Projects → Case study) or in `content/projects/<slug>.json`. Use real numbers only.

- **Dedline**: outcomes (testers, release status), lessons learned. Confirm the "Product owner & Flutter engineer" role and whether anyone else contributed.
- **KodeCamp**: the problem it was set up to solve, constraints, approach (cohort format, curriculum, tools), key decisions, lessons. Team size if you want it shown.
- **Multi-tenant Banking & UINSta**: approach and decisions you can describe without breaching confidentiality (for example, how tenant configuration worked at a high level), and any outcomes you're allowed to share.
- **Craftzone**: the problem, decisions behind the UI revamp, outcomes. Is it still on Google Play? Add the link if so.
- **King of Glory Healthcare / Bezimeni / House on the Rock**: your exact role (design and build? build only?), the problem, approach and outcomes. Stack for House on the Rock.
- **Blood Donation, Mentors Tower, VanBoss, MSF, Radio Basar, Catholic Hymns, Go, IoTApp**: problem, decisions, outcomes and lessons for each, plus team size where you led one.
- **Chota, Legogi**: your role and the actual stack. The current stack for Chota comes from the old site and is unverified. Neither has a case study yet.
- **RMS, iFusion**: only a one-line description exists. Add platform, role, stack and status, or set them aside until there's more to show. Confirm iFusion can be shown publicly.
- **SoloRide**: the previous site listed SoloRide as a 2023–2024 Flutter role, but it isn't on the CV, so it was left out. Add it to the CV first if it should appear.

## Removed from the previous site (still in git history)

- `src/data/testimonials.js`: six named testimonials (for example "CTO, FinanceFlow Nigeria") that couldn't be verified. Add only real quotes, with permission.
- Previous experience entries that conflicted with the CV ("Senior Flutter Developer 2021–Present", Node.js/FastAPI tags, "Firebase Expert", "100% Remote Ready" stats).
- The 1.4-second forced loading screen (it delayed every first visit).

## Screenshots for case studies

Every project now has a case-study page with a **Screens** gallery. The easiest way is /admin → Projects → pick a project → **Cover image** and **Screens gallery** (uploads go to `public/projects/`). By hand, add files to `public/projects/<slug>/` and list them in `content/projects/<slug>.json`:

```js
screenshot: { src: "projects/dedline/cover.webp", alt: "Dedline subscription list" },   // card + page cover
screens: [{ src: "projects/dedline/add.webp", alt: "Adding a subscription", caption: "Add subscription" }],
```

In `npm run dev`, each case study shows dashed placeholder slots naming the screens worth capturing (`screenSlots` in `projects.js`). Production hides the gallery until real screens exist. Confidential projects (banking, iFusion) never show a gallery. WebP, about 1200px on the long side, keeps pages fast.
