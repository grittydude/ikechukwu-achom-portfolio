// Generates public/admin/config.json — the Sveltia CMS configuration for the
// admin page at /admin. Runs before `vite build` (see package.json) so the
// role pickers always match content/roles.json.
//
// Field names here must cover every key in content/*.json: the CMS only
// writes back fields it knows about. `npm run check:cms` verifies that.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { roles } = JSON.parse(await readFile(join(root, "content/roles.json"), "utf8"));
const roleOptions = roles.map((r) => ({ label: r.label, value: r.id }));

// ── field helpers ───────────────────────────────────────────────────────────
const str = (name, label, extra = {}) => ({ name, label, widget: "string", ...extra });
const txt = (name, label, extra = {}) => ({ name, label, widget: "text", ...extra });
const opt = (field) => ({ ...field, required: false });
const strList = (name, label, extra = {}) => ({ name, label, widget: "list", required: false, ...extra });
const roleSelect = (name = "roles", label = "Show on these portfolios") => ({
  name,
  label,
  widget: "select",
  multiple: true,
  required: false,
  options: roleOptions,
});

// ── projects ────────────────────────────────────────────────────────────────
const projectFields = [
  {
    name: "order",
    label: "Order",
    widget: "number",
    value_type: "int",
    default: 500,
    hint: "Lower numbers come first on the site (10, 20, 30…).",
  },
  str("title", "Title"),
  str("tagline", "Tagline", { hint: "Short descriptor shown in italics, e.g. “Subscription & renewal tracker”." }),
  {
    name: "kind",
    label: "Type",
    widget: "select",
    options: [
      { label: "Personal product", value: "personal" },
      { label: "Client project", value: "client" },
      { label: "Company project", value: "employer" },
      { label: "Program", value: "program" },
    ],
  },
  opt(str("platform", "Platform", { hint: "e.g. Android (Flutter), Web" })),
  opt(str("status", "Status", { hint: "e.g. Live, In development, Client project" })),
  roleSelect(),
  { name: "featured", label: "Feature on the homepage", widget: "boolean", default: false, required: false },
  {
    name: "confidential",
    label: "Confidential (NDA / company-owned)",
    widget: "boolean",
    default: false,
    required: false,
    hint: "Shows a confidentiality notice and never shows a screenshot gallery.",
  },
  txt("summary", "Summary", { hint: "One or two sentences for cards and link previews." }),
  opt(str("myRole", "My role")),
  strList("stack", "Stack / tools"),
  {
    name: "links",
    label: "Links",
    widget: "object",
    required: false,
    collapsed: true,
    fields: [
      opt(str("live", "Live site URL")),
      opt(str("demo", "Demo URL")),
      opt(str("store", "App store URL")),
      opt(str("code", "Source code URL", { hint: "Only shown when “Show source code links” is on in Site settings." })),
    ],
  },
  {
    name: "highlight",
    label: "Headline stat (replaces the device illustration)",
    widget: "object",
    required: false,
    collapsed: true,
    fields: [opt(str("value", "Value", { hint: "e.g. 10,000+" })), opt(str("label", "Label", { hint: "e.g. participants · 7 bootcamps" }))],
  },
  {
    name: "screenshot",
    label: "Cover image",
    widget: "object",
    required: false,
    collapsed: true,
    hint: "Used on project cards and at the top of the case study.",
    fields: [opt({ name: "src", label: "Image", widget: "image" }), opt(str("alt", "Alt text (describe the image)"))],
  },
  {
    name: "screens",
    label: "Screens gallery",
    widget: "list",
    required: false,
    summary: "{{fields.caption}}",
    fields: [
      { name: "src", label: "Image", widget: "image" },
      str("alt", "Alt text (describe the image)"),
      opt(str("caption", "Caption")),
    ],
  },
  strList("screenSlots", "Screens still to capture", {
    hint: "Placeholders shown only in local development, as a to-do list.",
  }),
  {
    name: "caseStudy",
    label: "Case study",
    widget: "object",
    hint: "Leave any section empty and it simply won't appear on the site.",
    fields: [
      opt(txt("overview", "Overview")),
      opt(txt("problem", "The problem")),
      strList("contribution", "My role & contribution (what I personally did)"),
      opt(txt("team", "Team context")),
      strList("constraints", "Constraints"),
      opt(txt("approach", "Approach")),
      {
        name: "decisions",
        label: "Key decisions & trade-offs",
        widget: "list",
        required: false,
        summary: "{{fields.title}}",
        fields: [str("title", "Decision"), txt("body", "Why")],
      },
      strList("outcomes", "Outcomes (real results only)"),
      opt(txt("lessons", "Lessons learned")),
    ],
  },
];

