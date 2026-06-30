import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../../_components";

const navItems = [
  { label: "作品", href: "/work/photography/portfolio" },
  { label: "服务", href: "/work/photography/services" },
  { label: "关于", href: "/work/photography" },
  { label: "预约", href: "/work/photography/booking" },
];

export default function PhotographyBookingPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0c] text-[#f4f0e8]">
      <DemoTopbar brand="LightFrame Studio" navItems={navItems} className="border-white/10 bg-[#0d0d0c]/86 text-[#f4f0e8]" markClassName="bg-[#f4f0e8] text-[#0d0d0c]" />
      <section className="mx-auto grid w-[min(1080px,calc(100%-32px))] gap-8 py-16 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <DemoBadge className="bg-[#f4f0e8] text-[#0d0d0c]" />
          <h1 className="mt-6 text-5xl font-semibold sm:text-7xl">预约咨询</h1>
          <div className="mt-10 space-y-4">
            {["选择拍摄类型", "确认风格参考", "沟通档期与地点", "确定拍摄方案"].map((item) => (
              <div key={item} className="border-b border-white/14 py-5 text-xl font-semibold">{item}</div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-[#f4f0e8] p-7 text-[#0d0d0c]">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#716a60]">Demo Booking Form</p>
          <div className="mt-6 grid gap-4">
            {["姓名", "拍摄类型", "期望日期", "风格说明"].map((item) => (
              <div key={item} className="rounded-2xl border border-[#d5cabe] px-4 py-4 text-[#716a60]">{item}</div>
            ))}
            <div className="rounded-full bg-[#0d0d0c] px-5 py-3 text-center font-semibold text-white">提交预约（演示）</div>
          </div>
          <div className="mt-8"><BackHome className="border-[#0d0d0c]/20 text-[#0d0d0c]" /></div>
        </div>
      </section>
      <section className="mx-auto w-[min(1080px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似网站？" description="用清晰预约流程降低沟通成本，让作品集网站真正服务转化。" className="bg-[#f4f0e8] text-[#0d0d0c]" buttonClassName="bg-[#0d0d0c] text-white" />
      </section>
    </main>
  );
}

