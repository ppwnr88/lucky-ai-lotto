import type { LuckyResult } from "@/types/lucky";
import { getRandomCaption } from "./captions";

function randomNumber(length: 2 | 3): string {
  const max = length === 2 ? 100 : 1000;
  return String(Math.floor(Math.random() * max)).padStart(length, "0");
}

function uniqueNumbers(length: 2 | 3, count: number): string[] {
  const numbers = new Set<string>();

  while (numbers.size < count) {
    numbers.add(randomNumber(length));
  }

  return Array.from(numbers);
}

export function createFallbackLuckyResult(userText: string): LuckyResult {
  const words = userText
    .replace(/[^\u0E00-\u0E7Fa-zA-Z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 5);

  return {
    summary:
      "น้อง AI ยังคิดเลขไม่ออก เอาเป็นเลขจุ่มไปก่อนน้า 🎲 ข้อความนี้ถูกสุ่มเลขให้อัตโนมัติเพื่อความบันเทิง",
    keywords: words.length ? words : ["เลขจุ่ม", "นำโชค", "สุ่มให้แล้ว"],
    mainNumbers2D: uniqueNumbers(2, 4),
    mainNumbers3D: uniqueNumbers(3, 4),
    secondaryNumbers: [...uniqueNumbers(2, 4), ...uniqueNumbers(3, 2)],
    luckyLevel: Math.floor(Math.random() * 31) + 60,
    caption: getRandomCaption(),
  };
}