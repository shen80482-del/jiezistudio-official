import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../../_components";

const navItems = [
  { label: "作品", href: "/work/photography/portfolio" },
  { label: "服务", href: "/work/photography/services" },
  { label: "关于", href: "/work/photography" },
  { label: "预约", href: "/work/photography/booking" },
];

const services = [
  ["个人写真", "适合个人形象、社交头像、职业照与纪念拍摄。", "妆造建议 / 棚拍或外景 / 精修交付"],
  ["商业拍摄", "适合品牌主理人、产品、电商和社媒内容。", "视觉策划 / 场景搭建 / 成片授权说明"],
  ["婚礼跟拍", "适合婚礼当天纪实、仪式和情绪瞬间记录。", "流程沟通 / 双机位建议 / 精选相册"],
];

export default function PhotographyServicesPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0c] text-[#f4f0e8]">
      <DemoTopbar brand="LightFrame Studio" navItems={navItems} className="border-white/10 bg-[#0d0d0c]/86 text-[#f4f0e8]" markClassName="bg-[#f4f0e8] text-[#0d0d0c]" />
      <section className="mx-auto w-[min(980px,calc(100%-32px))] py-16">
        <DemoBadge className="bg-[#f4f0e8] text-[#0d0d0c]" />
        <h1 className="mt-6 text-5xl font-semibold sm:text-7xl">服务套餐</h1>
        <div className="mt-12 space-y-5">
          {services.map(([title, desc, detail]) => (
            <article key={title} className="grid gap-6 rounded-[2rem] border border-white/12 bg-[#171615] p-7 md:grid-cols-[0.5fr_1fr]">
              <h2 className="text-3xl font-semibold">{title}</h2>
              <div>
                <p className="leading-8 text-[#c9c0b2]">{desc}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[#b8afa1]">{detail}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10"><BackHome className="border-white/20 text-[#f4f0e8]" /></div>
      </section>
      <section className="mx-auto w-[min(980px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似网站？" description="适合摄影师把作品、套餐和预约说明集中展示。" className="bg-[#f4f0e8] text-[#0d0d0c]" buttonClassName="bg-[#0d0d0c] text-white" />
      </section>
    </main>
  );
}

