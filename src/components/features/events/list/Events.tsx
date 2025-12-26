"use client";

import { useState } from "react";
import EventsHeader from "./EventsHeader";
import EventsInfo from "./EventsInfo";
import EventsSubtitle from "./EventsSubtitle";
import Pagination from "../../../ui/Pagination";
import { useEvents } from "@/hooks/use-events";
import LoadingState from "@/components/ui/LoadingState";

export default function Events() {
  const [currentPage, setCurrentPage] = useState(1);
  const { events, isLoading } = useEvents();

  const eventsPerPage = 10;
  const totalPages = Math.ceil(events.length / eventsPerPage) || 1;

  if (isLoading) return <LoadingState />;

  return (
    <div className="border-primary-border flex w-full flex-col overflow-hidden rounded-xl border bg-radial from-[#C6E1FF29] via-[#C6E1FF14] to-[#2362C91F] px-6 py-5">
      <EventsHeader />
      <EventsSubtitle />

      {events.length > 0 ? (
        events.map((event) => <EventsInfo key={event.id} event={event} />)
      ) : (
        <div className="text-gray-mintix py-10 text-center">
          No events found in the database.
        </div>
      )}

      <div className="mt-12 flex items-center justify-center sm:items-start sm:justify-start">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
