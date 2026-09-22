import { SearchEntry } from "../types/content";

export function scoreSearchEntry(entry: SearchEntry, query: string): number {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return 0;
  const title = entry.title.toLowerCase();
  const slug = entry.slug.toLowerCase();
  const identifiers = [...(entry.tags ?? []), ...(entry.badges ?? [])].map(value => value.toLowerCase());
  let score = 0;
  if (title === normalized) score += 220;
  if (slug === normalized) score += 200;
  if (title.startsWith(normalized)) score += 160;
  if (slug.startsWith(normalized)) score += 145;
  if (title.includes(normalized)) score += 120;
  if (slug.includes(normalized)) score += 110;
  if (identifiers.some(value => value === normalized)) score += 200;
  if (identifiers.some(value => value.startsWith(normalized))) score += 85;
  if (identifiers.some(value => value.includes(normalized))) score += 60;
  if (entry.excerpt.toLowerCase().includes(normalized)) score += 30;
  return entry.kind === "collection" ? score / 2 : score;
}
