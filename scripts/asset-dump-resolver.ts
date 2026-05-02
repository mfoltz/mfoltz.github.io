import { readdir, stat } from "node:fs/promises";
import path from "node:path";

export interface AssetDumpCandidate {
  path: string;
  source: string;
}

export interface AssetDumpInspection {
  path: string;
  source: string;
  status: "available" | "missing";
  reason?: string;
  iconCount?: number;
}

export interface AssetDumpResolution {
  assetDumpDir: string;
  iconSourceDir: string;
  iconCount: number;
  source: string;
  checked: AssetDumpInspection[];
}

function splitConfiguredPaths(value: string | undefined): string[] {
  return (value ?? "")
    .split(/[;,\r\n]+/g)
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export function buildAssetDumpCandidates(env: Partial<Record<"VRISING_ASSET_DUMP_DIR" | "VRISING_ASSET_DUMP_DIRS", string>> = process.env): AssetDumpCandidate[] {
  const candidates: AssetDumpCandidate[] = [];
  const single = env.VRISING_ASSET_DUMP_DIR;
  if (single && single.trim()) {
    candidates.push({ path: single.trim(), source: "VRISING_ASSET_DUMP_DIR" });
  }

  for (const configuredPath of splitConfiguredPaths(env.VRISING_ASSET_DUMP_DIRS)) {
    candidates.push({ path: configuredPath, source: "VRISING_ASSET_DUMP_DIRS" });
  }

  const deduped = new Map<string, AssetDumpCandidate>();
  for (const candidate of candidates) {
    deduped.set(path.resolve(candidate.path).toLowerCase(), {
      path: path.resolve(candidate.path),
      source: candidate.source
    });
  }
  return [...deduped.values()];
}

export function formatAssetDumpSetupHint(): string {
  return [
    "Set VRISING_ASSET_DUMP_DIR to one AssetRipper-style dump root, or set VRISING_ASSET_DUMP_DIRS to multiple roots separated by comma, semicolon, or newline.",
    "A usable dump must contain Texture2D/ with Stunlock_Icon_*.png files."
  ].join(" ");
}

async function directoryExists(directoryPath: string): Promise<boolean> {
  try {
    return (await stat(directoryPath)).isDirectory();
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

async function inspectAssetDumpCandidate(candidate: AssetDumpCandidate): Promise<AssetDumpInspection> {
  if (!(await directoryExists(candidate.path))) {
    return { path: candidate.path, source: candidate.source, status: "missing", reason: "directory not found" };
  }

  const iconSourceDir = path.join(candidate.path, "Texture2D");
  if (!(await directoryExists(iconSourceDir))) {
    return { path: candidate.path, source: candidate.source, status: "missing", reason: "Texture2D directory not found" };
  }

  const textureFiles = await readdir(iconSourceDir);
  const iconCount = textureFiles.filter((fileName) => /^Stunlock_Icon_.*\.png$/i.test(fileName)).length;
  if (iconCount === 0) {
    return { path: candidate.path, source: candidate.source, status: "missing", reason: "no Stunlock icon PNGs found", iconCount };
  }

  return { path: candidate.path, source: candidate.source, status: "available", iconCount };
}

export async function inspectAssetDumpCandidates(): Promise<AssetDumpInspection[]> {
  return Promise.all(buildAssetDumpCandidates().map((candidate) => inspectAssetDumpCandidate(candidate)));
}

export async function resolveAssetDumpDir(): Promise<AssetDumpResolution> {
  const checked = await inspectAssetDumpCandidates();
  const usable = checked.find((candidate) => candidate.status === "available" && typeof candidate.iconCount === "number");
  if (!usable || usable.iconCount === undefined) {
    const details = checked.map((candidate) => `- ${candidate.path} [${candidate.source}]: ${candidate.reason ?? candidate.status}`).join("\n");
    throw new Error(`No usable asset dump found. ${formatAssetDumpSetupHint()}${details ? `\nChecked:\n${details}` : ""}`);
  }

  return {
    assetDumpDir: usable.path,
    iconSourceDir: path.join(usable.path, "Texture2D"),
    iconCount: usable.iconCount,
    source: usable.source,
    checked
  };
}
