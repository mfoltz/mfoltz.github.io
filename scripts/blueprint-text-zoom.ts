import assert from "node:assert/strict";
import { createHash, generateKeyPairSync } from "node:crypto";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { chromium, type BrowserContext } from "playwright";

type ZoomEvent = { stage: string; status: string; detail?: string };

export function nativeZoomRecorder(output: string) {
  const stages: unknown[] = [];
  return async (event: ZoomEvent) => {
    stages.push({ timestamp: new Date().toISOString(), event });
    await writeFile(path.join(output, "native-zoom-stages.json"), JSON.stringify(stages, null, 2));
    console.log("Native zoom:", JSON.stringify(event));
  };
}

/** Private browser-test controller; sets real tab zoom without background-worker timing. */
export async function openNativeZoomController(base: string, theme: "dark" | "light", record: (event: ZoomEvent) => Promise<void>) {
  assert(["localhost", "127.0.0.1"].includes(new URL(base).hostname));
  const runtime = await mkdtemp(path.join(tmpdir(), "blueprint-zoom-"));
  let context: BrowserContext | undefined;
  const close = async () => {
    try { await context?.close(); } finally {
      assert.equal(path.dirname(runtime), path.resolve(tmpdir()));
      assert(path.basename(runtime).startsWith("blueprint-zoom-"));
      await rm(runtime, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
    }
  };
  try {
    const extension = path.join(runtime, "extension");
    await mkdir(extension);
    const key = generateKeyPairSync("rsa", { modulusLength: 2048 }).publicKey.export({ type: "spki", format: "der" });
    const extensionId = blueprintZoomExtensionId(key);
    await writeFile(path.join(extension, "manifest.json"), JSON.stringify({ manifest_version: 3, name: "Local native zoom controller", version: "1.0",
      key: key.toString("base64"), host_permissions: [new URL(base).origin + "/*"] }));
    await writeFile(path.join(extension, "zoom.html"), "<!doctype html><title>Owned native zoom controller</title>");
    context = await chromium.launchPersistentContext(path.join(runtime, "profile"), { channel: "chromium", headless: true,
      viewport: { width: 1280, height: 960 }, colorScheme: theme,
      args: [`--disable-extensions-except=${extension}`, `--load-extension=${extension}`] });
    await context.addInitScript(value => localStorage.setItem("vrising-theme", value), theme);
    const page = context.pages()[0] ?? await context.newPage();
    const controller = await context.newPage();
    await blueprintZoomStage(`${theme}: controller readiness`, () => controller.goto(`chrome-extension://${extensionId}/zoom.html`, { timeout: 15_000 }), record);
    assert.equal(new URL(controller.url()).hostname, extensionId);
    assert.equal(await blueprintZoomStage(`${theme}: extension identity`, () => controller.evaluate(() =>
      (globalThis as unknown as { chrome: { runtime: { id: string } } }).chrome.runtime.id), record), extensionId);
    const setZoom = async () => {
      const tabs = await blueprintZoomStage(`${theme}: tabs.query`, () => controller.evaluate(async url =>
        (globalThis as unknown as { chrome: { tabs: { query(input: { url: string }): Promise<{ id: number }[]> } } }).chrome.tabs.query({ url }),
      new URL(base).origin + "/*"), record);
      assert.equal(tabs.length, 1, "Exactly one owned preview tab required");
      const id = tabs[0].id; assert(Number.isSafeInteger(id));
      await blueprintZoomStage(`${theme}: tabs.setZoom`, () => controller.evaluate(async tabId =>
        (globalThis as unknown as { chrome: { tabs: { setZoom(id: number, factor: number): Promise<void> } } }).chrome.tabs.setZoom(tabId, 2), id), record);
      return blueprintZoomStage(`${theme}: tabs.getZoom`, () => controller.evaluate(async tabId =>
        (globalThis as unknown as { chrome: { tabs: { getZoom(id: number): Promise<number> } } }).chrome.tabs.getZoom(tabId), id), record);
    };
    return { context, page, setZoom, close };
  } catch (error) { await close(); throw error; }
}

export function blueprintZoomExtensionId(publicKey: Uint8Array): string {
  if (!publicKey.length) throw new Error("Native zoom extension public key is empty");
  return createHash("sha256").update(publicKey).digest("hex").slice(0, 32)
    .replace(/[0-9a-f]/g, digit => "abcdefghijklmnop"[parseInt(digit, 16)]);
}

// Browser evaluations have no default deadline. Keep failures local to their stage.
export async function blueprintZoomStage<T>(stage: string, operation: () => Promise<T>,
  record: (event: ZoomEvent) => Promise<void>, deadlineMs = 15_000): Promise<T> {
  await record({ stage, status: "started" });
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const result = await Promise.race([operation(), new Promise<never>((_, reject) => {
      timer = setTimeout(() => reject(new Error(`Native zoom ${stage} exceeded ${deadlineMs}ms`)), deadlineMs);
    })]);
    await record({ stage, status: "passed" });
    return result;
  } catch (error) {
    await record({ stage, status: "failed", detail: String(error) });
    throw error;
  } finally { if (timer) clearTimeout(timer); }
}
