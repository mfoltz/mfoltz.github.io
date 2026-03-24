import { Link } from "react-router-dom";
import { homeHeroSummary, homeLandingBands } from "../config/home";
import logoMark from "../../static/wiki-assets/VRisingModdingLogoNew.png";

export function HomePage() {
  return (
    <div className="pb-6">
      <section className="mx-auto max-w-6xl px-2 pt-4 sm:px-4 sm:pt-8">
        <div className="text-center">
          <div className="mx-auto flex max-w-[32rem] items-center justify-center gap-4 sm:gap-5">
            <img src={logoMark} alt="V Rising Mod Wiki logo" className="h-24 w-24 object-contain sm:h-28 sm:w-28" />
            <div className="text-left">
              <div className="font-display text-lg uppercase leading-none tracking-[0.18em] text-[var(--wiki-brand-warm)] sm:text-[1.55rem]">V Rising</div>
              <div className="font-display mt-2 text-[1.55rem] uppercase leading-none tracking-[0.12em] text-[var(--wiki-brand-cool)] sm:text-[2.2rem]">Mod Wiki</div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--wiki-muted)]">{homeHeroSummary}</p>
        </div>

        <div className="mt-12 space-y-8">
          {homeLandingBands.map((band) => (
            <section key={band.id} className="space-y-4">
              <header className="max-w-3xl text-left">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--wiki-brand-warm)]">Homepage Surface</div>
                <h2 className="mt-3 text-[1.6rem] font-semibold leading-tight text-[var(--wiki-ink)] sm:text-[1.8rem]">{band.title}</h2>
                <p className="mt-2 text-[0.98rem] leading-7 text-[var(--wiki-muted)]">{band.description}</p>
              </header>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {band.items.map((item) => (
                  <Link key={item.id} to={item.to} className="wiki-home-card flex h-full flex-col rounded-2xl px-5 py-6 text-left">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--wiki-brand-warm)]">{item.eyebrow}</div>
                    <h3 className="mt-3 text-[1.36rem] font-semibold leading-tight text-[var(--wiki-ink)]">{item.title}</h3>
                    <p className="mt-3 flex-1 text-[0.98rem] leading-7 text-[var(--wiki-muted)]">{item.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--wiki-brand-cool)]">
                      <span>{item.actionLabel}</span>
                      <span aria-hidden="true">/</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
