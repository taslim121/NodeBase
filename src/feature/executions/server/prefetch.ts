import { prefetch, trpc } from '@/trpc/server';

import type { inferInput } from '@trpc/tanstack-react-query';

type Input = inferInput<typeof trpc.executions.getMany>;

/**
 * 
 * Prefetch For All Executions
 */
export const prefetchExecutions = (params: Input) => {
  prefetch(trpc.executions.getMany.queryOptions(params));
}

/**
 * Prefetch Single Executions
 */
export const prefetchExecution = (id: string) => {
  prefetch(trpc.executions.getOne.queryOptions({ id }));
}