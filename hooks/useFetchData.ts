import { fetcher } from "@/lib/request";
import { useQuery, UseQueryResult,UseQueryOptions  } from "@tanstack/react-query";

export function useFetchData<T>(
  url: string,
  queryKey: string | readonly unknown[],
  options?: Partial<UseQueryOptions<T>>
): UseQueryResult<T> {
  return useQuery<T>({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: () => fetcher<T>(url),
    enabled: options?.enabled !== false,
  });
}
