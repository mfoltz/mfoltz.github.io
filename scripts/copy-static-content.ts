import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const sections = ["prefabs", "systems", "queries"] as const;

async function copySection(repoRoot: string, section: (typeof sections)[number]) {
  const sourceDir = path.join(repoRoot, "content", section);
  const destinationDir = path.join(repoRoot, "public", "content", section);

  await rm(destinationDir, { recursive: true, force: true });
  await mkdir(path.dirname(destinationDir), { recursive: true });

  try {
    await stat(sourceDir);
  } catch {
    await mkdir(destinationDir, { recursive: true });
    return;
  }

  await cp(sourceDir, destinationDir, { recursive: true, force: true });
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  for (const section of sections) {
    await copySection(repoRoot, section);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
