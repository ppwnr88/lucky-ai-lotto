import { buildPrompt } from "./prompt";

type OpenRouterMessage = {
  role: "system" | "user";
  content: string;
};

type OpenRouterResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
};

export async function callOpenRouter(userText: string): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL || "openrouter/free";

  if (!apiKey) {
    throw new Error("Missing OPENROUTER_API_KEY");
  }

  const messages: OpenRouterMessage[] = [
    {
      role: "system",
      content:
        "You are a Thai lucky number generator. Return valid JSON only. No markdown.",
    },
    {
      role: "user",
      content: buildPrompt(userText),
    },
  ];

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      "X-Title": "Lucky AI Lotto",
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.9,
      max_tokens: 800,
    }),
  });

  const data = (await response.json()) as OpenRouterResponse;

  if (!response.ok) {
    throw new Error(data.error?.message || "OpenRouter request failed");
  }

  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("AI response is empty");
  }

  return content;
}