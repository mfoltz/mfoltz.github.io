import { copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { AssetDumpResolution } from "./asset-dump-resolver";
import { resolveAssetDumpDir } from "./asset-dump-resolver";

const lockSchemaVersion = 1;
const lockFileName = "asset-dump-lock.json";
const sourceKind = "assetripper-style-dump";
const expectedFolders = ["MonoBehaviour", "Sprite", "TextAsset", "Texture2D"];
const publicIconDirs = [
  ["public/icons/abilities", "abilities"],
  ["public/icons/items", "items"],
  ["public/icons/buildables", "buildables"],
  ["public/icons/npcs", "npcs"]
] as const;

interface TextureRecord {
  name: string;
  sizeBytes: number;
  sha256: string;
}

interface AssetDumpLockSnapshot {
  schemaVersion: typeof lockSchemaVersion;
  sourceKind: string;
  expectedFolders: string[];
  texturePngCount: number;
  stunlockIconPngCount: number;
  textureAggregateSha256: string;
  materializedPublicIconCount: number;
  materializedIcons: Record<string, string>;
}

interface SyncIconDirectoryOptions {
  sourceDir: string;
  targetDir: string;
  fileNames: string[];
}

interface SyncAssetRefDirectoryOptions {
  assetDumpDir: string;
  targetDir: string;
  files: Array<{ fileName: string; sourceRef: string }>;
}

export interface SyncIconDirectoryResult {
  copied: number;
  deleted: number;
  unchanged: number;
}

function toPosix(value: string): string {
  return value.replace(/\\/g, "/");
}

function lockPath(repoRoot: string): string {
  return path.join(repoRoot, "data", "enrichment", lockFileName);
}

function isNotFound(error: unknown): boolean {
  return Boolean(error && typeof error === "object" && "code" in error && error.code === "ENOENT");
}

async function pathExists(filePath: string): Promise<boolean> {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if (isNotFound(error)) {
      return false;
    }
    throw error;
  }
}

async function assertDirectory(directoryPath: string, label: string): Promise<void> {
  try {
    const stats = await stat(directoryPath);
    if (!stats.isDirectory()) {
      throw new Error(`${label} is not a directory: ${directoryPath}`);
    }
  } catch (error) {
    if (isNotFound(error)) {
      throw new Error(`${label} not found: ${directoryPath}`);
    }
    throw error;
  }
}

async function sha256File(filePath: string): Promise<string> {
  const bytes = await readFile(filePath);
  return createHash("sha256").update(bytes).digest("hex").toUpperCase();
}

function sha256Text(value: string): string {
  return createHash("sha256").update(value, "utf8").digest("hex").toUpperCase();
}

async function listDirectFiles(directoryPath: string): Promise<string[]> {
  const entries = await readdir(directoryPath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
}

async function readJsonFile<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, "utf8")) as T;
}

