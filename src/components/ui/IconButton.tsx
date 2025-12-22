import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface IconButtonProps {
  icon: IconType;
  size?: number;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({
  icon: Icon,
  size = 20,
  onClick,
  className,
}: IconButtonProps) {
  if (!Icon) return null;

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex h-fit w-fit cursor-pointer items-center justify-center rounded-lg border",
        "border-primary-border bg-linear-to-b from-white/20 to-white/10",
        "px-3 py-1.5 transition-all active:scale-95",
        "hover:from-white/30 hover:to-white/15",
        className,
      )}
    >
      <Icon size={size} className="text-gray-mintix block shrink-0" />
    </button>
  );
}
