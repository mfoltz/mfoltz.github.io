import { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-[92rem] px-4 py-6 sm:px-6 lg:px-8">{children}</main>;
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="mb-4 border-b border-[rgba(223,223,214,0.08)] pb-3">
      <h1 className="text-[1.9rem] font-semibold text-[var(--database-ink)] sm:text-[2.15rem]">{title}</h1>
      {subtitle ? <p className="mt-1 text-sm text-[var(--database-muted)]">{subtitle}</p> : null}
    </header>
  );
}

export function LoadingState({ label = "Loading..." }: { label?: string }) {
  return <div className="rounded-[1rem] border border-[rgba(223,223,214,0.08)] bg-[rgba(32,33,39,0.82)] p-4 text-[var(--database-muted)]">{label}</div>;
}

export function ErrorState({ message }: { message: string }) {
  return <div className="rounded-[1rem] border border-[rgba(197,36,67,0.36)] bg-[rgba(197,36,67,0.12)] p-4 text-[var(--database-ink)]">{message}</div>;
}

export function EmptyState({ label }: { label: string }) {
  return <div className="rounded-[1rem] border border-[rgba(223,223,214,0.08)] bg-[rgba(32,33,39,0.82)] p-4 text-[var(--database-muted)]">{label}</div>;
}
