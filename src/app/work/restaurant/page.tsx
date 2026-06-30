import type { Metadata } from "next";
import Link from "next/link";
import { BackHome, BrandFooter, DemoBadge, DemoTopbar, StudioCta, VisualFrame } from "../_components";

export const metadata: Metadata = {
  title: "餐厅品牌官网演示 | Mellow Table",
  description: "Mellow Table 餐厅品牌官网演示，展示品牌故事、招牌菜、主厨介绍、用餐环境和预约流程。",
  alternates: { canonical: "/work/restaurant" },
  openGraph: {
    title: "餐厅品牌官网演示 | Mellow Table",
    description: "奶油色、咖啡棕、橄榄绿与酒红构成的温暖餐饮品牌官网演示。",
    url: "/work/restaurant",
    type: "website",
  },
};

const navItems = [
  { label: "品牌故事", href: "/work/restaurant/story" },
  { label: "菜单", href: "/work/restaurant/menu" },
  { label: "餐厅信息", href: "/work/restaurant/contact" },
  { label: "预约", href: "/work/restaurant/contact" },
];

const dishes = [
  ["慢炖番茄牛肉饭", "番茄、牛肋条、香草米饭", "适合做主推单品，用颜色和描述建立食欲。"],
  ["橄榄油烤南瓜沙拉", "南瓜、芝麻菜、坚果、酸奶酱", "适合展示轻食、健康、季节菜单。"],
  ["酒红莓果塔", "莓果、酥皮、香草奶油", "用甜品建立品牌记忆点。"],
];

const booking = ["选择日期", "确认人数", "备注偏好", "收到确认"];

