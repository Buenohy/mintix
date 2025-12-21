import ChangePages from "./ChangePages";
import EventsHeader from "./EventsHeader";
import EventsInfo from "./EventsInfo";
import EventsSubtitle from "./EventsSubtitle";

export default function Events() {
  return (
    <div className="border rounded-xl px-6 py-5 border-primary-border bg-radial from-[#C6E1FF29] via-[#C6E1FF14] to-[#2362C91F] flex flex-col">
      <EventsHeader />
      <EventsSubtitle />
      <EventsInfo />
      <EventsInfo />
      <EventsInfo />
      <EventsInfo />
      <EventsInfo />
      <EventsInfo />
      <EventsInfo />
      <EventsInfo />
      <EventsInfo />
      <ChangePages />
    </div>
  )
}
