import { copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const distDir = path.join(repoRoot, "dist");
  await copyFile(path.join(distDir, "index.html"), path.join(distDir, "404.html"));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
