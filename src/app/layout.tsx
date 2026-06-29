import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jiezistudio.com"),
  title: {
    default: "杰子建站工作室 | 高转化商业官网设计与开发",
    template: "%s | 杰子建站工作室",
  },
  description:
    "杰子建站工作室为创业者、中小企业与个人品牌提供现代化官网设计、Next.js 开发、SEO 基础优化与上线交付服务。",
  keywords: [
    "杰子建站工作室",
    "成都建站",
    "企业官网",
    "Next.js 网站开发",
    "商业官网设计",
    "SEO 官网",
  ],
  authors: [{ name: "杰子建站工作室" }],
  openGraph: {
    title: "杰子建站工作室 | 高转化商业官网设计与开发",
    description:
      "蓝白商务风格、响应式体验、SEO 基础优化，从策略到上线交付的商业官网服务。",
    url: "https://jiezistudio.com",
    siteName: "杰子建站工作室",
    locale: "zh_CN",
    type: "website",
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
