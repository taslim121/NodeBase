import type { NodeExecutor } from "@/feature/executions/types";

type ManualtriggerData = Record<string, unknown>;

export const manualTriggerExecutor: NodeExecutor<ManualtriggerData> = async ({
    nodeId,
    context,
    step,
}) => {
    //TODO PUblish "loading" state for manual trigger node

    const result = await step.run("manual-trigger", async () => {
        return context;
    });

    //TODO Publish "completed" state for manual trigger node

    return result;
}   