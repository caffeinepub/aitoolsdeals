import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Tool } from '../backend';

export function useGetAllTools() {
  const { actor, isFetching } = useActor();

  return useQuery<Tool[]>({
    queryKey: ['tools'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTools();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000, // 5 minutes - data is fresh for 5 min
    gcTime: 10 * 60 * 1000, // 10 minutes - keep in cache for 10 min
    refetchOnWindowFocus: false, // Don't refetch on tab focus for landing page
    refetchOnReconnect: false, // Don't refetch on reconnect for landing page
  });
}

export function useSearchTools(searchTerm: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Tool[]>({
    queryKey: ['tools', 'search', searchTerm],
    queryFn: async () => {
      if (!actor) return [];
      return actor.searchTools(searchTerm);
    },
    enabled: !!actor && !isFetching && searchTerm.length > 0,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

export function useFilterByCategory(category: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Tool[]>({
    queryKey: ['tools', 'category', category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.filterByCategory(category);
    },
    enabled: !!actor && !isFetching && category !== '',
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

export function useGetCategories() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCategories();
    },
    enabled: !!actor && !isFetching,
    staleTime: 10 * 60 * 1000, // Categories change rarely
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
