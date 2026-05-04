import assert from "node:assert/strict";
import test from "node:test";
import {
  buildAbilityDamageEvidence,
  createAbilityPrefabGraphWalker,
  parseServerDamageEvidence,
  type AbilityDamagePrefabNode
} from "./ability-damage-evidence";
import type { TextVariableResolutionMap } from "../src/lib/textVariables";

function component(fields: Record<string, string> = {}, entries: Array<Record<string, string>> = []) {
  return { name: "TestComponent", fields, entries };
}

function prefab(prefabName: string, guid: number, components: AbilityDamagePrefabNode["components"]): AbilityDamagePrefabNode {
  return { prefabName, guid, components };
}

const damageEvidence = parseServerDamageEvidence({
  entries: [
    {
      key: "DealDamageOnGameplayEvent:1002",
      identity: { prefabGuid: 1002, prefabName: "AB_Test_Projectile" },
      quality: { interpretationStatus: "raw-unverified" },
      rawFields: {
        Parameters: {
          RawDamagePercent: 0.8,
          RawDamageValue: 0,
          MainFactor: 1,
          ResourceModifier: 1,
          StaggerFactor: 0,
          DealDamageFlags: 1065353216,
          MainType: "1065353216"
        },
        DamageModifierPerHit: 0,
        MultiplyMainFactorWithStacks: false
      }
    },
    {
      key: "DealDamageOnGameplayEvent:1004",
      identity: { prefabGuid: 1004, prefabName: "AB_Test_ZeroDamage_Hit" },
      quality: { interpretationStatus: "raw-unverified" },
      rawFields: { Parameters: { RawDamagePercent: 0, RawDamageValue: 0 } }
    },
    {
      key: "DealDamageOnGameplayEvent:1006",
      identity: { prefabGuid: 1006, prefabName: "AB_Test_Area" },
      quality: { interpretationStatus: "raw-unverified" },
      rawFields: { Parameters: { RawDamagePercent: 1.2, RawDamageValue: 0 } }
    },
    {
      key: "DealDamageOnGameplayEvent:1009",
      identity: { prefabGuid: 1009, prefabName: "AB_Test_MissingPercent" },
      quality: { interpretationStatus: "raw-unverified" },
      rawFields: { Parameters: { RawDamageValue: 0 } }
    }
  ]
});

test("walks ability prefab references within bounded effect prefixes", () => {
  const prefabs = new Map<string, AbilityDamagePrefabNode>([
    [
      "AB_Test_AbilityGroup",
      prefab(
        "AB_Test_AbilityGroup",
        1000,
        new Map([
          [
            "ProjectM.AbilityGroupStartAbilitiesBuffer",
            component({}, [{ PrefabGUID: "AB_Test_Cast PrefabGuid(1001)" }, { PrefabGUID: "Item_ShouldNotWalk PrefabGuid(9000)" }])
          ]
        ])
      )
    ],
    [
      "AB_Test_Cast",
      prefab("AB_Test_Cast", 1001, new Map([["ProjectM.AbilitySpawnPrefabOnCast", component({ SpawnPrefab: "AB_Test_Projectile PrefabGuid(1002)" })]]))
    ],
    ["AB_Test_Projectile", prefab("AB_Test_Projectile", 1002, new Map())]
  ]);

  const walker = createAbilityPrefabGraphWalker({ prefabs, maxDepth: 5, maxNodes: 80 });
  const walked = walker.walk("AB_Test_AbilityGroup");

  assert.deepEqual(
    walked.map((entry) => entry.prefab),
    ["AB_Test_AbilityGroup", "AB_Test_Cast", "AB_Test_Projectile"]
  );
});

test("resolves a single unresolved damage token when graph evidence has one positive raw percent", () => {
  const prefabs = new Map<string, AbilityDamagePrefabNode>([
    [
      "AB_Test_AbilityGroup",
      prefab(
        "AB_Test_AbilityGroup",
        1000,
        new Map([["ProjectM.AbilityGroupStartAbilitiesBuffer", component({}, [{ PrefabGUID: "AB_Test_Projectile PrefabGuid(1002)" }])]])
      )
    ],
    ["AB_Test_Projectile", prefab("AB_Test_Projectile", 1002, new Map())]
  ]);

  const result = buildAbilityDamageEvidence({
    abilityPrefab: "AB_Test_AbilityGroup",
    abilityCategories: ["Player Usable", "Spell"],
    description: "Launches a bolt dealing {damage} magic damage.",
    existingTextVariableValues: undefined,
    walker: createAbilityPrefabGraphWalker({ prefabs }),
    damageEvidence
  });

  assert.equal(result.runtimeDamageEvidence.length, 1);
  assert.deepEqual(result.textVariableValues, {
    damage: {
      value: "80%",
      sourceKind: "server-damage-evidence",
      sourceRef: "data/enrichment/server-ecs-component-evidence.json#DealDamageOnGameplayEvent:1002",
      sourceGuid: "1002",
      sourcePrefab: "AB_Test_Projectile"
    }
  } satisfies TextVariableResolutionMap);
});

