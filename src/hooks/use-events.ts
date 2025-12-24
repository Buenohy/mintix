import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Event, NewEvent } from "@/db/schema";

export const useEvents = () => {
  const queryClient = useQueryClient();

  const eventsQuery = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: () => fetch("/api/events").then((res) => res.json()),
  });

  const createMutation = useMutation({
    mutationFn: (newEvent: NewEvent) =>
      fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<NewEvent> }) =>
      fetch(`/api/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["events", variables.id] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      fetch(`/api/events/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });

  return {
    events: eventsQuery.data,
    isLoading: eventsQuery.isLoading,
    isError: eventsQuery.isError,
    createEvent: createMutation.mutate,
    updateEvent: updateMutation.mutate,
    deleteEvent: deleteMutation.mutate,
    isCreating: createMutation.isPending,
    isDeleting: deleteMutation.isPending,
    isUpdating: updateMutation.isPending,
  };
};

export const useEvent = (id: number) => {
  return useQuery<Event>({
    queryKey: ["events", id],
    queryFn: () => fetch(`/api/events/${id}`).then((res) => res.json()),
    enabled: !!id,
  });
};
