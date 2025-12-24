"use client";

import { useState } from "react";
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
      <div className="flex gap-9">
        <CardEvents
          icon={FaCalendar}
          size={12}
          className="bg-yellow-500"
          title="Total events"
          numberEvents="1,205"
          percentage={10}
          subtitle="From the last week"
        />
        <CardEvents
          icon={FaClock}
          size={12}
          className="bg-blue-500"
          title="Upcoming events"
          numberEvents="112"
          percentage={12}
          subtitle="From the last week"
        />
        <CardEvents
          icon={IoEllipsisHorizontal}
          size={14}
          className="bg-green-500"
          title="Ongoing events"
          numberEvents="5"
          percentage={-12}
          subtitle="From the last week"
        />
        <CardEvents
          icon={IoClose}
          size={20}
          className="bg-red-500"
          title="Cancelled events"
          numberEvents="104"
          percentage={-5}
          subtitle="From the last week"
        />
      </div>
    </div>
  );
}
