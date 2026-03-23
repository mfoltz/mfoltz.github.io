interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export function SearchInput({ value, onChange, placeholder = "Search...", className }: SearchInputProps) {
  return (
    <input
      type="search"
      autoComplete="off"
      enterKeyHint="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className={joinClasses(
        "w-full rounded-[1rem] border border-[rgba(223,223,214,0.08)] bg-[rgba(7,8,12,0.32)] px-4 py-3 text-sm text-[var(--database-ink)] outline-none transition placeholder:text-[var(--database-dim)] focus:border-[rgba(130,201,217,0.26)] focus:ring-2 focus:ring-[rgba(130,201,217,0.12)]",
        className
      )}
    />
  );
}
