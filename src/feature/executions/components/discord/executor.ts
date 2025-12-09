import Handlebars from "handlebars";
import type { NodeExecutor } from "@/feature/executions/types";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { NonRetriableError } from "inngest";
import { discordChannel } from "@/inngest/channels/discord";
import { generateText } from "ai";
import prisma from "@/lib/db";
import { decode } from "html-entities";
import ky from "ky";

Handlebars.registerHelper("json", (context) =>
    new Handlebars.SafeString(JSON.stringify(context, null, 2)));

type DiscordData = {
    variableName?: string;
    webhookUrl?: string;
    content?: string;
    username?: string;
};

export const discordExecutor: NodeExecutor<DiscordData> = async ({
    data,
    nodeId,
    context,
    step,
    publish,
}) => {
    await publish(
        discordChannel().status({
            nodeId,
            status: "loading",
        })
    );
    if (!data.content) {
        await publish(
            discordChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("Discord node: No content provided.");
    }




    const rawContent = Handlebars.compile(data.content)(context);
    const content = decode(rawContent);
    const username = data.username
        ? decode(Handlebars.compile(data.username)(context))
        : undefined;

    try {
        const result = await step.run("discord-webhook", async () => {
            if (!data.webhookUrl) {
                await publish(
                    discordChannel().status({
                        nodeId,
                        status: "error",
                    })
                )
                throw new NonRetriableError("Discord node: No webhook URL provided.");
            }
            await ky.post(data.webhookUrl, {
                json: {
                    content: content.slice(0, 2000),
                    username,
                },
            });
            if (!data.variableName) {
                await publish(
                    discordChannel().status({
                        nodeId,
                        status: "error",
                    })
                )
                throw new NonRetriableError("Discord node: No variable name configured.");
            }
            return {
                ...context,
                [data.variableName]: {
                    text: content.slice(0, 2000),
                },
            }
        });

        await publish(
            discordChannel().status({
                nodeId,
                status: "success",
            })
        );
        return result;


    } catch (error) {
        await publish(
            discordChannel().status({
                nodeId,
                status: "error",
            })
        );
        throw error;
    }
}   