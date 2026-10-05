import { readFile } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import type { DbEntityDetail, DbIndexEntry } from "../src/types/db";
import type { BlueprintUnlockMapSnapshot } from "./blueprint-unlocks";
import { buildBookBlueprints, indexBookBlueprintDestinations, readBookBlueprintDocument, recordedBookBlueprintEdges } from "./book-blueprints";

/** Routes/artwork come from current indexes; requirements/edges are reread from Markdown. */
export async function readGeneratedBookBlueprints(root: string) {
  const json = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(path.join(root, file), "utf8"));
  const load = async (section: "items" | "blueprints") => {
    const index = await json<DbIndexEntry[]>(`public/data/db/${section}/index.json`);
    const details = await Promise.all(index.map(row => json<DbEntityDetail>(`public/data/db/${section}/by-slug/${row.slug}.json`)));
    return { details, targets: indexBookBlueprintDestinations(index.map((row, i) => ({ title: row.title,
      prefab: details[i].prefab!, guid: details[i].guid ?? null, slug: row.slug, path: row.path,
      icon: section === "blueprints" ? row.portraitAssetPath : undefined }))) };
  };
  const [items, blueprints, map, all] = await Promise.all([load("items"), load("blueprints"),
    json<BlueprintUnlockMapSnapshot>("data/enrichment/blueprint-unlock-map.json"), json<Record<string, number>>("data/prefabs/All.json")]);
  const paths = new Set([...items.details.map(row => row.sourcePath!),
    ...Object.values(map.entriesByPrefab).flatMap(row => row.unlockSources.map(owner => owner.sourcePath))]);
  const docs = await Promise.all([...paths].map(async file => {
    assert(/^content\/prefabs\/[A-Za-z0-9_-]+\.md$/.test(file), `Unexpected book source path: ${file}`);
    return readBookBlueprintDocument(file, await readFile(path.join(root, file), "utf8"));
  }));
  return { details: items.details, blueprints: blueprints.details, map,
    expected: buildBookBlueprints(docs, items.targets, blueprints.targets, all, recordedBookBlueprintEdges(map)) };
}
