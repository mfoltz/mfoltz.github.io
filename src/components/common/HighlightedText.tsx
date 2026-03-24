function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function HighlightedText({
  text,
  query,
  className = "rounded bg-[rgba(168,121,230,0.16)] px-1 text-[var(--database-ink)] ring-1 ring-inset ring-[rgba(168,121,230,0.2)]"
}: {
  text: string;
  query: string;
  className?: string;
}) {
  const tokens = Array.from(new Set(query.toLowerCase().split(/\s+/).filter(Boolean))).sort((a, b) => b.length - a.length);

  if (tokens.length === 0) {
    return <>{text}</>;
  }

  const pattern = new RegExp(`(${tokens.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) =>
        tokens.some((token) => part.toLowerCase() === token) ? (
          <mark key={`${part}:${index}`} className={className}>
            {part}
          </mark>
        ) : (
          <span key={`${part}:${index}`}>{part}</span>
        )
      )}
    </>
  );
}
