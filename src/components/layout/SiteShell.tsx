import { useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { shellPrimaryNav, shellSearchPath, shellUtilityLinks, type ShellLinkItem } from "../../config/shell";
import { applyTheme, getInitialTheme, persistTheme, type ThemeMode } from "../../lib/theme";
import { PageContainer } from "../common/States";
import { ThemeToggle } from "./ThemeToggle";
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

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className ?? "h-4 w-4"}>
      <circle cx="8.5" cy="8.5" r="4.75" fill="none" stroke="currentColor" strokeWidth="1.55" />
      <path d="M12.25 12.25 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.55" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M6 3h7v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
      <path d="m13 3-7.5 7.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" />
    </svg>
  );
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

function ShellSearchTrigger({
  mobile = false
}: {
  mobile?: boolean;
}) {
  return (
    <Link
      to={shellSearchPath}
      className={joinClasses(
        mobile
          ? "shell-mobile-search-trigger inline-flex h-11 w-11 items-center justify-center rounded-xl"
          : "shell-search-trigger inline-flex h-11 items-center gap-3 rounded-2xl px-4 text-sm font-medium"
      )}
      aria-label="Open search"
      title="Search"
    >
      <SearchIcon />
      {mobile ? null : (
        <>
          <span>Search</span>
          <span className="shell-search-shortcut rounded-md border px-2 py-0.5 text-[11px] font-semibold">Ctrl K</span>
        </>
      )}
    </Link>
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

            <div className="hidden min-w-0 flex-1 items-center gap-4 lg:flex">
              <nav className="flex min-w-0 flex-1 items-center gap-1" aria-label="Primary navigation">
                {shellPrimaryNav.map((item) => (
                  <NavLink key={item.id} to={item.to} end={item.end} className={() => desktopLinkClass(item, location.pathname)}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="shell-utility-cluster flex items-center gap-2.5">
                <span className="shell-utility-divider" aria-hidden="true" />
                {shellUtilityLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="shell-utility-link inline-flex h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold transition"
                  >
                    <span>{link.label}</span>
                    {link.external ? <ExternalLinkIcon /> : null}
                  </a>
                ))}
                <ThemeToggle theme={theme} onToggle={toggleTheme} />
                <ShellSearchTrigger />
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2 lg:hidden">
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
          <div className="border-t border-[var(--brand-border)] lg:hidden">
            <nav className="mx-auto grid w-full max-w-[96rem] gap-4 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
              <div className="shell-mobile-panel rounded-[1.6rem] p-3">
                <Link to={shellSearchPath} className="shell-search-trigger flex h-11 items-center justify-between rounded-2xl px-4 text-sm font-medium">
                  <span className="flex items-center gap-3">
                    <SearchIcon />
                    <span>Search</span>
                  </span>
                  <span className="shell-search-shortcut rounded-md border px-2 py-0.5 text-[11px] font-semibold">Ctrl K</span>
                </Link>
              </div>

              <div className="shell-mobile-panel rounded-[1.6rem] p-2">
                {shellPrimaryNav.map((item) => (
                  <NavLink key={item.id} to={item.to} end={item.end} className={() => mobileLinkClass(item, location.pathname)}>
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="shell-mobile-panel grid gap-3 rounded-[1.6rem] p-3">
                <ThemeToggle theme={theme} onToggle={toggleTheme} variant="menu" className="w-full justify-between" />
                {shellUtilityLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="shell-mobile-link flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition"
                  >
                    <span>{link.label}</span>
                    {link.external ? <ExternalLinkIcon /> : null}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        ) : null}
      </header>

      <SiteShellBody isHome={isHome} />
    </div>
  );
}
