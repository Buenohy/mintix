"use client";

import { useState } from "react";

import CardEventSummary from "./CardEventSummary";
import { TbTicket } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";
import StepPagination from "./ui/StepPagination";

export default function EventSummary() {
  const [current, setCurrent] = useState(0);
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
          value="2,000"
        />
        <CardEventSummary
          icon={TbMoneybag}
          className="bg-green-500"
          title="Total Revenue"
          value="$87,120"
        />
        <CardEventSummary
          icon={IoPeopleSharp}
          className="bg-cyan-500"
          title="Unique Attendees"
          value="1,398"
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
