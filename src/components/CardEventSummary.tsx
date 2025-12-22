interface CardEventSummaryProps {
  title: string;
  value: string;
}

export default function CardEventSummary({title, value}: CardEventSummaryProps) {
  return (
    <div className="border rounded-lg border-primary-border py-7 px-7.5 border-b-0">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-primary-mintix w-6 h-6 rounded-lg"></div>
        <span className="text-xs font-normal text-gray-mintix">{title}</span>
        <span>{value}</span>
      </div>
    </div>
  )
}
