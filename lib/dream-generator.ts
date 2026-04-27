import { buildDreamKeywords, createDreamSlug } from "./dream-keywords";
import type { DreamItem } from "./dream-data";

const meaningOpeners = [
  "โดยทั่วไปความฝันนี้มักสะท้อนถึง",
  "ในเชิงสัญลักษณ์ ความฝันนี้อาจเกี่ยวข้องกับ",
  "ถ้ามองแบบสายมู ความฝันนี้มักโยงกับ",
  "ความฝันลักษณะนี้มักบอกใบ้ถึง",
  "หลายคนมักตีความความฝันนี้ว่าเกี่ยวกับ",
];

const meaningThemes = [
  "การเปลี่ยนแปลงที่กำลังเข้ามา",
  "โอกาสใหม่ที่ยังไม่ชัดเจน",
  "ความกังวลเล็ก ๆ ในใจ",
  "เรื่องโชคลาภและจังหวะชีวิต",
  "ความสัมพันธ์กับคนรอบตัว",
  "การตัดสินใจเรื่องสำคัญ",
  "พลังงานบางอย่างที่กำลังขับเคลื่อนชีวิต",
  "เรื่องที่ควรระวังแต่ไม่ต้องกลัวเกินไป",
];

const adviceList = [
  "ช่วงนี้ควรใช้สติให้มากขึ้น และอย่ารีบตัดสินใจจากอารมณ์",
  "เหมาะกับการเริ่มต้นสิ่งใหม่ ๆ แต่ควรวางแผนให้รอบคอบ",
  "ลองสังเกตคนรอบตัวหรือเหตุการณ์เล็ก ๆ เพราะอาจมีสัญญาณดีซ่อนอยู่",
  "ถ้ากำลังลังเลเรื่องใดอยู่ ความฝันนี้อาจสะท้อนว่าคุณควรทบทวนอีกครั้ง",
  "ถือเป็นฝันที่ตีความได้หลายทาง เหมาะกับการนำไปหาเลขแบบสนุก ๆ",
];

function hashText(text: string): number {
  let hash = 0;

  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function pick<T>(items: T[], seed: number, offset = 0): T {
  return items[(seed + offset) % items.length];
}

function makeNumbers(seed: number) {
  const numbers2D = [
    String((seed * 7 + 11) % 100).padStart(2, "0"),
    String((seed * 13 + 27) % 100).padStart(2, "0"),
    String((seed * 17 + 39) % 100).padStart(2, "0"),
    String((seed * 19 + 51) % 100).padStart(2, "0"),
  ];

  const numbers3D = [
    String((seed * 73 + 101) % 1000).padStart(3, "0"),
    String((seed * 91 + 211) % 1000).padStart(3, "0"),
    String((seed * 37 + 307) % 1000).padStart(3, "0"),
  ];

  return {
    numbers2D: Array.from(new Set(numbers2D)),
    numbers3D: Array.from(new Set(numbers3D)),
  };
}

export function buildGeneratedDreamItem(title: string): DreamItem {
  const seed = hashText(title);
  const numbers = makeNumbers(seed);

  const meaning = [
    `${pick(meaningOpeners, seed)} ${pick(meaningThemes, seed, 1)}`,
    pick(adviceList, seed, 2),
    `เลขนำโชคจาก "${title}" จึงเหมาะกับการเลือกแบบเบา ๆ เพื่อความบันเทิง ไม่ควรใช้เป็นหลักในการตัดสินใจเรื่องเงิน`,
  ].join(" ");

  return {
    slug: createDreamSlug(title),
    title,
    keyword: title,
    description: `${title} หมายถึงอะไร พร้อมเลขเด็ด 2 ตัว 3 ตัว และเลขนำโชค`,
    meaning,
    numbers2D: numbers.numbers2D,
    numbers3D: numbers.numbers3D,
  };
}

export function buildGeneratedDreamItems(limit = 1000): DreamItem[] {
  return buildDreamKeywords(limit).map(buildGeneratedDreamItem);
}