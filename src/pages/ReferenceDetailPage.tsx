import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { ReferenceDetailView } from "../components/reference/ReferenceDetailView";
import { getReferenceSectionLabel, isReferenceSection } from "../config/sections";
import { fetchJson } from "../lib/fetch";
import { normalizeReferencePath, resolveReferenceAlias } from "../lib/reference";
import { ReferenceDetail } from "../types/reference";

export function ReferenceDetailPage({ section: sectionProp }: { section?: string }) {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const section = sectionProp ?? params.section ?? "";
  const slug = params.slug ?? "";
  const [detail, setDetail] = useState<ReferenceDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function load() {
      if (!isReferenceSection(section)) {
        setError("Unknown reference section.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      setDetail(null);

      try {
        const data = await fetchJson<ReferenceDetail>(`/data/reference/${section}/by-slug/${slug}.json`);
        if (!active) {
          return;
        }
        setDetail(data);
      } catch (err) {
        const resolved = await resolveReferenceAlias(location.pathname);
        if (!active) {
          return;
        }
        if (resolved && normalizeReferencePath(resolved) !== normalizeReferencePath(location.pathname)) {
          navigate(resolved, { replace: true });
          return;
        }
        setError(err instanceof Error ? err.message : "Reference record not found.");
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void load();

    return () => {
      active = false;
    };
  }, [location.pathname, navigate, section, slug]);

  if (loading) {
    return <LoadingState label="Loading reference detail..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!detail) {
    return <EmptyState label="Reference record not found." />;
  }

  return (
    <div>
      <SectionHeader
        title={isReferenceSection(section) ? getReferenceSectionLabel(section) : section}
        subtitle="Developer-first reference detail with source, routing, and linked-lane traceability."
      />
      <ReferenceDetailView detail={detail} />
    </div>
  );
}
