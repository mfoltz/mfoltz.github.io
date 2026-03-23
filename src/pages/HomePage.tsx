import { Link } from "react-router-dom";
import { SectionHeader } from "../components/common/States";
import { dbSections, getDbSectionLabel, getReferenceSectionLabel, referenceSections } from "../config/sections";

const referenceLinks = referenceSections.map((section) => ({ to: `/${section}`, label: getReferenceSectionLabel(section), eyebrow: "Reference" }));
const dbLinks = dbSections.map((section) => ({ to: `/db/${section}`, label: getDbSectionLabel(section), eyebrow: "Database" }));

export function HomePage() {
  return (
    <div>
      <SectionHeader title="V Rising Knowledge Hub" subtitle="Structured reference graph and static DB browser" />
      <section className="mb-6 overflow-hidden rounded-[2rem] border border-slate-800/90 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_34%),linear-gradient(135deg,_rgba(15,23,42,0.99),_rgba(2,6,23,0.97))] p-6 shadow-2xl shadow-slate-950/30">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">Reference-First Revamp</p>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            Explore prefabs, components, systems, derived queries, and game database records as a connected static knowledge graph. The hub favors linked technical context over raw markdown dumps.
          </p>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <section className="rounded-[1.8rem] border border-slate-800/90 bg-slate-900/75 p-5 shadow-xl shadow-slate-950/10">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Reference Atlas</h2>
              <p className="mt-1 text-sm text-slate-400">Generated technical sections rendered from structured data.</p>
            </div>
          </div>
          <div className="space-y-3">
            {referenceLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group grid gap-3 rounded-[1.5rem] border border-slate-800/90 bg-slate-950/45 p-4 transition hover:-translate-y-0.5 hover:border-emerald-500/45 hover:bg-slate-950/60"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">{link.eyebrow}</div>
                <div className="text-lg font-semibold text-slate-100">{link.label}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[1.8rem] border border-slate-800/90 bg-slate-900/75 p-5 shadow-xl shadow-slate-950/10">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Database Browser</h2>
              <p className="mt-1 text-sm text-slate-400">Schema-aware static entity views for game data records.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {dbLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group rounded-[1.5rem] border border-slate-800/90 bg-slate-950/45 p-4 transition hover:-translate-y-0.5 hover:border-emerald-500/45 hover:bg-slate-950/60"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200/80">{link.eyebrow}</div>
                <div className="mt-2 text-base font-semibold text-slate-100">{link.label}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
