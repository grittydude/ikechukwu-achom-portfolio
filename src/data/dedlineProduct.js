// Real facts (description, tech stack, features, links) come straight from
// the existing src/data/projects.js entry — nothing about what Dedline does
// is invented here, only extended into landing-page copy.

export const DEDLINE = {
  pillar: "Execution",
  status: "In Development",
  platform: "Mobile App",
  headline: "Stop Letting Deadlines",
  headlineHighlight: "Become Emergencies.",
  subheadline:
    "A cross-platform mobile app, built with Flutter, that helps you track important deadlines, subscriptions, and renewal dates — with smart reminders and a clean task management workflow, before any of them turn into a crisis.",
  demoUrl: "https://appetize.io/app/b_rx6upyfwsb6v7fyrwzulwjfb4i",
  githubUrl: "https://github.com/theteemofficial/dedline",
  tech: ["Flutter", "Supabase", "Riverpod", "Freezed", "Clean Architecture"],

  problem:
    "Most reminder apps treat every deadline the same. They're built for to-do items, not for the specific pain of a renewal date buried in an email eight months ago, or a client deadline that quietly becomes urgent because nothing surfaced it in time.",
  solution:
    "Dedline is built specifically around deadlines, subscriptions, and renewals — the category of commitment that's easy to forget precisely because it doesn't repeat daily. Smart reminders surface them before they're urgent, in a dashboard built to stay out of your way otherwise.",

  steps: [
    { title: "Add", body: "Add a deadline, subscription, or renewal date." },
    { title: "Set", body: "Set a smart reminder — with enough lead time to actually matter." },
    { title: "Act", body: "Get notified with enough runway to act, not react." },
  ],

  features: [
    { title: "Subscription & Renewal Tracking", body: "Keep every recurring commitment in one place instead of scattered across emails." },
    { title: "Smart Reminders", body: "Notifications timed to when you can actually still do something about it." },
    { title: "Clean Productivity Dashboard", body: "A workflow built to stay out of your way until you need it." },
  ],

  useCases: [
    "Freelancers juggling multiple client deadlines",
    "Households tracking a growing list of subscriptions",
    "Anyone whose admin is renewal-heavy — insurance, domains, licenses, memberships",
  ],

  philosophy:
    "A deadline kept is its own form of excellence — quiet, unglamorous, and easy to skip. Dedline exists to make keeping it the default, not the exception. This is the Execution pillar of the same discipline Fans of Excellence and Grit365 are about — the only difference is the medium.",

  crossLink: {
    to: "/books",
    label: "Explore the Books",
    body: "Dedline helps you keep the promises you make to yourself. Fans of Excellence and Grit365 are about deciding which promises are worth keeping in the first place.",
  },
};
