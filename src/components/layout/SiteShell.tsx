import { useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { shellPrimaryNav, shellSearchPath, type ShellLinkItem } from "../../config/shell";
import { applyTheme, getInitialTheme, persistTheme, type ThemeMode } from "../../lib/theme";
import { PageContainer } from "../common/States";
import { ShellMobileUtilityPanel, ShellSearchTrigger, ShellUtilityRail } from "./ShellUtilityRail";
import logoMark from "../../../static/wiki-assets/VRisingModdingLogoNew.png";

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

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}

function isLinkActive(item: ShellLinkItem, pathname: string) {
  if (item.end) {
    return pathname === item.to;
  }

  return pathname === item.to || pathname.startsWith(`${item.to}/`);
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4.5 w-4.5">
      {open ? (
        <path d="M5 5 15 15M15 5 5 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      ) : (
        <>
          <path d="M4 6.25h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          <path d="M4 10h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          <path d="M4 13.75h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
        </>
      )}
    </svg>
  );
}

function desktopLinkClass(item: ShellLinkItem, pathname: string) {
  return joinClasses("shell-nav-link inline-flex h-11 items-center rounded-full px-3.5 text-[0.95rem] font-semibold transition", isLinkActive(item, pathname) && "shell-nav-link-active");
}

function mobileLinkClass(item: ShellLinkItem, pathname: string) {
  return joinClasses("shell-mobile-link flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition", isLinkActive(item, pathname) && "shell-mobile-link-active");
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

function SiteShellBody({ isHome }: { isHome: boolean }) {
  return (
    <PageContainer>
      {!isHome ? <Breadcrumbs /> : null}
      <Outlet />
    </PageContainer>
  );
}

export function SiteShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme());
  const isHome = location.pathname === "/";

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k" && !isEditableTarget(event.target)) {
        event.preventDefault();
        navigate(shellSearchPath);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  useLayoutEffect(() => {
    applyTheme(theme);
    persistTheme(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((value) => (value === "dark" ? "light" : "dark"));
  }

  return (
    <div className="site-shell min-h-screen">
      <header className="site-shell-header sticky top-0 z-40 border-b backdrop-blur-xl">
        <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-3">
            <Link to="/" className="shell-brand flex shrink-0 items-center gap-3 pr-2">
              <img src={logoMark} alt="V Rising Data Base mark" className="shell-brand-mark h-11 w-11 object-contain" />
              <span className="hidden leading-none sm:block">
                <span className="font-display block text-[0.92rem] uppercase tracking-[0.18em] text-[var(--wiki-brand-warm)]">V Rising</span>
                <span className="font-display mt-1 block text-[1.24rem] uppercase tracking-[0.12em] text-[var(--wiki-brand-cool)]">Data Base</span>
              </span>
            </Link>

            <div className="hidden min-w-0 flex-1 items-center gap-4 xl:flex">
              <nav className="flex min-w-0 flex-1 items-center gap-1" aria-label="Primary navigation">
                {shellPrimaryNav.map((item) => (
                  <NavLink key={item.id} to={item.to} end={item.end} className={() => desktopLinkClass(item, location.pathname)}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <ShellUtilityRail theme={theme} onToggle={toggleTheme} />
            </div>

            <div className="ml-auto flex items-center gap-2 xl:hidden">
              <ShellSearchTrigger mobile />
              <button
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileMenuOpen((value) => !value)}
                className="shell-mobile-utility inline-flex h-11 w-11 items-center justify-center rounded-xl"
              >
                <MenuIcon open={mobileMenuOpen} />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-[var(--brand-border)] xl:hidden">
            <nav className="mx-auto grid w-full max-w-[96rem] gap-4 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
              <div className="shell-mobile-panel rounded-[1.6rem] p-3">
                <ShellSearchTrigger />
              </div>

              <div className="shell-mobile-panel rounded-[1.6rem] p-2">
                {shellPrimaryNav.map((item) => (
                  <NavLink key={item.id} to={item.to} end={item.end} className={() => mobileLinkClass(item, location.pathname)}>
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <ShellMobileUtilityPanel theme={theme} onToggle={toggleTheme} />
            </nav>
          </div>
        ) : null}
      </header>

      <SiteShellBody isHome={isHome} />
    </div>
  );
}
