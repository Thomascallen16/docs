import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const configPath = path.join(root, "docs.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const pages = config?.navigation?.pages ?? [];
const missing = [];

for (const group of pages) {
  for (const page of group.pages ?? []) {
    const candidates = [
      path.join(root, `${page}.mdx`),
      path.join(root, `${page}.md`),
    ];
    if (!candidates.some((candidate) => fs.existsSync(candidate))) {
      missing.push(page);
    }
  }
}

for (const asset of [config.favicon, config.logo?.light, config.logo?.dark]) {
  if (!asset) continue;
  const relative = asset.replace(/^\//, "");
  if (!fs.existsSync(path.join(root, relative))) missing.push(relative);
}

if (missing.length) {
  console.error(`Missing documentation assets/pages:\n- ${missing.join("\n- ")}`);
  process.exit(1);
}

console.log(`Validated ${pages.reduce((count, group) => count + (group.pages?.length ?? 0), 0)} documentation pages and configured local assets.`);
