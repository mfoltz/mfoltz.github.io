import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

interface VisualReviewCounts {
  created: number;
  matched: number;
  changed: number;
  missingBaseline: number;
}

interface VisualReviewCapture {
  theme: string;
  pack: string;
  routeId: string;
  routeTitle: string;
  routePath: string;
  baselinePath: string;
  currentPath: string;
  diffPath: string | null;
  status: "created" | "matched" | "changed" | "missing-baseline";
  diffPixels: number;
  reviewFocus: string;
  thoughtPrompt: string;
  feedbackPrompt: string;
  isStartHere: boolean;
}

interface VisualReviewPack {
  id: string;
  title: string;
  counts: VisualReviewCounts;
  captures: VisualReviewCapture[];
}

interface VisualReviewReport {
  mode: "baseline" | "compare";
  title: string;
  summary?: string;
  artifactDirLabel: string;
  counts: VisualReviewCounts;
  packs: VisualReviewPack[];
}

interface VisualReviewCaptureGroup {
  key: string;
  captures: VisualReviewCapture[];
}

function timestampLabel(date = new Date()): string {
  const pad = (value: number) => value.toString().padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
}

function toPosix(value: string): string {
  return value.replace(/\\/g, "/");
}

function formatCountSummary(counts: VisualReviewCounts): string {
  return `${counts.changed} changed, ${counts.matched} matched, ${counts.missingBaseline} missing baseline, ${counts.created} created`;
}

function labelPath(repoRoot: string, value: string | null): string {
  if (!value) {
    return "none";
  }

  const resolved = resolve(value);
  const label = resolved.startsWith(repoRoot) ? relative(repoRoot, resolved) : value;
  return toPosix(label);
}

function selectCaptureGroups(report: VisualReviewReport): VisualReviewCaptureGroup[] {
  const changed = report.packs.flatMap((pack) => pack.captures.filter((capture) => capture.status !== "matched"));
  const startHere = report.packs.flatMap((pack) => pack.captures.filter((capture) => capture.isStartHere));
  const packOrder = new Map([
    ["player-first", 0],
    ["developer-sanity", 1]
  ]);
  const groups = new Map<string, VisualReviewCaptureGroup>();

  for (const capture of [...changed, ...startHere]) {
    const key = `${capture.pack}:${capture.routeId}`;
    const group = groups.get(key) ?? { key, captures: [] };
    if (!group.captures.some((candidate) => candidate.theme === capture.theme)) {
      group.captures.push(capture);
    }
    groups.set(key, group);
  }

  return [...groups.values()].sort((leftGroup, rightGroup) => {
    const left = leftGroup.captures[0];
    const right = rightGroup.captures[0];
    const packDelta = (packOrder.get(left.pack) ?? 99) - (packOrder.get(right.pack) ?? 99);
    if (packDelta !== 0) {
      return packDelta;
    }

    const leftChanged = left.status === "matched" ? 1 : 0;
    const rightChanged = right.status === "matched" ? 1 : 0;
    if (leftChanged !== rightChanged) {
      return leftChanged - rightChanged;
    }

    return `${left.routeId}:${left.theme}`.localeCompare(`${right.routeId}:${right.theme}`);
  });
}

function sortCapturesByTheme(captures: VisualReviewCapture[]): VisualReviewCapture[] {
  const themeOrder = new Map([
    ["dark", 0],
    ["light", 1]
  ]);

  return [...captures].sort((left, right) => {
    const themeDelta = (themeOrder.get(left.theme) ?? 99) - (themeOrder.get(right.theme) ?? 99);
    if (themeDelta !== 0) {
      return themeDelta;
    }

    return left.theme.localeCompare(right.theme);
  });
}

function formatThemeStatuses(captures: VisualReviewCapture[]): string {
  return sortCapturesByTheme(captures)
    .map((capture) => `${capture.theme} ${capture.status}`)
    .join(", ");
}

function formatDiffPixels(captures: VisualReviewCapture[]): string {
  return sortCapturesByTheme(captures)
    .map((capture) => `${capture.theme} ${capture.diffPixels}`)
    .join(", ");
}

function formatArtifactRefs(repoRoot: string, captures: VisualReviewCapture[], pickPath: (capture: VisualReviewCapture) => string | null): string {
  return sortCapturesByTheme(captures)
    .map((capture) => `${capture.theme} \`${labelPath(repoRoot, pickPath(capture))}\``)
    .join("; ");
}

