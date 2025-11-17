import { useTRPC } from "@/trpc/client";
import { useMutation,useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

/**
 * 
 * Hook to fetch all workflows uaing suspense
 */
export const useSuspenseWorkflws = () => {
    const trpc = useTRPC();

    return useSuspenseQuery(trpc.workflows.getMany.queryOptions());
}
/**
 * 
 * Hook to caredet a new Workflow
 */
export const useCreateWorkflow = () => {
    const trpc = useTRPC();
    const router = useRouter();
    const queryClient = useQueryClient();
    
    return useMutation(
        trpc.workflows.create.mutationOptions({
            onSuccess: (data) => {
                toast.success(`Workflow "${data.name}"created `);
                queryClient.invalidateQueries(
                    trpc.workflows.getMany.queryOptions(),
                );
            },
            onError: (error) => {
                toast.error(`Failed to create workflow: ${error.message}`);
            },
        })
)
        
};