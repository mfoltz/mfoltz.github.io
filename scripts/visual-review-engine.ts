import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { access, copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
import { chromium, type BrowserContext } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

export type VisualReviewMode = "baseline" | "compare";
export type VisualCaptureStatus = "created" | "matched" | "changed" | "missing-baseline";
export type VisualCaptureKind = "route" | "shell";
export type VisualInteractionType = "click" | "hover";

export interface VisualClip {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface VisualThemeInitializer {
  localStorage?: Record<string, string>;
  documentDataset?: Record<string, string>;
  documentStyle?: Record<string, string>;
}

export interface VisualThemeVariant {
  id: string;
  colorScheme?: "dark" | "light" | "no-preference";
  initialize?: VisualThemeInitializer;
}

export interface VisualReviewPackDefinition {
  id: string;
  title: string;
  summary: string;
}

export interface VisualReadyRule {
  selector?: string;
  timeoutMs?: number;
  documentDataset?: Record<string, string>;
}

export interface VisualCaptureInteraction {
  type: VisualInteractionType;
  selector: string;
  waitMs?: number;
}

export interface VisualReviewCaptureDefinition {
  id: string;
  title: string;
  path: string;
  pack: string;
  kind: VisualCaptureKind;
  clip?: VisualClip;
  interactions?: VisualCaptureInteraction[];
  ready?: VisualReadyRule;
  settleMs?: number;
}

export interface VisualReviewReportConfig {
  title: string;
  summary?: string;
  workflowEyebrow?: string;
  workflowTitle?: string;
  workflowSteps?: string[];
  futureSeamNote?: string;
}

export interface VisualReviewConfig {
  report: VisualReviewReportConfig;
  viewport: {
    width: number;
    height: number;
  };
  themes: VisualThemeVariant[];
  packs: VisualReviewPackDefinition[];
  captures: VisualReviewCaptureDefinition[];
  defaultReady?: VisualReadyRule;
  paths?: {
    distDir?: string;
    baselineDir?: string;
    artifactsRootDir?: string;
  };
}

export interface VisualReviewPaths {
  distDir: string;
  baselineDir: string;
  runDir: string;
  currentDir: string;
  diffDir: string;
}

export interface VisualReviewCaptureRecord {
  theme: string;
  pack: string;
  kind: VisualCaptureKind;
  routeId: string;
  routeTitle: string;
  routePath: string;
  baselinePath: string;
  currentPath: string;
  diffPath: string | null;
  status: VisualCaptureStatus;
  diffPixels: number;
  sizeMismatch: boolean;
}

interface VisualReviewSummary {
  created: number;
  matched: number;
  changed: number;
  missingBaseline: number;
}

export interface VisualReviewReportPackModel {
  id: string;
  title: string;
  summary: string;
  counts: VisualReviewSummary;
  captures: VisualReviewCaptureRecord[];
}

export interface VisualReviewReportModel {
  mode: VisualReviewMode;
  title: string;
  summary?: string;
  baselineDirLabel: string;
  artifactDirLabel: string;
  counts: VisualReviewSummary;
  packs: VisualReviewReportPackModel[];
  workflowEyebrow: string;
  workflowTitle: string;
  workflowSteps: string[];
  futureSeamNote?: string;
}

interface RunVisualReviewOptions {
  repoRoot?: string;
  env?: NodeJS.ProcessEnv;
  log?: (message: string) => void;
}

export function parseVisualReviewMode(value: string | undefined): VisualReviewMode {
  if (value === "baseline" || value === "compare") {
    return value;
  }

  throw new Error(`Expected mode "baseline" or "compare", received "${value ?? "undefined"}".`);
}

export function validateVisualReviewConfig(config: VisualReviewConfig) {
  assertUniqueIds("theme", config.themes.map((theme) => theme.id));
  assertUniqueIds("pack", config.packs.map((pack) => pack.id));
  assertUniqueIds("capture", config.captures.map((capture) => capture.id));

  if (config.themes.length === 0) {
    throw new Error("Visual review config must define at least one theme.");
  }

  if (config.packs.length === 0) {
    throw new Error("Visual review config must define at least one pack.");
  }

  if (config.captures.length === 0) {
    throw new Error("Visual review config must define at least one capture.");
  }

  const knownPacks = new Set(config.packs.map((pack) => pack.id));
  for (const capture of config.captures) {
    if (!knownPacks.has(capture.pack)) {
      throw new Error(`Capture "${capture.id}" references unknown pack "${capture.pack}".`);
    }
  }

  return config;
}

export function resolveVisualReviewPaths(
  config: VisualReviewConfig,
  options?: {
    repoRoot?: string;
    mode?: VisualReviewMode;
    env?: NodeJS.ProcessEnv;
  }
): VisualReviewPaths {
  const repoRoot = options?.repoRoot ?? process.cwd();
  const mode = options?.mode ?? "compare";
  const env = options?.env ?? process.env;
  const distDir = resolve(repoRoot, config.paths?.distDir ?? "dist");
  const baselineDir = resolve(repoRoot, env.VISUAL_BASELINE_DIR ?? config.paths?.baselineDir ?? "tests/visual/baselines");
  const artifactsRootDir = resolve(repoRoot, config.paths?.artifactsRootDir ?? join(".codex-tmp", "visual-review"));
  const runDir = resolve(repoRoot, env.VISUAL_ARTIFACTS_DIR ?? join(artifactsRootDir, mode === "compare" ? "latest" : "baseline"));
  const currentDir = join(runDir, "current");
  const diffDir = join(runDir, "diff");

  return {
    distDir,
    baselineDir,
    runDir,
    currentDir,
    diffDir
  };
}

export async function prepareVisualReviewRun(paths: VisualReviewPaths, mode: VisualReviewMode) {
  await assertPathExists(paths.distDir, "dist output");
  await mkdir(paths.baselineDir, { recursive: true });
  await rm(paths.runDir, { recursive: true, force: true });
  await mkdir(paths.currentDir, { recursive: true });
  await mkdir(paths.diffDir, { recursive: true });

  if (mode === "baseline") {
    await clearPngFiles(paths.baselineDir);
  }
}

export function buildVisualReviewReportModel(
  config: VisualReviewConfig,
  options: {
    mode: VisualReviewMode;
    repoRoot: string;
    baselineDir: string;
    runDir: string;
    captures: VisualReviewCaptureRecord[];
  }
): VisualReviewReportModel {
  const { mode, repoRoot, baselineDir, runDir, captures } = options;
  const counts = summarizeCaptures(captures);
  const packs = config.packs.map((pack) => {
    const packCaptures = captures.filter((capture) => capture.pack === pack.id);
    return {
      id: pack.id,
      title: pack.title,
      summary: pack.summary,
      counts: summarizeCaptures(packCaptures),
      captures: packCaptures
    };
  });

  return {
    mode,
    title: config.report.title,
    summary: config.report.summary,
    baselineDirLabel: relative(repoRoot, baselineDir),
    artifactDirLabel: relative(repoRoot, runDir),
    counts,
    packs,
    workflowEyebrow: config.report.workflowEyebrow ?? "Review Workflow",
    workflowTitle: config.report.workflowTitle ?? "Review the primary pack first, then sweep the supporting sanity pack.",
    workflowSteps:
      config.report.workflowSteps ?? [
        "Run the compare flow and open the report.",
        "Review the primary pack before the supporting sanity pack.",
        "Accept only the visual changes that should become the new standard."
      ],
    futureSeamNote: config.report.futureSeamNote
  };
}

export async function runVisualReview(
  config: VisualReviewConfig,
  mode: VisualReviewMode,
  options?: RunVisualReviewOptions
) {
  validateVisualReviewConfig(config);

  const repoRoot = options?.repoRoot ?? process.cwd();
  const env = options?.env ?? process.env;
  const log = options?.log ?? console.log;
  const paths = resolveVisualReviewPaths(config, { repoRoot, mode, env });

  await prepareVisualReviewRun(paths, mode);

  const server = await startStaticServer(paths.distDir);
  const browser = await chromium.launch({ headless: true });
  const captures: VisualReviewCaptureRecord[] = [];

  try {
    for (const theme of config.themes) {
      const context = await browser.newContext({
        viewport: config.viewport,
        colorScheme: theme.colorScheme ?? "no-preference",
        deviceScaleFactor: 1
      });

      if (theme.initialize) {
        await context.addInitScript(applyThemeInitializer, theme.initialize);
      }

      for (const capture of config.captures) {
        const fileName = `${capture.id}--${theme.id}.png`;
        const currentPath = join(paths.currentDir, fileName);
        const baselinePath = join(paths.baselineDir, fileName);
        const diffPath = join(paths.diffDir, fileName);
        const pageUrl = `${server.url}${capture.path}`;

        log(`[visual:${mode}] ${theme.id} ${capture.path}`);
        await capturePage(context, pageUrl, theme, currentPath, capture, config.defaultReady);

        if (mode === "baseline") {
          await copyFile(currentPath, baselinePath);
          captures.push({
            theme: theme.id,
            pack: capture.pack,
            kind: capture.kind,
            routeId: capture.id,
            routeTitle: capture.title,
            routePath: capture.path,
            baselinePath,
            currentPath,
            diffPath: null,
            status: "created",
            diffPixels: 0,
            sizeMismatch: false
          });
          continue;
        }

        const baselineExists = await pathExists(baselinePath);
        if (!baselineExists) {
          captures.push({
            theme: theme.id,
            pack: capture.pack,
            kind: capture.kind,
            routeId: capture.id,
            routeTitle: capture.title,
            routePath: capture.path,
            baselinePath,
            currentPath,
            diffPath: null,
            status: "missing-baseline",
            diffPixels: 0,
            sizeMismatch: false
          });
          continue;
        }

        const comparison = await compareImages(baselinePath, currentPath, diffPath);
        captures.push({
          theme: theme.id,
          pack: capture.pack,
          kind: capture.kind,
          routeId: capture.id,
          routeTitle: capture.title,
          routePath: capture.path,
          baselinePath,
          currentPath,
          diffPath: comparison.changed ? diffPath : null,
          status: comparison.changed ? "changed" : "matched",
          diffPixels: comparison.diffPixels,
          sizeMismatch: comparison.sizeMismatch
        });
      }

      await context.close();
    }
  } finally {
    await browser.close();
    await server.close();
  }

  const reportPath = join(paths.runDir, "report.html");
  const reportModel = buildVisualReviewReportModel(config, {
    mode,
    repoRoot,
    baselineDir: paths.baselineDir,
    runDir: paths.runDir,
    captures
  });

  await writeFile(reportPath, buildReportHtml(reportModel, repoRoot, paths.runDir), "utf8");

  const changedCount = captures.filter((capture) => capture.status === "changed").length;
  const missingBaselineCount = captures.filter((capture) => capture.status === "missing-baseline").length;

  log(`[visual:${mode}] report: ${reportPath}`);

  if (mode === "compare" && (changedCount > 0 || missingBaselineCount > 0)) {
    throw new Error(
      changedCount > 0
        ? `Visual differences detected in ${changedCount} capture(s).`
        : `Missing baseline captures: ${missingBaselineCount}.`
    );
  }

  return {
    paths,
    reportPath,
    captures
  };
}

function assertUniqueIds(label: string, ids: string[]) {
  const seen = new Set<string>();

  for (const id of ids) {
    if (seen.has(id)) {
      throw new Error(`Duplicate visual review ${label} id "${id}".`);
    }

    seen.add(id);
  }
}

async function assertPathExists(path: string, label: string) {
  if (!(await pathExists(path))) {
    throw new Error(`Missing ${label} at ${path}.`);
  }
}

async function pathExists(path: string) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function clearPngFiles(directory: string) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".png")) {
      await rm(join(directory, entry.name));
    }
  }
}

