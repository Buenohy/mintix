"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEvents } from "@/hooks/use-events";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Pedido na Task

const formSchema = z.object({
  name: z.string().min(3, "Title too short"),
  description: z.string().min(10, "Description too short"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  location: z.string().min(3, "Location required"),
  category: z.string().min(1, "Category is required"),
  capacity: z.coerce.number().min(1, "Capacity must be at least 1"),
  price: z.coerce.number().min(0, "Price cannot be negative"),
  status: z.enum(["Upcoming", "Draft", "Cancelled"]).default("Upcoming"),
});

export function EventForm() {
  const { createEvent, isCreating } = useEvents();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: "Upcoming",
      price: 0,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await createEvent(data);
      alert("Event created successfully!");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-4xl rounded-xl border border-gray-800 bg-[#0B0F1A] p-6"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">Create New Event</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Event Name</label>
            <input
              {...register("name")}
              placeholder="Ex: Gastonia Ghost Peppers vs..."
              className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Category</label>
            <select
              {...register("category")}
              className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none"
            >
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="Technology">Technology</option>
            </select>
          </div>

          {/* Date & Time */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Start Date</label>
            <input
              type="datetime-local"
              {...register("startDate")}
              className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none"
            />
          </div>

          {/* Capacity */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Capacity</label>
            <input
              type="number"
              {...register("capacity")}
              className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none"
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">Description</label>
          <textarea
            {...register("description")}
            rows={4}
            className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 text-gray-400 transition-colors hover:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isCreating}
            className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-all hover:bg-blue-700 disabled:opacity-50"
          >
            {isCreating ? "Creating..." : "Create Event"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
