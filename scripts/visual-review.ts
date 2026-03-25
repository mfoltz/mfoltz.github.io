import { parseVisualReviewMode, runVisualReview } from "./visual-review-engine";
import { vrisingVisualReviewConfig } from "./visual-review-config";

async function main() {
  const mode = parseVisualReviewMode(process.argv[2]);
  await runVisualReview(vrisingVisualReviewConfig, mode);
}

void main().catch((error) => {
  console.error(`[visual] ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
