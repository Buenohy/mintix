import EventOverview from "@/components/features/events/EventOverview";
import Events from "@/components/features/events/list/Events";
import Header from "@/components/layout/Header";

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-[#050810]">
      <main className="flex min-h-screen w-full max-w-360 flex-col overflow-x-hidden shadow-2xl">
        <Header />
        <div className="flex w-full flex-col gap-5 p-3.5 md:p-7.5">
          <EventOverview />
          <Events />
        </div>
      </main>
    </div>
  );
}
