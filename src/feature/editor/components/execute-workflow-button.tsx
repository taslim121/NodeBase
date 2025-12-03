import { Button } from "@/components/ui/button";
import { useExecuteWorkflow } from "@/feature/workflows/hooks/use-workflows";
import { FlaskConicalIcon } from "lucide-react";

export const ExecuteWorkflowButton = ({
  workflowId,
}: {
  workflowId: string;
}) => {
  const executeWorkflow = useExecuteWorkflow();

  const handleExecute = () => {
    executeWorkflow.mutate({ id: workflowId });
  };

  return (
    <Button
      size="lg"
      onClick={handleExecute}
      disabled={executeWorkflow.isPending}
    >
      <FlaskConicalIcon className="mr-2 h-4 w-4" />
      Execute Workflow
    </Button>
  );
};
