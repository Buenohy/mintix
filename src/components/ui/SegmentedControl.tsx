import { SegmentOption } from "@/types/segmented-control";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

type SegmentedControlProps = {
  options: SegmentOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  variant?: "small" | "large";
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function SegmentedControl({
  options,
  selectedValue,
  onChange,
  variant = "small",
}: SegmentedControlProps) {
  const isLarge = variant === "large";

  return (
    <div
      className={cn(
        "border-primary-border from-white-mintix/20 to-white-mintix/10 flex shrink-0 items-center gap-1 rounded-xl border bg-linear-to-b p-1",
        isLarge ? "h-10.5 w-full" : "h-8.25 w-fit",
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "flex cursor-pointer items-center justify-center rounded-lg leading-6.25 font-medium whitespace-nowrap transition-all",
            isLarge ? "h-full px-6 text-sm" : "h-full px-3 text-xs",
            selectedValue === option.value
              ? "text-white-mintix from-white-mintix/20 to-white-mintix/10 ring-primary-border bg-linear-to-b ring-2 ring-inset"
              : "hover:text-white-mintix text-gray-400",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