function stableJson(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`;
}

async function computeTextureRecords(iconSourceDir: string): Promise<TextureRecord[]> {
  const texturePngFiles = (await listDirectFiles(iconSourceDir)).filter((fileName) => /\.png$/i.test(fileName));
  const records: TextureRecord[] = [];
  for (const fileName of texturePngFiles) {
    const filePath = path.join(iconSourceDir, fileName);
    const stats = await stat(filePath);
    records.push({
      name: fileName,
      sizeBytes: stats.size,
      sha256: await sha256File(filePath)
    });
  }
  return records.sort((left, right) => left.name.localeCompare(right.name));
}

function aggregateTextureRecords(records: TextureRecord[]): string {
  return sha256Text(records.map((record) => `${record.name}\t${record.sizeBytes}\t${record.sha256}`).join("\n"));
}

async function resolveMaterializedIconSource(assetDumpDir: string, fileName: string): Promise<string | undefined> {
  for (const folderName of ["Texture2D", "Sprite"]) {
    const filePath = path.join(assetDumpDir, folderName, fileName);
    if (await pathExists(filePath)) {
      return filePath;
    }
  }
  return undefined;
}

async function computeMaterializedIconEntries(repoRoot: string, assetDumpDir: string): Promise<Record<string, string>> {
  const entries: Record<string, string> = {};
  for (const [relativeDir] of publicIconDirs) {
    const publicDir = path.join(repoRoot, ...relativeDir.split("/"));
    if (!(await pathExists(publicDir))) {
      continue;
    }

    const publicIconFiles = (await listDirectFiles(publicDir)).filter((fileName) => /\.png$/i.test(fileName));
    for (const fileName of publicIconFiles) {
      const publicFilePath = path.join(publicDir, fileName);
      const sourceFilePath = await resolveMaterializedIconSource(assetDumpDir, fileName);
      if (!sourceFilePath) {
        throw new Error(`Materialized icon is missing from asset dump: ${toPosix(path.relative(repoRoot, publicFilePath))} -> ${fileName}`);
      }

      const publicHash = await sha256File(publicFilePath);
      const sourceHash = await sha256File(sourceFilePath);
      if (publicHash !== sourceHash) {
        throw new Error(`Materialized icon differs from asset dump source: ${toPosix(path.relative(repoRoot, publicFilePath))}`);
      }

      entries[toPosix(path.join(relativeDir, fileName))] = sourceHash;
    }
  }
  return Object.fromEntries(Object.entries(entries).sort(([left], [right]) => left.localeCompare(right)));
}

export async function computeAssetDumpLockSnapshot(repoRoot: string, resolution: AssetDumpResolution): Promise<AssetDumpLockSnapshot> {
  for (const folderName of expectedFolders) {
    await assertDirectory(path.join(resolution.assetDumpDir, folderName), `Asset dump ${folderName} folder`);
  }

  const textureRecords = await computeTextureRecords(resolution.iconSourceDir);
  const materializedIcons = await computeMaterializedIconEntries(repoRoot, resolution.assetDumpDir);
  return {
    schemaVersion: lockSchemaVersion,
    sourceKind,
    expectedFolders,
    texturePngCount: textureRecords.length,
    stunlockIconPngCount: textureRecords.filter((record) => /^Stunlock_Icon_.*\.png$/i.test(record.name)).length,
    textureAggregateSha256: aggregateTextureRecords(textureRecords),
    materializedPublicIconCount: Object.keys(materializedIcons).length,
    materializedIcons
  };
}

function compareScalar<T>(mismatches: string[], label: string, expected: T, actual: T): void {
  if (expected !== actual) {
    mismatches.push(`${label}: expected ${expected}, got ${actual}`);
  }
}

function compareStringArrays(mismatches: string[], label: string, expected: string[], actual: string[]): void {
  const expectedValue = expected.join(", ");
  const actualValue = actual.join(", ");
  if (expectedValue !== actualValue) {
    mismatches.push(`${label}: expected [${expectedValue}], got [${actualValue}]`);
  }
}

function compareMaterializedIcons(
  mismatches: string[],
  expected: Record<string, string>,
  actual: Record<string, string>
): void {
  const expectedKeys = Object.keys(expected).sort((left, right) => left.localeCompare(right));
  const actualKeys = Object.keys(actual).sort((left, right) => left.localeCompare(right));
  for (const key of expectedKeys.filter((entry) => !actual[entry])) {
    mismatches.push(`materialized icon missing: ${key}`);
  }
  for (const key of actualKeys.filter((entry) => !expected[entry])) {
    mismatches.push(`materialized icon not recorded in lock: ${key}`);
  }
  for (const key of expectedKeys.filter((entry) => actual[entry])) {
    if (expected[key] !== actual[key]) {
      mismatches.push(`${key}: sha256 expected ${expected[key]}, got ${actual[key]}`);
    }
  }
}

function compareSnapshots(expected: AssetDumpLockSnapshot, actual: AssetDumpLockSnapshot): string[] {
  const mismatches: string[] = [];
  compareScalar(mismatches, "schemaVersion", expected.schemaVersion, actual.schemaVersion);
  compareScalar(mismatches, "sourceKind", expected.sourceKind, actual.sourceKind);
  compareStringArrays(mismatches, "expectedFolders", expected.expectedFolders, actual.expectedFolders);
  compareScalar(mismatches, "texturePngCount", expected.texturePngCount, actual.texturePngCount);
  compareScalar(mismatches, "stunlockIconPngCount", expected.stunlockIconPngCount, actual.stunlockIconPngCount);
  compareScalar(mismatches, "textureAggregateSha256", expected.textureAggregateSha256, actual.textureAggregateSha256);
  compareScalar(mismatches, "materializedPublicIconCount", expected.materializedPublicIconCount, actual.materializedPublicIconCount);
  compareMaterializedIcons(mismatches, expected.materializedIcons, actual.materializedIcons);
  return mismatches;
}

export async function assertAssetDumpLock(repoRoot: string, resolution: AssetDumpResolution): Promise<void> {
  const expected = await readJsonFile<AssetDumpLockSnapshot>(lockPath(repoRoot));
  const actual = await computeAssetDumpLockSnapshot(repoRoot, resolution);
  const mismatches = compareSnapshots(expected, actual);
  if (mismatches.length > 0) {
    throw new Error(`Asset dump lock mismatch:\n${mismatches.map((entry) => `- ${entry}`).join("\n")}`);
  }
}

export async function writeAssetDumpLock(repoRoot: string, resolution: AssetDumpResolution): Promise<void> {
  const snapshot = await computeAssetDumpLockSnapshot(repoRoot, resolution);
  const outputPath = lockPath(repoRoot);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, stableJson(snapshot));
}

export async function syncIconDirectory({ sourceDir, targetDir, fileNames }: SyncIconDirectoryOptions): Promise<SyncIconDirectoryResult> {
  const expectedFileNames = [...new Set(fileNames)].sort((left, right) => left.localeCompare(right));
  const expectedSet = new Set(expectedFileNames);
  let copied = 0;
  let deleted = 0;
  let unchanged = 0;

  await mkdir(targetDir, { recursive: true });
  const existingEntries = await readdir(targetDir, { withFileTypes: true });
  for (const entry of existingEntries) {
    const targetPath = path.join(targetDir, entry.name);
    if (entry.isDirectory()) {
      throw new Error(`Unexpected directory in icon output: ${targetPath}`);
    }
    if (entry.isFile() && !expectedSet.has(entry.name)) {
      await rm(targetPath, { force: true });
      deleted += 1;
    }
  }

  for (const fileName of expectedFileNames) {
    const sourcePath = path.join(sourceDir, fileName);
    const targetPath = path.join(targetDir, fileName);
    if (!(await pathExists(sourcePath))) {
      throw new Error(`Expected icon source not found: ${sourcePath}`);
    }

    if ((await pathExists(targetPath)) && (await sha256File(sourcePath)) === (await sha256File(targetPath))) {
      unchanged += 1;
      continue;
    }

    await copyFile(sourcePath, targetPath);
    copied += 1;
  }

  return { copied, deleted, unchanged };
}

export async function syncAssetRefDirectory({ assetDumpDir, targetDir, files }: SyncAssetRefDirectoryOptions): Promise<SyncIconDirectoryResult> {
  const expectedFiles = [...new Map(files.map((file) => [file.fileName, file])).values()].sort((left, right) => left.fileName.localeCompare(right.fileName));
  const expectedSet = new Set(expectedFiles.map((file) => file.fileName));
  let copied = 0;
  let deleted = 0;
  let unchanged = 0;

  await mkdir(targetDir, { recursive: true });
  const existingEntries = await readdir(targetDir, { withFileTypes: true });
  for (const entry of existingEntries) {
    const targetPath = path.join(targetDir, entry.name);
    if (entry.isDirectory()) {
      throw new Error(`Unexpected directory in icon output: ${targetPath}`);
    }
    if (entry.isFile() && !expectedSet.has(entry.name)) {
      await rm(targetPath, { force: true });
      deleted += 1;
    }
  }

  for (const file of expectedFiles) {
    const sourcePath = path.join(assetDumpDir, ...file.sourceRef.split("/"));
    const targetPath = path.join(targetDir, file.fileName);
    if (!(await pathExists(sourcePath))) {
      throw new Error(`Expected buildable portrait source not found: ${sourcePath}`);
    }

    if ((await pathExists(targetPath)) && (await sha256File(sourcePath)) === (await sha256File(targetPath))) {
      unchanged += 1;
      continue;
    }

    await copyFile(sourcePath, targetPath);
    copied += 1;
  }

  return { copied, deleted, unchanged };
}

async function main(): Promise<void> {
  const scriptIndex = process.argv.findIndex((arg) => toPosix(arg).endsWith("scripts/asset-dump-lock.ts"));
  const mode = process.argv[scriptIndex + 1] ?? "check";
  if (mode !== "check" && mode !== "update") {
    throw new Error(`Usage: jiti scripts/asset-dump-lock.ts <check|update>`);
  }

  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const resolution = await resolveAssetDumpDir();
  if (mode === "update") {
    await writeAssetDumpLock(repoRoot, resolution);
    console.log(`Updated ${toPosix(path.relative(repoRoot, lockPath(repoRoot)))} from ${resolution.assetDumpDir}`);
    return;
  }

  await assertAssetDumpLock(repoRoot, resolution);
  console.log(`Asset dump lock matches ${resolution.assetDumpDir}`);
}

if (process.argv.some((arg) => toPosix(arg).endsWith("scripts/asset-dump-lock.ts"))) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
