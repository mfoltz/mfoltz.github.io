import { useEffect, useState } from "react";

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export function CopyValueButton({
  value,
  label = "Copy",
  className
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (status === "idle") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setStatus("idle"), 1600);
    return () => window.clearTimeout(timeoutId);
  }, [status]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  const text = status === "copied" ? "Copied" : status === "error" ? "Failed" : label;

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={joinClasses(
        "rounded-full border border-[rgba(223,223,214,0.08)] bg-[rgba(7,8,12,0.28)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--database-muted)] transition hover:border-[rgba(130,201,217,0.26)] hover:text-[var(--database-accent-soft)]",
        status === "copied" && "border-[rgba(130,201,217,0.26)] text-[var(--database-accent-soft)]",
        status === "error" && "border-rose-500/40 text-rose-200",
        className
      )}
    >
      {text}
    </button>
  );
}
