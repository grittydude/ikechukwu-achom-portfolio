// Source of truth: "Ikechukwu Achom Resume.pdf" (public/cv/) plus details the
// owner supplied directly. Anything not in one of those two sources does not
// belong here — see CONTENT-TODO.md for items awaiting confirmation.

export const PERSONAL = {
  name: "Ikechukwu Achom",
  firstName: "Ikechukwu",
  lastName: "Achom",
  initials: "IA",

  // Central positioning — one identity that connects engineering, product
  // and leadership, with role-specific headlines living in data/roles.js.
  identity: "Product Builder",
  headline: "Mobile engineer and product builder",
  intro:
    "I build mobile products end to end — from the Figma file to the Play Store listing — and lead the teams and training programs that ship them. Flutter, Kotlin and React Native across fintech, logistics and enterprise work.",

  // Current positions at KodeHauz (confirmed by the owner, 2026-10-17).
  currentRole: "Senior Technical Lead & Operations Manager",
  alsoRole: "Lead Mobile Developer",
  currentCompany: "KodeHauz Solutions Planet",
  location: "Nigeria",

  // Cut-out portrait (transparent WebP) for the hero and About section.
  // Set to null to fall back to the initials monogram. A higher-resolution
  // version (~900px tall) would look sharper on retina screens.
  photo: "images/ikechukwu-achom.webp",

  // Contact. Confirmed by the owner as the address recruiters should use.
  email: "ikechukwu.a.achom@gmail.com",
  phone: "+234 810 950 7906",
  whatsapp: "+234 810 950 7906",
  whatsappHref: "https://wa.me/2348109507906",

  linkedin: "https://www.linkedin.com/in/ikechukwuachom/",
  linkedinHandle: "in/ikechukwuachom",
  github: "https://github.com/Ikey22",
  githubHandle: "github.com/Ikey22",
  // Second account that holds the more recent client and web repos.
  githubAlt: "https://github.com/grittydude",

  // Verified numbers only — every figure below appears in the CV.
  stats: [
    { num: "700+", label: "KodeCamp trainees graduated", source: "cv" },
    { num: "4,000+", label: "Tech community members", source: "cv" },
    { num: "4", label: "Bootcamps delivered", source: "cv" },
    { num: "2019", label: "Leading mobile at KodeHauz since", source: "cv" },
  ],
};

export const SOCIAL_LINKS = [
  { id: "linkedin", label: "LinkedIn", href: PERSONAL.linkedin },
  { id: "github", label: "GitHub", href: PERSONAL.github },
  { id: "email", label: "Email", href: `mailto:${PERSONAL.email}` },
  { id: "whatsapp", label: "WhatsApp", href: PERSONAL.whatsappHref },
];
