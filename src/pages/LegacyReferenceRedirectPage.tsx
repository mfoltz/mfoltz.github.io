import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ErrorState, LoadingState } from "../components/common/States";
import { normalizeReferencePath, resolveReferenceAlias } from "../lib/reference";

export function LegacyReferenceRedirectPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function resolve() {
      const target = await resolveReferenceAlias(location.pathname);
      if (!active) {
        return;
      }

      if (target && normalizeReferencePath(target) !== normalizeReferencePath(location.pathname)) {
        navigate(target, { replace: true });
        return;
      }

      setError(`No structured reference route matches '${location.pathname}'.`);
    }

    void resolve();

    return () => {
      active = false;
    };
  }, [location.pathname, navigate]);

  if (error) {
    return <ErrorState message={error} />;
  }

  return <LoadingState label="Resolving legacy reference path..." />;
}
