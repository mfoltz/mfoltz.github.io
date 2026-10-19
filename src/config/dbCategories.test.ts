import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { dbSections } from "./sections";
import { dbBrowseCategories, getDbBrowseSourceSection, getSearchBrowseCategory, isVendorWorkstation,
  legacyVendorBrowseTarget, matchesSearchScope } from "./dbCategories";
import type { DbIndexEntry } from "../types/db";

const entries: DbIndexEntry[] = JSON.parse(readFileSync("public/data/db/workstations/index.json", "utf8"));

test("vendor browsing partitions all current identities without creating a storage section", () => {
  assert.equal(entries.length, 136);
  assert.equal(entries.filter(isVendorWorkstation).length, 15);
  assert.equal(entries.filter(entry => !isVendorWorkstation(entry)).length, 121);
  assert(!dbSections.includes("vendors" as never));
  assert.equal(dbBrowseCategories.filter(category => category === "vendors").length, 1);
  assert.equal(getDbBrowseSourceSection("vendors"), "workstations");
  assert(!isVendorWorkstation({ title: "Vendor" }));
  assert(!isVendorWorkstation({ workstationRole: "vendor" }));
});

test("search category scopes conserve storage membership and exact canonical destinations", () => {
  const search = entries.map(entry => ({ ...entry, section: "workstations", ...(isVendorWorkstation(entry) ? { browseCategory: "vendors" } : {}) }));
  assert.equal(search.filter(entry => matchesSearchScope(entry, "vendors")).length, 15);
  assert.equal(search.filter(entry => matchesSearchScope(entry, "workstations")).length, 121);
  for (const scope of ["all", "db"]) assert.equal(search.filter(entry => matchesSearchScope(entry, scope)).length, 136);
  assert.equal(search.filter(entry => matchesSearchScope(entry, "reference")).length, 0);
  assert.equal(getSearchBrowseCategory({ section: "items", browseCategory: "vendors" }), "items");
  for (const entry of search) assert.equal(entry.path, `/db/workstations/${entry.slug}`);
});

test("legacy vendor filters translate only the supported query state", () => {
  const target = legacyVendorBrowseTarget(new URLSearchParams({ role: "Vendor", area: "silverlight", q: "book & herb", unused: "x" }));
  assert(target); const url = new URL(target, "http://localhost");
  assert.equal(url.pathname, "/db/vendors");
  assert.deepEqual([...url.searchParams], [["q", "book & herb"], ["region", "silverlight"]]);
  assert.equal(legacyVendorBrowseTarget(new URLSearchParams("role=vendor&area=all")), "/db/vendors");
  assert.equal(legacyVendorBrowseTarget(new URLSearchParams("role=research")), null);
});

test("generated search marks each existing vendor once without changing its storage family", () => {
  const search: Array<{ section: string; path: string; browseCategory?: string }> = JSON.parse(readFileSync("public/data/search.index.json", "utf8"));
  const vendors = entries.filter(isVendorWorkstation);
  const marked = search.filter(entry => entry.browseCategory === "vendors");
  assert.equal(marked.length, vendors.length);
  for (const vendor of vendors) {
    const matches = search.filter(entry => entry.path === vendor.path);
    assert.equal(matches.length, 1); assert.equal(matches[0].section, "workstations");
    assert.equal(matches[0].browseCategory, "vendors");
  }
});
