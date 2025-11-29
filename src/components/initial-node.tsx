"use client";

import type { NodeProps } from "@xyflow/react";
import { PlusIcon } from "lucide-react";
import { memo, useState } from "react";

import { PlaceholderNode } from "./react-flow/placeholder-node";
import { WorkflowNode } from "./workflow-node";
import { NodeSelector } from "./node-selector";

export const InitialNode = memo((props: NodeProps) => {
  const [selectorOpen, setSelectorOpen] = useState(false);
  return (
    <NodeSelector open={selectorOpen} onOpenChnage={setSelectorOpen}>
      <WorkflowNode name="Initial Node" description="Click to Add the Node">
        <PlaceholderNode {...props} onClick={() => setSelectorOpen(true)}>
          <div className="flex flex-col cursor-pointer items-center justify-center gap-2">
            <PlusIcon className="h-4 w-4 text-gray-400" />
          </div>
        </PlaceholderNode>
      </WorkflowNode>
    </NodeSelector>
  );
});

InitialNode.displayName = "InitialNode";
