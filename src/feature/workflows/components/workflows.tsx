"use client";
import { EntityContainer, EntityHeader, EntityPagination, EntitySearch } from "@/components/entity-components";
import { useCreateWorkflow, useSuspenseWorkflows } from "../hooks/use-workflows";
import { useUpgradeModal } from "@/hooks/use-upgarde-modal";
import { useRouter } from "next/navigation";
import { useWorkflowsParams } from "../hooks/use-workflows-params";
import { useEntitySearch } from "@/hooks/use-entity-search";

export const WorkFlowsSearch = () =>{
    const [params,setParams] = useWorkflowsParams();
    const {searchValue,onSearchChange} =useEntitySearch({params,setParams});
    return(
        <EntitySearch
            placeholder="Search Workflows"
            value={searchValue}
            onChange={onSearchChange}
        />
    );
}

export const WorkflowsList = () => {
    const workflows = useSuspenseWorkflows();

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

export const WorkflowsPagination = () =>{
    const [params,setParams] = useWorkflowsParams();
    const workflows = useSuspenseWorkflows();
    return(
        <EntityPagination
            disabled={workflows.isFetching}
            page={workflows.data.page}
            totalPages={workflows.data.totalPages}
            onPageChange={(newPage) => setParams({...params, page: newPage})}
        />
    )
}


export const WorkflowsContainer = ({children}:{children:React.ReactNode})=>{
    return (
        <EntityContainer
            header={<WorkflowsHeader/>}
            search={<WorkFlowsSearch/>}
            pagination={<WorkflowsPagination/>}
        >
            {children}
        </EntityContainer>
    );
}