"use client";

import { formatDistanceToNow } from "date-fns";
import { EmptyView, EntityContainer, EntityHeader, EntityItem, EntityList, EntityPagination, EntitySearch, ErrorView, LoadingView } from "@/components/entity-components";
import { useCreateWorkflow, useRemoveWorkflow, useSuspenseWorkflows } from "../hooks/use-workflows";
import { useUpgradeModal } from "@/hooks/use-upgarde-modal";
import { useRouter } from "next/navigation";
import { useWorkflowsParams } from "../hooks/use-workflows-params";
import { useEntitySearch } from "@/hooks/use-entity-search";
import type { Workflow } from "@/generated/prisma/client";
import { WorkflowIcon } from "lucide-react";


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

    if(workflows.data.items.length === 0){
        return <WorkflowsEmpty/>;
    }

    return (
        <EntityList 
        items={workflows.data.items}
        getKey={(workflow) => workflow.id}
        renderItem={(workflow)=> <WorkFlowsItem key={workflow.id} data={workflow}/>}
        emptyView={<WorkflowsEmpty/>}

        />
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
                    handleError(error);
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
export const WorkflowsLoading = () =>{
    return <LoadingView message="Loading Workflows.."/>
}

export const WorkflowsError = () =>{
    return <ErrorView message="Error Loading Workflows.."/>
}
export const WorkflowsEmpty = () => {
    const createWorkflows = useCreateWorkflow();
    const {handleError,modal} = useUpgradeModal();
    const router = useRouter();
    const handleCreate = ()=>{
        createWorkflows.mutate(undefined,
            {
                onError: (error) => {
                    handleError(error)
                },
                onSuccess: (data) => {
                    router.push(`/workflows/${data.id}`);
                }
            }
        );
    }
    return (
        <>  
            {modal}
            <EmptyView
                message="No Workflows found. Get Started By Creating A Workflow."
                onNew={handleCreate}
            />
        </>
    );
}

export const WorkFlowsItem = ({data}:{data : Workflow}) =>{
    const removeWorflow = useRemoveWorkflow();

    const handleRemove = () =>{
        removeWorflow.mutate({id: data.id});
    }
    return(
        <EntityItem
            href={`/workflows/${data.id}`}
            title={data.name}
            subtitle={
                <>
                Updated {formatDistanceToNow(data.updatedAt,{addSuffix:true})}{" "}
                &bull; Created{" "}
                {formatDistanceToNow(data.createdAt,{addSuffix:true})}
                </>
            }
            image={
                <div className="size-8 flex items-center justify-center">
                    <WorkflowIcon className="size-5 text-muted-foreground"/>
                </div>
            }
            onRemove={handleRemove}
            isRemoving={removeWorflow.isPending}

        />
    )
}
