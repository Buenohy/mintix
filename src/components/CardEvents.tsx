import { FaArrowUp } from "react-icons/fa6";

interface CardEventsProps {
  title: string;
  numberEvents: string;
  percentage: number;
  subtitle: string;
}

export default function CardEvents({title, numberEvents, percentage, subtitle}: CardEventsProps) {
  return (
    <div className="bg-primary-background min-w-77.25 h-fit rounded-xl p-5">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <div className="bg-yellow-400 w-6 h-6 rounded-lg"></div>
            <span className="text-gray-mintix font-normal">{title}</span>
          </div>
          <span className="font-semibold text-2xl">{numberEvents}</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1.5">
            <FaArrowUp className="text-green-mintix w-5 h-5" size={12} />
            <span className="text-sm text-green-mintix">{percentage}%</span>
          </div>
          <span className="text-xs font-normal text-white-mintix">{subtitle}</span>
        </div>
      </div>
    </div>
  )
}
