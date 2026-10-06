import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import type { DbEntityDetail, DbRelatedEntityRef } from "../../types/db";
import { DbDetailView } from "./DbDetailView";
import { DbReferenceList } from "./DbCards";
import { itemDetailFixture } from "./DbDetailView.test.fixtures";
const uses: DbRelatedEntityRef[] = Array.from({ length: 13 }, (_, i) => ({ title: `Complete Cross-Section Blueprint ${i}`,
  prefab: `BP_Complete_Cross-Section_${i}`, guid: -i, amount: 12, slug: `bp-${i}`, path: `/db/blueprints/bp-${i}`,
  sourcePath: `content/prefabs/BP_${i}.md`, sourceComponent: "ProjectM.BlueprintRequirementBuffer",
  ...(i === 0 ? { icon: "/icons/buildables/existing.png" } : {}) }));
function render(detail: DbEntityDetail, entry = "/") {
  const original = console.error; console.error = (...args: unknown[]) => { if (!String(args[0]).includes("useLayoutEffect does nothing on the server")) original(...args); };
  try { return renderToStaticMarkup(<MemoryRouter initialEntries={[entry]}><DbDetailView section="items" detail={detail} /></MemoryRouter>); }
  finally { console.error = original; }
}
const count = (html: string) => html.match(/data-db-reference="BP_Complete_/g)?.length ?? 0;
test("material group follows recipes and counts the full list with exact quantities/destinations", () => {
  const html = render({ ...itemDetailFixture, materialBlueprints: uses,
    ingredientRecipes: [{ title: "Recipe", prefab: "Recipe_Test", guid: -100, amount: 4, path: "/db/recipes/test" }] });
  assert(html.indexOf("Used in Blueprints") > html.indexOf("Used in recipes"));
  assert.match(html, /Showing 12 of 13 recorded Blueprints/); assert.equal(count(html), 12);
  assert.match(html, /Complete Cross-Section Blueprint 11/); assert.match(html, /BP_Complete_Cross-Section_11/);
  assert.match(html, /href="\/db\/blueprints\/bp-11"/); assert.match(html, />-11<\/div>/);
  assert.match(html, />0<\/div>/); assert.match(html, /12 required/); assert.match(html, /4 required/);
  assert.match(html, /src="\/icons\/buildables\/existing.png"/); assert.match(html, /13 linked/);
  assert.doesNotMatch(html, /Material Blueprints|Developer Raw/);
});
test("fallback layout restores expansion/search without changing recipe or book state", () => {
  const detail = { slug: "plain", title: "Plain", materialBlueprints: uses };
  const expanded = render(detail, "/db/items/plain?buildShown=24&usesQ=iron&bookQ=wall");
  assert.equal(count(expanded), 13); assert.match(expanded, /href="#relation-used-in-blueprints"/);
  const filtered = render(detail, "/db/items/plain?buildQ=CROSS-SECTION_12+-12&usesQ=absent");
  assert.equal(count(filtered), 1); assert.match(filtered, /Blueprint 12/); assert.match(filtered, /Clear search/);
  const empty = render(detail, "/db/items/plain?buildQ=unmatched");
  assert.equal(count(empty), 0); assert.match(empty, /No recorded Blueprints match this search\./);
  assert.doesNotMatch(empty, /Developer Mapped Fields/);
});
test("absent/empty uses add no group or absence claim", () => {
  for (const materialBlueprints of [undefined, []]) assert.doesNotMatch(render({ ...itemDetailFixture, materialBlueprints }),
    /Used in Blueprints|item-blueprint-uses|No recorded Blueprints|No uses/);
});
test("shared cards retain zero, negative, null GUIDs and unlinked records", () => {
  const rows = [{ title: "Zero", prefab: "BP_Zero", guid: 0, amount: 0 },
    { title: "Negative", prefab: "BP_Negative", guid: -9 }, { title: "Null", prefab: "BP_Null", guid: null }];
  const html = renderToStaticMarkup(<MemoryRouter><DbReferenceList items={rows} emptyLabel="empty" /></MemoryRouter>);
  assert.match(html, /0x/); assert.match(html, />0<\/div>/); assert.match(html, />-9<\/div>/);
  assert.equal(html.match(/data-db-reference-metadata/g)?.length, 2); assert.doesNotMatch(html, /href=/);
  assert.match(renderToStaticMarkup(<DbReferenceList items={[]} emptyLabel="empty" />), /empty/);
});
