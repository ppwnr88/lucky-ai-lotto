"use client";

import { useState } from "react";

type Props = {
  onSubmit: (text: string) => void;
  loading: boolean;
};

export default function DreamForm({ onSubmit, loading }: Props) {
  const [text, setText] = useState("");

  return (
    <div className="w-full max-w-xl mx-auto">
      <textarea
        className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
        rows={4}
        placeholder="เช่น ฝันว่าขับรถแล้วเบรคไม่อยู่..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => onSubmit(text)}
        disabled={loading || !text.trim()}
        className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl disabled:opacity-50"
      >
        🎯 คำนวณเลขนำโชค
      </button>
    </div>
  );
}