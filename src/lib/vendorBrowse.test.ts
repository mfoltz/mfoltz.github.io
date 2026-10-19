import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { getVendorBrowseModel } from "./vendorBrowse";
import type { DbIndexEntry } from "../types/db";
const entries: DbIndexEntry[] = JSON.parse(readFileSync("public/data/db/workstations/index.json", "utf8"));

test("vendor facets use only vendor populations and keep complete same-title records", () => {
  const all = getVendorBrowseModel(entries, new URLSearchParams());
  assert.equal(all.filtered.length, 15);
  assert.equal(all.regionOptions.reduce((sum, option) => sum + option.count, 0), 15);
  const duplicate = getVendorBrowseModel(entries, new URLSearchParams("region=noctem"));
  assert.equal(duplicate.filtered.length, 2);
  assert.equal(new Set(duplicate.filtered.map(entry => entry.title)).size, 1);
  assert.equal(new Set(duplicate.filtered.map(entry => entry.path)).size, 2);
  const one = getVendorBrowseModel(entries, new URLSearchParams("region=farbane&inventory=knowledge"));
  assert.equal(one.filtered.length, 1);
  assert.equal(one.filtered[0].slug, "char-trader-farbane-knowledge-t01");
});

test("unmatched searches retain valid facet selections and searches include exact identifiers", () => {
  const empty = getVendorBrowseModel(entries, new URLSearchParams("region=farbane&inventory=knowledge&q=does-not-exist"));
  assert.equal(empty.filtered.length, 0); assert.equal(empty.region, "Farbane"); assert.equal(empty.inventory, "Knowledge");
  assert.equal(empty.normalized.get("region"), "farbane");
  const prefab = entries.find(entry => entry.slug === "char-trader-noctem-minor")!.tags![0];
  assert.equal(getVendorBrowseModel(entries, new URLSearchParams({ q: prefab })).filtered.length, 1);
});

test("invalid vendor parameters normalize without inventing a category or identity", () => {
  const model = getVendorBrowseModel(entries, new URLSearchParams("q=Gem&region=invalid&inventory=invalid&role=vendor"));
  assert.equal(model.normalized.toString(), "q=Gem");
  assert(model.filtered.every(entry => entry.workstationRole === "Vendor"));
});
