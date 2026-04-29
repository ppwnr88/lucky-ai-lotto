"use client";

import { useState } from "react";

type Props = {
  onSubmit: (text: string) => void;
  loading: boolean;
};

export default function DreamForm({ onSubmit, loading }: Props) {
  const [text, setText] = useState("");
  const canSubmit = Boolean(text.trim()) && !loading;

  return (
    <div className="w-full max-w-xl mx-auto">
      <textarea
        className="w-full rounded-2xl border border-yellow-200 bg-white/90 p-4 shadow-sm transition focus:outline-none focus:ring-4 focus:ring-yellow-300/60"
        rows={4}
        placeholder="เช่น ฝันว่าขับรถแล้วเบรคไม่อยู่..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onInput={(e) => setText(e.currentTarget.value)}
      />

      <div className="relative mt-4">
        {loading && (
          <div
            className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-[conic-gradient(from_90deg,#facc15,#22c55e,#38bdf8,#f97316,#facc15)] opacity-80 blur-xl lucky-button-aura"
            aria-hidden="true"
          />
        )}

        <button
          onClick={() => onSubmit(text)}
          disabled={!canSubmit}
          className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-yellow-300 bg-yellow-400 px-5 py-4 text-base font-bold text-black shadow-lg shadow-yellow-300/40 transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg ${
            loading
              ? "lucky-button-charging"
              : "hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-300/50"
          }`}
        >
          {loading && (
            <>
              <span
                className="absolute inset-0 lucky-button-sheen"
                aria-hidden="true"
              />
              <span
                className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white lucky-button-spark sm:left-6"
                aria-hidden="true"
              />
            </>
          )}

          <span className="relative z-10 flex items-center gap-2">
            <span className={loading ? "lucky-target-spin" : ""}>🎯</span>
            <span>
              {loading ? "กำลังคำนวณเลขนำโชค..." : "คำนวณเลขนำโชค"}
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
