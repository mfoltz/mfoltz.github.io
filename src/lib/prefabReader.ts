import { slugFromRelativePath } from "./slug";

export interface PrefabReaderSource {
  id: string;
  label: string;
  format: "markdown" | "dump";
  filename: string;
  sourcePath: string;
  sha256: string;
  text: string;
}

export interface PrefabReaderComponent {
  name: string;
  text: string;
  isBuffer: boolean;
  path?: string;
}

// Purpose-based defaults only: never infer usefulness from the stored values,
// a namespace prefix, or the presence of a buffer on an unfamiliar component.
const initiallyFoldedNames = new Set([
  "ProjectM.Network.Networked",
  "ProjectM.Network.UpToDateUserBitMask",
  "ProjectM.Network.FrameChanged",
  "ProjectM.Network.NetworkSnapshot",
  "ProjectM.Network.NetworkId",
  "ProjectM.Network.NetSnapshot",
  "ProjectM.Network.SnapshotFrameChangedBuffer",
  "ProjectM.Network.SyncToUserBitMask",
  "ProjectM.Network.SyncToUserBuffer",
  "ProjectM.Network.NetworkInterpolated_Shared",
  "Unity.Physics.Systems.StaticPhysicsWorldBodyIndex"
]);

// These exact types expose a byte Value field in their repository declarations.
// They are transport snapshots, distinct from the corresponding gameplay buffers.
const serializedSnapshotNames = new Set([
  "ProjectM.Network.Snapshot_AbilityChargeCooldowns",
  "ProjectM.Network.Snapshot_AbilityStateBuffer",
  "ProjectM.Network.Snapshot_AchievementInProgressElement",
  "ProjectM.Network.Snapshot_ActiveServantMission",
  "ProjectM.Network.Snapshot_AllyPermission",
  "ProjectM.Network.Snapshot_BloodHuntBuffer",
  "ProjectM.Network.Snapshot_CastleBuildingAttachedChildrenBuffer",
  "ProjectM.Network.Snapshot_CastleBuildingAttachToParentsBuffer",
  "ProjectM.Network.Snapshot_CastleBuildingFusedChildrenBuffer",
  "ProjectM.Network.Snapshot_CastleMemberNames",
  "ProjectM.Network.Snapshot_CastleTeleporterElement",
  "ProjectM.Network.Snapshot_CastleTerritoryDecay",
  "ProjectM.Network.Snapshot_CastleTerritoryOccupant",
  "ProjectM.Network.Snapshot_ClanMemberStatus",
  "ProjectM.Network.Snapshot_FollowerBuffer",
  "ProjectM.Network.Snapshot_InventoryBuffer",
  "ProjectM.Network.Snapshot_InventoryInstanceElement",
  "ProjectM.Network.Snapshot_LearnablePassivesBuffer",
  "ProjectM.Network.Snapshot_MegaStaticDestroyedBuffer",
  "ProjectM.Network.Snapshot_MegaStaticPrefabBuffer",
  "ProjectM.Network.Snapshot_MusicPlayerStation_PlaylistElement",
  "ProjectM.Network.Snapshot_MusicPlayerStation_UnlockedTrackElement",
  "ProjectM.Network.Snapshot_PerksBuffer",
  "ProjectM.Network.Snapshot_ProgressionBookBlueprintElement",
  "ProjectM.Network.Snapshot_ProgressionBookRecipeElement",
  "ProjectM.Network.Snapshot_ProgressionBookShapeshiftElement",
  "ProjectM.Network.Snapshot_ProgressionBookTechElement",
  "ProjectM.Network.Snapshot_QueuedWorkstationCraftAction",
  "ProjectM.Network.Snapshot_RefinementstationRecipesBuffer",
  "ProjectM.Network.Snapshot_ResearchBuffer",
  "ProjectM.Network.Snapshot_RespawnPointOwnerBuffer",
  "ProjectM.Network.Snapshot_Script_Dracula_WarpRiftTargetData",
  "ProjectM.Network.Snapshot_Script_LightningProjectile_Nodes",
  "ProjectM.Network.Snapshot_ShardBossHuntBuffer",
  "ProjectM.Network.Snapshot_SpawnedUnitsBuffer",
  "ProjectM.Network.Snapshot_TradeCost",
  "ProjectM.Network.Snapshot_TradeOutput",
  "ProjectM.Network.Snapshot_TraderEntry",
  "ProjectM.Network.Snapshot_UnlockedSpellBookAbility",
  "ProjectM.Network.Snapshot_UnlockedWaypointElement",
  "ProjectM.Network.Snapshot_UserMapZoneElement"
]);
const knownBufferNames = new Set([
  ...serializedSnapshotNames,
  "ProjectM.Network.NetSnapshot", "ProjectM.Network.SnapshotFrameChangedBuffer", "ProjectM.Network.SyncToUserBuffer"
]);
const knownTagNames = new Set([
  "Unity.Entities.SpawnTag", "Unity.Entities.Prefab", "Unity.Entities.Simulate", "ProjectM.Network.NetworkSnapshotType"
]);

