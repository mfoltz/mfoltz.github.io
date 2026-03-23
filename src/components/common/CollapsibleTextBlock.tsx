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
        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
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
              className="rounded-full border border-slate-700/80 bg-slate-950/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-emerald-500/40 hover:text-emerald-200"
            >
              {expanded ? "Collapse block" : `Show full block (${lines.length} lines)`}
            </button>
          ) : null}
        </div>
      </div>
      <pre className="overflow-x-auto rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 text-xs leading-6 text-emerald-100">
        <code>{visibleValue}</code>
      </pre>
    </div>
  );
}
