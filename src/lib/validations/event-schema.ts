import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
  description: z.string().min(10, "A descrição deve ser mais detalhada"),
  location: z.string().min(1, "Localização é obrigatória"),
  startDate: z.preprocess(
    (arg) => (typeof arg === "string" ? new Date(arg) : arg),
    z.date(),
  ),
  endDate: z.preprocess(
    (arg) => (typeof arg === "string" ? new Date(arg) : arg),
    z.date(),
  ),
  price: z.coerce.number().min(0, "Preço não pode ser negativo"),
  capacity: z.coerce.number().min(1, "Capacidade mínima de 1"),
  imageUrl: z.string().url().optional().or(z.literal("")),
  status: z
    .enum(["upcoming", "ongoing", "completed", "cancelled"])
    .default("upcoming"),
});

export type EventInput = z.infer<typeof eventSchema>;
