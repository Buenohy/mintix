import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

type IconButtonProps = {
  icon: IconType;
  size?: number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function IconButton({
  icon: Icon,
  size = 20,
  onClick,
  disabled,
  className,
}: IconButtonProps) {
  if (!Icon) return null;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex h-fit w-fit items-center justify-center rounded-lg border",
        "border-primary-border from-white-mintix/20 to-white-mintix/10 bg-linear-to-b",
        "px-2 py-1.5 transition-all active:scale-95",
        "hover:from-white-mintix/30 hover:to-white-mintix/15 cursor-pointer",
        className,
      )}
    >
      <Icon size={size} className="text-gray-mintix block shrink-0" />
    </button>
  );
}
