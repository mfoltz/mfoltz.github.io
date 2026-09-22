import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import test from "node:test";
import { componentReadingHint, defaultCollapsedComponents, matchingComponents, parsePrefabComponentHeading, parsePrefabReader } from "./prefabReader";

const dump = readFileSync(new URL("../../data/reference-samples/ambient-lightning-light.txt", import.meta.url), "utf8");
const markdown = readFileSync(new URL("../../content/prefabs/AB_AmbientLightning_Light.md", import.meta.url), "utf8");

test("supplied dump remains byte-identical and contains all components, tags, indices and bitmask lines", () => {
  assert.equal(createHash("sha256").update(dump).digest("hex"), "28a7d13ed6a5437d208f90043a51963fe5d5536bf848ec26df4ef23065ecc073");
  const components = parsePrefabReader(dump, "dump");
  assert.equal(components.length, 22);
  assert.equal(components[0].name, "ProjectM.EntityOwner");
  assert.equal(components[components.length - 1]?.name, "ProjectM.Network.NetworkSnapshotType");
  const mask = components.find(component => component.name.endsWith("UpToDateUserBitMask"))!;
  assert.equal(mask.text.match(/0{32}/g)?.length, 4);
  const buffer = components.find(component => component.name === "ProjectM.Network.NetSnapshot")!;
  assert.equal(buffer.text.match(/^\s*\[\d+\]/gm)?.length, 28);
  assert.match(buffer.text, /\[4\]\s+Value: 178/);
  assert.equal(components.filter(component => !component.text).length, 4);
});

test("repository reader retains its own source values and multiline continuations", () => {
  const components = parsePrefabReader(markdown, "markdown");
  assert.equal(components.length, 22);
  assert.equal(components.find(component => component.name.endsWith("UpToDateUserBitMask"))?.text.match(/0{32}/g)?.length, 4);
  assert.match(components.find(component => component.name === "ProjectM.Network.NetSnapshot")!.text, /\[4\]\s+Value: 176/);
  assert.equal(components.filter(component => !component.text).length, 4);
});

test("reading preserves sparse array indices and unrecognized content instead of discarding it", () => {
  const components = parsePrefabReader('Prefab Test\nComponents\n  ProjectM.Buffer\n   [7]\n    Value: false\n   [42]\n    Value: 0\nopaque continuation\n  ProjectM.Tag\n', "dump");
  assert.equal(components.length, 2);
  assert.match(components[0].text, /\[7\]/);
  assert.match(components[0].text, /\[42\]/);
  assert.match(components[0].text, /opaque continuation/);
  assert.deepEqual(matchingComponents(components, "false"), [0]);
  assert.deepEqual(matchingComponents(components, "projectm.tag"), [1]);
  assert.deepEqual(matchingComponents(components, "missing"), []);
  assert.equal(componentReadingHint(components[0]), "Buffer · 2 entries");
  assert.equal(defaultCollapsedComponents(components).size, 0);
});

test("reading defaults fold known network state while leaving unfamiliar and default-valued fields open", () => {
  for (const [source, format] of [[dump, "dump"], [markdown, "markdown"]] as const) {
    const components = parsePrefabReader(source, format);
    const closed = defaultCollapsedComponents(components);
    const isClosed = (name: string) => closed.has(components.findIndex(component => component.name === name));
    assert.equal(isClosed("ProjectM.LifeTime"), false);
    assert.equal(isClosed("ProjectM.Age"), false); // Value: 0 is still readable.
    assert.equal(isClosed("ProjectM.Network.NetSnapshot"), true);
    assert.equal(isClosed("ProjectM.Network.SnapshotFrameChangedBuffer"), true);
    assert.equal(isClosed("ProjectM.Network.UpToDateUserBitMask"), true);
    assert.equal(componentReadingHint(components.find(component => component.name === "ProjectM.Network.NetSnapshot")!), "Buffer · 28 entries");
  }
  const unfamiliar = parsePrefabReader("  ProjectM.Network.Unfamiliar\n    Enabled: false\n    Owner: Entity(0:0)\n", "dump");
  assert.equal(defaultCollapsedComponents(unfamiliar).size, 0);
});


