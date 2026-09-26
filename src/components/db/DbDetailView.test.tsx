import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { DbSection } from "../../config/sections";
import { DbEntityDetail } from "../../types/db";
import { DbDetailView } from "./DbDetailView";
import {
  itemDetailFixture,
  npcDetailFixture,
  recipeDetailFixture,
  workstationDetailFixture,
  workstationWithInventoryDetailFixture
} from "./DbDetailView.test.fixtures";

function renderWithoutLayoutWarning(render: () => string) {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    const first = String(args[0] ?? "");
    if (first.includes("useLayoutEffect does nothing on the server")) {
      return;
    }

    originalError(...args);
  };

  try {
    return render();
  } finally {
    console.error = originalError;
  }
}

function renderDetail(detail: DbEntityDetail, section: DbSection) {
  return renderWithoutLayoutWarning(() =>
    renderToStaticMarkup(
      <MemoryRouter>
        <DbDetailView detail={detail} section={section} />
      </MemoryRouter>
    )
  );
}

function renderRecipeDetail() {
  return renderDetail(recipeDetailFixture, "recipes");
}

function renderItemDetail() {
  return renderDetail(itemDetailFixture, "items");
}

function renderNpcDetail() {
  return renderDetail(npcDetailFixture, "npcs");
}

function renderWorkstationDetail() {
  return renderDetail(workstationDetailFixture, "workstations");
}

function renderWorkstationWithInventoryDetail() {
  return renderDetail(workstationWithInventoryDetailFixture, "workstations");
}

function countMatches(value: string, pattern: RegExp): number {
  return value.match(pattern)?.length ?? 0;
}

test("structured recipe detail keeps summary cues while consolidating duplicate relation sections", () => {
  const html = renderRecipeDetail();

  assert.match(html, /Craft time/);
  assert.match(html, /Output/);
  assert.match(html, /Ingredients/);
  assert.match(html, /Repair cost/);
  assert.match(html, /⏱/);
  assert.match(html, /📦/);
  assert.match(html, /🧩/);
  assert.match(html, /🔧/);
  assert.match(html, /Quick Facts/);
  assert.match(html, /Quick Facts<\/div><div class="mt-2 text-xs uppercase tracking-\[0\.18em\] text-\[var\(--database-accent-soft\)\]">Recipe Database<\/div>/);
  assert.match(html, /<aside class="database-summary-capsule hidden rounded-\[1\.35rem\] p-4 sm:p-5 xl:block">/);

  assert.doesNotMatch(html, />Recipe Summary</);
  assert.doesNotMatch(html, /Player Context/);
  assert.doesNotMatch(html, />Crafts</);
  assert.doesNotMatch(html, />Requires</);
  assert.doesNotMatch(html, />Repairs With</);

  assert.match(html, /href="#linked-records"/);
  assert.match(html, />Linked Records</);
  assert.match(html, /Output records/);
  assert.match(html, /Ingredient records/);
  assert.match(html, /Repair records/);
  assert.equal(countMatches(html, /href="#relation-outputs"/g), 0);
  assert.equal(countMatches(html, /href="#relation-ingredients"/g), 0);
  assert.equal(countMatches(html, /href="#relation-repair-costs"/g), 0);
});

test("structured recipe detail keeps non-summary fact rows visible on mobile and desktop", () => {
  const html = renderDetail({ ...recipeDetailFixture, recipeGroup: "None", recipeFamily: "Default", alwaysUnlocked: true, hideInStation: true, ignoreServerSettings: true }, "recipes");

  assert.equal(countMatches(html, /Ignores Server Settings/g), 2);
});

test("structured item detail keeps localized copy while consolidating duplicate relation sections", () => {
  const html = renderItemDetail();

  assert.match(html, /Group/);
  assert.match(html, /Kind/);
  assert.match(html, /Stack/);
  assert.match(html, /Durability/);
  assert.match(html, /Armor \/ Footgear/);
  assert.match(html, /Equippable/);
  assert.match(html, /Quick Facts/);
  assert.match(html, /Quick Facts<\/div><div class="mt-2 text-xs uppercase tracking-\[0\.18em\] text-\[var\(--database-accent-soft\)\]">Item Database<\/div>/);
  assert.match(html, /<aside class="database-summary-capsule hidden rounded-\[1\.35rem\] p-4 sm:p-5 xl:block">/);
  assert.doesNotMatch(html, /Equippable \/ Footgear/);
  assert.doesNotMatch(html, />Item Summary</);

  assert.match(html, /Armour made from collecting the bones of the dead/);
  assert.doesNotMatch(html, /None item, max stack 1\./);
  assert.doesNotMatch(html, />Record Type</);

  assert.equal(countMatches(html, /href="#linked-records"/g), 1);
  assert.match(html, />Linked Records</);
  assert.match(html, /Crafting records/);
  assert.match(html, /Repair records/);
  assert.equal(countMatches(html, /href="#relation-crafted-from"/g), 0);
  assert.equal(countMatches(html, /href="#relation-repair-and-salvage"/g), 0);
});

