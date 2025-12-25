"use client";

import { useState } from "react";
import SegmentedControl from "../../../ui/SegmentedControl";
import CreateEventButton from "../../../ui/CreateEventButton";
import IconButton from "../../../ui/IconButton";
import { BsFullscreen } from "react-icons/bs";

import { FaPlus } from "react-icons/fa";

export default function CardTicketCollection() {
  const stagesOptions = [
    { label: "Ticket Collections", value: "Ticket Collections" },
    { label: "Ticket Categories", value: "Ticket Categories" },
    { label: "Attendee List", value: "Attendee List" },
    { label: "Promotions / Discounts", value: "Promotions / Discounts" },
    { label: "Seat chart", value: "Seat chart" },
  ];

  const [selectedStage, setselectedStage] = useState("Ticket Collections");

  return (
    <div className="border-primary-border flex min-h-100 w-full flex-col gap-6 rounded-xl border bg-[#050810]/50 p-4 md:gap-9 md:p-7">
      <div className="scrollbar-hide -mx-4 overflow-x-auto px-4 pb-4 lg:mx-0 lg:overflow-visible lg:px-0">
        <div className="flex min-w-max flex-nowrap">
          <SegmentedControl
            options={stagesOptions}
            selectedValue={selectedStage}
            onChange={setselectedStage}
            variant="large"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-white-mintix text-base font-semibold">
            Ticket Collection
          </span>
          <div className="flex items-center gap-3">
            <IconButton icon={BsFullscreen} className="shrink-0 px-2 py-1.5" />
            <div className="flex-1 shrink-0 sm:flex-none">
              <CreateEventButton title="Attach Collection" icon={FaPlus} />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
          <div className="max-w-xs space-y-2">
            <span className="text-white-mintix block text-base font-semibold">
              No Ticket Collection Attached
            </span>
            <span className="text-gray-mintix text-sm font-normal">
              Attach a ticket collection to enable publishing and sales.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
