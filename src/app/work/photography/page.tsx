import type { Metadata } from "next";
import Link from "next/link";
import { BackHome, BrandFooter, DemoBadge, DemoTopbar, StudioCta, VisualFrame } from "../_components";

export const metadata: Metadata = {
  title: "摄影工作室官网演示 | LightFrame Studio",
  description: "LightFrame Studio 摄影工作室官网演示，展示作品集、摄影理念、服务套餐、预约咨询和评价内容。",
  alternates: { canonical: "/work/photography" },
  openGraph: {
    title: "摄影工作室官网演示 | LightFrame Studio",
    description: "黑白、暖灰与胶片感构成的高完成度摄影作品集官网演示。",
    url: "/work/photography",
    type: "website",
  },
};

const navItems = [
  { label: "作品", href: "/work/photography/portfolio" },
  { label: "服务", href: "/work/photography/services" },
  { label: "关于", href: "/work/photography" },
  { label: "预约", href: "/work/photography/booking" },
];

const categories = [
  ["Portrait", "人像", "人与情绪之间，留下一段安静的距离。"],
  ["Wedding", "婚礼", "不制造戏剧感，只保留真实发生的温度。"],
  ["Brand", "品牌商业", "为品牌建立一组可持续使用的视觉资产。"],
  ["Travel", "旅行", "让地点、人物和时间共同成为影像叙事。"],
];

const packages = [
  ["Portrait", "个人写真", "适合形象照、社交头像、纪念拍摄和职业档案。"],
  ["Wedding", "婚礼纪实", "适合婚礼全天跟拍、仪式记录和双人故事。"],
  ["Brand", "品牌商业", "适合主理人、产品、电商和品牌内容更新。"],
  ["Creative", "创作企划", "适合需要完整视觉方向、场景和主题表达的拍摄。"],
];

const reviews = [
  ["独立设计师", "网站把作品放在真正重要的位置，咨询者不用翻很多内容就能理解我的风格。"],
  ["咖啡品牌主理人", "商业拍摄页面让服务范围更清楚，也让我们后续推广素材更统一。"],
  ["婚礼策划师", "预约流程写得很明确，减少了很多重复沟通。"],
];

