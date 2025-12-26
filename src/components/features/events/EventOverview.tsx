"use client";

import { useState, useMemo } from "react";
import { useEvents } from "@/hooks/use-events";
import { motion } from "framer-motion"; // Importado para o Loading

import CardEvents from "./cards/CardEvents";
import IconButton from "../../ui/IconButton";
import SegmentedControl from "../../ui/SegmentedControl";
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

  // Chamada do Hook do Backend
  const { events, isLoading } = useEvents();

  // useMemo para evitar cálculos desnecessários a cada renderização
  const stats = useMemo(() => {
    const eventsArray = Array.isArray(events) ? events : [];

    return {
      total: eventsArray.length,
      upcoming: eventsArray.filter((e) => e.status === "upcoming").length,
      ongoing: eventsArray.filter((e) => e.status === "ongoing").length,
      cancelled: eventsArray.filter((e) => e.status === "cancelled").length,
    };
  }, [events]);

  if (isLoading) {
    return (
      <div className="flex h-[200px] w-full items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-8 w-8 rounded-full border-4 border-blue-500 border-t-transparent"
        />
        <span className="text-white-mintix ml-3 font-medium">
          Loading stats...
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-white-mintix text-lg font-semibold sm:text-base lg:text-lg">
          Event Overview
        </h3>

        <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
          <div className="min-w-0 flex-1 sm:flex-none">
            <SegmentedControl
              options={timeOptions}
              selectedValue={selectedTime}
              onChange={setSelectedTime}
              variant="small"
            />
          </div>

          <div className="shrink-0">
            <IconButton icon={GoGear} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <CardEvents
          icon={FaCalendar}
          size={12}
          className="bg-yellow-500"
          title="Total events"
          numberEvents={stats.total}
          percentage={10}
          subtitle="From the last week"
        />
        <CardEvents
          icon={FaClock}
          size={12}
          className="bg-blue-500"
          title="Upcoming events"
          numberEvents={stats.upcoming}
          percentage={12}
          subtitle="From the last week"
        />
        <CardEvents
          icon={IoEllipsisHorizontal}
          size={14}
          className="bg-green-500"
          title="Ongoing events"
          numberEvents={stats.ongoing}
          percentage={-12}
          subtitle="From the last week"
        />
        <CardEvents
          icon={IoClose}
          size={20}
          className="bg-red-500"
          title="Cancelled events"
          numberEvents={stats.cancelled}
          percentage={-5}
          subtitle="From the last week"
        />
      </div>
    </div>
  );
}
