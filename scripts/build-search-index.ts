import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const markdownSections = ["prefabs", "systems", "queries"];
const dbSections = ["items", "recipes", "npcs", "abilities", "workstations", "blueprints", "quests", "buffs", "itemsets"];

interface SearchEntry {
  title: string;
  slug: string;
  section: string;
  tags: string[];
  excerpt: string;
  path: string;
}

async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, "utf8")) as T;
}

async function maybeReadJson<T>(filePath: string): Promise<T | null> {
  try {
    return await readJson<T>(filePath);
  } catch {
    return null;
  }
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const searchEntries: SearchEntry[] = [];

  for (const section of markdownSections) {
    const indexPath = path.join(repoRoot, "public", "data", "indexes", `${section}.index.json`);
    const entries = await maybeReadJson<Array<{ title: string; slug: string; section: string; tags?: string[]; excerpt: string; path: string }>>(indexPath);
    if (!entries) {
      continue;
    }

    for (const entry of entries) {
      searchEntries.push({
        title: entry.title,
        slug: entry.slug,
        section: entry.section,
        tags: entry.tags ?? [],
        excerpt: entry.excerpt,
        path: entry.path
      });
    }
  }

  for (const section of dbSections) {
    const indexPath = path.join(repoRoot, "public", "data", "db", section, "index.json");
    const entries = await maybeReadJson<Array<{ title: string; slug: string; tags?: string[]; excerpt: string; path: string }>>(indexPath);
    if (!entries) {
      continue;
    }

    for (const entry of entries) {
      searchEntries.push({
        title: entry.title,
        slug: entry.slug,
        section,
        tags: entry.tags ?? [],
        excerpt: entry.excerpt,
        path: entry.path
      });
    }
  }

  await mkdir(path.join(repoRoot, "public", "data"), { recursive: true });
  await writeFile(path.join(repoRoot, "public", "data", "search.index.json"), JSON.stringify(searchEntries, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
