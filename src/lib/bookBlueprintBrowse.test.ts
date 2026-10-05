import assert from "node:assert/strict";
import test from "node:test";
import type { DbBookBlueprintRef, DbBookBlueprintSource } from "../types/db";
import { filterBookBlueprints, bookDeclaringSources, resolveBookBlueprintsShown, bookBlueprintParams } from "./bookBlueprintBrowse";
const owner: DbBookBlueprintSource = { title: "Alpha Technology", prefab: "Tech_Alpha", guid: 0, path: "/prefabs/tech-alpha",
  sourcePath: "content/prefabs/Tech_Alpha.md", sourceComponent: "ProjectM.TechItemRequirementBuffer", unlockSourceComponent: "ProjectM.TechUnlockBlueprintBuffer", amount: 1 };
const rows: DbBookBlueprintRef[] = [{ title: "Castle Floor", prefab: "BP_Floor", guid: -7, declaringSources: [owner] },
  { title: "Castle Wall", prefab: "BP_Wall", guid: 0, declaringSources: [{ ...owner, title: "Beta Technology", prefab: "Tech_Beta", guid: -9 }] }];
test("all search terms match complete target/source identities case-insensitively", () => {
  assert.deepEqual(filterBookBlueprints(rows, " CASTLE Tech_alpha 0 "), [rows[0]]);
  assert.deepEqual(filterBookBlueprints(rows, "bp_wall -9"), [rows[1]]);
  assert.deepEqual(filterBookBlueprints(rows, "Floor -7"), [rows[0]]);
  assert.deepEqual(filterBookBlueprints(rows, "absent"), []);
  assert.deepEqual(filterBookBlueprints(rows, " \t "), rows);
});
test("declaring source overview is unique and deterministic without altering targets", () => {
  const items = [rows[1], rows[0], rows[0]], before = JSON.stringify(items);
  assert.deepEqual(bookDeclaringSources(items).map(row => row.prefab), ["Tech_Alpha", "Tech_Beta"]);
  assert.equal(JSON.stringify(items), before);
});
test("expansion clamps safely and query updates preserve independent recipe state", () => {
  for (const value of [null, "", "garbage", "0", "-12", "2.5", "Infinity", "9999999999999999999999"]) assert.equal(resolveBookBlueprintsShown(value,49),12);
  assert.equal(resolveBookBlueprintsShown("24",49),24); assert.equal(resolveBookBlueprintsShown("9999",49),49);
  assert.equal(resolveBookBlueprintsShown("24",1),1); assert.equal(resolveBookBlueprintsShown(null,0),0);
  const params = new URLSearchParams("keep=a&keep=b&usesQ=iron&usesShown=36&bookQ=old&bookShown=24");
  assert.equal(bookBlueprintParams(params,"new",36).toString(),"keep=a&keep=b&usesQ=iron&usesShown=36&bookQ=new&bookShown=36");
  assert.equal(bookBlueprintParams(params,"new").get("bookShown"),null);
  assert.equal(bookBlueprintParams(params,"").toString(),"keep=a&keep=b&usesQ=iron&usesShown=36");
  assert.equal(params.get("bookShown"),"24");
});