function renderCaptureGroup(repoRoot: string, artifactLabel: string, group: VisualReviewCaptureGroup): string {
  const captures = sortCapturesByTheme(group.captures);
  const primary = captures[0];
  const reviewPrompt = primary.thoughtPrompt || primary.reviewFocus || primary.feedbackPrompt || "none";

  return [
    `### \`${primary.routeId}\``,
    "",
    "- Status: open",
    `- Pack: ${primary.pack}`,
    `- Route: ${primary.routePath}`,
    `- Capture: ${primary.routeTitle}`,
    `- Themes: ${formatThemeStatuses(captures)}`,
    `- Diff pixels: ${formatDiffPixels(captures)}`,
    `- Artifacts: report \`${artifactLabel}\`; baselines ${formatArtifactRefs(repoRoot, captures, (capture) => capture.baselinePath)}; current ${formatArtifactRefs(repoRoot, captures, (capture) => capture.currentPath)}; diff ${formatArtifactRefs(repoRoot, captures, (capture) => capture.diffPath)}`,
    `- Review prompt: ${reviewPrompt}`,
    "",
    "Human feedback:",
    "",
    "Agent routing: pending",
    "Acceptance check: pending visual review",
    ""
  ].join("\n");
}

function renderPacket(options: {
  repoRoot: string;
  report: VisualReviewReport;
  reportPath: string;
  outputPath: string;
  generatedAt: string;
  reportDate: string;
  artifactLink?: string;
  visualCommand?: string;
}) {
  const { repoRoot, report, reportPath, outputPath, generatedAt, reportDate, artifactLink, visualCommand } = options;
  const captureGroups = selectCaptureGroups(report);
  const reportLabel = toPosix(relative(repoRoot, reportPath));
  const outputLabel = toPosix(relative(repoRoot, outputPath));
  const artifactLabel = artifactLink ?? `${toPosix(report.artifactDirLabel)}/report.html`;
  const commandLabel = visualCommand ?? (report.mode === "baseline" ? "npm run visual:baseline" : "npm run visual:compare");

  return [
    `# Design Feedback Packet: ${generatedAt}`,
    "",
    "Status: open",
    `Generated from: \`${reportLabel}\``,
    `Packet path: \`${outputLabel}\``,
    `Artifact: \`${artifactLabel}\``,
    "",
    "## Review Context",
    "",
    `- Report date: ${reportDate}`,
    `- Packet generated: ${generatedAt}`,
    `- Visual command: \`${commandLabel}\``,
    "- Packet command: `npm run visual:feedback`",
    `- Counts: ${formatCountSummary(report.counts)}`,
    "- Review order: player-first first, developer-sanity second",
    "- Packet rule: keep human feedback to one paragraph; split theme feedback only when dark and light need different treatment.",
    "",
    "## Feedback Items",
    "",
    captureGroups.length > 0 ? captureGroups.map((group) => renderCaptureGroup(repoRoot, artifactLabel, group)).join("\n") : "No changed or start-here captures were found in this report.",
    "",
    "## Optional Polish Lanes",
    "",
    "- Player-first top-fold readability:",
    "- Source/provenance density:",
    "- Light/dark parity:",
    "- Shell/header visual calm:",
    "- Browse-list scan rhythm:",
    ""
  ].join("\n");
}

async function main() {
  const repoRoot = process.cwd();
  const reportPath = resolve(process.argv[2] ?? ".codex-tmp/visual-review/latest/report.json");
  const outputDir = resolve(repoRoot, "docs/design-feedback");
  const generatedAt = timestampLabel();
  const outputPath = join(outputDir, `visual-feedback-${generatedAt}.md`);
  const artifactLink = process.env.VISUAL_REVIEW_ARTIFACT_URL;
  const visualCommand = process.env.VISUAL_REVIEW_COMMAND;
  const reportStat = await stat(reportPath);
  const report = JSON.parse(await readFile(reportPath, "utf8")) as VisualReviewReport;

  await mkdir(outputDir, { recursive: true });
  await writeFile(
    outputPath,
    renderPacket({
      repoRoot,
      report,
      reportPath,
      outputPath,
      generatedAt,
      reportDate: reportStat.mtime.toISOString(),
      artifactLink,
      visualCommand
    }),
    "utf8"
  );

  console.log(`Design feedback packet written to ${toPosix(relative(repoRoot, outputPath))}`);
  console.log(`Selected captures: ${selectCaptureGroups(report).map((group) => group.captures[0]?.routeId).join(", ") || "none"}`);
}

void main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
