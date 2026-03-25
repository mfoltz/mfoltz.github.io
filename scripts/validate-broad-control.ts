import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

type BroadIndexEntry = {
  subtitle?: string;
  tags?: string[];
};

type ControlRow = {
  PrefabName?: string;
};

type ControlSpec = {
  section: "abilities" | "items" | "recipes";
  fileName: "AbilityGroupsClient.json" | "ItemsClient.json" | "RecipesClient.json";
  floor: number;
};

const controlSpecs: ControlSpec[] = [
  { section: "abilities", fileName: "AbilityGroupsClient.json", floor: 2010 },
  { section: "items", fileName: "ItemsClient.json", floor: 1076 },
  { section: "recipes", fileName: "RecipesClient.json", floor: 667 }
];

async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, "utf8")) as T;
}

async function pathExists(target: string): Promise<boolean> {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

async function collectMatchingFiles(dir: string, fileName: string, results: string[] = []): Promise<string[]> {
  if (!(await pathExists(dir))) {
    return results;
  }

  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectMatchingFiles(fullPath, fileName, results);
      continue;
    }

    if (entry.isFile() && entry.name === fileName) {
      results.push(fullPath);
    }
  }

  return results;
}

function getBroadPrefab(entry: BroadIndexEntry): string | null {
  if (Array.isArray(entry.tags) && typeof entry.tags[0] === "string" && entry.tags[0].trim().length > 0) {
    return entry.tags[0].trim();
  }

  if (typeof entry.subtitle === "string" && entry.subtitle.trim().length > 0) {
    return entry.subtitle.trim();
  }

  return null;
}

function byPreference(spec: ControlSpec, a: { filePath: string; count: number; mtimeMs: number }, b: { filePath: string; count: number; mtimeMs: number }): number {
  const aExact = Number(a.count === spec.floor);
  const bExact = Number(b.count === spec.floor);
  if (aExact !== bExact) {
    return bExact - aExact;
  }

  const aDumpOnly = Number(a.filePath.includes("vrising-dataextractor-client-connect-full-dumponly"));
  const bDumpOnly = Number(b.filePath.includes("vrising-dataextractor-client-connect-full-dumponly"));
  if (aDumpOnly !== bDumpOnly) {
    return bDumpOnly - aDumpOnly;
  }

  const aProfiles = Number(a.filePath.includes(`${path.sep}persistent-data${path.sep}profiles${path.sep}`));
  const bProfiles = Number(b.filePath.includes(`${path.sep}persistent-data${path.sep}profiles${path.sep}`));
  if (aProfiles !== bProfiles) {
    return bProfiles - aProfiles;
  }

  const aDistance = Math.abs(a.count - spec.floor);
  const bDistance = Math.abs(b.count - spec.floor);
  if (aDistance !== bDistance) {
    return aDistance - bDistance;
  }

  return b.mtimeMs - a.mtimeMs;
}

async function findControlArtifact(extractorRoot: string, spec: ControlSpec): Promise<{ filePath: string; prefabs: string[]; count: number } | null> {
  const searchRoots = [
    path.join(extractorRoot, ".codex", "persistent-data", "profiles"),
    path.join(extractorRoot, ".codex", "runs")
  ];
  const candidateFiles = (await Promise.all(searchRoots.map((root) => collectMatchingFiles(root, spec.fileName)))).flat();
  const candidates: Array<{ filePath: string; prefabs: string[]; count: number; mtimeMs: number }> = [];

  for (const filePath of candidateFiles) {
    let rows: ControlRow[];
    try {
      rows = await readJson<ControlRow[]>(filePath);
    } catch {
      continue;
    }

    if (!Array.isArray(rows) || rows.length === 0) {
      continue;
    }

    const prefabs = rows
      .map((row) => (typeof row.PrefabName === "string" ? row.PrefabName.trim() : ""))
      .filter((value): value is string => value.length > 0);

    if (prefabs.length < spec.floor) {
      continue;
    }

    const fileStat = await stat(filePath);
    candidates.push({ filePath, prefabs, count: prefabs.length, mtimeMs: fileStat.mtimeMs });
  }

  if (candidates.length === 0) {
    return null;
  }

  candidates.sort((a, b) => byPreference(spec, a, b));
  const winner = candidates[0];

  return {
    filePath: winner.filePath,
    prefabs: winner.prefabs,
    count: winner.count
  };
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const extractorRoot =
    process.env.VRISING_DATAEXTRACTOR_ROOT ?? path.resolve(repoRoot, "..", "VRising.DataExtractor");

  if (!(await pathExists(extractorRoot))) {
    console.warn(`Broad control validation skipped: extractor repo not found at '${extractorRoot}'.`);
    return;
  }

  const failures: string[] = [];

  for (const spec of controlSpecs) {
    const broadIndexPath = path.join(repoRoot, "public", "data", "db", spec.section, "index.json");
    const broadEntries = await readJson<BroadIndexEntry[]>(broadIndexPath);
    const broadPrefabs = new Set(broadEntries.map((entry) => getBroadPrefab(entry)).filter((value): value is string => Boolean(value)));
    const controlArtifact = await findControlArtifact(extractorRoot, spec);

    if (!controlArtifact) {
      failures.push(`${spec.section}: unable to find a control artifact for ${spec.fileName} at or above floor ${spec.floor}`);
      continue;
    }

    if (controlArtifact.count < spec.floor) {
      failures.push(`${spec.section}: control artifact '${controlArtifact.filePath}' only contains ${controlArtifact.count} records`);
      continue;
    }

    const missing = controlArtifact.prefabs.filter((prefab) => !broadPrefabs.has(prefab));
    if (missing.length > 0) {
      failures.push(
        `${spec.section}: broad index is missing ${missing.length} control prefab(s) from '${controlArtifact.filePath}'\n${missing
          .slice(0, 25)
          .map((prefab) => `  - ${prefab}`)
          .join("\n")}`
      );
      continue;
    }

    console.log(`${spec.section}: broad index covers ${controlArtifact.count} control prefabs from ${controlArtifact.filePath}`);
  }

  if (failures.length > 0) {
    throw new Error(`Broad control validation failed:\n${failures.map((failure) => `- ${failure}`).join("\n")}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