export default function PhotographyHome() {
  return (
    <main className="min-h-screen bg-[#0d0d0c] text-[#f4f0e8]">
      <DemoTopbar brand="LightFrame Studio" navItems={navItems} className="border-white/10 bg-[#0d0d0c]/86 text-[#f4f0e8]" markClassName="bg-[#f4f0e8] text-[#0d0d0c]" mark="LF" />

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-16 sm:py-24">
        <div className="max-w-4xl">
          <DemoBadge className="bg-[#f4f0e8] text-[#0d0d0c]" />
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.4em] text-[#b8afa1]">LightFrame Studio</p>
          <h1 className="mt-6 text-[3.2rem] font-semibold leading-[0.95] tracking-normal sm:text-8xl lg:text-[8.2rem]">
            <span className="block sm:inline">摄影作品集</span>
            <span className="block sm:inline">官网演示</span>
          </h1>
          <p className="mt-10 max-w-[18rem] text-2xl font-semibold leading-snug text-[#e3dbcf] [word-break:break-all] sm:max-w-2xl">用光影记录人的状态，用留白建立作品的高级感。</p>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="min-h-[420px] rounded-[2.4rem] bg-[linear-gradient(135deg,#f4f0e8,#8f877c_45%,#161514_72%)] p-8 text-[#0d0d0c] transition hover:scale-[1.01]">
            <p className="text-sm font-bold uppercase tracking-[0.28em]">Selected Frame</p>
          </div>
          <div className="flex min-h-[420px] flex-col justify-between rounded-[2.4rem] border border-white/12 bg-[#171615] p-7">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b8afa1]">Studio Demo</p>
            <p className="text-3xl font-semibold leading-tight">适合摄影师、创作者、个人品牌展示作品与预约服务。</p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-[2rem] bg-[#f4f0e8] p-7 text-[#0d0d0c]">
              <p className="text-sm font-bold">Film Mood</p>
              <p className="mt-16 text-2xl font-semibold">留白、克制、视觉冲击。</p>
            </div>
            <div className="rounded-[2rem] border border-white/12 bg-[#24231f] p-7">
              <p className="text-sm text-[#c9c0b2]">Designed for future real work.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/work/photography/portfolio" className="rounded-full bg-[#f4f0e8] px-7 py-3.5 text-center font-semibold text-[#0d0d0c] transition hover:-translate-y-0.5">浏览作品</Link>
          <BackHome className="border-white/20 text-[#f4f0e8]" />
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-24 sm:py-32">
        <p className="text-sm font-bold uppercase tracking-[0.34em] text-[#b8afa1]">Photography Philosophy</p>
        <div className="mt-10 grid gap-12 lg:grid-cols-[0.72fr_1fr]">
          <h2 className="text-5xl font-semibold leading-tight sm:text-7xl">我们不急着填满画面。</h2>
          <div className="space-y-7 text-xl leading-10 text-[#c9c0b2]">
            <p>LightFrame Studio 是一个虚拟摄影品牌演示。它的品牌人格是安静、敏锐、克制，同时保留视觉上的力量。</p>
            <p>摄影网站不应该只是把图片堆满。真正重要的是让访客感受到摄影师如何观察人、光线、空间和关系。页面的留白、作品的排列、文字的节奏，都在帮助客户判断：这是不是我想合作的人。</p>
            <p>所以这个演示站把大图感、胶片色、作品分类和预约路径放在同一条叙事里，让视觉完成度直接服务商业咨询。</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.34em] text-[#b8afa1]">Categories</p>
            <h2 className="mt-4 text-5xl font-semibold">分类作品</h2>
          </div>
          <Link href="/work/photography/portfolio" className="hidden rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold md:inline-flex">查看作品集</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {categories.map(([en, cn, desc], index) => (
            <article key={en} className={`min-h-[360px] rounded-[2.2rem] p-7 transition hover:-translate-y-1 ${index % 2 === 0 ? "bg-[#f4f0e8] text-[#0d0d0c]" : "bg-[#171615] text-[#f4f0e8] border border-white/12"}`}>
              <p className="text-xs font-bold uppercase tracking-[0.28em] opacity-60">{en}</p>
              <h3 className="mt-32 text-3xl font-semibold">{cn}</h3>
              <p className="mt-4 leading-7 opacity-70">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-24">
        <p className="text-sm font-bold uppercase tracking-[0.34em] text-[#b8afa1]">Services</p>
        <div className="mt-10 divide-y divide-white/12 border-y border-white/12">
          {packages.map(([en, cn, desc]) => (
            <article key={en} className="grid gap-5 py-8 md:grid-cols-[0.3fr_0.35fr_1fr]">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b8afa1]">{en}</p>
              <h3 className="text-3xl font-semibold">{cn}</h3>
              <p className="text-lg leading-8 text-[#c9c0b2]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-24">
        <p className="text-sm font-bold uppercase tracking-[0.34em] text-[#b8afa1]">Testimonials</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map(([role, quote]) => (
            <article key={role} className="rounded-[2rem] border border-white/12 bg-[#171615] p-7 transition hover:-translate-y-1">
              <p className="text-sm font-bold text-[#b8afa1]">{role}</p>
              <p className="mt-8 text-xl font-semibold leading-8">“{quote}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-24">
        <div className="mb-24 grid gap-6 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <VisualFrame label="portrait" className="min-h-[420px] rounded-[2.4rem] bg-[radial-gradient(circle_at_42%_28%,#f4f0e8_0_9%,transparent_9.5%),linear-gradient(160deg,#1b1a18,#6f675f_48%,#f4f0e8_49%,#0d0d0c_70%)]" />
          <div className="grid gap-6">
            <VisualFrame label="wedding" className="min-h-48 rounded-[2rem] bg-[radial-gradient(circle_at_35%_35%,#f4f0e8_0_10%,transparent_10.5%),radial-gradient(circle_at_65%_38%,#c9c0b2_0_9%,transparent_9.5%),linear-gradient(135deg,#0d0d0c,#24231f)]" />
            <VisualFrame label="film" className="min-h-48 rounded-[2rem] bg-[repeating-linear-gradient(90deg,#111_0_12px,#2f2d29_12px_16px,#f4f0e8_16px_18px)]" />
          </div>
          <div className="grid gap-6">
            <VisualFrame label="brand shoot" className="min-h-48 rounded-[2rem] bg-[linear-gradient(135deg,#f4f0e8,#8f877c_45%,#0d0d0c_46%)]" />
            <VisualFrame label="studio" className="min-h-48 rounded-[2rem] bg-[radial-gradient(circle_at_72%_25%,#f4f0e8_0_12%,transparent_12.5%),linear-gradient(145deg,#171615,#3a3936)]" />
          </div>
        </div>
        <StudioCta title="想做类似作品集网站？" description="我们可以把作品、服务、预约流程整理成更适合成交的个人品牌官网。" className="bg-[#f4f0e8] text-[#0d0d0c]" buttonClassName="bg-[#0d0d0c] text-white" />
      </section>
      <BrandFooter brand="LF / LightFrame Studio" line="每一次快门，都值得拥有一个被认真展示的地方。" className="border-t border-white/10 bg-[#0d0d0c] text-[#f4f0e8]" linkClassName="bg-[#f4f0e8] text-[#0d0d0c]" />
    </main>
  );
}


