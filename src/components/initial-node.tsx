"use client";

import type { NodeProps } from "@xyflow/react";
import { PlusIcon } from "lucide-react";
import { memo } from "react";

import { PlaceholderNode } from "./react-flow/placeholder-node";
import { WorkflowNode } from "./workflow-node";

export const InitialNode = memo((props: NodeProps) => {
  return (
    <WorkflowNode name="Initial Node" description="Click to Add the Node">
      <PlaceholderNode {...props}>
        <div className="flex flex-col cursor-pointer items-center justify-center gap-2">
          <PlusIcon className="h-4 w-4 text-gray-400" />
        </div>
      </PlaceholderNode>
    </WorkflowNode>
  );
});

InitialNode.displayName = "InitialNode";