async function startStaticServer(rootDir: string) {
  const server = createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url ?? "/", "http://127.0.0.1");
      const pathname = decodeURIComponent(requestUrl.pathname);
      const resolved = await resolveRequestPath(rootDir, pathname);

      if (!resolved) {
        response.statusCode = 404;
        response.end("Not found");
        return;
      }

      response.statusCode = 200;
      response.setHeader("Content-Type", contentTypeForPath(resolved));
      createReadStream(resolved).pipe(response);
    } catch (error) {
      response.statusCode = 500;
      response.end(error instanceof Error ? error.message : "Unknown server error");
    }
  });

  await new Promise<void>((resolvePromise) => {
    server.listen(0, "127.0.0.1", () => resolvePromise());
  });

  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Unable to resolve the visual review server address.");
  }

  return {
    url: `http://127.0.0.1:${address.port}`,
    close: async () =>
      new Promise<void>((resolvePromise, rejectPromise) => {
        server.close((error) => (error ? rejectPromise(error) : resolvePromise()));
      })
  };
}

async function resolveRequestPath(rootDir: string, pathname: string) {
  const safePath = pathname === "/" ? "/index.html" : pathname;
  const directPath = resolve(rootDir, `.${safePath}`);

  if (!directPath.startsWith(rootDir)) {
    return null;
  }

  if (await isFile(directPath)) {
    return directPath;
  }

  const nestedIndexPath = resolve(rootDir, `.${pathname}`, "index.html");
  if (nestedIndexPath.startsWith(rootDir) && (await isFile(nestedIndexPath))) {
    return nestedIndexPath;
  }

  if (!extname(pathname)) {
    return resolve(rootDir, "index.html");
  }

  return null;
}

