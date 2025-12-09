import { credentialsRouter } from '@/feature/credentials/server/routers';
import { createTRPCRouter, } from '../init';

import { workflowsRouter } from '@/feature/workflows/server/routers';
import { executionsRouter } from '@/feature/executions/server/routers';
export const appRouter = createTRPCRouter({
  workflows: workflowsRouter,
  credentials: credentialsRouter,
  executions: executionsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;