function startsCollapsed(name: string): boolean {
  return initiallyFoldedNames.has(name) || serializedSnapshotNames.has(name);
}

// Both legacy relrefs and newer direct links occur in the source corpus.
// Only repository component destinations become definition links.
export function parsePrefabComponentHeading(line: string): { name: string; path?: string; notice?: string } | undefined {
  const linked = line.match(/^- \[(.+?)\]\((.+)\)\s*$/);
  if (linked) {
    const target = linked[2].match(/^\{\{%\s*relref\s*"([^"]+)"\s*%\}\}$/)?.[1] ?? linked[2];
    const componentFile = target.replace(/\\/g, "/").match(/^\/?components\/(.+)$/)?.[1];
    return { name: linked[1], path: componentFile ? `/components/${slugFromRelativePath(componentFile)}` : undefined };
  }
  const bold = line.match(/^- \*\*(.+?)\*\*$/)?.[1];
  // Bold also wraps buffer indices, truncation notices and corrupt field output.
  // A component without a definition link still has a qualified type name.
  const type = bold?.match(/^([A-Za-z_]\w*(?:[.+][A-Za-z_]\w*)+)( isn't handled)?$/);
  return type ? { name: type[1], ...(type[2] ? { notice: bold } : {}) } : undefined;
}

export function defaultCollapsedComponents(components: PrefabReaderComponent[]): Set<number> {
  return new Set(components.flatMap((component, index) =>
    component.text.trim() && startsCollapsed(component.name) ? [index] : []
  ));
}

export function componentReadingHint(component: PrefabReaderComponent): string {
  if (component.isBuffer) {
    const count = component.text.match(/^\s*\[\d+\]\s*$/gm)?.length ?? 0;
    return /total elements but only showing/.test(component.text)
      ? `Buffer · ${count} recorded`
      : `Buffer · ${count} ${count === 1 ? "entry" : "entries"}`;
  }
  if (!component.text.trim()) return knownTagNames.has(component.name) ? "Tag" : "No recorded fields";
  if (component.name === "Unity.Physics.Systems.StaticPhysicsWorldBodyIndex") return "Physics index";
  return startsCollapsed(component.name) ? "Network state" : "";
}

// Only presentation markers are removed. Unrecognized lines stay visible;
// the original source string is kept separately for lossless copy/download.
export function parsePrefabReader(text: string, format: PrefabReaderSource["format"]): PrefabReaderComponent[] {
  const components: PrefabReaderComponent[] = [];
  let current: PrefabReaderComponent | undefined;
  for (const raw of text.split(/\r\n|\r|\n/)) {
    const dumpName = format === "dump" ? raw.match(/^ {2}(\S.*)$/)?.[1] : undefined;
    const heading = format === "markdown" ? parsePrefabComponentHeading(raw) : dumpName ? { name: dumpName } : undefined;
    if (heading) {
      current = { name: heading.name, path: "path" in heading ? heading.path : undefined, text: "notice" in heading && heading.notice ? heading.notice + "\n" : "", isBuffer: knownBufferNames.has(heading.name) };
      components.push(current);
      continue;
    }
    if (!current) continue;
    let line = raw;
    if (format === "markdown") {
      // Markdown export spacing is presentation; the untouched source is retained separately.
      if (!line.trim()) continue;
      line = line.replace(/^(\s*)- `(.*)`$/, "$1$2");
      line = line.replace(/^(\s*)- \*\*(.+)\*\*$/, (_, indent: string, value: string) => (indent || "  ") + value);
    } else if (line.startsWith("  ")) {
      line = line.slice(2);
    }
    if (/^\s*\[\d+\]\s*$/.test(line)) current.isBuffer = true;
    current.text += line + "\n";
  }
  return components.map(component => ({ ...component, text: component.text.replace(/^(?:\s*\n)+|(?:\s*\n)+$/g, "") }));
}

export function matchingComponents(components: PrefabReaderComponent[], query: string): number[] {
  const normalized = query.trim().toLowerCase();
  return normalized ? components.flatMap((component, index) =>
    (component.name + "\n" + component.text).toLowerCase().includes(normalized) ? [index] : []
  ) : [];
}
