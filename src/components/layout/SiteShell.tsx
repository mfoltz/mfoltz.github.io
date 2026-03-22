import { Link, Outlet, useLocation } from "react-router-dom";
import { PageContainer } from "../common/States";
import { dbSections, getDbSectionLabel, getReferenceSectionLabel, referenceSections } from "../../config/sections";

const navItems = [
  { to: "/", label: "Home" },
  ...referenceSections.map((section) => ({ to: `/${section}`, label: getReferenceSectionLabel(section) })),
  ...dbSections.map((section) => ({ to: `/db/${section}`, label: getDbSectionLabel(section) })),
  { to: "/search", label: "Search" }
];

function labelForPart(part: string): string {
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

function Breadcrumbs() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return null;
  }

  return (
    <nav className="mb-5 text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        {parts.map((part, index) => {
          const path = `/${parts.slice(0, index + 1).join("/")}`;
          return (
            <li key={path} className="flex items-center gap-2">
              <span>/</span>
              <Link to={path}>{labelForPart(part)}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function SiteShell() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-10 border-b border-slate-800/80 bg-slate-950/92 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="mr-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
            V Rising Hub
          </Link>
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="rounded-full px-3 py-1.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-slate-100">
              {item.label}
            </Link>
          ))}
        </div>
      </header>
      <PageContainer>
        <Breadcrumbs />
        <Outlet />
      </PageContainer>
    </div>
  );
}
