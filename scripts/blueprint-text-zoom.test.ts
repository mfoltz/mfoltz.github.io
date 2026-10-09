import assert from "node:assert/strict";
import { test } from "node:test";
import { blueprintZoomExtensionId, blueprintZoomStage } from "./blueprint-text-zoom";

test("native zoom extension identity uses the complete public-key hash prefix", () => {
  // SHA256('abc') starts ba7816bf8f01cfea414140de5dae2223.
  assert.equal(blueprintZoomExtensionId(Buffer.from("abc")), "lkhibglpipabmpokebebeanofnkocccd");
  assert.throws(() => blueprintZoomExtensionId(new Uint8Array()), /public key is empty/);
  assert.notEqual(blueprintZoomExtensionId(Buffer.from("abc")), blueprintZoomExtensionId(Buffer.from("abd")));
});

test("native zoom stages retain exact results and errors", async () => {
  const events: unknown[] = [];
  const record = async (event: unknown) => { events.push(event); };
  assert.equal(await blueprintZoomStage("readback", async () => 2, record), 2);
  assert.deepEqual(events, [{ stage: "readback", status: "started" }, { stage: "readback", status: "passed" }]);
  const failure = new Error("Native API rejected");
  await assert.rejects(blueprintZoomStage("setZoom", async () => { throw failure; }, record), error => error === failure);
  assert.deepEqual(events.at(-1), { stage: "setZoom", status: "failed", detail: String(failure) });
});

test("a pending native zoom operation fails with its precise stage", async () => {
  const events: unknown[] = [];
  await assert.rejects(blueprintZoomStage("tabs.query", () => new Promise<never>(() => {}),
    async event => { events.push(event); }, 20), /Native zoom tabs.query exceeded 20ms/);
  assert.equal(events.length, 2);
  assert.deepEqual(events[0], { stage: "tabs.query", status: "started" });
  assert.match(JSON.stringify(events[1]), /failed.*tabs.query exceeded/);
});
