import { db } from "@/db";
import { events } from "@/db/schema";
import { NextResponse } from "next/server";
import { z } from "zod";

const createEventSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  date: z.string().transform((str) => new Date(str)),
  location: z.string().min(3),
});

export async function GET() {
  try {
    const allEvents = await db.select().from(events);
    return NextResponse.json(allEvents);
  } catch (error) {
    console.error("ERRO NO BANCO DE DADOS:", error);
    return NextResponse.json(
      { message: "Erro ao buscar eventos", details: error },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = createEventSchema.parse(body);
    await db.insert(events).values(validatedData);
    return NextResponse.json(
      { message: "Evento criado com sucesso" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Erro na validação", error },
      { status: 400 },
    );
  }
}
