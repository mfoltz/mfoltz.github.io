import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { DbEntityDetail, DbIndexEntry } from "../src/types/db";
import { buildMaterialBlueprints, indexMaterialDestinations, readMaterialBlueprintDocument } from "./material-blueprints";

export async function readGeneratedMaterialBlueprints(root: string) {
  const json = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(path.join(root, file), "utf8"));
  const load = async (section: "items" | "blueprints") => {
    const index = await json<DbIndexEntry[]>(`public/data/db/${section}/index.json`);
    const details = await Promise.all(index.map(row => json<DbEntityDetail>(`public/data/db/${section}/by-slug/${row.slug}.json`)));
    const targets = indexMaterialDestinations(index.map((row, i) => {
      assert.equal(details[i].slug, row.slug); assert.equal(details[i].title, row.title);
      if (section === "blueprints") assert.equal(details[i].portraitAssetPath, row.portraitAssetPath);
      return { title: row.title, prefab: details[i].prefab!, guid: details[i].guid ?? null,
        slug: row.slug, path: row.path, icon: section === "blueprints" ? row.portraitAssetPath : row.icon };
    }));
    return { details, targets };
  };
  const [items, blueprints, all] = await Promise.all([load("items"), load("blueprints"), json<Record<string, number>>("data/prefabs/All.json")]);
  const docs = await Promise.all(blueprints.details.map(async detail => {
    assert.equal(detail.sourcePath, `content/prefabs/${detail.prefab}.md`);
    const doc = readMaterialBlueprintDocument(detail.sourcePath!, await readFile(path.join(root, detail.sourcePath!), "utf8"), items.targets, all);
    assert.equal(doc.prefab, detail.prefab); assert.equal(doc.guid, detail.guid); assert.equal(doc.status, detail.buildMaterialStatus);
    assert.deepEqual(detail.buildMaterials, JSON.parse(JSON.stringify(doc.materials)), `${detail.prefab}: forward materials differ from retained source`);
    return doc;
  }));
  return { details: items.details, blueprints: blueprints.details, docs,
    expected: buildMaterialBlueprints(docs, items.targets, blueprints.targets, all) };
}
