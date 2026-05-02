import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { classifyNpcDisplayCandidate, type NpcDisplayBucket } from "./npc-display-classification";

interface PrefabDisplayMapEntry {
  prefab: string;
  guid: number;
  displayNameEn?: string;
  displayLocalizationGuid?: string;
  summaryEn?: string;
  iconAssetName?: string;
  iconAssetPath?: string;
  sourceKind?: string;
  sourceRef?: string;
}

interface PrefabDocument {
  prefabName: string;
  guid: number | null;
  categories: string[];
  body: string;
}

interface ServerNpcRow {
  PrefabName?: string;
  NpcId?: number;
}

interface ClientNpcRow {
  ObservedPrefabName?: string;
  ObservedNpcId?: number;
  CanonicalPrefabName?: string;
  CanonicalNpcId?: number;
  LocalizedName?: LocalizedSnapshot;
  LocalizedDescription?: LocalizedSnapshot;
  Icon?: string;
}

interface ClientNpcDiagnosticRow {
  HasDisplaySignal?: boolean;
  CanonicalPrefabName?: string;
  CanonicalNpcId?: number;
}

interface LocalizedSnapshot {
  Text?: string;
  Key?: string;
}

type PrefabDisplayMapSnapshot = Record<string, PrefabDisplayMapEntry>;

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const defaultExtractorRunsDir = path.resolve(repoRoot, "..", "VRising.DataExtractor", ".codex", "runs");
const outputDir = path.join(repoRoot, ".codex-tmp", "npc-display-source-audit");

function parseStringList(raw: string | undefined): string[] {
  if (!raw) {
    return [];
  }
  return raw
    .replace(/[\[\]']/g, "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function parseFrontMatter(markdown: string): { body: string; frontMatter: Record<string, string> } {
  if (!markdown.startsWith("---")) {
    return { body: markdown, frontMatter: {} };
  }

  const end = markdown.indexOf("\n---", 3);
  if (end === -1) {
    return { body: markdown, frontMatter: {} };
  }

  const raw = markdown.slice(3, end).trim();
  const frontMatter: Record<string, string> = {};
  for (const line of raw.split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) {
      continue;
    }
    frontMatter[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }

  return { body: markdown.slice(end + 4), frontMatter };
}

async function readJsonIfExists<T>(filePath: string): Promise<T | null> {
  try {
    return JSON.parse(await readFile(filePath, "utf8")) as T;
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

async function walkFiles(dir: string, fileName: string): Promise<string[]> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }

  const matches: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      matches.push(...(await walkFiles(fullPath, fileName)));
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase() === fileName.toLowerCase()) {
      matches.push(fullPath);
    }
  }
  return matches;
}

async function findBestArtifact(fileName: string, options: { minBytes?: number; near?: string } = {}): Promise<string | null> {
  if (options.near) {
    const nearPath = path.join(path.dirname(options.near), fileName);
    try {
      const nearStat = await stat(nearPath);
      if (nearStat.isFile() && nearStat.size >= (options.minBytes ?? 0)) {
        return nearPath;
      }
    } catch {
      // Fall back to the recursive runs scan.
    }
  }

  const runsDir = process.env.VRISING_DATAEXTRACTOR_RUNS_DIR ?? defaultExtractorRunsDir;
  const candidates = await walkFiles(runsDir, fileName);
  const ranked = [];
  for (const candidate of candidates) {
    const candidateStat = await stat(candidate);
    if (candidateStat.size < (options.minBytes ?? 0)) {
      continue;
    }
    ranked.push({ filePath: candidate, size: candidateStat.size, mtimeMs: candidateStat.mtimeMs });
  }
  ranked.sort((left, right) => right.mtimeMs - left.mtimeMs || right.size - left.size || left.filePath.localeCompare(right.filePath));
  return ranked[0]?.filePath ?? null;
}

