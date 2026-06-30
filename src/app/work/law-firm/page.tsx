import type { Metadata } from "next";
import Link from "next/link";
import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../_components";

export const metadata: Metadata = {
  title: "律师事务所官网演示 | 诚衡律师事务所 Studio Demo",
  description: "律师事务所官网演示，适合法律咨询、律师团队展示、服务领域介绍和预约咨询。",
};

const navItems = [
  { label: "首页", href: "/work/law-firm" },
  { label: "专业领域", href: "/work/law-firm/practice" },
  { label: "律师团队", href: "/work/law-firm/team" },
  { label: "咨询预约", href: "/work/law-firm/contact" },
];

export default function LawFirmHome() {
  return (
    <main className="min-h-screen bg-[#f8f4ea] text-[#10213f]">
      <DemoTopbar brand="诚衡律师事务所" navItems={navItems} className="border-[#d8c7a4]/50 bg-[#f8f4ea]/88 text-[#10213f]" markClassName="bg-[#10213f] text-[#d8b56d]" />
      <section className="mx-auto grid w-[min(1120px,calc(100%-32px))] items-center gap-10 py-16 lg:grid-cols-[1fr_0.78fr] lg:py-24">
        <div>
          <DemoBadge className="bg-[#10213f] text-[#f7e6b4]" />
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-[#8a6d35]">Chengheng Law Office</p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-normal sm:text-7xl">专业法律服务官网演示</h1>
          <p className="mt-5 max-w-xl text-2xl font-semibold text-[#8a6d35]">以秩序建立信任，以专业回应每一次托付。</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#44506a]">适合法律咨询、律师团队展示、服务领域介绍和预约咨询。</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/work/law-firm/contact" className="rounded-full bg-[#10213f] px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-[#10213f]/16">
              咨询预约
            </Link>
            <BackHome className="border-[#c9b27d] text-[#10213f]" />
          </div>
        </div>
        <div className="rounded-[2rem] border border-[#d8c7a4] bg-[#fffaf0] p-5 shadow-2xl shadow-[#10213f]/10">
          <div className="rounded-[1.5rem] bg-[#10213f] p-6 text-white">
            <div className="flex items-center justify-between border-b border-white/15 pb-5 text-sm text-white/70">
              <span>诚衡律师事务所</span>
              <span>行业官网演示</span>
            </div>
            <div className="mt-10">
              <p className="text-sm font-semibold text-[#d8b56d]">Legal Consultation</p>
              <h2 className="mt-3 text-3xl font-semibold">清晰展示专业领域，让咨询更容易发生。</h2>
              <p className="mt-4 leading-7 text-white/68">诚衡是一个为演示而创建的虚拟法律服务品牌，品牌人格强调克制、严谨、可靠和清晰沟通。</p>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {["专业", "可信", "清晰", "易咨询"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <p className="text-xl font-semibold text-[#f7e6b4]">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-white/62">适合法律服务官网的信息表达。</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-5 pb-16 md:grid-cols-4">
        {["婚姻家事", "合同纠纷", "公司法律顾问", "劳动争议"].map((item) => (
          <Link key={item} href="/work/law-firm/practice" className="rounded-[1.5rem] border border-[#d8c7a4] bg-white/70 p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-sm font-semibold text-[#8a6d35]">专业领域</p>
            <h3 className="mt-5 text-xl font-semibold">{item}</h3>
          </Link>
        ))}
      </section>
      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-16">
        <div className="grid gap-6 rounded-[2rem] border border-[#d8c7a4] bg-[#fffaf0] p-8 md:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6d35]">Brand Story</p>
            <h2 className="mt-4 text-3xl font-semibold">诚衡律师事务所</h2>
          </div>
          <p className="leading-8 text-[#44506a]">
            这是一个虚拟法律品牌演示。网站通过深蓝建立专业信任，用象牙白降低距离感，再用金色点缀呈现稳重品质，适合需要展示专业资质、服务领域和咨询路径的法律服务机构。
          </p>
        </div>
      </section>
      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <StudioCta
          title="想做类似律师官网？"
          description="我们可以帮你把专业服务、团队介绍、咨询路径整理成高信任感的网站表达。"
          className="bg-[#10213f] text-white"
          buttonClassName="bg-[#d8b56d] text-[#10213f]"
        />
      </section>
    </main>
  );
}
