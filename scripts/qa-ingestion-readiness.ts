import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const defaultBloodcraftResourcesDir = "C:/Users/mitch/source/Repos/Bloodcraft/Resources";
const defaultAssetDumpDir = "C:/Users/mitch/OneDrive/Documents/Assets";

type ReadinessVerdict = "ready" | "proceed-with-warnings" | "prep-needed";
type CheckStatus = "ready" | "warning" | "blocker";

interface CoverageMetric {
  total: number;
  matched: number;
  coveragePct: number;
  signal?: string;
  lowSignalExcluded?: number;
}

interface DomainThreshold {
  minMatchedCount?: number;
  minCoveragePct?: number;
  warnMatchedCount?: number;
  warnCoveragePct?: number;
}

interface ThresholdConfig {
  domains: Record<string, DomainThreshold>;
}

interface BroadIndexEntry {
  subtitle?: string;
  tags?: string[];
}

interface ControlRow {
  PrefabName?: string;
}

interface ControlSpec {
  section: "abilities" | "items" | "recipes";
  fileName: "AbilityGroupsClient.json" | "ItemsClient.json" | "RecipesClient.json";
  floor: number;
}

interface SharedSourceCheck {
  id: string;
  label: string;
  target: string;
  required: boolean;
  status: "available" | "missing";
  note?: string;
}

interface ControlArtifactSummary {
  section: ControlSpec["section"];
  fileName: ControlSpec["fileName"];
  floor: number;
  status: CheckStatus;
  count?: number;
  artifactPath?: string;
  artifactSource?: string;
  transient?: boolean;
  notes: string[];
}

interface StatefulHarnessSummary {
  status: CheckStatus;
  notes: string[];
  latestRuns: Array<{
    name: string;
    timestamp?: string;
    path: string;
  }>;
}

interface MetricAssessment {
  key: string;
  label: string;
  matched: number;
  total: number;
  coveragePct: number;
  lowSignalExcluded: number;
  floorPass: boolean;
  targetPass: boolean;
  floorNotes: string[];
  targetNotes: string[];
}

interface CoreDomainSummary {
  id: "abilities" | "items" | "recipes" | "npcs" | "workstations";
  title: string;
  verdict: ReadinessVerdict;
  summary: string;
  notes: string[];
  metrics: MetricAssessment[];
  unresolvedBacklog?: number;
}

interface ReportJson {
  generatedAt: string;
  repoRoot: string;
  outputDir: string;
  sharedSources: SharedSourceCheck[];
  broadControl: {
    status: CheckStatus;
    sections: ControlArtifactSummary[];
  };
  statefulHarness: StatefulHarnessSummary;
  domains: CoreDomainSummary[];
  blockers: string[];
  warnings: string[];
}

const controlSpecs: ControlSpec[] = [
  { section: "abilities", fileName: "AbilityGroupsClient.json", floor: 2010 },
  { section: "items", fileName: "ItemsClient.json", floor: 1076 },
  { section: "recipes", fileName: "RecipesClient.json", floor: 667 }
];

const requiredEnrichmentFiles = [
  "coverage-thresholds.json",
  "enrichment-coverage.json",
  "ability-tooltip-map.json",
  "item-icon-map.json",
  "item-description-map.json",
  "item-icon-unresolved.json",
  "recipe-link-map.json",
  "npc-display-map.json",
  "workstation-display-map.json"
] as const;

