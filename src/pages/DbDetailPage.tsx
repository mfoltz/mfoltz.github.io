import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DbDetailView } from "../components/db/DbDetailView";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { EmptyState, ErrorState, LoadingState } from "../components/common/States";
import { DbSection, isDbSection } from "../config/sections";
import { fetchJson } from "../lib/fetch";
import { DbEntityDetail } from "../types/db";

export function DbDetailPage({ section: sectionProp }: { section?: string }) {
  const params = useParams();
  const section = sectionProp ?? params.section ?? "";
  const slug = params.slug ?? "";
  const recordPath = `/data/db/${section}/by-slug/${slug}.json`;
  const [result, setResult] = useState<{ path: string; detail?: DbEntityDetail; error?: string } | null>(null);
  const current = result?.path === recordPath ? result : null;

  useEffect(() => {
    if (!isDbSection(section)) {
      setResult({ path: recordPath, error: "Unknown db section." });
      return;
    }

    let cancelled = false;
    fetchJson<DbEntityDetail>(recordPath)
      .then((detail) => { if (!cancelled) setResult({ path: recordPath, detail }); })
      .catch((err: Error) => { if (!cancelled) setResult({ path: recordPath, error: err.message }); });
    return () => { cancelled = true; };
  }, [section, recordPath]);

  return (
    <div>
      <Breadcrumbs currentLabel={current?.detail?.title} />
      {!current ? <LoadingState label="Loading entity detail..." />
        : current.error ? <ErrorState message={current.error} />
        : current.detail ? <DbDetailView key={recordPath} detail={current.detail} section={section as DbSection} />
        : <EmptyState label="Entity not found." />}
    </div>
  );
}
