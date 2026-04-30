import { appendFile, readFile } from "node:fs/promises";
import { resolve } from "node:path";

interface VisualReviewCounts {
  created: number;
  matched: number;
  changed: number;
  missingBaseline: number;
}

interface VisualReviewReportJson {
  mode: "baseline" | "compare";
  title: string;
  artifactDirLabel: string;
  counts: VisualReviewCounts;
}

function formatCounts(counts: VisualReviewCounts): string {
  return `${counts.changed} changed, ${counts.matched} matched, ${counts.missingBaseline} missing baseline, ${counts.created} created`;
}

async function main() {
  const reportPath = resolve(process.argv[2] ?? ".codex-tmp/visual-review/latest/report.json");
  let report: VisualReviewReportJson;

  try {
    report = JSON.parse(await readFile(reportPath, "utf8")) as VisualReviewReportJson;
  } catch (error) {
    const message = `Visual review report was not found at ${reportPath}. Build or capture likely failed before report generation.`;
    console.warn(message);
    if (process.env.GITHUB_STEP_SUMMARY) {
      await appendFile(process.env.GITHUB_STEP_SUMMARY, `## Visual Review\n\n${message}\n`);
    }
    return;
  }

  const summary = [
    "## Visual Review",
    "",
    `- Report: \`${report.title}\``,
    `- Mode: \`${report.mode}\``,
    `- Counts: ${formatCounts(report.counts)}`,
    `- Artifact path: \`${report.artifactDirLabel}\``,
    "",
    "Download the `visual-review-report` artifact and open `report.html` to review screenshots and diffs."
  ].join("\n");

  if (process.env.GITHUB_STEP_SUMMARY) {
    await appendFile(process.env.GITHUB_STEP_SUMMARY, `${summary}\n`);
  } else {
    console.log(summary);
  }
}

void main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
