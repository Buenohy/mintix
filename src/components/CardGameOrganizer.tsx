interface CardGameOrganizerProps {
  title: string;
  subtitle: string;
}

export default function CardGameOrganizer({
  title,
  subtitle,
}: CardGameOrganizerProps) {
  return (
    <div className="border-primary-border rounded-lg border">
      <div className="flex flex-col gap-3 px-2.5 py-4">
        <span className="text-gray-mintix text-xs font-normal">{title}</span>
        <span className="text-white-mintix text-sm font-normal">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
