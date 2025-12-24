"use client";

import { useState } from "react";
import SegmentedControl from "./ui/SegmentedControl";
import CreateEventButton from "./ui/CreateEventButton";
import IconButton from "./ui/IconButton";
import { BsFullscreen } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

export default function CardTicketCollection() {
  const timeOptions = [
    { label: "Ticket Collections", value: "Ticket Collections" },
    { label: "Ticket Categories", value: "Ticket Categories" },
    { label: "Attendee List", value: "Attendee List" },
    { label: "Promotions / Discounts", value: "Promotions / Discounts" },
    { label: "Seat chart", value: "Seat chart" },
  ];

  const [selectedTime, setSelectedTime] = useState("7D");
  return (
    <div className="border-primary-border flex h-84 flex-col gap-9 rounded-xl border px-7 py-6">
      <div>
        <SegmentedControl
          options={timeOptions}
          selectedValue={selectedTime}
          onChange={setSelectedTime}
          variant="large"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="text-white-mintix text-base font-semibold">
            Ticket Collection
          </span>
          <div className="flex items-center gap-3">
            <IconButton icon={BsFullscreen} className="px-2 py-1.5" />
            <CreateEventButton title="Attach Collection" icon={FaPlus} />
          </div>
        </div>
        <div className="mt-11 flex flex-col justify-center gap-5 text-center">
          <span className="text-white-mintix text-base font-semibold">
            No Ticket Collection Attached
          </span>
          <span className="text-gray-mintix text-sm font-normal">
            Attach a ticket collection to enable publishing and sales.
          </span>
        </div>
      </div>
    </div>
  );
}
