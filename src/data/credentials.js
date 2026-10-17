// Education and certifications — content/credentials.json (editable in /admin).

import data from "../../content/credentials.json";

export const EDUCATION = data.education ?? [];
export const CERTIFICATIONS = (data.certifications ?? []).map((c) => ({ ...c, roles: c.roles ?? [] }));

export function certificationsFor(roleId) {
  return roleId ? CERTIFICATIONS.filter((c) => c.roles.includes(roleId)) : CERTIFICATIONS;
}
