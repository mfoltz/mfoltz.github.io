import { Link } from "react-router-dom";
import { SectionHeader } from "../components/common/States";
import { dbSections, getDbSectionLabel } from "../config/sections";

const links = [
  { to: "/prefabs", label: "Prefabs" },
  { to: "/systems", label: "Systems" },
  { to: "/queries", label: "Queries" },
  ...dbSections.map((section) => ({ to: `/db/${section}`, label: getDbSectionLabel(section) })),
  { to: "/search", label: "Search" }
];

export function HomePage() {
  return (
    <div>
      <SectionHeader title="V Rising Knowledge Hub" subtitle="Static docs + database browser" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="rounded border border-slate-800 bg-slate-900 p-4 text-slate-200 hover:border-emerald-500">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
