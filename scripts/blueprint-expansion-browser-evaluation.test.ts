import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";
import { clipboardMockSource, measureReferenceSource, type ExpansionPageMeasurement } from "./blueprint-expansion-browser-evaluation";

test("actual tsx serialization reproduces the missing name helper in both old callback shapes", () => {
  const clipboard = () => { Object.defineProperty(navigator, "clipboard", { configurable: true,
    value: { writeText: async (value: string) => { (window as unknown as { copiedGuid: string }).copiedGuid = value; } } }); };
  const measurement = () => { const box = (element: { x: number }) => ({ x: element.x }); return box({ x: 12 }); };
  for (const callback of [clipboard, measurement]) {
    assert(callback.toString().includes("__name"), "Exercise the actual tsx name-preservation boundary");
    assert.throws(() => vm.runInNewContext("(" + callback.toString() + ")()", { navigator: {}, window: {} }), /__name is not defined/);
  }
});

test("self-contained clipboard mock records complete signed and zero GUIDs without the system clipboard", async () => {
  const context = { navigator: {} as { clipboard?: { writeText(value: string): Promise<void> } }, window: {} as { copiedGuid?: string } };
  assert(!clipboardMockSource.includes("__name"));
  assert.equal(vm.runInNewContext(clipboardMockSource, context), undefined);
  for (const value of ["-1473915226", "0", "2147483647"]) {
    await context.navigator.clipboard!.writeText(value);
    assert.equal(context.window.copiedGuid, value);
  }
});

test("self-contained measurements retain every field for nonempty cards and optional metadata", () => {
  const rectangle = { x: 20, y: 10, right: 280, bottom: 30, width: 260 };
  const element = (textContent: string) => ({ textContent, scrollWidth: 260, clientWidth: 260,
    getBoundingClientRect: () => ({ ...rectangle }) });
  const title = element("Exact title"), prefab = element("BP_Complete_Prefab"), amount = element("12 required");
  for (const withMetadata of [false, true]) {
    const metadata = { ...element("12 required -2147483648"), firstElementChild: amount };
    const fields = [title, prefab, ...(withMetadata ? [metadata] : [])];
    const card = { ...element("whole card"),
      querySelector: (selector: string) => selector.includes("title") ? title : selector.includes("prefab") ? prefab : withMetadata ? metadata : null,
      querySelectorAll: () => fields };
    const hidden = { getBoundingClientRect: () => ({ width: 0 }) };
    const context = { innerWidth: 320, document: { documentElement: { scrollWidth: 320 }, querySelectorAll: () => [card, hidden] } };
    assert(!measureReferenceSource.includes("__name"));
    const actual = JSON.parse(JSON.stringify(vm.runInNewContext(measureReferenceSource, context))) as ExpansionPageMeasurement;
    const box = { x: 20, y: 10, right: 280, bottom: 30 };
    assert.deepEqual(actual, { width: 320, overflow: 0, cards: [{ card: box, title: box, prefab: box,
      metadata: withMetadata ? box : null, metadataContent: withMetadata ? box : null,
      fields: fields.map(field => ({ text: field.textContent, box, overflow: 0 })) }] });
  }
});
