import assert from "node:assert/strict";
import test from "node:test";
import { mkdtemp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  buildVisualReviewReportModel,
  prepareVisualReviewRun,
  renderVisualReviewReportHtml,
  resolveVisualReviewPaths,
  validateVisualReviewConfig,
  type VisualReviewCaptureRecord,
  type VisualReviewConfig
} from "./visual-review-engine";

function createConfig(): VisualReviewConfig {
  return {
    report: {
      title: "Test Visual Review"
    },
    viewport: {
      width: 1280,
      height: 720
    },
    themes: [
      {
        id: "dark",
        colorScheme: "dark"
      }
    ],
    packs: [
      {
        id: "player-first",
        title: "Player-first",
        summary: "Primary routes.",
        startHere: "home",
        startHereWhy: "Home is still the fastest read on the player-facing hierarchy.",
        reviewFocus: "Keep the player story obvious before any contributor detail appears.",
        feedbackPrompt: "Answer whether the player-facing surface still reads first."
      },
      {
        id: "developer-sanity",
        title: "Developer sanity",
        summary: "Shell guards.",
        startHere: "shell-home",
        startHereWhy: "Shell Home is the first contributor-facing sanity check.",
        reviewFocus: "Keep contributor signal obvious without making the shell noisy.",
        feedbackPrompt: "Answer whether the contributor signal feels quick to trust."
      }
    ],
    defaultReady: {
      selector: "main"
    },
    captures: [
      {
        id: "home",
        title: "Home",
        path: "/",
        pack: "player-first",
        kind: "route",
        reviewFocus: "Check the homepage hierarchy first.",
        thoughtPrompt: "Does the first screen still read clearly?"
      },
      {
        id: "shell-home",
        title: "Shell Home",
        path: "/",
        pack: "developer-sanity",
        kind: "shell",
        feedbackPrompt: "Is the contributor signal obvious enough to trust quickly?"
      }
    ]
  };
}

function createCaptureRecord(overrides: Partial<VisualReviewCaptureRecord>): VisualReviewCaptureRecord {
  return {
    theme: "dark",
    pack: "player-first",
    kind: "route",
    routeId: "home",
    routeTitle: "Home",
    routePath: "/",
    baselinePath: "baseline.png",
    currentPath: "current.png",
    diffPath: null,
    status: "matched",
    diffPixels: 0,
    sizeMismatch: false,
    isClipped: false,
    ...overrides
  };
}

test("resolveVisualReviewPaths uses a stable default compare directory", () => {
  const repoRoot = "C:\\repo";
  const paths = resolveVisualReviewPaths(createConfig(), {
    repoRoot,
    mode: "compare",
    env: {}
  });

  assert.equal(paths.runDir, join(repoRoot, ".codex-tmp", "visual-review", "latest"));
  assert.equal(paths.currentDir, join(repoRoot, ".codex-tmp", "visual-review", "latest", "current"));
  assert.equal(paths.diffDir, join(repoRoot, ".codex-tmp", "visual-review", "latest", "diff"));
});

test("resolveVisualReviewPaths honors VISUAL_ARTIFACTS_DIR overrides", () => {
  const repoRoot = "C:\\repo";
  const paths = resolveVisualReviewPaths(createConfig(), {
    repoRoot,
    mode: "compare",
    env: {
      VISUAL_ARTIFACTS_DIR: ".codex-tmp/custom-report"
    }
  });

  assert.equal(paths.runDir, join(repoRoot, ".codex-tmp", "custom-report"));
});

test("prepareVisualReviewRun clears stale compare artifacts before reruns", async () => {
  const repoRoot = await mkdtemp(join(tmpdir(), "visual-review-"));
  const config = createConfig();

  try {
    await mkdir(join(repoRoot, "dist"), { recursive: true });
    const paths = resolveVisualReviewPaths(config, {
      repoRoot,
      mode: "compare",
      env: {}
    });

    await mkdir(paths.currentDir, { recursive: true });
    await mkdir(paths.diffDir, { recursive: true });
    await writeFile(join(paths.runDir, "stale.txt"), "stale", "utf8");
    await writeFile(join(paths.currentDir, "stale.png"), "stale", "utf8");
    await writeFile(join(paths.diffDir, "stale.png"), "stale", "utf8");

    await prepareVisualReviewRun(paths, "compare");

    const runEntries = await readdir(paths.runDir);
    assert.deepEqual(runEntries.sort(), ["current", "diff"]);
    assert.equal((await readdir(paths.currentDir)).length, 0);
    assert.equal((await readdir(paths.diffDir)).length, 0);
  } finally {
    await rm(repoRoot, { recursive: true, force: true });
  }
});

