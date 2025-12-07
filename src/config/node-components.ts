import { InitialNode } from "@/components/initial-node";
import { HttpRequestNode } from "@/feature/executions/components/http-requests/node";
import { GoogleFormTriggerNode } from "@/feature/triggers/components/google-form-trigger/node";
import { ManualTriggerNode } from "@/feature/triggers/components/manual-trigger/node";
import { StripeTriggerNode } from "@/feature/triggers/components/stripe-trigger/node";
import { NodeType } from "@/generated/prisma/enums";
import { NodeTypes } from "@xyflow/react";



export const nodeComponents = {
    [NodeType.INITIAL]: InitialNode,
    [NodeType.HTTP_REQUEST]: HttpRequestNode,
    [NodeType.MANUAL_TRIGGER]: ManualTriggerNode,
    [NodeType.GOOGLE_FORM_TRIGGER]: GoogleFormTriggerNode,
    [NodeType.STRIPE_TRIGGER]: StripeTriggerNode,

} as const satisfies NodeTypes;

export type RegisteredNodeType = keyof typeof nodeComponents;