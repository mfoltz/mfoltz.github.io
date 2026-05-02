
import { mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { slugFromRelativePath, slugifySegment } from "../src/lib/slug";
import type {
  ReferenceCodeBlock,
  ReferenceDetail,
  ReferenceDetailSection,
  ReferenceFieldRow,
  ReferenceIndexEntry,
  ReferenceRelation,
  ReferenceRelationGroup,
  ReferenceSection
} from "../src/types/reference";

const referenceSections = ["prefabs", "components", "systems", "queries"] as const satisfies readonly ReferenceSection[];
const relationPreviewLimit = 120;
const writeBatchSize = 200;
const prefabCollectionMinimum = 10;
const prefabCollectionAllKey = "all";

interface SourceDocument {
  section: Exclude<ReferenceSection, "queries">;
  relativePath: string;
  sourcePath: string;
  slug: string;
  title: string;
  frontMatter: Record<string, string>;
  body: string;
  legacyPaths: string[];
}

interface ParsedPrefabComponent {
  name: string;
  path?: string;
  fields: Record<string, string>;
  entries: Array<Record<string, string>>;
}

interface ParsedSystemQuery {
  name: string;
  groups: Array<{
    title: string;
    components: ReferenceRelation[];
  }>;
}

interface DbLookupEntry {
  title: string;
  path: string;
}

interface BuiltReference {
  detail: ReferenceDetail;
  extras?: {
    componentNames?: string[];
    querySlugs?: string[];
    family?: string;
    categories?: string[];
    isCollection?: boolean;
    collectionKey?: string;
  };
}

interface PrefabCollectionMap {
  name: string;
  title: string;
  slug: string;
  sourcePath: string;
  legacyPaths: string[];
  entries: Array<{
    prefabName: string;
    guid: number | null;
    description?: string;
  }>;
}

interface PrefabDataMaps {
  allGuidByName: Map<string, number>;
  categoriesByPrefabName: Map<string, string[]>;
  collectionMaps: PrefabCollectionMap[];
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

function parseGuid(raw: string | undefined): number | null {
  return raw && /^-?\d+$/.test(raw) ? Number(raw) : null;
}

function categoryTitleFromMapName(name: string): string {
  if (name === "VBloodNames") {
    return "VBlood Names";
  }

  return name;
}

function humanizeWords(value: string): string {
  return value
    .replace(/_/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeKey(value: string): string {
  return slugifySegment(value).replace(/-/g, "");
}

function componentLookupKey(value: string): string {
  const noBuffer = value.replace(/\s*\[Buffer\]\s*$/i, "").trim();
  const terminal = noBuffer.split(".").pop() ?? noBuffer;
  return normalizeKey(terminal);
}

function sentenceCase(value: string): string {
  if (!value) {
    return value;
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function titleFromRelativePath(relativePath: string): string {
  return path.basename(relativePath, ".md").replace(/^"|"$/g, "");
}

function excerpt(value: string, fallback = ""): string {
  const clean = value.replace(/\s+/g, " ").trim();
  return (clean || fallback).slice(0, 220);
}

function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function isAutoQueryName(value: string): boolean {
  return /^__query(?:_\d+)?(?:_\d+)?$/i.test(value);
}

function shortComponentTitle(value: string): string {
  const terminal = value.replace(/\s*\[Buffer\]\s*$/i, "").split(".").pop() ?? value;
  return humanizeWords(terminal);
}

function buildQueryTitle(rawName: string, index: number, components: ReferenceRelation[]): string {
  if (!isAutoQueryName(rawName)) {
    return rawName;
  }

  const lead = uniqueStrings(components.slice(0, 2).map((component) => shortComponentTitle(component.title)));
  return lead.length > 0 ? `Query ${index + 1}: ${lead.join(" + ")}` : `Query ${index + 1}`;
}

function buildLegacyPaths(section: Exclude<ReferenceSection, "queries">, relativePath: string, canonicalPath: string): string[] {
  const withoutExtension = relativePath.replace(/\.md$/i, "").replace(/\\/g, "/");
  return uniqueStrings([
    `/${section}/${withoutExtension}`,
    `/${section}/${withoutExtension}/`,
    canonicalPath,
    `${canonicalPath}/`
  ]);
}

function uniqueStrings(values: Array<string | undefined | null>): string[] {
  return [...new Set(values.filter((value): value is string => Boolean(value && value.trim())).map((value) => value.trim()))];
}

function formatCount(value: number, singular: string, plural = `${singular}s`): string {
  return `${value} ${value === 1 ? singular : plural}`;
}

function joinList(values: string[], limit = 4): string {
  const visible = values.slice(0, limit);
  const suffix = values.length > visible.length ? ` +${values.length - visible.length} more` : "";
  return `${visible.join(", ")}${suffix}`;
}

function toRow(label: string, value: string | number | boolean | undefined | null, options: { monospace?: boolean; path?: string } = {}): ReferenceFieldRow | null {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  return {
    label,
    value: String(value),
    monospace: options.monospace,
    path: options.path
  };
}

function dedupeRelations(items: ReferenceRelation[]): ReferenceRelation[] {
  const seen = new Map<string, ReferenceRelation>();
  for (const item of items) {
    const key = `${item.path ?? item.title}:${item.description ?? ""}`.toLowerCase();
    if (!seen.has(key)) {
      seen.set(key, item);
    }
  }

  return [...seen.values()].sort((a, b) => a.title.localeCompare(b.title));
}

function createRelationGroup(title: string, items: ReferenceRelation[], emptyLabel: string): ReferenceRelationGroup {
  const unique = dedupeRelations(items);
  return {
    title,
    items: unique.slice(0, relationPreviewLimit),
    emptyLabel,
    totalCount: unique.length
  };
}

function relrefTargetToPath(rawTarget: string): { section: string; path: string } {
  const cleaned = rawTarget.replace(/\\/g, "/").replace(/^\//, "").replace(/\.md$/i, "");
  const parts = cleaned.split("/").filter(Boolean);
  const [section, ...rest] = parts;
  const slug = rest.length > 0 ? slugFromRelativePath(rest.join("/")) : slugifySegment(section ?? "");
  return {
    section: section ?? "",
    path: `/${section}/${slug}`
  };
}
function parseMarkdownLink(line: string): ReferenceRelation | null {
  const trimmed = line.trim();
  const relrefMatch = trimmed.match(/^- \[(.+?)\]\(\{\{%\s*relref\s*"([^"]+)"\s*%\}\}\)/);
  if (relrefMatch) {
    const title = relrefMatch[1].trim();
    const target = relrefMatch[2].trim();
    const resolved = relrefTargetToPath(target);
    return {
      title,
      path: resolved.path,
      description: sentenceCase(resolved.section)
    };
  }

  const markdownMatch = trimmed.match(/^- \[(.+?)\]\(([^)]+)\)/);
  if (markdownMatch) {
    return { title: markdownMatch[1].trim(), path: markdownMatch[2].trim() };
  }

  const plainMatch = trimmed.match(/^- (.+)$/);
  if (plainMatch) {
    return { title: plainMatch[1].trim() };
  }

  return null;
}

function parseComponentHeading(line: string): { name: string; path?: string } | null {
  const linkMatch = line.match(/^- \[(.+?)\]\(\{\{%\s*relref\s*"([^"]+)"\s*%\}\}\)/);
  if (linkMatch) {
    return {
      name: linkMatch[1],
      path: relrefTargetToPath(linkMatch[2]).path
    };
  }

  const boldMatch = line.match(/^- \*\*(.+?)\*\*$/);
  if (!boldMatch) {
    return null;
  }

  const label = boldMatch[1];
  if (/^\[\d+\]$/.test(label) || /^[01]+$/.test(label)) {
    return null;
  }

  return { name: label };
}

function parseNestedKeyValue(line: string): { key: string; value: string } | null {
  const match = line.match(/^- `([^:]+):\s*(.*)`$/);
  if (!match) {
    return null;
  }

  return { key: match[1].trim(), value: match[2].trim() };
}

function parsePrefabComponents(body: string): ParsedPrefabComponent[] {
  const components: ParsedPrefabComponent[] = [];
  const lines = body.split(/\r?\n/);
  let current: ParsedPrefabComponent | null = null;
  let currentEntry: Record<string, string> | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line === "## Components") {
      continue;
    }

    const heading = parseComponentHeading(line);
    if (heading) {
      current = {
        name: heading.name,
        path: heading.path,
        fields: {},
        entries: []
      };
      currentEntry = null;
      components.push(current);
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

  return components;
}

function parseCodeBlocks(body: string): ReferenceCodeBlock[] {
  const blocks: ReferenceCodeBlock[] = [];
  const pattern = /```([a-zA-Z0-9_-]+)?\r?\n([\s\S]*?)```/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(body)) !== null) {
    blocks.push({
      title: blocks.length === 0 ? "Source Definition" : `Code Block ${blocks.length + 1}`,
      language: match[1] || undefined,
      value: match[2].trim()
    });
  }
  return blocks;
}

function parseHeadingSections(body: string): Map<string, string[]> {
  const sections = new Map<string, string[]>();
  const lines = body.split(/\r?\n/);
  let current: string | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const headingMatch = line.match(/^##\s+(.+)$/);
    if (headingMatch) {
      current = headingMatch[1].trim();
      sections.set(current, []);
      continue;
    }

    if (!current) {
      continue;
    }

    sections.get(current)?.push(line);
  }

  return sections;
}

function parseSystemBody(body: string): { queries: ParsedSystemQuery[]; invalidQueries: string[] } {
  const lines = body.split(/\r?\n/);
  const queries: ParsedSystemQuery[] = [];
  const invalidQueries: string[] = [];
  let currentQuery: ParsedSystemQuery | null = null;
  let currentGroup: ParsedSystemQuery["groups"][number] | null = null;
  let inInvalidQueries = false;

  const commitCurrent = () => {
    if (currentQuery) {
      queries.push(currentQuery);
      currentQuery = null;
      currentGroup = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    const sectionHeading = line.match(/^##\s+(.+)$/);
    if (sectionHeading) {
      if (sectionHeading[1].trim() === "Invalid Queries") {
        commitCurrent();
        inInvalidQueries = true;
      } else {
        commitCurrent();
        inInvalidQueries = false;
      }
      continue;
    }

    const queryHeading = line.match(/^###\s+(.+)$/);
    if (queryHeading) {
      commitCurrent();
      inInvalidQueries = false;
      currentQuery = { name: queryHeading[1].trim(), groups: [] };
      continue;
    }

    if (inInvalidQueries) {
      const bullet = line.match(/^- (.+)$/);
      if (bullet) {
        invalidQueries.push(bullet[1].trim());
      }
      continue;
    }

    if (!currentQuery) {
      continue;
    }

    const groupHeading = line.match(/^- \*\*(.+?):\*\*$/);
    if (groupHeading) {
      currentGroup = {
        title: groupHeading[1].trim(),
        components: []
      };
      currentQuery.groups.push(currentGroup);
      continue;
    }

    const component = parseMarkdownLink(line);
    if (component) {
      if (!currentGroup) {
        currentGroup = { title: "Components", components: [] };
        currentQuery.groups.push(currentGroup);
      }
      currentGroup.components.push(component);
    }
  }

  commitCurrent();
  return { queries, invalidQueries };
}

function parseComponentMetadata(codeBlock: string | undefined): Array<ReferenceFieldRow> {
  if (!codeBlock) {
    return [];
  }

  const signatureMatch = codeBlock.match(/public\s+(struct|class|enum|interface)\s+([A-Za-z0-9_]+)/);
  const il2cppMatch = codeBlock.match(/GetIl2CppClass\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\)/);
  const fieldMatches = [...codeBlock.matchAll(/^\s*public\s+[^\n=(]+\s+([A-Za-z0-9_]+);$/gm)];
  const rows = [
    toRow("Kind", signatureMatch ? sentenceCase(signatureMatch[1]) : undefined),
    toRow("Type", signatureMatch ? signatureMatch[2] : undefined, { monospace: true }),
    toRow("Assembly", il2cppMatch ? il2cppMatch[1] : undefined, { monospace: true }),
    toRow("Namespace", il2cppMatch ? il2cppMatch[2] : undefined, { monospace: true }),
    toRow("Field Count", fieldMatches.length > 0 ? fieldMatches.length : undefined)
  ];

  return rows.filter((row): row is ReferenceFieldRow => Boolean(row));
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

async function loadDocuments(repoRoot: string, section: Exclude<ReferenceSection, "queries">): Promise<SourceDocument[]> {
  const sectionDir = path.join(repoRoot, "content", section);

  try {
    await stat(sectionDir);
  } catch {
    return [];
  }

  const files = await walkMarkdownFiles(sectionDir);
  const documents: SourceDocument[] = [];

  for (const filePath of files) {
    const relativePath = path.relative(sectionDir, filePath);
    const raw = await readFile(filePath, "utf8");
    const parsed = parseFrontMatter(raw);
    const slug = slugFromRelativePath(relativePath);
    const title = (parsed.frontMatter.title ?? titleFromRelativePath(relativePath)).replace(/^"|"$/g, "");
    const canonicalPath = `/${section}/${slug}`;

    documents.push({
      section,
      relativePath,
      sourcePath: path.posix.join("content", section, relativePath.replace(/\\/g, "/")),
      slug,
      title,
      frontMatter: parsed.frontMatter,
      body: parsed.body,
      legacyPaths: buildLegacyPaths(section, relativePath, canonicalPath)
    });
  }

  return documents;
}

async function maybeReadJson<T>(filePath: string): Promise<T | null> {
  try {
    return JSON.parse(await readFile(filePath, "utf8")) as T;
  } catch {
    return null;
  }
}

async function loadPrefabDataMaps(repoRoot: string, collectionDocByKey: Map<string, SourceDocument>): Promise<PrefabDataMaps> {
  const prefabDataDir = path.join(repoRoot, "data", "prefabs");
  const allFilePath = path.join(prefabDataDir, "All.json");
  const allRaw = await maybeReadJson<Record<string, number>>(allFilePath);
  const allGuidByName = new Map(Object.entries(allRaw ?? {}).filter((entry): entry is [string, number] => typeof entry[1] === "number"));
  const categoriesByPrefabName = new Map<string, string[]>();
  const collectionMaps: PrefabCollectionMap[] = [];

  let fileNames: string[] = [];
  try {
    fileNames = (await readdir(prefabDataDir)).filter((fileName) => fileName.endsWith(".json")).sort((a, b) => a.localeCompare(b));
  } catch {
    return { allGuidByName, categoriesByPrefabName, collectionMaps };
  }

  for (const fileName of fileNames) {
    const name = path.basename(fileName, ".json");
    const filePath = path.join(prefabDataDir, fileName);
    const sourcePath = path.posix.join("data", "prefabs", fileName);
    const raw = await maybeReadJson<unknown>(filePath);
    const entries: PrefabCollectionMap["entries"] = [];

    if (Array.isArray(raw)) {
      for (const row of raw) {
        if (!Array.isArray(row) || typeof row[1] !== "string") {
          continue;
        }

        entries.push({
          prefabName: row[1],
          guid: allGuidByName.get(row[1]) ?? null,
          description: typeof row[0] === "string" ? row[0] : undefined
        });
      }
    } else if (raw && typeof raw === "object") {
      for (const [prefabName, guid] of Object.entries(raw as Record<string, unknown>)) {
        if (typeof guid !== "number") {
          continue;
        }

        entries.push({ prefabName, guid });
      }
    }

    if (entries.length < prefabCollectionMinimum) {
      continue;
    }

    const doc = collectionDocByKey.get(normalizeKey(name));
    const title = doc?.title ?? categoryTitleFromMapName(name);
    const slug = doc?.slug ?? slugifySegment(title);
    const legacyPaths = doc?.legacyPaths ?? buildLegacyPaths("prefabs", `${name}.md`, `/prefabs/${slug}`);
    const collectionMap = {
      name,
      title,
      slug,
      sourcePath: doc?.sourcePath ?? sourcePath,
      legacyPaths,
      entries: entries.sort((a, b) => a.prefabName.localeCompare(b.prefabName))
    } satisfies PrefabCollectionMap;
    collectionMaps.push(collectionMap);

    if (normalizeKey(name) === prefabCollectionAllKey) {
      continue;
    }

    for (const entry of entries) {
      const categories = categoriesByPrefabName.get(entry.prefabName) ?? [];
      categories.push(collectionMap.title);
      categoriesByPrefabName.set(entry.prefabName, categories);
    }
  }

  return { allGuidByName, categoriesByPrefabName, collectionMaps };
}

async function loadDbLookup(repoRoot: string, section: "items" | "recipes"): Promise<Map<string, DbLookupEntry>> {
  const filePath = path.join(repoRoot, "public", "data", "db", section, "index.json");
  const entries = await maybeReadJson<Array<{ title: string; path: string }>>(filePath);
  const lookup = new Map<string, DbLookupEntry>();
  if (!entries) {
    return lookup;
  }

  for (const entry of entries) {
    lookup.set(entry.path, { title: entry.title, path: entry.path });
  }

  return lookup;
}

function slugifyDbPrefabName(prefabName: string): string {
  return humanizeWords(prefabName.replace(/_/g, " "))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function relationFromDbLookup(section: "items" | "recipes", prefabName: string, lookup: Map<string, DbLookupEntry>): ReferenceRelation | null {
  const pathValue = `/db/${section}/${slugifyDbPrefabName(prefabName)}`;
  const match = lookup.get(pathValue);
  if (!match) {
    return null;
  }

  return {
    title: match.title,
    path: match.path,
    description: section === "items" ? "DB item" : "DB recipe"
  };
}

function createReference(section: ReferenceSection, kind: string, slug: string, title: string, sourcePath: string, legacyPaths: string[], base: Partial<ReferenceDetail>): BuiltReference {
  const pathValue = `/${section}/${slug}`;
  return {
    detail: {
      section,
      kind,
      slug,
      title,
      path: pathValue,
      excerpt: base.excerpt ?? "",
      tags: base.tags ?? [],
      badges: base.badges,
      summary: base.summary,
      eyebrow: base.eyebrow,
      sourcePath,
      legacyPaths,
      stats: base.stats,
      detailSections: base.detailSections,
      relationGroups: base.relationGroups,
      codeBlocks: base.codeBlocks
    }
  };
}

function sortIndexEntries(entries: ReferenceIndexEntry[]): ReferenceIndexEntry[] {
  return [...entries].sort((a, b) => {
    if (a.kind !== b.kind) {
      if (a.kind === "collection") {
        return -1;
      }
      if (b.kind === "collection") {
        return 1;
      }
    }

    return a.title.localeCompare(b.title);
  });
}

async function writeJsonFiles(files: Array<{ filePath: string; payload: unknown }>): Promise<void> {
  for (let index = 0; index < files.length; index += writeBatchSize) {
    const batch = files.slice(index, index + writeBatchSize);
    await Promise.all(
      batch.map(async (entry) => {
        await mkdir(path.dirname(entry.filePath), { recursive: true });
        await writeFile(entry.filePath, JSON.stringify(entry.payload, null, 2));
      })
    );
  }
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const outDir = path.join(repoRoot, "public", "data", "reference");
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const [prefabDocs, componentDocs, systemDocs, itemLookup, recipeLookup] = await Promise.all([
    loadDocuments(repoRoot, "prefabs"),
    loadDocuments(repoRoot, "components"),
    loadDocuments(repoRoot, "systems"),
    loadDbLookup(repoRoot, "items"),
    loadDbLookup(repoRoot, "recipes")
  ]);
  const collectionDocByKey = new Map<string, SourceDocument>();
  for (const doc of prefabDocs) {
    if (parseGuid(doc.frontMatter.guid) === null && !doc.body.includes("## Components")) {
      collectionDocByKey.set(normalizeKey(doc.frontMatter.data_file ?? doc.title), doc);
    }
  }
  const prefabDataMaps = await loadPrefabDataMaps(repoRoot, collectionDocByKey);
  const collectionPathByKey = new Map<string, string>();
  for (const collection of prefabDataMaps.collectionMaps) {
    const pathValue = `/prefabs/${collection.slug}`;
    collectionPathByKey.set(normalizeKey(collection.name), pathValue);
    collectionPathByKey.set(normalizeKey(collection.title), pathValue);
  }

  const componentBySlug = new Map<string, BuiltReference>();
  const componentByKey = new Map<string, BuiltReference>();
  const componentSystemsByKey = new Map<string, ReferenceRelation[]>();
  const componentPrefabsByKey = new Map<string, ReferenceRelation[]>();
  const componentQueriesByKey = new Map<string, ReferenceRelation[]>();
  const systemBySlug = new Map<string, BuiltReference>();
  const queryBySlug = new Map<string, BuiltReference>();
  const prefabBySlug = new Map<string, BuiltReference>();
  const actualPrefabBySlug = new Map<string, BuiltReference>();
  const actualPrefabByName = new Map<string, BuiltReference>();
  const aliasMap: Record<string, string> = {};

  function categoriesForPrefab(prefabName: string, frontMatterCategories: string[]): string[] {
    return uniqueStrings([...(prefabDataMaps.categoriesByPrefabName.get(prefabName) ?? []), ...frontMatterCategories.filter((category) => normalizeKey(category) !== prefabCollectionAllKey)]);
  }

  function pathForCategory(category: string): string {
    return collectionPathByKey.get(normalizeKey(category)) ?? `/prefabs/${slugifySegment(category)}`;
  }

  function registerPrefabReference(doc: SourceDocument, guid: number | null, categories: string[], components: ParsedPrefabComponent[]): void {
    const componentRelations = components.map((component) => ({
      title: component.name,
      path: component.path,
      description:
        Object.keys(component.fields).length > 0
          ? `${formatCount(Object.keys(component.fields).length, "field")}${component.entries.length > 0 ? ` • ${formatCount(component.entries.length, "entry")}` : ""}`
          : component.entries.length > 0
            ? formatCount(component.entries.length, "entry")
            : "Attached"
    }));

    const detailSections: ReferenceDetailSection[] = [];
    const codeBlocks: ReferenceCodeBlock[] = [];
    for (const component of components) {
      const rows = [
        ...Object.entries(component.fields).map(([label, value]) => ({ label, value, monospace: /Guid|Prefab|Entity|Type|Value/.test(label) })),
        ...(component.entries.length > 0 ? [{ label: "Nested Entries", value: formatCount(component.entries.length, "entry") }] : [])
      ];
      if (rows.length > 0) {
        detailSections.push({ title: component.name, rows });
      }
      if (component.entries.length > 0) {
        codeBlocks.push({
          title: `${component.name} Entries`,
          language: "json",
          value: JSON.stringify(component.entries, null, 2)
        });
      }

      const componentKey = componentLookupKey(component.name);
      if (!componentPrefabsByKey.has(componentKey)) {
        componentPrefabsByKey.set(componentKey, []);
      }
      componentPrefabsByKey.get(componentKey)?.push({ title: doc.title, path: `/prefabs/${doc.slug}`, description: categories[0] ?? "Prefab" });
    }

    const categoryRelations = categories.map((category) => ({
      title: category,
      path: pathForCategory(category),
      description: "Collection"
    }));
    const dbRelations = [relationFromDbLookup("items", doc.title, itemLookup), relationFromDbLookup("recipes", doc.title, recipeLookup)].filter(
      (value): value is ReferenceRelation => Boolean(value)
    );
    const summaryBits = [guid !== null ? `GUID ${guid}` : undefined, formatCount(components.length, "component"), categories.length > 0 ? joinList(categories, 3) : undefined].filter(
      (value): value is string => Boolean(value)
    );

    const detail = createReference("prefabs", "prefab", doc.slug, doc.title, doc.sourcePath, doc.legacyPaths, {
      eyebrow: "Prefab Reference",
      excerpt: excerpt(`${doc.title} is a prefab with ${formatCount(components.length, "component")}.`),
      summary: summaryBits.join(" • "),
      badges: uniqueStrings([categories[0], guid !== null ? String(guid) : undefined]).slice(0, 3),
      tags: uniqueStrings([doc.title, ...categories, ...components.map((component) => component.name)]),
      stats: [
        toRow("GUID", guid, { monospace: true }),
        toRow("Categories", categories.length),
        toRow("Components", components.length),
        toRow("Nested Entry Blocks", components.filter((component) => component.entries.length > 0).length)
      ].filter((row): row is ReferenceFieldRow => Boolean(row)),
      detailSections,
      relationGroups: [
        createRelationGroup("Components", componentRelations, "No linked components."),
        createRelationGroup("Collections", categoryRelations, "No collections."),
        createRelationGroup("DB Records", dbRelations, "No matching DB entries.")
      ],
      codeBlocks
    });

    const built = { ...detail, extras: { componentNames: components.map((component) => component.name), categories, isCollection: false } };
    prefabBySlug.set(doc.slug, built);
    actualPrefabBySlug.set(doc.slug, built);
    actualPrefabByName.set(doc.title, built);

    for (const legacyPath of doc.legacyPaths) {
      aliasMap[legacyPath.toLowerCase()] = detail.detail.path;
    }
  }

  for (const doc of componentDocs) {
    const codeBlocks = parseCodeBlocks(doc.body);
    const metadataRows = parseComponentMetadata(codeBlocks[0]?.value);
    const headingSections = parseHeadingSections(doc.body);
    const serverSystems = (headingSections.get("Server Systems") ?? []).map(parseMarkdownLink).filter((value): value is ReferenceRelation => Boolean(value));
    const clientSystems = (headingSections.get("Client Systems") ?? []).map(parseMarkdownLink).filter((value): value is ReferenceRelation => Boolean(value));
    componentSystemsByKey.set(componentLookupKey(doc.title), dedupeRelations([...serverSystems, ...clientSystems]));

    const detail = createReference("components", "component", doc.slug, doc.title, doc.sourcePath, doc.legacyPaths, {
      eyebrow: "Reference Component",
      excerpt: excerpt(`${doc.title} component definition and relationship map.`),
      summary: `${doc.title} is a reusable ECS reference component with source metadata and relationship backlinks.`,
      tags: uniqueStrings([doc.title, ...serverSystems.map((system) => system.title), ...clientSystems.map((system) => system.title)]),
      badges: uniqueStrings([metadataRows.find((row) => row.label === "Kind")?.value]),
      detailSections: metadataRows.length > 0 ? [{ title: "Identity", rows: metadataRows }] : [],
      codeBlocks
    });

    componentBySlug.set(doc.slug, detail);
    componentByKey.set(componentLookupKey(doc.title), detail);

    for (const legacyPath of doc.legacyPaths) {
      aliasMap[legacyPath.toLowerCase()] = detail.detail.path;
    }
  }
  for (const doc of systemDocs) {
    const family = doc.relativePath.replace(/\\/g, "/").split("/")[0] || "system";
    const parsed = parseSystemBody(doc.body);
    const uniqueComponentMap = new Map<string, ReferenceRelation>();
    const queryRelations: ReferenceRelation[] = [];
    const querySlugs: string[] = [];

    for (const [queryIndex, query] of parsed.queries.entries()) {
      const componentRelations = query.groups.flatMap((group) => group.components);
      const uniqueQueryComponents = dedupeRelations(componentRelations);
      const querySlug = `${doc.slug}--${slugifySegment(query.name)}`;
      const queryTitle = buildQueryTitle(query.name, queryIndex, uniqueQueryComponents);
      const queryDetail = createReference("queries", "query", querySlug, queryTitle, `${doc.sourcePath}#${headingId(query.name)}`, [], {
        eyebrow: `${sentenceCase(family)} Query`,
        excerpt: excerpt(`${queryTitle} in ${doc.title} uses ${formatCount(uniqueQueryComponents.length, "component")}.`),
        summary: `${queryTitle} belongs to ${doc.title} and pulls together ${formatCount(uniqueQueryComponents.length, "component")} across ${formatCount(query.groups.length, "requirement group")}.`,
        badges: uniqueStrings([sentenceCase(family), formatCount(uniqueQueryComponents.length, "component"), isAutoQueryName(query.name) ? "Auto ID" : undefined]),
        tags: uniqueStrings([doc.title, query.name, queryTitle, ...uniqueQueryComponents.map((component) => component.title)]),
        stats: [
          toRow("System", doc.title, { path: `/${doc.section}/${doc.slug}` }),
          toRow("Runtime", sentenceCase(family)),
          toRow("Source ID", query.name, { monospace: true }),
          toRow("Requirement Groups", query.groups.length),
          toRow("Components", uniqueQueryComponents.length)
        ].filter((row): row is ReferenceFieldRow => Boolean(row)),
        detailSections: query.groups.map((group) => ({
          title: group.title,
          rows: [
            {
              label: "Components",
              value: joinList(group.components.map((component) => component.title), 8)
            }
          ]
        })),
        relationGroups: [
          createRelationGroup("Parent System", [{ title: doc.title, path: `/${doc.section}/${doc.slug}`, description: `${sentenceCase(family)} system` }], "No parent system."),
          ...query.groups.map((group) => createRelationGroup(group.title, group.components, `No ${group.title.toLowerCase()} recorded.`))
        ]
      });

      queryBySlug.set(querySlug, queryDetail);
      queryRelations.push({ title: queryTitle, path: `/queries/${querySlug}`, description: `${formatCount(uniqueQueryComponents.length, "component")}` });
      querySlugs.push(querySlug);

      for (const component of uniqueQueryComponents) {
        const componentKey = componentLookupKey(component.title);
        if (!componentQueriesByKey.has(componentKey)) {
          componentQueriesByKey.set(componentKey, []);
        }
        componentQueriesByKey.get(componentKey)?.push({ title: queryTitle, path: `/queries/${querySlug}`, description: doc.title, badges: [sentenceCase(family)] });
      }

      for (const component of uniqueQueryComponents) {
        uniqueComponentMap.set(component.title, component);
        const componentKey = componentLookupKey(component.title);
        if (!componentSystemsByKey.has(componentKey)) {
          componentSystemsByKey.set(componentKey, []);
        }
        componentSystemsByKey.get(componentKey)?.push({ title: doc.title, path: `/${doc.section}/${doc.slug}`, description: `${sentenceCase(family)} system` });
      }
    }

    const componentRelations = [...uniqueComponentMap.values()].sort((a, b) => a.title.localeCompare(b.title));
    const detail = createReference("systems", "system", doc.slug, doc.title, doc.sourcePath, doc.legacyPaths, {
      eyebrow: `${sentenceCase(family)} System`,
      excerpt: excerpt(`${doc.title} exposes ${formatCount(parsed.queries.length, "query", "queries")} across ${formatCount(componentRelations.length, "unique component")}.`),
      summary: `${doc.title} is a ${family} runtime system with ${formatCount(parsed.queries.length, "query", "queries")} and ${formatCount(componentRelations.length, "unique component")}.`,
      badges: [sentenceCase(family), formatCount(parsed.queries.length, "query", "queries")],
      tags: uniqueStrings([doc.title, family, ...componentRelations.map((component) => component.title)]),
      stats: [
        toRow("Runtime", sentenceCase(family)),
        toRow("Queries", parsed.queries.length),
        toRow("Invalid Queries", parsed.invalidQueries.length),
        toRow("Unique Components", componentRelations.length)
      ].filter((row): row is ReferenceFieldRow => Boolean(row)),
      detailSections: [
        ...parsed.queries.map((query) => ({
          title: buildQueryTitle(query.name, parsed.queries.indexOf(query), dedupeRelations(query.groups.flatMap((group) => group.components))),
          rows: [
            ...(isAutoQueryName(query.name) ? [{ label: "Source ID", value: query.name, monospace: true }] : []),
            ...query.groups.map((group) => ({
            label: group.title,
            value: joinList(group.components.map((component) => component.title), 8)
            }))
          ]
        })),
        ...(parsed.invalidQueries.length > 0
          ? [
              {
                title: "Invalid Queries",
                rows: parsed.invalidQueries.map((query) => ({ label: "Query", value: query, monospace: true }))
              }
            ]
          : [])
      ],
      relationGroups: [
        createRelationGroup("Queries", queryRelations, "No queries extracted."),
        createRelationGroup("Components", componentRelations, "No components extracted.")
      ]
    });

    systemBySlug.set(doc.slug, { ...detail, extras: { componentNames: componentRelations.map((component) => component.title), querySlugs, family } });

    for (const legacyPath of doc.legacyPaths) {
      aliasMap[legacyPath.toLowerCase()] = detail.detail.path;
    }
  }

  for (const doc of prefabDocs) {
    const frontMatterCategories = parseStringList(doc.frontMatter.categories);
    const guid = parseGuid(doc.frontMatter.guid) ?? prefabDataMaps.allGuidByName.get(doc.title) ?? null;
    const components = parsePrefabComponents(doc.body);
    const isCollectionDoc = guid === null && !doc.body.includes("## Components");

    if (isCollectionDoc) {
      continue;
    }

    registerPrefabReference(doc, guid, categoriesForPrefab(doc.title, frontMatterCategories), components);
  }

  for (const [prefabName, guid] of prefabDataMaps.allGuidByName.entries()) {
    if (actualPrefabByName.has(prefabName)) {
      continue;
    }

    const slug = slugifySegment(prefabName);
    const syntheticDoc: SourceDocument = {
      section: "prefabs",
      relativePath: `${prefabName}.md`,
      sourcePath: "data/prefabs/All.json",
      slug,
      title: prefabName,
      frontMatter: {},
      body: "",
      legacyPaths: buildLegacyPaths("prefabs", `${prefabName}.md`, `/prefabs/${slug}`)
    };
    registerPrefabReference(syntheticDoc, guid, categoriesForPrefab(prefabName, []), []);
  }

  for (const collection of prefabDataMaps.collectionMaps) {
    const matchingPrefabs = collection.entries
      .map((entry) => {
        const prefab = actualPrefabByName.get(entry.prefabName);
        return {
          title: entry.description ?? prefab?.detail.title ?? entry.prefabName,
          path: prefab?.detail.path ?? `/prefabs/${slugifySegment(entry.prefabName)}`,
          description: entry.description ? entry.prefabName : prefab?.extras?.categories?.[0] ?? "Prefab",
          badges: entry.guid !== null ? [String(entry.guid)] : undefined
        } satisfies ReferenceRelation;
      })
      .sort((a, b) => a.title.localeCompare(b.title));

    const summary = `${collection.title} groups ${formatCount(matchingPrefabs.length, "prefab")} into one browsable collection.`;
    const detail = createReference("prefabs", "collection", collection.slug, collection.title, collection.sourcePath, collection.legacyPaths, {
      eyebrow: "Prefab Collection",
      excerpt: excerpt(summary),
      summary,
      badges: [formatCount(matchingPrefabs.length, "prefab")],
      tags: uniqueStrings([collection.title, collection.name, ...matchingPrefabs.slice(0, 40).flatMap((prefab) => [prefab.title, prefab.description])]),
      stats: [toRow("Included Prefabs", matchingPrefabs.length)].filter((row): row is ReferenceFieldRow => Boolean(row)),
      relationGroups: [createRelationGroup("Included Prefabs", matchingPrefabs, "No prefabs linked to this collection.")]
    });

    prefabBySlug.set(collection.slug, { ...detail, extras: { categories: [collection.title], isCollection: true, collectionKey: normalizeKey(collection.name) } });

    for (const legacyPath of collection.legacyPaths) {
      aliasMap[legacyPath.toLowerCase()] = detail.detail.path;
    }
  }

  for (const [componentKey, built] of componentByKey.entries()) {
    const prefabs = componentPrefabsByKey.get(componentKey) ?? [];
    const systems = componentSystemsByKey.get(componentKey) ?? [];
    const queries = componentQueriesByKey.get(componentKey) ?? [];
    const detail = built.detail;

    detail.summary = `${detail.title} is referenced by ${formatCount(prefabs.length, "prefab")}, ${formatCount(systems.length, "system")}, and ${formatCount(queries.length, "query", "queries")}.`;
    detail.excerpt = excerpt(detail.summary, detail.excerpt);
    detail.badges = uniqueStrings([
      ...(detail.badges ?? []),
      prefabs.length > 0 ? formatCount(prefabs.length, "prefab") : undefined,
      systems.length > 0 ? formatCount(systems.length, "system") : undefined
    ]).slice(0, 3);
    detail.stats = [
      ...(detail.stats ?? []),
      ...(prefabs.length > 0 ? [{ label: "Prefabs", value: String(prefabs.length) }] : []),
      ...(systems.length > 0 ? [{ label: "Systems", value: String(systems.length) }] : []),
      ...(queries.length > 0 ? [{ label: "Queries", value: String(queries.length) }] : [])
    ];
    detail.relationGroups = [
      ...(detail.relationGroups ?? []),
      createRelationGroup("Prefabs", prefabs, "No prefabs linked."),
      createRelationGroup("Systems", systems, "No systems linked."),
      createRelationGroup("Queries", queries, "No queries linked.")
    ];
  }

  for (const built of systemBySlug.values()) {
    const detail = built.detail;
    detail.relationGroups = [
      ...(detail.relationGroups ?? []),
      createRelationGroup(
        "Referenced By Components",
        [...componentByKey.values()]
          .filter((component) => (component.detail.relationGroups ?? []).some((group) => group.title === "Systems" && group.items.some((item) => item.path === detail.path)))
          .map((component) => ({ title: component.detail.title, path: component.detail.path, description: "Component backlink" })),
        "No component backlinks."
      )
    ];
  }

  const sectionEntries: Record<ReferenceSection, ReferenceIndexEntry[]> = {
    prefabs: sortIndexEntries([...prefabBySlug.values()].map((entry) => entry.detail)),
    components: sortIndexEntries([...componentBySlug.values()].map((entry) => entry.detail)),
    systems: sortIndexEntries([...systemBySlug.values()].map((entry) => entry.detail)),
    queries: sortIndexEntries([...queryBySlug.values()].map((entry) => entry.detail))
  };

  for (const section of referenceSections) {
    const sectionDir = path.join(outDir, section);
    await mkdir(path.join(sectionDir, "by-slug"), { recursive: true });
    await writeFile(path.join(sectionDir, "index.json"), JSON.stringify(sectionEntries[section], null, 2));

    const details =
      section === "prefabs"
        ? [...prefabBySlug.values()].map((entry) => entry.detail)
        : section === "components"
          ? [...componentBySlug.values()].map((entry) => entry.detail)
          : section === "systems"
            ? [...systemBySlug.values()].map((entry) => entry.detail)
            : [...queryBySlug.values()].map((entry) => entry.detail);

    await writeJsonFiles(
      details.map((detail) => ({
        filePath: path.join(sectionDir, "by-slug", `${detail.slug}.json`),
        payload: detail
      }))
    );
  }

  await writeFile(path.join(outDir, "aliases.json"), JSON.stringify(aliasMap, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
