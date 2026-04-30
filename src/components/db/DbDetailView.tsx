import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { DetailJumpItem, DetailJumpStrip } from "../common/DetailJumpStrip";
import { CollapsibleTextBlock } from "../common/CollapsibleTextBlock";
import { CopyValueButton } from "../common/CopyValueButton";
import { headingId } from "../../lib/text";
import { DbSection } from "../../config/sections";
import { DbEntityDetail, DbRelatedEntityRef } from "../../types/db";
import { DbBadge, DbDisplayRow, DbFieldGrid, DbIconAvatar, DbReferenceList, DbSurface } from "./DbCards";
import { DbFieldSpec, DbRelationSpec, dbSchemas, hasDbSchema } from "./dbSchemas";

const hiddenKeys = new Set(["slug", "title", "subtitle", "description", "summary", "categories", "tier", "tags", "prefabPath", "icon"]);
const copyKeyPattern = /(guid|path|prefab|route|source)/i;

interface ProvenanceLink {
  label: string;
  value: string;
  path?: string;
}

interface ProvenanceGroup {
  title: string;
  meta?: string;
  summary?: string;
  rows?: DbDisplayRow[];
  links?: ProvenanceLink[];
}

function humanizeKey(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatUnknownValue(value: unknown): string {
  if (value === null || value === undefined) {
    return "-";
  }

  if (Array.isArray(value)) {
    if (value.every((item) => typeof item === "string" || typeof item === "number" || typeof item === "boolean")) {
      return value.join(", ");
    }

    return JSON.stringify(value);
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  return String(value);
}

function formatNumber(value: number): string {
  if (Number.isInteger(value)) {
    return value.toString();
  }

  return value.toFixed(2).replace(/\.?0+$/, "");
}

function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return `${formatNumber(seconds)}s`;
  }

  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;
  return remaining === 0 ? `${minutes}m` : `${minutes}m ${formatNumber(remaining)}s`;
}

