import assert from "node:assert/strict";
import test from "node:test";
import type { DbIndexEntry } from "../types/db";
import { getBlueprintBrowseModel } from "./blueprintBrowse";

const entries: DbIndexEntry[] = [
  { slug: "floor", title: "Alchemy Floor", path: "/db/blueprints/floor", excerpt: "", categories: [], unlockSourceCount: 2,
    unlockSourceTypes: ["technology", "techCollection"], unlockSourceTypeLabels: ["Technology", "Tech collection"], linkedBookCount: 1, tags: ["TM_Alchemy_Floor"], blueprintSearchTerms: ["Alchemy Lab Flooring"] },
  { slug: "altar", title: "Blood Altar", path: "/db/blueprints/altar", excerpt: "", categories: [], unlockSourceCount: 1,
    unlockSourceTypes: ["journalReward"], unlockSourceTypeLabels: ["Journal reward"], linkedBookCount: 0 },
  { slug: "unlinked", title: "Unlinked", path: "/db/blueprints/unlinked", excerpt: "", categories: [], unlockSourceCount: 0, linkedBookCount: 0 }
];
const select = (query: string) => getBlueprintBrowseModel(entries, new URLSearchParams(query));
test("blueprint filters compose and count records with multiple source types", () => {
  assert.equal(select("").sourceOptions.find((option) => option.value === "techCollection")?.count, 1);
  assert.deepEqual(select("source=techCollection&books=linked&coverage=linked").filtered.map((row) => row.slug), ["floor"]);
  assert.deepEqual(select("coverage=unlinked").filtered.map((row) => row.slug), ["unlinked"]);
  assert.equal(select("source=journalReward&books=linked").filtered.length, 0);
  assert.equal(select("books=unlinked").filtered.length, 2);
});
test("book titles are searchable, unknown filters recover, and sorting is deterministic", () => {
  assert.equal(select("q=alchemy%20lab%20flooring").filtered[0].slug, "floor");
  assert.deepEqual(entries[0].tags, ["TM_Alchemy_Floor"], "book search must not change global tags");
  assert.equal(select("source=bogus&coverage=bogus&books=bogus&sort=bogus").filtered.length, 3);
  assert.deepEqual(select("sort=sources").filtered.map((row) => row.slug), ["floor", "altar", "unlinked"]);
  assert.deepEqual(getBlueprintBrowseModel([...entries].reverse(), new URLSearchParams("sort=sources")).filtered, select("sort=sources").filtered);
  assert.deepEqual(entries.map((entry) => entry.slug), ["floor", "altar", "unlinked"], "input must not be sorted in place");
});
