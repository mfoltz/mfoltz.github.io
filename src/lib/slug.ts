export function slugifySegment(input: string): string {
  const value = input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  return value || "untitled";
}

export function slugFromRelativePath(relativePath: string): string {
  const noExtension = relativePath.replace(/\.md$/i, "");
  return noExtension
    .replace(/\\/g, "/")
    .split("/")
    .filter(Boolean)
    .map((segment) => slugifySegment(segment))
    .join("--");
}

export function isSafeSlug(value: string): boolean {
  return /^[a-z0-9]+(?:[-][a-z0-9]+)*(?:--[a-z0-9]+(?:[-][a-z0-9]+)*)*$/.test(value);
}
