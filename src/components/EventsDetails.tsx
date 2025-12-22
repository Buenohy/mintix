import CardGameInfo from "./CardGameInfo";
import CardGameTeams from "./CardGameTeams";
import EventSummary from "./EventSummary";

export default function EventsDetails() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <CardGameInfo />
        <EventSummary />
      </div>
      <div>
        <CardGameTeams />
      </div>
    </div>
  );
}
