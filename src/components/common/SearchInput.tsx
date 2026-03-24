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
        "database-input w-full rounded-[1rem] px-4 py-3 text-sm outline-none transition",
        className
      )}
    />
  );
}
