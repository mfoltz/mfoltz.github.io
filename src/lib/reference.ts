import { fetchJson } from "./fetch";

let aliasCache: Promise<Record<string, string>> | null = null;

function loadAliasMap(): Promise<Record<string, string>> {
  if (!aliasCache) {
    aliasCache = fetchJson<Record<string, string>>("/data/reference/aliases.json").catch(() => ({}));
  }

  return aliasCache;
}

export function normalizeReferencePath(pathname: string): string {
  const trimmed = pathname.trim();
  if (!trimmed) {
    return "/";
  }

  const normalized = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return normalized.replace(/\/+$/, "").toLowerCase() || "/";
}

export async function resolveReferenceAlias(pathname: string): Promise<string | null> {
  const aliasMap = await loadAliasMap();
  const normalized = normalizeReferencePath(pathname);
  return aliasMap[normalized] ?? aliasMap[`${normalized}/`] ?? null;
}
