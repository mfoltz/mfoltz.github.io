import { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>;
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="mb-4 border-b border-slate-800 pb-3">
      <h1 className="text-2xl font-semibold text-slate-100">{title}</h1>
      {subtitle ? <p className="mt-1 text-sm text-slate-400">{subtitle}</p> : null}
    </header>
  );
}

export function LoadingState({ label = "Loading..." }: { label?: string }) {
  return <div className="rounded border border-slate-800 bg-slate-900 p-4 text-slate-300">{label}</div>;
}

export function ErrorState({ message }: { message: string }) {
  return <div className="rounded border border-rose-900 bg-rose-950/40 p-4 text-rose-200">{message}</div>;
}

export function EmptyState({ label }: { label: string }) {
  return <div className="rounded border border-slate-800 bg-slate-900 p-4 text-slate-400">{label}</div>;
}
