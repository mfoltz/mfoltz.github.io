import assert from "node:assert/strict";
import type { DbBookBlueprintRef, DbBookBlueprintSource, DbEntityDetail } from "../src/types/db";
import { isSafeSlug } from "../src/lib/slug";
import { blueprintUnlockSourcePath } from "./blueprint-unlocks";
import type { BlueprintUnlockMapSnapshot } from "./blueprint-unlocks";

export const bookRequirementComponent = "ProjectM.TechItemRequirementBuffer" as const;
export const bookUnlockComponent = "ProjectM.TechUnlockBlueprintBuffer" as const;
export interface BookBlueprintDocument {
  prefabName: string;
  guid: number | null;
  sourcePath: string;
  components: Map<string, { entries: Array<Record<string, string>> } | undefined>;
}
export interface BookBlueprintDestination {
  title: string; prefab: string; guid: number | null; slug: string; path: string; icon?: string;
}
type Lookup = ReadonlyMap<string, readonly BookBlueprintDestination[]>;
const edgeKey = (book: { prefab: string; guid: number | null }, source: typeof book, target: typeof book) =>
  [book.prefab, book.guid, source.prefab, source.guid, target.prefab, target.guid].join("|");
/** Freeze the existing forward relationship scope; this pass does not widen the map. */
export function recordedBookBlueprintEdges(snapshot: BlueprintUnlockMapSnapshot): ReadonlySet<string> {
  const keys = new Set<string>();
  for (const target of Object.values(snapshot.entriesByPrefab)) for (const source of target.unlockSources) {
    for (const book of source.requiredBooks ?? []) {
      const key = edgeKey(book, { prefab: source.sourcePrefab, guid: source.sourceGuid }, target);
      assert(!keys.has(key), `${key}: duplicate mapped book/source/Blueprint edge`);
      keys.add(key);
    }
  }
  return keys;
}
export function indexBookBlueprintDestinations(rows: BookBlueprintDestination[]): Lookup {
  const result = new Map<string, BookBlueprintDestination[]>();
  for (const row of rows) result.set(row.prefab, [...(result.get(row.prefab) ?? []), row]);
  return result;
}
export function compareBookBlueprintRecords(a: { title: string; prefab: string; guid: number | null }, b: typeof a): number {
  return a.title.localeCompare(b.title, "en", { sensitivity: "base" })
    || (a.prefab < b.prefab ? -1 : a.prefab > b.prefab ? 1 : 0) || (a.guid ?? 0) - (b.guid ?? 0);
}
function reference(value: string | undefined) {
  const match = value?.trim().match(/^([A-Za-z0-9_-]+)\s+PrefabGuid\((-?\d+)\)$/);
  assert(match, `Malformed book/Blueprint identity: ${value}`);
  const guid = Number(match[2]);
  assert(Number.isSafeInteger(guid), `Invalid GUID: ${value}`);
  return { prefab: match[1], guid };
}
function destination(lookup: Lookup, prefab: string, guid: number | null, section: "items" | "blueprints", all: Record<string, number>) {
  const rows = lookup.get(prefab) ?? [];
  assert.equal(rows.length, 1, `${prefab}: missing or ambiguous ${section} destination`);
  const row = rows[0];
  assert(Number.isSafeInteger(guid) && guid === all[prefab] && guid === row.guid, `${prefab}: identity mismatch`);
  assert(row.prefab === prefab && isSafeSlug(row.slug) && row.path === `/db/${section}/${row.slug}`, `${prefab}: destination mismatch`);
  return row;
}

