import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import recipeDetail from "../../../public/data/db/recipes/by-slug/recipe-armor-boots-t01-bone.json";
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

function renderRecipeDetail() {
  return renderWithoutLayoutWarning(() =>
    renderToStaticMarkup(
      <MemoryRouter>
        <DbDetailView detail={recipeDetail as DbEntityDetail} section="recipes" />
      </MemoryRouter>
    )
  );
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
