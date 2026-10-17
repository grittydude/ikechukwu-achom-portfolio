// Career-path portfolios. Each entry drives one standalone page through
// pages/RolePage.jsx and its static share metadata (scripts/generate-route-html.mjs).
// `evidence` on a capability names the project slugs or CV roles that back
// it up — a capability with no evidence doesn't belong on the page.

export const ROLES = [
  {
    id: "mobile",
    path: "/mobile-engineer",
    label: "Mobile Engineering",
    short: "Mobile",
    eyebrow: "Mobile Engineering Portfolio",
    title: "Mobile engineer who ships",
    highlight: "Flutter, Kotlin & React Native",
    intro:
      "I've led mobile delivery at KodeHauz since 2019 and built apps for banking, logistics, services and media clients. I care about structure — clean architecture, clear state, testable layers — because it's what lets a small team keep shipping after version one.",
    glance: [
      { label: "Current", value: "Lead Mobile Developer, KodeHauz" },
      { label: "Platforms", value: "Android, Flutter, React Native" },
      { label: "Domains", value: "Banking, logistics, services, media" },
      { label: "Since", value: "2019" },
    ],
    capabilities: [
      {
        title: "Flutter & Dart",
        body: "Feature-first Flutter apps with Riverpod, go_router and Freezed. Dedline, VanBoss and MSF are Flutter builds; Blood Donation was rebuilt in Flutter from Kotlin.",
        evidence: ["dedline", "vanboss", "msf", "blood-donation-app"],
      },
      {
        title: "Native Android & React Native",
        body: "Kotlin and Java on Android — including migrating a Java app to Kotlin — and React Native for enterprise banking clients.",
        evidence: ["catholic-hymns-liturgy", "multi-tenant-banking", "craftzone"],
      },
      {
        title: "Architecture & state",
        body: "Clean architecture and MVVM, separate data, domain and presentation layers, and dependency injection. On the banking platform: tenant architecture for multiple institutions.",
        evidence: ["dedline", "multi-tenant-banking"],
      },
      {
        title: "Backends, auth & data",
        body: "Firebase and Supabase for auth, storage and data, REST/Retrofit integrations, row-level security, and server-side functions that keep keys off the device.",
        evidence: ["dedline", "go-taxi", "blood-donation-app"],
      },
      {
        title: "Shipping & maintenance",
        body: "Play Store releases, post-launch analytics, deployment-bug fixes and iteration on user feedback — with TDD where it makes sense.",
        evidence: ["mentors-tower", "craftzone", "multi-tenant-banking"],
      },
    ],
    marquee: ["Flutter", "Kotlin", "React Native", "Clean Architecture", "Riverpod", "Firebase", "Supabase"],
    meta: {
      title: "Ikechukwu Achom — Mobile Engineer (Flutter, Kotlin, React Native)",
      description:
        "Mobile engineering portfolio: Flutter, Kotlin and React Native apps across banking, logistics and services, led from KodeHauz since 2019.",
    },
  },
  {
    id: "web",
    path: "/web-developer",
    label: "Web Development",
    short: "Web",
    eyebrow: "Web Development Portfolio",
    title: "Frontend work",
    highlight: "alongside mobile",
    intro:
      "Most of my engineering is mobile, but I also build and ship React sites for clients. The same habits carry over: components with clear jobs, content kept apart from layout, and pages that work on a phone first.",
    glance: [
      { label: "Stack", value: "React, Vite, JavaScript, HTML/CSS" },
      { label: "Live sites", value: "hotreket.com, bezimeniresources.com" },
      { label: "Also", value: "React Native (banking, 2025)" },
      { label: "Training", value: "Complete Web Development Bootcamp, 2022" },
    ],
    capabilities: [
      {
        title: "React applications",
        body: "Multi-page React + Vite sites with React Router — King of Glory Healthcare, Bezimeni Resources, and this portfolio.",
        evidence: ["king-of-glory-healthcare", "bezimeni-resources", "portfolio-site"],
      },
      {
        title: "Responsive, accessible UI",
        body: "Mobile-first layouts, semantic HTML, keyboard-reachable navigation and visible focus states — this site is the public example.",
        evidence: ["portfolio-site"],
      },
      {
        title: "Components & content models",
        body: "Data-driven pages where content lives in plain modules, so one template serves several pages without duplicated components.",
        evidence: ["portfolio-site"],
      },
      {
        title: "Delivery",
        body: "Client sites shipped on their own domains, plus CI/CD and automation tooling from DevOps work at KASI Clouds.",
        evidence: ["house-on-the-rock-eket", "bezimeni-resources"],
      },
    ],
    marquee: ["React", "Vite", "JavaScript", "Responsive UI", "Accessibility", "React Native"],
    meta: {
      title: "Ikechukwu Achom — Web Developer (React, Vite)",
      description:
        "Web development portfolio: React and Vite sites shipped for clients, plus React Native work for enterprise banking.",
    },
  },
  {
    id: "design",
    path: "/product-design",
    label: "Product Design",
    short: "Design",
    eyebrow: "Product Design Portfolio",
    title: "Product design",
    highlight: "from an engineer's seat",
    intro:
      "I design the products I build, and I have taught UX design. My design work is practical: turn a requirement into a flow, a flow into a Figma file, and the Figma file into a screen that behaves the way it was drawn — because I'm usually the one implementing it.",
    glance: [
      { label: "Tools", value: "Figma, Adobe XD" },
      { label: "Taught", value: "UX design at KodeHauz" },
      { label: "Strength", value: "Design-to-build handoff" },
      { label: "Certified", value: "Product Management, 2022" },
    ],
    capabilities: [
      {
        title: "Interface design",
        body: "Designed the Blood Donation app in Figma before building it; revamped the Craftzone interface and implemented the Catholic Hymns & Liturgy redesign.",
        evidence: ["blood-donation-app", "craftzone", "catholic-hymns-liturgy"],
      },
      {
        title: "Wireframes to working UI",
        body: "Turned designers' wireframes and mockups into interactive, responsive Flutter components, with custom widgets, animations and gestures.",
        evidence: ["msf", "vanboss", "radio-basar"],
      },
      {
        title: "Product thinking",
        body: "Scoping what a first release should and shouldn't do — Dedline's V1 is Android-only and single-user on purpose — and translating business requirements into features.",
        evidence: ["dedline"],
      },
      {
        title: "Teaching UX",
        body: "Trained KodeCamp students in UX design and mentored their final projects.",
        evidence: ["kodecamp"],
      },
    ],
    marquee: ["Figma", "User Flows", "Wireframes", "UI Design", "Prototyping", "Design Handoff"],
    meta: {
      title: "Ikechukwu Achom — Product Designer",
      description:
        "Product design portfolio: Figma interface design, redesigns, and design-to-build handoff from a designer who also ships the code.",
    },
  },
  {
    id: "leadership",
    path: "/product-leadership",
    label: "Product & Technical Leadership",
    short: "Leadership",
    eyebrow: "Product & Leadership Portfolio",
    title: "Leading teams",
    highlight: "and programs that ship",
    intro:
      "I lead mobile delivery at KodeHauz and run KodeCamp, its training program — four bootcamps, 700+ graduates, and a 4,000+ member community. I'm most useful where product decisions, engineering trade-offs and people all have to line up.",
    glance: [
      { label: "Current", value: "Senior Tech Lead & Operations Manager" },
      { label: "Program", value: "KodeCamp — 700+ graduates" },
      { label: "Community", value: "4,000+ members" },
      { label: "Tools", value: "Jira, Trello, Linear" },
    ],
    capabilities: [
      {
        title: "Program management",
        body: "Led the team that ran four KodeCamp bootcamps and the platform that graduated 700+ trainees; built and manage a 4,000+ member learning community.",
        evidence: ["kodecamp"],
      },
      {
        title: "Technical leadership",
        body: "Lead the KodeHauz mobile team; led product teams of designers, developers and product managers on Craftzone, Go and Mentors Tower.",
        evidence: ["craftzone", "go-taxi", "mentors-tower"],
      },
      {
        title: "Scoping & prioritisation",
        body: "Turning client requirements into releasable software, and deciding what's in and out of a first version — Dedline's V1 scope is the written example.",
        evidence: ["dedline", "multi-tenant-banking"],
      },
      {
        title: "Team building & training",
        body: "Led training for a DevOps team at KASI Clouds and planned its structure; scaled KodeHauz's training arm as Training Lead.",
        evidence: ["kodecamp"],
      },
    ],
    marquee: ["Program Management", "Technical Leadership", "Delivery", "Mentoring", "Roadmaps", "Community"],
    meta: {
      title: "Ikechukwu Achom — Product & Technical Leadership",
      description:
        "Leadership portfolio: Senior Technical Lead & Operations Manager at KodeHauz and Program Manager of KodeCamp — 4 bootcamps, 700+ graduates, a 4,000+ member community.",
    },
  },
];

export const getRole = (id) => ROLES.find((r) => r.id === id);
