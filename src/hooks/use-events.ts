import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { NewEvent } from "@/db/schema";
import {
  ApiResponse,
  EventsResponse,
  SingleEventResponse,
  UserResponse,
} from "@/types/api";

// Helper robusto para tratamento de erros e parsing
async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response
    .json()
    .catch(() => ({ error: "Invalid JSON response" }));
  if (!response.ok) {
    throw new Error(data?.error || "An error occurred");
  }
  return data as T;
}

export const useUser = () => {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const res = await fetch("/api/user");
      const json = await handleResponse<UserResponse>(res);
      return json.data;
    },
  });
};

export const useEvents = () => {
  const queryClient = useQueryClient();

  const eventsQuery = useQuery({
    queryKey: ["events"],
    queryFn: () => fetch("/api/events").then(handleResponse<EventsResponse>),
  });

  const createMutation = useMutation({
    mutationFn: (newEvent: any) =>
      fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      }).then(handleResponse<SingleEventResponse>),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<NewEvent> }) =>
      fetch(`/api/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(handleResponse<SingleEventResponse>),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["events", variables.id] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/events/${id}`, { method: "DELETE" }).then(
        handleResponse<ApiResponse<void>>,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });

  return {
    events: eventsQuery.data?.data ?? [],
    isLoading: eventsQuery.isLoading,
    isError: eventsQuery.isError,
    error: eventsQuery.error,
    createEvent: createMutation.mutateAsync,
    updateEvent: updateMutation.mutateAsync,
    deleteEvent: deleteMutation.mutateAsync,
    isCreating: createMutation.isPending,
    isDeleting: deleteMutation.isPending,
    isUpdating: updateMutation.isPending,
  };
};

export const useEvent = (id: string) => {
  return useQuery({
    queryKey: ["events", id],
    queryFn: () =>
      fetch(`/api/events/${id}`).then(handleResponse<SingleEventResponse>),
    enabled: !!id,
    select: (data) => data.data,
  });
};
