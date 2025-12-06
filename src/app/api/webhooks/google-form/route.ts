import { sendWorkflowExecutionEvent } from "@/inngest/utils";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const workflowId = url.searchParams.get("workflowId");

        if (!workflowId) {
            return NextResponse.json(
                { success: false, error: "Missing query parameter" },
                { status: 400 },
            );
        }

        const body = await request.json();

        const formData = {
            formId: body.formId,
            formTitle: body.formTitle,
            responseId: body.responseId,
            timestamp: body.timestamp,
            respondentEmail: body.respondentEmail,
            responses: body.responses,
            raw: body,
        };

        //Trigger an Inngest Job
        await sendWorkflowExecutionEvent({
            workflowId,
            initialData: {
                googleFormData: formData
            }
        })



    } catch (error) {
        console.error("Error handling Google Form webhook:", error);
        return NextResponse.json(
            { success: false, error: "Failed to process Google Form submission" },
            { status: 500 },
        );
    }
}