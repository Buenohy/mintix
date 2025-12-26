import { NextResponse } from "next/server";
import { eventService } from "@/service/event-service";
import { eventSchema } from "@/lib/validations/event-schema";
import { SingleEventResponse, ApiResponse } from "@/types/api";

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(req: Request, { params }: RouteParams) {
  try {
    const { id } = await params;

    const event = await eventService.getById(Number(id));
    if (!event)
      return NextResponse.json({ error: "Event not found" }, { status: 404 });

    const response: SingleEventResponse = { data: event };
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await req.json();

    const validatedData = eventSchema.partial().parse(body);

    await eventService.update(Number(id), validatedData as any);
    const updatedEvent = await eventService.getById(Number(id));

    const response: SingleEventResponse = {
      data: updatedEvent,
      message: "Event updated successfully",
    };
    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json({ error: "Update failed" }, { status: 400 });
  }
}

export async function DELETE(req: Request, { params }: RouteParams) {
  try {
    const { id } = await params;

    await eventService.delete(Number(id));
    const response: ApiResponse<void> = {
      message: "Event deleted successfully",
    };
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
