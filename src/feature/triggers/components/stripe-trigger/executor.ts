import type { NodeExecutor } from "@/feature/executions/types";
import { stripeTriggerChannel } from "@/inngest/channels/stripe-trigger";

type StripeTriggerData = Record<string, unknown>;

export const stripeTriggerExecutor: NodeExecutor<StripeTriggerData> = async ({
    nodeId,
    context,
    step,
    publish
}) => {
    await publish(
        stripeTriggerChannel().status({
            nodeId,
            status: "loading",
        })
    )
    try {
        const result = await step.run("stripe-trigger", async () => {
            return context;
        });

        await publish(
            stripeTriggerChannel().status({
                nodeId,
                status: "success",
            })
        )

        return result;
    } catch (error) {
        await publish(
            stripeTriggerChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw error;
    }
}   