import Handlebars from "handlebars";
import type { NodeExecutor } from "@/feature/executions/types";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { NonRetriableError } from "inngest";
import { geminiChannel } from "@/inngest/channels/gemini";
import { AVAILABLE_MODELS } from "./dialog";
import { generateText } from "ai";

Handlebars.registerHelper("json", (context) =>
    new Handlebars.SafeString(JSON.stringify(context, null, 2)));

type GeminiData = {
    variableName?: string;
    model?: typeof AVAILABLE_MODELS[number];
    systemPrompt?: string;
    userPrompt?: string;
};

export const geminiExecutor: NodeExecutor<GeminiData> = async ({
    data,
    nodeId,
    context,
    step,
    publish,
}) => {
    await publish(
        geminiChannel().status({
            nodeId,
            status: "loading",
        })
    );
    if (!data.userPrompt) {
        await publish(
            geminiChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("Gemini node: No user prompt provided.");
    }
    if (!data.variableName) {
        await publish(
            geminiChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("Gemini node: No variable name configured.");
    }
    if (!data.model) {
        await publish(
            geminiChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("Gemini node: No model configured.");
    }

    const systemPrompt = data.systemPrompt
        ? Handlebars.compile(data.systemPrompt)(context)
        : "You are a helpful assistant.";
    const userPrompt = Handlebars.compile(data.userPrompt)(context);

    //TODO: Allow more configuration of the Gemini request

    const credentialValue = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    const google = createGoogleGenerativeAI({
        apiKey: credentialValue,
        // Use v1beta for systemInstruction support
    });

    try {
        const { steps } = await step.ai.wrap(
            "gemini-generate-text",
            generateText,
            {
                model: google(data.model || "gemini-2.5-flash-lite"),
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
            geminiChannel().status({
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
            geminiChannel().status({
                nodeId,
                status: "error",
            })
        );
        throw error;
    }
}   