"use server";

import { getSubscriptionToken, type Realtime } from "@inngest/realtime";
import { anthropicChannel } from "@/inngest/channels/anthropic";
import { inngest } from "@/inngest/client";

export type Anthropictoken = Realtime.Token<
    typeof anthropicChannel,
    ["status"]
>;

export async function fetchAnthropicRealtimeToken(): Promise<Anthropictoken> {
    const token = await getSubscriptionToken(inngest, {
        channel: anthropicChannel(),
        topics: ["status"],
    });

    return token;
};
