"use client";

import { useState } from "react";
import EventsHeader from "./EventsHeader";
import EventsInfo from "./EventsInfo";
import EventsSubtitle from "./EventsSubtitle";
import Pagination from "../../../ui/Pagination";

export default function Events() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="border-primary-border flex w-full flex-col overflow-hidden rounded-xl border bg-radial from-[#C6E1FF29] via-[#C6E1FF14] to-[#2362C91F] px-6 py-5">
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
