import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
  description: z.string().min(10, "A descrição deve ser mais detalhada"),
  location: z.string().min(3, "Localização é obrigatória"),
  startDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  endDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  price: z.number().min(0).optional().default(0),
  capacity: z.number().min(1, "Capacidade deve ser pelo menos 1"),
  imageUrl: z.string().url("URL de imagem inválida").optional(),
  status: z.enum(["upcoming", "ongoing", "completed", "cancelled"]).optional(),
});

export type EventInput = z.infer<typeof eventSchema>;
