import { prefetch, trpc } from '@/trpc/server';

import type { inferInput } from '@trpc/tanstack-react-query';

type Input = inferInput<typeof trpc.credentials.getMany>;

/**
 * 
 * Prefetch For All Credentials
 */
export const prefetchCredentials = (params: Input) => {
  prefetch(trpc.credentials.getMany.queryOptions(params));
}

/**
 * Prefetch Single Credentials
 */
export const prefetchCredential = (id: string) => {
  prefetch(trpc.credentials.getOne.queryOptions({ id }));
}