const coreDomains = [
  {
    id: "abilities",
    title: "Abilities tooltip lane",
    metrics: ["ability-tooltip-map"],
    summarize: (metrics: Map<string, MetricAssessment>) => {
      const metric = requireMetric(metrics, "ability-tooltip-map");
      return `${metric.matched}/${metric.total} high-signal tooltip rows matched.`;
    },
    verdict: (metrics: Map<string, MetricAssessment>) => defaultVerdict([requireMetric(metrics, "ability-tooltip-map")])
  },
  {
    id: "items",
    title: "Items rich asset lane",
    metrics: ["item-icon-map", "item-description-map"],
    summarize: (metrics: Map<string, MetricAssessment>, unresolvedBacklog?: number) => {
      const iconMetric = requireMetric(metrics, "item-icon-map");
      const descriptionMetric = requireMetric(metrics, "item-description-map");
      const backlogLabel = typeof unresolvedBacklog === "number" ? `${unresolvedBacklog} unresolved icons` : "unresolved icon backlog unavailable";
      return `${iconMetric.matched}/${iconMetric.total} icons matched, ${descriptionMetric.matched}/${descriptionMetric.total} descriptions matched, ${backlogLabel}.`;
    },
    verdict: (metrics: Map<string, MetricAssessment>, unresolvedBacklog?: number) => {
      const iconMetric = requireMetric(metrics, "item-icon-map");
      const descriptionMetric = requireMetric(metrics, "item-description-map");
      if (!iconMetric.floorPass || !descriptionMetric.floorPass) {
        return "prep-needed";
      }
      if (descriptionMetric.matched === 0) {
        return "prep-needed";
      }
      if (typeof unresolvedBacklog === "number" && unresolvedBacklog > 500) {
        return "prep-needed";
      }
      if (!iconMetric.targetPass || !descriptionMetric.targetPass) {
        return "proceed-with-warnings";
      }
      return "ready";
    }
  },
  {
    id: "recipes",
    title: "Recipes link lane",
    metrics: ["recipe-link-map"],
    summarize: (metrics: Map<string, MetricAssessment>) => {
      const metric = requireMetric(metrics, "recipe-link-map");
      return `${metric.matched}/${metric.total} high-signal recipe link rows matched.`;
    },
    verdict: (metrics: Map<string, MetricAssessment>) => defaultVerdict([requireMetric(metrics, "recipe-link-map")])
  },
  {
    id: "npcs",
    title: "NPC display lane",
    metrics: ["npc-display-map"],
    summarize: (metrics: Map<string, MetricAssessment>) => {
      const metric = requireMetric(metrics, "npc-display-map");
      return `${metric.matched}/${metric.total} high-signal display rows matched.`;
    },
    verdict: (metrics: Map<string, MetricAssessment>) => defaultVerdict([requireMetric(metrics, "npc-display-map")])
  },
  {
    id: "workstations",
    title: "Workstation display lane",
    metrics: ["workstation-display-map"],
    summarize: (metrics: Map<string, MetricAssessment>) => {
      const metric = requireMetric(metrics, "workstation-display-map");
      return `${metric.matched}/${metric.total} high-signal display rows matched.`;
    },
    verdict: (metrics: Map<string, MetricAssessment>) => defaultVerdict([requireMetric(metrics, "workstation-display-map")])
  }
] as const;

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

