const navItems = [
  { label: "首页", href: "#" },
  { label: "服务", href: "#services" },
  { label: "优势", href: "#why-us" },
  { label: "价格", href: "#pricing" },
  { label: "案例", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "联系", href: "#contact" },
];

const heroTags = ["最快24小时上线", "响应式设计", "SEO基础优化", "可协助部署", "售后维护"];

const services = [
  {
    title: "单页网站",
    description: "适合个人展示、活动宣传和简单业务介绍，用一个清晰页面完成信任建立与咨询转化。",
    meta: "快速上线 / 清晰结构",
  },
  {
    title: "企业官网",
    description: "为小微企业、工作室和服务型品牌搭建正式官网，展示服务、优势、案例和联系方式。",
    meta: "品牌展示 / 获客入口",
  },
  {
    title: "中英文官网",
    description: "面向外贸、跨境和海外客户展示业务信息，优化页面结构与中英文内容表达。",
    meta: "跨境展示 / 英文结构",
  },
];

const trustItems = [
  { title: "AI辅助提效", description: "更快完成页面设计与开发，把预算花在真正影响转化的部分。" },
  { title: "商务视觉设计", description: "蓝白风格，简洁专业，避免廉价模板感。" },
  { title: "响应式布局", description: "手机、平板、电脑都能正常访问，适配微信和浏览器场景。" },
  { title: "SEO基础优化", description: "标题、描述、页面结构更规范，利于后续搜索收录。" },
  { title: "上线部署协助", description: "可协助绑定域名、部署网站，并完成基础上线检查。" },
  { title: "售后维护支持", description: "交付后可继续修改内容、调整页面和维护站点。" },
];

const pricing = [
  {
    name: "单页网站",
    price: "¥299 起",
    desc: "适合个人展示、活动页、简单业务介绍",
    features: ["1 个页面", "响应式设计", "基础 SEO", "协助上线"],
  },
  {
    name: "企业官网",
    price: "¥699 起",
    desc: "适合公司展示、品牌宣传、小微企业官网",
    features: ["3-5 个页面", "响应式设计", "基础 SEO", "上线部署协助", "基础售后支持"],
    highlight: true,
  },
  {
    name: "中英文官网",
    price: "¥999 起",
    desc: "适合外贸、海外客户、跨境业务展示",
    features: ["中英文内容结构", "响应式设计", "SEO基础优化", "页面文案优化", "上线部署协助"],
  },
  {
    name: "高端定制",
    price: "¥1999 起",
    desc: "适合个性化设计、品牌展示、特殊行业需求",
    features: ["定制页面设计", "高级视觉风格", "转化路径设计", "长期维护方案"],
  },
];

const heroPreviews = [
  { title: "企业官网", tag: "Business", accent: "bg-brand-600" },
  { title: "作品集网站", tag: "Portfolio", accent: "bg-ink" },
  { title: "Landing Page", tag: "Campaign", accent: "bg-[#0EA5E9]" },
  { title: "外贸英文官网", tag: "Global", accent: "bg-[#2563EB]" },
];

const portfolio = [
  {
    title: "律师事务所官网",
    description: "专业、可信、适合法律咨询与品牌展示",
    tags: ["企业官网", "服务业", "高信任感"],
    tone: "from-[#ECF5FF] to-white",
  },
  {
    title: "教育机构官网",
    description: "展示课程、师资与报名入口",
    tags: ["教育培训", "课程展示", "咨询转化"],
    tone: "from-[#EEF8FF] to-white",
  },
  {
    title: "餐饮品牌官网",
    description: "展示门店、菜单、品牌故事与联系方式",
    tags: ["餐饮品牌", "门店展示", "本地获客"],
    tone: "from-[#F2F7FF] to-white",
  },
  {
    title: "摄影作品集网站",
    description: "展示作品、服务套餐与预约入口",
    tags: ["个人品牌", "作品集", "预约咨询"],
    tone: "from-[#EFF6FF] to-white",
  },
];

