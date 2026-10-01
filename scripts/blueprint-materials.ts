import type { DbBlueprintBuildMaterialStatus, DbEntityDetail, DbRelatedEntityRef } from "../src/types/db";

export const blueprintMaterialComponent = "ProjectM.BlueprintRequirementBuffer";
export interface BlueprintMaterialDocument {
  prefabName: string;
  sourcePath: string;
  components: Map<string, { entries: Array<Record<string, string>> }>;
}
export interface BlueprintMaterialItem {
  prefab: string;
  guid: number | null;
  title: string;
  path: string;
  icon?: string;
}
export interface BlueprintMaterials {
  buildMaterialStatus: DbBlueprintBuildMaterialStatus;
  buildMaterials: DbRelatedEntityRef[];
  heldBuildMaterialRows?: DbRelatedEntityRef[];
}

/** Preserve buffer order and source values; a zero row holds the entire buffer. */
export function buildBlueprintMaterials(doc: BlueprintMaterialDocument, items: ReadonlyMap<string, BlueprintMaterialItem>): BlueprintMaterials {
  const component = doc.components.get(blueprintMaterialComponent);
  if (!component) return { buildMaterialStatus: "missing", buildMaterials: [] };
  if (!component.entries.length) return { buildMaterialStatus: "empty", buildMaterials: [] };
  const seen = new Set<string>();
  const rows = component.entries.map((entry) => {
    const match = entry.PrefabGUID?.match(/^([A-Za-z0-9_]+)\s+PrefabGuid\((-?\d+)\)$/);
    const amount = /^\d+(?:\.\d+)?$/.test(entry.Amount?.trim() ?? "") ? Number(entry.Amount) : NaN;
    if (!match || !Number.isFinite(amount) || amount < 0) throw new Error(`${doc.prefabName}: invalid recorded build material`);
    const prefab = match[1], guid = Number(match[2]);
    const item = items.get(prefab);
    if (!Number.isSafeInteger(guid) || !item || item.guid !== guid || item.prefab !== prefab || !item.path.startsWith("/db/items/")) {
      throw new Error(`${doc.prefabName}: build material identity/destination mismatch: ${prefab}`);
    }
    if (seen.has(prefab)) throw new Error(`${doc.prefabName}: duplicate build material: ${prefab}`);
    seen.add(prefab);
    return { title: item.title, prefab, guid, amount, path: item.path, icon: item.icon,
      sourceComponent: blueprintMaterialComponent, sourcePath: doc.sourcePath };
  });
  return rows.some((row) => row.amount === 0)
    ? { buildMaterialStatus: "zero-valued", buildMaterials: [], heldBuildMaterialRows: rows }
    : { buildMaterialStatus: "recorded", buildMaterials: rows };
}

/** Validate against independently reconstructed source rows and current item routes. */
export function validateBlueprintMaterials(detail: DbEntityDetail, expected: BlueprintMaterials,
  items: ReadonlyMap<string, BlueprintMaterialItem>, allPrefabs: Record<string, number>): void {
  const fail = (message: string): never => { throw new Error(`${detail.prefab}: ${message}`); };
  if (detail.buildMaterialStatus !== expected.buildMaterialStatus) fail("build material status differs from source");
  for (const key of ["buildMaterials", "heldBuildMaterialRows"] as const) {
    const rows = detail[key] ?? [], sourceRows = expected[key] ?? [];
    if (!Array.isArray(rows) || rows.length !== sourceRows.length) fail(`${key}: source row count differs`);
    const seen = new Set<string>();
    for (const [i, row] of rows.entries()) {
      const source = sourceRows[i], item = items.get(row.prefab);
      if (seen.has(row.prefab)) fail(`${key}: duplicate material`);
      seen.add(row.prefab);
      if (!item || row.guid !== item.guid || row.guid !== allPrefabs[row.prefab] || row.path !== item.path ||
        row.title !== item.title || row.icon !== item.icon) fail(`${key}: material identity/destination differs`);
      if (row.prefab !== source.prefab || row.guid !== source.guid || row.amount !== source.amount ||
        row.sourceComponent !== blueprintMaterialComponent || row.sourcePath !== source.sourcePath ||
        !Number.isFinite(row.amount) || (row.amount ?? -1) < 0 || (key === "buildMaterials" && !row.amount)) {
        fail(`${key}: quantity/provenance differs from source`);
      }
    }
  }
}

/** Read only the named requirement buffer from an unchanged tracked document. */
export function readBlueprintMaterialDocument(prefabName: string, sourcePath: string, markdown: string): BlueprintMaterialDocument {
  const body = markdown.replace(/\r\n?|\n/g, "\n");
  const block = body.match(/^- \[ProjectM\.BlueprintRequirementBuffer\].*?(?=^- \[ProjectM\.|(?![\s\S]))/ms)?.[0];
  const components: BlueprintMaterialDocument["components"] = new Map();
  if (block) {
    const entries = block.split(/^- \*\*\[\d+\]\*\*/m).slice(1).map((row) => {
      const fields: Record<string, string> = {};
      for (const match of row.matchAll(/`([^:`]+):\s*([^`]+)`/g)) fields[match[1]] = match[2].trim();
      return fields;
    });
    components.set(blueprintMaterialComponent, { entries });
  }
  return { prefabName, sourcePath, components };
}
