import { Link } from "react-router-dom";
import { SectionHeader } from "../components/common/States";
import { dbSections, getDbSectionLabel, getReferenceSectionLabel, referenceSections } from "../config/sections";

const referenceLinks = referenceSections.map((section) => ({ to: `/${section}`, label: getReferenceSectionLabel(section) }));
const dbLinks = dbSections.map((section) => ({ to: `/db/${section}`, label: getDbSectionLabel(section) }));

export function HomePage() {
  return (
    <div>
      <SectionHeader title="V Rising Mod Database" subtitle="Desktop-first mod database browsing with linked reference coverage for prefabs, systems, and extracted game data" />

      <section className="mb-6 overflow-hidden rounded-[2rem] border border-[rgba(223,223,214,0.08)] bg-[radial-gradient(circle_at_top_left,rgba(130,201,217,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(197,36,67,0.14),transparent_28%),linear-gradient(180deg,rgba(32,33,39,0.98),rgba(22,22,24,0.98))] p-6 shadow-[0_34px_90px_rgba(0,0,0,0.3)] lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,26rem)] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-display text-[11px] uppercase tracking-[0.4em] text-[var(--database-brass)]">V Rising Mod Database</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[var(--database-ink)] sm:text-[3.4rem]">
              Database-first browsing for spells, items, recipes, stations, and the technical graph behind them.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--database-muted)] sm:text-base">
              The app now treats the mod database as the primary working surface: player-facing names, dense browse surfaces, and linked prefab context stay together without sliding back into raw markdown dumps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/db/abilities"
                className="rounded-full border border-[rgba(130,201,217,0.26)] bg-[rgba(130,201,217,0.12)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--database-accent-soft)] transition hover:text-[var(--database-ink)]"
              >
                Open Abilities
              </Link>
              <Link
                to="/search"
                className="rounded-full border border-[rgba(223,223,214,0.1)] bg-[rgba(7,8,12,0.28)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--database-ink)] transition hover:border-[rgba(130,201,217,0.26)] hover:text-[var(--database-accent-soft)]"
              >
                Search Everything
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[rgba(223,223,214,0.08)] bg-[rgba(7,8,12,0.28)] p-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--database-dim)]">Current Focus</div>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[var(--database-muted)]">
              <p>Abilities now promote the player spell catalog first, with school and tier filters plus icon-backed detail pages.</p>
              <p>Items, recipes, and workstations now lean into denser desktop browse patterns instead of generic reference cards.</p>
              <p>Reference sections remain available as the technical layer when you need prefab, component, or system source context.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <section className="rounded-[1.7rem] border border-[rgba(223,223,214,0.08)] bg-[linear-gradient(180deg,rgba(32,33,39,0.95),rgba(22,22,24,0.96))] p-5 shadow-[0_24px_64px_rgba(0,0,0,0.22)]">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--database-accent-soft)]">Database</h2>
              <p className="mt-1 text-sm text-[var(--database-muted)]">Primary browse surfaces for gameplay records and generated relationships.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {dbLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group rounded-[1.3rem] border border-[rgba(223,223,214,0.08)] bg-[rgba(7,8,12,0.24)] p-4 transition hover:-translate-y-0.5 hover:border-[rgba(130,201,217,0.26)]"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--database-dim)]">Database</div>
                <div className="mt-2 text-base font-semibold text-[var(--database-ink)]">{link.label}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[1.7rem] border border-[rgba(223,223,214,0.08)] bg-[linear-gradient(180deg,rgba(32,33,39,0.95),rgba(22,22,24,0.96))] p-5 shadow-[0_24px_64px_rgba(0,0,0,0.22)]">
          <div className="mb-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--database-brass)]">Reference</h2>
            <p className="mt-1 text-sm text-[var(--database-muted)]">Prefab, component, system, and query coverage for source-first investigation.</p>
          </div>
          <div className="space-y-3">
            {referenceLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group block rounded-[1.3rem] border border-[rgba(223,223,214,0.08)] bg-[rgba(7,8,12,0.24)] p-4 transition hover:-translate-y-0.5 hover:border-[rgba(217,200,130,0.24)]"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--database-dim)]">Reference</div>
                <div className="mt-2 text-base font-semibold text-[var(--database-ink)]">{link.label}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
