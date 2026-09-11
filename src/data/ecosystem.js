// The three pillars of the ecosystem: Mindset → Discipline → Execution.
// Adding a fourth pillar/product later just means adding another entry here —
// Home's Ecosystem accordion and the cross-link footer both read from this list.

export const ECOSYSTEM = [
  {
    id: "fans-of-excellence",
    number: "01",
    pillar: "Mindset",
    pillarColor: "var(--pillar-mindset)",
    pillarSubtle: "var(--pillar-mindset-subtle)",
    type: "Book",
    title: "Fans of Excellence",
    tagline: "Stop Applauding Greatness. Start Becoming It.",
    description:
      "An invitation to everyone who refuses to settle for mediocrity — to become a fan, practitioner, and ambassador of excellence in whatever they do.",
    tags: ["Book", "Mindset", "Available Now"],
    route: "/books/fans-of-excellence",
    cta: "Explore the Book",
  },
  {
    id: "grit365",
    number: "02",
    pillar: "Discipline",
    pillarColor: "var(--pillar-discipline)",
    pillarSubtle: "var(--pillar-discipline-subtle)",
    type: "Book",
    title: "Grit365",
    tagline: "Excellence Isn't a Decision. It's 365 of Them.",
    description:
      "The daily practice that turns a mindset shift into a habit that survives a bad week — discipline and consistency, one day at a time.",
    tags: ["Book", "Discipline", "Coming Soon"],
    route: "/books/grit365",
    cta: "Learn More",
  },
  {
    id: "dedline",
    number: "03",
    pillar: "Execution",
    pillarColor: "var(--pillar-execution)",
    pillarSubtle: "var(--pillar-execution-subtle)",
    type: "Mobile App",
    title: "Dedline",
    tagline: "Stop Letting Deadlines Become Emergencies.",
    description:
      "A cross-platform mobile app (built with Flutter) that helps you track important deadlines, subscriptions, and renewal dates — with smart reminders and a clean task workflow.",
    tags: ["Mobile App", "Execution", "In Development"],
    route: "/dedline",
    cta: "See the App",
  },
];

export const BRAND_IDEA = {
  eyebrow: "The Idea Behind Everything",
  title: "Mindset. Discipline. Execution.",
  steps: [
    {
      label: "Mindset",
      color: "var(--pillar-mindset)",
      product: "Fans of Excellence",
      body: "The decision to stop admiring greatness from a distance and start becoming it.",
    },
    {
      label: "Discipline",
      color: "var(--pillar-discipline)",
      product: "Grit365",
      body: "The daily practice that makes the decision last longer than a good week.",
    },
    {
      label: "Execution",
      color: "var(--pillar-execution)",
      product: "Dedline",
      body: "The tool that turns intention into shipped, kept commitments.",
    },
  ],
};