// ── site files ──────────────────────────────────────────────────────────────
const personalFields = [
  str("name", "Full name"),
  str("firstName", "First name"),
  str("lastName", "Last name"),
  str("initials", "Initials"),
  str("identity", "Identity", { hint: "Short positioning label, e.g. Product Builder." }),
  str("headline", "Headline", { hint: "Shown under your name, split on “ and ”." }),
  txt("intro", "Intro paragraph"),
  str("currentRole", "Current role"),
  opt(str("alsoRole", "Second current role")),
  str("currentCompany", "Current company"),
  opt(str("location", "Location")),
  opt({
    name: "photo",
    label: "Portrait (transparent cut-out)",
    widget: "image",
    media_folder: "/public/images",
    public_folder: "/images",
  }),
  str("email", "Email"),
  opt(str("phone", "Phone")),
  opt(str("whatsapp", "WhatsApp number (display)")),
  opt(str("whatsappHref", "WhatsApp link", { hint: "https://wa.me/234…" })),
  str("linkedin", "LinkedIn URL"),
  opt(str("linkedinHandle", "LinkedIn handle")),
  str("github", "GitHub URL"),
  opt(str("githubHandle", "GitHub handle")),
  opt(str("githubLegacy", "Older GitHub URL")),
  {
    name: "stats",
    label: "Headline stats",
    widget: "list",
    required: false,
    summary: "{{fields.num}} {{fields.label}}",
    hint: "Verified numbers only. The first three show on the About section.",
    fields: [str("num", "Number"), str("label", "Label"), opt(str("source", "Source", { hint: "cv or owner" }))],
  },
];

const roleFields = [
  {
    name: "roles",
    label: "Portfolios",
    widget: "list",
    summary: "{{fields.label}} ({{fields.path}})",
    hint: "Each entry is its own page. Changing an id or path breaks links you've already shared.",
    fields: [
      str("id", "Id", { hint: "Short key used by projects and experience, e.g. mobile." }),
      str("path", "URL path", { hint: "Starts with /, e.g. /mobile-engineer" }),
      str("label", "Name"),
      str("short", "Short name"),
      str("eyebrow", "Eyebrow"),
      str("title", "Title"),
      str("highlight", "Highlighted title text"),
      txt("intro", "Intro"),
      {
        name: "glance",
        label: "At a glance",
        widget: "list",
        required: false,
        summary: "{{fields.label}}: {{fields.value}}",
        fields: [str("label", "Label"), str("value", "Value")],
      },
      {
        name: "capabilities",
        label: "Capabilities",
        widget: "list",
        required: false,
        summary: "{{fields.title}}",
        fields: [
          str("title", "Capability"),
          txt("body", "Description"),
          {
            name: "evidence",
            label: "Evidence (projects)",
            widget: "relation",
            collection: "projects",
            value_field: "{{slug}}",
            search_fields: ["title"],
            display_fields: ["title"],
            multiple: true,
            required: false,
          },
        ],
      },
      strList("marquee", "Marquee words"),
      {
        name: "meta",
        label: "Link preview / SEO",
        widget: "object",
        collapsed: true,
        fields: [str("title", "Page title"), txt("description", "Description")],
      },
    ],
  },
];

