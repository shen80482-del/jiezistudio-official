import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "咨询预约 | 诚衡律师事务所官网演示",
  description: "诚衡律师事务所咨询预约页演示，以时间轴和克制表单引导访客理解咨询流程。",
  alternates: { canonical: "/work/law-firm/contact" },
};

const navItems = [
  { label: "首页", href: "/work/law-firm" },
  { label: "专业领域", href: "/work/law-firm/practice" },
  { label: "律师团队", href: "/work/law-firm/team" },
  { label: "咨询预约", href: "/work/law-firm/contact" },
];

const imageUrl =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&fm=jpg&q=70&w=2200";

const steps = [
  ["预约咨询", "留下基础问题和联系方式，先确认是否适合进一步沟通。"],
  ["案件分析", "围绕事实、材料和目标，判断问题的法律性质与处理难度。"],
  ["制定方案", "说明可选路径、时间安排、费用边界和需要配合的事项。"],
  ["持续沟通", "重要节点及时同步，让您知道每一步为什么这样推进。"],
  ["结案回访", "对结果和后续风险进行说明，避免问题反复出现。"],
];

const fields = ["您的姓名", "联系方式", "咨询领域", "希望沟通的时间", "请简要说明您的问题"];

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
          <p className="mt-4 max-w-xl leading-7 text-white/68">咨询预约表单为演示样式，不提交真实数据。真实项目可接入邮箱或表单服务。</p>
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

export default function LawContactPage() {
  return (
    <main className="min-h-screen bg-[#fbf7ee] text-[#0d1f3b]">
      <LawHeader />

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-12 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <p className="inline-flex border border-[#b99b5f]/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6d35]">
            Studio Demo / 行业官网演示
          </p>
          <p className="mt-14 text-sm uppercase tracking-[0.28em] text-[#8a6d35]">Consultation</p>
          <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.12] sm:text-6xl">开始沟通前，先把问题放在清晰的位置。</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#43506a]">
            咨询页不需要制造紧迫感。它应该让来访者知道需要提供什么、接下来会发生什么、哪些信息会被认真对待。
          </p>
        </div>
        <figure className="relative min-h-[420px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale-[18%]"
            style={{ backgroundImage: `linear-gradient(180deg, rgba(13,31,59,.08), rgba(13,31,59,.36)), url(${imageUrl})` }}
          />
          <figcaption className="absolute bottom-4 left-4 bg-[#fbf7ee]/92 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">Professional Office / Unsplash</figcaption>
        </figure>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-12 pb-20 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-[#8a6d35]">Consultation Timeline</p>
          <h2 className="mt-5 text-[2rem] font-semibold leading-tight sm:text-4xl">一次咨询应该如何推进。</h2>
          <div className="mt-10 border-l border-[#b99b5f] pl-8">
            {steps.map(([title, desc], index) => (
              <article key={title} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.35rem] top-1 grid h-5 w-5 place-items-center border border-[#b99b5f] bg-[#fbf7ee] text-[10px] text-[#8a6d35]">{index + 1}</span>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#43506a]">{desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="border border-[#d8c7a4] bg-[#fffaf1] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.26em] text-[#8a6d35]">Demo Form</p>
          <h2 className="mt-4 text-3xl font-semibold">预约咨询</h2>
          <p className="mt-4 leading-7 text-[#43506a]">以下为演示表单，不提交真实数据。真实网站可根据业务接入邮箱或在线表单。</p>
          <div className="mt-8 grid gap-4">
            {fields.map((field) => (
              <div key={field} className="border-b border-[#d8c7a4] px-1 py-4 text-[#586277]">
                {field}
              </div>
            ))}
            <div className="mt-4 border border-[#0d1f3b] bg-[#0d1f3b] px-6 py-3 text-center text-sm font-semibold text-white">
              提交咨询（演示）
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-20">
        <div className="border border-[#d8c7a4] bg-[#fffaf1] p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.26em] text-[#8a6d35]">For JZ Studio</p>
          <h2 className="mt-5 max-w-3xl text-[2rem] font-semibold leading-tight sm:text-4xl">想做类似网站？可以先和杰子建站工作室聊聊您的行业和客户。</h2>
          <Link href="/#contact" className="mt-8 inline-flex border border-[#0d1f3b] bg-[#0d1f3b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-transparent hover:text-[#0d1f3b]">
            联系杰子建站工作室
          </Link>
        </div>
      </section>

      <LawFooter />
    </main>
  );
}
