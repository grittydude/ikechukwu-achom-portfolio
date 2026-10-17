// Employment history, transcribed from the CV. `roles` controls which
// career-path pages surface each entry (mobile | web | design | leadership).
// Bullets stay close to the CV wording on purpose — edit the CV first, then here.

export const EXPERIENCE = [
  {
    id: "innovanitics",
    period: "2025",
    role: "Mobile Developer (Android & React Native)",
    company: "Innovanitics",
    roles: ["mobile", "web"],
    summary:
      "Enterprise mobile delivery for banking clients, on Android and React Native.",
    highlights: [
      "Contributed to UINSta, UBA's mobile app — built features for customer account creation, onboarding and setup.",
      "Played a key role in a multi-tenant banking solution, designing and implementing the tenant architecture for multiple financial institutions.",
      "Built proof-of-concept apps tailored to individual banks to demonstrate the platform and speed up client adoption.",
      "Found and fixed deployment bugs to keep releases stable.",
    ],
    tags: ["Android", "React Native", "Multi-tenant architecture", "Banking"],
  },
  {
    id: "kodehauz-lead",
    period: "2019 — Present",
    role: "Senior Technical Lead & Operations Manager · Lead Mobile Developer",
    company: "KodeHauz Solutions Planet",
    roles: ["mobile", "leadership", "design"],
    summary:
      "Leads the mobile team building apps for the company and its clients.",
    highlights: [
      "Led the mobile development team building solutions for KodeHauz and its clients.",
      "Turned client requirements into working software, then tested and refined it before rollout.",
      "Client work includes Radio Basar, Craftzone, Catholic Hymns & Liturgy, Saleslify and VanBoss.",
    ],
    tags: ["Flutter", "Kotlin", "Team leadership", "Client delivery"],
  },
  {
    id: "kodehauz-pm",
    period: "2021 — Present",
    role: "Program Manager, KodeCamp",
    company: "KodeHauz Solutions Planet",
    roles: ["leadership"],
    summary:
      "Runs KodeCamp, KodeHauz's online tech training program.",
    highlights: [
      "Lead the team that runs KodeCamp — seven bootcamps and 10,000+ participants so far.",
      "Manage the training platform and the bootcamp operations behind it.",
      "Grew and manage a 4,000+ member online learning community.",
    ],
    tags: ["Program management", "Operations", "Community"],
  },
  {
    id: "kodehauz-training-lead",
    period: "2021 — 2022",
    role: "Training Lead",
    company: "KodeHauz Solutions Planet",
    roles: ["leadership"],
    summary: "Led the company's training arm.",
    highlights: [
      "Introduced training methods built to scale, growing both enrolment and training revenue.",
    ],
    tags: ["Curriculum", "Training operations"],
  },
  {
    id: "kodehauz-trainer",
    period: "2020 — 2023",
    role: "Trainer",
    company: "KodeHauz Solutions Planet",
    roles: ["mobile", "design", "leadership"],
    summary: "Taught mobile development, UX design and programming foundations.",
    highlights: [
      "Trained students in mobile app development, UX design, and programming foundations with Python.",
      "Mentored trainees through their final projects.",
    ],
    tags: ["Mentoring", "UX design", "Mobile development"],
  },
  {
    id: "kasi-clouds",
    period: "2023",
    role: "DevOps Engineer, Level 1",
    company: "KASI CLOUDS Ltd",
    roles: ["leadership", "web"],
    summary: "Led training and development for the DevOps team.",
    highlights: [
      "Led the DevOps team's training and development.",
      "Implemented development, testing and automation tooling and IT infrastructure.",
      "Planned the team's structure, activities and project-management involvement.",
    ],
    tags: ["DevOps", "CI/CD", "Team structure"],
  },
];

export function experienceFor(roleId) {
  return roleId ? EXPERIENCE.filter((e) => e.roles.includes(roleId)) : EXPERIENCE;
}
