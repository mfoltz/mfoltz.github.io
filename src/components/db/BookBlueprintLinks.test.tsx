import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import type { DbEntityDetail, DbBookBlueprintRef, DbBookBlueprintSource } from "../../types/db";
import { DbDetailView } from "./DbDetailView";
import { itemDetailFixture } from "./DbDetailView.test.fixtures";
const owner: DbBookBlueprintSource = { title: "Complete Technology Name", prefab: "Tech_Complete_Unbroken_Technology_Name", guid: 0,
  path: "/prefabs/tech-complete", sourcePath: "content/prefabs/Tech_Complete.md", amount: 1,
  sourceComponent: "ProjectM.TechItemRequirementBuffer", unlockSourceComponent: "ProjectM.TechUnlockBlueprintBuffer" };
const books: DbBookBlueprintRef[] = Array.from({length:13},(_,i)=>({ title:`Complete Blueprint Name ${i}`, prefab:`BP_Test_${i}`,
  guid:-i, slug:`bp-test-${i}`, path:`/db/blueprints/bp-test-${i}`, declaringSources:[owner],
  ...(i===0?{icon:"/icons/buildables/existing.png"}:{}) }));
const recipes = [{ title: "Recipe", prefab: "Recipe_Iron", guid: -100, amount: 12, path: "/db/recipes/iron" }];
function render(detail:DbEntityDetail,entry="/"){
  const original=console.error;console.error=(...args:unknown[])=>{if(!String(args[0]).includes("useLayoutEffect does nothing on the server"))original(...args)};
  try{return renderToStaticMarkup(<MemoryRouter initialEntries={[entry]}><DbDetailView section="items" detail={detail}/></MemoryRouter>)}finally{console.error=original}
}
const count=(html:string,pattern:RegExp)=>html.match(pattern)?.length??0;
test("consolidated book group follows recipes, counts all targets and shows the requirement once",()=>{
  const html=render({...itemDetailFixture,ingredientRecipes:recipes,bookBlueprints:books});
  assert(html.indexOf("Linked Blueprints")>html.indexOf("Used in recipes"));
  assert.match(html,/Showing 12 of 13 linked Blueprints/);assert.match(html,/1 declaring technology/);
  assert.equal(count(html,/data-db-reference="BP_Test_/g),12);
  assert.equal(count(html,/Book requirement: 1/g),1);
  assert.match(html,/Complete Blueprint Name 11/);assert.match(html,/BP_Test_11/);assert.match(html,/>-11<\/div>/);
  assert.match(html,/href="\/db\/blueprints\/bp-test-0"/);assert.match(html,/href="\/prefabs\/tech-complete"/);
  assert.match(html,/Tech_Complete_Unbroken_Technology_Name/);assert.match(html,/src="\/icons\/buildables\/existing.png"/);
  assert.equal(count(html,/data-book-blueprint-source/g),0);assert.match(html,/>0<\/div>/);
  const targets=html.slice(html.indexOf('id="book-blueprint-targets"'));
  assert.doesNotMatch(targets,/data-db-reference-amount/);
  assert.doesNotMatch(html,/Book Blueprints|Developer Raw/);
});
test("fallback and shared URLs restore search and expansion independently of recipe state",()=>{
  const detail={slug:"plain",title:"Plain",ingredientRecipes:recipes,bookBlueprints:books};
  const expanded=render(detail,"/db/items/plain?bookShown=24&usesQ=iron&usesShown=36");
  assert.equal(count(expanded,/data-db-reference="BP_Test_/g),13);
  assert.match(expanded,/href="#relation-linked-blueprints"/);assert.match(expanded,/12 required/);
  const filtered=render(detail,"/db/items/plain?bookQ=BP_TEST_12+-12&usesQ=iron");
  assert.equal(count(filtered,/data-db-reference="BP_Test_/g),1);assert.match(filtered,/Complete Blueprint Name 12/);
  assert.match(filtered,/Book requirement: 1/);assert.match(filtered,/Clear search/);
  const empty=render(detail,"/db/items/plain?bookQ=absent");
  assert.match(empty,/No recorded Blueprint links match this search/);assert.match(empty,/Declaring technologies/);
  assert.equal(count(empty,/data-db-reference="BP_Test_/g),0);
});
test("multiple declaring sources use separate links outside the Blueprint anchor and retain unknown quantities",()=>{
  const other={...owner,title:"Other Technology",prefab:"Tech_Other",guid:-9,path:"/prefabs/tech-other",amount:undefined};
  const html=render({...itemDetailFixture,bookBlueprints:[{...books[0],declaringSources:[owner,other]}]});
  assert.equal(count(html,/data-db-reference="BP_Test_/g),1);
  assert.equal(count(html,/data-book-blueprint-source/g),2);assert.equal(count(html,/Book requirement: 1/g),1);
  assert.equal(count(html,/Book quantity unrecorded/g),1);assert.match(html,/2 declaring technologies/);
  assert.match(html,/href="\/prefabs\/tech-other"/);
  assert.doesNotMatch(html,/<a\b[^>]*>(?:(?!<\/a>)[\s\S])*<a\b/);
});
test("absent and empty book links add no group or no-use claim",()=>{
  for(const bookBlueprints of [undefined,[]]){
    const html=render({...itemDetailFixture,bookBlueprints});
    assert.doesNotMatch(html,/Linked Blueprints|item-book-blueprints|No recorded Blueprint|No uses/);
  }
});
