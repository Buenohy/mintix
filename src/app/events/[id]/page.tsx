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
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-[#050810]">
      <main className="flex min-h-screen w-full max-w-360 flex-col overflow-x-hidden shadow-2xl">
        <Header />
        <div className="flex w-full flex-col gap-5 p-3.5 md:p-7.5">
          <EventsDetails event={event} />
        </div>
      </main>
    </div>
  );
}
