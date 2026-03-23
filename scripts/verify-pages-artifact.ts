import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const expectedDistEntries = new Set([".nojekyll", "404.html", "assets", "data", "icons", "index.html"]);
const expectedPublicEntries = new Set([".nojekyll", "data", "icons"]);

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

async function readNames(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  return entries.map((entry) => entry.name).sort((left, right) => left.localeCompare(right));
}

function assertExactEntries(actual: string[], expected: Set<string>, label: string): void {
  const expectedNames = [...expected].sort((left, right) => left.localeCompare(right));
  assert(
    actual.length === expectedNames.length && actual.every((entry, index) => entry === expectedNames[index]),
    `${label}: expected only ${expectedNames.join(", ")}, found ${actual.join(", ")}`
  );
}

async function assertExists(filePath: string, label: string): Promise<void> {
  try {
    await stat(filePath);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      throw new Error(`${label}: missing '${filePath}'`);
    }

    throw error;
  }
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const distDir = path.join(repoRoot, "dist");
  const publicDir = path.join(repoRoot, "public");
  const distIndexPath = path.join(distDir, "index.html");
  const dist404Path = path.join(distDir, "404.html");
  const distNoJekyllPath = path.join(distDir, ".nojekyll");
  const distAssetsPath = path.join(distDir, "assets");
  const distDataPath = path.join(distDir, "data");
  const distIconsPath = path.join(distDir, "icons");

  await assertExists(distIndexPath, "dist artifact");
  await assertExists(dist404Path, "dist artifact");
  await assertExists(distNoJekyllPath, "dist artifact");
  await assertExists(distAssetsPath, "dist artifact");
  await assertExists(distDataPath, "dist artifact");
  await assertExists(distIconsPath, "dist artifact");

  const [distIndex, dist404] = await Promise.all([readFile(distIndexPath, "utf8"), readFile(dist404Path, "utf8")]);
  assert(distIndex === dist404, "dist artifact: index.html and 404.html must match exactly");

  const [distEntries, publicEntries] = await Promise.all([readNames(distDir), readNames(publicDir)]);
  assertExactEntries(distEntries, expectedDistEntries, "dist artifact");
  assertExactEntries(publicEntries, expectedPublicEntries, "public artifact");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
