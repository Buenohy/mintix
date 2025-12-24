import { db } from "@/db";
import { events } from "@/db/schema";
import { NextResponse } from "next/server";
import { z } from "zod";

const eventSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  date: z.string().transform((str) => new Date(str)),
  location: z.string().min(3),
});

export type CreateEventInput = z.infer<typeof eventSchema>;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = eventSchema.parse(body);

    await db.insert(events).values(validatedData);

    return NextResponse.json(
      { message: "Evento criado com sucesso" },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: "Erro interno" }, { status: 500 });
  }
}

export async function GET() {
  const allEvents = await db.select().from(events);
  return NextResponse.json(allEvents);
}
