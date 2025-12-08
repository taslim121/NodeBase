import Handlebars from "handlebars";
import type { NodeExecutor } from "@/feature/executions/types";
import { createAnthropic } from "@ai-sdk/anthropic";
import { NonRetriableError } from "inngest";
import { anthropicChannel } from "@/inngest/channels/anthropic";
import { AVAILABLE_MODELS } from "./dialog";
import { generateText } from "ai";

Handlebars.registerHelper("json", (context) =>
    new Handlebars.SafeString(JSON.stringify(context, null, 2)));

type AnthropicData = {
    variableName?: string;
    model?: typeof AVAILABLE_MODELS[number];
    systemPrompt?: string;
    userPrompt?: string;
};

export const anthropicExecutor: NodeExecutor<AnthropicData> = async ({
    data,
    nodeId,
    context,
    step,
    publish,
}) => {
    await publish(
        anthropicChannel().status({
            nodeId,
            status: "loading",
        })
    );
    if (!data.userPrompt) {
        await publish(
            anthropicChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("Anthropic node: No user prompt provided.");
    }
    if (!data.variableName) {
        await publish(
            anthropicChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("Anthropic node: No variable name configured.");
    }
    if (!data.model) {
        await publish(
            anthropicChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("Anthropic node: No model configured.");
    }

    const systemPrompt = data.systemPrompt
        ? Handlebars.compile(data.systemPrompt)(context)
        : "You are a helpful assistant.";
    const userPrompt = Handlebars.compile(data.userPrompt)(context);

    //TODO: Allow more configuration of the Anthropic request

    const credentialValue = process.env.ANTHROPIC_API_KEY;
    const anthropic = createAnthropic({
        apiKey: credentialValue,
    });

    try {
        const { steps } = await step.ai.wrap(
            "anthropic-generate-text",
            generateText,
            {
                model: anthropic(data.model || "claude-3-5-haiku-20241022"),
                system: systemPrompt,
                prompt: userPrompt,
                experimental_telemetry: {
                    isEnabled: true,
                    recordInputs: true,
                    recordOutputs: true,
                },
            },
        )

        const text =
            steps[0].content[0].type === "text"
                ? steps[0].content[0].text
                : "";
        await publish(
            anthropicChannel().status({
                nodeId,
                status: "success",
            })
        );
        return {
            ...context,
            [data.variableName]: {
                text,
            },
        };

    } catch (error) {
        await publish(
            anthropicChannel().status({
                nodeId,
                status: "error",
            })
        );
        throw error;
    }
}   