async function loadPrefabDocuments(): Promise<Map<string, PrefabDocument>> {
  const prefabsDir = path.join(repoRoot, "content", "prefabs");
  const fileNames = (await readdir(prefabsDir))
    .filter((fileName) => fileName.toLowerCase().endsWith(".md"))
    .sort((left, right) => left.localeCompare(right));
  const docs = new Map<string, PrefabDocument>();

  for (const fileName of fileNames) {
    const markdown = await readFile(path.join(prefabsDir, fileName), "utf8");
    const { body, frontMatter } = parseFrontMatter(markdown);
    const prefabName = (frontMatter.title ?? path.basename(fileName, ".md")).replace(/^"|"$/g, "");
    const guid = frontMatter.guid && /^-?\d+$/.test(frontMatter.guid) ? Number(frontMatter.guid) : null;
    docs.set(prefabName, { prefabName, guid, categories: parseStringList(frontMatter.categories), body });
  }

  return docs;
}

function hasDisplaySignal(entry: PrefabDisplayMapEntry): boolean {
  return Boolean(entry.displayNameEn || entry.displayLocalizationGuid || entry.summaryEn || entry.iconAssetName || entry.iconAssetPath);
}

function hasClientDisplaySignal(row: ClientNpcRow): boolean {
  return Boolean(row.LocalizedName?.Text || row.LocalizedName?.Key || row.LocalizedDescription?.Text || row.LocalizedDescription?.Key || row.Icon);
}

function increment(counts: Record<string, number>, key: string): void {
  counts[key] = (counts[key] ?? 0) + 1;
}

function samplePush(samples: Record<string, string[]>, key: string, prefab: string): void {
  const bucketSamples = samples[key] ?? [];
  if (bucketSamples.length < 12) {
    bucketSamples.push(prefab);
    samples[key] = bucketSamples;
  }
}

function sourceLabel(filePath: string | null): string {
  return filePath ? path.relative(repoRoot, filePath).replace(/\\/g, "/") : "not found";
}

