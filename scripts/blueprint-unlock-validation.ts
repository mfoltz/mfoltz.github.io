import assert from "node:assert/strict";
import type { DbEntityDetail, DbIndexEntry, DbRelatedEntityRef } from "../src/types/db";
import {
  blueprintUnlockMapSourceKind, blueprintUnlockSourceComponents, blueprintUnlockSourcePath,
  blueprintUnlockSourceTypes, sourceTypeLabels, type BlueprintUnlockMapSnapshot
} from "./blueprint-unlocks";

export interface BlueprintValidationInput {
  snapshot: BlueprintUnlockMapSnapshot;
  allPrefabs: Record<string, number>;
  index: Array<Pick<DbIndexEntry, "slug" | "path" | "unlockSourceCount" | "unlockSourceTypes" | "unlockSourceTypeLabels" | "unlockSourceTypeSummary" | "linkedBookCount" | "isStartBlueprint">>;
  details: DbEntityDetail[];
  references: Array<{ title: string; path: string; sourcePath: string }>;
  items: Array<{ prefab?: string; guid?: number | null; path: string; slug: string }>;
}

export function validateBlueprintUnlockSnapshot({ snapshot, allPrefabs, index, details, references, items }: BlueprintValidationInput): void {
  assert.equal(snapshot.schemaVersion, 1, "blueprint map schemaVersion");
  assert.equal(snapshot.sourceKind, blueprintUnlockMapSourceKind, "blueprint map sourceKind");
  assert(Array.isArray(snapshot.sourceRefs) && snapshot.sourceRefs.includes("content/prefabs"), "blueprint map sourceRefs");
  assert(snapshot.entriesByPrefab && typeof snapshot.entriesByPrefab === "object" && !Array.isArray(snapshot.entriesByPrefab), "missing entriesByPrefab");
  assert.equal(snapshot.targetRowCount, index.length, "blueprint targetRowCount");
  const byPrefab = new Map(details.map((detail) => [detail.prefab, detail]));
  assert.equal(byPrefab.size, details.length, "duplicate blueprint detail prefab");
  assert.deepEqual(details.map((detail) => detail.slug).sort(), index.map((row) => row.slug).sort(), "blueprint index/detail coverage");
  const referenceByPath = new Map(references.map((ref) => [ref.path, ref]));
  const itemByPrefab = new Map(items.map((item) => [item.prefab, item]));
  const indexBySlug = new Map(index.map((row) => [row.slug, row]));
  const aggregate: Record<string, number> = {};

  for (const [prefab, entry] of Object.entries(snapshot.entriesByPrefab)) {
    assert.equal(entry.prefab, prefab, `${prefab}: map key`);
    assert(Number.isInteger(entry.guid) && allPrefabs[prefab] === entry.guid, `${prefab}: target GUID join`);
    assert(byPrefab.has(prefab), `${prefab}: missing blueprint detail`);
    assert(Array.isArray(entry.unlockSources) && entry.unlockSources.length > 0, `${prefab}: empty unlock sources`);
  }

  for (const detail of details) {
    const prefab = detail.prefab;
    assert(typeof prefab === "string" && allPrefabs[prefab] === detail.guid, `${detail.slug}: detail GUID join`);
    const entry = snapshot.entriesByPrefab[prefab];
    const sources = entry?.unlockSources ?? [];
    assert(Array.isArray(detail.unlockSources), `${prefab}: missing detail unlockSources`);
    const refs = detail.unlockSources as DbRelatedEntityRef[];
    assert.equal(refs.length, sources.length, `${prefab}: map/detail source coverage`);
    assert.equal(detail.unlockSourceCount, sources.length, `${prefab}: detail source count`);
    const counts: Record<string, number> = {};
    const keys = new Set<string>();
    sources.forEach((source, position) => {
      const context = `${prefab}: source ${position}`;
      assert.equal(source.targetBlueprintPrefab, prefab, `${context}: target prefab`);
      assert.equal(source.targetBlueprintGuid, detail.guid, `${context}: target GUID`);
      assert(blueprintUnlockSourceComponents.includes(source.sourceComponent), `${context}: component`);
      assert(blueprintUnlockSourceTypes.includes(source.sourceType), `${context}: type`);
      assert.equal(source.sourceTypeLabel, sourceTypeLabels[source.sourceType], `${context}: label`);
      assert(Number.isInteger(source.sourceGuid) && allPrefabs[source.sourcePrefab] === source.sourceGuid, `${context}: source GUID join`);
      const sourcePath = blueprintUnlockSourcePath(source.sourcePath);
      const reference = referenceByPath.get(sourcePath);
      assert(reference, `${context}: missing reference destination ${sourcePath}`);
      assert.equal(reference.title, source.sourcePrefab, `${context}: reference prefab`);
      assert.equal(reference.sourcePath, source.sourcePath, `${context}: reference sourcePath`);
      const key = `${source.sourcePrefab}|${source.sourceComponent}`;
      assert(!keys.has(key), `${context}: duplicate unlock source`);
      keys.add(key);
      const ref = refs[position];
      assert.equal(ref.prefab, source.sourcePrefab, `${context}: detail prefab`);
      assert.equal(ref.guid, source.sourceGuid, `${context}: detail GUID`);
      assert.equal(ref.path, sourcePath, `${context}: detail route`);
      for (const field of ["sourceComponent", "sourcePath", "sourceType", "sourceTypeLabel"] as const) {
        assert.equal(ref[field], source[field], `${context}: detail ${field}`);
      }
      assert.equal(ref.requiredBooks?.length ?? 0, source.requiredBooks?.length ?? 0, `${context}: book coverage`);
      for (const [bookIndex, book] of (source.requiredBooks ?? []).entries()) {
        assert.equal(source.sourceComponent, "ProjectM.TechUnlockBlueprintBuffer", `${context}: book owner`);
        assert.equal(book.sourceComponent, "ProjectM.TechItemRequirementBuffer", `${context}: book component`);
        assert(book.prefab.startsWith("Item_Ingredient_Book_") && allPrefabs[book.prefab] === book.guid, `${context}: book GUID join`);
        assert(book.amount === undefined || (Number.isInteger(book.amount) && book.amount > 0), `${context}: book amount`);
        const item = itemByPrefab.get(book.prefab);
        assert(item && item.guid === book.guid, `${context}: missing item destination`);
        const bookRef = ref.requiredBooks![bookIndex];
        for (const field of ["prefab", "guid", "amount", "sourceComponent"] as const) {
          assert.equal(bookRef[field], book[field], `${context}: book ${field}`);
        }
        assert.equal(bookRef.sourcePath, source.sourcePath, `${context}: book provenance`);
        assert.equal(bookRef.path, item.path, `${context}: book route`);
        assert.equal(bookRef.slug, item.slug, `${context}: book slug`);
      }
      counts[source.sourceType] = (counts[source.sourceType] ?? 0) + 1;
      aggregate[source.sourceType] = (aggregate[source.sourceType] ?? 0) + 1;
    });
    const types = [...new Set(sources.map((source) => source.sourceType))].sort((a, b) => sourceTypeLabels[a].localeCompare(sourceTypeLabels[b]));
    const labels = types.map((type) => sourceTypeLabels[type]);
    if (entry) {
      assert.deepEqual(entry.unlockSourceTypeCounts, counts, `${prefab}: map type counts`);
      assert.deepEqual(entry.unlockSourceTypes, types, `${prefab}: map types`);
      assert.deepEqual(entry.unlockSourceTypeLabels, labels, `${prefab}: map labels`);
    }
    assert.deepEqual(detail.unlockSourceTypeCounts, counts, `${prefab}: detail type counts`);
    assert.deepEqual(detail.unlockSourceTypes, types, `${prefab}: detail types`);
    assert.deepEqual(detail.unlockSourceTypeLabels, labels, `${prefab}: detail labels`);
    assert.equal(detail.unlockSourceTypeSummary, labels.join(", "), `${prefab}: detail type summary`);
    assert.equal(detail.linkedBookCount, new Set(sources.flatMap((source) => source.requiredBooks?.map((book) => book.prefab) ?? [])).size, `${prefab}: linked book count`);
    for (const field of ["unlockSourceCount", "unlockSourceTypes", "unlockSourceTypeLabels", "unlockSourceTypeSummary", "linkedBookCount", "isStartBlueprint"] as const) {
      assert.deepEqual(indexBySlug.get(detail.slug)?.[field], detail[field], `${prefab}: index ${field}`);
    }
  }
  assert.deepEqual(snapshot.unlockSourceTypeCounts, aggregate, "blueprint aggregate type counts");
}
