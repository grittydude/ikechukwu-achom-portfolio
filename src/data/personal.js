// Name, positioning, contact details and headline stats —
// content/personal.json (editable in /admin).

import data from "../../content/personal.json";

export const PERSONAL = { ...data, stats: data.stats ?? [], photo: data.photo || null };

export const SOCIAL_LINKS = [
  { id: "linkedin", label: "LinkedIn", href: PERSONAL.linkedin },
  { id: "github", label: "GitHub", href: PERSONAL.github },
  { id: "email", label: "Email", href: `mailto:${PERSONAL.email}` },
  { id: "whatsapp", label: "WhatsApp", href: PERSONAL.whatsappHref },
].filter((l) => l.href && l.href !== "mailto:undefined");
