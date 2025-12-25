import Image from "next/image";
import StatusInfo from "../../../ui/StatusInfo";
import IconButton from "../../../ui/IconButton";
import { IoEllipsisHorizontal } from "react-icons/io5";

export default function EventsInfo() {
  return (
    <div className="border-primary-border flex w-full flex-col gap-4 border-y py-4 md:grid md:grid-cols-13 md:items-center md:py-2">
      <div className="flex items-center justify-between gap-3 md:col-span-4 md:justify-start">
        <div className="flex items-center gap-3 overflow-hidden">
          <Image
            src="/images/events-info.png"
            alt="Events Info Image"
            width={32}
            height={32}
            className="shrink-0 rounded-md"
          />
          <span className="text-white-mintix truncate text-sm font-medium md:font-normal">
            Seattle Sand Dogs vs Nashville Sounds
          </span>
        </div>
        <div className="md:hidden">
          <IconButton
            icon={IoEllipsisHorizontal}
            size={20}
            className="border-0 bg-none p-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-2 gap-y-3 md:contents">
        <div className="flex flex-col md:col-span-2 md:block">
          <span className="text-gray-mintix text-[10px] uppercase md:hidden">
            Date & Time
          </span>
          <span className="text-white-mintix text-sm font-normal">
            Jun 22, 6:00 PM
          </span>
        </div>

        <div className="flex flex-col md:col-span-2 md:block">
          <span className="text-gray-mintix text-[10px] uppercase md:hidden">
            Location
          </span>
          <span className="text-white-mintix block truncate text-sm font-normal">
            Dehler Park
          </span>
        </div>

        <div className="flex flex-col md:col-span-2 md:block">
          <span className="text-gray-mintix text-[10px] uppercase md:hidden">
            Tickets Sold
          </span>
          <span className="text-white-mintix text-sm font-normal">4,200</span>
        </div>

        <div className="flex flex-col md:col-span-2 md:block">
          <span className="text-gray-mintix text-[10px] uppercase md:hidden">
            Status
          </span>
          <div className="w-fit">
            <StatusInfo status="upcoming" />
          </div>
        </div>
      </div>

      <div className="hidden justify-self-end md:col-span-1 md:flex">
        <IconButton
          icon={IoEllipsisHorizontal}
          size={20}
          className="border-0 bg-none p-0"
        />
      </div>
    </div>
  );
}
