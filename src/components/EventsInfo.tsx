import Image from "next/image";
import StatusInfo from "./StatusInfo";
import IconButton from "./ui/IconButton";
import { IoEllipsisHorizontal } from "react-icons/io5";

export default function EventsInfo() {
  return (
    <div className="border-primary-border grid grid-cols-13 items-center border-y py-2">
      <div className="col-span-4 flex gap-3">
        <Image
          src="/images/events-info.png"
          alt="Events Info Image"
          width={28}
          height={28}
        />
        <span className="text-white-mintix text-sm">
          Seattle Sand Dogs vs Nashville Sounds
        </span>
      </div>
      <div className="col-span-2">
        <span className="text-white-mintix text-sm font-normal">Jun 22,</span>
        <span className="text-white-mintix text-sm font-normal">6:00 PM</span>
      </div>
      <div className="col-span-2">
        <span className="text-white-mintix text-sm font-normal">
          Dehler Park
        </span>
      </div>
      <div className="col-span-2">
        <span className="text-white-mintix text-sm font-normal">4,200</span>
      </div>
      <div>
        <StatusInfo />
      </div>
      <div className="col-span-2 justify-self-end">
        <IconButton
          icon={IoEllipsisHorizontal}
          size={20}
          className="border-0 bg-none p-0"
        />
      </div>
    </div>
  );
}
