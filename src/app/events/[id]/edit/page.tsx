"use client";

import { useParams, useRouter } from "next/navigation";
import { useEvent } from "@/hooks/use-events";
import { EventForm } from "@/components/features/events/EventForm";
import { motion } from "framer-motion";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import Link from "next/link";

export default function EditEventPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const { data: event, isLoading, isError } = useEvent(id);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#060910] text-white">
        <FaSpinner className="mb-4 animate-spin text-blue-500" size={40} />
        <p className="text-gray-400">Loading event data...</p>
      </div>
    );
  }

  if (isError || !event) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#060910] text-white">
        <h2 className="text-2xl font-bold">Event not found</h2>
        <p className="mb-6 text-gray-400">
          The event you are trying to edit does not exist.
        </p>
        <Link
          href="/events"
          className="rounded-lg bg-blue-600 px-6 py-2 transition-colors hover:bg-blue-700"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#060910] p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            <FaChevronLeft size={12} />
            <span className="text-sm font-medium">Back</span>
          </button>
        </motion.div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Edit Event</h1>
          <p className="text-gray-400">
            Update the information for "{event.title}"
          </p>
        </div>

        <EventForm initialData={event} isEditing={true} id={id} />
      </div>
    </main>
  );
}
