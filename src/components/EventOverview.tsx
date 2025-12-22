import CardEvents from "./CardEvents";
import IconButton from "./ui/IconButton";
import SearchDays from "./SearchDays";
import { GoGear } from "react-icons/go";

export default function EventOverview() {
  return (
    <div>
      <div className="justify-beetwen flex items-center">
        <h3 className="text-white-mintix mr-145.25 text-base font-semibold">
          Event Overiew
        </h3>
        <div className="flex items-center gap-3">
          <SearchDays />
          <IconButton icon={GoGear} />
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
  );
}
