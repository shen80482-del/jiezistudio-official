import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../../_components";

const navItems = [
  { label: "首页", href: "/work/law-firm" },
  { label: "专业领域", href: "/work/law-firm/practice" },
  { label: "律师团队", href: "/work/law-firm/team" },
  { label: "咨询预约", href: "/work/law-firm/contact" },
];

const lawyers = [
  ["CH", "陈衡", "合伙人律师", "公司顾问 / 合同纠纷"],
  ["LY", "林予", "资深律师", "婚姻家事 / 劳动争议"],
  ["ZW", "周闻", "执业律师", "企业合规 / 民商事争议"],
];

export default function LawTeamPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ea] text-[#10213f]">
      <DemoTopbar brand="诚衡律师事务所" navItems={navItems} className="border-[#d8c7a4]/50 bg-[#f8f4ea]/88 text-[#10213f]" markClassName="bg-[#10213f] text-[#d8b56d]" />
      <section className="mx-auto w-[min(1120px,calc(100%-32px))] py-16">
        <DemoBadge className="bg-[#10213f] text-[#f7e6b4]" />
        <h1 className="mt-6 text-4xl font-semibold sm:text-6xl">律师团队</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#44506a]">以下为虚拟演示内容，不对应真实律师或真实机构。</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {lawyers.map(([initials, name, role, area]) => (
            <article key={name} className="rounded-[1.5rem] border border-[#d8c7a4] bg-white/78 p-7 shadow-sm">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-[#10213f] text-xl font-bold text-[#d8b56d]">{initials}</div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#8a6d35]">演示内容</p>
              <h2 className="mt-3 text-2xl font-semibold">{name}</h2>
              <p className="mt-2 font-semibold text-[#44506a]">{role}</p>
              <p className="mt-5 leading-7 text-[#44506a]">{area}</p>
            </article>
          ))}
        </div>
        <div className="mt-10"><BackHome className="border-[#c9b27d] text-[#10213f]" /></div>
      </section>
      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似网站？" description="团队展示适合建立专业信任，也能让咨询者更快找到合适方向。" className="bg-[#10213f] text-white" buttonClassName="bg-[#d8b56d] text-[#10213f]" />
      </section>
    </main>
  );
}

