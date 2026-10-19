import { buildDbBrowseOptions, resolveDbBrowseSelection, slugifyDbBrowseValue } from "../config/dbBrowse";
import { isVendorWorkstation } from "../config/dbCategories";
import type { DbIndexEntry } from "../types/db";
import { includesQuery } from "./text";

export function getVendorBrowseModel(entries: DbIndexEntry[], params: URLSearchParams) {
  const vendors = entries.filter(isVendorWorkstation);
  const query = params.get("q") ?? "";
  const matches = vendors.filter(entry => includesQuery([entry.title, entry.subtitle ?? "", entry.slug,
    entry.merchantRegion ?? "", entry.merchantInventory ?? "", entry.description ?? "", entry.excerpt,
    ...(entry.tags ?? [])], query));
  const regionOptions = buildDbBrowseOptions(vendors, entry => entry.merchantRegion, { sortMode: "alphabetical" })
    .map(option => ({ ...option, count: matches.filter(entry => entry.merchantRegion === option.value).length }));
  const region = resolveDbBrowseSelection(params.get("region"), regionOptions);
  const inRegion = vendors.filter(entry => region === "all" || entry.merchantRegion === region);
  const regionMatches = matches.filter(entry => region === "all" || entry.merchantRegion === region);
  const inventoryOptions = buildDbBrowseOptions(inRegion, entry => entry.merchantInventory, { sortMode: "alphabetical" })
    .map(option => ({ ...option, count: regionMatches.filter(entry => entry.merchantInventory === option.value).length }));
  const inventory = resolveDbBrowseSelection(params.get("inventory"), inventoryOptions);
  const filtered = regionMatches.filter(entry => inventory === "all" || entry.merchantInventory === inventory);
  const normalized = new URLSearchParams();
  if (query.trim()) normalized.set("q", query);
  if (region !== "all") normalized.set("region", slugifyDbBrowseValue(region));
  if (inventory !== "all") normalized.set("inventory", slugifyDbBrowseValue(inventory));
  return { vendors, query, region, inventory, regionOptions, inventoryOptions, filtered, normalized };
}
