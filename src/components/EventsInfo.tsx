import Image from "next/image";
import StatusInfo from "./StatusInfo";

export default function EventsInfo() {
  return (
    <div className="grid grid-cols-12 items-center py-2 border-y border-primary-border">
      <div className="flex gap-3 col-span-3">
        <Image 
        src="/images/events-info.png"
        alt="Events Info Image"
        width={28}
        height={28}
        />
        <span className="text-sm text-white-mintix">Seattle Sand Dogs
          vs Nashville Sounds</span>
      </div>
      <div className="col-span-2">
        <span className="text-sm font-normal text-white-mintix">Jun 22,</span>
        <span className="text-sm font-normal text-white-mintix">6:00 PM</span>
      </div>
      <div className="col-span-2">
        <span className="text-sm font-normal text-white-mintix">Dehler Park</span>
      </div>
      <div className="col-span-2">
        <span className="text-sm font-normal text-white-mintix">4,200</span>
      </div>
      <div>
        <StatusInfo />
      </div>
      <div className="">
        <span className="">...</span>
      </div>
    </div>
  )
}
