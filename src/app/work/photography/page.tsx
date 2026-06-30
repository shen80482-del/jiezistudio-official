import type { Metadata } from "next";
import Link from "next/link";
import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../_components";

export const metadata: Metadata = {
  title: "摄影工作室官网演示 | LightFrame Studio",
  description: "摄影工作室官网演示，适合摄影师、创作者、个人品牌展示作品与预约服务。",
};

const navItems = [
  { label: "作品", href: "/work/photography/portfolio" },
  { label: "服务", href: "/work/photography/services" },
  { label: "关于", href: "/work/photography" },
  { label: "预约", href: "/work/photography/booking" },
];

export default function PhotographyHome() {
  return (
    <main className="min-h-screen bg-[#0d0d0c] text-[#f4f0e8]">
      <DemoTopbar brand="LightFrame Studio" navItems={navItems} className="border-white/10 bg-[#0d0d0c]/86 text-[#f4f0e8]" markClassName="bg-[#f4f0e8] text-[#0d0d0c]" />
      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-14 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex flex-col justify-between rounded-[2rem] border border-white/12 bg-[#171615] p-8 min-h-[520px]">
            <div>
              <DemoBadge className="bg-[#f4f0e8] text-[#0d0d0c]" />
              <p className="mt-10 text-xs font-bold uppercase tracking-[0.35em] text-[#b8afa1]">LightFrame Studio</p>
              <h1 className="mt-5 text-5xl font-semibold leading-none sm:text-7xl">摄影作品集官网演示</h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#c9c0b2]">适合摄影师、创作者、个人品牌展示作品与预约服务。</p>
            </div>
            <div>
              <p className="max-w-md text-2xl font-semibold leading-snug">用光影记录人的状态，用留白建立作品的高级感。</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/work/photography/portfolio" className="rounded-full bg-[#f4f0e8] px-7 py-3.5 text-center font-semibold text-[#0d0d0c]">浏览作品</Link>
                <BackHome className="border-white/20 text-[#f4f0e8]" />
              </div>
            </div>
          </div>
          <div className="grid min-h-[520px] grid-cols-2 gap-4 md:grid-cols-4">
            <div className="col-span-2 row-span-2 rounded-[2rem] bg-[linear-gradient(135deg,#f4f0e8,#90877b_48%,#1c1b1a)] p-5">
              <p className="text-sm font-bold text-[#0d0d0c]">Portrait 01</p>
            </div>
            <div className="rounded-[2rem] bg-[#2a2927] p-5">
              <span className="block h-full rounded-[1.5rem] border border-white/14" />
            </div>
            <div className="rounded-[2rem] bg-[#e0d7ca] p-5 text-[#0d0d0c]">
              <p className="text-sm font-bold">Studio</p>
            </div>
            <div className="rounded-[2rem] bg-[#141414] p-5">
              <span className="block h-24 rounded-full border border-[#f4f0e8]/30" />
            </div>
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,#3a3936,#111)] p-5">
              <p className="text-sm text-[#c9c0b2]">Film Mood</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 pb-16 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#b8afa1]">Brand Story</p>
          <h2 className="mt-4 text-4xl font-semibold">LightFrame Studio</h2>
        </div>
        <p className="text-lg leading-9 text-[#c9c0b2]">
          LightFrame Studio 是一个虚拟摄影品牌演示。它的品牌人格偏向安静、敏锐、克制和艺术化表达，适合用大幅视觉、留白和作品分类来承载创作者的审美与服务预约。
        </p>
      </section>
      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似作品集网站？" description="我们可以把作品、服务、预约流程整理成更适合成交的个人品牌官网。" className="bg-[#f4f0e8] text-[#0d0d0c]" buttonClassName="bg-[#0d0d0c] text-white" />
      </section>
    </main>
  );
}

