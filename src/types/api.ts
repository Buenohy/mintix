import { Event, User } from "@/db/schema";

export type ApiResponse<T> = {
  data?: T;
  error?: string;
  message?: string;
};

export type EventsResponse = ApiResponse<Event[]>;
export type SingleEventResponse = ApiResponse<Event>;
export type UserResponse = ApiResponse<User>;
