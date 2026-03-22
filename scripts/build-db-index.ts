import { mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { slugFromRelativePath } from "../src/lib/slug";

const sections = ["items", "recipes", "npcs", "abilities", "workstations", "blueprints", "quests", "buffs", "itemsets"] as const;
const realDbSections = ["items", "recipes"] as const;
const removableNamePrefixes = new Set(["Armor", "Building", "Consumable", "Ingredient", "MagicSource", "Misc", "Recipe", "UnitSpawn", "Weapon"]);

type Section = (typeof sections)[number];
type RealDbSection = (typeof realDbSections)[number];

interface IndexEntry {
  slug: string;
  title: string;
  categories: string[];
  icon?: string;
  tier?: string;
  excerpt: string;
  path: string;
  tags?: string[];
}

interface RawEntity {
  slug?: string;
  name?: string;
  title?: string;
  category?: string;
  categories?: string[];
  icon?: string;
  rarity?: string;
  tier?: string;
  excerpt?: string;
  summary?: string;
  tags?: string[];
  [key: string]: unknown;
}

interface PrefabDocument {
  filePath: string;
  relativePath: string;
  sourcePath: string;
  prefabPath: string;
  frontMatter: Record<string, string>;
  body: string;
  prefabName: string;
  guid: number | null;
}

interface ParsedComponent {
  name: string;
  fields: Record<string, string>;
  entries: Array<Record<string, string>>;
}

interface PrefabReference {
  prefab: string;
  guid: number | null;
}

interface RelatedEntityRef {
  title: string;
  prefab: string;
  guid: number | null;
  amount?: number;
  slug?: string;
  path?: string;
}

interface EntityBundle {
  index: IndexEntry;
  detail: RawEntity;
}

interface BuiltItemEntity extends EntityBundle {
  prefabName: string;
  recipePrefabs: string[];
}

interface BuiltRecipeEntity extends EntityBundle {
  prefabName: string;
  outputPrefabs: string[];
}

function slugify(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function slugifyPrefabName(prefabName: string): string {
  return slugify(humanizeWords(prefabName.replace(/_/g, " ")));
}

function parseFrontMatter(markdown: string): { body: string; frontMatter: Record<string, string> } {
  if (!markdown.startsWith("---")) {
    return { body: markdown, frontMatter: {} };
  }

  const end = markdown.indexOf("\n---", 3);
  if (end === -1) {
    return { body: markdown, frontMatter: {} };
  }

  const raw = markdown.slice(3, end).trim();
  const frontMatter: Record<string, string> = {};

  for (const line of raw.split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) {
      continue;
    }

    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    frontMatter[key] = value;
  }

  return { body: markdown.slice(end + 4), frontMatter };
}

function parseStringList(raw: string | undefined): string[] {
  if (!raw) {
    return [];
  }

  return raw
    .replace(/[\[\]']/g, "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function humanizeWords(value: string): string {
  return value
    .replace(/_/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDisplayName(prefabName: string, section: RealDbSection): string {
  const tokens = prefabName.split("_").filter(Boolean);
  if (section === "items" && tokens[0] === "Item") {
    tokens.shift();
  }
  if (section === "recipes" && tokens[0] === "Recipe") {
    tokens.shift();
  }
  if (tokens.length > 1 && removableNamePrefixes.has(tokens[0])) {
    tokens.shift();
  }

  const formatted = tokens.map((token) => humanizeWords(token)).join(" ").trim();
  return formatted || humanizeWords(prefabName);
}

function extractTier(prefabName: string): string | undefined {
  return prefabName.split("_").find((token) => /^T\d{2}|T0X$/i.test(token));
}

function coerceScalar(value: string): string | number | boolean {
  const trimmed = value.trim();
  if (trimmed === "True") {
    return true;
  }
  if (trimmed === "False") {
    return false;
  }
  if (/^-?\d+(?:\.\d+)?$/.test(trimmed)) {
    return Number(trimmed);
  }
  return trimmed;
}

function stripQualifiedPrefix(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  const match = trimmed.match(/^[A-Za-z0-9_.]+\s+(.+)$/);
  return match ? match[1].trim() : trimmed;
}

function uniqueStrings(values: Array<string | undefined | null>): string[] {
  return [...new Set(values.map((value) => value?.trim()).filter((value): value is string => Boolean(value)))];
}

function summarizeRefs(items: RelatedEntityRef[], fallback: string): string {
  if (items.length === 0) {
    return fallback;
  }

  return items
    .map((item) => `${item.amount ?? 1} x ${item.title}`)
    .join(", ");
}

function parseComponentHeading(line: string): string | null {
  const linkMatch = line.match(/^- \[(.+?)\]\(/);
  if (linkMatch) {
    return linkMatch[1];
  }

  const boldMatch = line.match(/^- \*\*(.+?)\*\*$/);
  if (!boldMatch) {
    return null;
  }

  const label = boldMatch[1];
  if (/^\[\d+\]$/.test(label) || /^[01]+$/.test(label)) {
    return null;
  }

  return label;
}

function parseNestedKeyValue(line: string): { key: string; value: string } | null {
  const match = line.match(/^- `([^:]+):\s*(.*)`$/);
  if (!match) {
    return null;
  }

  return { key: match[1].trim(), value: match[2].trim() };
}

function parseComponents(body: string): Map<string, ParsedComponent> {
  const components = new Map<string, ParsedComponent>();
  const lines = body.split(/\r?\n/);
  let current: ParsedComponent | null = null;
  let currentEntry: Record<string, string> | null = null;

  const commitCurrent = () => {
    if (!current) {
      return;
    }
    components.set(current.name, current);
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line === "## Components") {
      continue;
    }

    const componentName = parseComponentHeading(line);
    if (componentName) {
      commitCurrent();
      current = { name: componentName, fields: {}, entries: [] };
      currentEntry = null;
      continue;
    }

    if (!current) {
      continue;
    }

    if (/^- \*\*\[\d+\]\*\*$/.test(line)) {
      currentEntry = {};
      current.entries.push(currentEntry);
      continue;
    }

    const field = parseNestedKeyValue(line);
    if (!field) {
      continue;
    }

    if (currentEntry) {
      currentEntry[field.key] = field.value;
    } else {
      current.fields[field.key] = field.value;
    }
  }

  commitCurrent();
  return components;
}

function parsePrefabReference(value: string | undefined): PrefabReference | null {
  if (!value) {
    return null;
  }

  const match = value.match(/([A-Za-z0-9_]+)\s+PrefabGuid\((-?\d+)\)/);
  if (!match) {
    return null;
  }

  return {
    prefab: match[1],
    guid: Number(match[2])
  };
}

function toRelatedEntityRef(ref: PrefabReference | null, itemLookup: Map<string, EntityBundle>, amount?: number): RelatedEntityRef | null {
  if (!ref) {
    return null;
  }

  const match = itemLookup.get(ref.prefab);
  return {
    title: match?.detail.title ? String(match.detail.title) : formatDisplayName(ref.prefab, "items"),
    prefab: ref.prefab,
    guid: ref.guid,
    amount,
    slug: match?.index.slug,
    path: match?.index.path
  };
}

function normalizeEntity(section: Section, raw: RawEntity): { index: IndexEntry; detail: RawEntity } {
  const title = String(raw.title ?? raw.name ?? "Untitled");
  const slug = raw.slug ? String(raw.slug) : slugify(title);
  const categories = (raw.categories ?? (raw.category ? [String(raw.category)] : [])) as string[];
  const excerpt = String(raw.excerpt ?? raw.summary ?? "").slice(0, 220);

  return {
    index: {
      slug,
      title,
      categories,
      icon: raw.icon ? String(raw.icon) : undefined,
      tier: raw.tier ? String(raw.tier) : raw.rarity ? String(raw.rarity) : undefined,
      excerpt,
      path: `/db/${section}/${slug}`,
      tags: raw.tags?.map((tag) => String(tag))
    },
    detail: {
      ...raw,
      slug,
      title,
      summary: raw.summary ?? excerpt
    }
  };
}

async function walkMarkdownFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkMarkdownFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function loadPrefabDocuments(repoRoot: string): Promise<PrefabDocument[]> {
  const prefabsDir = path.join(repoRoot, "content", "prefabs");

  try {
    await stat(prefabsDir);
  } catch {
    return [];
  }

  const files = await walkMarkdownFiles(prefabsDir);
  const documents: PrefabDocument[] = [];

  for (const filePath of files) {
    const relativePath = path.relative(prefabsDir, filePath);
    const raw = await readFile(filePath, "utf8");
    const parsed = parseFrontMatter(raw);
    const prefabName = (parsed.frontMatter.title ?? path.basename(relativePath, ".md")).replace(/^"|"$/g, "");
    const guid = parsed.frontMatter.guid && /^-?\d+$/.test(parsed.frontMatter.guid) ? Number(parsed.frontMatter.guid) : null;

    documents.push({
      filePath,
      relativePath,
      sourcePath: path.posix.join("content", "prefabs", relativePath.replace(/\\/g, "/")),
      prefabPath: `/prefabs/${slugFromRelativePath(relativePath)}`,
      frontMatter: parsed.frontMatter,
      body: parsed.body,
      prefabName,
      guid
    });
  }

  return documents;
}

async function loadRawSection(repoRoot: string, section: Section): Promise<RawEntity[]> {
  const candidates = [
    path.join(repoRoot, "data", "db-raw", `${section}.json`),
    path.join(repoRoot, "data", "db-raw", section, "index.json"),
    path.join(repoRoot, "data", `${section}.json`)
  ];

  for (const candidate of candidates) {
    try {
      await stat(candidate);
      const content = JSON.parse(await readFile(candidate, "utf8")) as unknown;
      if (Array.isArray(content)) {
        return content as RawEntity[];
      }
    } catch {
      // keep checking candidates
    }
  }

  return [];
}

function buildItemEntity(doc: PrefabDocument): BuiltItemEntity {
  const components = parseComponents(doc.body);
  const itemData = components.get("ProjectM.ItemData");
  const equippableData = components.get("ProjectM.EquippableData");
  const weaponLevel = components.get("ProjectM.WeaponLevelSource");
  const durability = components.get("ProjectM.Shared.Durability");
  const salvageable = components.get("ProjectM.Shared.Salvageable");
  const consumeAbility = components.get("ProjectM.CastAbilityOnConsume");

  const itemType = stripQualifiedPrefix(itemData?.fields.ItemType);
  const itemCategories = parseStringList(stripQualifiedPrefix(itemData?.fields.ItemCategory));
  const equipmentType = stripQualifiedPrefix(equippableData?.fields.EquipmentType);
  const weaponType = stripQualifiedPrefix(equippableData?.fields.WeaponType);
  const level = weaponLevel?.fields.Level ? coerceScalar(weaponLevel.fields.Level) : undefined;
  const maxAmount = itemData?.fields.MaxAmount ? coerceScalar(itemData.fields.MaxAmount) : undefined;
  const repairRecipe = parsePrefabReference(durability?.fields.RepairRecipe);
  const salvageRecipe = parsePrefabReference(salvageable?.fields.RecipeGUID);
  const castAbility = parsePrefabReference(consumeAbility?.fields.AbilityGuid);
  const tier = extractTier(doc.prefabName);
  const categories = uniqueStrings([...itemCategories, equipmentType, weaponType, itemType]);
  const title = formatDisplayName(doc.prefabName, "items");

  const summaryParts = uniqueStrings([
    weaponType ? `${weaponType} item` : undefined,
    !weaponType && equipmentType ? `${equipmentType} item` : undefined,
    !weaponType && !equipmentType && itemType ? `${itemType} item` : undefined,
    level !== undefined ? `level ${level}` : undefined,
    maxAmount !== undefined ? `max stack ${maxAmount}` : undefined
  ]);
  const summaryTail = castAbility ? ` Consumes into ${humanizeWords(castAbility.prefab)}.` : "";
  const summary = `${summaryParts.length > 0 ? `${summaryParts.join(", ")}.` : "Game item."}${summaryTail}`.trim();

  const index: IndexEntry = {
    slug: slugifyPrefabName(doc.prefabName),
    title,
    categories,
    tier,
    excerpt: summary.slice(0, 220),
    path: `/db/items/${slugifyPrefabName(doc.prefabName)}`,
    tags: uniqueStrings([
      doc.prefabName,
      doc.guid !== null ? String(doc.guid) : undefined,
      itemType,
      equipmentType,
      weaponType,
      ...categories
    ])
  };

  return {
    prefabName: doc.prefabName,
    recipePrefabs: uniqueStrings([repairRecipe?.prefab, salvageRecipe?.prefab]),
    index,
    detail: {
      slug: index.slug,
      title,
      summary,
      prefab: doc.prefabName,
      guid: doc.guid,
      sourcePath: doc.sourcePath,
      prefabPath: doc.prefabPath,
      categories,
      tier,
      itemType,
      itemCategory: itemCategories,
      equipmentType,
      weaponType,
      maxAmount,
      level,
      durability: durability?.fields.MaxDurability ? coerceScalar(durability.fields.MaxDurability) : undefined,
      repairRecipePrefab: repairRecipe?.prefab,
      salvageRecipePrefab: salvageRecipe?.prefab,
      consumeAbility: castAbility ? humanizeWords(castAbility.prefab) : undefined,
      tags: index.tags
    }
  };
}

function buildRecipeEntity(doc: PrefabDocument, itemLookup: Map<string, EntityBundle>): BuiltRecipeEntity {
  const components = parseComponents(doc.body);
  const recipeData = components.get("ProjectM.RecipeData");
  const requirements = (components.get("ProjectM.RecipeRequirementBuffer")?.entries ?? [])
    .map((entry) => toRelatedEntityRef(parsePrefabReference(entry.Guid), itemLookup, entry.Amount ? Number(entry.Amount) : undefined))
    .filter((entry): entry is RelatedEntityRef => Boolean(entry));
  const outputs = (components.get("ProjectM.RecipeOutputBuffer")?.entries ?? [])
    .map((entry) => toRelatedEntityRef(parsePrefabReference(entry.Guid), itemLookup, entry.Amount ? Number(entry.Amount) : undefined))
    .filter((entry): entry is RelatedEntityRef => Boolean(entry));
  const repairCosts = (components.get("ProjectM.ItemRepairBuffer")?.entries ?? [])
    .map((entry) => toRelatedEntityRef(parsePrefabReference(entry.Guid), itemLookup, entry.Stacks ? Number(entry.Stacks) : undefined))
    .filter((entry): entry is RelatedEntityRef => Boolean(entry));

  const craftDuration = recipeData?.fields.CraftDuration ? coerceScalar(recipeData.fields.CraftDuration) : undefined;
  const alwaysUnlocked = recipeData?.fields.AlwaysUnlocked ? coerceScalar(recipeData.fields.AlwaysUnlocked) : undefined;
  const hideInStation = recipeData?.fields.HideInStation ? coerceScalar(recipeData.fields.HideInStation) : undefined;
  const ignoreServerSettings = recipeData?.fields.IgnoreServerSettings ? coerceScalar(recipeData.fields.IgnoreServerSettings) : undefined;
  const primaryOutput = outputs[0];
  const tier = primaryOutput?.prefab ? extractTier(primaryOutput.prefab) : extractTier(doc.prefabName);
  const categories = uniqueStrings([...(itemLookup.get(primaryOutput?.prefab ?? "")?.index.categories ?? []), primaryOutput?.title ? undefined : formatDisplayName(doc.prefabName, "recipes")]);
  const title = primaryOutput ? `${primaryOutput.title} Recipe` : `${formatDisplayName(doc.prefabName, "recipes")} Recipe`;
  const summary = `Crafts ${summarizeRefs(outputs, "unknown output")}${craftDuration !== undefined ? ` in ${craftDuration}s` : ""} from ${summarizeRefs(requirements, "unknown requirements")}.`;

  const index: IndexEntry = {
    slug: slugifyPrefabName(doc.prefabName),
    title,
    categories,
    tier,
    excerpt: summary.slice(0, 220),
    path: `/db/recipes/${slugifyPrefabName(doc.prefabName)}`,
    tags: uniqueStrings([
      doc.prefabName,
      doc.guid !== null ? String(doc.guid) : undefined,
      ...categories,
      ...outputs.map((output) => output.prefab),
      ...requirements.map((requirement) => requirement.prefab)
    ])
  };

  return {
    prefabName: doc.prefabName,
    outputPrefabs: outputs.map((output) => output.prefab),
    index,
    detail: {
      slug: index.slug,
      title,
      summary,
      prefab: doc.prefabName,
      guid: doc.guid,
      sourcePath: doc.sourcePath,
      prefabPath: doc.prefabPath,
      categories,
      tier,
      craftDuration,
      alwaysUnlocked,
      hideInStation,
      ignoreServerSettings,
      crafts: summarizeRefs(outputs, "unknown output"),
      requires: summarizeRefs(requirements, "unknown requirements"),
      repairsWith: repairCosts.length > 0 ? summarizeRefs(repairCosts, "n/a") : undefined,
      outputs,
      requirements,
      repairCosts,
      tags: index.tags
    }
  };
}

function enrichItemsWithRecipes(items: BuiltItemEntity[], recipes: BuiltRecipeEntity[]): BuiltItemEntity[] {
  const recipeLookup = new Map(recipes.map((recipe) => [recipe.prefabName, recipe]));
  const recipesByOutput = new Map<string, RelatedEntityRef[]>();

  for (const recipe of recipes) {
    for (const prefab of recipe.outputPrefabs) {
      const entries = recipesByOutput.get(prefab) ?? [];
      entries.push({
        title: recipe.index.title,
        prefab: recipe.prefabName,
        guid: typeof recipe.detail.guid === "number" ? recipe.detail.guid : null,
        slug: recipe.index.slug,
        path: recipe.index.path
      });
      recipesByOutput.set(prefab, entries);
    }
  }

  return items.map((item) => {
    const repairRecipes = item.recipePrefabs
      .map((prefab) => recipeLookup.get(prefab))
      .filter((recipe): recipe is BuiltRecipeEntity => Boolean(recipe))
      .map((recipe) => ({
        title: recipe.index.title,
        prefab: recipe.prefabName,
        guid: typeof recipe.detail.guid === "number" ? recipe.detail.guid : null,
        slug: recipe.index.slug,
        path: recipe.index.path
      }));
    const relatedRecipes = recipesByOutput.get(item.prefabName) ?? [];

    return {
      ...item,
      detail: {
        ...item.detail,
        repairRecipes,
        relatedRecipes
      }
    };
  });
}

async function loadRealEntities(repoRoot: string): Promise<Record<RealDbSection, EntityBundle[]>> {
  const docs = await loadPrefabDocuments(repoRoot);
  const itemDocs = docs.filter((doc) => doc.prefabName.startsWith("Item_"));
  const builtItems = itemDocs.map((doc) => buildItemEntity(doc));
  const itemLookup = new Map(builtItems.map((item) => [item.prefabName, { index: item.index, detail: item.detail } satisfies EntityBundle]));
  const recipeDocs = docs.filter((doc) => doc.prefabName.startsWith("Recipe_"));
  const builtRecipes = recipeDocs.map((doc) => buildRecipeEntity(doc, itemLookup));
  const enrichedItems = enrichItemsWithRecipes(builtItems, builtRecipes);

  return {
    items: enrichedItems.map(({ index, detail }) => ({ index, detail })),
    recipes: builtRecipes.map(({ index, detail }) => ({ index, detail }))
  };
}

async function writeSection(repoRoot: string, section: Section, entities: EntityBundle[]) {
  const outDir = path.join(repoRoot, "public", "data", "db", section);
  const bySlugDir = path.join(outDir, "by-slug");
  await mkdir(bySlugDir, { recursive: true });

  const index = entities.map((entry) => entry.index).sort((a, b) => a.title.localeCompare(b.title));
  await writeFile(path.join(outDir, "index.json"), JSON.stringify(index, null, 2));

  const existing = await readdir(bySlugDir);
  await Promise.all(existing.map((file) => rm(path.join(bySlugDir, file), { force: true })));

  for (const entity of entities) {
    await writeFile(path.join(bySlugDir, `${entity.index.slug}.json`), JSON.stringify(entity.detail, null, 2));
  }
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const realEntities = await loadRealEntities(repoRoot);

  for (const section of sections) {
    if (section in realEntities) {
      const realSection = section as RealDbSection;
      const entities = realEntities[realSection];
      if (entities.length > 0) {
        await writeSection(repoRoot, section, entities);
        continue;
      }
    }

    const rawEntities = await loadRawSection(repoRoot, section);
    const normalized = rawEntities.map((entity) => normalizeEntity(section, entity));

    if (section === "items" && normalized.length === 0) {
      normalized.push(
        normalizeEntity(section, {
          slug: "example-item",
          title: "Example Item",
          categories: ["placeholder"],
          excerpt: "Placeholder item until game data import is wired.",
          summary: "This static entry verifies list/detail rendering for /db/items.",
          fields: {
            source: "scripts/build-db-index.ts fallback"
          }
        })
      );
    }

    await writeSection(repoRoot, section, normalized);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
