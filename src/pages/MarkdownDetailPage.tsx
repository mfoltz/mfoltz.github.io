import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { MarkdownRenderer } from "../components/markdown/MarkdownRenderer";
import { isMarkdownSection } from "../config/sections";
import { fetchJson, fetchText } from "../lib/fetch";
import { rewriteRelref, stripFrontMatter } from "../lib/text";
import { ContentIndexEntry } from "../types/content";

export function MarkdownDetailPage({ section: sectionProp }: { section?: string }) {
  const params = useParams();
  const section = sectionProp ?? params.section ?? "";
  const slug = params.slug ?? "";
  const [entry, setEntry] = useState<ContentIndexEntry | null>(null);
  const [markdown, setMarkdown] = useState("");
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
      .then((entries) => {
        const match = entries.find((item) => item.slug === slug) ?? null;
        setEntry(match);
        if (!match) {
          throw new Error("Document not found.");
        }
        return fetchText(`/${match.source}`);
      })
      .then((content) => setMarkdown(rewriteRelref(stripFrontMatter(content))))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [section, slug]);

  if (loading) {
    return <LoadingState label="Loading markdown..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!entry) {
    return <EmptyState label="Document not found." />;
  }

  return (
    <div>
      <SectionHeader title={entry.title} subtitle={entry.source} />
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
}
