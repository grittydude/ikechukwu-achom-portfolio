// Tools and skills, grouped. Every item is either on the CV or visible in a
// project's own source (noted inline). No proficiency percentages — they
// can't be verified and recruiters discount them anyway.

export const TOOLKIT = [
  {
    id: "mobile",
    title: "Mobile",
    roles: ["mobile"],
    items: [
      { name: "Flutter", mark: "Fl" },
      { name: "Dart", mark: "Da" },
      { name: "Kotlin", mark: "Kt" },
      { name: "Java", mark: "Ja" },
      { name: "React Native", mark: "RN" },
      { name: "Swift", mark: "Sw" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & data",
    roles: ["mobile", "web"],
    items: [
      { name: "Clean Architecture", mark: "CA" },
      { name: "MVVM", mark: "MV" },
      { name: "Riverpod", mark: "Rp" }, // Dedline, Blood Donation (Flutter) source
      { name: "Dependency Injection", mark: "DI" },
      { name: "REST & Retrofit", mark: "RE" },
      { name: "Firebase", mark: "Fb" },
      { name: "Supabase", mark: "Sb" }, // Dedline source
      { name: "MongoDB", mark: "Mg" },
    ],
  },
  {
    id: "web",
    title: "Web",
    roles: ["web"],
    items: [
      { name: "JavaScript", mark: "JS" },
      { name: "React", mark: "Re" }, // King of Glory, Bezimeni, this site
      { name: "Vite", mark: "Vi" },
      { name: "HTML & CSS", mark: "</>" },
    ],
  },
  {
    id: "design",
    title: "Design",
    roles: ["design"],
    items: [
      { name: "Figma", mark: "Fi" },
      { name: "Adobe XD", mark: "Xd" },
      { name: "Wireframing", mark: "Wf" },
      { name: "UX research & flows", mark: "UX" },
    ],
  },
  {
    id: "delivery",
    title: "Delivery & leadership",
    roles: ["leadership"],
    items: [
      { name: "Jira", mark: "Ji" },
      { name: "Trello", mark: "Tr" },
      { name: "Linear", mark: "Li" },
      { name: "Git", mark: "Gt" },
      { name: "CI/CD pipelines", mark: "CI" },
      { name: "Testing", mark: "Te" },
    ],
  },
];

export function toolkitFor(roleId) {
  return roleId ? TOOLKIT.filter((g) => g.roles.includes(roleId)) : TOOLKIT;
}

// Short labels for the marquee bands.
export const DISCIPLINES = [
  "Mobile Engineering",
  "Product Design",
  "Program Management",
  "Web Development",
  "Technical Leadership",
];
