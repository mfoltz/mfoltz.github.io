import { slugFromRelativePath } from "../src/lib/slug";

export const blueprintUnlockMapSourceKind = "prefab-blueprint-unlock-map" as const;

export const blueprintUnlockSourceComponents = [
  "ProjectM.ProgressionBookBlueprintElement",
  "ProjectM.TechUnlockBlueprintBuffer"
] as const;

export type BlueprintUnlockSourceComponent = (typeof blueprintUnlockSourceComponents)[number];

export const blueprintUnlockSourceTypes = [
  "journalReward",
  "vBloodTech",
  "dlcTech",
  "frameworkTech",
  "techCollection",
  "technology",
  "unknownSourceShape"
] as const;

export type BlueprintUnlockSourceType = (typeof blueprintUnlockSourceTypes)[number];

export interface BlueprintUnlockComponent {
  entries: Array<Record<string, string>>;
}

export interface BlueprintUnlockDocument {
  prefabName: string;
  guid: number | null;
  sourcePath: string;
  components: Map<string, BlueprintUnlockComponent | undefined>;
}

export interface BlueprintUnlockSource {
  sourcePrefab: string;
  sourceGuid: number | null;
  sourcePath: string;
  sourceComponent: BlueprintUnlockSourceComponent;
  sourceType: BlueprintUnlockSourceType;
  sourceTypeLabel: string;
  targetBlueprintPrefab: string;
  targetBlueprintGuid: number;
  requiredBooks?: BlueprintBookRequirement[];
}

export interface BlueprintBookRequirement {
  prefab: string;
  guid: number;
  amount?: number;
  sourceComponent: "ProjectM.TechItemRequirementBuffer";
}

export interface BlueprintUnlockMapEntry {
  prefab: string;
  guid: number;
  unlockSourceTypes: BlueprintUnlockSourceType[];
  unlockSourceTypeLabels: string[];
  unlockSourceTypeCounts: Partial<Record<BlueprintUnlockSourceType, number>>;
  unlockSources: BlueprintUnlockSource[];
}

export interface BlueprintUnlockMapSnapshot {
  schemaVersion: 1;
  sourceKind: typeof blueprintUnlockMapSourceKind;
  sourceRefs: string[];
  targetRowCount: number;
  unlockSourceTypeCounts: Partial<Record<BlueprintUnlockSourceType, number>>;
  entriesByPrefab: Record<string, BlueprintUnlockMapEntry>;
}

const sourceFieldsByComponent: Record<BlueprintUnlockSourceComponent, string[]> = {
  "ProjectM.ProgressionBookBlueprintElement": ["Blueprint"],
  "ProjectM.TechUnlockBlueprintBuffer": ["Guid"]
};

export const sourceTypeLabels: Record<BlueprintUnlockSourceType, string> = {
  journalReward: "Journal reward",
  vBloodTech: "V Blood tech",
  dlcTech: "DLC tech",
  frameworkTech: "Framework tech",
  techCollection: "Tech collection",
  technology: "Technology",
  unknownSourceShape: "Unknown source shape"
};

export function blueprintUnlockSourcePath(sourcePath: string): string {
  if (!sourcePath.startsWith("content/prefabs/") || !sourcePath.endsWith(".md") || sourcePath.includes("..")) {
    throw new Error(`Invalid blueprint unlock source path: ${sourcePath}`);
  }
  return `/prefabs/${slugFromRelativePath(sourcePath.slice("content/prefabs/".length))}`;
}