async function main(): Promise<void> {
  const npcDisplayPath = path.join(repoRoot, "data", "enrichment", "npc-display-map.json");
  const displayMap = (await readJsonIfExists<PrefabDisplayMapSnapshot>(npcDisplayPath)) ?? {};
  const docsByPrefab = await loadPrefabDocuments();

  const serverPath =
    process.env.VRISING_NPC_SERVER_SOURCE ?? (await findBestArtifact("NpcsServer.json", { minBytes: 5 }));
  const clientPath =
    process.env.VRISING_NPC_CLIENT_SOURCE ?? (await findBestArtifact("NpcsClient.json", { minBytes: 5 }));
  const diagnosticsPath =
    process.env.VRISING_NPC_CLIENT_DIAGNOSTICS_SOURCE ?? (await findBestArtifact("NpcsClientDiagnostics.json", { minBytes: 5, near: clientPath ?? undefined }));

  const serverRows = serverPath ? ((await readJsonIfExists<ServerNpcRow[]>(serverPath)) ?? []) : [];
  const clientRows = clientPath ? ((await readJsonIfExists<ClientNpcRow[]>(clientPath)) ?? []) : [];
  const diagnosticRows = diagnosticsPath ? ((await readJsonIfExists<ClientNpcDiagnosticRow[]>(diagnosticsPath)) ?? []) : [];

  const serverNames = new Set(serverRows.map((row) => row.PrefabName).filter((value): value is string => Boolean(value)));
  const serverIds = new Set(serverRows.map((row) => row.NpcId).filter((value): value is number => typeof value === "number"));
  const clientCanonicalNames = new Set(clientRows.map((row) => row.CanonicalPrefabName).filter((value): value is string => Boolean(value)));
  const clientCanonicalIds = new Set(clientRows.map((row) => row.CanonicalNpcId).filter((value): value is number => typeof value === "number"));

  const entries = Object.values(displayMap);
  const lowSignalEntries = entries.filter((entry) => entry.sourceKind === "generated-fallback");
  const bucketCounts: Record<NpcDisplayBucket, number> = {
    "true-char-npc": 0,
    "server-known-npc": 0,
    "npc-component-evidence": 0,
    "client-canonical-only": 0,
    ragdoll: 0,
    "servant-system": 0,
    "vampire-player-castle-system": 0,
    "technical-prefab": 0,
    "non-npc-category": 0
  };
  const bucketSamples: Record<string, string[]> = {};
  const reasonCounts: Record<string, number> = {};

  for (const entry of lowSignalEntries) {
    const doc = docsByPrefab.get(entry.prefab);
    const serverKnown = serverNames.has(entry.prefab) || serverIds.has(entry.guid);
    const clientCanonical = clientCanonicalNames.has(entry.prefab) || clientCanonicalIds.has(entry.guid);
    const classification = classifyNpcDisplayCandidate({
      prefabName: entry.prefab,
      categories: doc?.categories,
      body: doc?.body,
      serverKnown,
      clientCanonical
    });
    bucketCounts[classification.bucket] += 1;
    increment(reasonCounts, classification.reason);
    samplePush(bucketSamples, classification.bucket, entry.prefab);
  }

  const clientCanonicalRows = clientRows.filter((row) => row.CanonicalPrefabName || typeof row.CanonicalNpcId === "number").length;
  const clientDisplayRows = clientRows.filter(hasClientDisplaySignal).length;
  const diagnosticDisplayRows = diagnosticRows.filter((row) => row.HasDisplaySignal).length;

  const summary = {
    generatedAt: new Date().toISOString(),
    sources: {
      npcDisplayMap: sourceLabel(npcDisplayPath),
      server: sourceLabel(serverPath),
      client: sourceLabel(clientPath),
      clientDiagnostics: sourceLabel(diagnosticsPath)
    },
    displayMap: {
      total: entries.length,
      highSignal: entries.filter((entry) => entry.sourceKind !== "generated-fallback" && hasDisplaySignal(entry)).length,
      generatedFallback: lowSignalEntries.length
    },
    server: {
      rows: serverRows.length,
      namedRows: serverNames.size
    },
    client: {
      rows: clientRows.length,
      canonicalRows: clientCanonicalRows,
      displaySignalRows: clientDisplayRows,
      diagnosticRows: diagnosticRows.length,
      diagnosticDisplaySignalRows: diagnosticDisplayRows
    },
    buckets: bucketCounts,
    reasons: reasonCounts,
    samples: bucketSamples
  };

  const lines = [
    "# NPC Display Source Audit",
    "",
    `Generated: ${summary.generatedAt}`,
    "",
    "## Sources",
    "",
    `- NPC display map: ${summary.sources.npcDisplayMap}`,
    `- Server NPC source: ${summary.sources.server}`,
    `- Client NPC source: ${summary.sources.client}`,
    `- Client diagnostics source: ${summary.sources.clientDiagnostics}`,
    "",
    "## Source Counts",
    "",
    "| Source | Rows | Notes |",
    "| --- | ---: | --- |",
    `| npc-display-map | ${summary.displayMap.total} | ${summary.displayMap.highSignal} high-signal, ${summary.displayMap.generatedFallback} generated fallback |`,
    `| NpcsServer | ${summary.server.rows} | ${summary.server.namedRows} named rows |`,
    `| NpcsClient | ${summary.client.rows} | ${summary.client.canonicalRows} canonical rows, ${summary.client.displaySignalRows} display-signal rows |`,
    `| NpcsClientDiagnostics | ${summary.client.diagnosticRows} | ${summary.client.diagnosticDisplaySignalRows} display-signal diagnostic rows |`,
    "",
    "## Generated Fallback Buckets",
    "",
    "| Bucket | Rows | Samples |",
    "| --- | ---: | --- |",
    ...Object.entries(bucketCounts).map(([bucket, count]) => `| ${bucket} | ${count} | ${(bucketSamples[bucket] ?? []).join(", ")} |`),
    "",
    "## Reason Counts",
    "",
    "| Reason | Rows |",
    "| --- | ---: |",
    ...Object.entries(reasonCounts)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([reason, count]) => `| ${reason} | ${count} |`),
    ""
  ];

  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "summary.json"), `${JSON.stringify(summary, null, 2)}\n`);
  await writeFile(path.join(outputDir, "report.md"), `${lines.join("\n")}\n`);

  console.log(`NPC display source audit written to ${path.relative(repoRoot, outputDir)}`);
  console.log(`generated fallback rows: ${lowSignalEntries.length}`);
  console.log(
    `likely gameplay candidates: ${
      bucketCounts["true-char-npc"] + bucketCounts["server-known-npc"] + bucketCounts["npc-component-evidence"] + bucketCounts["client-canonical-only"]
    }`
  );
  console.log(
    `likely technical rows: ${
      bucketCounts.ragdoll +
      bucketCounts["servant-system"] +
      bucketCounts["vampire-player-castle-system"] +
      bucketCounts["technical-prefab"] +
      bucketCounts["non-npc-category"]
    }`
  );
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
