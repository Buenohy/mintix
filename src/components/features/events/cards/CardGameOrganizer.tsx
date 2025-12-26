import Image from "next/image";

type CardGameOrganizerProps = {
  title: string;
  subtitle: string;
  image?: string;
};

export default function CardGameOrganizer({
  title,
  subtitle,
  image,
}: CardGameOrganizerProps) {
  return (
    <div className="border-primary-border w-fit min-w-57 shrink-0 rounded-lg border">
      <div className="flex flex-col gap-2 px-2 py-4">
        <span className="text-gray-mintix text-xs font-normal">{title}</span>
        <div className="flex items-center gap-2">
          {image && (
            <div className="flex shrink-0 items-center justify-center">
              <Image
                src={image}
                alt=""
                width={25}
                height={25}
                className="rounded-full object-cover"
              />
            </div>
          )}
          <span className="text-white-mintix text-sm leading-6.25 font-normal whitespace-nowrap">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}
