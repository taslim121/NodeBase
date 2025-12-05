"use server";

import { getSubscriptionToken, type Realtime } from "@inngest/realtime";
import { inngest } from "@/inngest/client";
import { manualTriggerChannel } from "@/inngest/channels/manual-trigger";

export type ManualTriggertoken = Realtime.Token<
    typeof manualTriggerChannel,
    ["status"]
>;

export async function fetchManualTriggerRealtimeToken(): Promise<ManualTriggertoken> {
    const token = await getSubscriptionToken(inngest, {
        channel: manualTriggerChannel(),
        topics: ["status"],
    });

    return token;
};
