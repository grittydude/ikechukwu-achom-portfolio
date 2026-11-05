// Site switches — content/settings.json (editable in /admin).

import data from "../../content/settings.json";

/** Show project "Source code" links (repo URLs stay in the project data either way). */
export const SHOW_SOURCE_LINKS = Boolean(data.showSourceLinks);

/**
 * Publish the /projects/<slug> case-study pages. When off, cards don't link
 * anywhere, the pages aren't built, and old links redirect to /projects.
 * The case-study content stays in content/projects/ either way.
 */
export const SHOW_CASE_STUDIES = Boolean(data.showCaseStudies);
