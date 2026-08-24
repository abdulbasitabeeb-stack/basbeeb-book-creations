interface FilterBarProps {
  options: readonly string[];
  active: string;
  onChange: (value: string) => void;
  label?: string;
}

export function FilterBar({ options, active, onChange, label = "Filter" }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
      {options.map((option) => {
        const selected = option === active;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all ${
              selected
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border bg-card text-espresso/70 hover:border-accent hover:text-espresso"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
