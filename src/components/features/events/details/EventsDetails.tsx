import { Event } from "@/db/schema";
import CardGameInfo from "../cards/CardGameInfo";
import CardGameTags from "../cards/CardGameTags";
import CardGameTeams from "../cards/CardGameTeams";
import CardTicketCollection from "../cards/CardTicketCollection";
import EventSummary from "./EventSummary";

type EventsDetailsProps = {
  event: Event;
};

export default function EventsDetails({ event }: EventsDetailsProps) {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <CardGameInfo event={event} />
        </div>

        <div className="lg:col-span-1">
          <EventSummary event={event} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <CardGameTeams event={event} />
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
