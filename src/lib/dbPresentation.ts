/** Suppress only complete singleton boilerplate in item browse/search copy. */
export function itemRowSummary(summary: string | undefined): string | undefined {
  return summary && !/^(?:Tech|None) item, max stack 1\.?$/i.test(summary.trim()) ? summary : undefined;
}

/** Suppress complete generated workstation boilerplate, preserving any owned prose verbatim. */
export function workstationRowSummary(summary: string | undefined): string | undefined {
  return summary && !/^(?:(?:Station|Refinement|Research|Utility) workstation record with player-facing naming and technical prefab context|(?:[a-z0-9 -]+ )?vendor record with normalized naming and source-prefab context)\.?$/i.test(summary.trim())
    ? summary : undefined;
}
