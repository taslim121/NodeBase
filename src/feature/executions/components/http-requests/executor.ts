import Handlebars from "handlebars";
import type { NodeExecutor } from "@/feature/executions/types";
import { NonRetriableError } from "inngest";
import ky, { Options as KyOptions } from "ky";

Handlebars.registerHelper("json", (context) =>
    new Handlebars.SafeString(JSON.stringify(context, null, 2)));

type HttprequestData = {
    variableName: string;
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
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
    if (!data.method) {
        throw new NonRetriableError("HTTP Request node: No HTTP method configured.");
    }

    const result = await step.run("http-request", async () => {
        const endpoint = Handlebars.compile(data.endpoint)(context);
        console.log("HTTP Request to:", endpoint);
        const method = data.method;
        const options: KyOptions = { method };

        if (["POST", "PUT", "PATCH"].includes(method)) {
            const resolved = Handlebars.compile(data.body || "{}")(context);
            console.log("HTTP Request body:", resolved);
            JSON.parse(resolved);
            options.body = resolved;
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

        return {
            ...context,
            [data.variableName]: responsePayload
        };
    });

    //TODO: Publish "completed" state for manual trigger node

    return result;
}   