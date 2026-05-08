import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import recipeDetail from "../../../public/data/db/recipes/by-slug/recipe-armor-boots-t01-bone.json";
import workstationDetail from "../../../public/data/db/workstations/by-slug/tm-crafting-station-jewelcrafting-table.json";
import workstationWithInventoryDetail from "../../../public/data/db/workstations/by-slug/tm-refinement-station-sawmill-large.json";
import { DbSection } from "../../config/sections";
import { DbEntityDetail } from "../../types/db";
import { DbDetailView } from "./DbDetailView";

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
  return renderDetail(recipeDetail as DbEntityDetail, "recipes");
}

function renderWorkstationDetail() {
  return renderDetail(workstationDetail as DbEntityDetail, "workstations");
}

function renderWorkstationWithInventoryDetail() {
  return renderDetail(workstationWithInventoryDetail as DbEntityDetail, "workstations");
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

test("structured workstation linked records surface includes inventory group when data exists", () => {
  const html = renderWorkstationWithInventoryDetail();

  assert.match(html, /Recipe output records/);
  assert.match(html, /Station recipe records/);
  assert.match(html, /Inventory records/);
});
