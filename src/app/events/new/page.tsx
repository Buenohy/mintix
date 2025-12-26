"use client";

import { EventForm } from "@/components/features/events/EventForm";
import { motion } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

export default function NewEventPage() {
  return (
    <main className="min-h-screen bg-[#060910] p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            <FaChevronLeft size={12} />
            <span>Back to Events</span>
          </Link>
        </motion.div>

        <EventForm />
      </div>
    </main>
  );
}
