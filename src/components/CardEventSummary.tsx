import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
interface CardEventSummaryProps {
  icon: IconType;
  size?: number;
  title: string;
  value: string;
  className: string;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CardEventSummary({
  icon: Icon,
  size = 15,
  title,
  value,
  className,
}: CardEventSummaryProps) {
  return (
    <div className="border-primary-border rounded-lg border border-b-0 px-7.5 py-7">
      <div className="flex flex-col items-center gap-4 text-center">
        <Icon
          size={size}
          className={cn("text-white-mintix h-6 w-6 rounded-lg p-1", className)}
        />
        <span className="text-gray-mintix text-center text-xs leading-tight font-normal">
          {title}
        </span>
        <span>{value}</span>
      </div>
    </div>
  );
}
