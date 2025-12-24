import EventOverview from "@/components/EventOverview";
import Events from "@/components/Events";
import Header from "@/components/Header";

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-[#050810]">
      <main className="flex min-h-screen w-full max-w-360 flex-col overflow-x-hidden bg-white shadow-2xl dark:bg-[#050810]">
        <Header />
        <div className="flex w-full flex-col gap-5 p-7.5">
          <EventOverview />
          <Events />
        </div>
      </main>
    </div>
  );
}