const experienceFields = [
  {
    name: "items",
    label: "Experience",
    widget: "list",
    summary: "{{fields.period}} · {{fields.role}} — {{fields.company}}",
    fields: [
      str("id", "Id", { hint: "Unique short key, e.g. kodehauz-lead." }),
      str("period", "Period", { hint: "e.g. 2021 — Present" }),
      str("role", "Role"),
      str("company", "Company"),
      roleSelect(),
      txt("summary", "Summary"),
      strList("highlights", "Highlights"),
      strList("tags", "Tags"),
    ],
  },
];

const credentialFields = [
  {
    name: "education",
    label: "Education",
    widget: "list",
    summary: "{{fields.qualification}}, {{fields.school}}",
    fields: [str("id", "Id"), str("school", "School"), str("qualification", "Qualification"), str("year", "Year")],
  },
  {
    name: "certifications",
    label: "Certifications",
    widget: "list",
    summary: "{{fields.title}} ({{fields.year}})",
    fields: [str("id", "Id"), str("title", "Title"), str("issuer", "Issuer"), str("year", "Year"), roleSelect()],
  },
];

const toolkitFields = [
  {
    name: "groups",
    label: "Tool groups",
    widget: "list",
    summary: "{{fields.title}}",
    fields: [
      str("id", "Id"),
      str("title", "Title"),
      roleSelect(),
      {
        name: "items",
        label: "Tools",
        widget: "list",
        summary: "{{fields.name}}",
        fields: [str("name", "Name"), str("mark", "Badge letters", { hint: "1–3 characters, e.g. Fl" })],
      },
    ],
  },
  strList("disciplines", "Marquee band words (homepage & About)"),
];

const settingsFields = [
  {
    name: "showSourceLinks",
    label: "Show “Source code” links on projects",
    widget: "boolean",
    default: false,
    required: false,
  },
];

const file = (name, label, path, fields) => ({ name, label, file: path, format: "json", fields });

const config = {
  backend: {
    name: "github",
    repo: "grittydude/ikechukwu-achom-portfolio",
    branch: "main",
    commit_messages: {
      create: "Create {{collection}} “{{slug}}” (via admin)",
      update: "Update {{collection}} “{{slug}}” (via admin)",
      delete: "Delete {{collection}} “{{slug}}” (via admin)",
      uploadMedia: "Upload “{{path}}” (via admin)",
      deleteMedia: "Delete “{{path}}” (via admin)",
    },
  },
  site_url: "https://grittydude.github.io/ikechukwu-achom-portfolio/",
  display_url: "https://grittydude.github.io/ikechukwu-achom-portfolio/",
  media_folder: "public/uploads",
  public_folder: "/uploads",
  collections: [
    {
      name: "projects",
      label: "Projects",
      label_singular: "Project",
      description: "Each project gets a card and a case-study page at /projects/<file name>.",
      folder: "content/projects",
      extension: "json",
      format: "json",
      create: true,
      delete: true,
      identifier_field: "title",
      slug: "{{slug}}",
      summary: "{{title}} — {{tagline}}",
      sortable_fields: ["order", "title"],
      media_folder: "/public/projects",
      public_folder: "/projects",
      fields: projectFields,
    },
    {
      name: "site",
      label: "Site content",
      files: [
        file("personal", "Profile & contact", "content/personal.json", personalFields),
        file("roles", "Portfolios (role pages)", "content/roles.json", roleFields),
        file("experience", "Experience", "content/experience.json", experienceFields),
        file("credentials", "Education & certifications", "content/credentials.json", credentialFields),
        file("toolkit", "Toolkit", "content/toolkit.json", toolkitFields),
        file("settings", "Site settings", "content/settings.json", settingsFields),
      ],
    },
  ],
};

const out = join(root, "public/admin/config.json");
await mkdir(dirname(out), { recursive: true });
await writeFile(out, JSON.stringify(config, null, 2) + "\n");
console.log("build-cms-config: wrote public/admin/config.json");
