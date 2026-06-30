import { BackHome, DemoBadge, DemoTopbar, StudioCta } from "../../_components";

const navItems = [
  { label: "品牌故事", href: "/work/restaurant/story" },
  { label: "菜单", href: "/work/restaurant/menu" },
  { label: "餐厅信息", href: "/work/restaurant/contact" },
  { label: "预约", href: "/work/restaurant/contact" },
];

const menu = [
  ["招牌主食", "慢炖番茄牛肉饭", "浓郁酱汁、温暖主食、适合午晚餐展示。"],
  ["咖啡饮品", "榛果拿铁", "柔和坚果香气，适合咖啡店菜单表达。"],
  ["甜品", "酒红莓果塔", "酸甜平衡，用色彩建立记忆点。"],
  ["下午茶", "双人轻食盘", "适合展示套餐、场景和客单价。"],
];

export default function RestaurantMenuPage() {
  return (
    <main className="min-h-screen bg-[#fff7e8] text-[#3b2415]">
      <DemoTopbar brand="Mellow Table" navItems={navItems} className="border-[#dfc9a5]/70 bg-[#fff7e8]/88 text-[#3b2415]" markClassName="bg-[#5b1f1f] text-[#fff7e8]" mark="MT" />
      <section className="mx-auto w-[min(1120px,calc(100%-32px))] py-16">
        <DemoBadge className="bg-[#5b1f1f] text-[#fff7e8]" />
        <h1 className="mt-6 text-5xl font-semibold sm:text-7xl">菜单展示</h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {menu.map(([category, name, desc]) => (
            <article key={category} className="rounded-[2rem] border border-[#dfc9a5] bg-[#fffaf0] p-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6d7a45]">{category}</p>
              <h2 className="mt-5 text-3xl font-semibold">{name}</h2>
              <p className="mt-4 leading-7 text-[#705844]">{desc}</p>
              <div className="mt-8 h-28 rounded-[1.5rem] bg-[linear-gradient(135deg,#c68b59,#fff0cf_55%,#6d7a45)]" />
            </article>
          ))}
        </div>
        <div className="mt-10"><BackHome className="border-[#c8a86c] text-[#3b2415]" /></div>
      </section>
      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <StudioCta title="想做类似网站？" description="餐饮官网可以把菜单、氛围和餐厅信息集中展示，承接本地搜索与咨询。" className="bg-[#5b1f1f] text-[#fff7e8]" buttonClassName="bg-[#fff7e8] text-[#5b1f1f]" />
      </section>
    </main>
  );
}



