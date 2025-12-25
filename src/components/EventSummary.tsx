"use client";
import { useState } from "react";
import CardEventSummary from "./CardEventSummary";
import { TbTicket, TbMoneybag } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";
import StepPagination from "./ui/StepPagination";

export default function EventSummary() {
  const [current, setCurrent] = useState(0);

  return (
    // h-full garante que ele se alinhe com a altura do card da esquerda no desktop
    <div className="border-primary-border flex h-full flex-col rounded-xl border bg-[#050810]/50 p-5">
      <span className="text-white-mintix mb-6 block text-base font-semibold">
        Event Summary
      </span>

      {/* O flex-1 aqui empurra a paginação para o rodapé do card */}
      <div className="flex flex-1 flex-col gap-4">
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

      <div className="border-primary-border mt-8 flex items-center justify-center border-t pt-4">
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
