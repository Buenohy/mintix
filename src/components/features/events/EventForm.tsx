"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { z } from "zod";
import { useEvents } from "@/hooks/use-events";
import { eventSchema } from "@/lib/validations/event-schema";
import { Event } from "@/db/schema";

type EventFormValues = z.input<typeof eventSchema>;

type EventFormProps = {
  initialData?: Event;
  isEditing?: boolean;
  id?: string;
};

const formatDateForInput = (date: Date | null | undefined): string => {
  if (!date) return "";
  const d = new Date(date);
  return d.toISOString().slice(0, 16);
};

export function EventForm({ initialData, isEditing, id }: EventFormProps) {
  const { createEvent, updateEvent, isCreating, isUpdating } = useEvents();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: initialData
      ? {
          title: initialData.title,
          description: initialData.description,
          location: initialData.location,
          price: Number(initialData.price),
          capacity: initialData.capacity,
          status: initialData.status ?? "upcoming",
          imageUrl: initialData.imageUrl ?? "",
          startDate: formatDateForInput(initialData.startDate),
          endDate: formatDateForInput(initialData.endDate),
        }
      : {
          title: "",
          description: "",
          location: "",
          price: 0,
          capacity: 1,
          status: "upcoming",
          imageUrl: "",
        },
  });

  const onSubmit = async (data: EventFormValues) => {
    try {
      if (isEditing && id) {
        await updateEvent({
          id,
          data: data as any,
        });
      } else {
        await createEvent(data as any);
      }

      router.push("/events");
      router.refresh();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-4xl rounded-xl border border-gray-800 bg-[#0B0F1A] p-6 shadow-2xl"
    >
      <header className="mb-8 border-b border-gray-800 pb-4">
        <h2 className="text-2xl font-bold text-white">
          {isEditing ? "Edit Event" : "Create New Event"}
        </h2>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              Event Title
            </label>
            <input
              {...register("title")}
              className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <p className="text-xs text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              Location
            </label>
            <input
              {...register("location")}
              className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.location && (
              <p className="text-xs text-red-500">{errors.location.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              Start Date
            </label>
            <input
              type="datetime-local"
              {...register("startDate")}
              className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none"
            />
            {errors.startDate && (
              <p className="text-xs text-red-500">{errors.startDate.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              End Date
            </label>
            <input
              type="datetime-local"
              {...register("endDate")}
              className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none"
            />
            {errors.endDate && (
              <p className="text-xs text-red-500">{errors.endDate.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("price")}
              className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              Capacity
            </label>
            <input
              type="number"
              {...register("capacity")}
              className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-400">
            Description
          </label>
          <textarea
            {...register("description")}
            rows={4}
            className="rounded-lg border border-gray-700 bg-[#161B26] p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-8 flex justify-end gap-4 border-t border-gray-800 pt-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 text-gray-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isCreating || isUpdating}
            className="rounded-lg bg-blue-600 px-8 py-2 font-bold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isCreating || isUpdating
              ? "Saving..."
              : isEditing
                ? "Update Event"
                : "Create Event"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