function timestampLabel(): string {
  const now = new Date();
  const pad = (value: number) => value.toString().padStart(2, "0");
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

function formatPct(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

function formatVerdict(value: ReadinessVerdict): string {
  return value.toUpperCase().replace(/-/g, " ");
}

function formatCheckStatus(value: CheckStatus): string {
  return value.toUpperCase();
}

function statusMark(status: CheckStatus | ReadinessVerdict | SharedSourceCheck["status"]): string {
  switch (status) {
    case "ready":
    case "available":
      return "[ready]";
    case "proceed-with-warnings":
    case "warning":
      return "[warn]";
    case "prep-needed":
    case "blocker":
    case "missing":
      return "[prep]";
    default:
      return "[info]";
  }
}

function toPosix(value: string): string {
  return value.replace(/\\/g, "/");
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

async function collectFiles(dir: string, matcher: (fileName: string) => boolean, results: string[] = []): Promise<string[]> {
  if (!(await pathExists(dir))) {
    return results;
  }

  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectFiles(fullPath, matcher, results);
      continue;
    }

    if (entry.isFile() && matcher(entry.name)) {
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

function describeArtifactSource(filePath: string): { source: string; transient: boolean } {
  const normalized = toPosix(filePath).toLowerCase();
  if (normalized.includes("/persistent-data/profiles/") && normalized.includes("full-dumponly")) {
    return { source: "profile:full-dumponly", transient: false };
  }
  if (normalized.includes("/persistent-data/profiles/")) {
    return { source: "profile", transient: false };
  }
  if (normalized.includes("/.codex/runs/") && normalized.includes("stateful")) {
    return { source: "run:stateful", transient: true };
  }
  if (normalized.includes("/.codex/runs/")) {
    return { source: "run", transient: true };
  }
  return { source: "unknown", transient: false };
}

async function findControlArtifact(
  extractorRoot: string,
  spec: ControlSpec
): Promise<{ filePath: string; prefabs: string[]; count: number; source: string; transient: boolean } | null> {
  const searchRoots = [
    path.join(extractorRoot, ".codex", "persistent-data", "profiles"),
    path.join(extractorRoot, ".codex", "runs")
  ];
  const candidateFiles = (await Promise.all(searchRoots.map((root) => collectMatchingFiles(root, spec.fileName)))).flat();
  const candidates: Array<{ filePath: string; prefabs: string[]; count: number; mtimeMs: number; source: string; transient: boolean }> = [];

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
    const artifactKind = describeArtifactSource(filePath);
    candidates.push({
      filePath,
      prefabs,
      count: prefabs.length,
      mtimeMs: fileStat.mtimeMs,
      source: artifactKind.source,
      transient: artifactKind.transient
    });
  }

  if (candidates.length === 0) {
    return null;
  }

  candidates.sort((a, b) => byPreference(spec, a, b));
  const winner = candidates[0];

  return {
    filePath: winner.filePath,
    prefabs: winner.prefabs,
    count: winner.count,
    source: winner.source,
    transient: winner.transient
  };
}

async function findLatestRun(runsRoot: string, targetName: string): Promise<{ name: string; timestamp?: string; path: string } | null> {
  if (!(await pathExists(runsRoot))) {
    return null;
  }

  const runDirs = await readdir(runsRoot, { withFileTypes: true });
  const matches: Array<{ name: string; timestamp?: string; path: string; mtimeMs: number }> = [];

  for (const runDir of runDirs) {
    if (!runDir.isDirectory()) {
      continue;
    }

    const runPath = path.join(runsRoot, runDir.name);
    const children = await readdir(runPath, { withFileTypes: true });
    const child = children.find((entry) => entry.isDirectory() && entry.name === targetName);
    if (!child) {
      continue;
    }

    const childPath = path.join(runPath, child.name);
    const childStat = await stat(childPath);
    matches.push({
      name: targetName,
      timestamp: runDir.name,
      path: childPath,
      mtimeMs: childStat.mtimeMs
    });
  }

  if (matches.length === 0) {
    return null;
  }

  matches.sort((left, right) => right.mtimeMs - left.mtimeMs);
  const latest = matches[0];
  return { name: latest.name, timestamp: latest.timestamp, path: latest.path };
}

function evaluateMetric(key: string, metric: CoverageMetric, threshold?: DomainThreshold): MetricAssessment {
  const floorNotes: string[] = [];
  const targetNotes: string[] = [];

  if (threshold?.minMatchedCount !== undefined && metric.matched < threshold.minMatchedCount) {
    floorNotes.push(`matched ${metric.matched} is below floor ${threshold.minMatchedCount}`);
  }
  if (threshold?.minCoveragePct !== undefined && metric.coveragePct < threshold.minCoveragePct) {
    floorNotes.push(`coverage ${formatPct(metric.coveragePct)} is below floor ${formatPct(threshold.minCoveragePct)}`);
  }

  if (threshold?.warnMatchedCount !== undefined && metric.matched < threshold.warnMatchedCount) {
    targetNotes.push(`matched ${metric.matched} is below target ${threshold.warnMatchedCount}`);
  }
  if (threshold?.warnCoveragePct !== undefined && metric.coveragePct < threshold.warnCoveragePct) {
    targetNotes.push(`coverage ${formatPct(metric.coveragePct)} is below target ${formatPct(threshold.warnCoveragePct)}`);
  }
  if (metric.lowSignalExcluded !== undefined && metric.lowSignalExcluded > 0) {
    targetNotes.push(`${metric.lowSignalExcluded} low-signal row(s) excluded from matched coverage`);
  }

  return {
    key,
    label: key,
    matched: metric.matched,
    total: metric.total,
    coveragePct: metric.coveragePct,
    lowSignalExcluded: metric.lowSignalExcluded ?? 0,
    floorPass: floorNotes.length === 0,
    targetPass: targetNotes.length === 0,
    floorNotes,
    targetNotes
  };
}

function defaultVerdict(metrics: MetricAssessment[]): ReadinessVerdict {
  if (metrics.some((metric) => !metric.floorPass)) {
    return "prep-needed";
  }
  if (metrics.some((metric) => !metric.targetPass)) {
    return "proceed-with-warnings";
  }
  return "ready";
}

function requireMetric(metrics: Map<string, MetricAssessment>, key: string): MetricAssessment {
  const metric = metrics.get(key);
  if (!metric) {
    throw new Error(`Missing metric assessment for '${key}'.`);
  }
  return metric;
}

function buildMarkdown(report: ReportJson): string {
  const lines: string[] = [];

  lines.push("# Ingestion Readiness Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Repo root: ${toPosix(report.repoRoot)}`);
  lines.push("");
  lines.push("## Overall");
  lines.push("");
  lines.push(`- Blockers: ${report.blockers.length}`);
  lines.push(`- Warnings: ${report.warnings.length}`);
  lines.push(`- Report directory: ${toPosix(report.outputDir)}`);
  lines.push("");

  if (report.blockers.length > 0) {
    lines.push("### Shared blockers");
    lines.push("");
    for (const blocker of report.blockers) {
      lines.push(`- ${blocker}`);
    }
    lines.push("");
  }

  if (report.warnings.length > 0) {
    lines.push("### Shared warnings");
    lines.push("");
    for (const warning of report.warnings) {
      lines.push(`- ${warning}`);
    }
    lines.push("");
  }

  lines.push("## Shared Source Readiness");
  lines.push("");
  for (const check of report.sharedSources) {
    const requiredLabel = check.required ? "required" : "optional";
    lines.push(`- ${statusMark(check.status)} ${check.label}: ${toPosix(check.target)} (${requiredLabel})`);
    if (check.note) {
      lines.push(`  - ${check.note}`);
    }
  }
  lines.push("");

  lines.push("## Broad Control Readiness");
  lines.push("");
  lines.push(`- Status: ${formatCheckStatus(report.broadControl.status)}`);
  for (const section of report.broadControl.sections) {
    lines.push(
      `- ${statusMark(section.status)} ${section.section}: ${section.count ?? 0}/${section.floor} via ${section.artifactSource ?? "missing"}${section.artifactPath ? ` -> ${toPosix(section.artifactPath)}` : ""}`
    );
    for (const note of section.notes) {
      lines.push(`  - ${note}`);
    }
  }
  lines.push("");

  lines.push("## Stateful Harness Readiness");
  lines.push("");
  lines.push(`- Status: ${formatCheckStatus(report.statefulHarness.status)}`);
  for (const note of report.statefulHarness.notes) {
    lines.push(`- ${note}`);
  }
  if (report.statefulHarness.latestRuns.length > 0) {
    lines.push("");
    lines.push("### Latest stateful run evidence");
    lines.push("");
    for (const run of report.statefulHarness.latestRuns) {
      lines.push(`- ${run.name}${run.timestamp ? ` (${run.timestamp})` : ""}: ${toPosix(run.path)}`);
    }
  }
  lines.push("");

  lines.push("## Core Domain Readiness");
  lines.push("");
  for (const domain of report.domains) {
    lines.push(`### ${domain.title}`);
    lines.push("");
    lines.push(`- Verdict: ${formatVerdict(domain.verdict)}`);
    lines.push(`- Summary: ${domain.summary}`);
    if (typeof domain.unresolvedBacklog === "number") {
      lines.push(`- Unresolved backlog: ${domain.unresolvedBacklog}`);
    }
    for (const note of domain.notes) {
      lines.push(`- Note: ${note}`);
    }
    lines.push("");
    lines.push("| Metric | Matched | Coverage | Floor | Target |");
    lines.push("| --- | --- | --- | --- | --- |");
    for (const metric of domain.metrics) {
      lines.push(
        `| ${metric.label} | ${metric.matched}/${metric.total} | ${formatPct(metric.coveragePct)} | ${metric.floorPass ? "pass" : "fail"} | ${metric.targetPass ? "pass" : "warn"} |`
      );
      for (const note of [...metric.floorNotes, ...metric.targetNotes]) {
        lines.push(`- ${metric.label}: ${note}`);
      }
    }
    lines.push("");
  }

  return `${lines.join("\n")}\n`;
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const generatedAt = new Date().toISOString();
  const bloodcraftResourcesDir = process.env.BLOODCRAFT_RESOURCES_DIR ?? defaultBloodcraftResourcesDir;
  const assetDumpDir = process.env.VRISING_ASSET_DUMP_DIR ?? defaultAssetDumpDir;
  const extractorRoot = process.env.VRISING_DATAEXTRACTOR_ROOT ?? path.resolve(repoRoot, "..", "VRising.DataExtractor");
  const enrichmentDir = path.join(repoRoot, "data", "enrichment");
  const coveragePath = path.join(enrichmentDir, "enrichment-coverage.json");
  const thresholdsPath = path.join(enrichmentDir, "coverage-thresholds.json");
  const unresolvedIconPath = path.join(enrichmentDir, "item-icon-unresolved.json");
  const outputDir = path.join(repoRoot, ".codex-tmp", "ingestion-readiness", timestampLabel());
  const blockers: string[] = [];
  const warnings: string[] = [];

  const sharedSources: SharedSourceCheck[] = [
    {
      id: "bloodcraft-resources",
      label: "Bloodcraft resources",
      target: bloodcraftResourcesDir,
      required: true,
      status: (await pathExists(bloodcraftResourcesDir)) ? "available" : "missing"
    },
    {
      id: "asset-dump",
      label: "Asset dump",
      target: assetDumpDir,
      required: true,
      status: (await pathExists(assetDumpDir)) ? "available" : "missing"
    },
    {
      id: "extractor-root",
      label: "Extractor repo",
      target: extractorRoot,
      required: true,
      status: (await pathExists(extractorRoot)) ? "available" : "missing"
    }
  ];

  for (const fileName of requiredEnrichmentFiles) {
    const filePath = path.join(enrichmentDir, fileName);
    sharedSources.push({
      id: `enrichment-${fileName}`,
      label: `Enrichment snapshot: ${fileName}`,
      target: filePath,
      required: true,
      status: (await pathExists(filePath)) ? "available" : "missing"
    });
  }

  for (const check of sharedSources) {
    if (check.required && check.status === "missing") {
      blockers.push(`Missing required shared source: ${check.label} (${toPosix(check.target)})`);
    }
  }

  if (blockers.length > 0) {
    await mkdir(outputDir, { recursive: true });
    const earlyReport: ReportJson = {
      generatedAt,
      repoRoot,
      outputDir,
      sharedSources,
      broadControl: {
        status: "blocker",
        sections: []
      },
      statefulHarness: {
        status: "warning",
        notes: ["Stateful harness audit skipped because required shared sources are missing."],
        latestRuns: []
      },
      domains: [],
      blockers,
      warnings
    };
    await writeFile(path.join(outputDir, "report.json"), `${JSON.stringify(earlyReport, null, 2)}\n`);
    await writeFile(path.join(outputDir, "report.md"), buildMarkdown(earlyReport));
    throw new Error(`Ingestion readiness blockers found:\n${blockers.map((value) => `- ${value}`).join("\n")}`);
  }

  const [coverage, thresholds, unresolvedIcons] = await Promise.all([
    readJson<Record<string, CoverageMetric>>(coveragePath),
    readJson<ThresholdConfig>(thresholdsPath),
    readJson<{ unresolved?: number }>(unresolvedIconPath)
  ]);

  const broadControlSections: ControlArtifactSummary[] = [];

  for (const spec of controlSpecs) {
    const broadIndexPath = path.join(repoRoot, "public", "data", "db", spec.section, "index.json");
    const broadEntries = await readJson<BroadIndexEntry[]>(broadIndexPath);
    const broadPrefabs = new Set(broadEntries.map((entry) => getBroadPrefab(entry)).filter((value): value is string => Boolean(value)));
    const artifact = await findControlArtifact(extractorRoot, spec);

    if (!artifact) {
      blockers.push(`${spec.section}: unable to find a control artifact for ${spec.fileName} at or above floor ${spec.floor}`);
      broadControlSections.push({
        section: spec.section,
        fileName: spec.fileName,
        floor: spec.floor,
        status: "blocker",
        notes: ["No qualifying control artifact found."]
      });
      continue;
    }

    const missing = artifact.prefabs.filter((prefab) => !broadPrefabs.has(prefab));
    if (missing.length > 0) {
      blockers.push(`${spec.section}: broad index is missing ${missing.length} prefab(s) from ${toPosix(artifact.filePath)}`);
      broadControlSections.push({
        section: spec.section,
        fileName: spec.fileName,
        floor: spec.floor,
        status: "blocker",
        count: artifact.count,
        artifactPath: artifact.filePath,
        artifactSource: artifact.source,
        transient: artifact.transient,
        notes: [`Missing ${missing.length} prefab(s) from the selected control artifact.`]
      });
      continue;
    }

    const notes: string[] = [];
    if (artifact.transient) {
      const note = `${spec.section} is currently satisfied by a transient stateful run artifact instead of a stable profile snapshot.`;
      notes.push(note);
      warnings.push(note);
    }
    if (artifact.source === "profile:full-dumponly") {
      notes.push("Selected artifact comes from the full-dumponly regression-sentinel profile.");
    }

    broadControlSections.push({
      section: spec.section,
      fileName: spec.fileName,
      floor: spec.floor,
      status: "ready",
      count: artifact.count,
      artifactPath: artifact.filePath,
      artifactSource: artifact.source,
      transient: artifact.transient,
      notes
    });
  }

  const runsRoot = path.join(extractorRoot, ".codex", "runs");
  const statefulClientProfileRoot = path.join(extractorRoot, ".codex", "persistent-data", "profiles", "vrising-dataextractor-client-connect-stateful");
  const statefulServerProfileRoot = path.join(extractorRoot, ".codex", "persistent-data", "profiles", "vrising-dataextractor-server-host-stateful");
  const statefulSaveFiles = await collectFiles(statefulServerProfileRoot, (fileName) => fileName.endsWith(".save") || fileName.endsWith(".save.gz"));
  const sessionFiles = await collectMatchingFiles(statefulServerProfileRoot, "SessionId.json");
  const startDateFiles = await collectMatchingFiles(statefulServerProfileRoot, "StartDate.json");
  const expectedRunNames = [
    "vrising-dataextractor-server-host-stateful",
    "vrising-dataextractor-client-connect-stateful-create",
    "vrising-dataextractor-client-connect-stateful-resume",
    "vrising-dataextractor-client-connect-stateful-dump"
  ] as const;
  const latestRuns = (
    await Promise.all(expectedRunNames.map((runName) => findLatestRun(runsRoot, runName)))
  ).filter((value): value is { name: string; timestamp?: string; path: string } => Boolean(value));

  const statefulNotes: string[] = [];
  let statefulStatus: CheckStatus = "ready";

  if (!(await pathExists(statefulClientProfileRoot))) {
    statefulStatus = "warning";
    const note = `Missing stateful client profile root: ${toPosix(statefulClientProfileRoot)}`;
    statefulNotes.push(note);
    warnings.push(note);
  }

  if (!(await pathExists(statefulServerProfileRoot))) {
    statefulStatus = "warning";
    const note = `Missing stateful server-host profile root: ${toPosix(statefulServerProfileRoot)}`;
    statefulNotes.push(note);
    warnings.push(note);
  }

  if (statefulSaveFiles.length === 0) {
    statefulStatus = "warning";
    const note = "No saved-world artifact was found under the server-host stateful profile.";
    statefulNotes.push(note);
    warnings.push(note);
  } else {
    statefulNotes.push(`Saved-world evidence found: ${toPosix(statefulSaveFiles[0])}`);
  }

  if (sessionFiles.length === 0 || startDateFiles.length === 0) {
    statefulStatus = "warning";
    const note = "Stateful server-host session metadata is incomplete (expected SessionId.json and StartDate.json).";
    statefulNotes.push(note);
    warnings.push(note);
  } else {
    statefulNotes.push("Stateful server-host session metadata is present.");
  }

  if (latestRuns.length !== expectedRunNames.length) {
    statefulStatus = "warning";
    const missingNames = expectedRunNames.filter((runName) => !latestRuns.some((entry) => entry.name === runName));
    const note = `Recent stateful run evidence is incomplete: missing ${missingNames.join(", ")}.`;
    statefulNotes.push(note);
    warnings.push(note);
  } else {
    statefulNotes.push("Recent stateful create/resume/dump evidence is present.");
  }

  statefulNotes.push("Stateful harness readiness is required for stateful-only ingestion, not for canonical broad extraction.");

  const assessedMetrics = new Map<string, MetricAssessment>();
  for (const [key, metric] of Object.entries(coverage)) {
    assessedMetrics.set(key, evaluateMetric(key, metric, thresholds.domains[key]));
  }

  const controlBySection = new Map<ControlSpec["section"], ControlArtifactSummary>(broadControlSections.map((entry) => [entry.section, entry]));
  const domains: CoreDomainSummary[] = coreDomains.map((domain) => {
    const metrics = new Map(domain.metrics.map((key) => [key, requireMetric(assessedMetrics, key)]));
    const notes: string[] = [];

    if (domain.id === "items") {
      const iconMetric = requireMetric(metrics, "item-icon-map");
      const descriptionMetric = requireMetric(metrics, "item-description-map");
      if (!iconMetric.targetPass) {
        notes.push("Item icon coverage is still below the current target threshold.");
      }
      if (descriptionMetric.matched === 0) {
        notes.push("Item description coverage is still zero, so rich item ingestion needs more prep before it can feel complete.");
      }
    }

    if (domain.id === "npcs") {
      const metric = requireMetric(metrics, "npc-display-map");
      if (metric.lowSignalExcluded > 0) {
        notes.push(`${metric.lowSignalExcluded} NPC rows are currently excluded as low-signal fallback display entries.`);
      }
    }

    const controlSummary = controlBySection.get(domain.id as ControlSpec["section"]);
    if (controlSummary?.artifactPath) {
      notes.push(`Broad control artifact: ${controlSummary.artifactSource} -> ${toPosix(controlSummary.artifactPath)}`);
      if (controlSummary.transient) {
        notes.push("This lane is currently satisfied by a transient stateful run artifact and should be stabilized before broader ingestion.");
      }
    }

    const unresolvedBacklog = domain.id === "items" ? unresolvedIcons.unresolved : undefined;
    return {
      id: domain.id,
      title: domain.title,
      verdict: domain.verdict(metrics, unresolvedBacklog),
      summary: domain.summarize(metrics, unresolvedBacklog),
      notes,
      metrics: [...metrics.values()],
      ...(typeof unresolvedBacklog === "number" ? { unresolvedBacklog } : {})
    };
  });

  for (const domain of domains) {
    if (domain.verdict === "prep-needed") {
      warnings.push(`${domain.title}: marked prep-needed.`);
    } else if (domain.verdict === "proceed-with-warnings") {
      warnings.push(`${domain.title}: proceed-with-warnings.`);
    }
  }

  const report: ReportJson = {
    generatedAt,
    repoRoot,
    outputDir,
    sharedSources,
    broadControl: {
      status: blockers.some((entry) => entry.includes("control artifact") || entry.includes("broad index")) ? "blocker" : "ready",
      sections: broadControlSections
    },
    statefulHarness: {
      status: statefulStatus,
      notes: statefulNotes,
      latestRuns
    },
    domains,
    blockers,
    warnings
  };

  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "report.json"), `${JSON.stringify(report, null, 2)}\n`);
  await writeFile(path.join(outputDir, "report.md"), buildMarkdown(report));

  console.log(`Ingestion readiness report written to ${toPosix(outputDir)}`);
  if (warnings.length > 0) {
    console.warn("Ingestion readiness warnings:");
    for (const warning of warnings) {
      console.warn(`- ${warning}`);
    }
  }

  if (blockers.length > 0) {
    throw new Error(`Ingestion readiness blockers found:\n${blockers.map((value) => `- ${value}`).join("\n")}`);
  }

  console.log("Ingestion readiness completed without shared blockers.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
