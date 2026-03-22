import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { getMarkdownSectionLabel, isMarkdownSection } from "../config/sections";
import { fetchJson } from "../lib/fetch";
import { includesQuery } from "../lib/text";
import { ContentIndexEntry } from "../types/content";

export function MarkdownListPage({ section: sectionProp }: { section?: string }) {
  const params = useParams();
  const section = sectionProp ?? params.section ?? "";
  const [entries, setEntries] = useState<ContentIndexEntry[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isMarkdownSection(section)) {
      setError("Unknown markdown section.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    fetchJson<ContentIndexEntry[]>(`/data/indexes/${section}.index.json`)
      .then((data) => setEntries(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [section]);

  const filtered = useMemo(
    () => entries.filter((entry) => includesQuery([entry.title, entry.slug, entry.tags.join(" "), entry.excerpt], query)),
    [entries, query]
  );

  return (
    <div>
      <SectionHeader title={isMarkdownSection(section) ? getMarkdownSectionLabel(section) : section} subtitle="Markdown content index" />
      <div className="mb-3">
        <SearchInput value={query} onChange={setQuery} placeholder={`Search ${section}...`} />
      </div>
      <p className="mb-3 text-sm text-slate-400">{filtered.length} results</p>
      {loading ? <LoadingState label="Loading section index..." /> : null}
      {error ? <ErrorState message={error} /> : null}
      {!loading && !error && filtered.length === 0 ? <EmptyState label="No results found." /> : null}
      <ul className="space-y-2">
        {filtered.map((entry) => (
          <li key={entry.slug} className="rounded border border-slate-800 bg-slate-900 p-3">
            <Link to={`/${section}/${entry.slug}`} className="text-base font-medium text-slate-100">
              {entry.title}
            </Link>
            <p className="mt-1 text-sm text-slate-400">{entry.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