const faqs = [
  {
    question: "最快 24 小时上线是什么意思？",
    answer: "在资料明确、需求简单的情况下，可先完成单页网站的可上线版本；复杂项目会根据页面数量和设计难度评估周期。",
  },
  {
    question: "我没有文案和参考网站，可以做吗？",
    answer: "可以。你只需要说明行业、服务内容和目标客户，我们会帮你梳理页面结构、基础文案和视觉方向。",
  },
  {
    question: "价格会不会后面再加很多费用？",
    answer: "会先确认页面数量、设计复杂度和功能需求，再给出报价范围。超出范围的新增需求会提前说明。",
  },
  {
    question: "网站上线后还能继续改吗？",
    answer: "可以。交付后可继续做内容替换、页面调整、维护更新，也可以按阶段扩展更多页面。",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon({ className = "text-brand-600" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`h-4 w-4 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">{children}</p>;
}

function MiniWebsitePreview({ title, tag, accent }: { title: string; tag: string; accent: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
        </div>
        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">{tag}</span>
      </div>
      <div className={`mt-4 h-20 rounded-xl ${accent} p-3`}>
        <div className="h-2 w-16 rounded-full bg-white/80" />
        <div className="mt-3 h-2 w-24 rounded-full bg-white/45" />
        <div className="mt-2 h-2 w-14 rounded-full bg-white/35" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{title}</p>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-slate-100" />
        </div>
        <span className="shrink-0 rounded-full bg-ink px-3 py-1.5 text-[11px] font-semibold text-white">咨询</span>
      </div>
    </div>
  );
}

function CaseVisual({ title, tone }: { title: string; tone: string }) {
  return (
    <div className={`bg-gradient-to-br ${tone} border-b border-line p-6`}>
      <div className="rounded-[1.35rem] border border-line bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-ink" />
            <span className="h-2 w-24 rounded-full bg-slate-200" />
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="h-2 w-10 rounded-full bg-slate-100" />
            <span className="h-2 w-10 rounded-full bg-slate-100" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-[1fr_0.72fr] gap-4">
          <div>
            <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold text-brand-700">{title}</span>
            <div className="mt-4 h-3 w-28 rounded-full bg-ink" />
            <div className="mt-3 h-2 w-full rounded-full bg-slate-100" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-slate-100" />
            <div className="mt-5 h-8 w-24 rounded-full bg-brand-600" />
          </div>
          <div className="rounded-2xl bg-[#EAF3FF] p-3">
            <div className="h-20 rounded-xl bg-white shadow-sm" />
            <div className="mt-3 grid grid-cols-2 gap-2">
              <span className="h-8 rounded-lg bg-white" />
              <span className="h-8 rounded-lg bg-ink" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/84 backdrop-blur-xl">
        <nav className="container-x flex h-18 items-center justify-between py-3">
          <a href="#" className="flex min-w-0 items-center gap-3" aria-label="杰子建站工作室首页">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ink text-base font-semibold text-white shadow-soft">
              JZ
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold text-ink">杰子建站工作室</span>
              <span className="block truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">AI Website Studio</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
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
            免费咨询
          </a>
        </nav>
      </header>

      <section className="relative pb-16 pt-12 sm:pt-20 lg:pb-20">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/82 px-4 py-2 text-sm font-medium text-brand-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              AI Website Studio for Small Business
            </div>
            <h1 className="max-w-4xl text-balance text-[2.65rem] font-semibold leading-[1.08] tracking-normal text-ink sm:text-6xl lg:text-[4.8rem]">
              让客户先信任你，再主动咨询你。
            </h1>
            <p className="mt-7 max-w-xl whitespace-pre-line text-lg leading-8 text-muted">
              {"为创业者、小微企业打造专业官网。\n最快 24 小时上线。\n支持 SEO、响应式、部署和维护。"}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700"
              >
                免费咨询
                <ArrowIcon />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-7 py-3.5 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-glass"
              >
                查看案例
              </a>
            </div>
            <div className="mt-9 flex max-w-2xl flex-wrap gap-3">
              {heroTags.map((item) => (
                <span key={item} className="rounded-full border border-line bg-white/78 px-4 py-2 text-sm font-medium text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="glass relative rounded-[2rem] p-4">
              <div className="overflow-hidden rounded-[1.55rem] border border-line bg-white">
                <div className="flex items-center justify-between border-b border-line px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#FF6B6B]" />
                    <span className="h-3 w-3 rounded-full bg-[#FFD166]" />
                    <span className="h-3 w-3 rounded-full bg-[#06D6A0]" />
                  </div>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">案例预览</span>
                </div>
                <div className="grid gap-4 bg-[#F8FBFF] p-5">
                  <div className="rounded-[1.35rem] bg-ink p-5 text-white">
                    <p className="text-sm text-white/70">Website Templates</p>
                    <p className="mt-3 text-2xl font-semibold">不同业务，都需要一个清晰可信的官网入口。</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {heroPreviews.map((item) => (
                      <MiniWebsitePreview key={item.title} {...item} />
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
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">不只是做页面，而是帮你搭建客户愿意咨询的入口。</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-[1.5rem] border border-line bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <p className="text-sm font-semibold text-brand-600">{service.meta}</p>
                <h3 className="mt-8 text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-4 leading-7 text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="section">
        <div className="container-x">
          <div className="max-w-3xl">
            <SectionLabel>Why Us</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">为什么选择杰子建站工作室</h2>
            <p className="mt-6 text-lg leading-8 text-muted">以接单转化为目标，控制预算、提升效率，并把页面做得专业、清晰、能上线。</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trustItems.map((item) => (
              <article key={item.title} className="glass rounded-[1.5rem] p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50">
                  <CheckIcon />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="section bg-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_0.78fr]">
          <div>
            <SectionLabel>Founder</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">关于创始人</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              我是杰子，一名飞行员，同时也是 AI 建站开发者。
              我希望帮助创业者、小微企业和个人品牌，用更低成本、更快速度拥有自己的官网。
              从沟通、设计到上线，全程一对一服务，尽量把复杂的建站过程变得简单、高效、可靠。
            </p>
            <p className="mt-7 text-lg font-semibold text-ink">—— 杰子</p>
          </div>
          <div className="glass rounded-[2rem] p-7">
            <div className="flex items-center gap-5">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-ink text-2xl font-semibold text-white shadow-soft">JZ</span>
              <div>
                <p className="text-xl font-semibold text-ink">杰子</p>
                <p className="mt-1 text-sm font-medium text-muted">Founder / AI Website Developer</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["飞行员", "AI", "Website"].map((tag) => (
                <span key={tag} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-[1.35rem] border border-line bg-white p-5">
              <p className="text-sm font-semibold text-brand-600">Service Style</p>
              <p className="mt-3 leading-7 text-muted">一对一沟通，把业务信息梳理成清晰页面，让官网更快成为你的获客入口。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="container-x">
          <div className="rounded-[2rem] border border-brand-100 bg-ink p-8 text-white shadow-soft sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold sm:text-4xl">不知道官网怎么做？先免费规划方案。</h2>
              <p className="mt-4 leading-8 text-white/72">告诉我们你的行业、用途和参考网站，我们会帮你梳理页面结构和报价。</p>
            </div>
            <a href="#contact" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 lg:mt-0">
              免费规划方案
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="pricing" className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">前期接单友好的价格，先把官网上线。</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pricing.map((plan) => (
              <article key={plan.name} className={`rounded-[1.5rem] border p-6 ${plan.highlight ? "border-brand-100 bg-ink text-white shadow-soft" : "border-line bg-white text-ink shadow-sm"}`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.highlight ? <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold">推荐</span> : null}
                </div>
                <p className="mt-6 text-4xl font-semibold">{plan.price}</p>
                <p className={`mt-4 min-h-14 leading-7 ${plan.highlight ? "text-white/72" : "text-muted"}`}>{plan.desc}</p>
                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5"><CheckIcon className={plan.highlight ? "text-white" : "text-brand-600"} /></span>
                      <span className={plan.highlight ? "text-white/84" : "text-muted"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-7 text-center text-sm text-muted">具体价格根据页面数量、设计复杂度和功能需求报价。</p>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Portfolio</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">更接近真实网站的演示案例。</h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-brand-700">
              预约查看完整方案 <ArrowIcon />
            </a>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {portfolio.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-sm">
                <CaseVisual title={item.title} tone={item.tone} />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">开始前，你可能关心这些。</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-[1.35rem] border border-line bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                  {faq.question}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45">+</span>
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
            <div className="grid gap-0 lg:grid-cols-[1fr_0.72fr]">
              <div className="p-8 sm:p-12">
                <SectionLabel>Contact</SectionLabel>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-ink sm:text-5xl">准备好拥有一个专业官网吗？</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">从单页展示到企业官网，我们帮你快速上线。</p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="mailto:shen80482@gmail.com?subject=官网项目咨询" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700">
                    免费咨询
                    <ArrowIcon />
                  </a>
                  <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-line bg-white px-7 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-glass">
                    查看价格
                  </a>
                </div>
              </div>
              <div className="border-t border-line bg-white/68 p-8 sm:p-12 lg:border-l lg:border-t-0">
                <div className="space-y-6">
                  {[
                    ["邮箱", "shen80482@gmail.com"],
                    ["微信", "待补充"],
                    ["工作时间", "9:00 - 22:00"],
                    ["服务方式", "远程沟通 / 一对一交付"],
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
        <div className="container-x flex flex-col justify-between gap-8 text-sm text-muted md:flex-row md:items-start">
          <div>
            <p className="font-bold text-ink">杰子建站工作室</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">AI Website Studio</p>
            <p className="mt-4 max-w-xl leading-7">专业官网制作 / AI智能建站 / 响应式网站 / SEO基础优化</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">{item.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
