import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "律师事务所官网演示 | 诚衡律师事务所",
  description: "诚衡律师事务所行业官网演示，呈现法律服务沟通、专业领域说明和咨询路径。",
  alternates: { canonical: "/work/law-firm" },
  openGraph: {
    title: "律师事务所官网演示 | 诚衡律师事务所",
    description: "呈现法律服务沟通、专业领域说明和咨询路径。",
    url: "/work/law-firm",
    type: "website",
  },
};

const navItems = [
  { label: "首页", href: "/work/law-firm" },
  { label: "专业领域", href: "/work/law-firm/practice" },
  { label: "律师团队", href: "/work/law-firm/team" },
  { label: "开始沟通", href: "/work/law-firm/contact" },
];

const imageUrls = {
  hero:
    "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&fm=jpg&q=70&w=2400",
  documents:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&fm=jpg&q=70&w=1800",
  library:
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&fm=jpg&q=70&w=1800",
};

const practices = [
  ["01", "公司与商业事务", "为企业日常经营、合同谈判、股权安排和风险控制提供结构化法律支持。"],
  ["02", "争议解决", "围绕事实、证据和商业目标评估处理路径，帮助您在复杂争议中保持判断。"],
  ["03", "婚姻家事", "在财产、继承、抚养和家庭关系议题中，提供清晰、克制且尊重隐私的沟通方式。"],
  ["04", "劳动与雇佣", "协助企业和个人理解劳动关系中的责任边界、沟通策略和后续处理安排。"],
];

const process = [
  ["开始沟通", "先了解您的问题背景、沟通目标和希望解决的核心事项。"],
  ["案件分析", "整理事实、材料和关键风险，判断是否适合进一步委托。"],
  ["制定方案", "把可选路径、时间预期和费用边界说明清楚。"],
  ["持续沟通", "在每个重要节点同步进展，让您知道事情正在如何推进。"],
  ["结案回访", "复盘处理结果，并提示后续需要注意的法律风险。"],
];

const faqs = [
  ["第一次沟通需要准备什么？", "建议先整理问题经过、相关材料和您最关心的结果。信息越清楚，初步判断越准确。"],
  ["是否一定需要线下面谈？", "不一定。许多事项可以先通过远程方式完成初步沟通，再判断是否需要进一步会面。"],
  ["合同纠纷通常如何开始？", "通常先看合同文本、履行记录和沟通证据，再判断协商、函件或诉讼等路径。"],
  ["公司顾问适合哪些企业？", "适合需要长期处理合同、用工、股权、合规和商业谈判问题的团队。"],
  ["费用会提前说明吗？", "会。正式委托前，应先说明服务范围、计费方式和可能产生的其他成本。"],
  ["这个页面是真实律所吗？", "不是。诚衡律师事务所为行业官网演示，不对应真实律所或真实律师。"],
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

function DemoLabel() {
  return (
    <p className="inline-flex border border-[#b99b5f]/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6d35]">
      Studio Demo / 行业官网演示
    </p>
  );
}

function PhotoPanel({ image, label, className = "" }: { image: string; label: string; className?: string }) {
  return (
    <figure className={`relative overflow-hidden bg-[#d8c7a4] ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center grayscale-[18%]"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(9, 20, 38, 0.12), rgba(9, 20, 38, 0.34)), url(${image})` }}
      />
      <figcaption className="absolute bottom-4 left-4 bg-[#fbf7ee]/92 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#0d1f3b]">
        {label}
      </figcaption>
    </figure>
  );
}

