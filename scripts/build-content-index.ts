import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { slugFromRelativePath } from "../src/lib/slug";

const sections = ["prefabs", "systems", "queries"] as const;

type Section = (typeof sections)[number];

interface IndexEntry {
  slug: string;
  title: string;
  section: Section;
  path: string;
  source: string;
  tags: string[];
  excerpt: string;
  lastModified?: string;
}

function parseFrontMatter(markdown: string): { body: string; frontMatter: Record<string, string> } {
  if (!markdown.startsWith("---")) {
    return { body: markdown, frontMatter: {} };
  }

  const end = markdown.indexOf("\n---", 3);
  if (end === -1) {
    return { body: markdown, frontMatter: {} };
  }

  const raw = markdown.slice(3, end).trim();
  const frontMatter: Record<string, string> = {};

  for (const line of raw.split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) {
      continue;
    }
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    frontMatter[key] = value;
  }

  return { body: markdown.slice(end + 4), frontMatter };
}

function getExcerpt(markdown: string): string {
  const lines = markdown
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#") && !line.startsWith("---"));

  return (lines[0] ?? "").slice(0, 220);
}

function parseTags(frontMatter: Record<string, string>): string[] {
  const raw = frontMatter.tags ?? frontMatter.categories;
  if (!raw) {
    return [];
  }

  return raw
    .replace(/[\[\]']/g, "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

async function walkMarkdownFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkMarkdownFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function buildSection(repoRoot: string, section: Section): Promise<IndexEntry[]> {
  const sectionDir = path.join(repoRoot, "content", section);

  try {
    await stat(sectionDir);
  } catch {
    return [];
  }

  const files = await walkMarkdownFiles(sectionDir);
  const entries: IndexEntry[] = [];

  for (const filePath of files) {
    const relative = path.relative(sectionDir, filePath);
    const source = path.posix.join("content", section, relative.replace(/\\/g, "/"));
    const slug = slugFromRelativePath(relative);
    const raw = await readFile(filePath, "utf8");
    const parsed = parseFrontMatter(raw);
    const stats = await stat(filePath);
    const baseName = path.basename(relative, ".md");

    entries.push({
      slug,
      title: (parsed.frontMatter.title ?? baseName).replace(/^"|"$/g, ""),
      section,
      path: `/${section}/${slug}`,
      source,
      tags: parseTags(parsed.frontMatter),
      excerpt: getExcerpt(parsed.body),
      lastModified: stats.mtime.toISOString()
    });
  }

  entries.sort((a, b) => a.title.localeCompare(b.title));
  return entries;
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const outDir = path.join(repoRoot, "public", "data", "indexes");
  await mkdir(outDir, { recursive: true });

  for (const section of sections) {
    const entries = await buildSection(repoRoot, section);
    const outputPath = path.join(outDir, `${section}.index.json`);
    await writeFile(outputPath, JSON.stringify(entries, null, 2));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
