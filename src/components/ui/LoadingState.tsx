"use client";
import { motion } from "framer-motion";

export default function LoadingState() {
  return (
    <div className="flex h-24 w-full items-center justify-center gap-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="h-3 w-3 rounded-full bg-blue-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-400">
        Loading Events...
      </span>
    </div>
  );
}
