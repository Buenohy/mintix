import { NextResponse } from "next/server";
import { eventService } from "@/service/event-service";
import { eventSchema } from "@/lib/validations/event-schema";
import { EventsResponse, SingleEventResponse } from "@/types/api";

export async function GET() {
  try {
    const events = await eventService.getAll();
    const response: EventsResponse = { data: events };
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validação Zod (Obrigatório na Task)
    const validatedData = eventSchema.parse(body);

    const result = await eventService.create(validatedData as any);

    // Pegar o ID inserido para retornar o objeto criado
    const newEvent = await eventService.getById(result[0].insertId);

    const response: SingleEventResponse = {
      data: newEvent,
      message: "Event created successfully",
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.errors || "Invalid event data" },
      { status: 400 },
    );
  }
}
