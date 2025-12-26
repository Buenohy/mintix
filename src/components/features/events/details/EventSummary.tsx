"use client";

import { useState } from "react";
import CardEventSummary from "../cards/CardEventSummary";
import { TbTicket } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";
import StepPagination from "../../../ui/StepPagination";
import { Event } from "@/db/schema";

type EventSummaryProps = {
  event: Event;
};

export default function EventSummary({ event }: EventSummaryProps) {
  const [current, setCurrent] = useState(0);

  const revenue = (
    Number(event.price) * (event.ticketsSold || 0)
  ).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="border-primary-border rounded-xl border p-5">
      <span className="text-md text-white-mintix mb-6.5 block font-semibold">
        Event Summary
      </span>
      <div className="grid grid-cols-1">
        <CardEventSummary
          icon={TbTicket}
          className="bg-blue-500"
          title="Total Tickets Sold"
          value={event.ticketsSold?.toLocaleString() || "0"}
        />
        <CardEventSummary
          icon={TbMoneybag}
          className="bg-green-500"
          title="Total Revenue"
          value={revenue}
        />
        <CardEventSummary
          icon={IoPeopleSharp}
          className="bg-cyan-500"
          title="Unique Attendees"
          value={event.ticketsSold?.toLocaleString() || "0"}
        />
      </div>
      <div className="mt-4 flex items-center justify-center">
        <StepPagination
          currentStep={current}
          totalSteps={3}
          onNext={() => setCurrent((prev) => prev + 1)}
          onPrev={() => setCurrent((prev) => prev - 1)}
        />
      </div>
    </div>
  );
}
