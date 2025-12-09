import Handlebars from "handlebars";
import type { NodeExecutor } from "@/feature/executions/types";
import { NonRetriableError } from "inngest";
import { slackChannel } from "@/inngest/channels/slack";
import { decode } from "html-entities";
import ky from "ky";

Handlebars.registerHelper("json", (context) =>
    new Handlebars.SafeString(JSON.stringify(context, null, 2)));

type SlackData = {
    variableName?: string;
    webhookUrl?: string;
    content?: string;
};

export const slackExecutor: NodeExecutor<SlackData> = async ({
    data,
    nodeId,
    context,
    step,
    publish,
}) => {
    await publish(
        slackChannel().status({
            nodeId,
            status: "loading",
        })
    );
    if (!data.content) {
        await publish(
            slackChannel().status({
                nodeId,
                status: "error",
            })
        )
        throw new NonRetriableError("Slack node: No content provided.");
    }




    const rawContent = Handlebars.compile(data.content)(context);
    const content = decode(rawContent);

    try {
        const result = await step.run("slack-webhook", async () => {
            if (!data.webhookUrl) {
                await publish(
                    slackChannel().status({
                        nodeId,
                        status: "error",
                    })
                )
                throw new NonRetriableError("Slack node: No webhook URL provided.");
            }
            await ky.post(data.webhookUrl, {
                json: {
                    text: content.slice(0, 2000),
                },
            });
            if (!data.variableName) {
                await publish(
                    slackChannel().status({
                        nodeId,
                        status: "error",
                    })
                )
                throw new NonRetriableError("Slack node: No variable name configured.");
            }
            return {
                ...context,
                [data.variableName]: {
                    text: content.slice(0, 2000),
                },
            }
        });

        await publish(
            slackChannel().status({
                nodeId,
                status: "success",
            })
        );
        return result;


    } catch (error) {
        await publish(
            slackChannel().status({
                nodeId,
                status: "error",
            })
        );
        throw error;
    }
}   