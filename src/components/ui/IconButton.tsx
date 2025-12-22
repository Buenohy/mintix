import { IconType } from "react-icons";

interface IconButtonProps {
  icon: IconType;
  size?: number;
  onClick?: () => void;
}

export default function IconButton({
  icon: Icon,
  size = 20,
  onClick,
}: IconButtonProps) {
  if (!Icon) return null;
  return (
    <button
      onClick={onClick}
      className="border-primary-border relative flex cursor-pointer items-center justify-center rounded-lg border bg-linear-to-b from-white/20 to-white/10 px-3 py-1.5 transition-all hover:from-white/30 hover:to-white/15 active:scale-95"
    >
      <Icon size={size} className="text-white" />
    </button>
  );
}