test("does not resolve singleton damage tokens from zero raw percent evidence", () => {
  const prefabs = new Map<string, AbilityDamagePrefabNode>([
    [
      "AB_Test_ZeroDamage_AbilityGroup",
      prefab(
        "AB_Test_ZeroDamage_AbilityGroup",
        1003,
        new Map([["ProjectM.AbilityGroupStartAbilitiesBuffer", component({}, [{ PrefabGUID: "AB_Test_ZeroDamage_Hit PrefabGuid(1004)" }])]])
      )
    ],
    ["AB_Test_ZeroDamage_Hit", prefab("AB_Test_ZeroDamage_Hit", 1004, new Map())]
  ]);

  const result = buildAbilityDamageEvidence({
    abilityPrefab: "AB_Test_ZeroDamage_AbilityGroup",
    abilityCategories: ["Player Usable"],
    description: "Deals {damage} damage.",
    existingTextVariableValues: undefined,
    walker: createAbilityPrefabGraphWalker({ prefabs }),
    damageEvidence
  });

  assert.equal(result.runtimeDamageEvidence.length, 1);
  assert.equal(result.textVariableValues, undefined);
});

test("does not resolve damage tokens when graph evidence has multiple positive raw percents", () => {
  const prefabs = new Map<string, AbilityDamagePrefabNode>([
    [
      "AB_Test_MultiPercent_AbilityGroup",
      prefab(
        "AB_Test_MultiPercent_AbilityGroup",
        1005,
        new Map([
          [
            "ProjectM.AbilityGroupStartAbilitiesBuffer",
            component({}, [{ PrefabGUID: "AB_Test_Projectile PrefabGuid(1002)" }, { PrefabGUID: "AB_Test_Area PrefabGuid(1006)" }])
          ]
        ])
      )
    ],
    ["AB_Test_Projectile", prefab("AB_Test_Projectile", 1002, new Map())],
    ["AB_Test_Area", prefab("AB_Test_Area", 1006, new Map())]
  ]);

  const result = buildAbilityDamageEvidence({
    abilityPrefab: "AB_Test_MultiPercent_AbilityGroup",
    abilityCategories: ["Player Usable"],
    description: "Deals {damage} damage.",
    existingTextVariableValues: undefined,
    walker: createAbilityPrefabGraphWalker({ prefabs }),
    damageEvidence
  });

  assert.equal(result.runtimeDamageEvidence.length, 2);
  assert.equal(result.textVariableValues, undefined);
});

test("does not resolve multi-token damage text even when graph evidence is present", () => {
  const prefabs = new Map<string, AbilityDamagePrefabNode>([
    [
      "AB_Test_MultiToken_AbilityGroup",
      prefab(
        "AB_Test_MultiToken_AbilityGroup",
        1007,
        new Map([["ProjectM.AbilityGroupStartAbilitiesBuffer", component({}, [{ PrefabGUID: "AB_Test_Projectile PrefabGuid(1002)" }])]])
      )
    ],
    ["AB_Test_Projectile", prefab("AB_Test_Projectile", 1002, new Map())]
  ]);

  const result = buildAbilityDamageEvidence({
    abilityPrefab: "AB_Test_MultiToken_AbilityGroup",
    abilityCategories: ["Player Usable"],
    description: "Deals {damage} damage and {bonusdamage} bonus damage.",
    existingTextVariableValues: undefined,
    walker: createAbilityPrefabGraphWalker({ prefabs }),
    damageEvidence
  });

  assert.equal(result.runtimeDamageEvidence.length, 1);
  assert.equal(result.textVariableValues, undefined);
});

