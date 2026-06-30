import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jiezistudio.com"),
  title: {
    default: "杰子建站工作室 | 创业者的第一张互联网名片",
    template: "%s | 杰子建站工作室",
  },
  description:
    "杰子建站工作室帮助创业者、小微企业和个人品牌打造专业官网，提供响应式设计、SEO 基础优化、一站式上线和后期维护服务。",
  keywords: [
    "杰子建站工作室",
    "AI Website Studio",
    "企业官网",
    "小微企业建站",
    "个人品牌官网",
    "Next.js 网站开发",
    "商业官网设计",
    "SEO 官网",
  ],
  authors: [{ name: "杰子建站工作室" }],
  openGraph: {
    title: "杰子建站工作室 | 创业者的第一张互联网名片",
    description:
      "为创业者、小微企业和个人品牌制作专业官网，24小时起交付，响应式设计，一站式上线。",
    url: "https://jiezistudio.com",
    siteName: "杰子建站工作室",
    locale: "zh_CN",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
