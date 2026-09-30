import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import type { DbIndexEntry } from "../src/types/db";

/** Pick representative records by source identity, independent of browse sorting. */
export function getBlueprintVisualFixtures() {
  const entries = JSON.parse(readFileSync("public/data/db/blueprints/index.json", "utf8")) as DbIndexEntry[];
  const sorted = [...entries].sort((a, b) => (a.subtitle ?? a.slug).localeCompare(b.subtitle ?? b.slug));
  const linkedBooks = sorted.find((entry) => (entry.linkedBookCount ?? 0) > 0);
  const linkedNoBooks = sorted.find((entry) => (entry.unlockSourceCount ?? 0) > 0 && !entry.linkedBookCount);
  const unlinked = sorted.find((entry) => !entry.unlockSourceCount);
  const starter = sorted.find((entry) => entry.isStartBlueprint);
  assert(linkedBooks && linkedNoBooks && unlinked && starter, "Missing Blueprint review fixture");
  return { entries, linkedBooks, linkedNoBooks, unlinked, starter };
}
