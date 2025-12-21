import ConfigIcon from "./ConfigIcon";
import SearchDays from "./SearchDays";

export default function EventOverview() {
  return (
    <div className="p-7.5">
      <div className="flex items-center justify-beetwen">
        <h3 className="text-white-mintix text-base font-semibold mr-145.25">Event Overiew</h3>
        <div className="flex gap-3 items-center">
        <SearchDays />
        <ConfigIcon />
        </div>
      </div>
      <div></div>
    </div>
  )
}
