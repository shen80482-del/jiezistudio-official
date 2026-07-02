import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "专业领域 | 诚衡律师事务所官网演示",
  description: "诚衡律师事务所专业领域页演示，以编号、细线和分栏阅读呈现法律服务范围。",
  alternates: { canonical: "/work/law-firm/practice" },
};

const navItems = [
  { label: "首页", href: "/work/law-firm" },
  { label: "专业领域", href: "/work/law-firm/practice" },
  { label: "律师团队", href: "/work/law-firm/team" },
  { label: "咨询预约", href: "/work/law-firm/contact" },
];

const imageUrl =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&fm=jpg&q=70&w=2200";

const practices = [
  {
    num: "01",
    title: "公司与商业事务",
    desc: "适用于企业日常经营、合同谈判、股权安排、治理结构和商业合作中的法律支持。",
    note: "适合需要长期法律顾问、阶段性合同审查或重要商业决策支持的团队。",
  },
  {
    num: "02",
    title: "争议解决",
    desc: "围绕事实、证据、责任边界和商业目标，评估协商、函件、仲裁或诉讼等路径。",
    note: "重点不是制造对抗，而是帮助您理解不同路径的成本、时间和结果预期。",
  },
  {
    num: "03",
    title: "婚姻家事",
    desc: "处理财产分割、继承安排、抚养关系和家庭成员之间的法律沟通。",
    note: "这类事项需要清晰表达，也需要保护隐私和情绪边界。",
  },
  {
    num: "04",
    title: "劳动与雇佣",
    desc: "协助处理劳动合同、薪酬争议、离职沟通、工伤处理和企业用工管理。",
    note: "页面应让来访者先理解问题类型，再决定是否进入正式咨询。",
  },
];

function LawHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d8c7a4]/70 bg-[#fbf7ee]/92 backdrop-blur">
      <nav className="mx-auto flex w-[min(1180px,calc(100%-32px))] items-center justify-between gap-6 py-4 text-[#0d1f3b]">
        <Link href="/work/law-firm" className="flex items-center gap-3" aria-label="诚衡律师事务所首页">
          <span className="grid h-10 w-10 place-items-center border border-[#0d1f3b] text-sm font-semibold">CH</span>
          <span>
            <span className="block text-sm font-semibold">诚衡律师事务所</span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-[#78684e]">Studio Demo</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-[#43506a] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#0d1f3b]">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/#contact" className="hidden border border-[#0d1f3b] px-4 py-2 text-sm font-semibold transition hover:bg-[#0d1f3b] hover:text-white sm:inline-flex">
          返回主站
        </Link>
      </nav>
    </header>
  );
}

function LawFooter() {
  return (
    <footer className="border-t border-[#d8c7a4] bg-[#0d1f3b] px-4 py-12 text-[#fbf7ee]">
      <div className="mx-auto grid w-[min(1180px,100%)] gap-8 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-2xl font-semibold">诚衡律师事务所</p>
          <p className="mt-4 max-w-xl leading-7 text-white/68">法律服务行业官网演示。所有品牌、人物和内容均为演示，不对应真实机构。</p>
        </div>
        <div className="grid gap-2 text-sm text-white/70 md:justify-end">
          <span>法律声明（演示）</span>
          <span>隐私政策（演示）</span>
          <span>Studio Demo / 行业官网演示</span>
          <Link href="/#contact" className="text-[#d8b56d]">联系杰子建站工作室</Link>
        </div>
      </div>
    </footer>
  );
}

export default function LawPracticePage() {
  return (
    <main className="min-h-screen bg-[#fbf7ee] text-[#0d1f3b]">
      <LawHeader />

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <p className="inline-flex border border-[#b99b5f]/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6d35]">
            Studio Demo / 行业官网演示
          </p>
          <p className="mt-14 text-sm uppercase tracking-[0.28em] text-[#8a6d35]">Practice Areas</p>
          <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.12] sm:text-6xl">专业领域，应当让来访者快速找到方向。</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#43506a]">
            法律服务页面不适合做成模板卡片。它需要让每个问题有明确边界、说明和下一步沟通方式。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/work/law-firm/contact" className="border border-[#0d1f3b] bg-[#0d1f3b] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-transparent hover:text-[#0d1f3b]">
              预约咨询
            </Link>
            <Link href="/work/law-firm" className="border border-[#b99b5f] px-6 py-3 text-center text-sm font-semibold">
              返回首页
            </Link>
          </div>
        </div>
        <figure className="relative min-h-[380px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale-[20%]"
            style={{ backgroundImage: `linear-gradient(180deg, rgba(13,31,59,.1), rgba(13,31,59,.38)), url(${imageUrl})` }}
          />
          <figcaption className="absolute bottom-4 left-4 bg-[#fbf7ee]/92 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">Documents / Unsplash</figcaption>
        </figure>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-20">
        <div className="divide-y divide-[#d8c7a4] border-y border-[#d8c7a4]">
          {practices.map((item) => (
            <article key={item.title} className="grid gap-6 py-10 lg:grid-cols-[110px_0.65fr_1fr]">
              <p className="text-sm text-[#8a6d35]">{item.num}</p>
              <div>
                <h2 className="text-3xl font-semibold">{item.title}</h2>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#8a6d35]">Service Scope</p>
              </div>
              <div>
                <p className="text-lg leading-8 text-[#2f3d58]">{item.desc}</p>
                <p className="mt-5 border-l border-[#b99b5f] pl-5 leading-7 text-[#586277]">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-20">
        <div className="border border-[#d8c7a4] bg-[#fffaf1] p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.26em] text-[#8a6d35]">Next Step</p>
          <h2 className="mt-5 max-w-3xl text-[2rem] font-semibold leading-tight sm:text-4xl">如果您的问题不确定属于哪个领域，可以先从一次初步沟通开始。</h2>
          <Link href="/work/law-firm/contact" className="mt-8 inline-flex border border-[#0d1f3b] bg-[#0d1f3b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-transparent hover:text-[#0d1f3b]">
            预约咨询
          </Link>
        </div>
      </section>

      <LawFooter />
    </main>
  );
}