async function isFile(path: string) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

function contentTypeForPath(path: string) {
  const extension = extname(path).toLowerCase();
  switch (extension) {
    case ".css":
      return "text/css; charset=utf-8";
    case ".html":
      return "text/html; charset=utf-8";
    case ".js":
      return "text/javascript; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".svg":
      return "image/svg+xml";
    case ".woff2":
      return "font/woff2";
    default:
      return "application/octet-stream";
  }
}

function applyThemeInitializer(initializer: VisualThemeInitializer) {
  try {
    for (const [key, value] of Object.entries(initializer.localStorage ?? {})) {
      window.localStorage.setItem(key, value);
    }
  } catch {
    // Ignore storage failures in the capture environment.
  }

  for (const [key, value] of Object.entries(initializer.documentDataset ?? {})) {
    document.documentElement.dataset[key] = value;
  }

  for (const [key, value] of Object.entries(initializer.documentStyle ?? {})) {
    document.documentElement.style.setProperty(key, value);
    document.documentElement.style[key as keyof CSSStyleDeclaration] = value;
  }
}

async function capturePage(
  context: BrowserContext,
  pageUrl: string,
  theme: VisualThemeVariant,
  outputPath: string,
  capture: VisualReviewCaptureDefinition,
  defaultReady?: VisualReadyRule
) {
  const page = await context.newPage();
  const readyRule = mergeReadyRule(defaultReady, capture.ready);

  try {
    await page.goto(pageUrl, { waitUntil: "networkidle" });

    if (readyRule.selector) {
      await page.locator(readyRule.selector).first().waitFor({ state: "visible", timeout: readyRule.timeoutMs ?? 20000 });
    }

    const datasetExpectation = {
      ...(theme.initialize?.documentDataset ?? {}),
      ...(readyRule.documentDataset ?? {})
    };

    if (Object.keys(datasetExpectation).length > 0) {
      await page.waitForFunction(
        (entries) =>
          entries.every(([key, value]) => document.documentElement.dataset[key as keyof DOMStringMap] === value),
        Object.entries(datasetExpectation),
        { timeout: readyRule.timeoutMs ?? 5000 }
      );
    }

    await page.evaluate(async () => {
      if ("fonts" in document) {
        await document.fonts.ready;
      }
    });

    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
          caret-color: transparent !important;
        }
        html, body {
          scroll-behavior: auto !important;
        }
      `
    });

    for (const interaction of capture.interactions ?? []) {
      const locator = page.locator(interaction.selector).first();
      if (interaction.type === "hover") {
        await locator.hover();
      } else {
        await locator.click();
      }

      if (interaction.waitMs) {
        await page.waitForTimeout(interaction.waitMs);
      }
    }

    await page.waitForTimeout(capture.settleMs ?? 250);
    await page.screenshot({
      path: outputPath,
      fullPage: !capture.clip,
      clip: capture.clip
    });
  } finally {
    await page.close();
  }
}

function mergeReadyRule(defaultReady?: VisualReadyRule, captureReady?: VisualReadyRule): VisualReadyRule {
  return {
    selector: captureReady?.selector ?? defaultReady?.selector,
    timeoutMs: captureReady?.timeoutMs ?? defaultReady?.timeoutMs,
    documentDataset: {
      ...(defaultReady?.documentDataset ?? {}),
      ...(captureReady?.documentDataset ?? {})
    }
  };
}

async function compareImages(baselinePath: string, currentPath: string, diffPath: string) {
  const baselineImage = PNG.sync.read(await readFile(baselinePath));
  const currentImage = PNG.sync.read(await readFile(currentPath));
  const width = Math.max(baselineImage.width, currentImage.width);
  const height = Math.max(baselineImage.height, currentImage.height);
  const normalizedBaseline = normalizePngSize(baselineImage, width, height);
  const normalizedCurrent = normalizePngSize(currentImage, width, height);
  const diffImage = new PNG({ width, height });
  const sizeMismatch = baselineImage.width !== currentImage.width || baselineImage.height !== currentImage.height;
  const diffPixels = pixelmatch(normalizedBaseline.data, normalizedCurrent.data, diffImage.data, width, height, {
    threshold: 0.1
  });
  const changed = sizeMismatch || diffPixels > 0;

  if (changed) {
    await writeFile(diffPath, PNG.sync.write(diffImage));
  } else if (await pathExists(diffPath)) {
    await rm(diffPath);
  }

  return { changed, diffPixels, sizeMismatch };
}

function normalizePngSize(image: PNG, width: number, height: number) {
  if (image.width === width && image.height === height) {
    return image;
  }

  const normalized = new PNG({ width, height });
  for (let row = 0; row < image.height; row += 1) {
    const sourceStart = row * image.width * 4;
    const sourceEnd = sourceStart + image.width * 4;
    const targetStart = row * width * 4;
    image.data.copy(normalized.data, targetStart, sourceStart, sourceEnd);
  }
  return normalized;
}

function buildReportHtml(model: VisualReviewReportModel, repoRoot: string, runDir: string) {
  const packSections = model.packs
    .filter((pack) => pack.captures.length > 0)
    .map((pack) => {
      const cards = pack.captures.map((capture) => renderCaptureCard(capture, repoRoot, runDir)).join("\n");

      return `
        <section class="pack pack-${escapeHtml(classNameForId(pack.id))}">
          <header class="pack-header">
            <div>
              <div class="eyebrow">${escapeHtml(pack.title)}</div>
              <h2>${escapeHtml(pack.summary)}</h2>
            </div>
            <div class="summary-grid">
              <div class="pill">${pack.captures.length} capture(s)</div>
              <div class="pill">${pack.counts.created} created</div>
              <div class="pill">${pack.counts.matched} matched</div>
              <div class="pill">${pack.counts.changed} changed</div>
              <div class="pill">${pack.counts.missingBaseline} missing baseline</div>
            </div>
          </header>
          <div class="cards">
            ${cards}
          </div>
        </section>
      `;
    })
    .join("\n");

  const summaryMarkup = model.summary ? `<p>${escapeHtml(model.summary)}</p>` : "";
  const futureSeamMarkup = model.futureSeamNote
    ? `<p class="future-seam">${escapeHtml(model.futureSeamNote)}</p>`
    : "";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(model.title)}</title>
    <style>
      :root {
        color-scheme: dark;
        font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        background: #0f1117;
        color: #f4f6fb;
      }
      body {
        margin: 0;
        padding: 2rem;
        background: #0f1117;
        color: #f4f6fb;
      }
      h1, h2, h3, p {
        margin: 0;
      }
      .summary {
        margin-bottom: 2rem;
        display: grid;
        gap: 0.75rem;
      }
      .workflow {
        margin-top: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        padding: 1rem 1.1rem;
        background: rgba(255, 255, 255, 0.03);
      }
      .workflow h2 {
        font-size: 1rem;
      }
      .workflow ol {
        margin: 0.75rem 0 0;
        padding-left: 1.25rem;
        display: grid;
        gap: 0.45rem;
        color: rgba(228, 232, 243, 0.82);
      }
      .summary-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }
      .pill {
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 999px;
        padding: 0.45rem 0.8rem;
        background: rgba(255, 255, 255, 0.04);
        font-size: 0.9rem;
      }
      .pack {
        display: grid;
        gap: 1.25rem;
      }
      .pack + .pack {
        margin-top: 2rem;
      }
      .pack-header {
        display: grid;
        gap: 1rem;
        padding: 1.1rem;
        border-radius: 1rem;
      }
      .pack-player-first .pack-header {
        border: 1px solid rgba(243, 162, 106, 0.22);
        background: linear-gradient(180deg, rgba(243, 162, 106, 0.08), rgba(255, 255, 255, 0.03));
      }
      .pack-developer-sanity .pack-header {
        border: 1px solid rgba(169, 140, 255, 0.16);
        background: linear-gradient(180deg, rgba(169, 140, 255, 0.08), rgba(255, 255, 255, 0.03));
      }
      .pack-header h2 {
        margin-top: 0.35rem;
        font-size: 1.05rem;
        line-height: 1.5;
        color: rgba(244, 246, 251, 0.94);
      }
      .cards {
        display: grid;
        gap: 1.5rem;
      }
      .card {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.03);
      }
      .status-changed {
        border-color: rgba(255, 160, 122, 0.4);
      }
      .status-missing-baseline {
        border-color: rgba(255, 220, 130, 0.45);
      }
      .status-created {
        border-color: rgba(120, 190, 255, 0.35);
      }
      .eyebrow, .path, .status, figcaption, .future-seam {
        color: rgba(228, 232, 243, 0.72);
        font-size: 0.85rem;
      }
      .eyebrow {
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .path {
        margin-top: 0.25rem;
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
      }
      .status {
        margin-top: 0.5rem;
      }
      .grid {
        margin-top: 1rem;
        display: grid;
        gap: 1rem;
      }
      @media (min-width: 1100px) {
        .grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
      figure {
        margin: 0;
        display: grid;
        gap: 0.5rem;
      }
      img, .empty {
        width: 100%;
        border-radius: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: #090b10;
      }
      img {
        display: block;
      }
      .empty {
        min-height: 12rem;
        display: grid;
        place-items: center;
        padding: 1rem;
        text-align: center;
      }
      code {
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
      }
    </style>
  </head>
  <body>
    <section class="summary">
      <div class="eyebrow">Mode</div>
      <h1>${escapeHtml(model.title)} (${escapeHtml(model.mode)})</h1>
      ${summaryMarkup}
      <div>Baseline directory: <code>${escapeHtml(model.baselineDirLabel)}</code></div>
      <div>Artifact directory: <code>${escapeHtml(model.artifactDirLabel)}</code></div>
      <div class="summary-grid">
        <div class="pill">${model.packs.reduce((total, pack) => total + pack.captures.length, 0)} capture(s)</div>
        <div class="pill">${model.counts.created} created</div>
        <div class="pill">${model.counts.matched} matched</div>
        <div class="pill">${model.counts.changed} changed</div>
        <div class="pill">${model.counts.missingBaseline} missing baseline</div>
      </div>
      <section class="workflow">
        <div class="eyebrow">${escapeHtml(model.workflowEyebrow)}</div>
        <h2>${escapeHtml(model.workflowTitle)}</h2>
        <ol>
          ${model.workflowSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
        </ol>
      </section>
      ${futureSeamMarkup}
    </section>
    ${packSections}
  </body>
</html>`;
}

