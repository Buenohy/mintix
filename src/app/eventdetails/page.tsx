import EventsDetails from "@/components/EventsDetails";
import Header from "@/components/Header";

export default function EventDetailsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[#050810]">
      <main className="flex min-h-screen w-full flex-col items-center bg-white sm:items-start dark:bg-[#050810]">
        <Header />
        <div className="flex flex-col gap-5 p-7.5">
          <EventsDetails />
        </div>
      </main>
    </div>
  );
}
