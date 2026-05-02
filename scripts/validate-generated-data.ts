import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isSafeSlug } from "../src/lib/slug";
import {
  extractTextVariables,
  hasTextVariables,
  isTextVariableSourceKind,
  normalizeTextVariableName,
  type TextVariableResolutionMap
} from "../src/lib/textVariables";

type IndexEntry = {
  slug: string;
  path: string;
  section?: string;
  icon?: string;
  categories?: string[];
  tags?: string[];
  school?: string;
  catalogStatus?: string;
  description?: string;
  excerpt?: string;
  textVariableValues?: TextVariableResolutionMap;
};

type RelatedEntityRef = {
  icon?: string;
};

type DetailEntry = {
  slug: string;
  icon?: string;
  iconAssetPath?: string;
  description?: string;
  summary?: string;
  tooltipTextEn?: string;
  localizedDescriptionTextEn?: string;
  textVariableValues?: TextVariableResolutionMap;
  repairRecipes?: RelatedEntityRef[];
  relatedRecipes?: RelatedEntityRef[];
  outputs?: RelatedEntityRef[];
  requirements?: RelatedEntityRef[];
  repairCosts?: RelatedEntityRef[];
  workstationOutputs?: RelatedEntityRef[];
  inventoryPrefabs?: RelatedEntityRef[];
};

type EnrichmentTextEntry = {
  tooltipTextEn?: string;
  descriptionTextEn?: string;
  textVariableValues?: TextVariableResolutionMap;
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

function assertNoTextVariables(values: string[] | undefined, source: string, field: string): void {
  for (const value of values ?? []) {
    assert(!hasTextVariables(value), `${source}: ${field} '${value}' must not contain unresolved text-variable tokens`);
  }
}

function assertTextVariableValues(
  values: TextVariableResolutionMap | undefined,
  textFields: Array<string | undefined>,
  source: string
): void {
  if (!values) {
    return;
  }

  const sourceTokens = new Set(textFields.flatMap((value) => extractTextVariables(value)).map(normalizeTextVariableName));
  for (const [token, resolution] of Object.entries(values)) {
    assert(/^[A-Za-z0-9_]+$/.test(token), `${source}: textVariableValues key '${token}' is not a valid token name`);
    assert(sourceTokens.has(normalizeTextVariableName(token)), `${source}: textVariableValues.{${token}} does not appear in raw player copy`);
    assert(typeof resolution.value === "string" && resolution.value.trim().length > 0, `${source}: textVariableValues.{${token}} is missing value`);
    assert(!hasTextVariables(resolution.value), `${source}: textVariableValues.{${token}} value must not contain another unresolved token`);
    assert(
      isTextVariableSourceKind(resolution.sourceKind),
      `${source}: textVariableValues.{${token}} has unsupported sourceKind '${resolution.sourceKind}'`
    );
    assert(
      typeof resolution.sourceRef === "string" && resolution.sourceRef.trim().length > 0,
      `${source}: textVariableValues.{${token}} is missing sourceRef`
    );
  }
}

function isUnknownBadge(value: string | undefined): boolean {
  return value?.trim().toLowerCase() === "unknown";
}

function validateAbilityCatalog(entries: IndexEntry[], source: string): void {
  const expectedSchoolCounts = new Map([
    ["Blood", 9],
    ["Chaos", 9],
    ["Frost", 9],
    ["Illusion", 9],
    ["Storm", 9],
    ["Unholy", 9]
  ]);
  const actualSchoolCounts = new Map<string, number>();
  const catalogEntries = entries.filter((entry) => entry.catalogStatus === "catalog");

  assert(catalogEntries.length === 54, `${source}: expected 54 catalog ability entries, found ${catalogEntries.length}`);

  for (const entry of catalogEntries) {
    const school = entry.school ?? "";
    assert(school.trim().length > 0, `${source}:${entry.slug}: catalog ability is missing school`);
    assert(!isUnknownBadge(school), `${source}:${entry.slug}: catalog ability resolved to Unknown school`);
    assert(expectedSchoolCounts.has(school), `${source}:${entry.slug}: unexpected catalog school '${school}'`);
    assert(!(entry.categories ?? []).some(isUnknownBadge), `${source}:${entry.slug}: catalog ability categories must not include Unknown`);
    actualSchoolCounts.set(school, (actualSchoolCounts.get(school) ?? 0) + 1);
  }

  for (const [school, expectedCount] of expectedSchoolCounts) {
    const actualCount = actualSchoolCounts.get(school) ?? 0;
    assert(actualCount === expectedCount, `${source}: expected ${expectedCount} ${school} catalog abilities, found ${actualCount}`);
  }
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
    throw new Error(
      `${source}: icon file '${icon}' does not exist at ${iconPath}. Run npm run refresh:db-assets from an approved asset source and commit the generated public/icons/items/ asset.`
    );
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

  const abilityTooltipMapPath = path.join(repoRoot, "data", "enrichment", "ability-tooltip-map.json");
  const abilityTooltipMap = await readJson<Record<string, EnrichmentTextEntry>>(abilityTooltipMapPath);
  for (const [prefab, entry] of Object.entries(abilityTooltipMap)) {
    assertTextVariableValues(entry.textVariableValues, [entry.tooltipTextEn], `${abilityTooltipMapPath}:${prefab}`);
  }

  const itemDescriptionMapPath = path.join(repoRoot, "data", "enrichment", "item-description-map.json");
  const itemDescriptionMap = await readJson<Record<string, EnrichmentTextEntry>>(itemDescriptionMapPath);
  for (const [prefab, entry] of Object.entries(itemDescriptionMap)) {
    assertTextVariableValues(entry.textVariableValues, [entry.descriptionTextEn], `${itemDescriptionMapPath}:${prefab}`);
  }

  for (const section of dbSections) {
    const filePath = path.join(repoRoot, "public", "data", "db", section, "index.json");
    const entries = await readJson<IndexEntry[]>(filePath);
    for (const entry of entries) {
      assert(entry.path.startsWith(`/db/${section}/`), `${filePath}: path '${entry.path}' does not start with '/db/${section}/'`);
      validateEntry(entry, filePath);
      assertNoTextVariables(entry.tags, `${filePath}:${entry.slug}`, "tag");
      assertNoTextVariables(entry.categories, `${filePath}:${entry.slug}`, "category");
      assertTextVariableValues(entry.textVariableValues, [entry.description, entry.excerpt], `${filePath}:${entry.slug}`);
      if (section === "items") {
        itemIndexBySlug.set(entry.slug, entry);
        assertItemIconPath(entry.icon, `${filePath}:${entry.slug}`);
        if (entry.icon) {
          itemIconSources.set(entry.icon, `${filePath}:${entry.slug}.icon`);
        }
      }
    }
    if (section === "abilities") {
      validateAbilityCatalog(entries, filePath);
    }
  }

  for (const section of dbSections) {
    const detailPath = path.join(repoRoot, "public", "data", "db", section, "by-slug");
    const detailFiles = (await readdir(detailPath)).filter((fileName) => fileName.endsWith(".json"));
    for (const fileName of detailFiles) {
      const filePath = path.join(detailPath, fileName);
      const detail = await readJson<DetailEntry>(filePath);
      assertTextVariableValues(
        detail.textVariableValues,
        [detail.description, detail.summary, detail.tooltipTextEn, detail.localizedDescriptionTextEn],
        `${filePath}:${detail.slug}`
      );
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
    assertTextVariableValues(entry.textVariableValues, [entry.description, entry.excerpt], `${searchPath}:${entry.slug}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
