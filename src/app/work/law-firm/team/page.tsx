import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "律师团队 | 诚衡律师事务所官网演示",
  description: "诚衡律师事务所团队页演示，说明律师的专业方向、沟通方式和服务领域。",
  alternates: { canonical: "/work/law-firm/team" },
};

const navItems = [
  { label: "首页", href: "/work/law-firm" },
  { label: "专业领域", href: "/work/law-firm/practice" },
  { label: "律师团队", href: "/work/law-firm/team" },
  { label: "开始沟通", href: "/work/law-firm/contact" },
];

const imageUrl =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&fm=jpg&q=70&w=2200";

const lawyers = [
  {
    name: "陈衡",
    role: "合伙人律师",
    area: "公司顾问 / 合同争议 / 商业谈判",
    belief: "先把商业目标和风险边界讲清楚，再讨论法律路径。",
    communication: "适合需要长期法律支持、合同审查和重大事项判断的企业客户。",
    services: ["常年法律顾问", "合同审查", "股权与治理", "争议策略"],
  },
  {
    name: "林予",
    role: "资深律师",
    area: "婚姻家事 / 继承安排 / 劳动争议",
    belief: "敏感事项更需要清楚、耐心和边界感。",
    communication: "适合希望先梳理事实、材料和沟通方案的个人咨询者。",
    services: ["婚姻家事", "继承安排", "劳动争议", "材料梳理"],
  },
  {
    name: "周闻",
    role: "执业律师",
    area: "民商事争议 / 企业合规 / 用工管理",
    belief: "每个决定都应让客户知道原因、成本和下一步。",
    communication: "适合需要争议评估、证据整理和企业风险管理的团队。",
    services: ["争议解决", "证据整理", "企业合规", "用工管理"],
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
          <p className="mt-4 max-w-xl leading-7 text-white/68">团队、姓名和内容均为行业官网演示，图片用于表达商务沟通氛围，不对应真实律师。</p>
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

export default function LawTeamPage() {
  return (
    <main className="min-h-screen bg-[#fbf7ee] text-[#0d1f3b]">
      <LawHeader />

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-12 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div>
          <p className="inline-flex border border-[#b99b5f]/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6d35]">
            Studio Demo / 行业官网演示
          </p>
          <p className="mt-14 text-sm uppercase tracking-[0.28em] text-[#8a6d35]">Attorneys</p>
          <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.12] sm:text-6xl">了解律师，也是在了解沟通方式。</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#43506a]">
            每位律师关注的领域不同，处理问题的方式也不同。以下为虚拟演示内容，用于说明法律服务团队可以如何呈现。
          </p>
        </div>
        <figure className="relative min-h-[420px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale-[16%]"
            style={{ backgroundImage: `linear-gradient(180deg, rgba(13,31,59,.04), rgba(13,31,59,.34)), url(${imageUrl})` }}
          />
          <figcaption className="absolute bottom-4 left-4 bg-[#fbf7ee]/92 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">Business Consultation / Unsplash</figcaption>
        </figure>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-20">
        <div className="divide-y divide-[#d8c7a4] border-y border-[#d8c7a4]">
          {lawyers.map((lawyer, index) => (
            <article key={lawyer.name} className="grid gap-8 py-12 lg:grid-cols-[120px_0.72fr_1fr]">
              <p className="text-sm text-[#8a6d35]">0{index + 1}</p>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#8a6d35]">演示人物</p>
                <h2 className="mt-4 text-[2rem] font-semibold sm:text-4xl">{lawyer.name}</h2>
                <p className="mt-3 text-lg text-[#43506a]">{lawyer.role}</p>
                <p className="mt-5 leading-7 text-[#2f3d58]">{lawyer.area}</p>
              </div>
              <div>
                <p className="text-2xl font-semibold leading-snug">“{lawyer.belief}”</p>
                <p className="mt-5 leading-8 text-[#43506a]">{lawyer.communication}</p>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#8a6d35]">
                  {lawyer.services.map((service) => (
                    <span key={service} className="border-b border-[#b99b5f] pb-1">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-20">
        <div className="grid gap-8 border border-[#d8c7a4] bg-[#fffaf1] p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-[#8a6d35]">Next Step</p>
            <h2 className="mt-5 max-w-3xl text-[2rem] font-semibold leading-tight sm:text-4xl">如果您不确定应当联系哪位律师，可以先说明问题背景。</h2>
          </div>
          <Link href="/work/law-firm/contact" className="inline-flex border border-[#0d1f3b] bg-[#0d1f3b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-transparent hover:text-[#0d1f3b]">
            开始沟通
          </Link>
        </div>
      </section>

      <LawFooter />
    </main>
  );
}
