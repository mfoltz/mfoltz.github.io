import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { dbSections, getDbSectionLabel, getMarkdownSectionLabel, isDbSection, isMarkdownSection, markdownSections } from "../config/sections";
import { fetchJson } from "../lib/fetch";
import { includesQuery } from "../lib/text";
import { SearchEntry } from "../types/content";

const sectionOrder: string[] = [...markdownSections, ...dbSections];

function getSectionLabel(section: string): string {
  if (isMarkdownSection(section)) {
    return getMarkdownSectionLabel(section);
  }

  if (isDbSection(section)) {
    return getDbSectionLabel(section);
  }

  return section;
}

export function SearchPage() {
  const [entries, setEntries] = useState<SearchEntry[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJson<SearchEntry[]>("/data/search.index.json")
      .then((data) => setEntries(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(
    () =>
      entries
        .filter((entry) => includesQuery([entry.title, entry.slug, entry.section, entry.tags.join(" "), entry.excerpt], query))
        .sort((a, b) => a.title.localeCompare(b.title)),
    [entries, query]
  );

  const grouped = useMemo(() => {
    const bySection = filtered.reduce<Record<string, SearchEntry[]>>((acc, entry) => {
      acc[entry.section] = acc[entry.section] ?? [];
      acc[entry.section].push(entry);
      return acc;
    }, {});

    const orderedKeys = [...sectionOrder.filter((section) => section in bySection), ...Object.keys(bySection).filter((section) => !sectionOrder.includes(section))];
    return orderedKeys.map((section) => [section, bySection[section]] as const);
  }, [filtered]);

  return (
    <div>
      <SectionHeader title="Search" subtitle="Unified search across docs and db entries" />
      <div className="mb-3">
        <SearchInput value={query} onChange={setQuery} placeholder="Search title, tags, excerpt..." />
      </div>
      {loading ? <LoadingState label="Loading search index..." /> : null}
      {error ? <ErrorState message={error} /> : null}
      {!loading && !error && filtered.length === 0 ? <EmptyState label="No search results." /> : null}
      <div className="space-y-4">
        {grouped.map(([section, results]) => (
          <section key={section} className="rounded border border-slate-800 bg-slate-900 p-3">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-300">{getSectionLabel(section)}</h2>
            <ul className="space-y-2">
              {results.map((entry) => (
                <li key={`${entry.section}:${entry.slug}`}>
                  <Link to={entry.path} className="text-slate-100">
                    {entry.title}
                  </Link>
                  <p className="text-sm text-slate-400">{entry.excerpt}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
