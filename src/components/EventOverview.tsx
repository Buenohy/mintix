"use client";

import { useState } from "react";
import { useEvents } from "@/hooks/use-events";

import CardEvents from "./CardEvents";
import IconButton from "./ui/IconButton";
import SegmentedControl from "./ui/SegmentedControl";
import { GoGear } from "react-icons/go";

import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function EventOverview() {
  const timeOptions = [
    { label: "1D", value: "1D" },
    { label: "7D", value: "7D" },
    { label: "1M", value: "1M" },
    { label: "3M", value: "3M" },
    { label: "Custom", value: "custom" },
  ];

  const [selectedTime, setSelectedTime] = useState("7D");

  const { events, isLoading } = useEvents();

  const total = events?.length || 0;
  const upcoming = events?.filter((e) => e.status === "upcoming").length || 0;
  const ongoing = events?.filter((e) => e.status === "ongoing").length || 0;
  const cancelled = events?.filter((e) => e.status === "cancelled").length || 0;

  if (isLoading) return <div className="text-white">Loading stats...</div>;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-white-mintix text-base font-semibold">
          Event Overiew
        </h3>
        <div className="flex items-center gap-3">
          <SegmentedControl
            options={timeOptions}
            selectedValue={selectedTime}
            onChange={setSelectedTime}
            variant="small"
          />
          <IconButton icon={GoGear} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 xl:grid-cols-4">
        <CardEvents
          icon={FaCalendar}
          size={12}
          className="bg-yellow-500"
          title="Total events"
          numberEvents={total.toLocaleString()}
          percentage={10}
          subtitle="From the last week"
        />
        <CardEvents
          icon={FaClock}
          size={12}
          className="bg-blue-500"
          title={upcoming.toLocaleString()}
          numberEvents="112"
          percentage={12}
          subtitle="From the last week"
        />
        <CardEvents
          icon={IoEllipsisHorizontal}
          size={14}
          className="bg-green-500"
          title={ongoing.toLocaleString()}
          numberEvents="5"
          percentage={-12}
          subtitle="From the last week"
        />
        <CardEvents
          icon={IoClose}
          size={20}
          className="bg-red-500"
          title="Cancelled events"
          numberEvents={cancelled.toLocaleString()}
          percentage={-5}
          subtitle="From the last week"
        />
      </div>
    </div>
  );
}
