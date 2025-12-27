import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().min(10, "Description must be more detailed"),
  location: z.string().min(1, "Location is required"),
  startDate: z.preprocess(
    (arg) => (typeof arg === "string" ? new Date(arg) : arg),
    z.date(),
  ),
  endDate: z.preprocess(
    (arg) => (typeof arg === "string" ? new Date(arg) : arg),
    z.date(),
  ),
  price: z.coerce
    .number()
    .min(0, "Price cannot be negative")
    .transform((val) => String(val)),
  capacity: z.coerce.number().min(1, "Minimum capacity is 1"),
  imageUrl: z.string().url().optional().or(z.literal("")),
  status: z
    .enum(["upcoming", "ongoing", "completed", "cancelled"])
    .default("upcoming"),
});

export type EventInput = z.infer<typeof eventSchema>;
