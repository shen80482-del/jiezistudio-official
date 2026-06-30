import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../../_components";

const navItems = [
  { label: "首页", href: "/work/law-firm" },
  { label: "专业领域", href: "/work/law-firm/practice" },
  { label: "律师团队", href: "/work/law-firm/team" },
  { label: "咨询预约", href: "/work/law-firm/contact" },
];

export default function LawContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ea] text-[#10213f]">
      <DemoTopbar brand="诚衡律师事务所" navItems={navItems} className="border-[#d8c7a4]/50 bg-[#f8f4ea]/88 text-[#10213f]" markClassName="bg-[#10213f] text-[#d8b56d]" />
      <section className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-8 py-16 lg:grid-cols-[0.82fr_1fr]">
        <div>
          <DemoBadge className="bg-[#10213f] text-[#f7e6b4]" />
          <h1 className="mt-6 text-4xl font-semibold sm:text-6xl">咨询预约</h1>
          <p className="mt-5 text-lg leading-8 text-[#44506a]">这是模拟表单样式，不会提交真实数据。真实项目可连接邮箱、表单服务或在线咨询入口。</p>
          <div className="mt-8 space-y-4">
            {["填写问题类型", "确认基础信息", "预约沟通时间", "形成咨询转化"].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-[#d8c7a4] bg-white/70 p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#10213f] text-sm font-bold text-[#d8b56d]">{index + 1}</span>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-[#d8c7a4] bg-white/80 p-6 shadow-xl shadow-[#10213f]/8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6d35]">Demo Form</p>
          <div className="mt-6 grid gap-4">
            {["姓名", "联系方式", "咨询领域", "简要描述你的问题"].map((item) => (
              <div key={item} className="rounded-2xl border border-[#e1d4b8] bg-[#fffaf0] px-4 py-4 text-[#697087]">{item}</div>
            ))}
            <div className="rounded-full bg-[#10213f] px-5 py-3 text-center font-semibold text-white">提交咨询（演示）</div>
          </div>
          <div className="mt-8"><BackHome className="border-[#c9b27d] text-[#10213f]" /></div>
        </div>
      </section>
      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似网站？" description="让专业服务官网具备清晰的咨询路径，帮助访客更愿意留下线索。" className="bg-[#10213f] text-white" buttonClassName="bg-[#d8b56d] text-[#10213f]" />
      </section>
    </main>
  );
}

