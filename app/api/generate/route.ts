import { NextResponse } from "next/server";
import { z } from "zod";
import { callOpenRouter } from "@/lib/openrouter";
import { getRandomCaption } from "@/lib/captions";

const requestSchema = z.object({
  text: z
    .string()
    .min(3, "กรุณาพิมพ์ข้อความอย่างน้อย 3 ตัวอักษร")
    .max(500, "ข้อความยาวเกินไป กรุณาไม่เกิน 500 ตัวอักษร"),
});

const luckyResultSchema = z.object({
  summary: z.string(),
  keywords: z.array(z.string()),
  mainNumbers2D: z.array(z.string()),
  mainNumbers3D: z.array(z.string()),
  secondaryNumbers: z.array(z.string()),
  luckyLevel: z.number().min(0).max(100),
  caption: z.string().optional(),
});

function extractJson(content: string) {
  const cleaned = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text } = requestSchema.parse(body);

    const aiContent = await callOpenRouter(text);
    const parsed = luckyResultSchema.parse(extractJson(aiContent));

    return NextResponse.json({
      success: true,
      data: {
        ...parsed,
        caption: parsed.caption || getRandomCaption(),
      },
    });
  } catch (error) {
    console.error("Generate lucky number error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
      },
      { status: 500 }
    );
  }
}