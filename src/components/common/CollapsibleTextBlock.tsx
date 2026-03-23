import { useMemo, useState } from "react";
import { CopyValueButton } from "./CopyValueButton";

export function CollapsibleTextBlock({
  title,
  value,
  language,
  collapsedLines = 12,
  copyValue
}: {
  title?: string;
  value: string;
  language?: string;
  collapsedLines?: number;
  copyValue?: string;
}) {
  const lines = useMemo(() => value.split(/\r?\n/), [value]);
  const isLong = lines.length > collapsedLines;
  const [expanded, setExpanded] = useState(false);
  const visibleValue = !isLong || expanded ? value : `${lines.slice(0, collapsedLines).join("\n")}\n...`;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--database-dim)]">
          {title ? <span>{title}</span> : null}
          <span>{language ?? "text"}</span>
          <span>{`${lines.length} lines`}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {copyValue ? <CopyValueButton value={copyValue} label="Copy block" /> : null}
          {isLong ? (
            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              className="rounded-full border border-[rgba(223,223,214,0.08)] bg-[rgba(7,8,12,0.28)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--database-muted)] transition hover:border-[rgba(130,201,217,0.26)] hover:text-[var(--database-accent-soft)]"
            >
              {expanded ? "Collapse block" : `Show full block (${lines.length} lines)`}
            </button>
          ) : null}
        </div>
      </div>
      <pre className="overflow-x-auto rounded-2xl border border-[rgba(223,223,214,0.08)] bg-[rgba(7,8,12,0.32)] p-4 text-xs leading-6 text-[var(--database-accent-soft)]">
        <code>{visibleValue}</code>
      </pre>
    </div>
  );
}
