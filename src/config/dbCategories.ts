import { dbSections, getDbSectionLabel, isDbSection, isReferenceSection, type DbSection } from "./sections";

/** Browse categories need not own generated storage or canonical detail routes. */
export type DbBrowseCategory = DbSection | "vendors";
export const dbBrowseCategories: DbBrowseCategory[] = [
  ...dbSections.slice(0, 5), "vendors", ...dbSections.slice(5)
];
export function isDbBrowseCategory(value: string): value is DbBrowseCategory {
  return value === "vendors" || isDbSection(value);
}
export function getDbBrowseCategoryLabel(category: DbBrowseCategory): string {
  return category === "vendors" ? "Vendors" : getDbSectionLabel(category);
}
export function getDbBrowseSourceSection(category: DbBrowseCategory): DbSection {
  return category === "vendors" ? "workstations" : category;
}
export function isVendorWorkstation(entry: object): boolean {
  return "workstationRole" in entry && entry.workstationRole === "Vendor";
}
export function getSearchBrowseCategory(entry: { section: string; browseCategory?: string }): string {
  return entry.section === "workstations" && entry.browseCategory === "vendors" ? "vendors" : entry.section;
}
export function matchesSearchScope(entry: { section: string; browseCategory?: string }, scope: string): boolean {
  if (scope === "all") return true;
  if (scope === "db") return isDbSection(entry.section);
  if (scope === "reference") return isReferenceSection(entry.section);
  return getSearchBrowseCategory(entry) === scope;
}

export function legacyVendorBrowseTarget(params: URLSearchParams): string | null {
  if (params.get("role")?.trim().toLowerCase() !== "vendor") return null;
  const next = new URLSearchParams();
  if (params.get("q")) next.set("q", params.get("q")!);
  if (params.get("area") && params.get("area") !== "all") next.set("region", params.get("area")!);
  return "/db/vendors" + (next.size ? `?${next}` : "");
}
