import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { BrowseControlStrip, type BrowseMetric } from "../components/common/BrowseControlStrip";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { DbBadge, DbIndexCard } from "../components/db/DbCards";
import {
  ALL_DB_BROWSE_VALUE,
  buildDbBrowseOptions,
  getDbBrowseProfile,
  resolveDbBrowseSelection,
  resolveDbBrowseView,
  slugifyDbBrowseValue
} from "../config/dbBrowse";
import { getDbSectionLabel, isDbSection } from "../config/sections";
import { fetchJson } from "../lib/fetch";
import { includesQuery } from "../lib/text";
import { DbIndexEntry } from "../types/db";

const visibleLimit = 144;
const denseVisibleLimit = 120;
const abilityVisibleLimit = 96;
const workstationVisibleLimit = 96;
const npcVisibleLimit = 120;

function FilterChip({ active, label, count, onClick }: { active: boolean; label: string; count?: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${active ? "database-segment database-segment-active" : "database-segment"}`}
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

function getItemFamily(entry: DbIndexEntry): string | undefined {
  return normalizeFacet(entry.itemFamily) ?? normalizeFacet(entry.weaponType) ?? normalizeFacet(entry.equipmentType, ["None", "Weapon"]);
}

function getWorkstationArea(entry: DbIndexEntry): string | undefined {
  return entry.workstationRole === "Vendor" ? normalizeFacet(entry.merchantRegion) : normalizeFacet(entry.matchingFloorType);
}

function getNpcSecondaryGroup(entry: DbIndexEntry): string | undefined {
  return normalizeFacet(entry.npcFaction) ?? normalizeFacet(entry.npcUnitCategory);
}

function formatNpcBloodTypeBadge(entry: DbIndexEntry): string | undefined {
  if (!entry.npcBloodType) {
    return undefined;
  }

  return /\bblood\b/i.test(entry.npcBloodType) ? entry.npcBloodType : `${entry.npcBloodType} Blood`;
}

function compareByNpcLevel(left: DbIndexEntry, right: DbIndexEntry): number {
  const leftLevel = typeof left.npcLevel === "number" ? left.npcLevel : Number.POSITIVE_INFINITY;
  const rightLevel = typeof right.npcLevel === "number" ? right.npcLevel : Number.POSITIVE_INFINITY;
  return leftLevel - rightLevel || left.title.localeCompare(right.title) || left.slug.localeCompare(right.slug);
}

function compareNpcBloodCarrierRows(left: DbIndexEntry, right: DbIndexEntry): number {
  return (
    (left.npcBloodType ?? "").localeCompare(right.npcBloodType ?? "") ||
    compareByNpcLevel(left, right)
  );
}

function getAbilityForm(entry: DbIndexEntry): string | undefined {
  return entry.categories.find((category) => ["Spell", "Veil", "Weapon Skill", "Consumable", "Fishing", "Companion"].includes(category));
}

function setSearchParamValue(nextParams: URLSearchParams, key: string, value: string, defaultValue = ALL_DB_BROWSE_VALUE) {
  if (!value || value === defaultValue) {
    nextParams.delete(key);
    return;
  }

  nextParams.set(key, slugifyDbBrowseValue(value));
}

function setSearchParamQuery(nextParams: URLSearchParams, key: string, value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    nextParams.delete(key);
    return;
  }

  nextParams.set(key, trimmed);
}

function renderFacetFilterSet(
  allLabel: string,
  activeValue: string,
  baseCount: number,
  options: Array<{ value: string; count: number }>,
  onSelect: (value: string) => void
) {
  return (
    <>
      <FilterChip active={activeValue === ALL_DB_BROWSE_VALUE} count={baseCount} label={allLabel} onClick={() => onSelect(ALL_DB_BROWSE_VALUE)} />
      {options.map((option) => (
        <FilterChip
          key={option.value}
          active={activeValue === option.value}
          count={option.count}
          label={option.value}
          onClick={() => onSelect(option.value)}
        />
      ))}
    </>
  );
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
  const visibleBadges = badges.slice(0, 3);
  const extraBadgeCount = Math.max(0, badges.length - visibleBadges.length);

  return (
    <li className="list-none">
      <Link
        to={entry.path}
        className="database-ledger-row group grid gap-3.5 px-4 py-3.5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            {visibleBadges.map((badge, index) => (
              <DbBadge key={`${badge.label}:${index}`} tone={badge.tone ?? (index === 0 ? "accent" : "muted")}>
                {badge.label}
              </DbBadge>
            ))}
            {extraBadgeCount > 0 ? <DbBadge tone="muted">{`+${extraBadgeCount}`}</DbBadge> : null}
          </div>
          <h2 className="mt-2.5 text-base font-semibold leading-tight text-[var(--database-ink)] sm:text-[1.05rem]">{entry.title}</h2>
          {entry.subtitle ? <p className="mt-1 break-all font-mono text-[11px] text-[var(--database-dim)]">{entry.subtitle}</p> : null}
          <p className="mt-2.5 max-w-3xl text-sm leading-6 text-[var(--database-muted)]">{body}</p>
          <div className="mt-3 truncate font-mono text-[11px] text-[var(--database-dim)]">{entry.slug}</div>
        </div>
        <div className="flex items-center justify-between gap-4 lg:min-w-[9rem] lg:text-right">
          {rightMeta && rightMeta.length > 0 ? (
            <div className="space-y-1">
              {rightMeta.map((label) => (
                <div key={label} className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--database-dim)]">
                  {label}
                </div>
              ))}
            </div>
          ) : null}
          <span className="database-row-action mt-2 block shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em]">
            Open Record
          </span>
        </div>
      </Link>
    </li>
  );
}

function AbilityIndexRow({ entry }: { entry: DbIndexEntry }) {
  const badges: Array<{ label: string; tone?: "accent" | "muted" | "default" }> = dedupeBadges([
    entry.recordKind,
    getAbilityForm(entry),
    entry.school,
    entry.tier,
    entry.behaviorType
  ]).map((label, index) => ({
    label,
    tone: index === 0 && entry.recordKind && entry.recordKind !== "Player Usable" ? ("muted" as const) : undefined
  }));

  const castLabel = formatDuration(entry.castTime);
  const cooldownLabel = formatDuration(entry.cooldown);
  const timing = [castLabel ? `Cast ${castLabel}` : null, cooldownLabel ? `Cooldown ${cooldownLabel}` : null].filter((value): value is string => Boolean(value));

  return <DenseIndexRow entry={entry} badges={badges} body={entry.description ?? entry.excerpt ?? "No summary available yet."} rightMeta={timing} />;
}

function ItemIndexRow({ entry }: { entry: DbIndexEntry }) {
  const badges = dedupeBadges([
    entry.recordKind && entry.recordKind !== "Player Usable" ? entry.recordKind : undefined,
    entry.itemGroup,
    entry.tier,
    getItemFamily(entry),
    entry.itemType === "Jewel" ? "Jewel" : undefined
  ]).map((label, index) => ({
    label,
    tone: index === 0 && entry.recordKind && entry.recordKind !== "Player Usable" ? ("muted" as const) : undefined
  }));
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

function NpcIndexRow({ entry }: { entry: DbIndexEntry }) {
  const badges = dedupeBadges([entry.npcKind, formatNpcBloodTypeBadge(entry), getNpcSecondaryGroup(entry)]).map((label) => ({
    label
  }));
  const rightMeta = [
    typeof entry.npcLevel === "number" ? `Level ${formatNumericValue(entry.npcLevel)}` : null,
    entry.isVBlood ? "V Blood" : null,
    entry.isServant ? "Servant" : null
  ].filter((value): value is string => Boolean(value));

  return <DenseIndexRow entry={entry} badges={badges} body={entry.excerpt ?? entry.description ?? "No summary available yet."} rightMeta={rightMeta} />;
}

export function DbListPage({ section: sectionProp }: { section?: string }) {
  const params = useParams();
  const section = sectionProp ?? params.section ?? "";
  const validSection = isDbSection(section) ? section : null;
  const profile = validSection ? getDbBrowseProfile(validSection) : null;
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamString = searchParams.toString();
  const [entries, setEntries] = useState<DbIndexEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!validSection) {
      setError("Unknown db section.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    fetchJson<DbIndexEntry[]>(`/data/db/${validSection}/index.json`)
      .then((data) => setEntries(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [validSection]);

  const query = profile ? searchParams.get(profile.searchParam) ?? "" : "";
  const isAbilitySection = validSection === "abilities";
  const isItemSection = validSection === "items";
  const isRecipeSection = validSection === "recipes";
  const isWorkstationSection = validSection === "workstations";
  const isNpcSection = validSection === "npcs";

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
            entry.npcKind ?? "",
            entry.npcBloodType ?? "",
            entry.npcFaction ?? "",
            entry.npcUnitCategory ?? "",
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

  const profileFacet = profile?.facets[0];
  const categoryOptions = useMemo(
    () => buildDbBrowseOptions(queryFiltered, (entry) => entry.categories[0], profileFacet ?? {}),
    [profileFacet, queryFiltered]
  );
  const categoryFilter =
    !isAbilitySection && !isItemSection && !isRecipeSection && !isWorkstationSection && !isNpcSection && profileFacet
      ? resolveDbBrowseSelection(searchParams.get(profileFacet.param), categoryOptions)
      : ALL_DB_BROWSE_VALUE;

  const abilityViewConfig = isAbilitySection ? profile?.view : undefined;
  const abilityView = resolveDbBrowseView(searchParams.get(abilityViewConfig?.param ?? ""), abilityViewConfig);
  const abilitySchoolConfig = isAbilitySection ? profile?.facets.find((facet) => facet.key === "school") : undefined;
  const abilityTierConfig = isAbilitySection ? profile?.facets.find((facet) => facet.key === "tier") : undefined;
  const catalogEntries = useMemo(() => entries.filter((entry) => entry.catalogStatus === "catalog"), [entries]);
  const abilityViewFiltered = useMemo(
    () => queryFiltered.filter((entry) => abilityView === "all" || entry.catalogStatus === "catalog"),
    [abilityView, queryFiltered]
  );
  const abilitySchoolOptions = useMemo(
    () => buildDbBrowseOptions(abilityViewFiltered, (entry) => entry.school, abilitySchoolConfig ?? {}),
    [abilitySchoolConfig, abilityViewFiltered]
  );
  const schoolFilter = resolveDbBrowseSelection(searchParams.get(abilitySchoolConfig?.param ?? ""), abilitySchoolOptions);
  const abilitySchoolFiltered = useMemo(
    () => abilityViewFiltered.filter((entry) => schoolFilter === ALL_DB_BROWSE_VALUE || entry.school === schoolFilter),
    [abilityViewFiltered, schoolFilter]
  );
  const abilityTierOptions = useMemo(
    () => buildDbBrowseOptions(abilitySchoolFiltered, (entry) => entry.tier, abilityTierConfig ?? {}),
    [abilitySchoolFiltered, abilityTierConfig]
  );
  const tierFilter = resolveDbBrowseSelection(searchParams.get(abilityTierConfig?.param ?? ""), abilityTierOptions);
  const abilityFiltered = useMemo(
    () => abilitySchoolFiltered.filter((entry) => tierFilter === ALL_DB_BROWSE_VALUE || entry.tier === tierFilter),
    [abilitySchoolFiltered, tierFilter]
  );

  const itemGroupConfig = isItemSection ? profile?.facets.find((facet) => facet.key === "group") : undefined;
  const itemFamilyConfig = isItemSection ? profile?.facets.find((facet) => facet.key === "family") : undefined;
  const itemTierConfig = isItemSection ? profile?.facets.find((facet) => facet.key === "tier") : undefined;
  const itemGroupOptions = useMemo(
    () => buildDbBrowseOptions(queryFiltered, (entry) => (isItemSection ? entry.itemGroup : undefined), itemGroupConfig ?? {}),
    [isItemSection, itemGroupConfig, queryFiltered]
  );
  const itemGroupFilter = resolveDbBrowseSelection(searchParams.get(itemGroupConfig?.param ?? ""), itemGroupOptions);
  const itemGroupFiltered = useMemo(
    () => queryFiltered.filter((entry) => !isItemSection || itemGroupFilter === ALL_DB_BROWSE_VALUE || entry.itemGroup === itemGroupFilter),
    [isItemSection, itemGroupFilter, queryFiltered]
  );
  const itemFamilyOptions = useMemo(
    () => buildDbBrowseOptions(itemGroupFiltered, (entry) => (isItemSection ? getItemFamily(entry) : undefined), itemFamilyConfig ?? {}),
    [isItemSection, itemFamilyConfig, itemGroupFiltered]
  );
  const itemFamilyFilter = resolveDbBrowseSelection(searchParams.get(itemFamilyConfig?.param ?? ""), itemFamilyOptions);
  const itemFamilyFiltered = useMemo(
    () => itemGroupFiltered.filter((entry) => !isItemSection || itemFamilyFilter === ALL_DB_BROWSE_VALUE || getItemFamily(entry) === itemFamilyFilter),
    [isItemSection, itemFamilyFilter, itemGroupFiltered]
  );
  const itemTierOptions = useMemo(
    () => buildDbBrowseOptions(itemFamilyFiltered, (entry) => (isItemSection ? entry.tier : undefined), itemTierConfig ?? {}),
    [isItemSection, itemFamilyFiltered, itemTierConfig]
  );
  const itemTierFilter = resolveDbBrowseSelection(searchParams.get(itemTierConfig?.param ?? ""), itemTierOptions);
  const itemFiltered = useMemo(
    () => itemFamilyFiltered.filter((entry) => !isItemSection || itemTierFilter === ALL_DB_BROWSE_VALUE || entry.tier === itemTierFilter),
    [isItemSection, itemFamilyFiltered, itemTierFilter]
  );

  const recipeGroupConfig = isRecipeSection ? profile?.facets.find((facet) => facet.key === "group") : undefined;
  const recipeFamilyConfig = isRecipeSection ? profile?.facets.find((facet) => facet.key === "family") : undefined;
  const recipeTierConfig = isRecipeSection ? profile?.facets.find((facet) => facet.key === "tier") : undefined;
  const recipeGroupOptions = useMemo(
    () => buildDbBrowseOptions(queryFiltered, (entry) => (isRecipeSection ? entry.recipeGroup : undefined), recipeGroupConfig ?? {}),
    [isRecipeSection, queryFiltered, recipeGroupConfig]
  );
  const recipeGroupFilter = resolveDbBrowseSelection(searchParams.get(recipeGroupConfig?.param ?? ""), recipeGroupOptions);
  const recipeGroupFiltered = useMemo(
    () => queryFiltered.filter((entry) => !isRecipeSection || recipeGroupFilter === ALL_DB_BROWSE_VALUE || entry.recipeGroup === recipeGroupFilter),
    [isRecipeSection, queryFiltered, recipeGroupFilter]
  );
  const recipeFamilyOptions = useMemo(
    () =>
      buildDbBrowseOptions(
        recipeGroupFiltered,
        (entry) => (isRecipeSection ? normalizeFacet(entry.recipeFamily) : undefined),
        recipeFamilyConfig ?? {}
      ),
    [isRecipeSection, recipeFamilyConfig, recipeGroupFiltered]
  );
  const recipeFamilyFilter = resolveDbBrowseSelection(searchParams.get(recipeFamilyConfig?.param ?? ""), recipeFamilyOptions);
  const recipeFamilyFiltered = useMemo(
    () => recipeGroupFiltered.filter((entry) => !isRecipeSection || recipeFamilyFilter === ALL_DB_BROWSE_VALUE || entry.recipeFamily === recipeFamilyFilter),
    [isRecipeSection, recipeFamilyFilter, recipeGroupFiltered]
  );
  const recipeTierOptions = useMemo(
    () => buildDbBrowseOptions(recipeFamilyFiltered, (entry) => (isRecipeSection ? entry.tier : undefined), recipeTierConfig ?? {}),
    [isRecipeSection, recipeFamilyFiltered, recipeTierConfig]
  );
  const recipeTierFilter = resolveDbBrowseSelection(searchParams.get(recipeTierConfig?.param ?? ""), recipeTierOptions);
  const recipeFiltered = useMemo(
    () => recipeFamilyFiltered.filter((entry) => !isRecipeSection || recipeTierFilter === ALL_DB_BROWSE_VALUE || entry.tier === recipeTierFilter),
    [isRecipeSection, recipeFamilyFiltered, recipeTierFilter]
  );

  const workstationRoleConfig = isWorkstationSection ? profile?.facets.find((facet) => facet.key === "role") : undefined;
  const workstationAreaConfig = isWorkstationSection ? profile?.facets.find((facet) => facet.key === "area") : undefined;
  const workstationRoleOptions = useMemo(
    () => buildDbBrowseOptions(queryFiltered, (entry) => (isWorkstationSection ? entry.workstationRole : undefined), workstationRoleConfig ?? {}),
    [isWorkstationSection, queryFiltered, workstationRoleConfig]
  );
  const workstationRoleFilter = resolveDbBrowseSelection(searchParams.get(workstationRoleConfig?.param ?? ""), workstationRoleOptions);
  const workstationRoleFiltered = useMemo(
    () =>
      queryFiltered.filter(
        (entry) => !isWorkstationSection || workstationRoleFilter === ALL_DB_BROWSE_VALUE || entry.workstationRole === workstationRoleFilter
      ),
    [isWorkstationSection, queryFiltered, workstationRoleFilter]
  );
  const workstationAreaOptions = useMemo(
    () => buildDbBrowseOptions(workstationRoleFiltered, (entry) => (isWorkstationSection ? getWorkstationArea(entry) : undefined), workstationAreaConfig ?? {}),
    [isWorkstationSection, workstationAreaConfig, workstationRoleFiltered]
  );
  const workstationAreaFilter = resolveDbBrowseSelection(searchParams.get(workstationAreaConfig?.param ?? ""), workstationAreaOptions);
  const workstationFiltered = useMemo(
    () =>
      workstationRoleFiltered.filter(
        (entry) => !isWorkstationSection || workstationAreaFilter === ALL_DB_BROWSE_VALUE || getWorkstationArea(entry) === workstationAreaFilter
      ),
    [isWorkstationSection, workstationAreaFilter, workstationRoleFiltered]
  );

  const npcViewConfig = isNpcSection ? profile?.view : undefined;
  const npcView = resolveDbBrowseView(searchParams.get(npcViewConfig?.param ?? ""), npcViewConfig);
  const npcBloodConfig = isNpcSection ? profile?.facets.find((facet) => facet.key === "blood") : undefined;
  const npcViewFiltered = useMemo(
    () =>
      queryFiltered.filter(
        (entry) =>
          !isNpcSection ||
          npcView === "all" ||
          (npcView === "bosses" && entry.isVBlood === true) ||
          (npcView === "blood-carriers" && Boolean(entry.npcBloodType))
      ),
    [isNpcSection, npcView, queryFiltered]
  );
  const npcBloodOptions = useMemo(
    () => buildDbBrowseOptions(npcViewFiltered, (entry) => (isNpcSection ? entry.npcBloodType : undefined), npcBloodConfig ?? {}),
    [isNpcSection, npcBloodConfig, npcViewFiltered]
  );
  const npcBloodFilter = resolveDbBrowseSelection(searchParams.get(npcBloodConfig?.param ?? ""), npcBloodOptions);
  const npcFiltered = useMemo(() => {
    const selected = npcViewFiltered.filter(
      (entry) => !isNpcSection || npcView !== "blood-carriers" || npcBloodFilter === ALL_DB_BROWSE_VALUE || entry.npcBloodType === npcBloodFilter
    );
    return [...selected].sort(npcView === "bosses" ? compareByNpcLevel : npcView === "blood-carriers" ? compareNpcBloodCarrierRows : (left, right) => left.title.localeCompare(right.title));
  }, [isNpcSection, npcBloodFilter, npcView, npcViewFiltered]);

  const filtered = useMemo(
    () => queryFiltered.filter((entry) => categoryFilter === ALL_DB_BROWSE_VALUE || entry.categories.includes(categoryFilter)),
    [categoryFilter, queryFiltered]
  );

  const visibleEntries = filtered.slice(0, visibleLimit);
  const visibleAbilityEntries = abilityFiltered.slice(0, abilityVisibleLimit);
  const visibleItemEntries = itemFiltered.slice(0, denseVisibleLimit);
  const visibleRecipeEntries = recipeFiltered.slice(0, denseVisibleLimit);
  const visibleWorkstationEntries = workstationFiltered.slice(0, workstationVisibleLimit);
  const visibleNpcEntries = npcFiltered.slice(0, npcVisibleLimit);
  const visibleRows = isAbilitySection
    ? visibleAbilityEntries
    : isItemSection
      ? visibleItemEntries
      : isRecipeSection
        ? visibleRecipeEntries
        : isWorkstationSection
          ? visibleWorkstationEntries
          : isNpcSection
            ? visibleNpcEntries
            : visibleEntries;
  const filteredRowCount = isAbilitySection
    ? abilityFiltered.length
    : isItemSection
      ? itemFiltered.length
      : isRecipeSection
        ? recipeFiltered.length
        : isWorkstationSection
          ? workstationFiltered.length
          : isNpcSection
            ? npcFiltered.length
            : filtered.length;

  const hasGenericFilters = query.trim().length > 0 || categoryFilter !== ALL_DB_BROWSE_VALUE;
  const hasAbilityFilters =
    query.trim().length > 0 || abilityView !== (abilityViewConfig?.defaultValue ?? "catalog") || schoolFilter !== ALL_DB_BROWSE_VALUE || tierFilter !== ALL_DB_BROWSE_VALUE;
  const hasItemFilters =
    query.trim().length > 0 || itemGroupFilter !== ALL_DB_BROWSE_VALUE || itemFamilyFilter !== ALL_DB_BROWSE_VALUE || itemTierFilter !== ALL_DB_BROWSE_VALUE;
  const hasRecipeFilters =
    query.trim().length > 0 || recipeGroupFilter !== ALL_DB_BROWSE_VALUE || recipeFamilyFilter !== ALL_DB_BROWSE_VALUE || recipeTierFilter !== ALL_DB_BROWSE_VALUE;
  const hasWorkstationFilters =
    query.trim().length > 0 || workstationRoleFilter !== ALL_DB_BROWSE_VALUE || workstationAreaFilter !== ALL_DB_BROWSE_VALUE;
  const hasNpcFilters =
    query.trim().length > 0 || npcView !== (npcViewConfig?.defaultValue ?? "all") || npcBloodFilter !== ALL_DB_BROWSE_VALUE;

  const abilityViewLabel = abilityViewConfig?.options.find((option) => option.value === abilityView)?.label;
  const genericActiveFilters = [
    query.trim() ? `Search: ${query.trim()}` : null,
    categoryFilter !== ALL_DB_BROWSE_VALUE ? `${profileFacet?.label ?? "Facet"}: ${categoryFilter}` : null
  ].filter((value): value is string => Boolean(value));
  const abilityActiveFilters = [
    query.trim() ? `Search: ${query.trim()}` : null,
    abilityView !== (abilityViewConfig?.defaultValue ?? "catalog") && abilityViewLabel ? `View: ${abilityViewLabel}` : null,
    schoolFilter !== ALL_DB_BROWSE_VALUE ? `${abilitySchoolConfig?.label ?? "School"}: ${schoolFilter}` : null,
    tierFilter !== ALL_DB_BROWSE_VALUE ? `${abilityTierConfig?.label ?? "Tier"}: ${tierFilter}` : null
  ].filter((value): value is string => Boolean(value));
  const itemActiveFilters = [
    query.trim() ? `Search: ${query.trim()}` : null,
    itemGroupFilter !== ALL_DB_BROWSE_VALUE ? `${itemGroupConfig?.label ?? "Group"}: ${itemGroupFilter}` : null,
    itemFamilyFilter !== ALL_DB_BROWSE_VALUE ? `${itemFamilyConfig?.label ?? "Family"}: ${itemFamilyFilter}` : null,
    itemTierFilter !== ALL_DB_BROWSE_VALUE ? `${itemTierConfig?.label ?? "Tier"}: ${itemTierFilter}` : null
  ].filter((value): value is string => Boolean(value));
  const recipeActiveFilters = [
    query.trim() ? `Search: ${query.trim()}` : null,
    recipeGroupFilter !== ALL_DB_BROWSE_VALUE ? `${recipeGroupConfig?.label ?? "Group"}: ${recipeGroupFilter}` : null,
    recipeFamilyFilter !== ALL_DB_BROWSE_VALUE ? `${recipeFamilyConfig?.label ?? "Family"}: ${recipeFamilyFilter}` : null,
    recipeTierFilter !== ALL_DB_BROWSE_VALUE ? `${recipeTierConfig?.label ?? "Tier"}: ${recipeTierFilter}` : null
  ].filter((value): value is string => Boolean(value));
  const workstationActiveFilters = [
    query.trim() ? `Search: ${query.trim()}` : null,
    workstationRoleFilter !== ALL_DB_BROWSE_VALUE ? `${workstationRoleConfig?.label ?? "Role"}: ${workstationRoleFilter}` : null,
    workstationAreaFilter !== ALL_DB_BROWSE_VALUE ? `${workstationAreaConfig?.label ?? "Area"}: ${workstationAreaFilter}` : null
  ].filter((value): value is string => Boolean(value));
  const npcViewLabel = npcViewConfig?.options.find((option) => option.value === npcView)?.label;
  const npcActiveFilters = [
    query.trim() ? `Search: ${query.trim()}` : null,
    npcView !== (npcViewConfig?.defaultValue ?? "all") && npcViewLabel ? `View: ${npcViewLabel}` : null,
    npcBloodFilter !== ALL_DB_BROWSE_VALUE ? `${npcBloodConfig?.label ?? "Blood Type"}: ${npcBloodFilter}` : null
  ].filter((value): value is string => Boolean(value));
  const activeFilters = isAbilitySection
    ? abilityActiveFilters
    : isItemSection
      ? itemActiveFilters
      : isRecipeSection
        ? recipeActiveFilters
        : isWorkstationSection
          ? workstationActiveFilters
          : isNpcSection
            ? npcActiveFilters
            : genericActiveFilters;

  const activeSchoolSlice = isAbilitySection && schoolFilter !== ALL_DB_BROWSE_VALUE ? schoolFilter : undefined;
  const sectionLabel = validSection ? getDbSectionLabel(validSection) : section;
  const title =
    activeSchoolSlice && profile?.subsection
      ? profile.subsection.buildSectionTitle(activeSchoolSlice)
      : validSection
        ? `Database: ${sectionLabel}`
        : `Database: ${section}`;
  const subtitle =
    activeSchoolSlice && profile?.subsection
      ? profile.subsection.buildSectionSubtitle(activeSchoolSlice, abilityView)
      : profile?.sectionSubtitle ?? "Structured generated records from the database index.";
  const helperText =
    !loading && profile
      ? activeSchoolSlice && profile.subsection
        ? profile.subsection.buildHelperText(activeSchoolSlice, abilityView)
        : !isAbilitySection && !isItemSection && !isRecipeSection && !isWorkstationSection && !isNpcSection && filtered.length > visibleEntries.length
          ? `Showing first ${visibleEntries.length}. Narrow with search or filters.`
          : !isAbilitySection && !isItemSection && !isRecipeSection && !isWorkstationSection && !isNpcSection && entries.length > 0 && categoryOptions.length === 0
            ? "No facet categories are available for this section yet."
            : profile.helperText
      : undefined;
  const surfaceEyebrow = activeSchoolSlice && profile?.subsection ? profile.subsection.label : profile?.surfaceEyebrow ?? "Static Database View";
  const surfaceTitle =
    activeSchoolSlice && profile?.subsection ? profile.subsection.buildSurfaceTitle(activeSchoolSlice, abilityView) : profile?.surfaceTitle ?? "Database Records";

  const metrics: BrowseMetric[] = loading
    ? [{ label: "Loading db index", tone: "muted" }]
    : isAbilitySection
      ? [
          { label: `${abilityFiltered.length} results` },
          ...(activeSchoolSlice ? [{ label: `${activeSchoolSlice} school`, tone: "accent" as const }] : [{ label: `${catalogEntries.length} catalog abilities`, tone: "muted" as const }]),
          { label: abilityView === "all" ? "All records view" : "Catalog view", tone: "muted" },
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
            : isNpcSection
              ? [
                  { label: `${npcFiltered.length} results` },
                  { label: `${queryFiltered.filter((entry) => entry.isVBlood === true).length} V Blood bosses`, tone: npcView === "bosses" ? "accent" : "muted" },
                  { label: `${queryFiltered.filter((entry) => Boolean(entry.npcBloodType)).length} blood carriers`, tone: npcView === "blood-carriers" ? "accent" : "muted" },
                  { label: `${entries.length} indexed NPCs`, tone: "muted" }
                ]
              : [
                  { label: `${filtered.length} results` },
                  { label: `${entries.length} total indexed`, tone: "muted" },
                  ...(filtered.length > visibleEntries.length ? [{ label: `Showing first ${visibleEntries.length}`, tone: "accent" as const }] : [])
                ];

  let emptyLabel: string | null = null;
  if (!loading && !error) {
    if (entries.length === 0) {
      emptyLabel = "No generated records are available for this DB section yet.";
    } else if (query.trim().length > 0 && queryFiltered.length === 0) {
      emptyLabel = `No generated data matched "${query.trim()}".`;
    } else if (isAbilitySection && abilityFiltered.length === 0) {
      emptyLabel =
        schoolFilter !== ALL_DB_BROWSE_VALUE
          ? `No ability records match the ${schoolFilter} school slice. Clear filters or switch views to widen this catalog.`
          : "No ability records match the current catalog filters. Expand to all records or clear filters to widen the view.";
    } else if (isItemSection && itemFiltered.length === 0) {
      emptyLabel = "No items match the current browse filters. Clear filters to widen this catalog.";
    } else if (isRecipeSection && recipeFiltered.length === 0) {
      emptyLabel = "No recipes match the current browse filters. Clear filters to widen this catalog.";
    } else if (isWorkstationSection && workstationFiltered.length === 0) {
      emptyLabel = "No workstations match the current browse filters. Clear filters to widen this catalog.";
    } else if (isNpcSection && npcFiltered.length === 0) {
      emptyLabel =
        npcView === "bosses"
          ? "No V Blood bosses match the current browse filters. Clear filters to widen this ladder."
          : npcView === "blood-carriers"
            ? "No blood carriers match the current browse filters. Clear filters to widen this slice."
            : "No NPCs match the current browse filters. Clear filters to widen this catalog.";
    } else if (!isAbilitySection && !isItemSection && !isRecipeSection && !isWorkstationSection && !isNpcSection && filtered.length === 0 && hasGenericFilters) {
      emptyLabel = "No generated data matches the current filters. Clear filters to widen this view.";
    }
  }

  const canonicalParams = useMemo(() => {
    const next = new URLSearchParams();

    if (!profile) {
      return next;
    }

    setSearchParamQuery(next, profile.searchParam, query);

    if (isAbilitySection && abilityViewConfig) {
      setSearchParamValue(next, abilityViewConfig.param, abilityView, abilityViewConfig.defaultValue);
      if (abilitySchoolConfig) {
        setSearchParamValue(next, abilitySchoolConfig.param, schoolFilter);
      }
      if (abilityTierConfig) {
        setSearchParamValue(next, abilityTierConfig.param, tierFilter);
      }
      return next;
    }

    if (isItemSection) {
      if (itemGroupConfig) {
        setSearchParamValue(next, itemGroupConfig.param, itemGroupFilter);
      }
      if (itemFamilyConfig) {
        setSearchParamValue(next, itemFamilyConfig.param, itemFamilyFilter);
      }
      if (itemTierConfig) {
        setSearchParamValue(next, itemTierConfig.param, itemTierFilter);
      }
      return next;
    }

    if (isRecipeSection) {
      if (recipeGroupConfig) {
        setSearchParamValue(next, recipeGroupConfig.param, recipeGroupFilter);
      }
      if (recipeFamilyConfig) {
        setSearchParamValue(next, recipeFamilyConfig.param, recipeFamilyFilter);
      }
      if (recipeTierConfig) {
        setSearchParamValue(next, recipeTierConfig.param, recipeTierFilter);
      }
      return next;
    }

    if (isWorkstationSection) {
      if (workstationRoleConfig) {
        setSearchParamValue(next, workstationRoleConfig.param, workstationRoleFilter);
      }
      if (workstationAreaConfig) {
        setSearchParamValue(next, workstationAreaConfig.param, workstationAreaFilter);
      }
      return next;
    }

    if (isNpcSection) {
      if (npcViewConfig) {
        setSearchParamValue(next, npcViewConfig.param, npcView, npcViewConfig.defaultValue);
      }
      if (npcBloodConfig && npcView === "blood-carriers") {
        setSearchParamValue(next, npcBloodConfig.param, npcBloodFilter);
      }
      return next;
    }

    if (profileFacet) {
      setSearchParamValue(next, profileFacet.param, categoryFilter);
    }

    return next;
  }, [
    abilitySchoolConfig,
    abilityTierConfig,
    abilityView,
    abilityViewConfig,
    categoryFilter,
    isAbilitySection,
    isItemSection,
    isNpcSection,
    isRecipeSection,
    isWorkstationSection,
    itemFamilyConfig,
    itemFamilyFilter,
    itemGroupConfig,
    itemGroupFilter,
    itemTierConfig,
    itemTierFilter,
    npcBloodConfig,
    npcBloodFilter,
    npcView,
    npcViewConfig,
    profile,
    profileFacet,
    query,
    recipeFamilyConfig,
    recipeFamilyFilter,
    recipeGroupConfig,
    recipeGroupFilter,
    recipeTierConfig,
    recipeTierFilter,
    schoolFilter,
    tierFilter,
    workstationAreaConfig,
    workstationAreaFilter,
    workstationRoleConfig,
    workstationRoleFilter
  ]);

  useEffect(() => {
    if (!profile || loading || error) {
      return;
    }

    if (searchParamString !== canonicalParams.toString()) {
      setSearchParams(canonicalParams, { replace: true });
    }
  }, [canonicalParams, error, loading, profile, searchParamString, setSearchParams]);

  function updateParams(mutator: (nextParams: URLSearchParams) => void) {
    const nextParams = new URLSearchParams(searchParams);
    mutator(nextParams);
    setSearchParams(nextParams);
  }

  function clearFilters() {
    setSearchParams(new URLSearchParams());
  }

  const canClearFilters = isAbilitySection
    ? hasAbilityFilters
    : isItemSection
      ? hasItemFilters
      : isRecipeSection
        ? hasRecipeFilters
        : isWorkstationSection
          ? hasWorkstationFilters
          : isNpcSection
            ? hasNpcFilters
            : hasGenericFilters;

  return (
    <div>
      <SectionHeader title={title} subtitle={subtitle} />
      <BrowseControlStrip
        searchSlot={
          <SearchInput
            value={query}
            onChange={(value) =>
              updateParams((nextParams) => {
                if (!profile) {
                  return;
                }

                setSearchParamQuery(nextParams, profile.searchParam, value);
              })
            }
            placeholder={profile?.searchPlaceholder ?? `Search ${section}...`}
          />
        }
        metrics={metrics}
        filterSlot={
          isAbilitySection ? (
            <>
              {abilityViewConfig?.options.map((option) => (
                <FilterChip
                  key={option.value}
                  active={abilityView === option.value}
                  count={option.value === "catalog" ? queryFiltered.filter((entry) => entry.catalogStatus === "catalog").length : queryFiltered.length}
                  label={option.label}
                  onClick={() =>
                    updateParams((nextParams) => {
                      if (!abilityViewConfig) {
                        return;
                      }

                      setSearchParamValue(nextParams, abilityViewConfig.param, option.value, abilityViewConfig.defaultValue);
                    })
                  }
                />
              ))}
              {abilitySchoolConfig
                ? renderFacetFilterSet(abilitySchoolConfig.allLabel, schoolFilter, abilityViewFiltered.length, abilitySchoolOptions, (value) =>
                    updateParams((nextParams) => {
                      setSearchParamValue(nextParams, abilitySchoolConfig.param, value);
                      if (abilityTierConfig) {
                        nextParams.delete(abilityTierConfig.param);
                      }
                    })
                  )
                : null}
              {abilityTierConfig
                ? renderFacetFilterSet(abilityTierConfig.allLabel, tierFilter, abilitySchoolFiltered.length, abilityTierOptions, (value) =>
                    updateParams((nextParams) => {
                      setSearchParamValue(nextParams, abilityTierConfig.param, value);
                    })
                  )
                : null}
            </>
          ) : isItemSection ? (
            <>
              {itemGroupConfig
                ? renderFacetFilterSet(itemGroupConfig.allLabel, itemGroupFilter, queryFiltered.length, itemGroupOptions, (value) =>
                    updateParams((nextParams) => {
                      setSearchParamValue(nextParams, itemGroupConfig.param, value);
                      if (itemFamilyConfig) {
                        nextParams.delete(itemFamilyConfig.param);
                      }
                      if (itemTierConfig) {
                        nextParams.delete(itemTierConfig.param);
                      }
                    })
                  )
                : null}
              {itemFamilyConfig
                ? renderFacetFilterSet(itemFamilyConfig.allLabel, itemFamilyFilter, itemGroupFiltered.length, itemFamilyOptions, (value) =>
                    updateParams((nextParams) => {
                      setSearchParamValue(nextParams, itemFamilyConfig.param, value);
                      if (itemTierConfig) {
                        nextParams.delete(itemTierConfig.param);
                      }
                    })
                  )
                : null}
              {itemTierConfig
                ? renderFacetFilterSet(itemTierConfig.allLabel, itemTierFilter, itemFamilyFiltered.length, itemTierOptions, (value) =>
                    updateParams((nextParams) => {
                      setSearchParamValue(nextParams, itemTierConfig.param, value);
                    })
                  )
                : null}
            </>
          ) : isRecipeSection ? (
            <>
              {recipeGroupConfig
                ? renderFacetFilterSet(recipeGroupConfig.allLabel, recipeGroupFilter, queryFiltered.length, recipeGroupOptions, (value) =>
                    updateParams((nextParams) => {
                      setSearchParamValue(nextParams, recipeGroupConfig.param, value);
                      if (recipeFamilyConfig) {
                        nextParams.delete(recipeFamilyConfig.param);
                      }
                      if (recipeTierConfig) {
                        nextParams.delete(recipeTierConfig.param);
                      }
                    })
                  )
                : null}
              {recipeFamilyConfig
                ? renderFacetFilterSet(recipeFamilyConfig.allLabel, recipeFamilyFilter, recipeGroupFiltered.length, recipeFamilyOptions, (value) =>
                    updateParams((nextParams) => {
                      setSearchParamValue(nextParams, recipeFamilyConfig.param, value);
                      if (recipeTierConfig) {
                        nextParams.delete(recipeTierConfig.param);
                      }
                    })
                  )
                : null}
              {recipeTierConfig
                ? renderFacetFilterSet(recipeTierConfig.allLabel, recipeTierFilter, recipeFamilyFiltered.length, recipeTierOptions, (value) =>
                    updateParams((nextParams) => {
                      setSearchParamValue(nextParams, recipeTierConfig.param, value);
                    })
                  )
                : null}
            </>
          ) : isWorkstationSection ? (
            <>
              {workstationRoleConfig
                ? renderFacetFilterSet(workstationRoleConfig.allLabel, workstationRoleFilter, queryFiltered.length, workstationRoleOptions, (value) =>
                    updateParams((nextParams) => {
                      setSearchParamValue(nextParams, workstationRoleConfig.param, value);
                      if (workstationAreaConfig) {
                        nextParams.delete(workstationAreaConfig.param);
                      }
                    })
                  )
                : null}
              {workstationAreaConfig
                ? renderFacetFilterSet(workstationAreaConfig.allLabel, workstationAreaFilter, workstationRoleFiltered.length, workstationAreaOptions, (value) =>
                    updateParams((nextParams) => {
                      setSearchParamValue(nextParams, workstationAreaConfig.param, value);
                    })
                  )
                : null}
            </>
          ) : isNpcSection ? (
            <>
              {npcViewConfig?.options.map((option) => (
                <FilterChip
                  key={option.value}
                  active={npcView === option.value}
                  count={
                    option.value === "bosses"
                      ? queryFiltered.filter((entry) => entry.isVBlood === true).length
                      : option.value === "blood-carriers"
                        ? queryFiltered.filter((entry) => Boolean(entry.npcBloodType)).length
                        : queryFiltered.length
                  }
                  label={option.label}
                  onClick={() =>
                    updateParams((nextParams) => {
                      if (!npcViewConfig) {
                        return;
                      }

                      setSearchParamValue(nextParams, npcViewConfig.param, option.value, npcViewConfig.defaultValue);
                      if (npcBloodConfig) {
                        nextParams.delete(npcBloodConfig.param);
                      }
                    })
                  }
                />
              ))}
              {npcBloodConfig && npcView === "blood-carriers"
                ? renderFacetFilterSet(npcBloodConfig.allLabel, npcBloodFilter, npcViewFiltered.length, npcBloodOptions, (value) =>
                    updateParams((nextParams) => {
                      setSearchParamValue(nextParams, npcBloodConfig.param, value);
                    })
                  )
                : null}
            </>
          ) : profileFacet ? (
            renderFacetFilterSet(profileFacet.allLabel, categoryFilter, queryFiltered.length, categoryOptions, (value) =>
              updateParams((nextParams) => {
                setSearchParamValue(nextParams, profileFacet.param, value);
              })
            )
          ) : null
        }
        activeFilters={activeFilters}
        helperText={helperText}
        onClear={canClearFilters ? clearFilters : undefined}
      />

      {loading ? <LoadingState label="Loading db index..." /> : null}
      {error ? <ErrorState message={error} /> : null}
      {emptyLabel ? <EmptyState label={emptyLabel} /> : null}

      {!loading && !error && !emptyLabel ? (
        <section className="database-ledger-surface overflow-hidden rounded-[1.8rem]">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--database-divider)] px-5 py-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--database-dim)]">{surfaceEyebrow}</div>
              <h2 className="mt-2 text-lg font-semibold text-[var(--database-ink)]">{surfaceTitle}</h2>
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--database-dim)]">
              {filteredRowCount > visibleRows.length ? `Showing ${visibleRows.length} of ${filteredRowCount}` : `${filteredRowCount} record${filteredRowCount === 1 ? "" : "s"}`}
            </div>
          </div>
          <ul className="database-ledger">
            {isAbilitySection
              ? visibleAbilityEntries.map((entry) => <AbilityIndexRow key={entry.slug} entry={entry} />)
              : isItemSection
                ? visibleItemEntries.map((entry) => <ItemIndexRow key={entry.slug} entry={entry} />)
                : isRecipeSection
                  ? visibleRecipeEntries.map((entry) => <RecipeIndexRow key={entry.slug} entry={entry} />)
                  : isWorkstationSection
                    ? visibleWorkstationEntries.map((entry) => <WorkstationIndexRow key={entry.slug} entry={entry} />)
                    : isNpcSection
                      ? visibleNpcEntries.map((entry) => <NpcIndexRow key={entry.slug} entry={entry} />)
                      : visibleEntries.map((entry) => <DbIndexCard key={entry.slug} entry={entry} section={section} />)}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
