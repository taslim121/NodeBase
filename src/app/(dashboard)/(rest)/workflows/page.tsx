import { WorkflowsContainer, WorkflowsList } from "@/feature/workflows/components/workflows";
import { prefetchWorkflows } from "@/feature/workflows/server/prefetch";
import { requireAuth } from "@/lib/auth-utils";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";


const Page = async() => {
await requireAuth();
prefetchWorkflows();

  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<div>Something went wrong.</div>}>
          <Suspense fallback={<div>Loading workflows...</div>}>
            <WorkflowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  )
}

export default Page;