test("both heading formats resolve canonical definitions without mistaking export notes for components", () => {
  assert.deepEqual(parsePrefabComponentHeading('- [ProjectM.Health]({{% relref "components/Health.md" %}})'), { name: "ProjectM.Health", path: "/components/health" });
  assert.deepEqual(parsePrefabComponentHeading('- [ProjectM.Network.NetworkInterpolated_Shared](/components/NetworkInterpolated_Shared)'), { name: "ProjectM.Network.NetworkInterpolated_Shared", path: "/components/networkinterpolated-shared" });
  assert.deepEqual(parsePrefabComponentHeading('- **ProjectM.HitColliderCast+CollisionCastOnDestroy**'), { name: "ProjectM.HitColliderCast+CollisionCastOnDestroy" });
  for (const value of ["[103]", "00000000000000000000000000000000", "104 total elements but only showing the first 36", "C\u0000\ufffd"]) {
    assert.equal(parsePrefabComponentHeading(`- **${value}**`), undefined);
  }
  const source = "- **ProjectM.Buffer**\n\n- **[103]**\n  - `Value: 0`\n- **104 total elements but only showing the first 36**\n- **C\u0000\ufffd**\n- **ProjectM.RunScriptOnGameplayEvents isn't handled**\n";
  const parsed = parsePrefabReader(source, "markdown");
  assert.deepEqual(parsed.map(component => component.name), ["ProjectM.Buffer", "ProjectM.RunScriptOnGameplayEvents"]);
  assert.match(parsed[0].text, /104 total elements but only showing the first 36/);
  assert.match(parsed[0].text, /C\u0000\ufffd/);
  assert.equal(componentReadingHint(parsed[0]), "Buffer · 1 recorded");
  assert.equal(parsed[1].text, "ProjectM.RunScriptOnGameplayEvents isn't handled");
});

test("wider defaults fold only reviewed transport types and distinguish empty buffers from unknown empty components", () => {
  const source = [
    "  ProjectM.Network.Snapshot_RefinementstationRecipesBuffer", "   [0]", "    Value: 0",
    "  ProjectM.RefinementstationRecipesBuffer", "   [0]", "    Unlocked: True",
    "  ProjectM.Network.NetworkedTimeout", "    TimeoutAfter: 3", "    Enabled: True",
    "  ProjectM.Network.Snapshot_Unreviewed", "    Value: 0",
    "  ProjectM.Network.NetworkInterpolated_Shared", "    LastClientCommandTime: 0",
    "  Unity.Physics.Systems.StaticPhysicsWorldBodyIndex", "    WorldBodyIndex: -1",
    "  ProjectM.Network.SyncToUserBitMask", "    Value: 00000000",
    "  ProjectM.Network.SyncToUserBuffer",
    "  Unity.Entities.BlobAssetOwner",
    "  Unity.Entities.Prefab"
  ].join("\n");
  const parsed = parsePrefabReader(source, "dump");
  assert.deepEqual([...defaultCollapsedComponents(parsed)], [0, 4, 5, 6]);
  assert.equal(componentReadingHint(parsed[7]), "Buffer · 0 entries");
  assert.equal(componentReadingHint(parsed[8]), "No recorded fields");
  assert.equal(componentReadingHint(parsed[9]), "Tag");
});

test("actual workstation, NPC, recipe, item and ability exports retain their component boundaries and values", () => {
  const fixtures = [
    "TM_RefinementStation_Sawmill_Large", "CHAR_Bandit_Bomber_VBlood", "Item_Weapon_Sword_T01_Bone",
    "Recipe_BloodEssence_Rat", "AB_Blood_BloodFountain_AbilityGroup", "UC_WarEvent_Legion_Smallwaves_Major"
  ];
  const parsed = new Map(fixtures.map(name => [name, parsePrefabReader(readFileSync(new URL(`../../content/prefabs/${name}.md`, import.meta.url), "utf8"), "markdown")]));
  for (const components of parsed.values()) {
    assert.ok(components.length > 10);
    assert.ok(components.every(component => /^[A-Za-z_][\w.+]+$/.test(component.name)));
    assert.equal(new Set(components.map(component => component.name)).size, components.length);
    assert.ok(components.every(component => !/\n[ \t]*\n/.test(component.text)), "Markdown padding is removed from the reading view");
  }
  const workstation = parsed.get("TM_RefinementStation_Sawmill_Large")!;
  const recipesIndex = workstation.findIndex(component => component.name === "ProjectM.RefinementstationRecipesBuffer");
  assert.match(workstation[recipesIndex].text, /Recipe_.*\sPrefabGuid/);
  assert.equal(componentReadingHint(workstation[recipesIndex]), "Buffer · 6 entries");
  assert.equal(defaultCollapsedComponents(workstation).has(recipesIndex), false);
  assert.ok(defaultCollapsedComponents(workstation).has(workstation.findIndex(component => component.name === "ProjectM.Network.Snapshot_RefinementstationRecipesBuffer")));
  const npc = parsed.get("CHAR_Bandit_Bomber_VBlood")!;
  assert.ok(npc.length > 120);
  assert.ok(npc.slice(120).some(component => component.path?.startsWith("/components/")), "definitions survive the relation-preview limit");
  const netSnapshot = npc.find(component => component.name === "ProjectM.Network.NetSnapshot")!;
  assert.match(netSnapshot.text, /360 total elements but only showing the first 36/);
  assert.equal(netSnapshot.text.match(/^\s*\[\d+\]$/gm)?.length, 300);
  assert.equal(componentReadingHint(netSnapshot), "Buffer · 300 recorded");
  const recipe = parsed.get("Recipe_BloodEssence_Rat")!;
  assert.match(recipe.find(component => component.name === "ProjectM.RecipeData")!.text, /CraftDuration: 30/);
});
