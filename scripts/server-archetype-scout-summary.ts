import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

type JsonRecord = Record<string, unknown>;
type SameRunMatch = "abilityGroup" | "item" | "npc" | "unmatched";

export interface CountEntry {
  name: string;
  count: number;
}

export interface SummarizeServerArchetypeScoutOptions {
  artifactPath: string;
  snapshotRoot?: string;
  candidateComponents: string[];
}

export interface WriteServerArchetypeScoutSummaryOptions extends SummarizeServerArchetypeScoutOptions {
  outDir: string;
}

export interface CandidateCoverage {
  entities: number;
  readablePayloads: number;
  captureStatusRows: number;
}

export interface CoOccurrencePair {
  pair: string;
  components: [string, string];
  entities: number;
}

export interface Recommendation {
  component: string;
  score: number;
  reason: string;
}

export interface ServerArchetypeScoutSummary {
  source: {
    artifactPath: string;
    snapshotRoot?: string;
  };
  rowCount: number;
  captureStatuses: Record<string, number>;
  candidateCoverage: Record<string, CandidateCoverage>;
  coOccurrencePairs: CoOccurrencePair[];
  neighborComponents: Record<string, CountEntry[]>;
  prefabPatterns: {
    prefixes: CountEntry[];
    families: CountEntry[];
  };
  sameRunMatches: Record<SameRunMatch, number>;
  recommendations: Recommendation[];
  quality: {
    projectionMode: "raw-json";
    interpretationStatus: "raw-unverified";
  };
}

interface SameRunIndexes {
  abilityGroupIds: Set<string>;
  itemIds: Set<string>;
  npcIds: Set<string>;
}

function isRecord(value: unknown): value is JsonRecord {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function toStringValue(value: unknown): string | undefined {
  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }
  return undefined;
}

function toNumberValue(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string" && /^-?\d+$/.test(value.trim())) {
    return Number(value);
  }
  return null;
}

function shortComponentName(value: string): string {
  return value.split(".").filter(Boolean).at(-1) ?? value;
}

function normalizeCandidateSet(candidateComponents: string[]): Set<string> {
  return new Set(candidateComponents.map(shortComponentName).filter(Boolean));
}

function increment(counts: Map<string, number>, name: string | undefined, fallback = "<missing>") {
  const key = name || fallback;
  counts.set(key, (counts.get(key) ?? 0) + 1);
}

function sortedCounts(counts: Map<string, number>, limit?: number): CountEntry[] {
  const entries = [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name));

  return typeof limit === "number" ? entries.slice(0, limit) : entries;
}

function prefabPrefix(prefabName: string | undefined): string {
  return prefabName?.match(/^([^_]+)/)?.[1] ?? "<missing>";
}

function prefabFamily(prefabName: string | undefined): string {
  const parts = prefabName?.split("_").filter(Boolean) ?? [];
  if (parts.length >= 2) {
    return `${parts[0]}_${parts[1]}`;
  }
  return parts[0] ?? "<missing>";
}

function readArray(value: unknown, label: string): JsonRecord[] {
  if (!Array.isArray(value)) {
    throw new Error(`${label} must be a JSON array`);
  }

  return value.filter(isRecord);
}

async function readJsonArray(filePath: string, label: string): Promise<JsonRecord[]> {
  const raw = await readFile(filePath, "utf8");
  return readArray(JSON.parse(raw), label);
}

async function tryReadJsonArray(filePath: string): Promise<JsonRecord[]> {
  try {
    return await readJsonArray(filePath, filePath);
  } catch {
    return [];
  }
}

function buildIndexes(abilityGroups: JsonRecord[], items: JsonRecord[], npcs: JsonRecord[]): SameRunIndexes {
  return {
    abilityGroupIds: new Set(abilityGroups.map((row) => toStringValue(row.AbilityGroupId)).filter((value): value is string => Boolean(value))),
    itemIds: new Set(items.map((row) => toStringValue(row.ItemId)).filter((value): value is string => Boolean(value))),
    npcIds: new Set(npcs.map((row) => toStringValue(row.NpcId)).filter((value): value is string => Boolean(value)))
  };
}

