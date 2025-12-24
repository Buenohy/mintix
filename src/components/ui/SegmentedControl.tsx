import { SegmentOption } from "@/types/segmented-control";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

interface SegmentedControlProps {
  options: SegmentOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  variant?: "small" | "large";
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function SegmentedControl({
  options,
  selectedValue,
  onChange,
  variant = "small",
}: SegmentedControlProps) {
  return (
    <div
      className={cn(
        "bg-primary-background border-primary-border flex items-center gap-1 rounded-lg border p-1",
        variant === "large" ? "w-full" : "w-fit",
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "cursor-pointer rounded-md p-2 text-sm font-medium transition-all",
            selectedValue === option.value
              ? "text-white-mintix border-primary-border from-white-mintix/20 to-white-mintix/10 border bg-linear-to-b shadow-sm"
              : "hover:text-white-mintix text-gray-400",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
