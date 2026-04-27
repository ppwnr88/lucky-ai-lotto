import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ทำนายฝัน พร้อมเลขเด็ด | AI วิเคราะห์ความฝัน",
  description:
    "รวมคำทำนายฝันยอดฮิต พร้อมเลขเด็ด 2-3 ตัว และให้ AI วิเคราะห์ความฝันของคุณแบบทันที",
  keywords: [
    "ทำนายฝัน",
    "เลขเด็ด",
    "ฝันเห็น",
    "เลขนำโชค",
    "ฝันว่า",
    "หวย",
  ],
};

const dreamList = [
  {
    title: "ฝันว่าขับรถ",
    desc: "สื่อถึงการควบคุมชีวิต การตัดสินใจ และเส้นทางอนาคต",
    numbers: ["47", "89", "478"],
  },
  {
    title: "ฝันว่าฟันหลุด",
    desc: "อาจหมายถึงความกังวล การสูญเสีย หรือการเปลี่ยนแปลง",
    numbers: ["13", "31", "130"],
  },
  {
    title: "ฝันเห็นงู",
    desc: "เกี่ยวกับโชคลาภ ความรัก หรือพลังบางอย่างในชีวิต",
    numbers: ["56", "65", "569"],
  },
  {
    title: "ฝันว่าโดนน้ำ",
    desc: "สื่อถึงอารมณ์ ความรู้สึก และการปล่อยวาง",
    numbers: ["22", "28", "228"],
  },
];

export default function DreamMeaningPage() {
  return (
    <main className="min-h-screen bg-yellow-50 px-4 py-10">
      <section className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            🔮 ทำนายฝัน พร้อมเลขเด็ด
          </h1>
          <p className="text-gray-600 mt-3">
            รวมคำทำนายฝันยอดฮิต และเลขนำโชค พร้อม AI วิเคราะห์ความฝันของคุณ
          </p>
        </div>

        {/* List */}
        <div className="space-y-6">
          {dreamList.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-3">{item.desc}</p>

              <div className="flex gap-2 flex-wrap">
                {item.numbers.map((n, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-yellow-300 rounded-lg font-semibold"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-lg">
            ✨ อยากให้ AI วิเคราะห์ความฝันของคุณแบบละเอียด?
          </p>

          <Link
            href="/"
            className="inline-block bg-green-400 hover:bg-green-500 px-6 py-3 rounded-xl font-semibold"
          >
            👉 ไปคำนวณเลขกับ AI
          </Link>
        </div>
      </section>
    </main>
  );
}