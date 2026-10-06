import assert from "node:assert/strict";
import type { DbEntityDetail, DbRelatedEntityRef } from "../src/types/db";
import { isSafeSlug } from "../src/lib/slug";

export const materialBlueprintComponent = "ProjectM.BlueprintRequirementBuffer";
export interface MaterialDestination {
  title: string; prefab: string; guid: number | null; slug: string; path: string; icon?: string;
}
export interface MaterialBlueprintDocument {
  prefab: string; guid: number | null; sourcePath: string; status: string;
  materials: DbRelatedEntityRef[];
}
export function indexMaterialDestinations(rows: MaterialDestination[]): Map<string, MaterialDestination[]> {
  const result = new Map<string, MaterialDestination[]>();
  for (const row of rows) result.set(row.prefab, [...(result.get(row.prefab) ?? []), row]);
  return result;
}
export function compareMaterialBlueprints(a: DbRelatedEntityRef, b: DbRelatedEntityRef): number {
  return a.title.localeCompare(b.title, "en", { sensitivity: "base" })
    || (a.prefab < b.prefab ? -1 : a.prefab > b.prefab ? 1 : 0) || (a.guid ?? 0) - (b.guid ?? 0);
}
function destination(lookup: ReadonlyMap<string, readonly MaterialDestination[]>, prefab: string,
  guid: number | null, section: "items" | "blueprints", all: Record<string, number>): MaterialDestination {
  const rows = lookup.get(prefab) ?? [];
  assert.equal(rows.length, 1, `${prefab}: missing/ambiguous ${section} destination`);
  const row = rows[0];
  assert(Number.isSafeInteger(guid) && guid === all[prefab] && guid === row.guid, `${prefab}: GUID mismatch`);
  assert(row.prefab === prefab && isSafeSlug(row.slug) && row.path === `/db/${section}/${row.slug}`, `${prefab}: route mismatch`);
  return row;
}
/** Only validated forward materials are inverted; amounts belong to this material requirement. */
export function buildMaterialBlueprints(docs: MaterialBlueprintDocument[], items: ReadonlyMap<string, readonly MaterialDestination[]>,
  blueprints: ReadonlyMap<string, readonly MaterialDestination[]>, all: Record<string, number>): Map<string, DbRelatedEntityRef[]> {
  const result = new Map<string, DbRelatedEntityRef[]>(), seen = new Set<string>();
  for (const doc of docs) {
    assert(!seen.has(doc.prefab), `${doc.prefab}: duplicate Blueprint`); seen.add(doc.prefab);
    const target = destination(blueprints, doc.prefab, doc.guid, "blueprints", all);
    assert.equal(doc.sourcePath, `content/prefabs/${doc.prefab}.md`, `${doc.prefab}: source path mismatch`);
    assert(["recorded", "empty", "zero-valued", "missing"].includes(doc.status), `${doc.prefab}: unknown material status`);
    if (doc.status !== "recorded") { assert.equal(doc.materials.length, 0); continue; }
    assert(doc.materials.length > 0, `${doc.prefab}: empty recorded buffer`);
    const pairs = new Set<string>();
    for (const material of doc.materials) {
      const item = destination(items, material.prefab, material.guid, "items", all);
      assert.equal(material.path, item.path); assert.equal(material.title, item.title); assert.equal(material.icon, item.icon);
      assert.equal(material.sourceComponent, materialBlueprintComponent); assert.equal(material.sourcePath, doc.sourcePath);
      assert(Number.isFinite(material.amount) && material.amount! > 0, `${doc.prefab}: invalid material amount`);
      assert(!pairs.has(material.prefab), `${doc.prefab}: duplicate item/Blueprint pair`); pairs.add(material.prefab);
      const rows = result.get(material.prefab) ?? [];
      rows.push({ title: target.title, prefab: target.prefab, guid: target.guid, slug: target.slug, path: target.path,
        amount: material.amount, icon: target.icon, sourcePath: doc.sourcePath, sourceComponent: materialBlueprintComponent });
      result.set(material.prefab, rows);
    }
  }
  for (const rows of result.values()) rows.sort(compareMaterialBlueprints);
  return result;
}

/** Independent named-buffer reader: reject duplicate fields/buffers and preserve held zero rows. */
export function readMaterialBlueprintDocument(sourcePath: string, markdown: string,
  items: ReadonlyMap<string, readonly MaterialDestination[]>, all: Record<string, number>): MaterialBlueprintDocument {
  const text = markdown.replace(/\r\n?/g, "\n");
  const prefab = text.match(/^title:\s*([^\n]+)$/m)?.[1].trim() ?? "";
  const rawGuid = text.match(/^guid:\s*(-?\d+)\s*$/m)?.[1];
  const guid = rawGuid ? Number(rawGuid) : null;
  assert(prefab && Number.isSafeInteger(guid) && guid === all[prefab], `${sourcePath}: source identity mismatch`);
  assert(text.includes("- [ProjectM.BlueprintData]"), `${prefab}: missing BlueprintData`);
  const blocks = [...text.matchAll(/^- \[ProjectM\.BlueprintRequirementBuffer\].*?(?=^- \[|(?![\s\S]))/gms)];
  assert(blocks.length <= 1, `${prefab}: duplicate material buffers`);
  const materials = (blocks[0]?.[0] ?? "").split(/^- \*\*\[\d+\]\*\*/m).slice(1).map(block => {
    const fields: Record<string, string> = {};
    for (const field of block.matchAll(/`([^:`]+):\s*([^`]+)`/g)) {
      assert(!(field[1] in fields), `${prefab}: duplicate material field`); fields[field[1]] = field[2].trim();
    }
    const ref = fields.PrefabGUID?.match(/^([A-Za-z0-9_-]+)\s+PrefabGuid\((-?\d+)\)$/);
    const amount = /^\d+(?:\.\d+)?$/.test(fields.Amount ?? "") ? Number(fields.Amount) : NaN;
    assert(ref && Number.isFinite(amount) && amount >= 0, `${prefab}: malformed material row`);
    const item = destination(items, ref[1], Number(ref[2]), "items", all);
    return { title: item.title, prefab: item.prefab, guid: item.guid, path: item.path, icon: item.icon,
      amount, sourceComponent: materialBlueprintComponent, sourcePath };
  });
  assert.equal(new Set(materials.map(row => row.prefab)).size, materials.length, `${prefab}: duplicate material pair`);
  const status = !blocks.length ? "missing" : !materials.length ? "empty" : materials.some(row => row.amount === 0) ? "zero-valued" : "recorded";
  return { prefab, guid, sourcePath, status, materials: status === "recorded" ? materials : [] };
}
export function validateMaterialBlueprints(details: DbEntityDetail[], expected: ReadonlyMap<string, DbRelatedEntityRef[]>): void {
  const seen = new Set<string>();
  for (const detail of details) {
    assert(detail.prefab && !seen.has(detail.prefab), `${detail.slug}: missing/duplicate item`); seen.add(detail.prefab);
    const rows = expected.get(detail.prefab);
    assert.deepEqual(detail.materialBlueprints, rows ? JSON.parse(JSON.stringify(rows)) : undefined,
      `${detail.prefab}: material Blueprints differ from retained requirements`);
  }
  for (const prefab of expected.keys()) assert(seen.has(prefab), `${prefab}: missing material detail`);
}
