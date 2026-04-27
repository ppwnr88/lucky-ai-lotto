export const dreamSubjects = [
  "งู", "งูใหญ่", "งูเขียว", "งูดำ", "งูขาว", "งูเห่า", "งูจงอาง",
  "ปลา", "ปลาช่อน", "ปลาดุก", "ปลาคาร์ฟ", "ปลาทอง",
  "แมว", "หมา", "ช้าง", "เสือ", "สิงโต", "วัว", "ควาย", "ม้า",
  "ไก่", "นก", "กบ", "เต่า", "จระเข้", "หนู",
  "เงิน", "ทอง", "แหวน", "สร้อย", "ธนบัตร", "เหรียญ", "ลอตเตอรี่",
  "รถ", "รถยนต์", "รถมอเตอร์ไซค์", "รถไฟ", "เครื่องบิน", "เรือ",
  "บ้าน", "วัด", "โรงเรียน", "โรงพยาบาล", "ตลาด", "สะพาน", "ถนน",
  "น้ำ", "แม่น้ำ", "ทะเล", "น้ำท่วม", "ฝนตก", "ไฟ", "ไฟไหม้",
  "พระ", "พระพุทธรูป", "เทวดา", "พญานาค", "ผี", "คนตาย",
  "พ่อ", "แม่", "ญาติ", "เพื่อน", "แฟนเก่า", "เด็ก", "ทารก",
  "งานศพ", "งานแต่ง", "ตำรวจ", "ทหาร", "หมอ", "เจ้านาย",
  "รองเท้า", "เสื้อผ้า", "กระเป๋า", "โทรศัพท์", "นาฬิกา", "กระจก",
  "บันได", "ประตู", "หน้าต่าง", "ห้องน้ำ", "อาหาร", "ข้าว",
  "ต้นไม้", "ดอกไม้", "ผลไม้", "ภูเขา", "ป่า", "ดาว", "พระจันทร์",
  "พระอาทิตย์"
];

export const dreamActions = [
  "เห็น",
  "เจอ",
  "จับ",
  "ได้",
  "เสีย",
  "ซื้อ",
  "ขาย",
  "ขับ",
  "นั่ง",
  "เดินทางกับ",
  "วิ่งหนี",
  "โดนไล่โดย",
  "โดนกัดโดย",
  "คุยกับ",
  "ไหว้",
  "ให้ของกับ",
  "รับของจาก",
  "ตามหา",
  "ทำหาย",
  "เก็บได้"
];

export function createDreamTitle(action: string, subject: string): string {
  if (action === "เห็น") return `ฝันเห็น${subject}`;
  if (action === "เจอ") return `ฝันว่าเจอ${subject}`;
  if (action === "จับ") return `ฝันว่าจับ${subject}`;
  if (action === "ได้") return `ฝันว่าได้${subject}`;
  if (action === "เสีย") return `ฝันว่าเสีย${subject}`;
  if (action === "ซื้อ") return `ฝันว่าซื้อ${subject}`;
  if (action === "ขาย") return `ฝันว่าขาย${subject}`;
  if (action === "ขับ") return `ฝันว่าขับ${subject}`;
  if (action === "นั่ง") return `ฝันว่านั่ง${subject}`;
  if (action === "เดินทางกับ") return `ฝันว่าเดินทางกับ${subject}`;
  if (action === "วิ่งหนี") return `ฝันว่าวิ่งหนี${subject}`;
  if (action === "โดนไล่โดย") return `ฝันว่าโดน${subject}ไล่`;
  if (action === "โดนกัดโดย") return `ฝันว่าโดน${subject}กัด`;
  if (action === "คุยกับ") return `ฝันว่าคุยกับ${subject}`;
  if (action === "ไหว้") return `ฝันว่าไหว้${subject}`;
  if (action === "ให้ของกับ") return `ฝันว่าให้ของกับ${subject}`;
  if (action === "รับของจาก") return `ฝันว่าได้รับของจาก${subject}`;
  if (action === "ตามหา") return `ฝันว่าตามหา${subject}`;
  if (action === "ทำหาย") return `ฝันว่าทำ${subject}หาย`;
  return `ฝันว่าเก็บ${subject}ได้`;
}

export function createDreamSlug(title: string): string {
  return encodeURIComponent(
    title
      .replace(/^ฝันเห็น/, "")
      .replace(/^ฝันว่า/, "")
      .trim()
      .replace(/\s+/g, "-")
  );
}

export function buildDreamKeywords(limit = 1000) {
  const results: string[] = [];

  for (const subject of dreamSubjects) {
    for (const action of dreamActions) {
      results.push(createDreamTitle(action, subject));

      if (results.length >= limit) {
        return results;
      }
    }
  }

  return results;
}