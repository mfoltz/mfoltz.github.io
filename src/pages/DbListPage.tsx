import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BrowseControlStrip, type BrowseMetric } from "../components/common/BrowseControlStrip";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { DbBadge, DbIconAvatar, DbIndexCard } from "../components/db/DbCards";
import { getDbSectionLabel, isDbSection } from "../config/sections";
import { fetchJson } from "../lib/fetch";
import { includesQuery } from "../lib/text";
import { DbIndexEntry } from "../types/db";

const visibleLimit = 144;
const denseVisibleLimit = 120;
const abilityVisibleLimit = 96;
const workstationVisibleLimit = 96;

function FilterChip({ active, label, count, onClick }: { active: boolean; label: string; count?: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
        active
          ? "border-[rgba(130,201,217,0.3)] bg-[rgba(130,201,217,0.12)] text-[var(--database-accent-soft)]"
          : "border-[rgba(223,223,214,0.08)] bg-[rgba(7,8,12,0.28)] text-[var(--database-muted)] hover:border-[rgba(223,223,214,0.16)] hover:text-[var(--database-ink)]"
      }`}
    >
      {typeof count === "number" ? `${label} (${count})` : label}
    </button>
  );
}

function formatDuration(seconds: number | undefined): string | null {
  if (typeof seconds !== "number") {
    return null;
  }

  if (seconds < 60) {
    return `${Number.isInteger(seconds) ? seconds : seconds.toFixed(1)}s`;
  }

  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return remainder === 0 ? `${minutes}m` : `${minutes}m ${remainder.toFixed(1).replace(/\.0$/, "")}s`;
}

function formatNumericValue(value: number | undefined): string | null {
  if (typeof value !== "number") {
    return null;
  }

  return Number.isInteger(value) ? value.toString() : value.toFixed(2).replace(/\.?0+$/, "");
}

function formatCount(value: number | undefined, singular: string, plural = `${singular}s`): string | null {
  if (typeof value !== "number") {
    return null;
  }

  return `${value} ${value === 1 ? singular : plural}`;
}

function normalizeFacet(value: string | undefined, ignored: string[] = ["None"]): string | undefined {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  if (!trimmed || ignored.includes(trimmed)) {
    return undefined;
  }

  return trimmed;
}

function dedupeBadges(values: Array<string | null | undefined>): string[] {
  return [...new Set(values.filter((value): value is string => Boolean(value && value.trim().length > 0)))];
}

function buildFacetOptions(
  entries: DbIndexEntry[],
  getValue: (entry: DbIndexEntry) => string | undefined,
  options: { alphabetical?: boolean; limit?: number } = {}
): Array<[string, number]> {
  const counts = new Map<string, number>();

  for (const entry of entries) {
    const value = getValue(entry);
    if (!value) {
      continue;
    }

    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  const sorted = [...counts.entries()].sort((a, b) =>
    options.alphabetical ? a[0].localeCompare(b[0]) : b[1] - a[1] || a[0].localeCompare(b[0])
  );
  return typeof options.limit === "number" ? sorted.slice(0, options.limit) : sorted;
}

function getItemFamily(entry: DbIndexEntry): string | undefined {
  return normalizeFacet(entry.itemFamily) ?? normalizeFacet(entry.weaponType) ?? normalizeFacet(entry.equipmentType, ["None", "Weapon"]);
}

function getWorkstationArea(entry: DbIndexEntry): string | undefined {
  return entry.workstationRole === "Vendor" ? normalizeFacet(entry.merchantRegion) : normalizeFacet(entry.matchingFloorType);
}

function DenseIndexRow({
  entry,
  badges,
  body,
  rightMeta
}: {
  entry: DbIndexEntry;
  badges: Array<{ label: string; tone?: "accent" | "muted" | "default" }>;
  body: string;
  rightMeta?: string[];
}) {
  return (
    <li className="list-none">
      <Link
        to={entry.path}
        className="group grid gap-4 rounded-[1.45rem] border border-[rgba(223,223,214,0.08)] bg-[linear-gradient(180deg,rgba(32,33,39,0.96),rgba(22,22,24,0.98))] p-4 transition hover:-translate-y-0.5 hover:border-[rgba(130,201,217,0.28)] hover:shadow-[0_24px_72px_rgba(0,0,0,0.28)]"
      >
        <div className="flex items-start gap-4">
          <DbIconAvatar title={entry.title} icon={entry.icon} className="h-14 w-14" monogramClassName="text-[13px]" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <DbBadge key={`${badge.label}:${index}`} tone={badge.tone ?? (index === 0 ? "accent" : "muted")}>
                  {badge.label}
                </DbBadge>
              ))}
            </div>
            <h2 className="mt-3 text-lg font-semibold leading-tight text-[var(--database-ink)]">{entry.title}</h2>
            {entry.subtitle ? <p className="mt-1 break-all font-mono text-[11px] text-[var(--database-dim)]">{entry.subtitle}</p> : null}
            <p className="mt-3 text-sm leading-6 text-[var(--database-muted)]">{body}</p>
          </div>
          {rightMeta && rightMeta.length > 0 ? (
            <div className="hidden min-w-[8rem] shrink-0 text-right xl:block">
              {rightMeta.map((label) => (
                <div key={label} className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--database-dim)]">
                  {label}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="truncate font-mono text-[11px] text-[var(--database-dim)]">{entry.slug}</span>
          <span className="shrink-0 font-semibold uppercase tracking-[0.18em] text-[var(--database-accent-soft)] transition group-hover:text-[var(--database-ink)]">
            Open Record
          </span>
        </div>
      </Link>
    </li>
  );
}

function AbilityIndexRow({ entry }: { entry: DbIndexEntry }) {
  const badges: Array<{ label: string; tone?: "accent" | "muted" | "default" }> = dedupeBadges([entry.school, entry.tier, entry.recordKind, entry.behaviorType]).map(
    (label) => ({ label })
  );
  if (entry.catalogStatus === "technical") {
    badges.push({ label: "Technical", tone: "muted" });
  }

  const castLabel = formatDuration(entry.castTime);
  const cooldownLabel = formatDuration(entry.cooldown);
  const timing = [castLabel ? `Cast ${castLabel}` : null, cooldownLabel ? `Cooldown ${cooldownLabel}` : null].filter((value): value is string => Boolean(value));

  return <DenseIndexRow entry={entry} badges={badges} body={entry.description ?? entry.excerpt ?? "No summary available yet."} rightMeta={timing} />;
}

function ItemIndexRow({ entry }: { entry: DbIndexEntry }) {
  const badges = dedupeBadges([entry.itemGroup, entry.tier, getItemFamily(entry), entry.itemType === "Jewel" ? "Jewel" : undefined]).map((label) => ({ label }));
  const levelLabel = formatNumericValue(entry.level);
  const stackLabel = formatNumericValue(entry.maxAmount);
  const rightMeta = [
    levelLabel ? `Level ${levelLabel}` : null,
    stackLabel ? `Stack ${stackLabel}` : null,
    entry.itemType && entry.itemType !== "Equippable" ? entry.itemType : null
  ].filter((value): value is string => Boolean(value));

  return <DenseIndexRow entry={entry} badges={badges} body={entry.excerpt ?? entry.description ?? "No summary available yet."} rightMeta={rightMeta} />;
}

function RecipeIndexRow({ entry }: { entry: DbIndexEntry }) {
  const badges = dedupeBadges([entry.recipeGroup, entry.tier, entry.recipeFamily]).map((label) => ({ label }));
  const rightMeta = [
    formatDuration(entry.craftDuration) ? `Craft ${formatDuration(entry.craftDuration)}` : null,
    formatCount(entry.requirementCount, "ingredient"),
    formatCount(entry.outputCount, "output"),
    entry.repairCostCount ? formatCount(entry.repairCostCount, "repair cost") : null
  ].filter((value): value is string => Boolean(value));

  return <DenseIndexRow entry={entry} badges={badges} body={entry.excerpt ?? entry.description ?? "No summary available yet."} rightMeta={rightMeta} />;
}

function WorkstationIndexRow({ entry }: { entry: DbIndexEntry }) {
  const secondaryLabel = entry.workstationRole === "Vendor" ? normalizeFacet(entry.merchantInventory) : normalizeFacet(entry.stationKind);
  const tertiaryLabel = getWorkstationArea(entry);
  const badges = dedupeBadges([entry.workstationRole, secondaryLabel, tertiaryLabel]).map((label) => ({ label }));
  const rightMeta = [
    normalizeFacet(entry.bonusServantType) ? `Servant ${normalizeFacet(entry.bonusServantType)}` : null,
    entry.workstationRole === "Vendor" && normalizeFacet(entry.merchantRegion) ? normalizeFacet(entry.merchantRegion) : null,
    normalizeFacet(entry.status, []) ? normalizeFacet(entry.status, []) : null
  ].filter((value): value is string => Boolean(value));

  return <DenseIndexRow entry={entry} badges={badges} body={entry.excerpt ?? entry.description ?? "No summary available yet."} rightMeta={rightMeta} />;
}

export function DbListPage({ section: sectionProp }: { section?: string }) {
  const params = useParams();
  const section = sectionProp ?? params.section ?? "";
  const [entries, setEntries] = useState<DbIndexEntry[]>([]);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [abilityView, setAbilityView] = useState<"catalog" | "all">("catalog");
  const [schoolFilter, setSchoolFilter] = useState("all");
  const [tierFilter, setTierFilter] = useState("all");
  const [itemGroupFilter, setItemGroupFilter] = useState("all");
  const [itemFamilyFilter, setItemFamilyFilter] = useState("all");
  const [itemTierFilter, setItemTierFilter] = useState("all");
  const [recipeGroupFilter, setRecipeGroupFilter] = useState("all");
  const [recipeFamilyFilter, setRecipeFamilyFilter] = useState("all");
  const [recipeTierFilter, setRecipeTierFilter] = useState("all");
  const [workstationRoleFilter, setWorkstationRoleFilter] = useState("all");
  const [workstationAreaFilter, setWorkstationAreaFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isDbSection(section)) {
      setError("Unknown db section.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    fetchJson<DbIndexEntry[]>(`/data/db/${section}/index.json`)
      .then((data) => setEntries(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [section]);

  useEffect(() => {
    setQuery("");
    setCategoryFilter("all");
    setAbilityView("catalog");
    setSchoolFilter("all");
    setTierFilter("all");
    setItemGroupFilter("all");
    setItemFamilyFilter("all");
    setItemTierFilter("all");
    setRecipeGroupFilter("all");
    setRecipeFamilyFilter("all");
    setRecipeTierFilter("all");
    setWorkstationRoleFilter("all");
    setWorkstationAreaFilter("all");
  }, [section]);

  const isAbilitySection = section === "abilities";
  const isItemSection = section === "items";
  const isRecipeSection = section === "recipes";
  const isWorkstationSection = section === "workstations";

  const queryFiltered = useMemo(
    () =>
      entries.filter((entry) =>
        includesQuery(
          [
            entry.title,
            entry.subtitle ?? "",
            entry.slug,
            entry.school ?? "",
            entry.recordKind ?? "",
            entry.itemGroup ?? "",
            entry.itemFamily ?? "",
            entry.itemType ?? "",
            entry.equipmentType ?? "",
            entry.weaponType ?? "",
            entry.recipeGroup ?? "",
            entry.recipeFamily ?? "",
            entry.workstationRole ?? "",
            entry.stationKind ?? "",
            entry.matchingFloorType ?? "",
            entry.bonusServantType ?? "",
            entry.merchantRegion ?? "",
            entry.merchantInventory ?? "",
            entry.categories.join(" "),
            (entry.tags ?? []).join(" "),
            entry.description ?? "",
            entry.excerpt
          ],
          query
        )
      ),
    [entries, query]
  );

  const catalogEntries = useMemo(() => entries.filter((entry) => entry.catalogStatus === "catalog"), [entries]);
  const categoryOptions = useMemo(() => buildFacetOptions(queryFiltered, (entry) => entry.categories[0], { limit: 10 }), [queryFiltered]);

  const abilityViewFiltered = useMemo(
    () => queryFiltered.filter((entry) => abilityView === "all" || entry.catalogStatus === "catalog"),
    [abilityView, queryFiltered]
  );
  const abilitySchoolOptions = useMemo(() => buildFacetOptions(abilityViewFiltered, (entry) => entry.school, { alphabetical: true }), [abilityViewFiltered]);
  const abilityTierOptions = useMemo(() => buildFacetOptions(abilityViewFiltered, (entry) => entry.tier, { alphabetical: true }), [abilityViewFiltered]);
  const abilityFiltered = useMemo(
    () =>
      abilityViewFiltered.filter(
        (entry) => (schoolFilter === "all" || entry.school === schoolFilter) && (tierFilter === "all" || entry.tier === tierFilter)
      ),
    [abilityViewFiltered, schoolFilter, tierFilter]
  );

  const itemGroupOptions = useMemo(() => buildFacetOptions(queryFiltered, (entry) => (isItemSection ? entry.itemGroup : undefined), { limit: 10 }), [isItemSection, queryFiltered]);
  const itemGroupFiltered = useMemo(
    () => queryFiltered.filter((entry) => !isItemSection || itemGroupFilter === "all" || entry.itemGroup === itemGroupFilter),
    [isItemSection, itemGroupFilter, queryFiltered]
  );
  const itemFamilyOptions = useMemo(() => buildFacetOptions(itemGroupFiltered, (entry) => (isItemSection ? getItemFamily(entry) : undefined), { alphabetical: true }), [
    isItemSection,
    itemGroupFiltered
  ]);
  const itemFamilyFiltered = useMemo(
    () => itemGroupFiltered.filter((entry) => !isItemSection || itemFamilyFilter === "all" || getItemFamily(entry) === itemFamilyFilter),
    [isItemSection, itemFamilyFilter, itemGroupFiltered]
  );
  const itemTierOptions = useMemo(() => buildFacetOptions(itemFamilyFiltered, (entry) => (isItemSection ? entry.tier : undefined), { alphabetical: true }), [
    isItemSection,
    itemFamilyFiltered
  ]);
  const itemFiltered = useMemo(
    () => itemFamilyFiltered.filter((entry) => !isItemSection || itemTierFilter === "all" || entry.tier === itemTierFilter),
    [isItemSection, itemFamilyFiltered, itemTierFilter]
  );

  const recipeGroupOptions = useMemo(
    () => buildFacetOptions(queryFiltered, (entry) => (isRecipeSection ? entry.recipeGroup : undefined), { limit: 10 }),
    [isRecipeSection, queryFiltered]
  );
  const recipeGroupFiltered = useMemo(
    () => queryFiltered.filter((entry) => !isRecipeSection || recipeGroupFilter === "all" || entry.recipeGroup === recipeGroupFilter),
    [isRecipeSection, queryFiltered, recipeGroupFilter]
  );
  const recipeFamilyOptions = useMemo(
    () => buildFacetOptions(recipeGroupFiltered, (entry) => (isRecipeSection ? normalizeFacet(entry.recipeFamily) : undefined), { alphabetical: true }),
    [isRecipeSection, recipeGroupFiltered]
  );
  const recipeFamilyFiltered = useMemo(
    () => recipeGroupFiltered.filter((entry) => !isRecipeSection || recipeFamilyFilter === "all" || entry.recipeFamily === recipeFamilyFilter),
    [isRecipeSection, recipeFamilyFilter, recipeGroupFiltered]
  );
  const recipeTierOptions = useMemo(
    () => buildFacetOptions(recipeFamilyFiltered, (entry) => (isRecipeSection ? entry.tier : undefined), { alphabetical: true }),
    [isRecipeSection, recipeFamilyFiltered]
  );
  const recipeFiltered = useMemo(
    () => recipeFamilyFiltered.filter((entry) => !isRecipeSection || recipeTierFilter === "all" || entry.tier === recipeTierFilter),
    [isRecipeSection, recipeFamilyFiltered, recipeTierFilter]
  );

  const workstationRoleOptions = useMemo(
    () => buildFacetOptions(queryFiltered, (entry) => (isWorkstationSection ? entry.workstationRole : undefined), { alphabetical: true }),
    [isWorkstationSection, queryFiltered]
  );
  const workstationRoleFiltered = useMemo(
    () => queryFiltered.filter((entry) => !isWorkstationSection || workstationRoleFilter === "all" || entry.workstationRole === workstationRoleFilter),
    [isWorkstationSection, queryFiltered, workstationRoleFilter]
  );
  const workstationAreaOptions = useMemo(
    () => buildFacetOptions(workstationRoleFiltered, (entry) => (isWorkstationSection ? getWorkstationArea(entry) : undefined), { alphabetical: true }),
    [isWorkstationSection, workstationRoleFiltered]
  );
  const workstationFiltered = useMemo(
    () =>
      workstationRoleFiltered.filter(
        (entry) => !isWorkstationSection || workstationAreaFilter === "all" || getWorkstationArea(entry) === workstationAreaFilter
      ),
    [isWorkstationSection, workstationAreaFilter, workstationRoleFiltered]
  );

  const filtered = useMemo(
    () => queryFiltered.filter((entry) => categoryFilter === "all" || entry.categories.includes(categoryFilter)),
    [categoryFilter, queryFiltered]
  );

  const visibleEntries = filtered.slice(0, visibleLimit);
  const visibleAbilityEntries = abilityFiltered.slice(0, abilityVisibleLimit);
  const visibleItemEntries = itemFiltered.slice(0, denseVisibleLimit);
  const visibleRecipeEntries = recipeFiltered.slice(0, denseVisibleLimit);
  const visibleWorkstationEntries = workstationFiltered.slice(0, workstationVisibleLimit);

  const hasGenericFilters = query.trim().length > 0 || categoryFilter !== "all";
  const hasAbilityFilters = query.trim().length > 0 || abilityView !== "catalog" || schoolFilter !== "all" || tierFilter !== "all";
  const hasItemFilters = query.trim().length > 0 || itemGroupFilter !== "all" || itemFamilyFilter !== "all" || itemTierFilter !== "all";
  const hasRecipeFilters = query.trim().length > 0 || recipeGroupFilter !== "all" || recipeFamilyFilter !== "all" || recipeTierFilter !== "all";
  const hasWorkstationFilters = query.trim().length > 0 || workstationRoleFilter !== "all" || workstationAreaFilter !== "all";

  const genericActiveFilters = [query.trim() ? `Search: ${query.trim()}` : null, categoryFilter !== "all" ? `Facet: ${categoryFilter}` : null].filter(
    (value): value is string => Boolean(value)
  );
  const abilityActiveFilters = [
    query.trim() ? `Search: ${query.trim()}` : null,
    abilityView !== "catalog" ? "View: All records" : null,
    schoolFilter !== "all" ? `School: ${schoolFilter}` : null,
    tierFilter !== "all" ? `Tier: ${tierFilter}` : null
  ].filter((value): value is string => Boolean(value));
  const itemActiveFilters = [
    query.trim() ? `Search: ${query.trim()}` : null,
    itemGroupFilter !== "all" ? `Group: ${itemGroupFilter}` : null,
    itemFamilyFilter !== "all" ? `Family: ${itemFamilyFilter}` : null,
    itemTierFilter !== "all" ? `Tier: ${itemTierFilter}` : null
  ].filter((value): value is string => Boolean(value));
  const recipeActiveFilters = [
    query.trim() ? `Search: ${query.trim()}` : null,
    recipeGroupFilter !== "all" ? `Group: ${recipeGroupFilter}` : null,
    recipeFamilyFilter !== "all" ? `Family: ${recipeFamilyFilter}` : null,
    recipeTierFilter !== "all" ? `Tier: ${recipeTierFilter}` : null
  ].filter((value): value is string => Boolean(value));
  const workstationActiveFilters = [
    query.trim() ? `Search: ${query.trim()}` : null,
    workstationRoleFilter !== "all" ? `Role: ${workstationRoleFilter}` : null,
    workstationAreaFilter !== "all" ? `Area: ${workstationAreaFilter}` : null
  ].filter((value): value is string => Boolean(value));

  const metrics: BrowseMetric[] = loading
    ? [{ label: "Loading db index", tone: "muted" }]
    : isAbilitySection
      ? [
          { label: `${abilityFiltered.length} results` },
          { label: `${catalogEntries.length} catalog abilities`, tone: "muted" },
          { label: `${entries.length} total records`, tone: "muted" }
        ]
      : isItemSection
        ? [
            { label: `${itemFiltered.length} results` },
            { label: `${entries.length} indexed items`, tone: "muted" },
            { label: `${itemGroupOptions.length} browse groups`, tone: "muted" }
          ]
        : isRecipeSection
          ? [
              { label: `${recipeFiltered.length} results` },
              { label: `${entries.length} indexed recipes`, tone: "muted" },
              { label: `${recipeGroupOptions.length} browse groups`, tone: "muted" }
            ]
          : isWorkstationSection
            ? [
                { label: `${workstationFiltered.length} results` },
                { label: `${entries.length} indexed stations`, tone: "muted" },
                { label: `${queryFiltered.filter((entry) => entry.workstationRole === "Vendor").length} vendors`, tone: "muted" }
              ]
            : [
                { label: `${filtered.length} results` },
                { label: `${entries.length} total indexed`, tone: "muted" },
                ...(filtered.length > visibleEntries.length ? [{ label: `Showing first ${visibleEntries.length}`, tone: "accent" as const }] : [])
              ];

  const helperText = !loading
    ? isAbilitySection
      ? "The ability catalog defaults to player spell entries from the spell school assets. Switch to all records when you need the full prefab surface."
      : isItemSection
        ? "Browse items by broad groups, equipment families, and tier. Detail pages keep crafting and repair links ahead of technical source data."
        : isRecipeSection
          ? "Recipes are browsed output-first with ingredient counts and craft time. Workstation linkage stays deferred until the extracts expose a deterministic station join."
          : isWorkstationSection
            ? "Research stations, refinement stations, and vendors are normalized into player-facing names while technical prefab identity stays visible."
            : filtered.length > visibleEntries.length
              ? `Showing first ${visibleEntries.length}. Narrow with search or filters.`
              : entries.length > 0 && categoryOptions.length === 0
                ? "No facet categories are available for this section yet."
                : undefined
    : undefined;

  let emptyLabel: string | null = null;
  if (!loading && !error) {
    if (entries.length === 0) {
      emptyLabel = "No generated records are available for this DB section yet.";
    } else if (query.trim().length > 0 && queryFiltered.length === 0) {
      emptyLabel = `No generated data matched "${query.trim()}".`;
    } else if (isAbilitySection && abilityFiltered.length === 0) {
      emptyLabel = "No ability records match the current catalog filters. Expand to all records or clear filters to widen the view.";
    } else if (isItemSection && itemFiltered.length === 0) {
      emptyLabel = "No items match the current browse filters. Clear filters to widen this catalog.";
    } else if (isRecipeSection && recipeFiltered.length === 0) {
      emptyLabel = "No recipes match the current browse filters. Clear filters to widen this catalog.";
    } else if (isWorkstationSection && workstationFiltered.length === 0) {
      emptyLabel = "No workstations match the current browse filters. Clear filters to widen this catalog.";
    } else if (!isAbilitySection && !isItemSection && !isRecipeSection && !isWorkstationSection && filtered.length === 0 && hasGenericFilters) {
      emptyLabel = "No generated data matches the current filters. Clear filters to widen this view.";
    }
  }

  function clearFilters() {
    setQuery("");
    setCategoryFilter("all");
    setAbilityView("catalog");
    setSchoolFilter("all");
    setTierFilter("all");
    setItemGroupFilter("all");
    setItemFamilyFilter("all");
    setItemTierFilter("all");
    setRecipeGroupFilter("all");
    setRecipeFamilyFilter("all");
    setRecipeTierFilter("all");
    setWorkstationRoleFilter("all");
    setWorkstationAreaFilter("all");
  }

  const title = isDbSection(section) ? `V Rising Mod Database: ${getDbSectionLabel(section)}` : `Database: ${section}`;
  const subtitle = isAbilitySection
    ? "Player-facing spell catalog first, technical prefab coverage still available"
    : isItemSection
      ? "Dense browse for gear, materials, jewels, and knowledge records"
      : isRecipeSection
        ? "Output-first recipes with ingredients, repair costs, and craft-time context"
        : isWorkstationSection
          ? "Normalized player-facing stations and traders with technical prefab traceability"
          : "Structured static database records rendered from generated JSON";

  const heroEyebrow = isAbilitySection
    ? "Database Catalog"
    : isItemSection || isRecipeSection || isWorkstationSection
      ? "Desktop Browse"
      : "Static Database View";
  const heroBody = isAbilitySection
    ? "Browse the curated player spell catalog with school and tier filters, then drop into the full ability prefab set when you need deeper technical coverage."
    : isItemSection
      ? "Items now browse like a real database surface: broad groups, equipment families, and tiers stay filterable without hiding the prefab trail."
      : isRecipeSection
        ? "Recipes center on what they make, what they cost, and how long they take. Station-specific sourcing stays staged until the extracts expose a clean link."
        : isWorkstationSection
          ? "Workstations now separate refinement, research, and vendor records into a clearer browse surface geared for desktop scanning."
          : `Search the generated ${section} records by title, prefab identity, category, or summary. Schema-aware detail pages keep the technical source path available without turning the browse view into a raw dump.`;

  return (
    <div>
      <SectionHeader title={title} subtitle={subtitle} />
      <section className="mb-5 overflow-hidden rounded-[1.8rem] border border-[rgba(223,223,214,0.08)] bg-[radial-gradient(circle_at_top_left,rgba(130,201,217,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(197,36,67,0.12),transparent_30%),linear-gradient(180deg,rgba(32,33,39,0.98),rgba(22,22,24,0.98))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--database-accent-soft)]">{heroEyebrow}</p>
          <p className="mt-3 text-sm leading-7 text-[var(--database-muted)] sm:text-base">{heroBody}</p>
        </div>
      </section>

      <BrowseControlStrip
        searchSlot={
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder={
              isAbilitySection
                ? "Search by ability name, school, prefab, or behavior..."
                : isItemSection
                  ? "Search by item name, family, prefab, or category..."
                  : isRecipeSection
                    ? "Search by output item, prefab, ingredient, or category..."
                    : isWorkstationSection
                      ? "Search by station name, prefab, role, floor, or region..."
                      : `Search ${section}...`
            }
          />
        }
        metrics={metrics}
        filterSlot={
          isAbilitySection ? (
            <>
              <FilterChip
                active={abilityView === "catalog"}
                count={queryFiltered.filter((entry) => entry.catalogStatus === "catalog").length}
                label="Catalog"
                onClick={() => setAbilityView("catalog")}
              />
              <FilterChip active={abilityView === "all"} count={queryFiltered.length} label="All Records" onClick={() => setAbilityView("all")} />
              <FilterChip active={schoolFilter === "all"} count={abilityViewFiltered.length} label="All Schools" onClick={() => setSchoolFilter("all")} />
              {abilitySchoolOptions.map(([school, count]) => (
                <FilterChip key={school} active={schoolFilter === school} count={count} label={school} onClick={() => setSchoolFilter(school)} />
              ))}
              <FilterChip active={tierFilter === "all"} count={abilityViewFiltered.length} label="All Tiers" onClick={() => setTierFilter("all")} />
              {abilityTierOptions.map(([tier, count]) => (
                <FilterChip key={tier} active={tierFilter === tier} count={count} label={tier} onClick={() => setTierFilter(tier)} />
              ))}
            </>
          ) : isItemSection ? (
            <>
              <FilterChip active={itemGroupFilter === "all"} count={queryFiltered.length} label="All Groups" onClick={() => setItemGroupFilter("all")} />
              {itemGroupOptions.map(([group, count]) => (
                <FilterChip key={group} active={itemGroupFilter === group} count={count} label={group} onClick={() => setItemGroupFilter(group)} />
              ))}
              <FilterChip active={itemFamilyFilter === "all"} count={itemGroupFiltered.length} label="All Families" onClick={() => setItemFamilyFilter("all")} />
              {itemFamilyOptions.map(([family, count]) => (
                <FilterChip key={family} active={itemFamilyFilter === family} count={count} label={family} onClick={() => setItemFamilyFilter(family)} />
              ))}
              <FilterChip active={itemTierFilter === "all"} count={itemFamilyFiltered.length} label="All Tiers" onClick={() => setItemTierFilter("all")} />
              {itemTierOptions.map(([tier, count]) => (
                <FilterChip key={tier} active={itemTierFilter === tier} count={count} label={tier} onClick={() => setItemTierFilter(tier)} />
              ))}
            </>
          ) : isRecipeSection ? (
            <>
              <FilterChip active={recipeGroupFilter === "all"} count={queryFiltered.length} label="All Groups" onClick={() => setRecipeGroupFilter("all")} />
              {recipeGroupOptions.map(([group, count]) => (
                <FilterChip key={group} active={recipeGroupFilter === group} count={count} label={group} onClick={() => setRecipeGroupFilter(group)} />
              ))}
              <FilterChip active={recipeFamilyFilter === "all"} count={recipeGroupFiltered.length} label="All Families" onClick={() => setRecipeFamilyFilter("all")} />
              {recipeFamilyOptions.map(([family, count]) => (
                <FilterChip key={family} active={recipeFamilyFilter === family} count={count} label={family} onClick={() => setRecipeFamilyFilter(family)} />
              ))}
              <FilterChip active={recipeTierFilter === "all"} count={recipeFamilyFiltered.length} label="All Tiers" onClick={() => setRecipeTierFilter("all")} />
              {recipeTierOptions.map(([tier, count]) => (
                <FilterChip key={tier} active={recipeTierFilter === tier} count={count} label={tier} onClick={() => setRecipeTierFilter(tier)} />
              ))}
            </>
          ) : isWorkstationSection ? (
            <>
              <FilterChip active={workstationRoleFilter === "all"} count={queryFiltered.length} label="All Roles" onClick={() => setWorkstationRoleFilter("all")} />
              {workstationRoleOptions.map(([role, count]) => (
                <FilterChip key={role} active={workstationRoleFilter === role} count={count} label={role} onClick={() => setWorkstationRoleFilter(role)} />
              ))}
              <FilterChip active={workstationAreaFilter === "all"} count={workstationRoleFiltered.length} label="All Areas" onClick={() => setWorkstationAreaFilter("all")} />
              {workstationAreaOptions.map(([area, count]) => (
                <FilterChip key={area} active={workstationAreaFilter === area} count={count} label={area} onClick={() => setWorkstationAreaFilter(area)} />
              ))}
            </>
          ) : (
            <>
              <FilterChip active={categoryFilter === "all"} count={queryFiltered.length} label="All Facets" onClick={() => setCategoryFilter("all")} />
              {categoryOptions.map(([category, count]) => (
                <FilterChip key={category} active={categoryFilter === category} count={count} label={category} onClick={() => setCategoryFilter(category)} />
              ))}
            </>
          )
        }
        activeFilters={
          isAbilitySection
            ? abilityActiveFilters
            : isItemSection
              ? itemActiveFilters
              : isRecipeSection
                ? recipeActiveFilters
                : isWorkstationSection
                  ? workstationActiveFilters
                  : genericActiveFilters
        }
        helperText={helperText}
        onClear={
          isAbilitySection
            ? hasAbilityFilters
              ? clearFilters
              : undefined
            : isItemSection
              ? hasItemFilters
                ? clearFilters
                : undefined
              : isRecipeSection
                ? hasRecipeFilters
                  ? clearFilters
                  : undefined
                : isWorkstationSection
                  ? hasWorkstationFilters
                    ? clearFilters
                    : undefined
                  : hasGenericFilters
                    ? clearFilters
                    : undefined
        }
      />

      {loading ? <LoadingState label="Loading db index..." /> : null}
      {error ? <ErrorState message={error} /> : null}
      {emptyLabel ? <EmptyState label={emptyLabel} /> : null}

      {isAbilitySection ? (
        <ul className="grid gap-3 xl:grid-cols-2">
          {visibleAbilityEntries.map((entry) => (
            <AbilityIndexRow key={entry.slug} entry={entry} />
          ))}
        </ul>
      ) : isItemSection ? (
        <ul className="grid gap-3 xl:grid-cols-2">
          {visibleItemEntries.map((entry) => (
            <ItemIndexRow key={entry.slug} entry={entry} />
          ))}
        </ul>
      ) : isRecipeSection ? (
        <ul className="grid gap-3 xl:grid-cols-2">
          {visibleRecipeEntries.map((entry) => (
            <RecipeIndexRow key={entry.slug} entry={entry} />
          ))}
        </ul>
      ) : isWorkstationSection ? (
        <ul className="grid gap-3 xl:grid-cols-2">
          {visibleWorkstationEntries.map((entry) => (
            <WorkstationIndexRow key={entry.slug} entry={entry} />
          ))}
        </ul>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleEntries.map((entry) => (
            <DbIndexCard key={entry.slug} entry={entry} section={section} />
          ))}
        </ul>
      )}
    </div>
  );
}
