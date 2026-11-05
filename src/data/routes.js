// App-side route metadata (see seo.js for how it's built).

import { buildRouteMeta } from "./seo.js";
import { ROLES } from "./roles.js";
import { PROJECTS } from "./projects.js";
import { SHOW_CASE_STUDIES } from "./settings.js";

export { DEFAULT_META } from "./seo.js";

export const ROUTE_META = buildRouteMeta(ROLES, PROJECTS, { caseStudies: SHOW_CASE_STUDIES });

export function metaFor(path) {
  return ROUTE_META.find((m) => m.path === path) ?? null;
}