test("buildVisualReviewReportModel groups captures by pack and status", () => {
  const model = buildVisualReviewReportModel(createConfig(), {
    mode: "compare",
    repoRoot: "C:\\repo",
    baselineDir: "C:\\repo\\tests\\visual\\baselines",
    runDir: "C:\\repo\\.codex-tmp\\visual-review\\latest",
    captures: [
      createCaptureRecord({ status: "matched", pack: "player-first" }),
      createCaptureRecord({
        routeId: "shell-home",
        routeTitle: "Shell Home",
        kind: "shell",
        pack: "developer-sanity",
        status: "changed",
        diffPath: "diff.png",
        diffPixels: 42
      }),
      createCaptureRecord({
        routeId: "home-light",
        theme: "light",
        pack: "player-first",
        status: "missing-baseline"
      })
    ]
  });

  assert.equal(model.counts.matched, 1);
  assert.equal(model.counts.changed, 1);
  assert.equal(model.counts.missingBaseline, 1);
  assert.equal(model.startHere?.routeId, "home");
  assert.equal(model.compareSummary?.captureTitle, "Home");
  assert.equal(model.packs[0]?.id, "player-first");
  assert.equal(model.packs[0]?.startHereCapture?.routeId, "home");
  assert.equal(model.packs[0]?.captures[0]?.isStartHere, true);
  assert.equal(model.packs[0]?.captures[0]?.reviewFocus, "Check the homepage hierarchy first.");
  assert.equal(model.packs[0]?.captures[0]?.thoughtPrompt, "Does the first screen still read clearly?");
  assert.equal(model.packs[0]?.counts.missingBaseline, 1);
  assert.equal(model.packs[1]?.id, "developer-sanity");
  assert.equal(model.packs[1]?.startHereCapture?.routeId, "shell-home");
  assert.equal(model.packs[1]?.counts.changed, 1);
});

test("renderVisualReviewReportHtml includes pack start-here guidance and contributor prompts", () => {
  const model = buildVisualReviewReportModel(createConfig(), {
    mode: "compare",
    repoRoot: "C:\\repo",
    baselineDir: "C:\\repo\\tests\\visual\\baselines",
    runDir: "C:\\repo\\.codex-tmp\\visual-review\\latest",
    captures: [
      createCaptureRecord({ status: "matched", pack: "player-first" }),
      createCaptureRecord({
        theme: "dark",
        pack: "developer-sanity",
        kind: "shell",
        routeId: "shell-home",
        routeTitle: "Shell Home",
        routePath: "/",
        status: "changed",
        diffPath: "diff.png",
        diffPixels: 42,
        isClipped: true
      })
    ]
  });

  const html = renderVisualReviewReportHtml(model, "C:\\repo", "C:\\repo\\.codex-tmp\\visual-review\\latest");

  assert.match(html, /Start Here/i);
  assert.match(html, /Why this comes first/i);
  assert.match(html, /What to notice:/i);
  assert.match(html, /What to answer after AI triage:/i);
  assert.match(html, /Jump to first capture/i);
});

test("validateVisualReviewConfig rejects captures that reference unknown packs", () => {
  const config = createConfig();
  config.captures = [
    {
      id: "bad",
      title: "Bad",
      path: "/",
      pack: "missing-pack",
      kind: "route"
    }
  ];

  assert.throws(() => validateVisualReviewConfig(config), /unknown pack/i);
});

test("validateVisualReviewConfig rejects duplicate capture ids", () => {
  const config = createConfig();
  config.captures = [
    {
      id: "dup",
      title: "One",
      path: "/",
      pack: "player-first",
      kind: "route"
    },
    {
      id: "dup",
      title: "Two",
      path: "/two",
      pack: "player-first",
      kind: "route"
    }
  ];

  assert.throws(() => validateVisualReviewConfig(config), /duplicate visual review capture id/i);
});

test("validateVisualReviewConfig rejects missing startHere captures", () => {
  const config = createConfig();
  config.packs[1] = {
    ...config.packs[1],
    startHere: "missing-capture"
  };

  assert.throws(() => validateVisualReviewConfig(config), /starthere capture/i);
});
