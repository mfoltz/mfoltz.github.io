import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { access, copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
import { chromium, type BrowserContext } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import { themeStorageKey } from "../src/lib/theme";
import {
  visualCaptures,
  visualReviewPackMeta,
  visualThemes,
  visualViewport,
  type VisualCapture,
  type VisualReviewPack,
  type VisualTheme
} from "./visual-review-manifest";

type Mode = "baseline" | "compare";
type CaptureStatus = "created" | "matched" | "changed" | "missing-baseline";

interface CaptureRecord {
  theme: VisualTheme;
  pack: VisualCapture["pack"];
  kind: VisualCapture["kind"];
  routeId: string;
  routeTitle: string;
  routePath: string;
  baselinePath: string;
  currentPath: string;
  diffPath: string | null;
  status: CaptureStatus;
  diffPixels: number;
  sizeMismatch: boolean;
}

async function main() {
  const mode = parseMode(process.argv[2]);
  const repoRoot = process.cwd();
  const distDir = resolve(repoRoot, "dist");
  const baselineDir = resolve(repoRoot, process.env.VISUAL_BASELINE_DIR ?? "tests/visual/baselines");
  const runDir = resolve(repoRoot, process.env.VISUAL_ARTIFACTS_DIR ?? join(".codex-tmp", "visual-review", timestampLabel()));
  const currentDir = join(runDir, "current");
  const diffDir = join(runDir, "diff");

  await assertPathExists(distDir, "dist output");
  await mkdir(currentDir, { recursive: true });
  await mkdir(diffDir, { recursive: true });
  await mkdir(baselineDir, { recursive: true });

  if (mode === "baseline") {
    await clearPngFiles(baselineDir);
  }

  const server = await startStaticServer(distDir);
  const browser = await chromium.launch({ headless: true });
  const captures: CaptureRecord[] = [];

  try {
    for (const theme of visualThemes) {
      const context = await browser.newContext({
        viewport: visualViewport,
        colorScheme: theme,
        deviceScaleFactor: 1
      });

      await context.addInitScript(
        ({ storageKey, value }) => {
          try {
            window.localStorage.setItem(storageKey, value);
          } catch {
            // Ignore storage failures in the capture environment.
          }

          document.documentElement.dataset.theme = value;
          document.documentElement.style.colorScheme = value;
        },
        { storageKey: themeStorageKey, value: theme }
      );

      for (const capture of visualCaptures) {
        const fileName = `${capture.id}--${theme}.png`;
        const currentPath = join(currentDir, fileName);
        const baselinePath = join(baselineDir, fileName);
        const diffPath = join(diffDir, fileName);
        const pageUrl = `${server.url}${capture.path}`;

        console.log(`[visual:${mode}] ${theme} ${capture.path}`);
        await capturePage(context, pageUrl, theme, currentPath, capture);

        if (mode === "baseline") {
          await copyFile(currentPath, baselinePath);
          captures.push({
            theme,
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
            theme,
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
          theme,
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

  const reportPath = join(runDir, "report.html");
  await writeFile(reportPath, buildReportHtml(mode, repoRoot, baselineDir, runDir, captures), "utf8");

  const changedCount = captures.filter((capture) => capture.status === "changed").length;
  const missingBaselineCount = captures.filter((capture) => capture.status === "missing-baseline").length;

  console.log(`[visual:${mode}] report: ${reportPath}`);

  if (mode === "compare" && (changedCount > 0 || missingBaselineCount > 0)) {
    throw new Error(
      changedCount > 0
        ? `Visual differences detected in ${changedCount} capture(s).`
        : `Missing baseline captures: ${missingBaselineCount}.`
    );
  }
}

function parseMode(value: string | undefined): Mode {
  if (value === "baseline" || value === "compare") {
    return value;
  }

  throw new Error(`Expected mode "baseline" or "compare", received "${value ?? "undefined"}".`);
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

function timestampLabel() {
  const date = new Date();
  const pad = (value: number) => value.toString().padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
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

async function capturePage(context: BrowserContext, pageUrl: string, theme: VisualTheme, outputPath: string, capture: VisualCapture) {
  const page = await context.newPage();

  try {
    await page.goto(pageUrl, { waitUntil: "networkidle" });
    await page.locator("main").first().waitFor({ state: "visible", timeout: 20000 });
    await page.waitForFunction(
      (value) => document.documentElement.dataset.theme === value,
      theme,
      { timeout: 5000 }
    );

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

    if (capture.openShellGroupId) {
      await page.locator(`[data-shell-group-trigger="${capture.openShellGroupId}"]`).hover();
      await page.waitForTimeout(180);
    }

    await page.waitForTimeout(250);
    await page.screenshot({
      path: outputPath,
      fullPage: !capture.clip,
      clip: capture.clip
    });
  } finally {
    await page.close();
  }
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

function buildReportHtml(mode: Mode, repoRoot: string, baselineDir: string, runDir: string, captures: CaptureRecord[]) {
  const summary = summarizeCaptures(captures);
  const packOrder = Object.keys(visualReviewPackMeta) as VisualReviewPack[];

  const packSections = packOrder
    .map((pack) => {
      const packCaptures = captures.filter((capture) => capture.pack === pack);
      if (packCaptures.length === 0) {
        return "";
      }

      const packSummary = summarizeCaptures(packCaptures);
      const packMeta = visualReviewPackMeta[pack];
      const cards = packCaptures.map((capture) => renderCaptureCard(capture, repoRoot, runDir)).join("\n");

      return `
        <section class="pack pack-${pack}">
          <header class="pack-header">
            <div>
              <div class="eyebrow">${escapeHtml(packMeta.title)}</div>
              <h2>${escapeHtml(packMeta.summary)}</h2>
            </div>
            <div class="summary-grid">
              <div class="pill">${packCaptures.length} capture(s)</div>
              <div class="pill">${packSummary.created} created</div>
              <div class="pill">${packSummary.matched} matched</div>
              <div class="pill">${packSummary.changed} changed</div>
              <div class="pill">${packSummary.missingBaseline} missing baseline</div>
            </div>
          </header>
          <div class="cards">
            ${cards}
          </div>
        </section>
      `;
    })
    .join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Visual Review Report</title>
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
      h1, h2, h3 {
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
      }
      .pack-player-first .pack-header {
        padding: 1.1rem;
        border-radius: 1rem;
        border: 1px solid rgba(243, 162, 106, 0.22);
        background: linear-gradient(180deg, rgba(243, 162, 106, 0.08), rgba(255, 255, 255, 0.03));
      }
      .pack-developer-sanity .pack-header {
        padding: 1.1rem;
        border-radius: 1rem;
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
      .eyebrow, .path, .status, figcaption {
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
      <h1>Visual Review ${escapeHtml(mode)}</h1>
      <div>Baseline directory: <code>${escapeHtml(relative(repoRoot, baselineDir))}</code></div>
      <div>Artifact directory: <code>${escapeHtml(relative(repoRoot, runDir))}</code></div>
      <div class="summary-grid">
        <div class="pill">${captures.length} capture(s)</div>
        <div class="pill">${summary.created} created</div>
        <div class="pill">${summary.matched} matched</div>
        <div class="pill">${summary.changed} changed</div>
        <div class="pill">${summary.missingBaseline} missing baseline</div>
      </div>
      <section class="workflow">
        <div class="eyebrow">Accepted Broad-Run QA</div>
        <h2>Review the player-first pack before the developer sanity pack.</h2>
        <ol>
          <li>After a qualifying broad extractor run, refresh website assets with <code>npm run refresh:db-assets</code>.</li>
          <li>Run <code>npm run verify</code>.</li>
          <li>Run <code>npm run visual:compare</code> and open this report.</li>
          <li>Start with the player-first pack, then use the developer sanity pack to catch shell and provenance drift.</li>
        </ol>
      </section>
    </section>
    ${packSections}
  </body>
</html>`;
}

function summarizeCaptures(captures: CaptureRecord[]) {
  return {
    created: captures.filter((capture) => capture.status === "created").length,
    matched: captures.filter((capture) => capture.status === "matched").length,
    changed: captures.filter((capture) => capture.status === "changed").length,
    missingBaseline: captures.filter((capture) => capture.status === "missing-baseline").length
  };
}

function renderCaptureCard(capture: CaptureRecord, repoRoot: string, runDir: string) {
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

void main().catch((error) => {
  console.error(`[visual] ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
