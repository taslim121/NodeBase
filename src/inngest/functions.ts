import prisma from "@/lib/db";
import { inngest } from "./client";
import {createGoogleGenerativeAI} from "@ai-sdk/google";
import {createOpenAI} from "@ai-sdk/openai";
import {createAnthropic} from "@ai-sdk/anthropic";
import {generateText} from "ai";

const googleAI = createGoogleGenerativeAI();
const openAI = createOpenAI();
const anthropicAI = createAnthropic();

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    const { steps:geminiSteps } = await step.ai.wrap(
      "gemini-genrate-text",
      generateText,
      {
        model: googleAI("gemini-2.0-flash"),
        system : "You are a helpful assistant that helps people find information.",
        prompt:"What is Semantic Layer Powered File Sytem in Short 50 words?"
      }

    );

    const { steps:openaiSteps } = await step.ai.wrap(
      "openai-genrate-text",
      generateText,
      {
        model: openAI("gpt-3.5-turbo"),
        system : "You are a helpful assistant that helps people find information.",
        prompt:"What is Semantic Layer Powered File Sytem in Short 50 words?"
      }

    );

    const { steps:anthropicSteps } = await step.ai.wrap(
      "anthropic-genrate-text",
      generateText,
      {
        model: anthropicAI("claude-3-haiku-20240307"),
        system : "You are a helpful assistant that helps people find information.",
        prompt:"What is Semantic Layer Powered File Sytem in Short 50 words?"
      }

    );

    return {geminiSteps,openaiSteps,anthropicSteps};
  },
);