// Employment history — content/experience.json (editable in /admin).
// `roles` controls which career-path pages show each entry.

import data from "../../content/experience.json";

export const EXPERIENCE = data.items.map((e) => ({
  ...e,
  roles: e.roles ?? [],
  highlights: e.highlights ?? [],
  tags: e.tags ?? [],
}));

export function experienceFor(roleId) {
  return roleId ? EXPERIENCE.filter((e) => e.roles.includes(roleId)) : EXPERIENCE;
}
