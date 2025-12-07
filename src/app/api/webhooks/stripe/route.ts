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

        const stripeData = {
            //event data from Stripe webhook
            eventId: body.id,
            eventType: body.type,
            timestamp: body.created,
            raw: body.data?.object,
        };

        //Trigger an Inngest Job
        await sendWorkflowExecutionEvent({
            workflowId,
            initialData: {
                googleFormData: stripeData
            }
        })
        return NextResponse.json({ success: true },
            { status: 200 }
        );


    } catch (error) {
        console.error("Error handling Stripe webhook:", error);
        return NextResponse.json(
            { success: false, error: "Failed to process Stripe event" },
            { status: 500 },
        );
    }
}