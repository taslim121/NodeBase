import { WorkflowsContainer, WorkflowsError, WorkflowsList, WorkflowsLoading } from "@/feature/workflows/components/workflows";
import { prefetchWorkflows } from "@/feature/workflows/server/prefetch";
import { requireAuth } from "@/lib/auth-utils";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SearchParams } from "nuqs/server";
import { workflowsParamsLoader } from "@/feature/workflows/server/params-loader";

type Props={
  searchParams: Promise<SearchParams>;
};

const Page = async({searchParams}:Props) => {
await requireAuth();

const params = await workflowsParamsLoader(searchParams);
prefetchWorkflows(params);

  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<WorkflowsError/>}>
          <Suspense fallback={<WorkflowsLoading/>}>
            <WorkflowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  )
}

export default Page;