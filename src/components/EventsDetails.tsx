import CardGameInfo from "./CardGameInfo";
import EventSummary from "./EventSummary";

export default function EventsDetails() {
  return (
    <div>
      <div className="flex gap-5">
      <CardGameInfo />
      <EventSummary />
      </div>
    </div>
  )
}
