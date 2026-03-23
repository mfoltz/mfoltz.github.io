import { slugFromRelativePath } from "./slug";

export function normalize(value: string): string {
  return value.toLowerCase();
}

export function includesQuery(parts: Array<string | undefined>, query: string): boolean {
  if (!query) {
    return true;
  }

  const normalized = normalize(query.trim());
  return parts.some((part) => (part ? normalize(part).includes(normalized) : false));
}

export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function stripFrontMatter(markdown: string): string {
  if (!markdown.startsWith("---")) {
    return markdown;
  }

  const end = markdown.indexOf("\n---", 3);
  if (end === -1) {
    return markdown;
  }

  return markdown.slice(end + 4).trimStart();
}

export function rewriteRelref(markdown: string): string {
  return markdown.replace(/\{\{%\s*relref\s*\"([^\"]+)\"\s*%\}\}/g, (_, rawPath: string) => {
    const cleaned = rawPath.replace(/\\/g, "/").replace(/\.md$/, "").replace(/^\//, "");
    const [section, ...rest] = cleaned.split("/");
    if (!section || rest.length === 0) {
      return "/";
    }

    const slug = slugFromRelativePath(rest.join("/"));
    return `/${section}/${slug}`;
  });
}
