"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEvents } from "@/hooks/use-events";

const formSchema = z.object({
  title: z.string().min(3, "Título muito curto"),
  description: z.string().min(10, "Dê uma descrição melhor"),
  date: z.string(),
  location: z.string().min(3, "Localização obrigatória"),
});

type FormValues = z.infer<typeof formSchema>;

export function EventForm() {
  const { createEvent } = useEvents();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    createEvent(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("title")}
        placeholder="Título"
        className="w-full border p-2"
      />
      {errors.title && (
        <span className="text-red-500">{errors.title.message}</span>
      )}

      <button type="submit" className="rounded bg-blue-500 p-2 text-white">
        Criar Evento
      </button>
    </form>
  );
}
