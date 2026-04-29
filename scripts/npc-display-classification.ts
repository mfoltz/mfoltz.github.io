export const npcDisplayRelatedCategories = new Set(["CHAR", "Creature", "Servant", "Vampire", "Critter"]);

export type NpcDisplayBucket =
  | "true-char-npc"
  | "server-known-npc"
  | "npc-component-evidence"
  | "client-canonical-only"
  | "ragdoll"
  | "servant-system"
  | "vampire-player-castle-system"
  | "technical-prefab"
  | "non-npc-category";

export interface NpcDisplayCandidateInput {
  prefabName: string;
  categories?: readonly string[];
  body?: string;
  serverKnown?: boolean;
  clientCanonical?: boolean;
}

export interface NpcDisplayClassification {
  eligible: boolean;
  bucket: NpcDisplayBucket;
  reason: string;
}

const charNpcPattern = /^(?:CHAR|Char)_/;
const ragdollPattern = /Ragdoll/i;
const servantSystemPattern = /^Servant(?:Mission|Injury|CoffinBuildMenuGroup|ComponentsTemplate)/i;
const vampireSystemPattern =
  /^(?:Vampire_|VampireCastle|VampireCombatPreset|VampireCoffin|VampireDoor|VampireFemale|VampireMale|VampirePalisade|VampirePillar|VampireHunter)/i;
const technicalPrefabPattern =
  /(?:^|_)(?:BuildMenuGroup|Collection|Curve|Template)$|(?:_Curve$)|(?:^|_)(?:Door|Frame|Pillar|Wall)\d*(?:_|$)/i;
const npcComponentSignals = [
  "ProjectM.AggroConsumer",
  "ProjectM.Aggroable",
  "ProjectM.AiMove_",
  "ProjectM.AiMoveSpeeds",
  "ProjectM.BloodConsumeSource",
  "ProjectM.ServantConvertable",
  "ProjectM.UnitLevel",
  "ProjectM.UnitRespawnTime",
  "ProjectM.UnitSpawnData",
  "ProjectM.UnitStats",
  "ProjectM.VBlood",
  "ProjectM.YieldEssenceOnDeath"
];

export function isNpcDisplayRelatedCategory(category: string): boolean {
  return npcDisplayRelatedCategories.has(category);
}

export function hasNpcGameplayComponentEvidence(body: string | undefined): boolean {
  return Boolean(body && npcComponentSignals.some((signal) => body.includes(signal)));
}

export function classifyNpcDisplayCandidate(input: NpcDisplayCandidateInput): NpcDisplayClassification {
  const prefabName = input.prefabName.trim();
  const categories = input.categories ?? [];
  const hasRelatedCategory = categories.some(isNpcDisplayRelatedCategory);

  if (!prefabName) {
    return { eligible: false, bucket: "technical-prefab", reason: "missing prefab name" };
  }

  if (ragdollPattern.test(prefabName)) {
    return { eligible: false, bucket: "ragdoll", reason: "ragdoll prefab" };
  }

  if (servantSystemPattern.test(prefabName)) {
    return { eligible: false, bucket: "servant-system", reason: "servant system prefab" };
  }

  if (vampireSystemPattern.test(prefabName)) {
    return { eligible: false, bucket: "vampire-player-castle-system", reason: "vampire player or castle system prefab" };
  }

  if (technicalPrefabPattern.test(prefabName)) {
    return { eligible: false, bucket: "technical-prefab", reason: "technical support prefab" };
  }

  if (charNpcPattern.test(prefabName)) {
    return { eligible: true, bucket: "true-char-npc", reason: "CHAR-prefixed gameplay NPC prefab" };
  }

  if (input.serverKnown) {
    return { eligible: true, bucket: "server-known-npc", reason: "matched server NPC model row" };
  }

  if (input.clientCanonical) {
    return { eligible: true, bucket: "client-canonical-only", reason: "matched client canonical overlay row" };
  }

  if (!hasRelatedCategory) {
    return { eligible: false, bucket: "non-npc-category", reason: "no NPC category or component evidence" };
  }

  if (hasNpcGameplayComponentEvidence(input.body)) {
    return { eligible: true, bucket: "npc-component-evidence", reason: "matched NPC gameplay component evidence" };
  }

  return { eligible: false, bucket: "technical-prefab", reason: "broad NPC-adjacent category without gameplay evidence" };
}

export function isNpcDisplayCandidateDoc(input: NpcDisplayCandidateInput): boolean {
  return classifyNpcDisplayCandidate(input).eligible;
}
