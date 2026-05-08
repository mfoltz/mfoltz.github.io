import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { defaultAssetDumpDirs, resolveAssetDumpDir } from "./asset-dump-resolver";

async function withUsableAssetDump(run: (assetDumpDir: string) => Promise<void>): Promise<void> {
  const tmp = await mkdtemp(path.join(tmpdir(), "asset-dump-resolver-"));
  try {
    await mkdir(path.join(tmp, "Texture2D"), { recursive: true });
    await writeFile(path.join(tmp, "Texture2D", "Stunlock_Icon_Test.png"), "");
    await run(tmp);
  } finally {
    await rm(tmp, { recursive: true, force: true });
  }
}

async function main() {
  assert.equal(defaultAssetDumpDirs[0], "C:/Users/mitch/Local/Assets");
  assert.equal(defaultAssetDumpDirs.some((entry) => /OneDrive/i.test(entry)), false);

  await withUsableAssetDump(async (assetDumpDir) => {
    const previousSingle = process.env.VRISING_ASSET_DUMP_DIR;
    const previousMany = process.env.VRISING_ASSET_DUMP_DIRS;
    try {
      process.env.VRISING_ASSET_DUMP_DIR = assetDumpDir;
      process.env.VRISING_ASSET_DUMP_DIRS = "C:/does/not/exist";
      const resolved = await resolveAssetDumpDir();
      assert.equal(resolved.assetDumpDir, path.resolve(assetDumpDir));
      assert.equal(resolved.source, "VRISING_ASSET_DUMP_DIR");
    } finally {
      if (previousSingle === undefined) {
        delete process.env.VRISING_ASSET_DUMP_DIR;
      } else {
        process.env.VRISING_ASSET_DUMP_DIR = previousSingle;
      }
      if (previousMany === undefined) {
        delete process.env.VRISING_ASSET_DUMP_DIRS;
      } else {
        process.env.VRISING_ASSET_DUMP_DIRS = previousMany;
      }
    }
  });

  console.log("ok - asset dump resolver local defaults and overrides");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
