import CardEvents from "./CardEvents";
import ConfigIcon from "./ConfigIcon";
import SearchDays from "./SearchDays";

export default function EventOverview() {
  return (
    <div>
      <div className="flex items-center justify-beetwen">
        <h3 className="text-white-mintix text-base font-semibold mr-145.25">Event Overiew</h3>
        <div className="flex gap-3 items-center">
        <SearchDays />
        <ConfigIcon />
        </div>
      </div>
        <div className="flex gap-9">
          <CardEvents 
          title="Total events"
          numberEvents="1,205"
          percentage={10}
          subtitle="From the last week"
          />
          <CardEvents 
          title="Upcoming events"
          numberEvents="112"
          percentage={12}
          subtitle="From the last week"
          />
          <CardEvents 
          title="Ongoing events"
          numberEvents="5"
          percentage={12}
          subtitle="From the last week"
          />
          <CardEvents 
          title="Cancelled events"
          numberEvents="104"
          percentage={12}
          subtitle="From the last week"
          />
        </div>
    </div>
  )
}
