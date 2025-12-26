"use client";

import { useParams } from "next/navigation";
import { useEvent } from "@/hooks/use-events";
import EventsDetails from "@/components/features/events/details/EventsDetails";
import Header from "@/components/layout/Header";
import LoadingState from "@/components/ui/LoadingState";

export default function DetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: event, isLoading } = useEvent(id);

  if (isLoading) return <LoadingState />;
  if (!event) return <div className="p-10 text-white">Event not found.</div>;

  return (
    <div className="flex min-h-screen flex-col bg-[#050810] font-sans">
      <Header />
      <main className="mx-auto w-full max-w-360 px-4 py-6 md:px-7.5">
        <EventsDetails event={event} />
      </main>
    </div>
  );
}
