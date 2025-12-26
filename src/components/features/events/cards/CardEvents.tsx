"use client";
import { IconType } from "react-icons";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

type CardEventsProps = {
  icon: IconType;
  size?: number;
  title: string;
  numberEvents: number | string;
  percentage: number;
  subtitle: string;
  className: string;
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CardEvents({
  icon: Icon,
  size = 12,
  title,
  numberEvents,
  percentage,
  subtitle,
  className,
}: CardEventsProps) {
  if (!Icon) return null;

  const isNegative = percentage < 0;
  const TrendIcon = isNegative ? FaArrowDown : FaArrowUp;

  const trendColor = isNegative ? "text-red-500" : "text-green-mintix";

  return (
    <div className="w-full rounded-xl border border-[#2d3748] bg-[#161b26]/50 p-5 shadow-sm">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg",
              className,
            )}
          >
            <Icon size={size} className="text-white-mintix" />
          </div>
          <span className="text-gray-mintix text-sm font-normal">{title}</span>
        </div>

        <div>
          <span className="text-white-mintix text-2xl font-semibold">
            {typeof numberEvents === "number"
              ? numberEvents.toLocaleString()
              : numberEvents}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={cn("flex items-center gap-1.5 font-medium", trendColor)}
          >
            <TrendIcon size={12} />
            <span className="text-sm font-semibold">
              {Math.abs(percentage)}%
            </span>
          </div>
          <span className="text-white-mintix text-xs font-normal">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}
