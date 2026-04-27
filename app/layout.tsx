import type { Metadata } from "next";
import "./globals.css";
import GoogleAdSense from "@/components/GoogleAdSense";

export const metadata:Metadata = {
  title: "เลขเด็ดจากความฝัน | AI ทำนายเลขหวย",
  description:
    "ทำนายเลขเด็ดจากความฝันด้วย AI วิเคราะห์ข้อความและสร้างเลข 2-3 ตัวแบบสนุก ๆ",
  keywords: ["เลขเด็ด", "ฝัน", "หวย", "ทำนายฝัน", "เลขนำโชค"],
  icons: {
    icon: "/icon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <GoogleAdSense />
      <body>{children}</body>
    </html>
  );
}