import Handlebars from "handlebars";
import type { NodeExecutor } from "@/feature/executions/types";
import { createOpenAI } from "@ai-sdk/openai";
import { NonRetriableError } from "inngest";
import { openAiChannel } from "@/inngest/channels/openai";
import { AVAILABLE_MODELS } from "./dialog";
import { generateText } from "ai";
import prisma from "@/lib/db";

Handlebars.registerHelper("json", (context) =>
    new Handlebars.SafeString(JSON.stringify(context, null, 2)));

type OpenAiData = {
    variableName?: string;
    model?: typeof AVAILABLE_MODELS[number];
    credentialId?: string;
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
    if (!data.credentialId) {
        await publish(
            openAiChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("OpenAi node: No credential configured.");
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
    const credential = await step.run("get-credential", () => {
        return prisma.credential.findUnique({
            where: {
                id: data.credentialId,
            },
        });
    })
    if (!credential) {
        throw new NonRetriableError("OpenAi node: Credential not found.");
    }
    const openai = createOpenAI({
        apiKey: credential.value,
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