import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jiezistudio.com"),
  title: {
    default: "杰子建站工作室 | 品牌官网设计与交付",
    template: "%s | 杰子建站工作室",
  },
  description:
    "杰子建站工作室为创业者、小微企业和个人品牌梳理内容、设计页面，并协助完成品牌官网上线。",
  keywords: [
    "杰子建站工作室",
    "企业官网",
    "品牌官网",
    "小微企业官网",
    "个人品牌官网",
    "商业官网设计",
    "作品集网站",
    "外贸官网",
  ],
  authors: [{ name: "杰子建站工作室" }],
  openGraph: {
    title: "杰子建站工作室 | 品牌官网设计与交付",
    description:
      "为创业者、小微企业和个人品牌梳理内容、设计页面，并协助完成品牌官网上线。",
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
