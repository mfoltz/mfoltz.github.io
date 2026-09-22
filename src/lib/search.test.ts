import assert from "node:assert/strict";
import test from "node:test";
import { scoreSearchEntry } from "./search";
import { SearchEntry } from "../types/content";

const prefab: SearchEntry = {
  title: "AB_AmbientLightning_Light", slug: "ab-ambientlightning-light",
  path: "/prefabs/ab-ambientlightning-light", section: "prefabs", kind: "prefab",
  tags: [], badges: ["AB", "589474506"], excerpt: "A prefab."
};

test("an identifier displayed only as a badge remains searchable", () => {
  assert.ok(scoreSearchEntry(prefab, "589474506") > 0);
  assert.equal(scoreSearchEntry(prefab, "unrelated"), 0);
  assert.equal(scoreSearchEntry(prefab, "   "), 0);
});

test("an exact record name ranks before a containing collection", () => {
  const collection = { ...prefab, title: "AB", slug: "ab", kind: "collection", tags: [prefab.title] };
  assert.ok(scoreSearchEntry(prefab, prefab.title) > scoreSearchEntry(collection, prefab.title));
});
