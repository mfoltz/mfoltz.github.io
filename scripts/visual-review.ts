import { parseVisualReviewMode, runVisualReview } from "./visual-review-engine";
import { vrisingVisualReviewConfig } from "./visual-review-config";

async function main() {
  const mode = parseVisualReviewMode(process.argv[2]);
  const args = process.argv.slice(3);
  const allowDiffs = args.includes("--allow-diffs") || args.includes("--ci");
  const captureIds = args.filter((arg) => arg !== "--allow-diffs" && arg !== "--ci");

  await runVisualReview(vrisingVisualReviewConfig, mode, {
    allowDiffs,
    captureIds
  });
}

void main().catch((error) => {
  console.error(`[visual] ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
