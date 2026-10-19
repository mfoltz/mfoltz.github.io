import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import type { Page } from "playwright";
import type { DbEntityDetail, DbIndexEntry } from "../src/types/db";
import { exactBlueprint, externalOutputDirectory, loadedFontsSource, readReleaseFixtures,
  releaseBlueprintPins, smokeOptions, visibleImagesReadySource, decodeVisibleImagesSource, requireVisibleImages, withinSourceDisclosure } from "./release-smoke-support";

const root = fileURLToPath(new URL("../", import.meta.url));
test("explicit site URL and external evidence paths are portable; preflight needs no browser", () => {
  const options = smokeOptions(["--url", "https://example.test/", "--preflight"]);
  assert.equal(options.base, "https://example.test"); assert.equal(options.preflight, true);
  assert.equal(options.output, externalOutputDirectory(path.join(tmpdir(), "vrising-release-smoke")));
  assert.equal(smokeOptions(["--url", "http://127.0.0.1:5195"]).base, "http://127.0.0.1:5195");
});
for (const args of [[], ["--url"], ["--wat"], ["--url", "file:///tmp/site"],
  ["--url", "https://user:secret@example.test"], ["--url", "https://example.test/subdirectory/"],
  ["--url", "https://example.test/?cache=off"], ["--url", "https://example.test/#view"],
  ["--url", "https://example.test", "--url", "https://other.test"],
  ["--url", "https://example.test", "--output"]]) {
  test("rejects invalid CLI arguments " + JSON.stringify(args), () => assert.throws(() => smokeOptions(args)));
}

test("output may be external, but not inside a normal checkout or a linked worktree", () => {
  const directory = mkdtempSync(path.join(tmpdir(), "release-output-contract-"));
  try {
    for (const kind of ["checkout", "worktree"]) {
      const repository = path.join(directory, kind); mkdirSync(repository);
      if (kind === "checkout") mkdirSync(path.join(repository, ".git"));
      else writeFileSync(path.join(repository, ".git"), "gitdir: /elsewhere/worktrees/task\n");
      assert.throws(() => externalOutputDirectory(path.join(repository, "new", "captures")), /outside every Git checkout/);
    }
    assert.equal(externalOutputDirectory(path.join(directory, "external", "captures")), path.join(directory, "external", "captures"));
    assert.throws(() => externalOutputDirectory(path.join(root, "ignored-captures")), /outside every Git checkout/);
  } finally { rmSync(directory, { recursive: true, force: true }); }
});

function fixture() {
  const pin = releaseBlueprintPins[1];
  const entry = { slug: "black-carpet", path: "/db/blueprints/black-carpet", title: "Exact carpet title",
    tags: [pin.prefab, String(pin.guid)] } as DbIndexEntry;
  const detail = { ...entry, prefab: pin.prefab, guid: pin.guid, sourcePath: "content/prefabs/" + pin.prefab + ".md",
    prefabPath: "/prefabs/black-carpet" } as DbEntityDetail;
  return { pin, entries: [entry], detail, canonical: { [pin.prefab]: pin.guid } as Record<string, number> };
}
test("complete hyphenated identity joins independently of artwork or duplicate display names", () => {
  const f = fixture(); f.entries.push({ ...f.entries[0], slug: "other", tags: ["Other", "-1"] });
  assert.equal(exactBlueprint(f.pin, f.entries, f.detail, f.canonical).detail.guid, 2126004642);
  assert.equal(f.detail.portraitAssetPath, undefined);
});
for (const [name, mutate] of Object.entries({
  missing: (f: ReturnType<typeof fixture>) => { f.entries = []; },
  ambiguous: (f: ReturnType<typeof fixture>) => { f.entries.push({ ...f.entries[0] }); },
  destination: (f: ReturnType<typeof fixture>) => { f.entries[0].path += "-other"; },
  slug: (f: ReturnType<typeof fixture>) => { f.detail.slug = "wrong"; },
  title: (f: ReturnType<typeof fixture>) => { f.detail.title = "wrong"; },
  prefab: (f: ReturnType<typeof fixture>) => { f.detail.prefab += "_Other"; },
  guid: (f: ReturnType<typeof fixture>) => { f.detail.guid = -f.pin.guid; },
  canonical: (f: ReturnType<typeof fixture>) => { f.canonical[f.pin.prefab] = 0; },
  tag: (f: ReturnType<typeof fixture>) => { f.entries[0].tags = [f.pin.prefab, String(-f.pin.guid)]; },
  source: (f: ReturnType<typeof fixture>) => { f.detail.sourcePath += ".other"; },
  sourceRoute: (f: ReturnType<typeof fixture>) => { f.detail.prefabPath = "https://elsewhere.test/"; }
})) test("rejects " + name + " disagreement before browser launch", () => {
  const f = fixture(); mutate(f); assert.throws(() => exactBlueprint(f.pin, f.entries, f.detail, f.canonical));
});

