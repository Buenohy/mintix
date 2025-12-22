interface TagsProps {
  title: string;
  subtitle?: string;
}

export default function Tags({ title, subtitle }: TagsProps) {
  return (
    <div className="rounded-full border border-[#F15150]/40 bg-linear-to-b from-[#F15150]/20 to-[#F15150]/10 p-2">
      <div className="flex items-center gap-1">
        <p className="text-white-mintix text-sm font-normal">{title}</p>
        {subtitle && (
          <p className="text-gray-mintix text-sm font-semibold">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