function parsePrefabReference(value: string | undefined): { prefab: string; guid: number } | null {
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

function compareUnlockSources(a: BlueprintUnlockSource, b: BlueprintUnlockSource): number {
  return (
    a.sourcePrefab.localeCompare(b.sourcePrefab) ||
    a.sourceComponent.localeCompare(b.sourceComponent) ||
    a.targetBlueprintPrefab.localeCompare(b.targetBlueprintPrefab)
  );
}

function classifyUnlockSource(doc: BlueprintUnlockDocument, sourceComponent: BlueprintUnlockSourceComponent): BlueprintUnlockSourceType {
  const sourcePrefab = doc.prefabName;
  if (sourceComponent === "ProjectM.ProgressionBookBlueprintElement" && sourcePrefab.startsWith("Journal_Reward_")) {
    return "journalReward";
  }

  if (sourceComponent === "ProjectM.TechUnlockBlueprintBuffer" && sourcePrefab.startsWith("Tech_Collection_")) {
    if (/_VBlood_/i.test(sourcePrefab)) {
      return "vBloodTech";
    }
    if (/_DLC_/i.test(sourcePrefab)) {
      return "dlcTech";
    }
    if (/^Tech_Collection_Framework_/i.test(sourcePrefab)) {
      return "frameworkTech";
    }
    return "techCollection";
  }

  if (sourceComponent === "ProjectM.TechUnlockBlueprintBuffer" && doc.components.has("ProjectM.TechData")) {
    return "technology";
  }

  return "unknownSourceShape";
}

function findRequiredBooks(doc: BlueprintUnlockDocument, docs: Map<string, BlueprintUnlockDocument>): BlueprintBookRequirement[] {
  if (!doc.components.has("ProjectM.TechData")) return [];
  const books = new Map<string, BlueprintBookRequirement>();
  for (const entry of doc.components.get("ProjectM.TechItemRequirementBuffer")?.entries ?? []) {
    const ref = parsePrefabReference(entry.Guid);
    if (!ref || !ref.prefab.startsWith("Item_Ingredient_Book_")) continue;
    const target = docs.get(ref.prefab);
    if (target?.guid !== ref.guid || !target.components.has("ProjectM.ItemData")) continue;
    const amount = /^\d+$/.test(entry.Stacks?.trim() ?? "") ? Number(entry.Stacks) : undefined;
    books.set(`${ref.prefab}|${amount ?? "unknown"}`, {
      ...ref, ...(amount !== undefined && Number.isSafeInteger(amount) && amount > 0 ? { amount } : {}),
      sourceComponent: "ProjectM.TechItemRequirementBuffer"
    });
  }
  return [...books.values()].sort((a, b) => a.prefab.localeCompare(b.prefab));
}

function countSourceTypes(sources: BlueprintUnlockSource[]): Partial<Record<BlueprintUnlockSourceType, number>> {
  const counts: Partial<Record<BlueprintUnlockSourceType, number>> = {};
  for (const source of sources) {
    counts[source.sourceType] = (counts[source.sourceType] ?? 0) + 1;
  }
  return Object.fromEntries(Object.entries(counts).sort(([a], [b]) => a.localeCompare(b))) as Partial<Record<BlueprintUnlockSourceType, number>>;
}

function uniqueSourceTypes(sources: BlueprintUnlockSource[]): BlueprintUnlockSourceType[] {
  return [...new Set(sources.map((source) => source.sourceType))].sort((a, b) => sourceTypeLabels[a].localeCompare(sourceTypeLabels[b]));
}

export function buildBlueprintUnlockMapSnapshot(options: {
  docs: BlueprintUnlockDocument[];
  blueprintPrefabs: Map<string, number>;
  sourceRefs?: string[];
}): BlueprintUnlockMapSnapshot {
  const entries = new Map<string, BlueprintUnlockMapEntry>();
  const sourceKeys = new Set<string>();
  const docsByPrefab = new Map(options.docs.map((doc) => [doc.prefabName, doc]));

  for (const doc of options.docs) {
    for (const sourceComponent of blueprintUnlockSourceComponents) {
      const component = doc.components.get(sourceComponent);
      if (!component) {
        continue;
      }

      for (const entry of component.entries) {
        for (const field of sourceFieldsByComponent[sourceComponent]) {
          const target = parsePrefabReference(entry[field]);
          if (!target) {
            continue;
          }

          const targetGuid = options.blueprintPrefabs.get(target.prefab);
          if (targetGuid === undefined || targetGuid !== target.guid) {
            continue;
          }

          const sourceKey = [
            doc.prefabName,
            doc.guid ?? "",
            doc.sourcePath,
            sourceComponent,
            target.prefab,
            target.guid
          ].join("|");
          if (sourceKeys.has(sourceKey)) {
            continue;
          }
          sourceKeys.add(sourceKey);

          const existing = entries.get(target.prefab) ?? {
            prefab: target.prefab,
            guid: target.guid,
            unlockSourceTypes: [],
            unlockSourceTypeLabels: [],
            unlockSourceTypeCounts: {},
            unlockSources: []
          };
          const sourceType = classifyUnlockSource(doc, sourceComponent);
          const requiredBooks = sourceComponent === "ProjectM.TechUnlockBlueprintBuffer" ? findRequiredBooks(doc, docsByPrefab) : [];
          existing.unlockSources.push({
            sourcePrefab: doc.prefabName,
            sourceGuid: doc.guid,
            sourcePath: doc.sourcePath,
            sourceComponent,
            sourceType,
            sourceTypeLabel: sourceTypeLabels[sourceType],
            targetBlueprintPrefab: target.prefab,
            targetBlueprintGuid: target.guid,
            ...(requiredBooks.length ? { requiredBooks } : {})
          });
          entries.set(target.prefab, existing);
        }
      }
    }
  }

  const entriesByPrefab: Record<string, BlueprintUnlockMapEntry> = {};
  for (const [prefab, entry] of [...entries.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    const unlockSources = entry.unlockSources.sort(compareUnlockSources);
    const unlockSourceTypes = uniqueSourceTypes(unlockSources);
    entriesByPrefab[prefab] = {
      ...entry,
      unlockSourceTypes,
      unlockSourceTypeLabels: unlockSourceTypes.map((type) => sourceTypeLabels[type]),
      unlockSourceTypeCounts: countSourceTypes(unlockSources),
      unlockSources
    };
  }

  const allUnlockSources = Object.values(entriesByPrefab).flatMap((entry) => entry.unlockSources);

  return {
    schemaVersion: 1,
    sourceKind: blueprintUnlockMapSourceKind,
    sourceRefs: options.sourceRefs ?? ["content/prefabs"],
    targetRowCount: options.blueprintPrefabs.size,
    unlockSourceTypeCounts: countSourceTypes(allUnlockSources),
    entriesByPrefab
  };
}
