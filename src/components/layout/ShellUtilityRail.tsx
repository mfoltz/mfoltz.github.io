import { Link } from "react-router-dom";
import { shellCommunityLinks, shellMobileUtilityLinks, shellSearchPath, shellSocialLinks, type ShellUtilityLink } from "../../config/shell";
import type { ThemeMode } from "../../lib/theme";
import { ThemeToggle } from "./ThemeToggle";

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className ?? "h-4 w-4"}>
      <path
        d="m14.386 14.386 4.088 4.088m-4.088-4.088A7.533 7.533 0 1 0 3.733 3.733a7.533 7.533 0 0 0 10.653 10.653Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M6 3h7v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
      <path d="m13 3-7.5 7.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.15c-3.2.7-3.88-1.36-3.88-1.36a3.05 3.05 0 0 0-1.28-1.69c-1.05-.72.08-.7.08-.7a2.42 2.42 0 0 1 1.77 1.19 2.46 2.46 0 0 0 3.36.96 2.48 2.48 0 0 1 .73-1.54c-2.55-.29-5.23-1.28-5.23-5.68a4.45 4.45 0 0 1 1.18-3.08 4.13 4.13 0 0 1 .11-3.04s.97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.6.23 2.78.11 3.04a4.44 4.44 0 0 1 1.19 3.08c0 4.42-2.69 5.39-5.25 5.67a2.76 2.76 0 0 1 .78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function ShellExternalIcon({ icon }: { icon?: ShellUtilityLink["icon"] }) {
  if (icon === "github") {
    return <GitHubIcon />;
  }

  if (icon === "external") {
    return <ExternalLinkIcon />;
  }

  return null;
}

function externalRel(link: ShellUtilityLink) {
  return link.external ? "noopener noreferrer" : undefined;
}

function ShellTextLink({ link, mobile = false }: { link: ShellUtilityLink; mobile?: boolean }) {
  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={externalRel(link)}
      aria-label={link.ariaLabel}
      className={
        mobile
          ? "shell-mobile-link flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition"
          : "shell-utility-link inline-flex items-center gap-1.5 text-sm font-medium transition"
      }
    >
      <span>{link.label}</span>
      <ShellExternalIcon icon={link.icon === "github" && mobile ? "github" : link.icon} />
    </a>
  );
}

function ShellSocialLink({ link }: { link: ShellUtilityLink }) {
  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={externalRel(link)}
      aria-label={link.ariaLabel ?? link.label}
      title={link.label}
      className="shell-social-link inline-flex items-center justify-center transition"
    >
      <ShellExternalIcon icon={link.icon} />
    </a>
  );
}

function getSearchModifierLabel() {
  if (typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/i.test(navigator.platform)) {
    return "\u2318";
  }

  return "Ctrl";
}

export function ShellSearchTrigger({ mobile = false }: { mobile?: boolean }) {
  const modifierLabel = getSearchModifierLabel();

  return (
    <Link
      to={shellSearchPath}
      className={joinClasses(
        mobile
          ? "shell-mobile-search-trigger inline-flex h-11 w-11 items-center justify-center rounded-xl"
          : "shell-search-trigger inline-flex items-center justify-between text-sm font-medium transition"
      )}
      aria-label="Open search"
      title="Search"
    >
      <span className="shell-search-label inline-flex items-center gap-1.5">
        <SearchIcon />
        {mobile ? null : <span>Search</span>}
      </span>
      {mobile ? null : (
        <span className="shell-search-keys" aria-hidden="true">
          <kbd>{modifierLabel}</kbd>
          <kbd>K</kbd>
        </span>
      )}
    </Link>
  );
}

export function ShellUtilityRail({ theme, onToggle }: { theme: ThemeMode; onToggle: () => void }) {
  return (
    <div className="shell-utility-cluster flex items-center">
      <span className="shell-utility-divider" aria-hidden="true" />
      <nav className="shell-utility-links flex items-center" aria-label="Community links">
        {shellCommunityLinks.map((link) => (
          <ShellTextLink key={link.id} link={link} />
        ))}
      </nav>
      <ShellSearchTrigger />
      <ThemeToggle theme={theme} onToggle={onToggle} />
      {shellSocialLinks.map((link) => (
        <ShellSocialLink key={link.id} link={link} />
      ))}
    </div>
  );
}

export function ShellMobileUtilityPanel({ theme, onToggle }: { theme: ThemeMode; onToggle: () => void }) {
  return (
    <div className="shell-mobile-panel grid gap-3 rounded-[1.6rem] p-3">
      <ThemeToggle theme={theme} onToggle={onToggle} variant="menu" className="w-full" />
      {shellMobileUtilityLinks.map((link) => (
        <ShellTextLink key={link.id} link={link} mobile />
      ))}
    </div>
  );
}
