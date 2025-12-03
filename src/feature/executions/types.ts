import { GetStepTools,Inngest } from "inngest";

export type WorkFlowContext = Record<string, unknown>;

export type StepTools = GetStepTools<Inngest.Any>;

export interface NodeExecutorParams <TDtata = Record<string, unknown>> {
    data: TDtata;
    nodeId : string;
    context: WorkFlowContext;
    step: StepTools;
    //publish : TODO
}

export type NodeExecutor<TData = Record<string, unknown>> = (
    params: NodeExecutorParams<TData>
) => Promise<WorkFlowContext>;