test("the eight accepted fixtures and Stone Brick resolve using only repository data", async () => {
  const f = await readReleaseFixtures(root);
  assert.equal(f.blueprints.length, 8); assert.equal(new Set(releaseBlueprintPins.map(pin => pin.prefab)).size, 8);
  assert.deepEqual(f.blueprints.map(row => [row.detail.prefab, row.detail.guid]), releaseBlueprintPins.map(pin => [pin.prefab, pin.guid]));
  assert(f.blueprints.some(row => row.detail.guid! < 0));
  assert.equal(f.stone.prefab, "Item_Ingredient_StoneBrick"); assert(f.stone.materialBlueprints!.length >= 24);
  assert.equal(f.target.path, f.linked.entry.path); assert.equal(f.target.title, f.linked.detail.title);
});

test("font evaluation is self-contained and requires a loaded face for both families", async () => {
  assert(!loadedFontsSource.includes("__name"));
  for (const missing of ["", "Inter", "Cinzel"]) {
    const calls: string[] = [];
    const document = { fonts: { ready: Promise.resolve(), load: async (font: string) => {
      calls.push(font); return missing && font.includes(missing) ? [] : [{ status: "loaded" }];
    } } };
    assert.equal(await vm.runInNewContext(loadedFontsSource, { document }), missing === "");
    assert.deepEqual(calls, ["400 16px Inter", "500 16px Cinzel"]);
  }
  await assert.rejects(vm.runInNewContext(loadedFontsSource, { document: { fonts: {
    ready: Promise.resolve(), load: async () => { throw new Error("Font request blocked"); }
  } } }), /Font request blocked/);
});

for (const initiallyOpen of [false, true]) for (const fail of [false, true]) {
  test("source inspection restores disclosure and viewport: open=" + initiallyOpen + ", failure=" + fail, async () => {
    let open = initiallyOpen, position = { x: 0, y: 300 }, toggles = 0;
    const access = { isOpen: async () => open, position: async () => ({ ...position }),
      toggle: async () => { open = !open; toggles++; position.y = 900; },
      restore: async (value: typeof position) => { position = value; } };
    const promise = withinSourceDisclosure(access, async () => {
      assert(open, "GUID is checked in the open disclosure"); position.y = 1200;
      if (fail) throw new Error("Exact signed GUID missing");
    });
    if (fail) await assert.rejects(promise, /Exact signed GUID missing/); else await promise;
    assert.equal(open, initiallyOpen); assert.deepEqual(position, { x: 0, y: 300 });
    assert.equal(toggles, initiallyOpen ? 0 : 2);
  });
}


test("capture readiness waits for visible image bytes and decoding, without waiting on offscreen lazy artwork", async () => {
  assert(!visibleImagesReadySource.includes("__name"));
  let decodes = 0;
  const image = (complete: boolean, naturalWidth: number, top = 20) => ({ complete, naturalWidth,
    getBoundingClientRect: () => ({ left: 0, right: 100, top, bottom: top + 100, width: 100, height: 100 }),
    decode: async () => { decodes++; } });
  for (const images of [[image(false, 100)], [image(true, 0)]]) {
    const result = vm.runInNewContext(visibleImagesReadySource, { document: { images }, innerWidth: 390, innerHeight: 960 });
    assert.equal(typeof result, "boolean", "Polling must not return a truthy Promise");
    assert.equal(result, false);
    assert.equal(decodes, 0);
  }
  const context = { document: { images: [image(true, 100), image(false, 0, 2000)] }, innerWidth: 390, innerHeight: 960 };
  assert.equal(vm.runInNewContext(visibleImagesReadySource, context), true);
  assert.equal(decodes, 0, "Polling does not start asynchronous decoding");
  assert(!decodeVisibleImagesSource.includes("__name"));
  assert.equal(await vm.runInNewContext(decodeVisibleImagesSource, context), true);
  assert.equal(decodes, 1);
});


function imageWaitPage(pollResult: unknown, decode: () => Promise<boolean>) {
  const observations = { disposed: false, decodeStarted: false };
  const page = {
    waitForFunction: async () => ({ jsonValue: async () => pollResult, dispose: async () => { observations.disposed = true; } }),
    evaluate: async () => { observations.decodeStarted = true; return decode(); }
  } as unknown as Page;
  return { page, observations };
}

test("an async-poll false result cannot be accepted or proceed to decoding", async () => {
  const f = imageWaitPage(false, async () => true);
  await assert.rejects(requireVisibleImages(f.page), /Image polling must return exactly true/);
  assert.equal(f.observations.disposed, true); assert.equal(f.observations.decodeStarted, false);
});

test("capture readiness remains pending until separate native decoding resolves", async () => {
  let resolveDecode!: (value: boolean) => void;
  const decode = new Promise<boolean>(resolve => { resolveDecode = resolve; });
  const f = imageWaitPage(true, () => decode);
  let finished = false;
  const ready = requireVisibleImages(f.page).then(() => { finished = true; });
  await new Promise<void>(resolve => setImmediate(resolve));
  assert(f.observations.disposed && f.observations.decodeStarted); assert.equal(finished, false);
  resolveDecode(true); await ready; assert.equal(finished, true);
});

test("native decode errors propagate without capture acceptance", async () => {
  const f = imageWaitPage(true, async () => { throw new Error("Native image decode failed"); });
  await assert.rejects(requireVisibleImages(f.page), /Native image decode failed/);
  assert.equal(f.observations.disposed, true);
});

test("images that become unloaded during decoding cannot pass readiness", async () => {
  const f = imageWaitPage(true, async () => false);
  await assert.rejects(requireVisibleImages(f.page), /Visible images must remain loaded after decoding/);
});
