import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { PageContainer } from "../common/States";
import { ThemeToggle } from "./ThemeToggle";
import logoMark from "../../../static/wiki-assets/VRisingModdingLogoNew.png";
import { applyTheme, getInitialTheme, persistTheme, type ThemeMode } from "../../lib/theme";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const navItems: NavItem[] = [
  { to: "/", label: "Home", end: true },
  { to: "/search", label: "Search" },
  { to: "/db/abilities", label: "Database" },
  { to: "/prefabs", label: "Prefabs" },
  { to: "/components", label: "Reference" }
];

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

function breadcrumbLabel(part: string): string {
  if (part === "db") {
    return "Database";
  }
  return part
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function desktopLinkClass({ isActive }: { isActive: boolean }) {
  return joinClasses(
    "wiki-top-nav-link rounded-lg px-3 py-2 text-sm font-semibold transition",
    isActive && "wiki-top-nav-link-active"
  );
}

function mobileLinkClass({ isActive }: { isActive: boolean }) {
  return joinClasses(
    "brand-mobile-link rounded-xl px-4 py-3 text-sm font-semibold transition",
    isActive && "brand-mobile-link-active"
  );
}

function Breadcrumbs() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return null;
  }

  return (
    <nav className="brand-breadcrumbs mb-6 overflow-x-auto text-sm" aria-label="Breadcrumbs">
      <ol className="flex min-w-max items-center gap-2 whitespace-nowrap">
        <li>
          <Link to="/" className="brand-breadcrumb-link rounded-md px-2 py-1 transition">
            Home
          </Link>
        </li>
        {parts.map((part, index) => {
          const path = `/${parts.slice(0, index + 1).join("/")}`;
          const isLast = index === parts.length - 1;

          return (
            <li key={path} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span aria-current="page" className="brand-breadcrumb-current rounded-md px-2 py-1">
                  {breadcrumbLabel(part)}
                </span>
              ) : (
                <Link to={path} className="brand-breadcrumb-link rounded-md px-2 py-1 transition">
                  {breadcrumbLabel(part)}
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
  const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme());
  const isHome = useMemo(() => location.pathname === "/", [location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useLayoutEffect(() => {
    applyTheme(theme);
    persistTheme(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((value) => (value === "dark" ? "light" : "dark"));
  }

  return (
    <div className="site-shell min-h-screen">
      <header className="site-shell-header sticky top-0 z-30 border-b backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[92rem] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img src={logoMark} alt="V Rising Mod Wiki logo" className="h-11 w-11 object-contain" />
            <span className="hidden leading-none sm:block">
              <span className="font-display block text-[0.92rem] uppercase tracking-[0.18em] text-[var(--wiki-brand-warm)]">V Rising</span>
              <span className="font-display mt-1 block text-[1.25rem] uppercase tracking-[0.12em] text-[var(--wiki-brand-cool)]">Mod Wiki</span>
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={desktopLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <Link to="/search" className="wiki-search-pill inline-flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium">
              <span>Search</span>
              <span className="search-pill-shortcut rounded-md border px-2 py-0.5 text-xs">Ctrl K</span>
            </Link>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="wiki-secondary-button ml-auto rounded-xl px-4 py-2 text-sm font-semibold lg:hidden"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div
          className={joinClasses(
            "grid overflow-hidden border-t border-[var(--wiki-border)] transition-[grid-template-rows,opacity] duration-200 lg:hidden",
            mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="min-h-0">
            <nav className="space-y-2 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
              <ThemeToggle theme={theme} onToggle={toggleTheme} className="mb-3 w-full justify-between" />
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.end} className={mobileLinkClass}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <PageContainer>
        {!isHome ? <Breadcrumbs /> : null}
        <Outlet />
      </PageContainer>
    </div>
  );
}
