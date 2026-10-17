// Tools grouped by discipline, plus the words in the black marquee bands —
// content/toolkit.json (editable in /admin). No proficiency percentages.

import data from "../../content/toolkit.json";

export const TOOLKIT = data.groups.map((g) => ({ ...g, roles: g.roles ?? [], items: g.items ?? [] }));
export const DISCIPLINES = data.disciplines ?? [];

export function toolkitFor(roleId) {
  return roleId ? TOOLKIT.filter((g) => g.roles.includes(roleId)) : TOOLKIT;
}
