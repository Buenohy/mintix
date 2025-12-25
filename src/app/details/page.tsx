import EventsDetails from "@/components/features/events/details/EventsDetails";
import Header from "@/components/layout/Header";

export default function DetailsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050810] font-sans">
      <Header />
      <main className="mx-auto w-full max-w-360 px-4 py-6 md:px-7.5">
        <EventsDetails />
      </main>
    </div>
  );
}
