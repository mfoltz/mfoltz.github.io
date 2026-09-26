/** Suppress only complete singleton boilerplate in item browse/search copy. */
export function itemRowSummary(summary: string | undefined): string | undefined {
  return summary && !/^(?:Tech|None) item, max stack 1\.?$/i.test(summary.trim()) ? summary : undefined;
}
