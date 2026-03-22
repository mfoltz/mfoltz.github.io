import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const referenceSections = ["prefabs", "components", "systems", "queries"];
const dbSections = ["items", "recipes", "npcs", "abilities", "workstations", "blueprints", "quests", "buffs", "itemsets"];

interface SearchEntry {
  title: string;
  slug: string;
  section: string;
  kind?: string;
  tags: string[];
  excerpt: string;
  path: string;
  badges?: string[];
}

const dbKinds: Record<string, string> = {
  items: "item",
  recipes: "recipe",
  npcs: "npc",
  abilities: "ability",
  workstations: "workstation",
  blueprints: "blueprint",
  quests: "quest",
  buffs: "buff",
  itemsets: "item set"
};

function uniqueStrings(values: Array<string | undefined | null>): string[] {
  return [...new Set(values.filter((value): value is string => Boolean(value && value.trim())).map((value) => value.trim()))];
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

  for (const section of referenceSections) {
    const indexPath = path.join(repoRoot, "public", "data", "reference", section, "index.json");
    const entries = await maybeReadJson<Array<{ title: string; slug: string; section: string; kind?: string; tags?: string[]; excerpt: string; path: string; badges?: string[] }>>(indexPath);
    if (!entries) {
      continue;
    }

    for (const entry of entries) {
      searchEntries.push({
        title: entry.title,
        slug: entry.slug,
        section: entry.section,
        kind: entry.kind,
        tags: entry.tags ?? [],
        excerpt: entry.excerpt,
        path: entry.path,
        badges: entry.badges ?? []
      });
    }
  }

  for (const section of dbSections) {
    const indexPath = path.join(repoRoot, "public", "data", "db", section, "index.json");
    const entries = await maybeReadJson<Array<{ title: string; slug: string; tags?: string[]; excerpt: string; path: string; categories?: string[]; tier?: string }>>(indexPath);
    if (!entries) {
      continue;
    }

    for (const entry of entries) {
      searchEntries.push({
        title: entry.title,
        slug: entry.slug,
        section,
        kind: dbKinds[section],
        tags: entry.tags ?? [],
        excerpt: entry.excerpt,
        path: entry.path,
        badges: uniqueStrings([entry.tier, ...(entry.categories ?? []).slice(0, 2)])
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
