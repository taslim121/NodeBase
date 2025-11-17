import { createTRPCRouter,  } from '../init';

import { workflowsRouter } from '@/feature/workflows/server/routers';
export const appRouter = createTRPCRouter({
  workflows : workflowsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;