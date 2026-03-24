import { Link } from "react-router-dom";
import { SectionHeader } from "../components/common/States";
import { dbSections, getDbSectionLabel, getReferenceSectionLabel, referenceSections } from "../config/sections";
import brandMark from "../../static/images/mod_logo_red_purple.png";

const referenceLinks = referenceSections.map((section) => ({ to: `/${section}`, label: getReferenceSectionLabel(section) }));
const dbLinks = dbSections.map((section) => ({ to: `/db/${section}`, label: getDbSectionLabel(section) }));

export function HomePage() {
  return (
    <div>
      <SectionHeader title="V Rising Mod Database" subtitle="Desktop-first mod database browsing with linked reference coverage for prefabs, systems, and extracted game data" />

      <section className="database-hero-panel mb-6 overflow-hidden rounded-[2rem] p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,24rem)] lg:items-center">
          <div className="max-w-4xl">
            <p className="font-display text-[11px] uppercase tracking-[0.4em] text-[var(--database-ember)]">Community-Tuned Database</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--database-ink)] sm:text-[3.25rem]">
              Dense browse surfaces for V Rising modding, tuned to feel at home beside the community wiki.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--database-muted)] sm:text-base">
              The database stays the primary working surface: player-facing names, icon-backed records, and technical prefab context sit together in a darker, calmer shell that feels closer to the rest of the community’s V Rising tooling.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/db/abilities" className="database-button database-button-brand rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]">
                Open Abilities
              </Link>
              <Link to="/search" className="database-button rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]">
                Search Everything
              </Link>
            </div>
          </div>

          <div className="database-panel-subtle rounded-[1.6rem] p-5">
            <div className="flex items-center gap-4">
              <div className="database-avatar-well flex h-20 w-20 items-center justify-center rounded-[1.4rem] p-2">
                <img src={brandMark} alt="" className="h-14 w-14 object-contain" />
              </div>
              <div>
                <div className="font-display text-[11px] uppercase tracking-[0.28em] text-[var(--database-accent-soft)]">V Rising Mod Database</div>
                <p className="mt-2 text-sm leading-6 text-[var(--database-muted)]">
                  Browse-first database work shaped to sit beside the wider V Rising modding community’s visual language.
                </p>
              </div>
            </div>
            <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--database-dim)]">Current Focus</div>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[var(--database-muted)]">
              <p>Abilities now promote the player spell catalog first, with school and tier filters plus icon-backed detail pages.</p>
              <p>Items, recipes, and workstations now lean into denser desktop browse patterns instead of generic reference cards.</p>
              <p>Reference sections remain available as the technical layer when you need prefab, component, or system source context.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <section className="database-panel rounded-[1.7rem] p-5">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--database-ember)]">Database</h2>
              <p className="mt-1 text-sm text-[var(--database-muted)]">Primary browse surfaces for gameplay records and generated relationships.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {dbLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="database-card group rounded-[1.3rem] p-4 hover:-translate-y-0.5"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--database-dim)]">Database</div>
                <div className="mt-2 text-base font-semibold text-[var(--database-ink)]">{link.label}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="database-panel rounded-[1.7rem] p-5">
          <div className="mb-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--database-accent-soft)]">Reference</h2>
            <p className="mt-1 text-sm text-[var(--database-muted)]">Prefab, component, system, and query coverage for source-first investigation.</p>
          </div>
          <div className="space-y-3">
            {referenceLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="database-card group block rounded-[1.3rem] p-4 hover:-translate-y-0.5"
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
