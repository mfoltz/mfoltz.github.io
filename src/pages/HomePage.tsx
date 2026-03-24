import { Link } from "react-router-dom";
import { SectionHeader } from "../components/common/States";
import { dbSections, getDbSectionLabel, getReferenceSectionLabel, referenceSections } from "../config/sections";
import brandMark from "../../static/images/mod_logo_red_purple.png";
import heroArt from "../../static/images/logo.jpg";

const referenceLinks = referenceSections.map((section) => ({ to: `/${section}`, label: getReferenceSectionLabel(section) }));
const dbLinks = dbSections.map((section) => ({ to: `/db/${section}`, label: getDbSectionLabel(section) }));

export function HomePage() {
  return (
    <div>
      <SectionHeader title="V Rising Mod Database" subtitle="Desktop-first mod database browsing with linked reference coverage for prefabs, systems, and extracted game data." />

      <section className="database-masthead mb-8 overflow-hidden rounded-[2.2rem] p-4 sm:p-6 lg:p-7">
        <div className="grid gap-6 lg:grid-cols-[minmax(18rem,23rem)_minmax(0,1fr)] lg:items-stretch">
          <div className="flex flex-col justify-between gap-8 p-2 lg:py-4">
            <div>
              <p className="font-display text-[11px] uppercase tracking-[0.38em] text-[var(--database-ember)]">Community-Tuned Database</p>
              <div className="mt-5 flex items-center gap-4">
                <span className="database-avatar-well flex h-16 w-16 items-center justify-center rounded-[1.2rem] p-2">
                  <img src={brandMark} alt="" className="h-11 w-11 object-contain" />
                </span>
                <div>
                  <div className="font-display text-[10px] uppercase tracking-[0.32em] text-[var(--database-accent-soft)]">V Rising</div>
                  <div className="text-base font-semibold uppercase tracking-[0.22em] text-[var(--database-ink)]">Mod Database</div>
                </div>
              </div>
              <h2 className="mt-7 max-w-[13ch] text-4xl font-semibold leading-[1.05] text-[var(--database-ink)] sm:text-[3.4rem]">
                Records, prefabs, and reference kept in one darker world.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[var(--database-muted)] sm:text-base">
                The browse layer stays dense and practical, but the first screen now feels closer to the V Rising mod community’s shared visual language: calmer, moodier, and more editorial than a utility dashboard.
              </p>
            </div>

            <div className="space-y-4 border-t border-[var(--database-divider)] pt-4">
              <div className="flex flex-wrap gap-3">
                <Link to="/db/abilities" className="database-button database-button-brand rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]">
                  Open Database
                </Link>
                <Link to="/search" className="database-button rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]">
                  Search Everything
                </Link>
              </div>
              <div className="space-y-2 text-sm leading-6 text-[var(--database-muted)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--database-dim)]">Current Focus</div>
                <p>Abilities, items, recipes, and workstations lead with player-facing browse rows, while reference sections stay available when you need source-first investigation.</p>
              </div>
            </div>
          </div>

          <div className="database-masthead-art rounded-[1.9rem]" style={{ backgroundImage: `url(${heroArt})` }}>
            <div className="absolute inset-x-0 bottom-0 z-[1] p-5 sm:p-6">
              <div className="database-summary-capsule max-w-md rounded-[1.5rem] p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--database-ember)]">Poster Surface</div>
                <p className="mt-3 text-base font-semibold leading-tight text-[var(--database-ink)]">
                  A world-first entry point on top, then row-based tools as soon as browsing begins.
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--database-muted)]">
                  Existing repo art does the atmosphere work here so the UI can stay restrained everywhere else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.95fr)]">
        <section className="database-ledger-surface overflow-hidden rounded-[1.9rem]">
          <div className="grid gap-4 border-b border-[var(--database-divider)] px-5 py-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--database-ember)]">Database</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--database-muted)]">
                The primary working surface stays browse-first: icons, summary, category cues, and technical identity in premium record rows instead of a wall of soft cards.
              </p>
            </div>
            <Link to="/db/abilities" className="database-button database-button-brand justify-self-start rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] lg:justify-self-end">
              Start With Abilities
            </Link>
          </div>
          <ul className="database-ledger">
            {dbLinks.map((link) => (
              <li key={link.to} className="list-none">
                <Link to={link.to} className="database-ledger-row group flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--database-dim)]">Database</div>
                    <div className="mt-2 text-base font-semibold text-[var(--database-ink)]">{link.label}</div>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--database-accent-soft)] transition group-hover:text-[var(--database-ember)]">
                    Open
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-6">
          <section className="database-panel-subtle rounded-[1.8rem] p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--database-accent-soft)]">Reference Layer</div>
            <p className="mt-3 text-sm leading-6 text-[var(--database-muted)]">
              Components, systems, prefabs, and queries stay attached as the technical atlas beneath the browse-first database shell.
            </p>
          </section>

          <section className="database-ledger-surface overflow-hidden rounded-[1.8rem]">
            <div className="border-b border-[var(--database-divider)] px-5 py-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--database-accent-soft)]">Reference</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--database-muted)]">Source-oriented routes for prefab, component, system, and query investigation.</p>
            </div>
            <ul className="database-ledger">
              {referenceLinks.map((link) => (
                <li key={link.to} className="list-none">
                  <Link to={link.to} className="database-ledger-row group flex items-center justify-between gap-4 px-5 py-4">
                    <div className="text-base font-semibold text-[var(--database-ink)]">{link.label}</div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--database-accent-soft)] transition group-hover:text-[var(--database-ink)]">
                      Open
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
