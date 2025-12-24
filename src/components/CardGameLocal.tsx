import { FaCalendar } from "react-icons/fa";
import { MdSportsBaseball } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

export default function CardGameLocal() {
  return (
    <div className="border-primary-border h-full w-218.5 rounded-lg border">
      <div className="flex flex-col gap-3 px-4 py-5">
        <div className="flex items-center gap-3">
          <FaCalendar className="text-primary-mintix" size={13} />
          <span className="text-white-mintix text-sm font-normal">
            26 July, 2025 - 30 July, 2025
          </span>
          <span className="text-gray-mintix text-sm font-normal">
            (GMT-6 Central Time)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <MdSportsBaseball className="text-primary-mintix" size={13} />
          <span className="text-white-mintix text-sm font-normal">
            Sports, Baseball
          </span>
        </div>
        <div className="flex items-center gap-3">
          <TiLocation className="text-primary-mintix" size={13} />
          <span className="text-white-mintix text-sm font-normal">
            First Horizon Park, Jr Gilliam Wy, Nashville, TN
          </span>
        </div>
      </div>
    </div>
  );
}
