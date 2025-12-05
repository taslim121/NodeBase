import type { NodeExecutor } from "@/feature/executions/types";
import { manualTriggerChannel } from "@/inngest/channels/manual-trigger";

type ManualtriggerData = Record<string, unknown>;

export const manualTriggerExecutor: NodeExecutor<ManualtriggerData> = async ({
    nodeId,
    context,
    step,
    publish
}) => {
    await publish(
        manualTriggerChannel().status({
            nodeId,
            status: "loading",
        })
    )

    const result = await step.run("manual-trigger", async () => {
        return context;
    });

    await publish(
        manualTriggerChannel().status({
            nodeId,
            status: "success",
        })
    )

    return result;
}   