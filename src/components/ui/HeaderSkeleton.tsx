"use client";
import { motion } from "framer-motion";

export default function HeaderSkeleton() {
  return (
    <nav className="w-full bg-[#0f1521] px-3.5 py-6 md:px-7.5">
      <div className="flex animate-pulse flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="h-4 w-40 rounded bg-gray-700 shadow-sm" />

        <div className="flex items-center gap-4 lg:gap-8">
          <div className="h-10 w-full rounded-lg bg-gray-800 md:w-64 lg:w-80" />

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-700" />
            <div className="flex flex-col gap-2">
              <div className="h-3 w-20 rounded bg-gray-700" />
              <div className="h-2 w-16 rounded bg-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
