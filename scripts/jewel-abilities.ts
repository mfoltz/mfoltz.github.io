import assert from "node:assert/strict";
import type { DbEntityDetail, DbRelatedEntityRef } from "../src/types/db";
import { isSafeSlug } from "../src/lib/slug";

export const jewelAbilityComponent = "ProjectM.Shared.JewelInstance.OverrideAbilityType";
export interface JewelAbilityDocument {
  prefabName: string;
  guid: number | null;
  sourcePath: string;
  overrideAbilityType?: string;
}
export interface JewelAbilityDestination extends DbRelatedEntityRef {
  slug: string;
  path: string;
}
export type JewelAbilityLookup = ReadonlyMap<string, readonly JewelAbilityDestination[]>;
type JewelAbilityAssociation = Required<Pick<DbEntityDetail,
  "jewelAbilityStatus" | "associatedAbilities" | "jewelAbilitySourceKind" | "jewelAbilitySourceComponent" | "jewelAbilitySourceRef">>;

/** Keep duplicate destinations visible so an ambiguous source identity cannot become a link. */
export function indexJewelAbilityDestinations(destinations: JewelAbilityDestination[]): JewelAbilityLookup {
  const lookup = new Map<string, JewelAbilityDestination[]>();
  for (const destination of destinations) {
    const entries = lookup.get(destination.prefab) ?? [];
    entries.push(destination);
    lookup.set(destination.prefab, entries);
  }
  return lookup;
}

/** Promote only the recorded override field, with exact item and ability identities. */
export function buildJewelAbility(doc: JewelAbilityDocument, abilities: JewelAbilityLookup,
  allPrefabs: Record<string, number>): JewelAbilityAssociation {
  assert(Number.isSafeInteger(doc.guid) && doc.guid === allPrefabs[doc.prefabName], `${doc.prefabName}: jewel identity mismatch`);
  assert.equal(doc.sourcePath, `content/prefabs/${doc.prefabName}.md`, `${doc.prefabName}: jewel source path mismatch`);
  const provenance = { jewelAbilitySourceKind: "prefab-component" as const,
    jewelAbilitySourceComponent: jewelAbilityComponent, jewelAbilitySourceRef: doc.sourcePath };
  const raw = doc.overrideAbilityType?.trim();
  if (!raw || raw === "GUID Not Found") return { ...provenance, jewelAbilityStatus: "unrecorded", associatedAbilities: [] };
  const match = raw.match(/^([A-Za-z0-9_]+)\s+PrefabGuid\((-?\d+)\)$/);
  assert(match, `${doc.prefabName}: malformed jewel ability reference`);
  const prefab = match[1], guid = Number(match[2]);
  const targets = abilities.get(prefab) ?? [];
  assert.equal(targets.length, 1, `${doc.prefabName}: missing or ambiguous ability destination: ${prefab}`);
  const target = targets[0];
  assert(Number.isSafeInteger(guid) && guid === allPrefabs[prefab] && guid === target.guid && target.prefab === prefab,
    `${doc.prefabName}: ability identity mismatch: ${prefab}`);
  assert(isSafeSlug(target.slug) && target.path === `/db/abilities/${target.slug}`, `${doc.prefabName}: ability route mismatch`);
  return { ...provenance, jewelAbilityStatus: "recorded", associatedAbilities: [{
    title: target.title, prefab, guid, slug: target.slug, path: target.path, icon: target.icon,
    sourceComponent: jewelAbilityComponent, sourcePath: doc.sourcePath
  }] };
}

/** Re-read the tracked document independently of the database generator's component parser. */
export function readJewelAbilityDocument(sourcePath: string, markdown: string): JewelAbilityDocument {
  const body = markdown.replace(/\r\n?|\n/g, "\n");
  const block = body.match(/^- \[ProjectM\.Shared\.JewelInstance\].*?(?=^- \[|(?![\s\S]))/ms)?.[0] ?? "";
  const fields = [...block.matchAll(/`OverrideAbilityType:\s*([^`]+)`/g)];
  assert(fields.length <= 1, `${sourcePath}: duplicate jewel override fields`);
  const guid = body.match(/^guid:\s*(-?\d+)\s*$/m)?.[1];
  return { prefabName: body.match(/^title:\s*([^\n]+)$/m)?.[1].trim() ?? "", guid: guid ? Number(guid) : null,
    sourcePath, overrideAbilityType: fields[0]?.[1].trim() };
}

export function validateJewelAbility(detail: DbEntityDetail, doc: JewelAbilityDocument,
  abilities: JewelAbilityLookup, allPrefabs: Record<string, number>): void {
  assert.equal(detail.prefab, doc.prefabName, `${detail.slug}: jewel source prefab mismatch`);
  assert.equal(detail.guid, doc.guid, `${detail.slug}: jewel source GUID mismatch`);
  const expected = buildJewelAbility(doc, abilities, allPrefabs);
  for (const key of ["jewelAbilityStatus", "jewelAbilitySourceKind", "jewelAbilitySourceComponent", "jewelAbilitySourceRef"] as const) {
    assert.equal(detail[key], expected[key], `${detail.prefab}: ${key} differs from source`);
  }
  const rows = detail.associatedAbilities;
  assert(Array.isArray(rows), `${detail.prefab}: missing associatedAbilities`);
  assert.equal(rows.length, expected.associatedAbilities.length, `${detail.prefab}: ability association count differs`);
  expected.associatedAbilities.forEach((source, i) => {
    for (const key of ["title", "prefab", "guid", "slug", "path", "icon", "sourceComponent", "sourcePath"] as const) {
      assert.equal(rows[i][key], source[key], `${detail.prefab}: associated ability ${key} differs from source`);
    }
  });
  assert.equal(detail.overrideAbilityPrefab, rows[0]?.prefab, `${detail.prefab}: override prefab differs from source`);
}
