import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../../_components";

const navItems = [
  { label: "作品", href: "/work/photography/portfolio" },
  { label: "服务", href: "/work/photography/services" },
  { label: "关于", href: "/work/photography" },
  { label: "预约", href: "/work/photography/booking" },
];

const works = [
  ["人像摄影", "柔和肤色、情绪表达、个人形象展示"],
  ["婚礼纪实", "真实瞬间、仪式细节、故事叙事"],
  ["商业拍摄", "产品质感、品牌画面、社媒传播"],
  ["旅行影像", "风景氛围、人物关系、影像日记"],
];

export default function PhotographyPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0c] text-[#f4f0e8]">
      <DemoTopbar brand="LightFrame Studio" navItems={navItems} className="border-white/10 bg-[#0d0d0c]/86 text-[#f4f0e8]" markClassName="bg-[#f4f0e8] text-[#0d0d0c]" />
      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-16">
        <DemoBadge className="bg-[#f4f0e8] text-[#0d0d0c]" />
        <h1 className="mt-6 text-5xl font-semibold sm:text-7xl">作品集</h1>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {works.map(([title, desc], index) => (
            <article key={title} className={`min-h-[360px] rounded-[2rem] p-6 ${index % 2 === 0 ? "bg-[#f4f0e8] text-[#0d0d0c]" : "bg-[#1b1a18] text-[#f4f0e8]"}`}>
              <div className="h-44 rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(255,255,255,.65),rgba(120,113,104,.25),rgba(0,0,0,.35))]" />
              <h2 className="mt-8 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 opacity-70">{desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10"><BackHome className="border-white/20 text-[#f4f0e8]" /></div>
      </section>
      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似作品集网站？" description="让作品陈列、服务介绍和预约入口形成完整路径。" className="bg-[#f4f0e8] text-[#0d0d0c]" buttonClassName="bg-[#0d0d0c] text-white" />
      </section>
    </main>
  );
}