test("does not resolve singleton damage tokens when any graph damage evidence lacks a raw percent", () => {
  const prefabs = new Map<string, AbilityDamagePrefabNode>([
    [
      "AB_Test_MissingPercent_AbilityGroup",
      prefab(
        "AB_Test_MissingPercent_AbilityGroup",
        1008,
        new Map([
          [
            "ProjectM.AbilityGroupStartAbilitiesBuffer",
            component({}, [{ PrefabGUID: "AB_Test_Projectile PrefabGuid(1002)" }, { PrefabGUID: "AB_Test_MissingPercent PrefabGuid(1009)" }])
          ]
        ])
      )
    ],
    ["AB_Test_Projectile", prefab("AB_Test_Projectile", 1002, new Map())],
    ["AB_Test_MissingPercent", prefab("AB_Test_MissingPercent", 1009, new Map())]
  ]);

  const result = buildAbilityDamageEvidence({
    abilityPrefab: "AB_Test_MissingPercent_AbilityGroup",
    abilityCategories: ["Player Usable"],
    description: "Deals {damage} damage.",
    existingTextVariableValues: undefined,
    walker: createAbilityPrefabGraphWalker({ prefabs }),
    damageEvidence
  });

  assert.equal(result.runtimeDamageEvidence.length, 2);
  assert.equal(result.textVariableValues, undefined);
});

test("preserves every damage evidence entry for the same prefab", () => {
  const duplicateDamageEvidence = parseServerDamageEvidence({
    entries: [
      {
        key: "DealDamageOnGameplayEvent:1002",
        identity: { prefabGuid: 1002, prefabName: "AB_Test_Projectile" },
        quality: { interpretationStatus: "raw-unverified" },
        rawFields: { Parameters: { RawDamagePercent: 0.8, RawDamageValue: 0 } }
      },
      {
        key: "DealDamageOnGameplayEvent:1010",
        identity: { prefabGuid: 1002, prefabName: "AB_Test_Projectile" },
        quality: { interpretationStatus: "raw-unverified" },
        rawFields: { Parameters: { RawDamagePercent: 1.4, RawDamageValue: 0 } }
      }
    ]
  });
  const prefabs = new Map<string, AbilityDamagePrefabNode>([
    [
      "AB_Test_DuplicateEvidence_AbilityGroup",
      prefab(
        "AB_Test_DuplicateEvidence_AbilityGroup",
        1011,
        new Map([["ProjectM.AbilityGroupStartAbilitiesBuffer", component({}, [{ PrefabGUID: "AB_Test_Projectile PrefabGuid(1002)" }])]])
      )
    ],
    ["AB_Test_Projectile", prefab("AB_Test_Projectile", 1002, new Map())]
  ]);

  const result = buildAbilityDamageEvidence({
    abilityPrefab: "AB_Test_DuplicateEvidence_AbilityGroup",
    abilityCategories: ["Player Usable"],
    description: "Deals {damage} damage.",
    existingTextVariableValues: undefined,
    walker: createAbilityPrefabGraphWalker({ prefabs }),
    damageEvidence: duplicateDamageEvidence
  });

  assert.equal(result.runtimeDamageEvidence.length, 2);
  assert.deepEqual(
    result.runtimeDamageEvidence.map((entry) => entry.sourceRef),
    [
      "data/enrichment/server-ecs-component-evidence.json#DealDamageOnGameplayEvent:1002",
      "data/enrichment/server-ecs-component-evidence.json#DealDamageOnGameplayEvent:1010"
    ]
  );
  assert.equal(result.textVariableValues, undefined);
});

test("does not auto-resolve absorb, reduction, or factor-style damage tokens", () => {
  const prefabs = new Map<string, AbilityDamagePrefabNode>([
    [
      "AB_Test_DamageAbsorb_AbilityGroup",
      prefab(
        "AB_Test_DamageAbsorb_AbilityGroup",
        1012,
        new Map([["ProjectM.AbilityGroupStartAbilitiesBuffer", component({}, [{ PrefabGUID: "AB_Test_Area PrefabGuid(1006)" }])]])
      )
    ],
    ["AB_Test_Area", prefab("AB_Test_Area", 1006, new Map())]
  ]);

  for (const description of ["Absorbs {damageabsorb} incoming damage.", "Reduces incoming hits by {damagereduction}.", "Scales by {damagefactor}."]) {
    const result = buildAbilityDamageEvidence({
      abilityPrefab: "AB_Test_DamageAbsorb_AbilityGroup",
      abilityCategories: ["Player Usable"],
      description,
      existingTextVariableValues: undefined,
      walker: createAbilityPrefabGraphWalker({ prefabs }),
      damageEvidence
    });

    assert.equal(result.runtimeDamageEvidence.length, 1);
    assert.equal(result.textVariableValues, undefined);
  }
});
