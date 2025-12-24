export type TagVariant =
  | "red"
  | "green"
  | "purple"
  | "orange"
  | "teal"
  | "blue"
  | "yellow"
  | "forest"
  | "pink";
interface TagsProps {
  title: string;
  subtitle?: string;
  variant?: TagVariant;
}

export default function Tags({ title, subtitle, variant = "red" }: TagsProps) {
  const variantStyles: Record<TagVariant, string> = {
    red: "border-red-500/40 bg-red-500/10",
    green: "border-green-500/40 bg-green-500/10",
    purple: "border-purple-500/40 bg-purple-500/10",
    orange: "border-orange-400/40 bg-orange-400/10",
    teal: "border-teal-500/40 bg-teal-500/10",
    blue: "border-blue-500/40 bg-blue-500/10",
    yellow: "border-yellow-500/40 bg-yellow-500/10",
    forest: "border-green-700/40 bg-green-700/10",
    pink: "border-pink-500/40 bg-pink-500/10",
  };

  return (
    <div
      className={`h-fit rounded-full border p-2 transition-colors ${variantStyles[variant]}`}
    >
      <div className="flex items-center gap-1">
        <p className="text-white-mintix text-sm font-normal whitespace-nowrap">
          {title}
        </p>
        {subtitle && (
          <p className="text-gray-mintix text-sm font-semibold">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
