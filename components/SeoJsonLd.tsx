import { DreamItem } from "@/lib/dream-data";

type Props = {
  item: DreamItem;
  url: string;
};

export default function SeoJsonLd({ item, url }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${item.title} พร้อมเลขเด็ด`,
    description: item.description,
    url,
    inLanguage: "th",
    author: {
      "@type": "Organization",
      name: "Lucky AI Lotto",
    },
    mainEntityOfPage: url,
    keywords: [
      item.keyword,
      "ทำนายฝัน",
      "เลขเด็ด",
      "หวย",
      "เลขนำโชค",
    ],
    articleBody: item.meaning,
    mainEntity: [
      {
        "@type": "Question",
        name: `${item.title} หมายถึงอะไร?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.meaning,
        },
      },
      {
        "@type": "Question",
        name: `${item.title} มีเลขอะไรบ้าง?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `เลขเด่น 2 ตัวคือ ${item.numbers2D.join(
            ", "
          )} และเลขเด่น 3 ตัวคือ ${item.numbers3D.join(", ")}`,
        },
      },
      {
        "@type": "Question",
        name: "เลขจากความฝันเชื่อถือได้หรือไม่?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ควรมองเป็นความบันเทิง ไม่ใช่การรับประกันผลลัพธ์",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}