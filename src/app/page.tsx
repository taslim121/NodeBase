"use client"
import { Button } from "@/components/ui/button";
import { LogoutButton } from "./logout";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";


const page = () =>{

  const trpc = useTRPC();
  const {data} = useQuery(trpc.getWorkflows.queryOptions());
  const queryClient = useQueryClient();
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.success("Jod Queued");
    }
  }));
  return (
  <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
    proTected Server Component
    <div>
      {JSON.stringify(data)}
    </div>
    <Button disabled={create.isPending} onClick={()=> create.mutate()}>
      Create Workflow
    </Button>
    <LogoutButton/>
  </div>);
};

export default page;