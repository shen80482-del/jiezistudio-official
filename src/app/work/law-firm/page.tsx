import type { Metadata } from "next";
import Link from "next/link";
import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../_components";

export const metadata: Metadata = {
  title: "律师事务所官网演示 | 诚衡律师事务所 Studio Demo",
  description: "诚衡律师事务所行业官网演示，展示专业法律服务、创始律师、服务流程、FAQ 与预约咨询路径。",
  alternates: { canonical: "/work/law-firm" },
  openGraph: {
    title: "律师事务所官网演示 | 诚衡律师事务所",
    description: "深蓝、象牙白与金色构成的高信任法律服务官网演示。",
    url: "/work/law-firm",
    type: "website",
  },
};

const navItems = [
  { label: "首页", href: "/work/law-firm" },
  { label: "专业领域", href: "/work/law-firm/practice" },
  { label: "律师团队", href: "/work/law-firm/team" },
  { label: "咨询预约", href: "/work/law-firm/contact" },
];

const process = ["预约咨询", "案件分析", "制定方案", "持续沟通", "结案回访"];
const faqs = [
  ["第一次咨询收费吗？", "演示站中可按业务策略设置免费初步沟通或付费咨询，重点是让收费规则提前说明。"],
  ["合同纠纷多久处理？", "周期取决于证据材料、沟通进度和争议复杂度，官网应引导用户先提交基础信息。"],
  ["公司法律顾问如何合作？", "通常按月度或年度服务合作，可在官网中展示服务范围、沟通机制和响应方式。"],
  ["婚姻家事咨询需要准备什么？", "建议准备身份信息、关系证明、财产材料和已有沟通记录，页面可用清单降低咨询门槛。"],
  ["劳动争议可以线上沟通吗？", "可以先线上梳理情况，再判断是否需要进一步材料审查或正式委托。"],
  ["律师团队页面有什么作用？", "它能让访客看到专业背景、服务方向和沟通风格，从而建立初步信任。"],
  ["官网如何承接咨询线索？", "通过清晰入口、问题分类、流程说明和表单样式，让用户知道下一步该做什么。"],
  ["这个页面是真实律所吗？", "不是。诚衡律师事务所是杰子建站工作室自主设计开发的行业官网演示。"],
];

export default function LawFirmHome() {
  return (
    <main className="min-h-screen bg-[#f8f4ea] text-[#10213f]">
      <DemoTopbar brand="诚衡律师事务所" navItems={navItems} className="border-[#d8c7a4]/50 bg-[#f8f4ea]/88 text-[#10213f]" markClassName="bg-[#10213f] text-[#d8b56d]" />
      <Link href="/work/law-firm/contact" className="fixed bottom-5 right-5 z-50 rounded-full bg-[#10213f] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-[#10213f]/25 transition hover:-translate-y-0.5">
        预约咨询
      </Link>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] py-16 lg:py-24">
        <div className="border-l-4 border-[#d8b56d] pl-6">
          <DemoBadge className="bg-[#10213f] text-[#f7e6b4]" />
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.32em] text-[#8a6d35]">Chengheng Law Office</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight sm:text-7xl">专业法律服务官网演示</h1>
          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-snug text-[#8a6d35]">以秩序建立信任，以专业回应每一次托付。</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#44506a]">适合法律咨询、律师团队展示、服务领域介绍和预约咨询。这个演示站强调法律服务品牌最需要的三件事：清晰、克制、可信。</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/work/law-firm/contact" className="rounded-full bg-[#10213f] px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-[#10213f]/16 transition hover:-translate-y-0.5">
              预约咨询
            </Link>
            <BackHome className="border-[#c9b27d] text-[#10213f]" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-8 pb-20 lg:grid-cols-[0.78fr_1fr]">
        <div className="rounded-[2rem] bg-[#10213f] p-8 text-white shadow-2xl shadow-[#10213f]/10">
          <div className="aspect-[4/5] rounded-[1.5rem] border border-[#d8b56d]/30 bg-[linear-gradient(145deg,#23365c,#10213f_52%,#d8b56d_53%,#f8f4ea_53.6%,#10213f_54%)]" />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-[#d8b56d]">Founder Attorney</p>
          <h2 className="mt-3 text-3xl font-semibold">创始律师：陈衡</h2>
          <p className="mt-4 leading-8 text-white/72">照片区域为占位设计。创始律师页面适合展示执业理念、专业履历、服务边界和沟通方式，让访客先理解这个品牌的判断标准。</p>
        </div>
        <div className="space-y-6">
          <article className="rounded-[2rem] border border-[#d8c7a4] bg-[#fffaf0] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6d35]">Practice Philosophy</p>
            <h2 className="mt-4 text-4xl font-semibold">先把问题讲清楚，再谈解决方案。</h2>
            <p className="mt-5 leading-8 text-[#44506a]">诚衡律师事务所是一个虚拟法律品牌演示。它的品牌人格不是强势推销，而是用结构化表达建立安全感：清楚说明服务领域，清楚展示团队能力，清楚告诉用户如何开始咨询。</p>
          </article>
          <article className="rounded-[2rem] border border-[#d8c7a4] bg-white/70 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6d35]">Brand Statement</p>
            <p className="mt-4 text-3xl font-semibold leading-snug">专业不是距离感，而是让每一个复杂问题都有清晰路径。</p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6d35]">Service Process</p>
        <h2 className="mt-4 text-4xl font-semibold">咨询服务流程</h2>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#d8c7a4] bg-[#fffaf0]">
          {process.map((item, index) => (
            <div key={item} className="grid gap-4 border-b border-[#d8c7a4]/70 p-6 last:border-b-0 md:grid-cols-[120px_1fr]">
              <p className="text-sm font-bold text-[#8a6d35]">0{index + 1}</p>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold">{item}</h3>
                {index < process.length - 1 ? <span className="text-2xl text-[#8a6d35]">↓</span> : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6d35]">Why Choose Us</p>
        <h2 className="mt-4 text-4xl font-semibold">为什么选择我们</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            ["秩序", "页面从问题分类、团队能力到咨询步骤层层展开，减少访客的不确定感。"],
            ["信任", "用创始律师、执业理念和 FAQ 承接专业服务中最关键的信任建立。"],
            ["转化", "固定预约入口和清晰流程帮助访客完成从了解，到咨询的下一步。"],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-[2rem] border border-[#d8c7a4] bg-white/70 p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-3xl font-semibold text-[#8a6d35]">{title}</h3>
              <p className="mt-5 leading-8 text-[#44506a]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6d35]">FAQ</p>
        <h2 className="mt-4 text-4xl font-semibold">真实咨询前，用户最关心的问题</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-[1.5rem] border border-[#d8c7a4] bg-[#fffaf0] p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {question}
                <span className="text-[#8a6d35] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-[#44506a]">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似律师官网？" description="我们可以帮你把专业服务、团队介绍、咨询路径整理成高信任感的网站表达。" className="bg-[#10213f] text-white" buttonClassName="bg-[#d8b56d] text-[#10213f]" />
      </section>
    </main>
  );
}
