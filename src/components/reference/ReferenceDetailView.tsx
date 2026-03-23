import { ReferenceDetail } from "../../types/reference";
import { ReferenceBadge, ReferenceFieldGrid, ReferenceRelationList, ReferenceStatGrid, ReferenceSurface } from "./ReferenceUi";

function getMonogram(value: string): string {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("") || "RF";
}

export function ReferenceDetailView({ detail }: { detail: ReferenceDetail }) {
  const stats = detail.stats ?? [];
  const detailSections = detail.detailSections ?? [];
  const relationGroups = detail.relationGroups ?? [];
  const codeBlocks = detail.codeBlocks ?? [];
  const legacyPaths = detail.legacyPaths ?? [];

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[2rem] border border-emerald-500/20 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_32%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(2,6,23,0.96))] p-6 shadow-2xl shadow-slate-950/30">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div className="max-w-4xl">
            {detail.eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">{detail.eyebrow}</p> : null}
            {detail.summary ? <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{detail.summary}</p> : null}
            <div className="mt-5 flex flex-wrap gap-2">
              <ReferenceBadge tone="accent">{detail.kind}</ReferenceBadge>
              {(detail.badges ?? []).map((badge) => (
                <ReferenceBadge key={badge} tone="muted">
                  {badge}
                </ReferenceBadge>
              ))}
            </div>
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-[1.8rem] border border-emerald-400/20 bg-slate-950/55 text-xl font-semibold tracking-[0.2em] text-emerald-200">
            {getMonogram(detail.title)}
          </div>
        </div>
        {stats.length > 0 ? (
          <div className="mt-6">
            <ReferenceStatGrid rows={stats} />
          </div>
        ) : null}
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(20rem,0.85fr)]">
        <div className="space-y-6">
          {detailSections.map((section) => (
            <ReferenceSurface key={section.title} title={section.title}>
              <ReferenceFieldGrid rows={section.rows} />
            </ReferenceSurface>
          ))}
          {codeBlocks.map((block) => (
            <ReferenceSurface key={block.title} title={block.title}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{block.language ?? "text"}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-600">{`${block.value.split(/\r?\n/).length} lines`}</div>
              </div>
              <pre className="overflow-x-auto rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 text-xs leading-6 text-emerald-100">
                <code>{block.value}</code>
              </pre>
            </ReferenceSurface>
          ))}
        </div>
        <div className="space-y-6">
          <ReferenceSurface title="Source">
            <ReferenceFieldGrid
              rows={[
                { label: "Path", value: detail.sourcePath, monospace: true },
                { label: "Route", value: detail.path, monospace: true }
              ]}
            />
          </ReferenceSurface>
          {legacyPaths.length > 0 ? (
            <ReferenceSurface title="Legacy Paths">
              <ReferenceFieldGrid
                rows={legacyPaths.slice(0, 8).map((legacyPath) => ({
                  label: "Alias",
                  value: legacyPath,
                  monospace: true
                }))}
              />
            </ReferenceSurface>
          ) : null}
          {relationGroups.map((group) => (
            <ReferenceSurface key={group.title} title={group.title}>
              <ReferenceRelationList items={group.items} emptyLabel={group.emptyLabel} totalCount={group.totalCount} />
            </ReferenceSurface>
          ))}
        </div>
      </div>
    </div>
  );
}
