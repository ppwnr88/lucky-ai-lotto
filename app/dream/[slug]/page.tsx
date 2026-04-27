import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allDreamItems, getDreamBySlug } from "@/lib/dream-data";
import SeoJsonLd from "@/components/SeoJsonLd";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return allDreamItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getDreamBySlug(slug);

  if (!item) {
    return {
      title: "ไม่พบคำทำนายฝัน",
    };
  }

  return {
    title: `${item.title} เลขเด็ด 2 ตัว 3 ตัว | ทำนายฝัน`,
    description: item.description,
    keywords: [item.keyword, "ทำนายฝัน", "เลขเด็ด", "หวย", "เลขนำโชค"],
    openGraph: {
      title: `${item.title} พร้อมเลขเด็ด`,
      description: item.description,
      type: "article",
    },
  };
}

function getRelatedItems(slug: string) {
  return allDreamItems.filter((item) => item.slug !== slug).slice(0, 6);
}

export default async function DreamDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getDreamBySlug(slug);

  if (!item) notFound();

  const relatedItems = getRelatedItems(slug);

  return (
    <main className="min-h-screen bg-yellow-50 px-4 py-10">
        <SeoJsonLd
            item={item}
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/dream/${item.slug}`}
        />
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8">
        <Link href="/dream" className="text-sm text-green-700 hover:underline">
          ← กลับไปรวมคำทำนายฝัน
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mt-6">
          {item.title} พร้อมเลขเด็ด 2 ตัว 3 ตัว
        </h1>

        <p className="text-gray-600 mt-4">{item.description}</p>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-3">🔮 {item.title} หมายถึงอะไร?</h2>
          <p className="text-gray-700 leading-8">{item.meaning}</p>
          <p className="text-gray-700 leading-8 mt-4">
            การทำนายฝันเป็นความเชื่อส่วนบุคคล บางคนใช้เพื่อดูแนวโน้มของจิตใจ
            บางคนใช้เพื่อหาเลขนำโชคแบบสนุก ๆ ดังนั้นควรมองเป็นความบันเทิง
            และใช้วิจารณญาณเสมอ
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-yellow-50 p-5">
          <h2 className="text-xl font-bold mb-3">🔥 เลขเด็ด 2 ตัว</h2>
          <div className="flex flex-wrap gap-3">
            {item.numbers2D.map((number) => (
              <span
                key={number}
                className="px-5 py-3 rounded-xl bg-yellow-300 text-black text-2xl font-bold"
              >
                {number}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-green-50 p-5">
          <h2 className="text-xl font-bold mb-3">🚀 เลขเด็ด 3 ตัว</h2>
          <div className="flex flex-wrap gap-3">
            {item.numbers3D.map((number) => (
              <span
                key={number}
                className="px-5 py-3 rounded-xl bg-green-300 text-black text-2xl font-bold"
              >
                {number}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-3">🧠 วิธีตีความความฝันนี้</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-8">
            <li>ดูว่าสิ่งที่ฝันเกี่ยวข้องกับคน สัตว์ สิ่งของ หรือเหตุการณ์</li>
            <li>สังเกตอารมณ์ในฝัน เช่น กลัว ดีใจ ตื่นเต้น หรือกังวล</li>
            <li>นำ keyword สำคัญไปเชื่อมกับเลขนำโชคแบบสนุก ๆ</li>
            <li>ไม่ควรใช้เลขจากความฝันเป็นเหตุผลหลักในการใช้เงิน</li>
          </ul>
        </section>

        <section className="mt-8 border-t pt-6">
          <h2 className="text-xl font-bold mb-4">❓ คำถามที่พบบ่อย</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">{item.title} ดีหรือไม่?</h3>
              <p className="text-gray-700 mt-1">
                โดยรวมถือเป็นความฝันที่ตีความได้หลายทาง ขึ้นอยู่กับบริบทและความรู้สึกในฝัน
              </p>
            </div>

            <div>
              <h3 className="font-semibold">{item.title} มีเลขอะไรบ้าง?</h3>
              <p className="text-gray-700 mt-1">
                เลขเด่น 2 ตัวคือ {item.numbers2D.join(", ")} และเลขเด่น 3 ตัวคือ{" "}
                {item.numbers3D.join(", ")}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">เลขจากความฝันเชื่อถือได้ไหม?</h3>
              <p className="text-gray-700 mt-1">
                ควรมองเป็นความบันเทิง ไม่ใช่การรับประกันผลลัพธ์หรือคำแนะนำทางการเงิน
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 border-t pt-6">
          <h2 className="text-xl font-bold mb-4">🔗 คำทำนายฝันที่เกี่ยวข้อง</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedItems.map((related) => (
              <Link
                key={related.slug}
                href={`/dream/${related.slug}`}
                className="rounded-xl bg-gray-50 p-4 hover:bg-yellow-50 transition"
              >
                <p className="font-semibold">{related.title}</p>
                <p className="text-sm text-gray-600 mt-1">
                  เลขเด่น: {related.numbers2D.slice(0, 3).join(", ")}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-10 rounded-2xl bg-green-50 p-6 text-center">
          <p className="text-lg font-medium mb-4">
            อยากให้ AI วิเคราะห์ความฝันของคุณแบบเฉพาะเจาะจง?
          </p>

          <Link
            href="/"
            className="inline-block rounded-xl bg-green-400 hover:bg-green-500 px-6 py-3 font-semibold text-black"
          >
            ไปคำนวณเลขด้วย AI
          </Link>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          * เนื้อหานี้จัดทำเพื่อความบันเทิงเท่านั้น ไม่ใช่การการันตีผลรางวัล
        </p>
      </article>
    </main>
  );
}