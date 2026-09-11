import fansOfExcellenceCover from "../assets/fans-of-excellence-cover.jpg";

// Generic shape so BookDetail.jsx can render either book (or a future third
// book) without a new template. Leave a field undefined/null and its section
// renders a "coming soon" state instead of breaking.

export const BOOKS = {
  "fans-of-excellence": {
    slug: "fans-of-excellence",
    pillar: "Mindset",
    color: "var(--pillar-mindset)",
    colorGlow: "var(--pillar-mindset-glow)",
    colorSubtle: "var(--pillar-mindset-subtle)",
    title: "Fans Of Excellence",
    subtitle: "From Applauding Greatness to Becoming It",
    cover: fansOfExcellenceCover,
    headline: "Stop Applauding Greatness.",
    headlineHighlight: "Start Becoming It.",
    blurb:
      "This book is an invitation to everyone who refuses to settle for mediocrity — to become a fan, practitioner, and ambassador of excellence in whatever they do.",
    price: null, // TODO: real Nestuge listing price
    buyLabel: "Get Your Copy on Nestuge",
    buyHref: "https://nestuge.com",
    previewHref: null, // TODO: sample chapter link, if one exists

    problem:
      "Most people are fans of excellence. They save the quote, admire the interview, follow the account, feel briefly inspired — and then go back to exactly what they were doing before. Admiration has become a substitute for action, and it feels like progress because it feels like caring.",
    coreIdea:
      "Applauding excellence and practicing it are not the same skill, and one does not lead to the other automatically. The gap between “I admire this” and “I do this” has to be closed on purpose — this book exists to name that gap and start closing it.",
    transformation: {
      before: "A fan — someone who recognizes excellence in others and quietly wonders if they have it in them.",
      after: "A practitioner — someone whose own work is now evidence, not just their opinion.",
    },
    framework: {
      name: "The BUILD Framework",
      steps: [
        { letter: "B", title: "Begin Before Ready", body: "You don't wait for permission or perfect conditions to start." },
        { letter: "U", title: "Understand the Process", body: "Excellence is a process you can study, not a trait you either have or don't." },
        { letter: "I", title: "Install Rituals", body: "Daily systems replace unreliable motivation." },
        { letter: "L", title: "Live It Privately First", body: "The practice comes before the audience." },
        { letter: "D", title: "Deliver Regardless of Applause", body: "You ship the work whether or not anyone is watching." },
      ],
    },
    whatsInside: null, // TODO: real chapter/section list
    whoFor:
      "Anyone who's caught themselves admiring someone else's discipline, output, or standards — and suspects they're capable of more than spectating. Builders, creators, early-career professionals, and anyone rebuilding their relationship with their own ambition.",
    whyThisBook: null, // TODO: your real reason for writing it
    bonuses: null,
    reviews: [], // TODO: real reader reviews only — never fabricated
    faqs: [
      { q: "What format is the book in?", a: "Coming soon — format details will be confirmed here." },
      {
        q: "Do I need to read Grit365 first?",
        a: "No. Fans of Excellence is the mindset shift; Grit365 is the daily practice that follows it. Either can come first, but this order tends to make more sense.",
      },
      { q: "What if I don't like it?", a: "Coming soon — refund/guarantee policy will be confirmed here." },
    ],
    crossLink: {
      to: "/books/grit365",
      label: "Explore Grit365",
      body: "If Fans of Excellence is about deciding to become who you're capable of being, Grit365 is about doing it again tomorrow — for 365 days.",
    },
  },

  grit365: {
    slug: "grit365",
    pillar: "Discipline",
    color: "var(--pillar-discipline)",
    colorGlow: "var(--pillar-discipline-glow)",
    colorSubtle: "var(--pillar-discipline-subtle)",
    title: "Grit365",
    subtitle: "Coming soon",
    cover: null,
    headline: "Excellence Isn't a Decision.",
    headlineHighlight: "It's 365 of Them.",
    blurb:
      "The daily practice that turns a mindset shift into a habit that survives a bad week — discipline and consistency, one day at a time.",
    price: null,
    buyLabel: "Get Notified at Launch",
    buyHref: null,
    previewHref: null,

    problem:
      "Most people can start something. Very few can still be doing it on day 40, let alone day 365. Motivation is a bad long-term strategy, and most books about discipline describe the destination without building the daily infrastructure to get there.",
    coreIdea: null, // TODO: the book's real thesis
    transformation: {
      before: "Inspired but inconsistent — starts strong, fades by week two.",
      after: "Someone with a system that doesn't depend on how they feel that day.",
    },
    framework: null, // TODO: the book's real structure, if any
    whatsInside: null,
    whoFor: null,
    whyThisBook: null,
    bonuses: null,
    reviews: [],
    faqs: [],
    crossLink: {
      to: "/dedline",
      label: "Explore Dedline",
      body: "Discipline needs structure. Dedline is the tool that keeps your commitments — including this one — from slipping.",
    },
  },
};

export const BOOK_LIST = Object.values(BOOKS);
