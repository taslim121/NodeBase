import { Connection, Node } from "@/generated/prisma/client";
import { tr } from "date-fns/locale";
import { connected } from "process";
import toposort from "toposort";
export const topolocicalSort = (
    nodes:Node[],
    connections : Connection[],
): Node[] => {
    // if no connections, return nodes as is
    if (connections.length === 0) {
        return nodes;
    }
    //create Edges Array for topto sort
    const edges:[string, string][] = connections.map((conn) => [
        conn.fromNodeId,
        conn.toNodeId,
    ]);

    //Add nodes with no connections as self-edges to ensure they are included
    const connectedNodeIds = new Set<string>();
    for (const conn of connections) {
            connectedNodeIds.add(conn.fromNodeId),
            connectedNodeIds.add(conn.toNodeId);
        }
    for (const node of nodes) {
        if (!connectedNodeIds.has(node.id)) {
            edges.push([node.id, node.id]);
        }
    }

    //Perform topological sort
    let sortedNodeIds: string[];
    try {
        sortedNodeIds = toposort(edges);
        //Remove duplecates from self-edges
        sortedNodeIds = [...new Set(sortedNodeIds)];
    } catch (error) {
        if (error instanceof Error && error.message.includes("Cyclic")) {
            throw new Error("Workflow contains cycles");
        }
        throw error;
    }    

    //Map sorted IDs back to nodes objects
    const nodeMap = new Map(nodes.map((node) => [node.id, node]));
    return sortedNodeIds.map((id) => nodeMap.get(id)!).filter(Boolean);
}