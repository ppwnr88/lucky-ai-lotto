import Link from "next/link";
import type { Metadata } from "next";
import { allDreamItems } from "@/lib/dream-data";

export const metadata: Metadata = {
  title: "รวมทำนายฝัน เลขเด็ด 2 ตัว 3 ตัว | Lucky AI Lotto",
  description:
    "รวมคำทำนายฝันยอดฮิต พร้อมเลขเด็ด 2 ตัว 3 ตัว และเลขนำโชค",
  keywords: ["ทำนายฝัน", "เลขเด็ด", "ฝันว่า", "ฝันเห็น", "หวย", "เลขนำโชค"],
};

type Props = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function DreamListPage({ searchParams }: Props) {
  const params = await searchParams;
  const q = params?.q?.trim() || "";

  const filteredItems = q
    ? allDreamItems.filter((item) =>
        item.title.toLowerCase().includes(q.toLowerCase())
      )
    : allDreamItems.slice(0, 120);

  return (
    <main className="min-h-screen bg-yellow-50 px-4 py-10">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Link href="/" className="text-sm text-green-700 hover:underline">
            ← กลับหน้าแรก
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            รวมทำนายฝัน พร้อมเลขเด็ด
          </h1>

          <p className="text-gray-600 mt-4">
            ค้นหาความฝันยอดฮิต เพื่อดูคำทำนายและเลขนำโชค 2 ตัว 3 ตัว
          </p>

          <form className="mt-6 max-w-xl mx-auto">
            <input
              name="q"
              defaultValue={q}
              placeholder="ค้นหา เช่น งู รถ เงิน ฟันหลุด"
              className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </form>

          <p className="mt-3 text-sm text-gray-500">
            {q
              ? `พบ ${filteredItems.length} รายการจากคำค้น “${q}”`
              : "แสดงรายการยอดนิยม 120 รายการแรก"}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Link
              key={item.slug}
              href={`/dream/${item.slug}`}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-bold">{item.title}</h2>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {item.meaning}
              </p>

              <div className="flex gap-2 flex-wrap mt-4">
                {item.numbers2D.slice(0, 3).map((number) => (
                  <span
                    key={number}
                    className="px-3 py-1 rounded-lg bg-yellow-300 font-bold text-sm"
                  >
                    {number}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="mt-10 rounded-2xl bg-white p-8 text-center shadow-md">
            <p className="text-lg font-semibold">ไม่พบคำทำนายที่ค้นหา</p>
            <p className="text-gray-600 mt-2">
              ลองค้นหาคำอื่น หรือให้ AI วิเคราะห์ความฝันของคุณโดยตรง
            </p>
          </div>
        )}

        <div className="mt-12 text-center rounded-2xl bg-white p-6 shadow-md">
          <p className="text-lg font-medium mb-4">
            ไม่เจอความฝันที่ต้องการ?
          </p>

          <Link
            href="/"
            className="inline-block rounded-xl bg-green-400 hover:bg-green-500 px-6 py-3 font-semibold text-black"
          >
            ให้ AI วิเคราะห์ความฝันของคุณ
          </Link>
        </div>
      </section>
    </main>
  );
}