/** Quantities belong to the book/source requirement, never the target Blueprint. */
export function buildBookBlueprints(docs: BookBlueprintDocument[], items: Lookup, blueprints: Lookup,
  all: Record<string, number>, recordedEdges?: ReadonlySet<string>): Map<string, DbBookBlueprintRef[]> {
  const documents = new Map<string, BookBlueprintDocument[]>();
  for (const doc of docs) documents.set(doc.prefabName, [...(documents.get(doc.prefabName) ?? []), doc]);
  const result = new Map<string, Map<string, DbBookBlueprintRef>>();
  const owners = new Set<string>();
  const matchedEdges = new Set<string>();
  for (const doc of docs) {
    const unlocks = doc.components.get(bookUnlockComponent)?.entries ?? [];
    if (!doc.components.has("ProjectM.TechData") || !unlocks.length) continue;
    const requirements = (doc.components.get(bookRequirementComponent)?.entries ?? [])
      .filter(row => row.Guid?.includes("Item_Ingredient_Book_"));
    if (!requirements.length) continue;
    assert(!owners.has(doc.prefabName), `${doc.prefabName}: duplicate declaring document`);
    owners.add(doc.prefabName);
    assert(doc.guid !== null && Number.isSafeInteger(doc.guid) && doc.guid === all[doc.prefabName], `${doc.prefabName}: source identity mismatch`);
    assert.equal(doc.sourcePath, `content/prefabs/${doc.prefabName}.md`, `${doc.prefabName}: source path mismatch`);
    const title = doc.prefabName.replace(/_/g, " ").replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2").replace(/\s+/g, " ").trim();
    const targets = new Map<string, BookBlueprintDestination>();
    for (const row of unlocks) {
      const target = reference(row.Guid);
      assert(!targets.has(target.prefab), `${doc.prefabName}: duplicate unlock edge`);
      targets.set(target.prefab, destination(blueprints, target.prefab, target.guid, "blueprints", all));
    }
    const seenBooks = new Map<string, number | undefined>();
    for (const row of requirements) {
      const book = reference(row.Guid);
      assert(book.prefab.startsWith("Item_Ingredient_Book_"), `${doc.prefabName}: invalid book identity`);
      destination(items, book.prefab, book.guid, "items", all);
      const bookDocs = documents.get(book.prefab) ?? [];
      assert(bookDocs.length === 1 && bookDocs[0].guid === book.guid && bookDocs[0].components.has("ProjectM.ItemData"), `${book.prefab}: missing or ambiguous book ItemData`);
      const amount = row.Stacks === undefined ? undefined : Number(row.Stacks);
      assert(row.Stacks === undefined || (/^\d+$/.test(row.Stacks.trim()) && Number.isSafeInteger(amount) && amount! > 0), `${doc.prefabName}: invalid book quantity`);
      if (seenBooks.has(book.prefab)) {
        assert.equal(seenBooks.get(book.prefab), amount, `${doc.prefabName}: conflicting book quantities`);
        assert.fail(`${doc.prefabName}: duplicate book/source requirement`);
      }
      seenBooks.set(book.prefab, amount);
      const owner: DbBookBlueprintSource = { title, prefab: doc.prefabName, guid: doc.guid,
        path: blueprintUnlockSourcePath(doc.sourcePath), ...(amount === undefined ? {} : { amount }),
        sourcePath: doc.sourcePath, sourceComponent: bookRequirementComponent, unlockSourceComponent: bookUnlockComponent };
      const entries = result.get(book.prefab) ?? new Map<string, DbBookBlueprintRef>();
      for (const target of targets.values()) {
        const key = edgeKey(book, owner, target);
        if (recordedEdges && !recordedEdges.has(key)) continue;
        matchedEdges.add(key);
        const existing = entries.get(target.prefab);
        if (existing) existing.declaringSources.push({ ...owner });
        else entries.set(target.prefab, { ...target, declaringSources: [{ ...owner }] });
      }
      if (entries.size) result.set(book.prefab, entries);
    }
  }
  if (recordedEdges) assert.deepEqual([...matchedEdges].sort(), [...recordedEdges].sort(), "Mapped book edges lack exact retained-source proof");
  return new Map([...result].map(([book, entries]) => [book, [...entries.values()].map(row => ({ ...row,
    declaringSources: row.declaringSources.sort(compareBookBlueprintRecords) })).sort(compareBookBlueprintRecords)]));
}

/** Independently read named buffers, stopping at linked or bold component headers. */
export function readBookBlueprintDocument(sourcePath: string, markdown: string): BookBlueprintDocument {
  const body = markdown.replace(/\r\n?/g, "\n");
  const components: BookBlueprintDocument["components"] = new Map();
  for (const name of ["ProjectM.TechData", "ProjectM.ItemData", bookRequirementComponent, bookUnlockComponent]) {
    const starts = [...body.matchAll(new RegExp(`^- \\[${name.replace(/\./g, "\\.")}\\]`, "gm"))];
    assert(starts.length <= 1, `${sourcePath}: duplicate ${name} component`);
    if (!starts.length) continue;
    const lines = body.slice(starts[0].index).split("\n").slice(1), block: string[] = [];
    for (const line of lines) {
      if (/^- (?:\[[A-Za-z]|\*\*[A-Za-z])/.test(line)) break;
      block.push(line);
    }
    const entries = block.join("\n").split(/^- \*\*\[\d+\]\*\*/m).slice(1).map(row => {
      const fields: Record<string, string> = {};
      for (const match of row.matchAll(/`([^:`]+):\s*([^`]+)`/g)) {
        assert(!(match[1] in fields), `${sourcePath}: duplicate ${match[1]} field`);
        fields[match[1]] = match[2].trim();
      }
      return fields;
    });
    components.set(name, { entries });
  }
  const prefabName = body.match(/^title:\s*([^\n]+)$/m)?.[1].trim() ?? "";
  const guid = body.match(/^guid:\s*(-?\d+)\s*$/m)?.[1];
  return { prefabName, guid: guid ? Number(guid) : null, sourcePath, components };
}
export function validateBookBlueprints(details: DbEntityDetail[], expected: ReadonlyMap<string, DbBookBlueprintRef[]>): void {
  const seen = new Set<string>();
  for (const detail of details) {
    assert(typeof detail.prefab === "string" && !seen.has(detail.prefab), `${detail.slug}: missing or duplicate item identity`);
    seen.add(detail.prefab);
    const rows = expected.get(detail.prefab);
    if (!rows) assert.equal(detail.bookBlueprints, undefined, `${detail.prefab}: unexpected book Blueprints`);
    else assert.deepEqual(detail.bookBlueprints, JSON.parse(JSON.stringify(rows)), `${detail.prefab}: book Blueprints differ from independent source/destinations`);
  }
  for (const prefab of expected.keys()) assert(seen.has(prefab), `${prefab}: missing book item detail`);
}