test("structured NPC detail keeps summary cues while consolidating duplicate relation sections", () => {
  const html = renderNpcDetail();

  assert.match(html, /Kind/);
  assert.match(html, /Level/);
  assert.match(html, /Blood/);
  assert.match(html, /Faction/);
  assert.match(html, /Unit/);
  assert.match(html, /Essence/);
  assert.match(html, /🎭/);
  assert.match(html, /✦/);
  assert.match(html, /🩸/);
  assert.match(html, /⚑/);
  assert.match(html, /◇/);
  assert.match(html, /✧/);
  assert.match(html, /Quick Facts/);
  assert.match(html, /Quick Facts<\/div><div class="mt-2 text-xs uppercase tracking-\[0\.18em\] text-\[var\(--database-accent-soft\)\]">NPC Archive<\/div>/);
  assert.match(html, /<aside class="database-summary-capsule hidden rounded-\[1\.35rem\] p-4 sm:p-5 xl:block">/);

  assert.doesNotMatch(html, />NPC Summary</);
  assert.doesNotMatch(html, /preserved aggro, movement, and drop context/);
  assert.doesNotMatch(html, />Encounter</);
  assert.doesNotMatch(html, />Drop Context</);
  assert.doesNotMatch(html, />Servant Context</);

  assert.match(html, /Run Speed/);
  assert.match(html, /Aggro Radius/);
  assert.match(html, /Leash Distance/);

  assert.equal(countMatches(html, /href="#linked-records"/g), 1);
  assert.match(html, />Linked Records</);
  assert.match(html, /Servant records/);
  assert.match(html, /Essence drop records/);
  assert.equal(countMatches(html, /href="#relation-servant-forms"/g), 0);
  assert.equal(countMatches(html, /href="#relation-essence-drops"/g), 0);
});

