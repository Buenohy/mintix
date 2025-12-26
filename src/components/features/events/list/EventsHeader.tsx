"use client";

import { useEvents } from "@/hooks/use-events"; // Importando o hook
import IconButton from "../../../ui/IconButton";
import FilterButton from "../../../ui/FilterButton";
import SearchBar from "../../../layout/SearchBar";
import CreateEventButton from "../../../ui/CreateEventButton";
import { FaPlus } from "react-icons/fa";
import { HiOutlineUpload } from "react-icons/hi";
import Link from "next/link";

export default function EventsHeader() {
  const { events } = useEvents();

  const totalEvents = events?.length || 0;
  const formattedTotal = totalEvents.toLocaleString();

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-baseline gap-2">
        <span className="text-white-mintix text-xl font-semibold">Events</span>
        <span className="text-gray-mintix text-sm">({formattedTotal})</span>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
        <div className="w-full sm:flex-1 lg:w-64 xl:w-80">
          <SearchBar placeholder="Search by event, location" />
        </div>

        <div className="mb-3 flex shrink-0 items-center justify-between gap-2 sm:mb-0 sm:justify-end sm:gap-3">
          <FilterButton />
          <IconButton icon={HiOutlineUpload} />

          <div className="flex-1 sm:flex-none">
            <Link href="/events/new">
              <CreateEventButton icon={FaPlus} title="Create Event" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