export default function RestaurantHome() {
  return (
    <main className="min-h-screen bg-[#fff7e8] text-[#3b2415]">
      <DemoTopbar brand="Mellow Table" navItems={navItems} className="border-[#dfc9a5]/70 bg-[#fff7e8]/88 text-[#3b2415]" markClassName="bg-[#5b1f1f] text-[#fff7e8]" mark="MT" />

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] py-14 lg:py-20">
        <div className="rounded-[2.5rem] bg-[#efe0c5] p-4 sm:p-6">
          <div className="rounded-[2rem] bg-[#fffaf0] p-8 sm:p-12">
            <DemoBadge className="bg-[#5b1f1f] text-[#fff7e8]" />
            <div className="mt-10 max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6d7a45]">Mellow Table</p>
              <h1 className="mt-5 text-[2.8rem] font-semibold leading-tight sm:text-7xl">
                <span className="block sm:inline">餐厅品牌</span>
                <span className="block sm:inline">官网演示</span>
              </h1>
              <p className="mt-5 max-w-[18rem] text-2xl font-semibold leading-snug text-[#5b1f1f] [word-break:break-all] sm:max-w-none">把一顿饭，变成一段被记住的日常。</p>
              <p className="mt-6 max-w-[19rem] text-lg leading-8 text-[#705844] [word-break:break-all] sm:max-w-2xl">适合餐厅、咖啡店、甜品店展示品牌故事、菜单和餐厅门店信息。这个演示站强调温暖、生活感和可预约的商业路径。</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
              <div className="min-h-[340px] rounded-[2rem] bg-[#6d7a45] p-8 text-[#fff7e8]">
                <p className="text-sm font-bold uppercase tracking-[0.24em]">Table Scene</p>
                <p className="mt-40 max-w-sm text-3xl font-semibold leading-tight">温暖灯光、慢下来的一餐、让人愿意收藏的餐厅故事。</p>
              </div>
              <div className="rounded-[2rem] bg-[#c68b59] p-7 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.22em]">Coffee</p>
                <p className="mt-32 text-2xl font-semibold">榛果拿铁</p>
              </div>
              <div className="rounded-[2rem] bg-[#5b1f1f] p-7 text-[#fff7e8]">
                <p className="text-sm font-bold uppercase tracking-[0.22em]">Dessert</p>
                <p className="mt-32 text-2xl font-semibold">莓果塔</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/work/restaurant/menu" className="rounded-full bg-[#5b1f1f] px-7 py-3.5 text-center font-semibold text-white transition hover:-translate-y-0.5">查看菜单</Link>
              <BackHome className="border-[#c8a86c] text-[#3b2415]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-10 py-20 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6d7a45]">Brand Story</p>
          <h2 className="mt-5 text-5xl font-semibold leading-tight">为什么叫 Mellow Table</h2>
        </div>
        <div className="space-y-6 text-lg leading-9 text-[#705844]">
          <p>Mellow 代表柔和、松弛和不过度打扰。Table 代表一张桌子，也代表人与人之间共享一段时间。</p>
          <p>Mellow Table 是一个虚拟餐饮品牌演示。它不是只展示菜单，而是把品牌理念、主厨视角、空间氛围和预约流程一起讲清楚，让访问者在看到食物之前，先感受到这家餐厅的性格。</p>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6d7a45]">Signature Dishes</p>
            <h2 className="mt-4 text-5xl font-semibold">招牌菜</h2>
          </div>
          <Link href="/work/restaurant/menu" className="rounded-full border border-[#c8a86c] px-5 py-2.5 text-sm font-semibold">完整菜单</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {dishes.map(([name, meta, desc]) => (
            <article key={name} className="rounded-[2rem] border border-[#dfc9a5] bg-[#fffaf0] p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="h-40 rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_25%,#fff7e8,#c68b59_38%,#6d7a45_39%,#5b1f1f_72%)]" />
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-[#6d7a45]">{meta}</p>
              <h3 className="mt-4 text-2xl font-semibold">{name}</h3>
              <p className="mt-4 leading-7 text-[#705844]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-8 pb-20 lg:grid-cols-[1fr_0.86fr]">
        <article className="rounded-[2rem] bg-[#6d7a45] p-8 text-[#fff7e8]">
          <p className="text-sm font-bold uppercase tracking-[0.28em]">Chef</p>
          <h2 className="mt-16 text-4xl font-semibold">主厨 Mira</h2>
          <p className="mt-5 leading-8 text-[#fff7e8]/78">虚拟主厨介绍适合承载餐厅的味觉方向、选材态度和料理理念。相比只列菜单，主厨故事更容易建立餐饮品牌的可信度和记忆点。</p>
        </article>
          <article className="rounded-[2rem] border border-[#dfc9a5] bg-[#fffaf0] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6d7a45]">Dining Atmosphere</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
            <VisualFrame label="dining table" className="h-36 rounded-[1.5rem] bg-[radial-gradient(circle_at_36%_45%,#fff7e8_0_14%,transparent_14.5%),linear-gradient(135deg,#efe0c5,#6d7a45)]" />
            <VisualFrame label="coffee" className="h-36 rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_50%,#3b2415_0_18%,#fff7e8_18.5%_30%,transparent_30.5%),linear-gradient(135deg,#c68b59,#efe0c5)]" />
            <VisualFrame label="kitchen mood" className="col-span-2 h-28 rounded-[1.5rem] bg-[linear-gradient(125deg,#5b1f1f,#c68b59_45%,#6d7a45_46%)]" />
          </div>
          <p className="mt-6 leading-8 text-[#705844]">图片区域按未来真实餐厅照片设计：空间、餐桌、饮品、甜品和人物氛围可以自然进入页面。</p>
        </article>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6d7a45]">Booking Flow</p>
        <h2 className="mt-4 text-5xl font-semibold">预约流程</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {booking.map((item, index) => (
            <div key={item} className="rounded-[1.6rem] bg-[#efe0c5] p-6">
              <p className="text-sm font-bold text-[#5b1f1f]">0{index + 1}</p>
              <p className="mt-10 text-2xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <div className="mb-20 grid gap-5 md:grid-cols-5">
          <VisualFrame label="signature dish" className="min-h-48 rounded-[1.5rem] bg-[radial-gradient(circle_at_48%_46%,#c68b59_0_22%,#fff7e8_22.5%_34%,transparent_34.5%),linear-gradient(135deg,#efe0c5,#5b1f1f)]" />
          <VisualFrame label="coffee cup" className="min-h-48 rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_42%,#3b2415_0_18%,#fff7e8_18.5%_32%,transparent_32.5%),linear-gradient(135deg,#fff7e8,#c68b59)]" />
          <VisualFrame label="dessert" className="min-h-48 rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_42%,#5b1f1f_0_18%,#fff7e8_18.5%_30%,transparent_30.5%),linear-gradient(135deg,#efe0c5,#c68b59)]" />
          <VisualFrame label="table" className="min-h-48 rounded-[1.5rem] bg-[linear-gradient(160deg,#fff7e8,#efe0c5_45%,#6d7a45_46%)]" />
          <VisualFrame label="chef mood" className="min-h-48 rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_28%,#fff7e8_0_10%,transparent_10.5%),linear-gradient(145deg,#5b1f1f,#3b2415)]" />
        </div>
        <StudioCta title="想做类似餐厅官网？" description="我们可以帮餐饮品牌把故事、菜单、餐厅信息和预约入口整理成更有记忆点的网站。" className="bg-[#5b1f1f] text-[#fff7e8]" buttonClassName="bg-[#fff7e8] text-[#5b1f1f]" />
      </section>
      <BrandFooter brand="MT / Mellow Table" line="有些餐厅卖的是菜，有些餐厅留下的是回忆。" className="border-t border-[#dfc9a5] bg-[#fffaf0] text-[#3b2415]" linkClassName="bg-[#5b1f1f] text-[#fff7e8]" />
    </main>
  );
}


