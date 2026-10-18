import assert from "node:assert/strict";
import {test} from "node:test";
import {readFileSync} from "node:fs";
import {waitForFocusScroll} from "./blueprint-expansion-focus-scroll";
async function run(value:(time:number)=>{identity:string;geometry:string}){let time=0;const samples=await waitForFocusScroll(async()=>value(time),async ms=>{time+=ms;},()=>time);return {time,samples};}
test("clipped intermediate geometry can settle without whole-window containment",async()=>{const r=await run(()=>({identity:"additional-fields",geometry:"[0,0,310,700,140,38]"}));assert.equal(r.time,250);});
test("moving scroll geometry resets the stability interval",async()=>{const r=await run(time=>({identity:"link",geometry:String(Math.min(time,400))}));assert.equal(r.time,650);});
test("active-element identity changes reset stability even with identical bounds",async()=>{const r=await run(time=>({identity:time<200?"one":"two",geometry:"same"}));assert.equal(r.time,450);});
test("unsettled motion fails at the existing five-second deadline",async()=>{await assert.rejects(run(time=>({identity:"link",geometry:String(time)})),/did not settle/);});
test("the settlement helper never scrolls or replaces final visibility assertions",()=>{const source=readFileSync(new URL("./blueprint-expansion-focus-scroll.ts",import.meta.url),"utf8");assert(!/scrollIntoView|scrollTo\s*\(|preventScroll/.test(source));const probe=readFileSync(new URL("./blueprint-text-expansion-visual-check.ts",import.meta.url),"utf8");assert(probe.includes("await assertFocusedReferenceVisible(page, link)"));assert(probe.includes("assertFocusedReferenceVisible(page, links.nth(previous))"));});
