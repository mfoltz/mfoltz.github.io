import { Link } from "react-router-dom";
import {
  heroPrimaryDestinationId,
  heroSecondaryDestinationId,
  promotedDestinations,
  type PromotedDestination
} from "../config/shell";
import logoMark from "../../static/wiki-assets/VRisingModdingLogoNew.png";

function getDestination(id: string): PromotedDestination {
  const destination = promotedDestinations.find((item) => item.id === id);
  if (!destination) {
    throw new Error(`Missing promoted destination: ${id}`);
  }
  return destination;
}

const heroPrimaryDestination = getDestination(heroPrimaryDestinationId);
const heroSecondaryDestination = getDestination(heroSecondaryDestinationId);

export function HomePage() {
  return (
    <div className="pb-4">
      <section className="mx-auto max-w-6xl px-2 pt-4 sm:px-4 sm:pt-8">
        <div className="text-center">
          <div className="mx-auto flex max-w-[32rem] items-center justify-center gap-4 sm:gap-5">
            <img src={logoMark} alt="V Rising Mod Wiki logo" className="h-24 w-24 object-contain sm:h-28 sm:w-28" />
            <div className="text-left">
              <div className="font-display text-lg uppercase leading-none tracking-[0.18em] text-[var(--wiki-brand-warm)] sm:text-[1.55rem]">V Rising</div>
              <div className="font-display mt-2 text-[1.55rem] uppercase leading-none tracking-[0.12em] text-[var(--wiki-brand-cool)] sm:text-[2.2rem]">Mod Wiki</div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--wiki-muted)]">
            Structured database and source-first reference surfaces for V Rising modding, reverse engineering, and record browsing.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to={heroPrimaryDestination.to} className="wiki-primary-button rounded-xl px-6 py-3 text-base font-semibold">
              {heroPrimaryDestination.heroActionLabel ?? heroPrimaryDestination.homeActionLabel}
            </Link>
            <Link to={heroSecondaryDestination.to} className="wiki-secondary-button rounded-xl px-6 py-3 text-base font-semibold">
              {heroSecondaryDestination.heroActionLabel ?? heroSecondaryDestination.homeActionLabel}
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {promotedDestinations.map((destination) => (
            <Link key={destination.id} to={destination.to} className="wiki-home-card flex h-full flex-col rounded-2xl px-5 py-6 text-left">
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--wiki-brand-warm)]">{destination.homeEyebrow}</div>
              <h2 className="mt-3 text-[1.38rem] font-semibold leading-tight text-[var(--wiki-ink)]">{destination.homeTitle}</h2>
              <p className="mt-3 flex-1 text-[0.98rem] leading-7 text-[var(--wiki-muted)]">{destination.homeDescription}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--wiki-brand-cool)]">
                <span>{destination.homeActionLabel}</span>
                <span aria-hidden="true">/</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
