const navItems = [
  { label: "服务", href: "#services" },
  { label: "优势", href: "#why-us" },
  { label: "价格", href: "#pricing" },
  { label: "案例", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  {
    title: "品牌官网",
    description: "为工作室、企业与个人品牌设计可信、清晰、可转化的官方网站。",
    meta: "策略 / 视觉 / 响应式",
  },
  {
    title: "落地页",
    description: "围绕单一产品、课程或活动目标，搭建更聚焦的获客页面。",
    meta: "首屏转化 / CTA / 表单链路",
  },
  {
    title: "Next.js 开发",
    description: "使用现代前端技术实现更快加载、更好 SEO 与稳定上线体验。",
    meta: "App Router / TypeScript / Tailwind",
  },
];

const reasons = [
  "先明确业务目标，再决定页面结构与信息优先级。",
  "不套模板，按照行业、客单价与用户信任路径定制视觉。",
  "移动端优先，保证微信、浏览器和桌面端都有稳定体验。",
  "交付包含基础 SEO、性能优化、上线配置与后续维护建议。",
];

const pricing = [
  {
    name: "Starter",
    price: "¥3,999",
    desc: "适合个人品牌、单页展示与早期项目验证。",
    features: ["1 个首页", "响应式设计", "基础 SEO", "7 天内交付"],
  },
  {
    name: "Business",
    price: "¥8,999",
    desc: "适合正式获客官网与服务型公司。",
    features: ["首页 + 3 个内页", "定制视觉系统", "性能优化", "上线部署协助"],
    highlight: true,
  },
  {
    name: "Growth",
    price: "定制",
    desc: "适合多业务线、长期内容更新与增长实验。",
    features: ["站点架构规划", "组件化设计", "数据埋点建议", "长期维护方案"],
  },
];

const portfolio = [
  {
    title: "航空课程品牌站",
    tag: "Education",
    description: "面向飞行科普课程的高信任官网结构，突出专业度与报名转化。",
  },
  {
    title: "本地服务获客页",
    tag: "Local Service",
    description: "为城市陪玩、研学与活动服务设计清晰报价与咨询入口。",
  },
  {
    title: "出入境旅游官网",
    tag: "Travel",
    description: "适合英文推广与路线展示的多模块页面，强调安全感与行程价值。",
  },
];

const faqs = [
  {
    question: "第一版官网通常多久能上线？",
    answer: "资料齐全的情况下，单页官网通常 7-10 天可以完成首版并上线。",
  },
  {
    question: "我没有品牌设计和文案，可以做吗？",
    answer: "可以。我们会先梳理业务定位、目标客户和核心卖点，再完成页面文案与视觉。",
  },
  {
    question: "后续可以继续加页面或功能吗？",
    answer: "可以。第一阶段会保持组件化结构，方便后续扩展案例、博客、表单或多语言页面。",
  },
  {
    question: "网站上线后我能自己改内容吗？",
    answer: "第一阶段不接 CMS。若你需要自主编辑内容，可以在第二阶段加入轻量 CMS 或后台。",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-brand-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/72 backdrop-blur-xl">
        <nav className="container-x flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label="杰子建站工作室首页">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-ink text-sm font-semibold text-white shadow-soft">
              JZ
            </span>
            <span className="text-sm font-semibold tracking-wide text-ink">杰子建站工作室</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            免费诊断
          </a>
        </nav>
      </header>

      <section className="relative pb-14 pt-12 sm:pt-16 lg:pb-16">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_0.86fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/78 px-4 py-2 text-sm font-medium text-brand-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              Next.js 商业官网设计与开发
            </div>
            <h1 className="max-w-4xl text-balance text-[2.65rem] font-semibold leading-[1.08] tracking-normal text-ink sm:text-6xl lg:text-[4.25rem]">
              高级官网，为你的业务稳定获客。
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              杰子建站工作室专注商业官网、服务落地页与轻量品牌站。从定位、文案、视觉到上线部署，帮你把专业度和信任感直接呈现在客户面前。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700"
              >
                开始项目咨询
                <ArrowIcon />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-glass"
              >
                查看服务案例
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-muted">
              {["Lighthouse 友好", "移动端优先", "SEO 基础配置"].map((item) => (
                <div key={item} className="rounded-3xl border border-line bg-white/72 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-brand-100 blur-3xl" />
            <div className="glass relative rounded-[2rem] p-3 shadow-soft">
              <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white">
                <div className="flex items-center gap-2 border-b border-line px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-[#FF6B6B]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFD166]" />
                  <span className="h-3 w-3 rounded-full bg-[#06D6A0]" />
                </div>
                <div className="grid gap-4 p-5">
                  <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-ink p-6 text-white">
                    <p className="text-sm text-white/72">Website Strategy</p>
                    <p className="mt-4 max-w-xs text-3xl font-semibold leading-tight">
                      清晰定位，建立第一眼信任。
                    </p>
                    <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/16">
                      <div className="h-full w-3/4 rounded-full bg-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-line bg-brand-50 p-5">
                      <p className="text-3xl font-semibold text-ink">48%</p>
                      <p className="mt-2 text-sm text-muted">首屏信息更聚焦</p>
                    </div>
                    <div className="rounded-3xl border border-line bg-white p-5">
                      <p className="text-3xl font-semibold text-ink">3s</p>
                      <p className="mt-2 text-sm text-muted">核心价值被看见</p>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-line bg-white p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="font-semibold text-ink">上线流程</p>
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                        Live
                      </span>
                    </div>
                    {["定位与结构", "视觉与响应式", "构建与部署"].map((item, index) => (
                      <div key={item} className="flex items-center gap-3 py-2">
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-xs font-semibold text-brand-700">
                          {index + 1}
                        </span>
                        <span className="text-sm text-muted">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section bg-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">
              把官网当成获客资产，而不是线上名片。
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-line bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="text-sm font-semibold text-brand-600">{service.meta}</p>
                <h3 className="mt-8 text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-4 leading-7 text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
              Why Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">
              少一点模板感，多一点商业判断。
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              好官网不只是漂亮。它需要让客户快速理解你是谁、解决什么问题、为什么值得信任，以及下一步该怎么联系你。
            </p>
          </div>
          <div className="grid gap-4">
            {reasons.map((reason) => (
              <div key={reason} className="glass flex gap-4 rounded-[1.5rem] p-5">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50">
                  <CheckIcon />
                </span>
                <p className="leading-7 text-muted">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">
              先上线，再根据真实反馈增长。
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[1.75rem] border p-7 ${
                  plan.highlight
                    ? "border-brand-100 bg-ink text-white shadow-soft"
                    : "border-line bg-white text-ink shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.highlight ? (
                    <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold">
                      推荐
                    </span>
                  ) : null}
                </div>
                <p className="mt-6 text-4xl font-semibold">{plan.price}</p>
                <p className={`mt-4 leading-7 ${plan.highlight ? "text-white/72" : "text-muted"}`}>
                  {plan.desc}
                </p>
                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckIcon />
                      <span className={plan.highlight ? "text-white/82" : "text-muted"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
                Portfolio
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">
                适合服务型业务的官网表达。
              </h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-brand-700">
              预约查看完整方案 <ArrowIcon />
            </a>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {portfolio.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-sm"
              >
                <div className="relative h-48 bg-gradient-to-br from-brand-50 via-white to-[#DDEBFF] p-5">
                  <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/80 bg-white/78 p-4 shadow-glass backdrop-blur">
                    <div className="h-3 w-24 rounded-full bg-brand-100" />
                    <div className="mt-3 h-3 w-36 rounded-full bg-slate-100" />
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <span className="h-12 rounded-2xl bg-brand-100" />
                      <span className="h-12 rounded-2xl bg-white" />
                      <span className="h-12 rounded-2xl bg-ink" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-brand-600">{item.tag}</p>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">
              开始前，你可能关心这些。
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.35rem] border border-line bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                  {faq.question}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container-x">
          <div className="glass overflow-hidden rounded-[2rem]">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.82fr]">
              <div className="p-8 sm:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
                  Contact
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-ink sm:text-5xl">
                  先聊清楚业务，再决定网站怎么做。
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                  如果你正在准备上线官网、课程页、服务页或品牌站，可以先发来你的项目目标、预算范围和期望上线时间。
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:hello@jiezistudio.com?subject=官网项目咨询"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700"
                  >
                    发送项目需求
                    <ArrowIcon />
                  </a>
                  <a
                    href="tel:+8613800000000"
                    className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-glass"
                  >
                    电话咨询
                  </a>
                </div>
              </div>
              <div className="border-t border-line bg-white/68 p-8 sm:p-12 lg:border-l lg:border-t-0">
                <div className="space-y-6">
                  {[
                    ["服务范围", "商业官网 / 落地页 / 品牌站"],
                    ["常驻城市", "成都 / 长治，可远程协作"],
                    ["交付方式", "代码仓库 + 部署指导 + 基础维护建议"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-sm font-semibold text-brand-600">{label}</p>
                      <p className="mt-2 text-lg font-semibold text-ink">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-white py-10">
        <div className="container-x flex flex-col justify-between gap-6 text-sm text-muted md:flex-row md:items-center">
          <p>© 2026 杰子建站工作室. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#services" className="hover:text-ink">
              Services
            </a>
            <a href="#pricing" className="hover:text-ink">
              Pricing
            </a>
            <a href="#contact" className="hover:text-ink">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
