import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateServerEcsComponentEvidence } from "./server-ecs-enrichment";

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const evidencePath = path.join(repoRoot, "data", "enrichment", "server-ecs-component-evidence.json");
  const evidence = JSON.parse(await readFile(evidencePath, "utf8"));

  validateServerEcsComponentEvidence(evidence);
  console.log("Server ECS draft enrichment evidence passed.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
