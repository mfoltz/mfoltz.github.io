function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function HighlightedText({
  text,
  query,
  className = "rounded bg-emerald-500/12 px-1 text-emerald-100 ring-1 ring-inset ring-emerald-500/20"
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
