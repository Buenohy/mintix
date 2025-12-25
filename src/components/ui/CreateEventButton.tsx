import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
interface CreateEventButtonProps {
  icon: IconType;
  title: string;
  size?: number;
  onClick?: () => void;
  className?: string;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CreateEventButton({
  icon: Icon,
  size = 20,
  title,
  onClick,
  className,
}: CreateEventButtonProps) {
  if (!Icon) return null;
  return (
    <button
      onClick={onClick}
      className={cn(
        "border-primary-mintix/50 from-primary-mintix/30 to-primary-mintix/30 rounded-lg border bg-linear-to-r",
        "cursor-pointer px-2 py-1.5 transition-all active:scale-95",
        "hover:from-primary-mintix/60 hover:to-primary-mintix/30",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Icon size={size} />
        <span className="text-xs font-medium">{title}</span>
      </div>
    </button>
  );
}
