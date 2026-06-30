import Link from "next/link";
import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../../_components";

const navItems = [
  { label: "首页", href: "/work/law-firm" },
  { label: "专业领域", href: "/work/law-firm/practice" },
  { label: "律师团队", href: "/work/law-firm/team" },
  { label: "咨询预约", href: "/work/law-firm/contact" },
];

const practices = [
  ["婚姻家事", "适合展示离婚、继承、子女抚养等常见法律咨询方向，帮助来访者快速判断是否匹配。"],
  ["合同纠纷", "用于说明合同审查、违约争议、债权债务等服务范围，降低客户理解成本。"],
  ["公司法律顾问", "适合企业常年顾问、合规咨询、股权结构和商业合同等专业服务展示。"],
  ["劳动争议", "展示劳动合同、薪资争议、工伤处理等问题，让咨询入口更清晰。"],
];

export default function LawPracticePage() {
  return (
    <main className="min-h-screen bg-[#f8f4ea] text-[#10213f]">
      <DemoTopbar brand="诚衡律师事务所" navItems={navItems} className="border-[#d8c7a4]/50 bg-[#f8f4ea]/88 text-[#10213f]" markClassName="bg-[#10213f] text-[#d8b56d]" mark="CH" />
      <section className="mx-auto w-[min(1120px,calc(100%-32px))] py-16">
        <DemoBadge className="bg-[#10213f] text-[#f7e6b4]" />
        <h1 className="mt-6 text-4xl font-semibold sm:text-6xl">专业领域</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#44506a]">通过清晰分类，让访问者快速理解律所能够解决哪些问题。</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {practices.map(([title, desc]) => (
            <article key={title} className="rounded-[1.5rem] border border-[#d8c7a4] bg-white/78 p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6d35]">Practice Area</p>
              <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-[#44506a]">{desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/work/law-firm/contact" className="rounded-full bg-[#10213f] px-6 py-3 font-semibold text-white">咨询预约</Link>
          <BackHome className="border-[#c9b27d] text-[#10213f]" />
        </div>
      </section>
      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似网站？" description="把专业能力拆成清晰栏目，会显著提升咨询信任感。" className="bg-[#10213f] text-white" buttonClassName="bg-[#d8b56d] text-[#10213f]" />
      </section>
    </main>
  );
}