function summarizeCaptures(captures: VisualReviewCaptureRecord[]): VisualReviewSummary {
  return {
    created: captures.filter((capture) => capture.status === "created").length,
    matched: captures.filter((capture) => capture.status === "matched").length,
    changed: captures.filter((capture) => capture.status === "changed").length,
    missingBaseline: captures.filter((capture) => capture.status === "missing-baseline").length
  };
}

function renderCaptureCard(capture: VisualReviewCaptureRecord, repoRoot: string, runDir: string) {
  const baselineSrc = pathToReportAsset(runDir, capture.baselinePath);
  const currentSrc = pathToReportAsset(runDir, capture.currentPath);
  const diffSrc = capture.diffPath ? pathToReportAsset(runDir, capture.diffPath) : null;
  const kindLabel = capture.kind === "shell" ? "shell clip" : "full page";

  return `
    <article class="card status-${capture.status}">
      <header>
        <div class="eyebrow">${escapeHtml(kindLabel)} • ${escapeHtml(capture.theme)} theme</div>
        <h3>${escapeHtml(capture.routeTitle)}</h3>
        <div class="path">${escapeHtml(capture.routePath)}</div>
        <div class="status">${escapeHtml(capture.status.replace("-", " "))}${capture.diffPixels > 0 ? ` • ${capture.diffPixels.toLocaleString()} changed px` : ""}${capture.sizeMismatch ? " • size mismatch" : ""}</div>
      </header>
      <div class="grid">
        <figure>
          <figcaption>Baseline</figcaption>
          ${
            capture.status === "missing-baseline"
              ? `<div class="empty">Missing baseline at ${escapeHtml(relative(repoRoot, capture.baselinePath))}</div>`
              : `<img src="${baselineSrc}" alt="Baseline capture for ${escapeHtml(capture.routeTitle)}" loading="lazy" />`
          }
        </figure>
        <figure>
          <figcaption>Current</figcaption>
          <img src="${currentSrc}" alt="Current capture for ${escapeHtml(capture.routeTitle)}" loading="lazy" />
        </figure>
        <figure>
          <figcaption>Diff</figcaption>
          ${
            diffSrc
              ? `<img src="${diffSrc}" alt="Diff capture for ${escapeHtml(capture.routeTitle)}" loading="lazy" />`
              : `<div class="empty">${capture.status === "created" ? "Baseline run" : "No visual diff"}</div>`
          }
        </figure>
      </div>
    </article>
  `;
}

function classNameForId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9-]+/g, "-");
}

function pathToReportAsset(fromDirectory: string, absolutePath: string) {
  return relative(fromDirectory, absolutePath).replace(/\\/g, "/");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
