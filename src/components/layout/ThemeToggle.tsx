import type { ThemeMode } from "../../lib/theme";

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

function SunIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="theme-toggle-sun h-3 w-3">
      <circle cx="10" cy="10" r="3.1" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10 2.8v1.8M10 15.4v1.8M17.2 10h-1.8M4.6 10H2.8M15.1 4.9l-1.3 1.3M6.2 13.8l-1.3 1.3M15.1 15.1l-1.3-1.3M6.2 6.2 4.9 4.9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="theme-toggle-moon h-3 w-3">
      <path
        d="M12.7 2.9a6.8 6.8 0 1 0 4.4 11.9A7.7 7.7 0 0 1 12.7 2.9Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ThemeSwitchGraphic({ theme }: { theme: ThemeMode }) {
  return (
    <span className="theme-toggle-switch-graphic" data-theme-state={theme} aria-hidden="true">
      <span className="theme-toggle-check">
        <span className="theme-toggle-icon">
          <SunIcon />
          <MoonIcon />
        </span>
      </span>
    </span>
  );
}

export function ThemeToggle({
  theme,
  onToggle,
  className,
  variant = "compact"
}: {
  theme: ThemeMode;
  onToggle: () => void;
  className?: string;
  variant?: "compact" | "menu";
}) {
  const nextTheme = theme === "dark" ? "light" : "dark";
  const isMenu = variant === "menu";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      onClick={onToggle}
      data-theme-state={theme}
      className={joinClasses(
        isMenu
          ? "theme-toggle theme-toggle-menu inline-flex items-center justify-between rounded-2xl px-4 py-3 text-sm"
          : "theme-toggle theme-toggle-compact inline-flex items-center justify-center",
        className
      )}
    >
      {isMenu ? (
        <span className="min-w-0 text-left leading-tight">
          <span className="theme-toggle-label block">Appearance</span>
          <span className="theme-toggle-value block">{theme === "dark" ? "Dark" : "Light"}</span>
        </span>
      ) : null}
      <ThemeSwitchGraphic theme={theme} />
    </button>
  );
}
