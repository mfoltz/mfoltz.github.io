import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DbDetailView } from "../components/db/DbDetailView";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { DbSection, getDbSectionLabel, isDbSection } from "../config/sections";
import { fetchJson } from "../lib/fetch";
import { DbEntityDetail } from "../types/db";

export function DbDetailPage({ section: sectionProp }: { section?: string }) {
  const params = useParams();
  const section = sectionProp ?? params.section ?? "";
  const slug = params.slug ?? "";
  const [detail, setDetail] = useState<DbEntityDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isDbSection(section)) {
      setError("Unknown db section.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    fetchJson<DbEntityDetail>(`/data/db/${section}/by-slug/${slug}.json`)
      .then((data) => setDetail(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [section, slug]);

  if (loading) {
    return <LoadingState label="Loading entity detail..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!detail) {
    return <EmptyState label="Entity not found." />;
  }

  const validSection = section as DbSection;

  return (
    <div>
      <SectionHeader title={getDbSectionLabel(validSection)} subtitle="Player-first database detail with source traceability kept secondary." />
      <DbDetailView detail={detail} section={validSection} />
    </div>
  );
}
