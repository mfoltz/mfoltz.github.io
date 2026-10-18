import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import type { DbEntityDetail } from "../src/types/db";
import { completionArtworkPath } from "./blueprint-completion-artwork";
const fixture = JSON.parse(await readFile("public/data/db/blueprints/by-slug/bp-castle-stairs-double-stone02.json", "utf8")) as DbEntityDetail;
test("failed-artwork fixture pins an existing portrait and exact identity", async () => {
  assert((await readFile("public" + completionArtworkPath(fixture))).length > 0);
});
for (const [name, mutate] of Object.entries({
  "guid": (x: DbEntityDetail) => { x.guid = 0; },
  "prefab": (x: DbEntityDetail) => { x.prefab = "Other"; },
  "slug": (x: DbEntityDetail) => { x.slug = "other"; },
  "source": (x: DbEntityDetail) => { x.sourcePath = "content/other.md"; },
  "missing artwork": (x: DbEntityDetail) => { x.portraitAssetPath = undefined; x.iconAssetPath = undefined; },
  "remote artwork": (x: DbEntityDetail) => { x.portraitAssetPath = "https://example.invalid/image.png"; }
})) test("reject incorrect failed-artwork fixture: " + name, () => {
  const copy = structuredClone(fixture); mutate(copy); assert.throws(() => completionArtworkPath(copy));
});
