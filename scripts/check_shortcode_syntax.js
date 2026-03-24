#!/usr/bin/env node

import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const allowedShortcodes = new Set(["figure", "highlight"]);
const shortcodePattern = /\{\{<\s*([A-Za-z0-9_-]+)/g;
const liquidPattern = /\{\{\s*site\./;

async function collectMarkdownFiles(inputs) {
  const files = [];
  const roots = inputs.length > 0 ? inputs : ["."];

  for (const root of roots) {
    await collectMarkdownFilesFromPath(path.resolve(root), files);
  }

  return files.sort((left, right) => left.localeCompare(right));
}

async function collectMarkdownFilesFromPath(targetPath, files) {
  const targetStat = await stat(targetPath);

  if (targetStat.isDirectory()) {
    const entries = await readdir(targetPath, { withFileTypes: true });
    entries.sort((left, right) => left.name.localeCompare(right.name));

    for (const entry of entries) {
      await collectMarkdownFilesFromPath(path.join(targetPath, entry.name), files);
    }

    return;
  }

  if (targetStat.isFile() && path.extname(targetPath).toLowerCase() === ".md") {
    files.push(targetPath);
  }
}

function toDisplayPath(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  return (relativePath || path.basename(filePath)).replace(/\\/g, "/");
}

function findDisallowedShortcodes(lines, displayPath) {
  const hits = [];

  for (const [index, line] of lines.entries()) {
    for (const match of line.matchAll(shortcodePattern)) {
      if (!allowedShortcodes.has(match[1])) {
        hits.push(`${displayPath}:${index + 1}:${line}`);
        break;
      }
    }
  }

  return hits;
}

function findLiquidPatterns(lines, displayPath) {
  const hits = [];

  for (const [index, line] of lines.entries()) {
    if (liquidPattern.test(line)) {
      hits.push(`${displayPath}:${index + 1}:${line}`);
    }
  }

  return hits;
}

async function main() {
  const inputs = process.argv.slice(2);
  const files = await collectMarkdownFiles(inputs);

  if (files.length === 0) {
    return;
  }

  const shortcodeHits = [];
  const liquidHits = [];

  for (const filePath of files) {
    const content = await readFile(filePath, "utf8");
    const lines = content.split(/\r?\n/);
    const displayPath = toDisplayPath(filePath);

    shortcodeHits.push(...findDisallowedShortcodes(lines, displayPath));
    liquidHits.push(...findLiquidPatterns(lines, displayPath));
  }

  if (shortcodeHits.length > 0) {
    console.error("ERROR: Found disallowed angle-bracket shortcode. Use '{{% ... %}}' instead.");
    console.error(shortcodeHits.join("\n"));
    process.exitCode = 1;
    return;
  }

  if (liquidHits.length > 0) {
    console.error("ERROR: Found Liquid template syntax '{{ site.* }}'. Convert to Hugo syntax.");
    console.error(liquidHits.join("\n"));
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
