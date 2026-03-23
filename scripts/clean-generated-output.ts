import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const publicKeep = new Set([".nojekyll"]);

async function removeChildrenExcept(directory: string, keep: Set<string>) {
  let entries;

  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return;
    }

    throw error;
  }

  await Promise.all(
    entries
      .filter((entry) => !keep.has(entry.name))
      .map((entry) =>
        rm(path.join(directory, entry.name), {
          force: true,
          recursive: true
        })
      )
  );
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const publicDir = path.join(repoRoot, "public");
  const publicDataDir = path.join(publicDir, "data");

  await mkdir(publicDir, { recursive: true });
  await removeChildrenExcept(publicDir, publicKeep);
  await mkdir(publicDataDir, { recursive: true });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
