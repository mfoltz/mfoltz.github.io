import { Link, useLocation } from "react-router-dom";

function breadcrumbLabel(part: string): string {
  if (part === "npcs") return "NPCs";
  if (part === "itemsets") return "Item sets";
  if (part === "db") {
    return "Database";
  }

  return part
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function Breadcrumbs({ currentLabel }: { currentLabel?: string }) {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return null;
  }

  return (
    <nav className="brand-breadcrumbs mb-6 text-sm" aria-label="Breadcrumbs">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link to="/" className="brand-breadcrumb-link rounded-md px-2 py-1 transition">
            Home
          </Link>
        </li>
        {parts.map((part, index) => {
          const path = `/${parts.slice(0, index + 1).join("/")}`;
          const isLast = index === parts.length - 1;

          return (
            <li key={path} className="flex min-w-0 items-center gap-2">
              <span aria-hidden="true" className="shrink-0">/</span>
              {isLast ? (
                <span aria-current="page" className="brand-breadcrumb-current min-w-0 break-words rounded-md px-2 py-1 [overflow-wrap:anywhere]">
                  {currentLabel || breadcrumbLabel(part)}
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
