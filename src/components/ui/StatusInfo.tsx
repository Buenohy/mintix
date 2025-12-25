import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

type StatusType = "upcoming" | "cancelled" | "completed";
interface StatusInfoProps {
  status: StatusType;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function StatusInfo({ status }: StatusInfoProps) {
  const statusConfig = {
    upcoming: {
      label: "Upcoming",
      dotColor: "bg-green-500",
    },
    cancelled: {
      label: "Cancelled",
      dotColor: "bg-red-500",
    },
    completed: {
      label: "Completed",
      dotColor: "bg-slate-400",
    },
  };

  const { label, dotColor } = statusConfig[status];

  return (
    <div className="border-primary-border bg-opacity-10 w-fit rounded-full border px-3 py-1">
      <div className="flex items-center gap-2">
        <div className={cn("h-1.5 w-1.5 rounded-full", dotColor)} />
        <span className="text-white-mintix text-xs font-medium">{label}</span>
      </div>
    </div>
  );
}
