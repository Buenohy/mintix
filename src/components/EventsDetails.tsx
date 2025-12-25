import CardGameInfo from "./CardGameInfo";
import CardGameTags from "./CardGameTags";
import CardGameTeams from "./CardGameTeams";
import CardTicketCollection from "./CardTicketCollection";
import EventSummary from "./EventSummary";

export default function EventsDetails() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <CardGameInfo />
        </div>

        <div className="lg:col-span-1">
          <EventSummary />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <CardGameTeams />
        </div>

        <div className="lg:col-span-3">
          <CardGameTags />
        </div>
      </div>

      <div className="w-full">
        <CardTicketCollection />
      </div>
    </div>
  );
}
