// Site switches — content/settings.json (editable in /admin).

import data from "../../content/settings.json";

/** Show project "Source code" links (repo URLs stay in the project data either way). */
export const SHOW_SOURCE_LINKS = Boolean(data.showSourceLinks);