test("structured NPC detail renders a portrait only when a source-backed path exists", () => {
  const html = renderDetail(
    {
      ...npcDetailFixture,
      title: "Clive the Firestarter",
      npcKind: "V Blood Boss",
      isVBlood: true,
      portraitAssetPath: "/icons/npcs/CHAR_Bandit_Bomber_VBlood_HeadPortrait.png"
    },
    "npcs"
  );
  const withoutPath = renderNpcDetail();

  assert.match(html, /src="\/icons\/npcs\/CHAR_Bandit_Bomber_VBlood_HeadPortrait\.png"/);
  assert.equal(countMatches(html, /src="\/icons\/npcs\/CHAR_Bandit_Bomber_VBlood_HeadPortrait\.png"/g), 1);
  assert.doesNotMatch(withoutPath, /NPC portrait/);
  assert.doesNotMatch(withoutPath, /\/icons\/npcs\//);
});

test("structured workstation detail keeps summary cues while consolidating duplicate relation sections", () => {
  const html = renderWorkstationDetail();

  assert.match(html, /Role/);
  assert.match(html, /Station kind/);
  assert.match(html, /Matching floor/);
  assert.match(html, /Servant bonus/);
  assert.match(html, /Recipes/);
  assert.match(html, /Outputs/);
  assert.match(html, /🎭/);
  assert.match(html, /🏰/);
  assert.match(html, /◈/);
  assert.match(html, /✦/);
  assert.match(html, /📜/);
  assert.match(html, /📦/);
  assert.match(html, /Quick Facts/);
  assert.match(html, /Quick Facts<\/div><div class="mt-2 text-xs uppercase tracking-\[0\.18em\] text-\[var\(--database-accent-soft\)\]">Workstation Database<\/div>/);
  assert.match(html, /<aside class="database-summary-capsule hidden rounded-\[1\.35rem\] p-4 sm:p-5 xl:block">/);
  assert.match(html, /src="\/icons\/buildables\/Stunlock_Icon_Structure_JewelcraftingTable\.png"/);
  assert.equal(countMatches(html, /src="\/icons\/buildables\/Stunlock_Icon_Structure_JewelcraftingTable\.png"/g), 1);

  assert.doesNotMatch(html, />Station Summary</);
  assert.doesNotMatch(html, /Station workstation record with player-facing naming and technical prefab context/);
  assert.doesNotMatch(html, />Station Context</);
  assert.doesNotMatch(html, />Room Bonus</);
  assert.doesNotMatch(html, />Recipe Context</);

  assert.equal(countMatches(html, /href="#linked-records"/g), 1);
  assert.match(html, />Linked Records</);
  assert.match(html, /Recipe output records/);
  assert.match(html, /Station recipe records/);
  assert.equal(countMatches(html, /href="#relation-recipe-outputs"/g), 0);
  assert.equal(countMatches(html, /href="#relation-station-recipes"/g), 0);
  assert.equal(countMatches(html, /href="#relation-inventory-prefabs"/g), 0);
});

test("structured workstation detail does not render a portrait placeholder without a source-backed path", () => {
  const html = renderDetail({ ...workstationDetailFixture, portraitAssetPath: undefined }, "workstations");

  assert.doesNotMatch(html, /station portrait/);
  assert.doesNotMatch(html, /\/icons\/buildables\//);
});

test("structured workstation linked records surface includes inventory group when data exists", () => {
  const html = renderWorkstationWithInventoryDetail();

  assert.match(html, /Recipe output records/);
  assert.match(html, /Station recipe records/);
  assert.match(html, /Inventory records/);
});

test("detail badges deduplicate tier and V Blood spelling variants", () => {
  const html = renderDetail({ slug: "example", title: "Example", tier: "Tier 1", categories: ["Tier 1", "Tier1", "VBlood", "V Blood"] }, "abilities");
  assert.equal(countMatches(html, />Tier 1</g), 1);
  assert.equal(countMatches(html, />V Blood</g), 1);
  assert.doesNotMatch(html, />VBlood<|>Tier1</);
});

test("recipe Group and Family facts disappear only when their matching badges are visible", () => {
  const html = renderRecipeDetail();
  assert.doesNotMatch(html, /<dt[^>]*>Group<|<dt[^>]*>Family</);
  const hiddenBadges = renderDetail({ ...recipeDetailFixture, recipeGroup: "None", recipeFamily: "Default" }, "recipes");
  assert.match(hiddenBadges, /<dt[^>]*>Group</);
  assert.match(hiddenBadges, /<dt[^>]*>Family</);
  assert.match(hiddenBadges, />None</);
  assert.match(hiddenBadges, />Default</);
});

test("recipe summaries preserve zero quantities, zero duration and recorded absence", () => {
  const html = renderDetail({ ...recipeDetailFixture, craftDuration: 0, outputs: [{ title: "Unknown output", prefab: "Unknown", guid: null, amount: 0 }], repairCosts: [], repairCostCount: 0 }, "recipes");
  assert.match(html, />0s</);
  assert.match(html, />0x</);
  assert.match(html, /Unknown output/);
  assert.match(html, /None recorded/);
});

test("detail artwork appears once by the title and is absent without either asset field", () => {
  const html = renderDetail({ ...itemDetailFixture, icon: "/item.png" }, "items");
  assert.equal(countMatches(html, /src="\/item.png"/g), 1);
  assert.match(html, /<header[^>]*>.*<h1[^>]*>Boneguard Boots<\/h1>.*src="\/item.png".*<\/header>/);
  assert.doesNotMatch(html.match(/<aside.*?<\/aside>/)?.[0] ?? "", /database-record-artwork/);
  assert.doesNotMatch(renderDetail({ slug: "plain", title: "Plain" }, "items"), /database-record-artwork|database-avatar-well/);
});

test("Tooltip source is initially collapsed and retains its deep-link target", () => {
  const html = renderDetail({ slug: "aftershock", title: "Aftershock", tooltipTextEn: "Launch a shockwave", tooltipSourceKind: "tooltip" }, "abilities");
  assert.match(html, /<details id="tooltip-capture" class="source-disclosure"><summary>Tooltip source<\/summary>/);
  assert.match(html, /href="#tooltip-capture"/);
});
