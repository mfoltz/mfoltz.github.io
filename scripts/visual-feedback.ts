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

function uniqueCaptures(captures: VisualReviewCapture[]): VisualReviewCapture[] {
  const seen = new Set<string>();
  const result: VisualReviewCapture[] = [];

  for (const capture of captures) {
    const key = `${capture.pack}:${capture.routeId}:${capture.theme}`;
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    result.push(capture);
  }

  return result;
}

function selectCaptures(report: VisualReviewReport): VisualReviewCapture[] {
  const changed = report.packs.flatMap((pack) => pack.captures.filter((capture) => capture.status !== "matched"));
  const startHere = report.packs.flatMap((pack) => pack.captures.filter((capture) => capture.isStartHere));
  const packOrder = new Map([
    ["player-first", 0],
    ["developer-sanity", 1]
  ]);

  return uniqueCaptures([...changed, ...startHere]).sort((left, right) => {
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

function renderCapture(repoRoot: string, capture: VisualReviewCapture): string {
  const title = `${capture.routeId} / ${capture.theme}`;

  return [
    `### \`${title}\``,
    "",
    "- Status: open",
    `- Pack: ${capture.pack}`,
    `- Theme: ${capture.theme}`,
    `- Route: ${capture.routePath}`,
    `- Capture ID: ${capture.routeId}`,
    `- Capture: ${capture.routeTitle}`,
    `- Visual status: ${capture.status}`,
    `- Diff pixels: ${capture.diffPixels}`,
    `- Baseline: \`${labelPath(repoRoot, capture.baselinePath)}\``,
    `- Current artifact: \`${labelPath(repoRoot, capture.currentPath)}\``,
    `- Diff artifact: \`${labelPath(repoRoot, capture.diffPath)}\``,
    `- Review focus: ${capture.reviewFocus || "none"}`,
    `- Thought prompt: ${capture.thoughtPrompt || "none"}`,
    "",
    "Human read:",
    "",
    "Priority:",
    "",
    "Desired adjustment:",
    "",
    "Do not change:",
    "",
    "Implementation hint:",
    "",
    "Acceptance check:",
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
  const captures = selectCaptures(report);
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
    "- Packet rule: fill in only captures where human design feedback exists; leave other sections blank.",
    "",
    "## Feedback Items",
    "",
    captures.length > 0 ? captures.map((capture) => renderCapture(repoRoot, capture)).join("\n") : "No changed or start-here captures were found in this report.",
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
  console.log(`Selected captures: ${selectCaptures(report).map((capture) => `${capture.routeId}/${capture.theme}`).join(", ") || "none"}`);
}

void main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
