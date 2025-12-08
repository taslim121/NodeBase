import Handlebars from "handlebars";
import type { NodeExecutor } from "@/feature/executions/types";
import { createOpenAI } from "@ai-sdk/openai";
import { NonRetriableError } from "inngest";
import { openAiChannel } from "@/inngest/channels/openai";
import { AVAILABLE_MODELS } from "./dialog";
import { generateText } from "ai";

Handlebars.registerHelper("json", (context) =>
    new Handlebars.SafeString(JSON.stringify(context, null, 2)));

type OpenAiData = {
    variableName?: string;
    model?: typeof AVAILABLE_MODELS[number];
    systemPrompt?: string;
    userPrompt?: string;
};

export const openAiExecutor: NodeExecutor<OpenAiData> = async ({
    data,
    nodeId,
    context,
    step,
    publish,
}) => {
    await publish(
        openAiChannel().status({
            nodeId,
            status: "loading",
        })
    );
    if (!data.userPrompt) {
        await publish(
            openAiChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("OpenAi node: No user prompt provided.");
    }
    if (!data.variableName) {
        await publish(
            openAiChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("OpenAi node: No variable name configured.");
    }
    if (!data.model) {
        await publish(
            openAiChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("OpenAi node: No model configured.");
    }

    const systemPrompt = data.systemPrompt
        ? Handlebars.compile(data.systemPrompt)(context)
        : "You are a helpful assistant.";
    const userPrompt = Handlebars.compile(data.userPrompt)(context);

    //TODO: Allow more configuration of the OpenAi request

    const credentialValue = process.env.OPEN_AI_API_KEY;
    const openai = createOpenAI({
        apiKey: credentialValue,
        // Use v1beta for systemInstruction support
    });

    try {
        const { steps } = await step.ai.wrap(
            "openai-generate-text",
            generateText,
            {
                model: openai(data.model || "gpt-4o-mini"),
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
            openAiChannel().status({
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
            openAiChannel().status({
                nodeId,
                status: "error",
            })
        );
        throw error;
    }
}   