async function loadSameRunIndexes(snapshotRoot: string | undefined): Promise<SameRunIndexes> {
  if (!snapshotRoot) {
    return buildIndexes([], [], []);
  }

  const [abilityGroups, items, npcs] = await Promise.all([
    tryReadJsonArray(path.join(snapshotRoot, "AbilityGroupsServer.json")),
    tryReadJsonArray(path.join(snapshotRoot, "ItemsServer.json")),
    tryReadJsonArray(path.join(snapshotRoot, "NpcsServer.json"))
  ]);

  return buildIndexes(abilityGroups, items, npcs);
}

function getSameRunMatch(prefabGuid: number | null, indexes: SameRunIndexes): SameRunMatch {
  const key = prefabGuid === null ? "" : String(prefabGuid);
  if (indexes.abilityGroupIds.has(key)) {
    return "abilityGroup";
  }
  if (indexes.itemIds.has(key)) {
    return "item";
  }
  if (indexes.npcIds.has(key)) {
    return "npc";
  }
  return "unmatched";
}

function readStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map(toStringValue).filter((entry): entry is string => Boolean(entry)) : [];
}

function readablePayloadCount(captured: JsonRecord | undefined, candidate: string): { readable: boolean; status: boolean } {
  if (!captured) {
    return { readable: false, status: false };
  }

  if (isRecord(captured[candidate])) {
    return { readable: true, status: false };
  }

  return { readable: false, status: typeof captured[`${candidate}CaptureStatus`] === "string" };
}

function pairKey(left: string, right: string): string {
  return [left, right].sort((a, b) => a.localeCompare(b)).join(" + ");
}

