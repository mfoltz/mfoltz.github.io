import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { dbSections, getDbSectionLabel, getReferenceSectionLabel, referenceSections } from "../../config/sections";
import { PageContainer } from "../common/States";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const homeNavItem: NavItem = { to: "/", label: "Home", end: true };
const searchNavItem: NavItem = { to: "/search", label: "Search" };
const referenceNavItems: NavItem[] = referenceSections.map((section) => ({ to: `/${section}`, label: getReferenceSectionLabel(section) }));
const dbNavItems: NavItem[] = dbSections.map((section) => ({ to: `/db/${section}`, label: getDbSectionLabel(section) }));
const desktopNavItems: NavItem[] = [homeNavItem, ...referenceNavItems, ...dbNavItems, searchNavItem];

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
    "rounded-full px-3 py-1.5 text-sm transition",
    isActive ? "bg-emerald-500/12 text-emerald-100" : "text-slate-300 hover:bg-slate-800 hover:text-slate-100"
  );
}

function mobileLinkClass({ isActive }: { isActive: boolean }) {
  return joinClasses(
    "rounded-2xl border px-3 py-2 text-sm transition",
    isActive ? "border-emerald-500/40 bg-emerald-500/12 text-emerald-100" : "border-slate-800 bg-slate-950/50 text-slate-300 hover:border-slate-700 hover:text-slate-100"
  );
}

function MenuSection({ title, items, onNavigate }: { title: string; items: NavItem[]; onNavigate: () => void }) {
  return (
    <section className="space-y-2">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</h2>
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
    <nav className="mb-5 overflow-x-auto text-sm text-slate-500">
      <ol className="flex min-w-max items-center gap-2 whitespace-nowrap px-1 pb-1">
        <li>
          <Link to="/" className="rounded-full px-2 py-1 transition hover:bg-slate-900 hover:text-slate-100">
            Home
          </Link>
        </li>
        {parts.map((part, index) => {
          const path = `/${parts.slice(0, index + 1).join("/")}`;
          const isLast = index === parts.length - 1;

          return (
            <li key={path} className="flex items-center gap-2">
              <span className="text-slate-700">/</span>
              {isLast ? (
                <span aria-current="page" className="max-w-[14rem] truncate rounded-full bg-slate-900 px-3 py-1 font-medium text-slate-100">
                  {labelForPart(part)}
                </span>
              ) : (
                <Link to={path} className="max-w-[10rem] truncate rounded-full px-2 py-1 transition hover:bg-slate-900 hover:text-slate-100">
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
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/92 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-3 lg:hidden">
            <Link to="/" className="shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
              V Rising Hub
            </Link>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Current</div>
              <div className="truncate text-sm font-medium text-slate-100">{currentSectionLabel}</div>
            </div>
            <NavLink to={searchNavItem.to} className={mobileLinkClass}>
              {searchNavItem.label}
            </NavLink>
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:border-emerald-500/30 hover:text-emerald-100"
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
              <div className="space-y-4 border-t border-slate-800/80 pb-4 pt-3">
                <MenuSection title="Explore" items={[homeNavItem, searchNavItem]} onNavigate={() => setMobileMenuOpen(false)} />
                <MenuSection title="Reference" items={referenceNavItems} onNavigate={() => setMobileMenuOpen(false)} />
                <MenuSection title="Database" items={dbNavItems} onNavigate={() => setMobileMenuOpen(false)} />
              </div>
            </div>
          </div>

          <div className="hidden flex-wrap items-center gap-2 py-3 lg:flex">
            <Link to="/" className="mr-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
              V Rising Hub
            </Link>
            {desktopNavItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={desktopLinkClass}>
                {item.label}
              </NavLink>
            ))}
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
