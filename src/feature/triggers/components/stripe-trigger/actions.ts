"use server";

import { getSubscriptionToken, type Realtime } from "@inngest/realtime";
import { inngest } from "@/inngest/client";
import { stripeTriggerChannel } from "@/inngest/channels/stripe-trigger";

export type StripeTriggertoken = Realtime.Token<
    typeof stripeTriggerChannel,
    ["status"]
>;

export async function fetchStripeTriggerRealtimeToken(): Promise<StripeTriggertoken> {
    const token = await getSubscriptionToken(inngest, {
        channel: stripeTriggerChannel(),
        topics: ["status"],
    });

    return token;
};
