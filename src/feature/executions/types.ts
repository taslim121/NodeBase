import type { Realtime } from "@inngest/realtime";
import type { GetStepTools, Inngest } from "inngest";

export type WorkFlowContext = Record<string, unknown>;

export type StepTools = GetStepTools<Inngest.Any>;

export interface NodeExecutorParams<TDtata = Record<string, unknown>> {
    data: TDtata;
    nodeId: string;
    context: WorkFlowContext;
    userId: string;
    step: StepTools;
    publish: Realtime.PublishFn;
}

export type NodeExecutor<TData = Record<string, unknown>> = (
    params: NodeExecutorParams<TData>
) => Promise<WorkFlowContext>;