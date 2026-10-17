// Career-path portfolios — content/roles.json (editable in /admin). Each entry
// drives one standalone page through pages/RolePage.jsx. A capability's
// `evidence` lists project slugs that back it up.

import data from "../../content/roles.json";

export const ROLES = data.roles.map((r) => ({
  ...r,
  glance: r.glance ?? [],
  capabilities: (r.capabilities ?? []).map((c) => ({ ...c, evidence: c.evidence ?? [] })),
  marquee: r.marquee ?? [],
}));

export const getRole = (id) => ROLES.find((r) => r.id === id);
