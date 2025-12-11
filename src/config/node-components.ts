import { InitialNode } from "@/components/initial-node";
import { AnthropicNode } from "@/feature/executions/components/anthropic/node";
import { DiscordNode } from "@/feature/executions/components/discord/node";
import { GeminiNode } from "@/feature/executions/components/gemini/node";
import { HttpRequestNode } from "@/feature/executions/components/http-requests/node";
import { OpenAiNode } from "@/feature/executions/components/openai/node";
import { SlackNode } from "@/feature/executions/components/slack/node";
import { GoogleFormTriggerNode } from "@/feature/triggers/components/google-form-trigger/node";
import { ManualTriggerNode } from "@/feature/triggers/components/manual-trigger/node";
import { StripeTriggerNode } from "@/feature/triggers/components/stripe-trigger/node";
import { NodeType } from "@/generated/prisma/client";
import { NodeTypes } from "@xyflow/react";



export const nodeComponents = {
    [NodeType.INITIAL]: InitialNode,
    [NodeType.HTTP_REQUEST]: HttpRequestNode,
    [NodeType.MANUAL_TRIGGER]: ManualTriggerNode,
    [NodeType.GOOGLE_FORM_TRIGGER]: GoogleFormTriggerNode,
    [NodeType.STRIPE_TRIGGER]: StripeTriggerNode,
    [NodeType.GEMINI]: GeminiNode,
    [NodeType.OPENAI]: OpenAiNode,
    [NodeType.ANTHROPIC]: AnthropicNode,
    [NodeType.DISCORD]: DiscordNode,
    [NodeType.SLACK]: SlackNode,

} as const satisfies NodeTypes;

export type RegisteredNodeType = keyof typeof nodeComponents;