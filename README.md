# Ikechukwu Achom — Flutter Developer Portfolio

A premium, production-ready portfolio built with **React + Vite + CSS Modules** following clean architecture and strict separation of concerns.

---

## Project Structure

```
src/
├── data/                     # Pure data layer (no JSX, no logic)
│   ├── personal.js           # Name, bio, stats, nav links, social URLs
│   ├── projects.js           # All project cards
│   ├── techStack.js          # Tech stack items
│   ├── experience.js         # Career timeline entries
│   └── testimonials.js       # Client testimonials
│
├── hooks/                    # Reusable stateful logic (no UI)
│   ├── useInView.js          # IntersectionObserver scroll-reveal
│   ├── useNavScroll.js       # Detects scroll-past-threshold for nav
│   ├── useScrollProgress.js  # 0-1 reading progress value
│   └── useCursorGlow.js      # Mouse position for ambient glow
│
├── utils/
│   └── helpers.js            # scrollToSection(), cn(), openLink()
│
├── styles/                   # Global styles only
│   ├── tokens.css            # CSS custom properties (design tokens)
│   ├── base.css              # Reset + body defaults
│   └── utilities.css         # Shared classes: .btn, .reveal, .section-inner
│
├── components/
│   ├── ui/                   # Primitive reusable atoms
│   │   ├── Icons.jsx
│   │   ├── Reveal.jsx
│   │   └── SectionHeader.jsx
│   ├── layout/               # Persistent chrome
│   │   ├── Navbar.jsx + .module.css
│   │   ├── Footer.jsx + .module.css
│   │   └── ScrollWidgets.jsx + .module.css
│   └── sections/             # One component per page section
│       ├── Loader, Hero, StatsBar, About, TechStack
│       ├── Projects, ProjectMockup, Experience
│       ├── Testimonials, Contact
│       └── (each has its own .module.css)
│
├── App.jsx                   # Composition root
└── main.jsx                  # React DOM entry
```

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview production build locally
```

---

## Customisation

- **Personal info** → `src/data/personal.js`
- **Projects** → `src/data/projects.js`
- **Tech stack** → `src/data/techStack.js`
- **Timeline** → `src/data/experience.js`
- **Testimonials** → `src/data/testimonials.js`
- **Colors/fonts** → `src/styles/tokens.css`
- **Resume** → place `resume.pdf` in `public/`, update href in `Hero.jsx`

### Connect the Contact Form (Formspree)
In `src/components/sections/Contact.jsx`, replace the mock timeout:
```js
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  body: new FormData(e.target),
  headers: { Accept: "application/json" },
});
setSent(res.ok);
```

---

## Deployment

### Netlify (drag & drop)
1. `npm run build`
2. Drag `dist/` onto app.netlify.com

### Vercel
```bash
npx vercel
```
Or connect your GitHub repo — Vite is auto-detected.

### GitHub Pages
```bash
npm i -D gh-pages
# Add to package.json scripts: "deploy": "npm run build && gh-pages -d dist"
npm run deploy
```

---

## Tech Stack

| | |
|---|---|
| Framework | React 19 + Vite |
| Styles | CSS Modules + CSS custom properties |
| Animations | CSS keyframes + IntersectionObserver (Framer Motion available) |
| Fonts | Syne (display) + DM Sans (body) via Google Fonts |
| No Tailwind | No component library | No CSS-in-JS |
