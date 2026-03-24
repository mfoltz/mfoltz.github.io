import { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-[92rem] px-4 py-6 sm:px-6 lg:px-8">{children}</main>;
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="mb-6 max-w-4xl">
      <h1 className="text-[1.65rem] font-semibold leading-tight text-[var(--wiki-ink)] sm:text-[1.95rem]">{title}</h1>
      {subtitle ? <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--wiki-muted)]">{subtitle}</p> : null}
    </header>
  );
}

export function LoadingState({ label = "Loading..." }: { label?: string }) {
  return <div className="database-panel-subtle rounded-[1rem] p-4 text-[var(--wiki-muted)]">{label}</div>;
}

export function ErrorState({ message }: { message: string }) {
  return <div className="rounded-[1rem] border border-[rgba(219,39,119,0.36)] bg-[rgba(219,39,119,0.12)] p-4 text-[var(--wiki-ink)]">{message}</div>;
}

export function EmptyState({ label }: { label: string }) {
  return <div className="database-panel-subtle rounded-[1rem] p-4 text-[var(--wiki-muted)]">{label}</div>;
}