function buildRecommendations(
  candidateCoverage: Record<string, CandidateCoverage>,
  coOccurrencePairs: CoOccurrencePair[],
  neighborComponents: Record<string, CountEntry[]>,
  candidateOrder: string[]
): Recommendation[] {
  const pairTotals = new Map<string, number>();
  const order = new Map(candidateOrder.map((component, index) => [component, index]));
  for (const pair of coOccurrencePairs) {
    for (const component of pair.components) {
      pairTotals.set(component, (pairTotals.get(component) ?? 0) + pair.entities);
    }
  }

  return Object.entries(candidateCoverage)
    .map(([component, coverage]) => {
      const coOccurrenceScore = pairTotals.get(component) ?? 0;
      const neighborScore = neighborComponents[component]?.slice(0, 5).reduce((sum, entry) => sum + entry.count, 0) ?? 0;
      const score = coverage.entities * 5 + coverage.readablePayloads * 3 + coOccurrenceScore * 2;
      return {
        component,
        score,
        reason: `${coverage.entities} matched entities, ${coverage.readablePayloads} readable payloads, co-occurs in ${coOccurrenceScore} candidate pair hits, ${neighborScore} top-neighbor hits.`
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || (order.get(left.component) ?? 9999) - (order.get(right.component) ?? 9999));
}

export async function summarizeServerArchetypeScout(
  options: SummarizeServerArchetypeScoutOptions
): Promise<ServerArchetypeScoutSummary> {
  const rows = await readJsonArray(options.artifactPath, options.artifactPath);
  const candidates = [...normalizeCandidateSet(options.candidateComponents)];
  const candidateSet = new Set(candidates);
  const indexes = await loadSameRunIndexes(options.snapshotRoot);
  const captureStatusCounts = new Map<string, number>();
  const prefixCounts = new Map<string, number>();
  const familyCounts = new Map<string, number>();
  const sameRunMatches: Record<SameRunMatch, number> = {
    abilityGroup: 0,
    item: 0,
    npc: 0,
    unmatched: 0
  };
  const candidateCoverage: Record<string, CandidateCoverage> = Object.fromEntries(
    candidates.map((candidate) => [candidate, { entities: 0, readablePayloads: 0, captureStatusRows: 0 }])
  );
  const pairCounts = new Map<string, { components: [string, string]; entities: number }>();
  const neighborCounts = new Map<string, Map<string, number>>();

  for (const candidate of candidates) {
    neighborCounts.set(candidate, new Map<string, number>());
  }

  for (const row of rows) {
    const captureStatus = toStringValue(row.CaptureStatus) ?? "<missing>";
    increment(captureStatusCounts, captureStatus);

    const prefabName = toStringValue(row.PrefabName);
    increment(prefixCounts, prefabPrefix(prefabName));
    increment(familyCounts, prefabFamily(prefabName));

    const sameRunMatch = getSameRunMatch(toNumberValue(row.PrefabGuid), indexes);
    sameRunMatches[sameRunMatch] += 1;

    const matchedCandidates = readStringArray(row.MatchedScoutComponentTypes)
      .map(shortComponentName)
      .filter((component) => candidateSet.has(component));
    const uniqueMatchedCandidates = [...new Set(matchedCandidates)].sort((left, right) => left.localeCompare(right));
    const allComponents = readStringArray(row.AllComponentTypes).map(shortComponentName);
    const captured = isRecord(row.CapturedScoutComponents) ? row.CapturedScoutComponents : undefined;

    for (const candidate of uniqueMatchedCandidates) {
      candidateCoverage[candidate].entities += 1;
      const payloadStatus = readablePayloadCount(captured, candidate);
      if (payloadStatus.readable) {
        candidateCoverage[candidate].readablePayloads += 1;
      }
      if (payloadStatus.status) {
        candidateCoverage[candidate].captureStatusRows += 1;
      }

      const counts = neighborCounts.get(candidate);
      for (const component of allComponents) {
        if (!candidateSet.has(component)) {
          increment(counts ?? new Map<string, number>(), component);
        }
      }
    }

    for (let leftIndex = 0; leftIndex < uniqueMatchedCandidates.length; leftIndex += 1) {
      for (let rightIndex = leftIndex + 1; rightIndex < uniqueMatchedCandidates.length; rightIndex += 1) {
        const left = uniqueMatchedCandidates[leftIndex];
        const right = uniqueMatchedCandidates[rightIndex];
        const key = pairKey(left, right);
        const current = pairCounts.get(key);
        if (current) {
          current.entities += 1;
        } else {
          pairCounts.set(key, { components: key.split(" + ") as [string, string], entities: 1 });
        }
      }
    }
  }

  const coOccurrencePairs = [...pairCounts.entries()]
    .map(([pair, value]) => ({ pair, components: value.components, entities: value.entities }))
    .sort((left, right) => right.entities - left.entities || left.pair.localeCompare(right.pair));
  const neighborComponentSummary = Object.fromEntries(
    [...neighborCounts.entries()].map(([component, counts]) => [component, sortedCounts(counts, 20)])
  );

  return {
    source: {
      artifactPath: options.artifactPath,
      ...(options.snapshotRoot ? { snapshotRoot: options.snapshotRoot } : {})
    },
    rowCount: rows.length,
    captureStatuses: Object.fromEntries(sortedCounts(captureStatusCounts).map((entry) => [entry.name, entry.count])),
    candidateCoverage,
    coOccurrencePairs,
    neighborComponents: neighborComponentSummary,
    prefabPatterns: {
      prefixes: sortedCounts(prefixCounts),
      families: sortedCounts(familyCounts, 50)
    },
    sameRunMatches,
    recommendations: buildRecommendations(candidateCoverage, coOccurrencePairs, neighborComponentSummary, candidates),
    quality: {
      projectionMode: "raw-json",
      interpretationStatus: "raw-unverified"
    }
  };
}

function formatCounts(entries: CountEntry[], limit = 12): string {
  return entries
    .slice(0, limit)
    .map((entry) => `- ${entry.name}: ${entry.count}`)
    .join("\n");
}

function renderMarkdown(summary: ServerArchetypeScoutSummary): string {
  const coverageRows = Object.entries(summary.candidateCoverage)
    .sort(([, left], [, right]) => right.entities - left.entities)
    .map(([component, coverage]) => `- ${component}: ${coverage.entities} entities, ${coverage.readablePayloads} readable payloads`)
    .join("\n");
  const pairRows = summary.coOccurrencePairs.length > 0
    ? summary.coOccurrencePairs.slice(0, 20).map((pair) => `- ${pair.pair}: ${pair.entities}`).join("\n")
    : "- None";
  const recommendationRows = summary.recommendations.length > 0
    ? summary.recommendations.slice(0, 10).map((entry) => `- ${entry.component}: score ${entry.score}; ${entry.reason}`).join("\n")
    : "- None";

  return `# Server Archetype Scout Summary

## Source

- Artifact: ${summary.source.artifactPath}
${summary.source.snapshotRoot ? `- Snapshot root: ${summary.source.snapshotRoot}\n` : ""}
## Coverage

- Rows: ${summary.rowCount}
- Interpretation: ${summary.quality.interpretationStatus}

## Candidate Coverage

${coverageRows}

## Co-Occurrence Pairs

${pairRows}

## Prefab Prefixes

${formatCounts(summary.prefabPatterns.prefixes)}

## Same-Run Index Matches

- Ability groups: ${summary.sameRunMatches.abilityGroup}
- Items: ${summary.sameRunMatches.item}
- NPCs: ${summary.sameRunMatches.npc}
- Unmatched: ${summary.sameRunMatches.unmatched}

## Recommendations

${recommendationRows}

## Downstream Boundary

Keep this parked as raw server ECS evidence. Do not promote these values into public database fields until a follow-up spot-check verifies the selected component payloads.
`;
}

export async function writeServerArchetypeScoutSummary(
  options: WriteServerArchetypeScoutSummaryOptions
): Promise<{ jsonPath: string; markdownPath: string; summary: ServerArchetypeScoutSummary }> {
  const summary = await summarizeServerArchetypeScout(options);
  await mkdir(options.outDir, { recursive: true });

  const jsonPath = path.join(options.outDir, "ServerArchetypeScout.summary.json");
  const markdownPath = path.join(options.outDir, "ServerArchetypeScout.summary.md");
  await Promise.all([
    writeFile(jsonPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8"),
    writeFile(markdownPath, renderMarkdown(summary), "utf8")
  ]);

  return { jsonPath, markdownPath, summary };
}

function parseArgs(argv: string[]): WriteServerArchetypeScoutSummaryOptions {
  const values = new Map<string, string>();
  for (let index = 0; index < argv.length; index += 1) {
    const raw = argv[index];
    if (!raw.startsWith("-")) {
      continue;
    }

    const key = raw.replace(/^-+/, "").toLowerCase();
    const value = argv[index + 1];
    if (!value || value.startsWith("-")) {
      throw new Error(`Missing value for ${raw}`);
    }
    values.set(key, value);
    index += 1;
  }

  const artifactPath = values.get("artifactpath");
  if (!artifactPath) {
    throw new Error("Missing required -ArtifactPath");
  }

  const candidateComponents = (values.get("candidatecomponents") ?? "")
    .split(/[,;]/)
    .map((entry) => entry.trim())
    .filter(Boolean);
  if (candidateComponents.length === 0) {
    throw new Error("Missing required -CandidateComponents");
  }

  return {
    artifactPath,
    snapshotRoot: values.get("snapshotroot"),
    candidateComponents,
    outDir: values.get("outdir") ?? path.join(process.cwd(), ".codex-tmp", "server-archetype-scout")
  };
}

async function main() {
  const outputs = await writeServerArchetypeScoutSummary(parseArgs(process.argv.slice(2)));
  console.log(`[server-archetype-scout-summary] wrote ${outputs.jsonPath}`);
  console.log(`[server-archetype-scout-summary] wrote ${outputs.markdownPath}`);
  console.log(`[server-archetype-scout-summary] ${outputs.summary.rowCount} rows summarized`);
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
const currentPath = fileURLToPath(import.meta.url);
if (invokedPath === currentPath) {
  void main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
