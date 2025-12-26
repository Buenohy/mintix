import {
  mysqlTable,
  serial,
  varchar,
  text,
  datetime,
  decimal,
  int,
  mysqlEnum,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  role: varchar("role", { length: 100 }).notNull(),
  avatarUrl: varchar("avatar_url", { length: 500 }),
});

export const events = mysqlTable("events", {
  id: serial("id").primaryKey(), // Ou varchar se preferir UUID
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  startDate: datetime("start_date").notNull(),
  endDate: datetime("end_date").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).default("0.00"),
  capacity: int("capacity").notNull(),
  ticketsSold: int("tickets_sold").default(0),
  imageUrl: varchar("image_url", { length: 500 }),
  status: mysqlEnum("status", [
    "upcoming",
    "ongoing",
    "completed",
    "cancelled",
  ]).default("upcoming"),
});

export type Event = typeof events.$inferSelect;
export type NewEvent = typeof events.$inferInsert;
export type User = typeof users.$inferSelect;
