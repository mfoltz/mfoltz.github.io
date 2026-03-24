import type { ThemeMode } from "../../lib/theme";

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

function ThemeIcon({ theme }: { theme: ThemeMode }) {
  if (theme === "dark") {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
        <path
          d="M12.8 2.7a6.9 6.9 0 1 0 4.5 12.1A7.9 7.9 0 0 1 12.8 2.7Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <circle cx="10" cy="10" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10 2.3v2.1M10 15.6v2.1M17.7 10h-2.1M4.4 10H2.3M15.4 4.6l-1.5 1.5M6.1 13.9l-1.5 1.5M15.4 15.4l-1.5-1.5M6.1 6.1 4.6 4.6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function ThemeToggle({
  theme,
  onToggle,
  className
}: {
  theme: ThemeMode;
  onToggle: () => void;
  className?: string;
}) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      onClick={onToggle}
      className={joinClasses("theme-toggle inline-flex items-center gap-3 rounded-xl px-3 py-2 text-sm", className)}
    >
      <span className="theme-toggle-icon flex h-8 w-8 items-center justify-center rounded-lg">
        <ThemeIcon theme={theme} />
      </span>
      <span className="min-w-0 text-left leading-tight">
        <span className="theme-toggle-label block">Theme</span>
        <span className="theme-toggle-value block">{theme === "dark" ? "Dark" : "Light"}</span>
      </span>
    </button>
  );
}
