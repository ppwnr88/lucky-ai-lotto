import { buildGeneratedDreamItems } from "./dream-generator";

export type DreamItem = {
  slug: string;
  title: string;
  keyword: string;
  description: string;
  meaning: string;
  numbers2D: string[];
  numbers3D: string[];
};

export const manualDreamItems: DreamItem[] = [
  {
    slug: "snake",
    title: "ฝันเห็นงู",
    keyword: "ฝันเห็นงู",
    description: "ทำนายฝันเห็นงู พร้อมเลขเด็ด 2 ตัว 3 ตัว",
    meaning:
      "ฝันเห็นงูมักสื่อถึงเสน่ห์ ความรัก โอกาสใหม่ หรือเรื่องที่กำลังเข้ามาแบบไม่ทันตั้งตัว",
    numbers2D: ["56", "65", "19", "91"],
    numbers3D: ["569", "561", "659"],
  },
  {
    slug: "car",
    title: "ฝันว่าขับรถ",
    keyword: "ฝันว่าขับรถ",
    description: "ทำนายฝันว่าขับรถ พร้อมเลขนำโชค",
    meaning:
      "ฝันว่าขับรถสื่อถึงเส้นทางชีวิต การตัดสินใจ และการควบคุมสถานการณ์ของตัวเอง",
    numbers2D: ["47", "89", "40", "78"],
    numbers3D: ["478", "789", "890"],
  },
  {
    slug: "money",
    title: "ฝันเห็นเงิน",
    keyword: "ฝันเห็นเงิน",
    description: "ทำนายฝันเห็นเงิน พร้อมเลขเด็ด",
    meaning:
      "ฝันเห็นเงินเกี่ยวข้องกับคุณค่า โอกาส รายรับ หรือความคาดหวังเรื่องโชคลาภ",
    numbers2D: ["66", "69", "89", "98"],
    numbers3D: ["669", "689", "989"],
  },
  {
    slug: "teeth-falling",
    title: "ฝันว่าฟันหลุด",
    keyword: "ฝันว่าฟันหลุด",
    description: "ทำนายฝันว่าฟันหลุด พร้อมเลขเด็ด",
    meaning:
      "ฝันว่าฟันหลุดมักสะท้อนความกังวล การเปลี่ยนแปลง หรือเรื่องที่ต้องปล่อยวาง",
    numbers2D: ["13", "31", "03", "30"],
    numbers3D: ["130", "301", "313"],
  },
  {
    slug: "water",
    title: "ฝันเห็นน้ำ",
    keyword: "ฝันเห็นน้ำ",
    description: "ทำนายฝันเห็นน้ำ พร้อมเลขนำโชค",
    meaning:
      "น้ำในความฝันสื่อถึงอารมณ์ ความรู้สึก การไหลเวียนของชีวิต และโอกาสใหม่",
    numbers2D: ["22", "28", "82", "20"],
    numbers3D: ["228", "282", "820"],
  },
];

const generated = buildGeneratedDreamItems(1000);

const dreamMap = new Map<string, DreamItem>();

for (const item of generated) {
  dreamMap.set(item.slug, item);
}

for (const item of manualDreamItems) {
  dreamMap.set(item.slug, item);
}

export const allDreamItems: DreamItem[] = Array.from(dreamMap.values());

export function getDreamBySlug(slug: string): DreamItem | undefined {
  return allDreamItems.find((item) => item.slug === slug);
}