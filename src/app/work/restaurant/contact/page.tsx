import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../../_components";

const navItems = [
  { label: "品牌故事", href: "/work/restaurant/story" },
  { label: "菜单", href: "/work/restaurant/menu" },
  { label: "餐厅信息", href: "/work/restaurant/contact" },
  { label: "预约", href: "/work/restaurant/contact" },
];

export default function RestaurantContactPage() {
  return (
    <main className="min-h-screen bg-[#fff7e8] text-[#3b2415]">
      <DemoTopbar brand="Mellow Table" navItems={navItems} className="border-[#dfc9a5]/70 bg-[#fff7e8]/88 text-[#3b2415]" markClassName="bg-[#5b1f1f] text-[#fff7e8]" mark="MT" />
      <section className="mx-auto grid w-[min(1080px,calc(100%-32px))] gap-8 py-16 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <DemoBadge className="bg-[#5b1f1f] text-[#fff7e8]" />
          <h1 className="mt-6 text-5xl font-semibold sm:text-7xl">餐厅信息</h1>
          <p className="mt-6 text-lg leading-8 text-[#705844]">以下为餐厅行业演示内容，用于展示餐厅品牌如何呈现营业时间、城市区域和联系方式结构。</p>
          <div className="mt-10"><BackHome className="border-[#c8a86c] text-[#3b2415]" /></div>
        </div>
        <div className="rounded-[2rem] border border-[#dfc9a5] bg-[#fffaf0] p-7">
          <div className="grid gap-5">
            {[
              ["营业时间", "周一至周日 10:00 - 22:00"],
              ["餐厅位置", "城市核心商圈 / 河畔街区"],
              ["联系方式", "电话 / 社交账号 / 在线预约"],
              ["预约方式", "在线预约 / 电话预约 / 私信预约"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-[#efe0c5] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6d7a45]">{label}</p>
                <p className="mt-3 text-xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto w-[min(1080px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似餐厅官网？" description="适合餐厅、咖啡店、甜品店展示品牌故事、菜单和餐厅门店信息。" className="bg-[#5b1f1f] text-[#fff7e8]" buttonClassName="bg-[#fff7e8] text-[#5b1f1f]" />
      </section>
    </main>
  );
}



