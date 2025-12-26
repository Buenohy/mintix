"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuPencilLine } from "react-icons/lu";
import { MdBlock } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

import IconButton from "../../../ui/IconButton";
import CardGameLocal from "./CardGameLocal";
import CardGameOrganizer from "./CardGameOrganizer";
import DraftStatus from "../../../ui/DraftStatus";
import { Event } from "@/db/schema";
import { useEvents } from "@/hooks/use-events";

type CardGameInfoProps = {
  event: Event;
};

export default function CardGameInfo({ event }: CardGameInfoProps) {
  const router = useRouter();
  const { deleteEvent, isDeleting } = useEvents();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?",
    );

    if (confirmed) {
      try {
        await deleteEvent(String(event.id));
        router.push("/events");
      } catch (error) {
        console.error("Failed to delete event:", error);
      }
    }
  };

  return (
    <div className="border-primary-border flex w-full flex-col gap-6 rounded-xl border bg-[#050810]/50 px-4 py-5 md:px-6">
      {/* Banner Image */}
      <div className="relative h-48 w-full md:h-60">
        <Image
          src={event.imageUrl || "/images/baseball-field.jpg"}
          alt={event.title}
          fill
          className="rounded-2xl object-cover"
          priority
        />
      </div>

      <div className="flex flex-col gap-4 px-2 md:flex-row md:items-start md:gap-6">
        {/* Profile/Logo Image */}
        <div className="relative z-10 -mt-12 self-start md:-mt-16">
          <div className="rounded-full bg-[#0b1120] p-1.5 shadow-xl">
            <div className="h-20 w-20 overflow-hidden rounded-full md:h-28 md:w-28">
              <Image
                src="/images/gastonia-ghost-peppers.png"
                alt="Logo"
                width={112}
                height={112}
                className="bg-[#93c5fd] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content Header */}
        <div className="flex flex-1 flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
          <h2 className="text-white-mintix text-lg leading-tight font-bold md:text-xl">
            {event.title}
          </h2>

          <div className="flex items-center gap-3">
            <DraftStatus />
            <div className="flex gap-2">
              <Link href={`/events/${event.id}/edit`}>
                <IconButton icon={LuPencilLine} />
              </Link>

              <IconButton icon={MdBlock} />

              <IconButton
                icon={FaRegTrashAlt}
                onClick={handleDelete}
                disabled={isDeleting}
                className={
                  isDeleting
                    ? "cursor-not-allowed opacity-50"
                    : "text-red-500 hover:bg-red-500/10"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-mintix text-sm leading-relaxed">
        {event.description}
      </p>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
        <div className="flex-1">
          <CardGameLocal event={event} />
        </div>
        <div className="flex min-w-70 flex-col gap-3">
          <CardGameOrganizer
            title="Policy"
            subtitle="Gastonia Ghost Peppers Policy"
          />
          <CardGameOrganizer
            title="Organizer"
            image="/images/gastonia-ghost-peppers.png"
            subtitle="Gastonia Ghost Peppers"
          />
        </div>
      </div>
    </div>
  );
}
