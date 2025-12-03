import type { NodeExecutor } from "@/feature/executions/types";
import { NonRetriableError } from "inngest";
import ky, { Options as KyOptions } from "ky";

type HttprequestData = {
    variableName?: string;
    endpoint?: string;
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    body?: string;
};

export const httpRequestExecutor: NodeExecutor<HttprequestData> = async ({
    data,
    nodeId,
    context,
    step,
}) => {
    //TODO: PUblish "loading" state for manual trigger node

    if (!data.endpoint) {
        //TODO: Publish error state for node
        throw new NonRetriableError("HTTP Request node: No endpoint configured.");
    }
    if (!data.variableName) {
        throw new NonRetriableError("HTTP Request node: No variable name configured.");
    }
    const result = await step.run("http-request", async () => {
        const endpoint = data.endpoint!;
        const method = data.method || "GET";
        const options: KyOptions = { method };

        if (["POST", "PUT", "PATCH"].includes(method)) {
            options.body = data.body;
            options.headers = {
                "Content-Type": "application/json",
            };
        }

        const response = await ky(endpoint, options);
        const contentType = response.headers.get("content-type");
        const responseData = contentType?.includes("application/json")
            ? await response.json()
            : await response.text();

        const responsePayload = {
            httpResponse: {
                status: response.status,
                statusText: response.statusText,
                data: responseData,
            },
        };

        if (data.variableName) {
            return {
                ...context,
                [data.variableName]: responsePayload
            };
        }
        return {
            ...context,
            ...responsePayload,

        };
    });

    //TODO: Publish "completed" state for manual trigger node

    return result;
}   