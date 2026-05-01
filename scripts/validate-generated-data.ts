import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isSafeSlug } from "../src/lib/slug";

type IndexEntry = {
  slug: string;
  path: string;
  section?: string;
  icon?: string;
};

type RelatedEntityRef = {
  icon?: string;
};

type DetailEntry = {
  slug: string;
  icon?: string;
  iconAssetPath?: string;
  repairRecipes?: RelatedEntityRef[];
  relatedRecipes?: RelatedEntityRef[];
  outputs?: RelatedEntityRef[];
  requirements?: RelatedEntityRef[];
  repairCosts?: RelatedEntityRef[];
  workstationOutputs?: RelatedEntityRef[];
  inventoryPrefabs?: RelatedEntityRef[];
};

async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, "utf8")) as T;
}

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

function validateEntry(entry: IndexEntry, source: string): void {
  assert(isSafeSlug(entry.slug), `${source}: invalid slug '${entry.slug}'`);
  assert(entry.path.endsWith(`/${entry.slug}`), `${source}: path '${entry.path}' does not end with '/${entry.slug}'`);
}

function assertItemIconPath(icon: string | undefined, source: string): void {
  if (!icon) {
    return;
  }

  assert(icon.startsWith("/icons/items/"), `${source}: icon '${icon}' is not an approved item icon path`);
  assert(!icon.includes(".."), `${source}: icon '${icon}' must not contain parent traversal`);
}

function collectRelatedIcons(detail: DetailEntry): Array<[string, string]> {
  const relationGroups: Array<keyof Pick<
    DetailEntry,
    "repairRecipes" | "relatedRecipes" | "outputs" | "requirements" | "repairCosts" | "workstationOutputs" | "inventoryPrefabs"
  >> = ["repairRecipes", "relatedRecipes", "outputs", "requirements", "repairCosts", "workstationOutputs", "inventoryPrefabs"];

  const icons: Array<[string, string]> = [];
  for (const key of relationGroups) {
    const refs = detail[key] ?? [];
    refs.forEach((ref, index) => {
      if (ref.icon) {
        icons.push([ref.icon, `${detail.slug}.${key}[${index}].icon`]);
      }
    });
  }
  return icons;
}

async function assertPublicIconExists(repoRoot: string, icon: string, source: string): Promise<void> {
  const iconPath = path.join(repoRoot, "public", icon.slice(1));
  try {
    await access(iconPath);
  } catch {
    throw new Error(`${source}: icon file '${icon}' does not exist at ${iconPath}`);
  }
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

  const referenceSections = ["prefabs", "components", "systems", "queries"];
  for (const section of referenceSections) {
    const filePath = path.join(repoRoot, "public", "data", "reference", section, "index.json");
    const entries = await readJson<IndexEntry[]>(filePath);
    for (const entry of entries) {
      assert(entry.path.startsWith(`/${section}/`), `${filePath}: path '${entry.path}' does not start with '/${section}/'`);
      validateEntry(entry, filePath);
    }
  }

  const dbSections = ["items", "recipes", "npcs", "abilities", "workstations", "blueprints", "quests", "buffs", "itemsets"];
  const itemIndexBySlug = new Map<string, IndexEntry>();
  const itemIconSources = new Map<string, string>();
  for (const section of dbSections) {
    const filePath = path.join(repoRoot, "public", "data", "db", section, "index.json");
    const entries = await readJson<IndexEntry[]>(filePath);
    for (const entry of entries) {
      assert(entry.path.startsWith(`/db/${section}/`), `${filePath}: path '${entry.path}' does not start with '/db/${section}/'`);
      validateEntry(entry, filePath);
      if (section === "items") {
        itemIndexBySlug.set(entry.slug, entry);
        assertItemIconPath(entry.icon, `${filePath}:${entry.slug}`);
        if (entry.icon) {
          itemIconSources.set(entry.icon, `${filePath}:${entry.slug}.icon`);
        }
      }
    }
  }

  const itemDetailsPath = path.join(repoRoot, "public", "data", "db", "items", "by-slug");
  const itemDetailFiles = (await readdir(itemDetailsPath)).filter((fileName) => fileName.endsWith(".json"));
  for (const fileName of itemDetailFiles) {
    const filePath = path.join(itemDetailsPath, fileName);
    const detail = await readJson<DetailEntry>(filePath);
    const source = `${filePath}:${detail.slug}`;
    const itemIndex = itemIndexBySlug.get(detail.slug);

    if (!itemIndex) {
      throw new Error(`${source}: missing matching item index entry`);
    }
    assertItemIconPath(detail.icon, `${source}.icon`);
    assertItemIconPath(detail.iconAssetPath, `${source}.iconAssetPath`);

    if (detail.iconAssetPath) {
      assert(detail.icon === detail.iconAssetPath, `${source}: detail icon does not match iconAssetPath`);
      assert(itemIndex.icon === detail.iconAssetPath, `${source}: index icon does not match iconAssetPath`);
    }

    for (const [icon, iconSource] of collectRelatedIcons(detail)) {
      assertItemIconPath(icon, `${filePath}:${iconSource}`);
      itemIconSources.set(icon, `${filePath}:${iconSource}`);
    }

    if (detail.icon) {
      itemIconSources.set(detail.icon, `${source}.icon`);
    }
    if (detail.iconAssetPath) {
      itemIconSources.set(detail.iconAssetPath, `${source}.iconAssetPath`);
    }
  }

  for (const section of ["recipes", "workstations"]) {
    const detailPath = path.join(repoRoot, "public", "data", "db", section, "by-slug");
    const detailFiles = (await readdir(detailPath)).filter((fileName) => fileName.endsWith(".json"));
    for (const fileName of detailFiles) {
      const filePath = path.join(detailPath, fileName);
      const detail = await readJson<DetailEntry>(filePath);
      for (const [icon, iconSource] of collectRelatedIcons(detail)) {
        assertItemIconPath(icon, `${filePath}:${iconSource}`);
        itemIconSources.set(icon, `${filePath}:${iconSource}`);
      }
    }
  }

  for (const [icon, source] of itemIconSources) {
    await assertPublicIconExists(repoRoot, icon, source);
  }

  const searchPath = path.join(repoRoot, "public", "data", "search.index.json");
  const searchEntries = await readJson<IndexEntry[]>(searchPath);
  for (const entry of searchEntries) {
    assert(entry.path.includes(`/${entry.slug}`), `${searchPath}: path '${entry.path}' does not include slug '${entry.slug}'`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
