"use client";

import { FaCalendar } from "react-icons/fa";
import { MdSportsBaseball } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { Event } from "@/db/schema";

type CardGameLocalProps = {
  event: Event;
};

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

export default function CardGameLocal({ event }: CardGameLocalProps) {
  return (
    <div className="border-primary-border flex flex-1 flex-col justify-center rounded-lg border bg-[#0b1120]/30">
      <div className="flex flex-col gap-3 px-4 py-5">
        <div className="flex items-center gap-3">
          <FaCalendar className="text-blue-500" size={13} />
          <span className="text-sm font-normal text-white">
            {formatDate(event.startDate)} - {formatDate(event.endDate)}
          </span>
          <span className="text-sm font-normal text-gray-400">
            (Local Time)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MdSportsBaseball className="text-blue-500" size={13} />
          <span className="text-sm font-normal text-white">Event Category</span>
        </div>

        <div className="flex items-center gap-3">
          <TiLocation className="text-blue-500" size={13} />
          <span className="text-sm font-normal text-white">
            {event.location}
          </span>
        </div>
      </div>
    </div>
  );
}
