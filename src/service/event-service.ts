import { db } from "@/db";
import { events, type Event, type NewEvent } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export const eventService = {
  async getAll(): Promise<Event[]> {
    return await db.select().from(events).orderBy(desc(events.startDate));
  },

  async getById(id: number): Promise<Event | undefined> {
    const result = await db.select().from(events).where(eq(events.id, id));
    return result[0];
  },

  async create(data: NewEvent) {
    return await db.insert(events).values(data);
  },

  async update(id: number, data: Partial<NewEvent>) {
    return await db.update(events).set(data).where(eq(events.id, id));
  },

  async delete(id: number) {
    return await db.delete(events).where(eq(events.id, id));
  },
};
