import { useId } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  id?: string;
  autoFocus?: boolean;
}

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export function SearchInput({ value, onChange, placeholder = "Search...", className, label = "Search", id, autoFocus }: SearchInputProps) {
  const generatedId = useId();
  return (
    <label htmlFor={id ?? generatedId} className="block min-w-0">
      <span className="mb-1.5 block text-xs font-medium text-[var(--database-muted)]">{label}</span>
    <input
      id={id ?? generatedId}
      autoFocus={autoFocus}
      type="search"
      autoComplete="off"
      enterKeyHint="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className={joinClasses(
        "database-input w-full rounded-[1rem] px-4 py-3 text-sm outline-none transition",
        className
      )}
    />
    </label>
  );
}
