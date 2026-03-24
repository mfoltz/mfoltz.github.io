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
        "database-button rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
        status === "copied" && "database-button-brand",
        status === "error" && "border-rose-500/40 text-rose-200",
        className
      )}
    >
      {text}
    </button>
  );
}
