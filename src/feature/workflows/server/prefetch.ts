import { HydrateClient, prefetch, trpc } from '@/trpc/server';

import type { inferInput } from '@trpc/tanstack-react-query';

type Input = inferInput<typeof trpc.workflows.getMany>;

/**
 * 
 * Prefetch For All WOrkflows
 */
export const prefetchWorkflows = (params: Input) => {
  prefetch(trpc.workflows.getMany.queryOptions(params));
}

/**
 * Prefetch Single Workflows
 */
export const prefetchWorkflow = (id: string) => {
  prefetch(trpc.workflows.getOne.queryOptions({id}));
}