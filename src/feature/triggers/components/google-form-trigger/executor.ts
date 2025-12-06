import type { NodeExecutor } from "@/feature/executions/types";
import { googleFormTriggerChannel } from "@/inngest/channels/google-form-trigger";

type GoogleFormData = Record<string, unknown>;

export const googleFormTriggerExecutor: NodeExecutor<GoogleFormData> = async ({
    nodeId,
    context,
    step,
    publish
}) => {
    await publish(
        googleFormTriggerChannel().status({
            nodeId,
            status: "loading",
        })
    )

    const result = await step.run("google-form-trigger", async () => {
        return context;
    });

    await publish(
        googleFormTriggerChannel().status({
            nodeId,
            status: "success",
        })
    )

    return result;
}   