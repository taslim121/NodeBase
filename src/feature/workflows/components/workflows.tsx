"use client";
import { EntityContainer, EntityHeader } from "@/components/entity-components";
import { useCreateWorkflow, useSuspenseWorkflws } from "../hooks/use-workflows";
import { useUpgradeModal } from "@/hooks/use-upgarde-modal";
import { useRouter } from "next/navigation";
export const WorkflowsList = () => {
    const workflows = useSuspenseWorkflws();

    return (
        <div className="flex flex-1 justify-center items-center">
            <p>
                {JSON.stringify(workflows.data , null, 2)}
            </p>
        </div>
    );

};
export const WorkflowsHeader= ({disabled} : {disabled?:boolean})=>{

    const createWorkflows = useCreateWorkflow();
    const {handleError,modal} = useUpgradeModal();
    const router = useRouter();
 
    const handleCreate = ()=>{
        createWorkflows.mutate(undefined,
            {   
                onSuccess: (data) => {
                    router.push(`/workflows/${data.id}`);
                },
                onError: (error) => {
                    handleError(error)
                }
            }
        );
    }
    return (
        <>  
            {modal}
            <EntityHeader 
            title="Workflows"
            description="Create and manage your workflows"
            onNew={handleCreate}
            newButtonLabel="New Workflow"
            disabled={disabled}
            isCreating={createWorkflows.isPending}
        />
        </>
    );
};

export const WorkflowsContainer = ({children}:{children:React.ReactNode})=>{
    return (
        <EntityContainer
            header={<WorkflowsHeader/>}
            search={<></>}
            pagination={<></>}
        >
            {children}
        </EntityContainer>
    );
}