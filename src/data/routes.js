// App-side route metadata (see seo.js for how it's built).

import { buildRouteMeta } from "./seo.js";
import { ROLES } from "./roles.js";
import { PROJECTS } from "./projects.js";

export { DEFAULT_META } from "./seo.js";

export const ROUTE_META = buildRouteMeta(ROLES, PROJECTS);

export function metaFor(path) {
  return ROUTE_META.find((m) => m.path === path) ?? null;
}
