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

test("structured item detail keeps localized copy while consolidating duplicate relation sections", () => {
  const html = renderItemDetail();

  assert.match(html, /Group/);
  assert.match(html, /Kind/);
  assert.match(html, /Stack/);
  assert.match(html, /Durability/);
  assert.match(html, /Armor \/ Footgear/);
  assert.match(html, /Equippable/);
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
  assert.match(html, /alt="Clive the Firestarter NPC portrait"/);
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
  assert.match(html, /src="\/icons\/buildables\/Stunlock_Icon_Structure_JewelcraftingTable\.png"/);
  assert.match(html, /alt="Jewelcrafting Table station portrait"/);

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
