import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { DatabaseDirectory } from "../components/common/DatabaseDirectory";
import { dbSections } from "../config/sections";

test("rendered homepage directory retains all gameplay routes and partial Blueprint wording", () => {
  const html = renderToStaticMarkup(<MemoryRouter><DatabaseDirectory /></MemoryRouter>);
  for (const section of dbSections) {
    assert.equal(html.split(`href="/db/${section}"`).length - 1, 1, section);
  }
  assert.match(html, /Build rules, recorded unlock sources, and linked book requirements\. Source coverage is partial\./);
  assert.match(html, /Station roles, matching floors, servant bonuses, recipes, and outputs/);
  assert.doesNotMatch(html, /Guaranteed|Purchase|Drops from/);
});
