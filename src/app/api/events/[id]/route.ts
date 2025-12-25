import { db } from "@/db";
import { events } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";

const updateEventSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().min(10).optional(),
  date: z
    .string()
    .transform((str) => new Date(str))
    .optional(),
  location: z.string().min(3).optional(),
});

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const result = await db
      .select()
      .from(events)
      .where(eq(events.id, Number(params.id)));
    if (result.length === 0)
      return NextResponse.json({ message: "404" }, { status: 404 });
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const body = await req.json();
    const validatedData = updateEventSchema.parse(body);
    await db
      .update(events)
      .set(validatedData)
      .where(eq(events.id, Number(params.id)));
    return NextResponse.json({ message: "Atualizado" });
  } catch (error) {
    return NextResponse.json({ message: "Erro" }, { status: 400 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    await db.delete(events).where(eq(events.id, Number(params.id)));
    return NextResponse.json({ message: "Deletado" });
  } catch (error) {
    return NextResponse.json({ message: "Erro" }, { status: 500 });
  }
}