function LawFooter() {
  return (
    <footer className="border-t border-[#d8c7a4] bg-[#0d1f3b] px-4 py-12 text-[#fbf7ee]">
      <div className="mx-auto grid w-[min(1180px,100%)] gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-2xl font-semibold">诚衡律师事务所</p>
          <p className="mt-4 max-w-lg leading-7 text-white/68">
            这是杰子建站工作室制作的法律服务行业官网演示，不对应真实律所或真实律师。
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-[#d8b56d]">Studio Demo / 行业官网演示</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#d8b56d]">专业领域</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link href="/work/law-firm/practice">公司与商业事务</Link>
            <Link href="/work/law-firm/practice">争议解决</Link>
            <Link href="/work/law-firm/practice">婚姻家事</Link>
            <Link href="/work/law-firm/practice">劳动与雇佣</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#d8b56d]">联系方式</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link href="/work/law-firm/contact">开始沟通</Link>
            <Link href="/#contact">联系杰子建站工作室</Link>
            <span>法律声明（演示）</span>
            <span>隐私政策（演示）</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LawFirmHome() {
  return (
    <main className="min-h-screen bg-[#fbf7ee] text-[#0d1f3b]">
      <LawHeader />

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div className="pb-4">
            <DemoLabel />
            <p className="mt-14 text-sm uppercase tracking-[0.3em] text-[#8a6d35]">Chengheng Law Office</p>
            <h1 className="mt-6 max-w-3xl text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.01em] sm:text-6xl">
              <span className="block">让复杂法律问题，</span>
              <span className="block">先被清楚理解。</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#43506a]">
              诚衡律师事务所是一组行业官网演示。
              我们希望用真实的办公影像、清晰的信息结构和克制的页面表达，呈现法律服务网站应有的专业感与可信度。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/work/law-firm/practice" className="border border-[#0d1f3b] bg-[#0d1f3b] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-transparent hover:text-[#0d1f3b]">
                查看专业领域
              </Link>
              <Link href="/work/law-firm/contact" className="border border-[#b99b5f] px-6 py-3 text-center text-sm font-semibold text-[#0d1f3b] transition hover:border-[#0d1f3b]">
                开始沟通
              </Link>
            </div>
          </div>
          <PhotoPanel image={imageUrls.hero} label="Conference Room / Unsplash" className="min-h-[420px] lg:min-h-[620px]" />
        </div>
      </section>

      <section className="border-y border-[#d8c7a4] bg-[#fffaf1]">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 py-14 md:grid-cols-3">
          {[
            ["每一次沟通，都从理解问题开始", "在讨论解决方案之前，我们更愿意先了解事情的经过、您的目标，以及希望解决的问题。"],
            ["专业判断，需要建立在充分沟通之上", "不同案件有不同背景。清晰的沟通，可以帮助双方更快找到真正需要关注的重点。"],
            ["让复杂的信息，更容易理解", "我们希望通过清晰的结构、准确的表达和稳定的节奏，让每一次沟通都更加高效。"],
          ].map(([title, desc]) => (
            <article key={title} className="border-l border-[#b99b5f] pl-5">
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-[#43506a]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-12 py-20 lg:grid-cols-[0.62fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-[#8a6d35]">Practice Areas</p>
          <h2 className="mt-5 text-[2rem] font-semibold leading-tight sm:text-4xl">
            <span className="block">专业领域不是清单，</span>
            <span className="block">而是判断入口。</span>
          </h2>
          <p className="mt-6 leading-8 text-[#43506a]">
            不同领域的问题，需要不同的处理方式。
            您可以从最接近自己需求的方向开始了解，再决定下一步如何沟通。
          </p>
        </div>
        <div className="divide-y divide-[#d8c7a4] border-y border-[#d8c7a4]">
          {practices.map(([num, title, desc]) => (
            <Link key={title} href="/work/law-firm/practice" className="grid gap-5 py-7 transition hover:bg-[#fffaf1] md:grid-cols-[90px_0.72fr_1fr]">
              <span className="text-sm text-[#8a6d35]">{num}</span>
              <span className="text-2xl font-semibold">{title}</span>
              <span className="leading-7 text-[#43506a]">{desc}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 pb-20 lg:grid-cols-[1fr_0.82fr]">
        <PhotoPanel image={imageUrls.documents} label="Documents / Unsplash" className="min-h-[420px]" />
        <div className="border-t border-[#d8c7a4] pt-8">
          <p className="text-sm uppercase tracking-[0.26em] text-[#8a6d35]">Founder Note</p>
          <h2 className="mt-5 text-[2rem] font-semibold leading-tight sm:text-4xl">每一个问题，都值得认真对待。</h2>
          <p className="mt-6 leading-8 text-[#43506a]">
            很多法律问题，并不需要第一时间得到答案。
          </p>
          <p className="mt-4 leading-8 text-[#43506a]">
            更重要的是先理解事实、厘清重点，再判断下一步应该如何处理。
          </p>
          <p className="mt-4 leading-8 text-[#43506a]">
            我们希望通过稳定、克制的表达方式，让客户在阅读过程中逐步建立信任，而不是依赖夸张的宣传语言。
          </p>
          <Link href="/work/law-firm/team" className="mt-8 inline-flex border-b border-[#0d1f3b] pb-1 text-sm font-semibold">
            阅读律师团队
          </Link>
        </div>
      </section>

      <section className="bg-[#0d1f3b] text-[#fbf7ee]">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-12 py-20 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-[#d8b56d]">Process</p>
            <h2 className="mt-5 text-[2rem] font-semibold leading-tight sm:text-4xl">咨询流程应当让人安心。</h2>
          </div>
          <div className="relative border-l border-[#d8b56d]/45 pl-8">
            {process.map(([title, desc], index) => (
              <article key={title} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.35rem] top-1 grid h-5 w-5 place-items-center border border-[#d8b56d] bg-[#0d1f3b] text-[10px] text-[#d8b56d]">{index + 1}</span>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-3 max-w-2xl leading-7 text-white/68">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <PhotoPanel image={imageUrls.library} label="Law Library / Unsplash" className="min-h-[360px]" />
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-[#8a6d35]">Questions</p>
          <h2 className="mt-5 text-[2rem] font-semibold leading-tight sm:text-4xl">在正式沟通前，先把常见问题说清楚。</h2>
          <div className="mt-8 divide-y divide-[#d8c7a4] border-y border-[#d8c7a4]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">
                  {question}
                  <span className="text-[#8a6d35] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl leading-7 text-[#43506a]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-20">
        <div className="border border-[#d8c7a4] bg-[#fffaf1] p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.26em] text-[#8a6d35]">Next Step</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-[2rem] font-semibold leading-tight sm:text-4xl">如果您正在整理法律服务内容，可以先从客户最关心的问题开始。</h2>
              <p className="mt-5 max-w-2xl leading-8 text-[#43506a]">
                对专业服务来说，清楚说明服务范围、沟通方式和后续流程，往往比堆砌信息更重要。
              </p>
            </div>
            <Link href="/#contact" className="inline-flex border border-[#0d1f3b] bg-[#0d1f3b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-transparent hover:text-[#0d1f3b]">
              想整理类似专业服务内容？联系杰子建站工作室
            </Link>
          </div>
        </div>
      </section>

      <LawFooter />
    </main>
  );
}
