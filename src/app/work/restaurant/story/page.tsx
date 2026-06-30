import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../../_components";

const navItems = [
  { label: "品牌故事", href: "/work/restaurant/story" },
  { label: "菜单", href: "/work/restaurant/menu" },
  { label: "餐厅信息", href: "/work/restaurant/contact" },
  { label: "预约", href: "/work/restaurant/contact" },
];

export default function RestaurantStoryPage() {
  return (
    <main className="min-h-screen bg-[#fff7e8] text-[#3b2415]">
      <DemoTopbar brand="Mellow Table" navItems={navItems} className="border-[#dfc9a5]/70 bg-[#fff7e8]/88 text-[#3b2415]" markClassName="bg-[#5b1f1f] text-[#fff7e8]" />
      <section className="mx-auto w-[min(980px,calc(100%-32px))] py-16">
        <DemoBadge className="bg-[#5b1f1f] text-[#fff7e8]" />
        <h1 className="mt-6 text-5xl font-semibold sm:text-7xl">品牌故事</h1>
        <div className="mt-12 space-y-5">
          {[
            ["品牌理念", "让每一次简单用餐，都有一点被照顾的温度。"],
            ["空间氛围", "奶油色墙面、木质桌椅、暖光和低声交谈，组成松弛的日常场景。"],
            ["内容结构", "餐饮官网适合用故事、菜单、空间和餐厅信息建立完整的到访期待。"],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-[2rem] border border-[#dfc9a5] bg-[#fffaf0] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#6d7a45]">{title}</p>
              <p className="mt-5 text-2xl font-semibold leading-snug">{desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10"><BackHome className="border-[#c8a86c] text-[#3b2415]" /></div>
      </section>
      <section className="mx-auto w-[min(980px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似网站？" description="品牌故事能让餐饮网站不只是菜单页，而是完整的品牌入口。" className="bg-[#5b1f1f] text-[#fff7e8]" buttonClassName="bg-[#fff7e8] text-[#5b1f1f]" />
      </section>
    </main>
  );
}