function formatFieldValue(value: unknown, format: DbFieldSpec["format"]): ReactNode {
  if (value === null || value === undefined) {
    return "-";
  }

  if (format === "boolean" && typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (format === "duration" && typeof value === "number") {
    return formatDuration(value);
  }

  if (format === "number" && typeof value === "number") {
    return formatNumber(value);
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return String(value);
}

function normalizeLooseToken(value: string): string {
  return value.replace(/[^a-z0-9]+/gi, "").toLowerCase();
}

function uniqueStrings(values: Array<string | undefined | null>): string[] {
  return [...new Set(values.map((value) => value?.trim()).filter((value): value is string => Boolean(value)))];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isRelatedEntityRef(value: unknown): value is DbRelatedEntityRef {
  return isRecord(value) && typeof value.title === "string" && typeof value.prefab === "string";
}

function isRelatedEntityList(value: unknown): value is DbRelatedEntityRef[] {
  return Array.isArray(value) && value.every((item) => isRelatedEntityRef(item));
}

function isDisplayRow(value: DbDisplayRow | null): value is DbDisplayRow {
  return value !== null;
}

function getCopyValue(key: string, value: unknown, format?: DbFieldSpec["format"]): string | undefined {
  if (value === null || value === undefined) {
    return undefined;
  }

  if (format === "code") {
    return String(value);
  }

  if (typeof value === "string" && copyKeyPattern.test(key)) {
    return value;
  }

  if (typeof value === "number" && /(guid|id)/i.test(key)) {
    return String(value);
  }

  return undefined;
}

function isRedundantFieldValue(detail: DbEntityDetail, spec: DbFieldSpec, value: unknown): boolean {
  if (typeof value !== "string") {
    return false;
  }

  const normalized = value.trim();
  if (!normalized) {
    return false;
  }

  if (spec.key === "localizedDisplayNameEn" && normalized === detail.title) {
    return true;
  }

  return false;
}

function isLowSignalCategory(detail: DbEntityDetail, section: DbSection, value: string): boolean {
  const normalized = normalizeLooseToken(value);
  if (!normalized) {
    return true;
  }

  const normalizedTitle = normalizeLooseToken(detail.title);
  const normalizedSubtitle = typeof detail.subtitle === "string" ? normalizeLooseToken(detail.subtitle) : "";
  const normalizedRecordKind = typeof detail.recordKind === "string" ? normalizeLooseToken(detail.recordKind) : "";

  if (normalized === normalizedTitle || normalized === normalizedSubtitle || normalized === normalizedRecordKind) {
    return true;
  }

  if (["playerusable", "char", "none", "default"].includes(normalized)) {
    return true;
  }

  if (section === "recipes" && normalized === "equippable") {
    return true;
  }

  return false;
}

function getHeroCategories(section: DbSection, detail: DbEntityDetail): string[] {
  const rawCategories = Array.isArray(detail.categories) ? detail.categories.filter((value): value is string => typeof value === "string") : [];
  const itemGroup = typeof detail.itemGroup === "string" ? detail.itemGroup : undefined;
  const itemFamily = typeof detail.itemFamily === "string" ? detail.itemFamily : undefined;
  const itemType = typeof detail.itemType === "string" ? detail.itemType : undefined;
  const recipeGroup = typeof detail.recipeGroup === "string" ? detail.recipeGroup : undefined;
  const recipeFamily = typeof detail.recipeFamily === "string" ? detail.recipeFamily : undefined;
  const catalogTier = typeof detail.catalogTier === "string" ? detail.catalogTier : undefined;
  const itemCategories = Array.isArray(detail.itemCategory) ? detail.itemCategory.filter((value): value is string => typeof value === "string") : [];
  const prioritized =
    section === "items"
      ? uniqueStrings([itemGroup, itemFamily, itemType, ...itemCategories, ...rawCategories])
      : section === "recipes"
        ? uniqueStrings([recipeGroup, recipeFamily, ...rawCategories])
        : section === "abilities"
          ? uniqueStrings([detail.school, catalogTier, ...rawCategories])
          : uniqueStrings(rawCategories);

  return prioritized.filter((value) => !isLowSignalCategory(detail, section, value));
}

function buildRowsFromSpecs(detail: DbEntityDetail, specs: DbFieldSpec[]): DbDisplayRow[] {
  const rows: DbDisplayRow[] = [];

  for (const spec of specs) {
    const value = detail[spec.key];
    if (value === null || value === undefined || value === "") {
      continue;
    }
    if (spec.omitIfFalse && value === false) {
      continue;
    }
    if (spec.omitValues?.some((candidate) => candidate === value)) {
      continue;
    }
    if (isRedundantFieldValue(detail, spec, value)) {
      continue;
    }

    rows.push({
      key: spec.key,
      label: spec.label,
      value: formatFieldValue(value, spec.format),
      monospace: spec.format === "code" ? true : undefined,
      copyValue: getCopyValue(spec.key, value, spec.format)
    });
  }

  return rows;
}

function buildRowsFromRecord(record: Record<string, unknown>): DbDisplayRow[] {
  return Object.entries(record)
    .filter(([, value]) => value !== null && value !== undefined && value !== "")
    .map(([key, value]) => ({
      key,
      label: humanizeKey(key),
      value: formatUnknownValue(value),
      monospace: typeof value === "string" && copyKeyPattern.test(key),
      copyValue: getCopyValue(key, value)
    }));
}

function buildAbilityTooltipRows(detail: DbEntityDetail): DbDisplayRow[] {
  const rows: DbDisplayRow[] = [];

  if (typeof detail.tooltipLocalizationGuid === "string" && detail.tooltipLocalizationGuid.trim()) {
    rows.push({
      key: "tooltipLocalizationGuid",
      label: "Localization GUID",
      value: detail.tooltipLocalizationGuid,
      monospace: true,
      copyValue: detail.tooltipLocalizationGuid
    });
  }

  if (typeof detail.tooltipEntryId === "string" && detail.tooltipEntryId.trim()) {
    rows.push({
      key: "tooltipEntryId",
      label: "Entry ID",
      value: detail.tooltipEntryId,
      monospace: true,
      copyValue: detail.tooltipEntryId
    });
  }

  if (typeof detail.tooltipSourceKind === "string" && detail.tooltipSourceKind.trim()) {
    rows.push({
      key: "tooltipSourceKind",
      label: "Tooltip Source",
      value: detail.tooltipSourceKind
    });
  }

  if (typeof detail.tooltipSourceRef === "string" && detail.tooltipSourceRef.trim()) {
    rows.push({
      key: "tooltipSourceRef",
      label: "Tooltip Source Ref",
      value: detail.tooltipSourceRef,
      monospace: true,
      copyValue: detail.tooltipSourceRef
    });
  }

  return rows;
}

function getHeroBodyCopy(section: DbSection, detail: DbEntityDetail): { key?: string; text?: string } {
  const candidateKeys =
    section === "abilities"
      ? ["tooltipTextEn", "description", "summary"]
      : section === "items"
        ? ["localizedDescriptionTextEn", "description", "summary"]
        : section === "recipes"
          ? ["description", "summary"]
          : ["description", "localizedSummaryEn", "localizedDescriptionTextEn", "summary"];

  for (const key of candidateKeys) {
    const value = detail[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return { key, text: value.trim() };
    }
  }

  return {};
}

function renderAbilityTooltipSurface(section: DbSection, detail: DbEntityDetail) {
  if (section !== "abilities") {
    return null;
  }

  const tooltipText = typeof detail.tooltipTextEn === "string" && detail.tooltipTextEn.trim() ? detail.tooltipTextEn.trim() : undefined;
  const tooltipRows = buildAbilityTooltipRows(detail);
  if (!tooltipText && tooltipRows.length === 0) {
    return null;
  }

  return (
    <DbSurface title="Tooltip Capture" anchorId="tooltip-capture" meta={typeof detail.tooltipSourceKind === "string" ? detail.tooltipSourceKind : undefined}>
      <div className="space-y-4">
        {tooltipText ? (
          <div className="database-panel-subtle rounded-[1.15rem] p-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--database-dim)]">Player-facing copy</div>
            <p className="mt-3 text-sm leading-6 text-[var(--database-ink)]">{tooltipText}</p>
          </div>
        ) : null}
        {tooltipRows.length > 0 ? <DbFieldGrid rows={tooltipRows} /> : null}
      </div>
    </DbSurface>
  );
}

function getRelatedEntityTitle(detail: DbEntityDetail, key: string): string | undefined {
  const value = detail[key];
  if (!isRelatedEntityList(value) || value.length === 0) {
    return undefined;
  }

  return value[0]?.title;
}

function summarizeRelatedEntityTitles(detail: DbEntityDetail, key: string, limit = 3): string | undefined {
  const value = detail[key];
  if (!isRelatedEntityList(value) || value.length === 0) {
    return undefined;
  }

  const titles = value.slice(0, limit).map((item) => item.title);
  const remaining = value.length - titles.length;
  return remaining > 0 ? `${titles.join(", ")} and ${remaining} more` : titles.join(", ");
}

function summarizeRelatedEntityRoutes(items: DbRelatedEntityRef[], limit = 3): ProvenanceLink[] {
  return items.slice(0, limit).map((item) => ({
    label: item.title,
    value: item.path ?? item.prefab,
    path: item.path
  }));
}

function summarizeRelationCount(detail: DbEntityDetail, relation: DbRelationSpec): string | undefined {
  const value = detail[relation.key];
  if (!isRelatedEntityList(value) || value.length === 0) {
    return undefined;
  }

  const titles = summarizeRelatedEntityTitles(detail, relation.key);
  return titles ? `${formatNumber(value.length)} linked: ${titles}` : `${formatNumber(value.length)} linked`;
}

function buildAbilityTiming(detail: DbEntityDetail): string | undefined {
  const parts = [
    typeof detail.castTime === "number" ? `Cast ${formatDuration(detail.castTime)}` : undefined,
    typeof detail.cooldown === "number" ? `Cooldown ${formatDuration(detail.cooldown)}` : undefined
  ].filter((value): value is string => Boolean(value));

  return parts.length > 0 ? parts.join(" • ") : undefined;
}

function buildAbilityUseCue(detail: DbEntityDetail): string | undefined {
  if (typeof detail.prefab === "string" && detail.prefab.startsWith("AB_ApplyWeaponCoating_")) {
    return "Triggered by a consumable coating and applied to your current weapon.";
  }

  if (typeof detail.target === "string" && detail.target !== "Owner") {
    return `Targets ${humanizeKey(detail.target).toLowerCase()}.`;
  }

  if (detail.recordKind === "Player Usable") {
    return "Player-usable ability surfaced from the catalog and runtime lanes.";
  }

  if (detail.recordKind === "NPC") {
    return "Encounter-driven ability preserved for combat parity and reference.";
  }

  if (typeof detail.behaviorType === "string" && detail.behaviorType !== "None") {
    return `${detail.behaviorType} behavior captured from runtime data.`;
  }

  return undefined;
}

function buildNpcDropContext(detail: DbEntityDetail): string | undefined {
  const essenceTitle = getRelatedEntityTitle(detail, "essenceItemPrefabs");
  const essenceGain = typeof detail.essenceGain === "number" ? detail.essenceGain : undefined;

  if (essenceTitle && essenceGain !== undefined) {
    return `Drops ${essenceTitle} (${formatNumber(essenceGain)} essence).`;
  }

  if (essenceTitle) {
    return `Drops ${essenceTitle}.`;
  }

  if (essenceGain !== undefined) {
    return `Yields ${formatNumber(essenceGain)} essence on death.`;
  }

  return undefined;
}

function buildWorkstationBonusContext(detail: DbEntityDetail): string | undefined {
  const floor = typeof detail.matchingFloorType === "string" ? detail.matchingFloorType : undefined;
  const servant = typeof detail.bonusServantType === "string" && detail.bonusServantType !== "None" ? detail.bonusServantType : undefined;

  if (floor && servant) {
    return `Benefits from ${floor} rooms and ${servant.toLowerCase()} servant support.`;
  }

  if (floor) {
    return `Benefits from ${floor} room bonuses.`;
  }

  if (servant) {
    return `Pairs with ${servant.toLowerCase()} servants.`;
  }

  return undefined;
}

function buildWorkstationRecipeContext(detail: DbEntityDetail): string | undefined {
  const outputSummary = summarizeRelatedEntityTitles(detail, "workstationOutputs");
  const recipeCount = typeof detail.workstationRecipeCount === "number" ? detail.workstationRecipeCount : undefined;

  if (outputSummary && recipeCount !== undefined) {
    return `Produces ${outputSummary} through ${formatNumber(recipeCount)} buffer-backed station recipes.`;
  }

  if (detail.workstationRole === "Vendor" && typeof detail.merchantInventory === "string") {
    return `Browse this vendor for ${detail.merchantInventory.toLowerCase()} stock.`;
  }

  if (detail.stationKind === "Refinement Station") {
    return "Hosts refinement recipes and material-processing chains.";
  }

  if (detail.workstationRole === "Research") {
    return "Supports research progression and unlock browsing.";
  }

  if (detail.workstationRole) {
    return `${detail.workstationRole} station preserved for player browse and source traceability.`;
  }

  return undefined;
}

function buildSupplementalPlayerRows(section: DbSection, detail: DbEntityDetail): DbDisplayRow[] {
  if (section === "abilities") {
    const categories = Array.isArray(detail.categories) ? detail.categories.filter((value): value is string => typeof value === "string") : [];
    const abilityForm = categories.find((category) => ["Spell", "Veil", "Weapon Skill", "Consumable", "Fishing", "Companion"].includes(category));
    const timing = buildAbilityTiming(detail);
    const useCue = buildAbilityUseCue(detail);
    const rows: Array<DbDisplayRow | null> = [
      typeof detail.school === "string" ? { key: "player-school", label: "Spell School", value: detail.school } : null,
      abilityForm ? { key: "player-form", label: "Ability Form", value: abilityForm } : null,
      timing ? { key: "player-timing", label: "Timing", value: timing } : null,
      useCue ? { key: "player-use-cue", label: "Use Cue", value: useCue } : null
    ];
    return rows.filter(isDisplayRow);
  }

  if (section === "npcs") {
    const dropContext = buildNpcDropContext(detail);
    const servantTitle = getRelatedEntityTitle(detail, "servantPrefabs");
    const rows: Array<DbDisplayRow | null> = [
      {
        key: "npc-encounter",
        label: "Encounter",
        value: typeof detail.prefab === "string" && detail.prefab.includes("VBlood") ? "V Blood encounter preserved for boss review." : "NPC encounter preserved for world and combat reference."
      },
      dropContext ? { key: "npc-drops", label: "Drop Context", value: dropContext } : null,
      servantTitle ? { key: "npc-servant", label: "Servant Context", value: `Convertible into ${servantTitle}.` } : null
    ];
    return rows.filter(isDisplayRow);
  }

  if (section === "workstations") {
    const bonusContext = buildWorkstationBonusContext(detail);
    const recipeContext = buildWorkstationRecipeContext(detail);
    const rows: Array<DbDisplayRow | null> = [
      typeof detail.workstationRole === "string" ? { key: "workstation-role", label: "Role", value: detail.workstationRole } : null,
      bonusContext ? { key: "workstation-bonus", label: "Room Bonus", value: bonusContext } : null,
      recipeContext ? { key: "workstation-recipes", label: "Recipe Context", value: recipeContext } : null
    ];
    return rows.filter(isDisplayRow);
  }

  return [];
}

function buildGenericRows(detail: DbEntityDetail, usedKeys: Set<string>): { simpleRows: DbDisplayRow[]; complexRows: Array<[string, unknown]> } {
  const entries = Object.entries(detail).filter(([key]) => !usedKeys.has(key));
  const simpleRows: DbDisplayRow[] = [];
  const complexRows: Array<[string, unknown]> = [];

  for (const [key, value] of entries) {
    if (value === null || value === undefined) {
      continue;
    }

    if (Array.isArray(value) && value.every((item) => typeof item !== "object")) {
      simpleRows.push({ label: humanizeKey(key), value: formatUnknownValue(value), copyValue: getCopyValue(key, value) });
      continue;
    }

    if (!Array.isArray(value) && typeof value !== "object") {
      simpleRows.push({
        label: humanizeKey(key),
        value: formatUnknownValue(value),
        monospace: typeof value === "string" && copyKeyPattern.test(key),
        copyValue: getCopyValue(key, value)
      });
      continue;
    }

    complexRows.push([key, value]);
  }

  return { simpleRows, complexRows };
}

function renderRawBlocks(rows: Array<[string, unknown]>) {
  if (rows.length === 0) {
    return null;
  }

  return (
    <DbSurface title="Developer Raw Blocks" anchorId="raw-blocks" meta={`${rows.length} blocks`}>
      <div className="space-y-5">
        {rows.map(([key, value]) => (
          <CollapsibleTextBlock
            key={key}
            title={`${humanizeKey(key)} (Raw/source content)`}
            value={JSON.stringify(value, null, 2)}
            language="json"
            copyValue={JSON.stringify(value, null, 2)}
          />
        ))}
      </div>
    </DbSurface>
  );
}

function buildRouteProvenanceGroup(section: DbSection, detail: DbEntityDetail): ProvenanceGroup {
  const route = `/db/${section}/${detail.slug}`;
  const rows: DbDisplayRow[] = [
    {
      key: "route",
      label: "DB Route",
      value: route,
      monospace: true,
      copyValue: route
    }
  ];

  if (typeof detail.prefabPath === "string" && detail.prefabPath.trim()) {
    rows.push({
      key: "prefabPath",
      label: "Prefab Reference",
      value: (
        <Link to={detail.prefabPath} className="break-all font-mono text-xs text-[var(--database-accent-soft)] underline-offset-4 hover:underline">
          {detail.prefabPath}
        </Link>
      ),
      copyValue: detail.prefabPath
    });
  }

  if (typeof detail.sourcePath === "string" && detail.sourcePath.trim()) {
    rows.push({
      key: "sourcePath",
      label: "Source Markdown",
      value: detail.sourcePath,
      monospace: true,
      copyValue: detail.sourcePath
    });
  }

  return {
    title: "Routes",
    meta: `${formatNumber(rows.length)} paths`,
    summary: "Canonical DB, reference, and source paths for this record.",
    rows
  };
}

function buildLinkedRecordProvenanceGroup(detail: DbEntityDetail, relationSections: DbRelationSpec[]): ProvenanceGroup | null {
  const rows: DbDisplayRow[] = relationSections.flatMap((relation) => {
    const summary = summarizeRelationCount(detail, relation);
    return summary ? [{ key: relation.key, label: relation.title, value: summary }] : [];
  });

  const links = relationSections.flatMap((relation) => {
    const value = detail[relation.key];
    return isRelatedEntityList(value) ? summarizeRelatedEntityRoutes(value, 2) : [];
  });

  if (rows.length === 0 && links.length === 0) {
    return null;
  }

  const linkedCount = relationSections.reduce((count, relation) => {
    const value = detail[relation.key];
    return count + (isRelatedEntityList(value) ? value.length : 0);
  }, 0);

  return {
    title: "Linked Records",
    meta: `${formatNumber(linkedCount)} links`,
    summary: "Join targets that explain where this record connects next.",
    rows,
    links
  };
}

function getSourcePairLabel(prefix: string): string {
  return prefix ? humanizeKey(prefix) : "Record";
}

function buildRawOriginProvenanceGroup(detail: DbEntityDetail): ProvenanceGroup | null {
  const originMap = new Map<string, { sourceKind: string; sourceRef: string; labels: string[] }>();

  for (const [key, value] of Object.entries(detail)) {
    if (!key.endsWith("SourceKind") || typeof value !== "string" || !value.trim()) {
      continue;
    }

    const prefix = key.slice(0, -"SourceKind".length);
    const sourceRef = detail[`${prefix}SourceRef`];
    if (typeof sourceRef !== "string" || !sourceRef.trim()) {
      continue;
    }

    const mapKey = `${value}\n${sourceRef}`;
    const current = originMap.get(mapKey) ?? { sourceKind: value, sourceRef, labels: [] };
    current.labels.push(getSourcePairLabel(prefix));
    originMap.set(mapKey, current);
  }

  const rows = [...originMap.values()].map((origin) => ({
    key: `${origin.sourceKind}:${origin.sourceRef}`,
    label: origin.sourceKind,
    value: (
      <div className="space-y-1">
        <div>{uniqueStrings(origin.labels).join(", ")}</div>
        <div className="break-all font-mono text-xs text-[var(--database-accent-soft)]">{origin.sourceRef}</div>
      </div>
    ),
    copyValue: origin.sourceRef
  }));

  if (rows.length === 0) {
    return null;
  }

  return {
    title: "Raw Origins",
    meta: `${formatNumber(rows.length)} clusters`,
    summary: "Source-kind and source-ref pairs grouped by the fields they support.",
    rows
  };
}

function buildRecipeJoinProvenanceGroup(detail: DbEntityDetail): ProvenanceGroup | null {
  const outputCount = isRelatedEntityList(detail.outputs) ? detail.outputs.length : undefined;
  const requirementCount = isRelatedEntityList(detail.requirements) ? detail.requirements.length : undefined;
  const repairCostCount = isRelatedEntityList(detail.repairCosts) ? detail.repairCosts.length : undefined;
  const rows: Array<DbDisplayRow | null> = [
    typeof detail.normalizedOutputs === "string" ? { key: "normalizedOutputs", label: "Outputs", value: detail.normalizedOutputs } : null,
    typeof detail.normalizedRequirements === "string" ? { key: "normalizedRequirements", label: "Requirements", value: detail.normalizedRequirements } : null,
    typeof detail.normalizedRepairCosts === "string" ? { key: "normalizedRepairCosts", label: "Repair Costs", value: detail.normalizedRepairCosts } : null,
    outputCount !== undefined ? { key: "linkedOutputs", label: "Linked Outputs", value: formatNumber(outputCount) } : null,
    requirementCount !== undefined ? { key: "linkedRequirements", label: "Linked Ingredients", value: formatNumber(requirementCount) } : null,
    repairCostCount !== undefined ? { key: "linkedRepairCosts", label: "Linked Repair Costs", value: formatNumber(repairCostCount) } : null,
    typeof detail.normalizedSourceKind === "string" ? { key: "normalizedSourceKind", label: "Join Source", value: detail.normalizedSourceKind } : null
  ];

  const visibleRows = rows.filter(isDisplayRow);
  if (visibleRows.length === 0) {
    return null;
  }

  return {
    title: "Recipe Joins",
    meta: "normalized",
    summary: "Normalized recipe edges and linked item counts.",
    rows: visibleRows
  };
}

function buildWorkstationJoinProvenanceGroup(detail: DbEntityDetail): ProvenanceGroup | null {
  const recipeCount = typeof detail.workstationRecipeCount === "number" ? detail.workstationRecipeCount : undefined;
  const outputCount = typeof detail.workstationOutputCount === "number" ? detail.workstationOutputCount : undefined;
  const rows: Array<DbDisplayRow | null> = [
    recipeCount !== undefined ? { key: "workstationRecipeCount", label: "Station Recipes", value: `${formatNumber(recipeCount)} linked` } : null,
    outputCount !== undefined ? { key: "workstationOutputCount", label: "Recipe Outputs", value: `${formatNumber(outputCount)} linked` } : null,
    typeof detail.workstationRecipeSourceKind === "string" ? { key: "workstationRecipeSourceKind", label: "Join Source", value: detail.workstationRecipeSourceKind } : null,
    typeof detail.workstationRecipeSourceRef === "string"
      ? {
          key: "workstationRecipeSourceRef",
          label: "Join Source Ref",
          value: detail.workstationRecipeSourceRef,
          monospace: true,
          copyValue: detail.workstationRecipeSourceRef
        }
      : null
  ];

  const visibleRows = rows.filter(isDisplayRow);
  if (visibleRows.length === 0) {
    return null;
  }

  return {
    title: "Station Joins",
    meta: "buffer-backed",
    summary: "Buffer-backed recipe and output joins for this workstation.",
    rows: visibleRows
  };
}

function buildProvenanceGroups(section: DbSection, detail: DbEntityDetail, relationSections: DbRelationSpec[]): ProvenanceGroup[] {
  const groups: Array<ProvenanceGroup | null> = [
    buildRouteProvenanceGroup(section, detail),
    section === "recipes" ? buildRecipeJoinProvenanceGroup(detail) : null,
    section === "workstations" ? buildWorkstationJoinProvenanceGroup(detail) : null,
    buildLinkedRecordProvenanceGroup(detail, relationSections),
    buildRawOriginProvenanceGroup(detail)
  ];

  return groups.filter((group): group is ProvenanceGroup => group !== null);
}

function renderProvenanceGroup(group: ProvenanceGroup) {
  return (
    <article className="database-panel-subtle rounded-[1.15rem] p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--database-muted)]">{group.title}</h3>
        {group.meta ? <div className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-[var(--database-dim)]">{group.meta}</div> : null}
      </div>
      {group.summary ? <p className="mt-2 text-xs leading-5 text-[var(--database-dim)]">{group.summary}</p> : null}

      {group.rows && group.rows.length > 0 ? (
        <dl className="database-summary-list mt-4">
          {group.rows.map((row) => (
            <div key={row.key ?? row.label} className="py-2.5 first:pt-0 last:pb-0">
              <div className="flex items-start justify-between gap-3">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--database-dim)]">{row.label}</dt>
                {row.copyValue ? <CopyValueButton value={row.copyValue} className="shrink-0" /> : null}
              </div>
              <dd className={row.monospace ? "mt-1.5 break-all font-mono text-xs text-[var(--database-accent-soft)]" : "mt-1.5 text-sm leading-5 text-[var(--database-ink)]"}>
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {group.links && group.links.length > 0 ? (
        <div className="mt-4 space-y-2">
          {group.links.map((link) =>
            link.path ? (
              <Link
                key={`${link.label}:${link.value}`}
                to={link.path}
                className="database-list-surface block rounded-[0.85rem] px-3 py-2 transition hover:bg-[var(--tool-hover)]"
              >
                <span className="block text-sm font-medium text-[var(--database-ink)]">{link.label}</span>
                <span className="mt-1 block break-all font-mono text-[11px] text-[var(--database-dim)]">{link.value}</span>
              </Link>
            ) : (
              <div key={`${link.label}:${link.value}`} className="database-list-surface rounded-[0.85rem] px-3 py-2">
                <span className="block text-sm font-medium text-[var(--database-ink)]">{link.label}</span>
                <span className="mt-1 block break-all font-mono text-[11px] text-[var(--database-dim)]">{link.value}</span>
              </div>
            )
          )}
        </div>
      ) : null}
    </article>
  );
}

function renderProvenanceGroups(groups: ProvenanceGroup[]) {
  if (groups.length === 0) {
    return null;
  }

  return <div className="grid gap-3 xl:grid-cols-2">{groups.map((group) => <div key={group.title}>{renderProvenanceGroup(group)}</div>)}</div>;
}

function renderSummaryRows(rows: DbDisplayRow[]) {
  if (rows.length === 0) {
    return null;
  }

  return (
    <dl className="database-summary-list mt-5">
      {rows.map((row) => (
        <div key={row.label} className="space-y-1.5 py-2.5 first:pt-0 last:pb-0">
          <div className="flex items-start justify-between gap-3">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--database-dim)]">{row.label}</dt>
            {row.copyValue ? <CopyValueButton value={row.copyValue} className="shrink-0" /> : null}
          </div>
          <dd className={row.monospace ? "break-all font-mono text-xs text-[var(--database-accent-soft)]" : "text-sm leading-5 text-[var(--database-ink)]"}>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function renderInlineFacts(rows: DbDisplayRow[]) {
  if (rows.length === 0) {
    return null;
  }

  return (
    <dl className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
      {rows.map((row) => (
        <div key={row.label} className="database-inline-fact rounded-[1rem] px-3 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--database-dim)]">{row.label}</dt>
          <dd className={row.monospace ? "mt-1.5 break-all font-mono text-xs text-[var(--database-accent-soft)]" : "mt-1.5 text-sm leading-5 text-[var(--database-ink)]"}>
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function renderSourceActions(detail: DbEntityDetail) {
  const hasActions =
    typeof detail.prefab === "string" ||
    (detail.guid !== null && detail.guid !== undefined) ||
    typeof detail.sourcePath === "string" ||
    (detail.prefabPath && typeof detail.prefabPath === "string");

  if (!hasActions) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {typeof detail.prefab === "string" ? <CopyValueButton value={detail.prefab} label="Copy prefab" /> : null}
      {detail.guid !== null && detail.guid !== undefined ? <CopyValueButton value={String(detail.guid)} label="Copy GUID" /> : null}
      {typeof detail.sourcePath === "string" ? <CopyValueButton value={detail.sourcePath} label="Copy source" /> : null}
      {detail.prefabPath && typeof detail.prefabPath === "string" ? (
        <Link
          to={detail.prefabPath}
          className="database-action-quiet inline-flex rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]"
        >
          Open Prefab Reference
        </Link>
      ) : null}
    </div>
  );
}

function renderHero(section: DbSection, detail: DbEntityDetail, factRows: DbDisplayRow[]) {
  const categories = getHeroCategories(section, detail);
  const eyebrow = hasDbSchema(section) ? dbSchemas[section].eyebrow : `${humanizeKey(section)} Archive`;
  const subtitle = typeof detail.subtitle === "string" ? detail.subtitle : typeof detail.prefab === "string" ? detail.prefab : undefined;
  const { text: bodyCopy } = getHeroBodyCopy(section, detail);
  const detailIcon = typeof detail.icon === "string" ? detail.icon : undefined;
  const inlineFactRows = factRows.slice(0, 4);
  const summaryFactRows = factRows.slice(4);
  const showSummaryRail = summaryFactRows.length > 0;
  const visibleCategories = categories.slice(0, 3);
  const extraCategoryCount = Math.max(0, categories.length - visibleCategories.length);

  return (
    <section className="database-panel overflow-hidden rounded-[1.35rem] p-5 sm:p-6">
      <div className={`grid gap-5 ${showSummaryRail ? "xl:grid-cols-[minmax(0,1fr)_minmax(17rem,19rem)] xl:items-start" : ""}`}>
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--database-ember)]">{eyebrow}</p>
              <h1 className="mt-3 text-[2rem] font-semibold leading-tight text-[var(--database-ink)] sm:text-[2.45rem]">{detail.title}</h1>
              {subtitle ? <p className="mt-2 break-all font-mono text-[11px] text-[var(--database-dim)] sm:text-xs">{subtitle}</p> : null}
              {bodyCopy ? <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--database-muted)] sm:text-[0.98rem]">{String(bodyCopy)}</p> : null}
            </div>
            {detailIcon && !showSummaryRail ? (
              <DbIconAvatar
                title={detail.title}
                icon={detailIcon}
                className="hidden h-16 w-16 rounded-[1.15rem] xl:flex"
                monogramClassName="text-base"
              />
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {detail.tier ? <DbBadge tone="accent">{detail.tier}</DbBadge> : null}
            {visibleCategories.map((category) => (
              <DbBadge key={category} tone="muted">
                {category}
              </DbBadge>
            ))}
            {extraCategoryCount > 0 ? <DbBadge tone="muted">{`+${extraCategoryCount}`}</DbBadge> : null}
          </div>

          {renderInlineFacts(inlineFactRows)}
        </div>
        {showSummaryRail ? (
          <aside className="database-summary-capsule rounded-[1.35rem] p-4 sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--database-dim)]">Quick Facts</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--database-accent-soft)]">{humanizeKey(section)}</div>
              </div>
              {detailIcon ? (
                <DbIconAvatar
                  title={detail.title}
                  icon={detailIcon}
                  className="h-14 w-14 rounded-[1rem]"
                  monogramClassName="text-sm"
                />
              ) : null}
            </div>

            {renderSummaryRows(summaryFactRows)}
          </aside>
        ) : null}
      </div>
    </section>
  );
}

function buildSchemaJumpItems(
  schemaRelationSections: Array<{ key: string; title: string }>,
  detail: DbEntityDetail,
  playerRows: DbDisplayRow[],
  hasTooltipSurface: boolean,
  detailRows: DbDisplayRow[],
  usageRows: DbDisplayRow[],
  genericFieldRows: DbDisplayRow[],
  genericSections: Array<{ title: string; rows: Record<string, unknown> }>,
  sourceRows: DbDisplayRow[],
  additionalRows: DbDisplayRow[],
  complexRows: Array<[string, unknown]>
): DetailJumpItem[] {
  const items: DetailJumpItem[] = [];

  if (playerRows.length > 0) {
    items.push({ id: "player-context", label: "Player Context" });
  }

  if (hasTooltipSurface) {
    items.push({ id: "tooltip-capture", label: "Tooltip Capture" });
  }

  if (usageRows.length > 0) {
    items.push({ id: "usage-links", label: "Usage & Links" });
  }

  for (const relation of schemaRelationSections) {
    const value = detail[relation.key];
    if (isRelatedEntityList(value) && value.length > 0) {
      items.push({ id: `relation-${headingId(relation.title)}`, label: relation.title, meta: `${value.length}` });
    }
  }

  if (detailRows.length > 0) {
    items.push({ id: "record-details", label: "Record Details" });
  }
  if (genericFieldRows.length > 0) {
    items.push({ id: "mapped-fields", label: "Developer Mapped Fields" });
  }
  for (const section of genericSections) {
    items.push({ id: `section-${headingId(section.title)}`, label: section.title });
  }
  if (sourceRows.length > 0) {
    items.push({ id: "source-provenance", label: "Developer Source" });
  }
  if (additionalRows.length > 0) {
    items.push({ id: "additional-fields", label: "Developer Fields" });
  }
  if (complexRows.length > 0) {
    items.push({ id: "raw-blocks", label: "Developer Raw", meta: `${complexRows.length}` });
  }

  return items;
}

function renderSchemaDetail(section: DbSection, detail: DbEntityDetail) {
  if (!hasDbSchema(section)) {
    return null;
  }

  const schema = dbSchemas[section];
  const factRows = buildRowsFromSpecs(detail, schema.factFields);
  const { key: heroBodyKey } = getHeroBodyCopy(section, detail);
  const playerRows = [...buildSupplementalPlayerRows(section, detail), ...buildRowsFromSpecs(detail, schema.playerFields ?? []).filter((row) => row.key !== heroBodyKey)];
  const abilityTooltipRows = section === "abilities" ? buildAbilityTooltipRows(detail) : [];
  const hasAbilityTooltipSurface =
    section === "abilities" &&
    (abilityTooltipRows.length > 0 || (typeof detail.tooltipTextEn === "string" && detail.tooltipTextEn.trim().length > 0));
  const detailRows = buildRowsFromSpecs(detail, schema.detailFields ?? []).filter((row) => row.key !== heroBodyKey);
  const usageRows = buildRowsFromSpecs(detail, schema.usageFields ?? []);
  const provenanceRows = buildRowsFromSpecs(detail, schema.provenanceFields ?? []);
  const technicalRows = buildRowsFromSpecs(detail, schema.technicalFields);
  const usedKeys = new Set<string>([
    ...hiddenKeys,
    ...schema.factFields.map((field) => field.key),
    ...(schema.detailFields ?? []).map((field) => field.key),
    ...(schema.playerFields ?? []).map((field) => field.key),
    ...(schema.usageFields ?? []).map((field) => field.key),
    ...(schema.provenanceFields ?? []).map((field) => field.key),
    ...schema.technicalFields.map((field) => field.key),
    ...schema.relationSections.map((relation) => relation.key),
    "fields",
    "sections"
  ]);
  const genericRows = buildGenericRows(detail, usedKeys);
  const genericFieldRows = detail.fields && isRecord(detail.fields) ? buildRowsFromRecord(detail.fields) : [];
  const genericSections = Array.isArray(detail.sections) ? detail.sections.filter((entry) => entry && typeof entry.title === "string" && isRecord(entry.rows)) : [];
  const sourceRows = [...provenanceRows, ...technicalRows];
  const provenanceGroups = buildProvenanceGroups(section, detail, schema.relationSections);
  const jumpItems = buildSchemaJumpItems(
    schema.relationSections,
    detail,
    playerRows,
    hasAbilityTooltipSurface,
    detailRows,
    usageRows,
    genericFieldRows,
    genericSections,
    sourceRows,
    genericRows.simpleRows,
    genericRows.complexRows
  );

  return (
    <div className="space-y-5">
      {renderHero(section, detail, factRows)}
      <DetailJumpStrip items={jumpItems} />

      <div className="space-y-5">
        {playerRows.length > 0 ? (
          <DbSurface title={schema.playerSectionTitle ?? "Player Context"} anchorId="player-context">
            <DbFieldGrid rows={playerRows} />
          </DbSurface>
        ) : null}

        {renderAbilityTooltipSurface(section, detail)}

        {usageRows.length > 0 ? (
          <DbSurface title={schema.usageSectionTitle ?? "Usage & Links"} anchorId="usage-links">
            <DbFieldGrid rows={usageRows} />
          </DbSurface>
        ) : null}

        {schema.relationSections.map((relation) => {
          const value = detail[relation.key];
          if (!isRelatedEntityList(value) || value.length === 0) {
            return null;
          }

          return (
            <DbSurface key={relation.key} title={relation.title} anchorId={`relation-${headingId(relation.title)}`} meta={`${value.length} linked`}>
              <DbReferenceList items={value} emptyLabel={relation.emptyLabel} />
            </DbSurface>
          );
        })}

        {detailRows.length > 0 ? (
          <DbSurface title={schema.detailSectionTitle ?? "Record Details"} anchorId="record-details">
            <DbFieldGrid rows={detailRows} />
          </DbSurface>
        ) : null}

        {genericFieldRows.length > 0 ? (
          <DbSurface title="Developer Mapped Fields" anchorId="mapped-fields">
            <DbFieldGrid rows={genericFieldRows} />
          </DbSurface>
        ) : null}

        {genericSections.map((entry) => (
          <DbSurface key={entry.title} title={entry.title} anchorId={`section-${headingId(entry.title)}`}>
            <DbFieldGrid rows={buildRowsFromRecord(entry.rows)} />
          </DbSurface>
        ))}

        {sourceRows.length > 0 || provenanceGroups.length > 0 ? (
          <DbSurface title={schema.provenanceSectionTitle ?? "Developer Source & Provenance"} anchorId="source-provenance" className="database-ledger-surface-secondary">
            <div className="space-y-5">
              {renderSourceActions(detail)}
              {renderProvenanceGroups(provenanceGroups)}
              {sourceRows.length > 0 ? <DbFieldGrid rows={sourceRows} /> : null}
            </div>
          </DbSurface>
        ) : null}

        {genericRows.simpleRows.length > 0 ? (
          <DbSurface title="Developer Additional Fields" anchorId="additional-fields">
            <DbFieldGrid rows={genericRows.simpleRows} />
          </DbSurface>
        ) : null}

        {renderRawBlocks(genericRows.complexRows)}
      </div>
    </div>
  );
}

function renderGenericDetail(detail: DbEntityDetail, section: DbSection) {
  const fieldsRows = detail.fields && isRecord(detail.fields) ? buildRowsFromRecord(detail.fields) : [];
  const sections = Array.isArray(detail.sections) ? detail.sections.filter((entry) => entry && typeof entry.title === "string" && isRecord(entry.rows)) : [];
  const usedKeys = new Set<string>([...hiddenKeys, "fields", "sections"]);
  const genericRows = buildGenericRows(detail, usedKeys);
  const jumpItems: DetailJumpItem[] = [];

  if (fieldsRows.length > 0) {
    jumpItems.push({ id: "details", label: "Developer Fields" });
  }
  for (const entry of sections) {
    jumpItems.push({ id: `section-${headingId(entry.title)}`, label: entry.title });
  }
  if (genericRows.simpleRows.length > 0) {
    jumpItems.push({ id: "additional-fields", label: "Developer Additional Fields" });
  }
  if (genericRows.complexRows.length > 0) {
    jumpItems.push({ id: "raw-blocks", label: "Developer Raw", meta: `${genericRows.complexRows.length}` });
  }

  return (
    <div className="space-y-5">
      {renderHero(section, detail, [])}
      <DetailJumpStrip items={jumpItems} />
      {fieldsRows.length > 0 ? (
        <DbSurface title="Developer Fields" anchorId="details">
          <DbFieldGrid rows={fieldsRows} />
        </DbSurface>
      ) : null}
      {sections.map((entry) => (
        <DbSurface key={entry.title} title={entry.title} anchorId={`section-${headingId(entry.title)}`}>
          <DbFieldGrid rows={buildRowsFromRecord(entry.rows)} />
        </DbSurface>
      ))}
      {genericRows.simpleRows.length > 0 ? (
        <DbSurface title="Developer Additional Fields" anchorId="additional-fields">
          <DbFieldGrid rows={genericRows.simpleRows} />
        </DbSurface>
      ) : null}
      {renderRawBlocks(genericRows.complexRows)}
    </div>
  );
}

export function DbDetailView({ detail, section }: { detail: DbEntityDetail; section: DbSection }) {
  return hasDbSchema(section) ? renderSchemaDetail(section, detail) : renderGenericDetail(detail, section);
}
