"use client";

import { useState } from "react";
import DreamForm from "@/components/DreamForm";
import LoadingLucky from "@/components/LoadingLucky";
import ResultCard from "@/components/ResultCard";
import type {
  GenerateLuckyResponse,
  GenerateLuckyErrorResponse,
  LuckyResult,
} from "@/types/lucky";
import AdSlot from "@/components/AdSlot";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LuckyResult | null>(null);
  const [error, setError] = useState("");

  async function handleGenerate(text: string) {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const json = (await response.json()) as
        | GenerateLuckyResponse
        | GenerateLuckyErrorResponse;

      if (!response.ok) {
        const errorJson = json as GenerateLuckyErrorResponse;
        throw new Error(errorJson.message || "Generate failed");
      }

      if (!json.success) {
        throw new Error(json.message || "Generate failed");
      }

      setResult(json.data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50 px-4 py-10">
      <section className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-sm font-medium text-green-700 mb-2">
            AI Lucky Number Generator
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            คำนวณเลขนำโชคจากข้อความ
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg">
            พิมพ์ความฝัน เหตุการณ์ หรือสิ่งที่เจอมา แล้วให้ AI วิเคราะห์เป็นเลข
            2-3 หลักแบบสนุก ๆ
          </p>
        </div>

        <DreamForm onSubmit={handleGenerate} loading={loading} />

        {loading && <LoadingLucky />}

        {error && (
          <div className="mt-6 max-w-xl mx-auto rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {result && <ResultCard data={result} />}

        <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME} />

        <p className="mt-10 text-xs text-gray-500">
          * ผลลัพธ์นี้จัดทำเพื่อความบันเทิงเท่านั้น ไม่ใช่การการันตีผลรางวัล
        </p>
      </section>
    </main>
  );
}
