import CardGameInfo from "./CardGameInfo";
import CardGameTags from "./CardGameTags";
import CardGameTeams from "./CardGameTeams";
import CardTicketCollection from "./CardTicketCollection";
import EventSummary from "./EventSummary";

export default function EventsDetails() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <CardGameInfo />
        <EventSummary />
      </div>
      <div className="flex gap-3">
        <CardGameTeams />
        <CardGameTags />
      </div>
      <div>
        <CardTicketCollection />
      </div>
    </div>
  );
}
