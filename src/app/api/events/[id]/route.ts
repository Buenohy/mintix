import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { eventService } from "@/service/event-service";
import { eventSchema } from "@/lib/validations/event-schema";
import { SingleEventResponse, ApiResponse } from "@/types/api";

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const eventId = Number(id);

    if (isNaN(eventId)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    const event = await eventService.getById(eventId);

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    const response: SingleEventResponse = { data: event };
    return NextResponse.json(response);
  } catch (error) {
    console.error("GET /api/events/[id] error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const eventId = Number(id);

    if (isNaN(eventId)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    const body = await req.json();

    const validatedData = eventSchema.partial().parse(body);

    await eventService.update(eventId, validatedData);
    const updatedEvent = await eventService.getById(eventId);

    if (!updatedEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    const response: SingleEventResponse = {
      data: updatedEvent,
      message: "Event updated successfully",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("PUT /api/events/[id] error:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 },
      );
    }

    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const eventId = Number(id);

    if (isNaN(eventId)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    await eventService.delete(eventId);

    const response: ApiResponse<void> = {
      message: "Event deleted successfully",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("DELETE /api/events/[id] error:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
