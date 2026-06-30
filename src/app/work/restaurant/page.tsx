import type { Metadata } from "next";
import Link from "next/link";
import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../_components";

export const metadata: Metadata = {
  title: "餐厅品牌官网演示 | Mellow Table",
  description: "餐厅品牌官网演示，适合餐厅、咖啡店、甜品店展示品牌故事、菜单和餐厅门店信息。",
};

const navItems = [
  { label: "品牌故事", href: "/work/restaurant/story" },
  { label: "菜单", href: "/work/restaurant/menu" },
  { label: "餐厅信息", href: "/work/restaurant/contact" },
  { label: "预约", href: "/work/restaurant/contact" },
];

export default function RestaurantHome() {
  return (
    <main className="min-h-screen bg-[#fff7e8] text-[#3b2415]">
      <DemoTopbar brand="Mellow Table" navItems={navItems} className="border-[#dfc9a5]/70 bg-[#fff7e8]/88 text-[#3b2415]" markClassName="bg-[#5b1f1f] text-[#fff7e8]" />
      <section className="mx-auto w-[min(1120px,calc(100%-32px))] py-14 lg:py-20">
        <div className="rounded-[2.2rem] bg-[#efe0c5] p-5">
          <div className="grid gap-8 rounded-[1.8rem] border border-[#d5b985] bg-[#fffaf0] p-8 lg:grid-cols-[1fr_0.9fr] lg:p-12">
            <div>
              <DemoBadge className="bg-[#5b1f1f] text-[#fff7e8]" />
              <p className="mt-10 text-sm font-bold uppercase tracking-[0.28em] text-[#6d7a45]">Mellow Table</p>
              <h1 className="mt-5 text-5xl font-semibold leading-tight sm:text-7xl">餐厅品牌官网演示</h1>
              <p className="mt-5 text-2xl font-semibold text-[#5b1f1f]">把一顿饭，变成一段被记住的日常。</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#705844]">适合餐厅、咖啡店、甜品店展示品牌故事、菜单和餐厅门店信息。</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/work/restaurant/menu" className="rounded-full bg-[#5b1f1f] px-7 py-3.5 text-center font-semibold text-white">查看菜单</Link>
                <BackHome className="border-[#c8a86c] text-[#3b2415]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-[2rem] bg-[#6d7a45] p-8 text-[#fff7e8]">
                <p className="text-sm font-bold uppercase tracking-[0.22em]">Slow Dining</p>
                <p className="mt-16 text-3xl font-semibold">温暖、松弛、有记忆点的餐厅品牌表达。</p>
              </div>
              <div className="rounded-[2rem] bg-[#c68b59] p-6 text-white">
                <p className="text-xl font-semibold">Coffee</p>
              </div>
              <div className="rounded-[2rem] bg-[#5b1f1f] p-6 text-[#fff7e8]">
                <p className="text-xl font-semibold">Dessert</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-6 pb-16 lg:grid-cols-[0.7fr_1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6d7a45]">Brand Story</p>
          <h2 className="mt-4 text-4xl font-semibold">Mellow Table</h2>
        </div>
        <p className="text-lg leading-9 text-[#705844]">
          Mellow Table 是一个虚拟餐饮品牌演示。品牌人格温暖、松弛、细腻，适合用色彩、菜单卡片和故事内容展示餐厅氛围，让顾客在访问网站时先感受到品牌气质。
        </p>
      </section>
      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似餐厅官网？" description="我们可以帮餐饮品牌把故事、菜单、餐厅信息和预约入口整理成更有记忆点的网站。" className="bg-[#5b1f1f] text-[#fff7e8]" buttonClassName="bg-[#fff7e8] text-[#5b1f1f]" />
      </section>
    </main>
  );
}

