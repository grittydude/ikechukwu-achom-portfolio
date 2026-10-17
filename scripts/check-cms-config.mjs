// Verifies that every key in content/*.json is covered by a field in
// public/admin/config.json. The CMS only writes back fields it knows about,
// so an uncovered key would be silently dropped the first time that entry is
// saved from the admin. Run: npm run check:cms

import { readFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = async (p) => JSON.parse(await readFile(join(root, p), "utf8"));
const config = await read("public/admin/config.json");
const problems = [];

function check(value, fields, where) {
  if (value === null || value === undefined) return;
  const byName = Object.fromEntries(fields.map((f) => [f.name, f]));
  for (const [key, v] of Object.entries(value)) {
    const f = byName[key];
    if (!f) { problems.push(`${where}.${key} has no CMS field`); continue; }
    if (f.widget === "object" && v && typeof v === "object") check(v, f.fields, `${where}.${key}`);
    if (f.widget === "list" && f.fields && Array.isArray(v)) v.forEach((item, i) => check(item, f.fields, `${where}.${key}[${i}]`));
    if (f.widget === "list" && !f.fields && Array.isArray(v) && v.some((x) => typeof x !== "string"))
      problems.push(`${where}.${key} should be a list of strings`);
  }
}

const projects = config.collections.find((c) => c.name === "projects");
for (const f of (await readdir(join(root, projects.folder))).filter((f) => f.endsWith(".json")))
  check(await read(`${projects.folder}/${f}`), projects.fields, f);

for (const file of config.collections.find((c) => c.name === "site").files)
  check(await read(file.file), file.fields, file.file);

if (problems.length) {
  console.error(`check-cms-config: ${problems.length} problem(s)\n  ` + problems.join("\n  "));
  process.exit(1);
}
console.log("check-cms-config: every content key is covered by the CMS config");
