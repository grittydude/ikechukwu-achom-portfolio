// export const PROJECTS = [
//   {
//     id: "fintech",
//     title: "Logistics Application",
//     description:
//       "A secure fintech mobile application focused on seamless transactions, wallet management, and real-time account operations built with clean architecture and optimised state management.",
//     status: "confidential",
//     statusLabel: "Private Client Build",
//     mockupTheme: "fintech",
//     tech: ["Flutter", "Firebase", "Riverpod", "REST API", "Clean Arch"],
//     features: [
//       "Wallet management & real-time transactions",
//       "Secure authentication & biometrics",
//       "Responsive UI with performance optimisation",
//     ],
//     githubUrl: null,
//     caseStudy: true,
//   },
//   {
//     id: "ecommerce",
//     title: "E-Commerce Platform",
//     description:
//       "A modern e-commerce application featuring product discovery, cart management, secure checkout flows, and order tracking with a smooth user experience and scalable architecture.",
//     status: "dev",
//     statusLabel: "In Development",
//     mockupTheme: "ecom",
//     tech: ["Flutter", "RiverPod", "Supabase", "Stripe", "REST API"],
//     features: [
//       "Product discovery with advanced filtering",
//       "Secure payment integration",
//       "Real-time order tracking",
//     ],
//     githubUrl: null,
//     caseStudy: true,
//   },
//   {
//     id: "healthcare",
//     title: "Healthcare Platform",
//     description:
//       "A healthcare solution designed to streamline patient interactions, appointment scheduling, and secure data handling. Prioritised usability, performance, and long-term scalability.",
//     status: "confidential",
//     statusLabel: "Private Client Build",
//     mockupTheme: "health",
//     tech: ["Flutter", "Firebase", "Riverpod", "HL7", "SQLite"],
//     features: [
//       "Patient onboarding & appointment scheduling",
//       "Secure data handling & HIPAA-aligned design",
//       "Offline-first architecture",
//     ],
//     githubUrl: null,
//     caseStudy: true,
//   },
//   {
//     id: "edtech",
//     title: "EdTech Application",
//     description:
//       "An interactive learning platform enabling students to access courses, track progress, and engage with educational content. Integrated cloud-based data management and responsive learning interfaces.",
//     status: "dev",
//     statusLabel: "In Development",
//     mockupTheme: "edtech",
//     tech: ["Flutter", "Firebase", "Bloc", "REST API"],
//     features: [
//       "Course management & progress tracking",
//       "Interactive quizzes & assessments",
//       "Offline content caching",
//     ],
//     githubUrl: "https://github.com/grittydude",
//     caseStudy: false,
//   },
//   {
//     id: "chat",
//     title: "Real-Time Chat App",
//     description:
//       "A real-time messaging platform with instant communication features, media sharing, and smooth UI interactions. Leveraged Firebase and reactive state management for real-time synchronisation.",
//     status: "live",
//     statusLabel: "Personal Project",
//     mockupTheme: "chat",
//     tech: ["Flutter", "Firebase", "Firestore", "FCM", "Riverpod"],
//     features: [
//       "Real-time messaging with read receipts",
//       "Media sharing & push notifications",
//       "End-to-end encryption design",
//     ],
//     githubUrl: "https://github.com/grittydude",
//     caseStudy: false,
//   },
//   {
//     id: "client",
//     title: "Private Client Application",
//     description:
//       "Designed and developed a private client mobile application currently in development. Worked closely with stakeholders to implement scalable features, intuitive user flows, and production-grade architecture.",
//     status: "confidential",
//     statusLabel: "NDA Protected",
//     mockupTheme: "client",
//     tech: ["Flutter", "Bloc", "REST API", "Firebase"],
//     features: [
//       "Custom feature implementation per client spec",
//       "Production-grade, scalable architecture",
//       "Full stakeholder collaboration",
//     ],
//     githubUrl: null,
//     caseStudy: true,
//   },
// ];

export const PROJECTS = [
  {
    id: "chota",
    title: "Chota",
    description:
      "A location-based web and mobile platform that helps users discover shops and businesses within a city. Built to improve local business visibility and community recommendations, with Eket serving as the initial case study and launch market.",
    status: "live",
    statusLabel: "Personal Project - In Development",
    mockupTheme: "business",
    tech: ["Flutter", "Firebase", "Google Maps API", "Riverpod", "REST API"],
    features: [
      "Discover nearby shops and local businesses",
      "Community-powered business recommendations",
      "Location-based search and listings",
    ],
    githubUrl: "https://github.com/grittydude",
    liveLink: "https://chota.app",
  },
  {
    id: "blood-donation",
    title: "Blood Donation App",
    description:
      "A mobile platform designed to connect blood donors with recipients and healthcare organisations. Focused on simplifying emergency blood requests, donor accessibility, and community health support.",
    status: "live",
    statusLabel: "Personal Project",
    mockupTheme: "health",
    tech: ["Flutter", "Firebase", "Riverpod", "Google Maps API"],
    features: [
      "Emergency blood request system",
      "Donor registration and availability tracking",
      "Location-based donor discovery",
    ],
    githubUrl: "https://github.com/grittydude",
    liveLink: "https://appetize.io/app/b_nxuludyeiq5wxym7gkoqaoc33y",
    caseStudy: true
  },
  {
    id: "dedline",
    title: "Dedline",
    description:
      "A productivity management application that helps users track important deadlines, subscriptions, and renewal dates. Designed with smart reminders and clean task management workflows.",
    status: "dev",
    statusLabel: "Personal Project",
    mockupTheme: "productivity",
    tech: ["Flutter", "Supabase", "Riverpod", "Freezed", "Clean Arch"],
    features: [
      "Subscription and renewal tracking",
      "Smart reminders and notifications",
      "Clean and intuitive productivity dashboard",
    ],
    githubUrl: "https://github.com/theteemofficial/dedline",
    liveLink: "https://appetize.io/app/b_rx6upyfwsb6v7fyrwzulwjfb4i",
    caseStudy: true
  },
  {
    id: "legogi",
    title: "Legogi",
    description:
      "A personal finance application that helps users track expenses, monitor spending habits, and manage financial activities through a clean and user-friendly interface.",
    status: "dev",
    statusLabel: "In Development",
    mockupTheme: "finance",
    tech: ["Flutter", "Firebase", "Riverpod", "Supbase", "Clean Architecture"],
    features: [
      "Expense and income tracking",
      "Financial insights and spending analysis",
      "Offline-first financial records management",
    ],
    githubUrl: "https://github.com/grittydude",
  },
  {
    id: "vanboss",
    title: "Vanboss",
    description:
      "A logistics and delivery mobile application built to simplify pickup and drop-off operations through seamless booking workflows, real-time tracking, and scalable business management features.",
    status: "confidential",
    statusLabel: "Client Project",
    mockupTheme: "logistics",
    tech: ["Flutter", "Firebase", "Google Maps API", "REST API", "Riverpod"],
    features: [
      "Pickup and drop-off request management",
      "Real-time location and delivery tracking",
      "Scalable logistics operations architecture",
    ],
    githubUrl: null,
  },
  {
    id: "soloride",
    title: "Soloride",
    description:
      "A client-based mobility platform focused on seamless transportation experiences, scalable booking systems, and real-time operational workflows.",
    status: "confidential",
    statusLabel: "Client Project",
    mockupTheme: "transport",
    tech: ["Flutter", "Firebase", "Google Maps API", "REST API"],
    features: [
      "Real-time ride and booking workflows",
      "Location and map integration",
      "Scalable and responsive architecture",
    ],
    githubUrl: null,    
  },
];