import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { eventService } from "@/service/event-service";
import { eventSchema } from "@/lib/validations/event-schema";
import { EventsResponse, SingleEventResponse } from "@/types/api";

export async function GET() {
  try {
    const events = await eventService.getAll();
    const response: EventsResponse = {
      data: events,
    };
    return NextResponse.json(response);
  } catch (error) {
    console.error("GET /api/events error:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validatedData = eventSchema.parse(body);

    const result = await eventService.create(validatedData);

    const rows = result as unknown as { insertId: number }[];
    const id = rows[0].insertId;

    const newEvent = await eventService.getById(id);

    if (!newEvent) {
      return NextResponse.json(
        { error: "Failed to retrieve created event" },
        { status: 500 },
      );
    }

    const response: SingleEventResponse = {
      data: newEvent,
      message: "Event created successfully",
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: error.issues,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
