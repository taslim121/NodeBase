"use server";

import { getSubscriptionToken, type Realtime } from "@inngest/realtime";
import { openAiChannel } from "@/inngest/channels/openai";
import { inngest } from "@/inngest/client";

export type OpenAitoken = Realtime.Token<
    typeof openAiChannel,
    ["status"]
>;

export async function fetchOpenAiRealtimeToken(): Promise<OpenAitoken> {
    const token = await getSubscriptionToken(inngest, {
        channel: openAiChannel(),
        topics: ["status"],
    });

    return token;
};
