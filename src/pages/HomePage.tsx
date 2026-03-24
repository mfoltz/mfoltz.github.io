import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import logoMark from "../../static/wiki-assets/VRisingModdingLogoNew.png";
import modIcon from "../../static/wiki-assets/mod_logo_red_purple.png";

function HomeTileIcon({ children }: { children: ReactNode }) {
  return <div className="wiki-home-icon mx-auto flex h-16 w-16 items-center justify-center">{children}</div>;
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-11 w-11">
      <defs>
        <linearGradient id="wiki-play-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f8a86f" />
          <stop offset="55%" stopColor="#b35cff" />
          <stop offset="100%" stopColor="#6e46ff" />
        </linearGradient>
      </defs>
      <path d="M12 35c0-13 9-22 21-22 7 0 13 3 17 8" fill="none" stroke="url(#wiki-play-gradient)" strokeLinecap="round" strokeWidth="4" />
      <path d="M20 43c3 4 8 8 16 8 12 0 20-9 20-20" fill="none" stroke="url(#wiki-play-gradient)" strokeLinecap="round" strokeWidth="4" />
      <path
        d="M21 26c0-2 2-4 4-4h14c2 0 4 2 4 4v12c0 2-2 4-4 4H25c-2 0-4-2-4-4V26Zm5 6h.01M38 32h.01M31 29v6M28 32h6"
        fill="none"
        stroke="url(#wiki-play-gradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}

function BuildIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-11 w-11">
      <defs>
        <linearGradient id="wiki-build-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f8a86f" />
          <stop offset="50%" stopColor="#d85bff" />
          <stop offset="100%" stopColor="#7b51ff" />
        </linearGradient>
      </defs>
      <path d="M16 47 32 17l5 13 11-11 3 3-11 11 13 5-30 16-7-7Z" fill="none" stroke="url(#wiki-build-gradient)" strokeLinejoin="round" strokeWidth="3.5" />
      <path d="m16 47 9-5" fill="none" stroke="url(#wiki-build-gradient)" strokeLinecap="round" strokeWidth="3.5" />
    </svg>
  );
}

function PrefabIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-11 w-11">
      <defs>
        <linearGradient id="wiki-prefab-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f8a86f" />
          <stop offset="55%" stopColor="#ca63ff" />
          <stop offset="100%" stopColor="#6f4dff" />
        </linearGradient>
      </defs>
      <path d="m32 14 15 9v18l-15 9-15-9V23l15-9Z" fill="none" stroke="url(#wiki-prefab-gradient)" strokeLinejoin="round" strokeWidth="3.5" />
      <path d="M32 14v18m15-9-15 9-15-9m8 25h14" fill="none" stroke="url(#wiki-prefab-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-11 w-11">
      <defs>
        <linearGradient id="wiki-community-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f8a86f" />
          <stop offset="55%" stopColor="#cd61ff" />
          <stop offset="100%" stopColor="#6e46ff" />
        </linearGradient>
      </defs>
      <path d="M22 30a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm20 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM12 47c1-7 6-11 13-11s12 4 13 11m4 0c1-8 7-12 15-12 5 0 9 2 11 6" fill="none" stroke="url(#wiki-community-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
      <circle cx="49" cy="20" r="5" fill="none" stroke="url(#wiki-community-gradient)" strokeWidth="3.5" />
    </svg>
  );
}

const portalCards = [
  {
    to: "/db/abilities",
    title: "Browse Database",
    body: "Explore abilities, items, recipes, and workstations with linked generated records.",
    icon: <PlayIcon />
  },
  {
    to: "/components",
    title: "Developer Reference",
    body: "Browse components, systems, and technical records for source-first investigation.",
    icon: <BuildIcon />
  },
  {
    to: "/prefabs",
    title: "Browse Prefabs",
    body: "Jump straight into prefab records and related source coverage for modding workflows.",
    icon: <PrefabIcon />
  },
  {
    to: "/search",
    title: "Search Everything",
    body: "Search across database and reference layers without losing section-level context.",
    icon: <CommunityIcon />
  }
] as const;

export function HomePage() {
  return (
    <div className="pb-4">
      <section className="mx-auto max-w-5xl px-2 pt-4 sm:px-4 sm:pt-8">
        <div className="text-center">
          <div className="mx-auto flex max-w-[32rem] items-center justify-center gap-4 sm:gap-5">
            <img src={logoMark} alt="V Rising Mod Wiki logo" className="h-24 w-24 object-contain sm:h-28 sm:w-28" />
            <div className="text-left">
              <div className="font-display text-lg uppercase leading-none tracking-[0.18em] text-[var(--wiki-brand-warm)] sm:text-[1.55rem]">V Rising</div>
              <div className="font-display mt-2 text-[1.55rem] uppercase leading-none tracking-[0.12em] text-[var(--wiki-brand-cool)] sm:text-[2.2rem]">Mod Wiki</div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--wiki-muted)]">
            Community documentation for players, developers, and vampires.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/components" className="wiki-primary-button rounded-xl px-6 py-3 text-base font-semibold">
              Developer Reference
            </Link>
            <Link to="/db/abilities" className="wiki-secondary-button rounded-xl px-6 py-3 text-base font-semibold">
              Browse Database
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {portalCards.map((card, index) => (
            <Link key={card.to} to={card.to} className="wiki-home-card block rounded-2xl px-6 py-7 text-center">
              <HomeTileIcon>
                {index === 1 ? (
                  <img src={modIcon} alt="" className="h-11 w-11 object-contain" />
                ) : (
                  card.icon
                )}
              </HomeTileIcon>
              <h2 className="mt-5 text-[1.45rem] font-semibold leading-tight text-[var(--wiki-ink)]">{card.title}</h2>
              <p className="mx-auto mt-3 max-w-md text-base leading-7 text-[var(--wiki-muted)]">{card.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
