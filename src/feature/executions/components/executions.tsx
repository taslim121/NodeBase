"use client";

import { formatDistanceToNow } from "date-fns";
import {
  EmptyView,
  EntityContainer,
  EntityHeader,
  EntityItem,
  EntityList,
  EntityPagination,
  ErrorView,
  LoadingView,
} from "@/components/entity-components";
import { useSuspenseExecutions } from "../hooks/use-executions";
import { useExecutionsParams } from "../hooks/use-executions-params";
import type { Execution } from "@/generated/prisma/client";
import { ExecutionStatus } from "@/generated/prisma/enums";
import {
  CheckCircle2Icon,
  ClockIcon,
  Loader2Icon,
  XCircleIcon,
} from "lucide-react";

export const ExecutionsList = () => {
  const executions = useSuspenseExecutions();

  if (executions.data.items.length === 0) {
    return <ExecutionsEmpty />;
  }

  return (
    <EntityList
      items={executions.data.items}
      getKey={(execution) => execution.id}
      renderItem={(execution) => <ExecutionItem data={execution} />}
      emptyView={<ExecutionsEmpty />}
    />
  );
};
export const ExecutionsHeader = () => {
  return (
    <EntityHeader
      title="Executions"
      description="View your workflow Executions history and details."
    />
  );
};

export const ExecutionsPagination = () => {
  const [params, setParams] = useExecutionsParams();
  const executions = useSuspenseExecutions();
  return (
    <EntityPagination
      disabled={executions.isFetching}
      page={executions.data.page}
      totalPages={executions.data.totalPages}
      onPageChange={(newPage) => setParams({ ...params, page: newPage })}
    />
  );
};

export const ExecutionsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer
      header={<ExecutionsHeader />}
      pagination={<ExecutionsPagination />}
    >
      {children}
    </EntityContainer>
  );
};
export const ExecutionsLoading = () => {
  return <LoadingView message="Loading Executions..." />;
};

export const ExecutionsError = () => {
  return <ErrorView message="Error Loading Executions..." />;
};
export const ExecutionsEmpty = () => {
  return (
    <EmptyView message="No Executions found.Start by executing a workflow." />
  );
};

const getStatusIcon = (status: ExecutionStatus) => {
  switch (status) {
    case ExecutionStatus.RUNNING:
      return <Loader2Icon className="h-5 w-5 animate-spin text-blue-600" />;
    case ExecutionStatus.SUCCESS:
      return <CheckCircle2Icon className="h-5 w-5 text-green-600" />;
    case ExecutionStatus.FAILED:
      return <XCircleIcon className="h-5 w-5 text-red-600" />;
    default:
      return <ClockIcon className="h-5 w-5 text-muted-foreground" />;
  }
};

const formatStatus = (status: ExecutionStatus) => {
  return status.charAt(0) + status.slice(1).toLowerCase();
};
export const ExecutionItem = ({
  data,
}: {
  data: Execution & {
    workflow: {
      id: string;
      name: string;
    };
  };
}) => {
  const duration = data.completedAt
    ? Math.round(
        (new Date(data.completedAt).getTime() -
          new Date(data.startedAt).getTime()) /
          1000
      )
    : null;
  const subtitle = (
    <>
      {data.workflow.name} &bull; Started{" "}
      {formatDistanceToNow(new Date(data.startedAt), { addSuffix: true })}
      {duration !== null && <> &bull; Took {duration}s </>}
    </>
  );
  return (
    <EntityItem
      href={`/executions/${data.id}`}
      title={formatStatus(data.status)}
      subtitle={subtitle}
      image={
        <div className="size-8 flex items-center justify-center">
          {getStatusIcon(data.status)}
        </div>
      }
    />
  );
};
