import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { dbSections, getDbSectionLabel, getReferenceSectionLabel, referenceSections } from "../../config/sections";
import { PageContainer } from "../common/States";
import brandMark from "../../../static/images/mod_logo_red_purple.png";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const homeNavItem: NavItem = { to: "/", label: "Home", end: true };
const searchNavItem: NavItem = { to: "/search", label: "Search" };
const referenceNavItems: NavItem[] = referenceSections.map((section) => ({ to: `/${section}`, label: getReferenceSectionLabel(section) }));
const dbNavItems: NavItem[] = dbSections.map((section) => ({ to: `/db/${section}`, label: getDbSectionLabel(section) }));

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

function labelForPart(part: string): string {
  if (part === "db") {
    return "Database";
  }

  if (part === "search") {
    return "Search";
  }

  const dbSection = dbSections.find((section) => section === part);
  if (dbSection) {
    return getDbSectionLabel(dbSection);
  }

  const referenceSection = referenceSections.find((section) => section === part);
  if (referenceSection) {
    return getReferenceSectionLabel(referenceSection);
  }

  return part;
}

function getCurrentSectionLabel(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return "Home";
  }

  if (parts[0] === "db") {
    return labelForPart(parts[1] ?? "db");
  }

  return labelForPart(parts[0]);
}

function desktopLinkClass({ isActive }: { isActive: boolean }) {
  return joinClasses(
    "database-nav-link pb-1 text-sm font-medium",
    isActive && "database-nav-link-active"
  );
}

function mobileLinkClass({ isActive }: { isActive: boolean }) {
  return joinClasses(
    "rounded-[1rem] px-3 py-2 text-sm transition",
    isActive ? "database-chip-active" : "database-chip"
  );
}

function MenuSection({ title, items, onNavigate }: { title: string; items: NavItem[]; onNavigate: () => void }) {
  return (
    <section className="space-y-2">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--database-dim)]">{title}</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} onClick={onNavigate} className={mobileLinkClass}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </section>
  );
}

function Breadcrumbs() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return null;
  }

  return (
    <nav className="mb-5 overflow-x-auto text-sm text-[var(--database-dim)]">
      <ol className="flex min-w-max items-center gap-2 whitespace-nowrap px-1 pb-1">
        <li>
          <Link to="/" className="rounded-full px-2 py-1 transition hover:bg-[rgba(168,121,230,0.08)] hover:text-[var(--database-ink)]">
            Home
          </Link>
        </li>
        {parts.map((part, index) => {
          const path = `/${parts.slice(0, index + 1).join("/")}`;
          const isLast = index === parts.length - 1;

          return (
            <li key={path} className="flex items-center gap-2">
              <span className="text-[var(--database-dim)]">/</span>
              {isLast ? (
                <span aria-current="page" className="max-w-[14rem] truncate rounded-full bg-[rgba(168,121,230,0.1)] px-3 py-1 font-medium text-[var(--database-ink)]">
                  {labelForPart(part)}
                </span>
              ) : (
                <Link to={path} className="max-w-[10rem] truncate rounded-full px-2 py-1 transition hover:bg-[rgba(168,121,230,0.08)] hover:text-[var(--database-ink)]">
                  {labelForPart(part)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function SiteShell() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentSectionLabel = useMemo(() => getCurrentSectionLabel(location.pathname), [location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return undefined;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[var(--database-bg-alt)]">
      <header className="database-sticky-panel sticky top-0 z-20 rounded-none border-x-0 border-t-0">
        <div className="mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-3 lg:hidden">
            <Link to="/" className="flex shrink-0 items-center gap-3">
              <span className="database-avatar-well flex h-11 w-11 items-center justify-center rounded-[1rem] p-1">
                <img src={brandMark} alt="" className="h-8 w-8 object-contain" />
              </span>
              <span>
                <span className="font-display block text-[10px] uppercase tracking-[0.36em] text-[var(--database-ember)]">V Rising</span>
                <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-[var(--database-ink)]">Mod Database</span>
              </span>
            </Link>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--database-dim)]">Current Surface</div>
              <div className="truncate text-sm font-medium text-[var(--database-ink)]">{currentSectionLabel}</div>
            </div>
            <NavLink to={searchNavItem.to} className={mobileLinkClass}>
              {searchNavItem.label}
            </NavLink>
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="database-button rounded-[1rem] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em]"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          <div
            className={joinClasses(
              "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out lg:hidden",
              mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="min-h-0">
              <div className="space-y-4 border-t border-[var(--database-divider)] pb-4 pt-3">
                <MenuSection title="Explore" items={[homeNavItem, searchNavItem]} onNavigate={() => setMobileMenuOpen(false)} />
                <MenuSection title="Database" items={dbNavItems} onNavigate={() => setMobileMenuOpen(false)} />
                <MenuSection title="Reference" items={referenceNavItems} onNavigate={() => setMobileMenuOpen(false)} />
              </div>
            </div>
          </div>

          <div className="hidden gap-8 py-4 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-start">
            <Link to="/" className="flex shrink-0 items-center gap-3">
              <span className="database-avatar-well flex h-12 w-12 items-center justify-center rounded-[1rem] p-1">
                <img src={brandMark} alt="" className="h-9 w-9 object-contain" />
              </span>
              <span>
                <span className="font-display block text-[11px] uppercase tracking-[0.36em] text-[var(--database-ember)]">V Rising</span>
                <span className="block text-lg font-semibold uppercase tracking-[0.22em] text-[var(--database-ink)]">Mod Database</span>
              </span>
            </Link>

            <div className="min-w-0 space-y-4 pt-1">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--database-dim)]">Explore</span>
                <NavLink to={homeNavItem.to} end={homeNavItem.end} className={desktopLinkClass}>
                  {homeNavItem.label}
                </NavLink>
                <NavLink to={searchNavItem.to} className={desktopLinkClass}>
                  {searchNavItem.label}
                </NavLink>
              </div>
              <div className="grid gap-4 xl:grid-cols-2">
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--database-ember)]">Database</div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    {dbNavItems.map((item) => (
                      <NavLink key={item.to} to={item.to} end={item.end} className={desktopLinkClass}>
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--database-accent-soft)]">Reference</div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    {referenceNavItems.map((item) => (
                      <NavLink key={item.to} to={item.to} end={item.end} className={desktopLinkClass}>
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="justify-self-end pt-1 text-right">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--database-dim)]">Current Surface</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--database-ink)]">{currentSectionLabel}</div>
            </div>
          </div>
        </div>
      </header>
      <PageContainer>
        <Breadcrumbs />
        <Outlet />
      </PageContainer>
    </div>
  );
}
