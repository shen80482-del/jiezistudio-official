const navItems = [
  { label: "首页", href: "#" },
  { label: "作品", href: "#portfolio" },
  { label: "服务", href: "#services" },
  { label: "流程", href: "#process" },
  { label: "价格", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "联系", href: "#contact" },
];

const works = [
  {
    title: "律师事务所官网",
    href: "/work/law-firm",
    category: "专业服务",
    description: "以秩序、可信和清晰表达为核心，适合法律咨询与专业服务品牌。",
    palette: "bg-[#10213f]",
    accent: "bg-[#c9a96a]",
  },
  {
    title: "摄影工作室官网",
    href: "/work/photography",
    category: "个人品牌",
    description: "用更克制的留白展示作品，让创作者的风格被认真看见。",
    palette: "bg-[#161616]",
    accent: "bg-[#d8d1c7]",
  },
  {
    title: "餐厅品牌官网",
    href: "/work/restaurant",
    category: "餐饮品牌",
    description: "围绕品牌故事、菜单和氛围，建立更有温度的线上展示。",
    palette: "bg-[#5b3324]",
    accent: "bg-[#7f8f5b]",
  },
];

const services = [
  {
    title: "企业官网",
    description: "适合希望建立品牌形象、展示企业实力和服务内容的团队。",
  },
  {
    title: "品牌官网",
    description: "帮助访客更快理解您的业务，也更容易记住您的品牌。",
  },
  {
    title: "作品集网站",
    description: "把您的作品、经历和能力，整理成一个值得长期使用的网站。",
  },
];

const process = [
  {
    step: "第一步",
    title: "先了解您的业务。",
    description: "我们会先听您介绍行业、客户、服务内容和目前最想解决的问题。",
  },
  {
    step: "第二步",
    title: "一起确认网站应该呈现什么。",
    description: "在开始设计前，先把页面重点、内容顺序和表达方式梳理清楚。",
  },
  {
    step: "第三步",
    title: "开始设计，并保持持续沟通。",
    description: "设计过程中保留沟通空间，让页面逐步接近您的品牌状态。",
  },
  {
    step: "第四步",
    title: "完成上线，并继续陪伴您完善网站。",
    description: "上线不是结束，后续内容调整和页面完善也可以继续推进。",
  },
];

const pricing = [
  {
    name: "单页网站",
    price: "¥299 起",
    desc: "适合个人展示、活动页、简单业务介绍",
    details: ["1 个核心页面", "基础内容梳理", "协助上线"],
  },
  {
    name: "企业官网",
    price: "¥699 起",
    desc: "适合公司展示、品牌宣传、小微企业官网",
    details: ["3-5 个页面", "品牌内容结构", "交付后可继续调整"],
    highlight: true,
  },
  {
    name: "中英文官网",
    price: "¥999 起",
    desc: "适合外贸、海外客户、跨境业务展示",
    details: ["中英文内容结构", "页面表达整理", "协助上线"],
  },
  {
    name: "高端定制",
    price: "¥1999 起",
    desc: "适合个性化设计、品牌展示、特殊行业需求",
    details: ["定制页面设计", "品牌视觉方向", "长期维护建议"],
  },
];

const faqs = [
  {
    question: "网站会根据需求报价吗？",
    answer: "会。不同的行业、页面数量和功能需求都会影响最终方案。我们更希望先了解您的需求，再给出更合适的建议。",
  },
  {
    question: "还没有完整文案，可以开始沟通吗？",
    answer: "可以。很多客户一开始都只有大概想法，我们会先帮您梳理页面需要表达的内容。",
  },
  {
    question: "网站做好以后归谁？",
    answer: "网站源码、域名和内容都应归客户所有。交付时会尽量把相关资料说明清楚。",
  },
  {
    question: "后期还能继续修改吗？",
    answer: "可以。官网上线后，随着业务变化继续调整内容、页面和展示重点，是很正常的需求。",
  },
  {
    question: "适合个人品牌或小团队吗？",
    answer: "适合。我们更关注业务是否需要一个清晰可信的线上入口，而不是团队规模大小。",
  },
  {
    question: "沟通前需要准备什么？",
    answer: "您可以先准备行业、服务内容、参考网站和预算范围。如果暂时没有，我们也可以一起梳理。",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold tracking-[0.16em] text-brand-600">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-muted">{description}</p> : null}
    </div>
  );
}

function WorkThumbnail({
  title,
  category,
  palette,
  accent,
  large = false,
}: {
  title: string;
  category: string;
  palette: string;
  accent: string;
  large?: boolean;
}) {
  return (
    <div className={`${palette} relative min-h-72 overflow-hidden p-6 text-white ${large ? "md:min-h-[28rem]" : ""}`}>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold tracking-[0.16em] text-white/70">{category}</span>
          <span className={`h-2 w-14 ${accent}`} />
        </div>
        <div>
          <p className="max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">{title}</p>
          <div className="mt-6 grid max-w-xs gap-2">
            <span className="h-2 w-full bg-white/72" />
            <span className="h-2 w-2/3 bg-white/36" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-[-18%] h-[58%] w-[54%] border border-white/14 sm:-right-10 sm:h-56 sm:w-56" />
      <div className={`absolute right-[10%] top-[42%] h-[24%] w-[36%] ${accent} opacity-90 sm:right-10 sm:top-28 sm:h-28 sm:w-36`} />
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/16" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-line/70 bg-white/92 backdrop-blur-md">
        <nav className="container-x flex h-[72px] items-center justify-between gap-4 py-3">
          <a href="#" className="flex min-w-0 items-center gap-3" aria-label="杰子建站工作室首页">
            <span className="grid h-10 w-10 shrink-0 place-items-center bg-ink text-sm font-semibold text-white">JZ</span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold text-ink">杰子建站工作室</span>
              <span className="hidden truncate text-[11px] tracking-[0.12em] text-muted sm:block">品牌官网设计与交付</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="hidden shrink-0 border border-ink px-4 py-2 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white sm:inline-flex">
            聊聊想法
          </a>
        </nav>
      </header>

      <section className="border-b border-line bg-white">
        <div className="container-x grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-600">品牌官网设计与交付</p>
            <h1 className="mt-7 text-[2.45rem] font-semibold leading-[1.08] tracking-normal text-ink sm:hidden">
              第一次认识
              <br />
              您的客户，
              <br />
              也会先认识
              <br />
              您的官网。
            </h1>
            <h1 className="mt-7 hidden font-semibold leading-[1.08] tracking-normal text-ink sm:block sm:text-6xl lg:text-[4.6rem]">
              第一次认识您的客户，
              <br />
              也会先认识您的官网。
            </h1>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>
                所以，我们更愿意先理解您的品牌，
                <br className="sm:hidden" />
                再开始设计。
              </p>
              <p className="sm:hidden">
                无论是企业官网、个人品牌，
                <br />
                还是作品集展示，
                <br />
                我们都希望它能够真实地表达您的业务，
                <br />
                而不仅仅是展示信息。
              </p>
              <p className="hidden sm:block">
                无论是企业官网、个人品牌，还是作品集展示，
                <br />
                我们都希望它能够真实地表达您的业务，
                <br />
                而不仅仅是展示信息。
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-brand-700">
                看看我们的作品
                <ArrowIcon />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center border border-line bg-white px-6 py-3.5 font-semibold text-ink transition hover:border-ink">
                聊聊您的想法
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <a href="/work/law-firm" className="group block overflow-hidden border border-line bg-white">
              <WorkThumbnail {...works[0]} large />
              <div className="p-5">
                <p className="text-sm text-muted">精选作品</p>
                <p className="mt-2 text-xl font-semibold text-ink transition group-hover:text-brand-700">{works[0].title}</p>
              </div>
            </a>
            <div className="grid gap-4">
              {works.slice(1).map((work) => (
                <a key={work.title} href={work.href} className="group block overflow-hidden border border-line bg-white">
                  <WorkThumbnail {...work} />
                  <div className="p-5">
                    <p className="text-lg font-semibold text-ink transition group-hover:text-brand-700">{work.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section bg-[#f8fbff]">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionIntro
              eyebrow="精选作品"
              title="不同的行业，会有不同的表达方式。"
              description="我们希望通过这些网站，让您更直观地了解不同品牌官网可以呈现出的样子。"
            />
            <a href="#contact" className="inline-flex items-center gap-2 text-base font-semibold text-ink underline decoration-line underline-offset-8 transition hover:text-brand-700">
              讨论适合您的方向 <ArrowIcon />
            </a>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {works.map((work) => (
              <article key={work.title} className="overflow-hidden border border-line bg-white">
                <WorkThumbnail {...work} />
                <div className="p-6">
                  <p className="text-sm font-semibold text-brand-600">{work.category}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-ink">{work.title}</h3>
                  <p className="mt-4 leading-7 text-muted">{work.description}</p>
                  <a href={work.href} className="mt-7 inline-flex items-center gap-2 font-semibold text-ink underline decoration-line underline-offset-8 transition hover:text-brand-700">
                    查看作品 <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section bg-white">
        <div className="container-x">
          <SectionIntro eyebrow="服务" title="我们先理解您的业务，再确认网站应该承担什么角色。" />
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="bg-white p-8">
                <p className="text-2xl font-semibold text-ink">{service.title}</p>
                <p className="mt-5 leading-8 text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section bg-[#f8fbff]">
        <div className="container-x grid gap-12 lg:grid-cols-[0.72fr_1fr]">
          <SectionIntro eyebrow="流程" title="合作应该清楚，也应该有持续沟通的空间。" />
          <div className="border-l border-line">
            {process.map((item) => (
              <article key={item.step} className="relative border-b border-line pb-8 pl-8 pt-1 first:pt-0 last:border-b-0 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-brand-600" />
                <p className="text-sm font-semibold text-brand-600">{item.step}</p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 max-w-2xl leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section bg-white">
        <div className="container-x">
          <SectionIntro
            eyebrow="价格"
            title="先给您一个预算范围，再根据需求确认具体方案。"
            description="价格会受到页面数量、设计复杂度和后续维护需求影响。我们会先沟通清楚，再给出更合适的建议。"
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
            {pricing.map((plan) => (
              <article key={plan.name} className={`${plan.highlight ? "bg-ink text-white" : "bg-white text-ink"} p-7`}>
                <p className="text-xl font-semibold">{plan.name}</p>
                <p className="mt-6 text-4xl font-semibold">{plan.price}</p>
                <p className={`mt-4 min-h-14 leading-7 ${plan.highlight ? "text-white/72" : "text-muted"}`}>{plan.desc}</p>
                <ul className="mt-7 space-y-3">
                  {plan.details.map((detail) => (
                    <li key={detail} className={`border-t pt-3 text-sm ${plan.highlight ? "border-white/14 text-white/78" : "border-line text-muted"}`}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section bg-[#f8fbff]">
        <div className="container-x grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <SectionIntro eyebrow="FAQ" title="开始前，您可能会关心这些问题。" />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border border-line bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                  {faq.question}
                  <span className="text-xl text-muted transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-white">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-[1fr_0.72fr]">
            <div className="bg-white p-8 sm:p-12">
              <p className="text-sm font-semibold tracking-[0.16em] text-brand-600">联系</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-ink sm:text-5xl">聊聊您的网站想法。</h2>
              <div className="mt-7 max-w-2xl space-y-3 text-lg leading-8 text-muted">
                <p>如果您已经有了一些想法，欢迎先和我们聊聊。</p>
                <p>不用急着确定合作。</p>
                <p>我们可以先一起看看，什么样的网站更适合您的业务。</p>
              </div>
            </div>
            <div className="bg-[#f8fbff] p-8 sm:p-12">
              <div className="space-y-7">
                {[
                  ["邮箱", "1307463941@qq.com"],
                  ["微信", "jackwebstudio"],
                  ["工作时间", "09:00-22:00"],
                  ["沟通方式", "微信 / 邮件 / 远程沟通"],
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
      </section>

      <footer className="border-t border-line bg-white py-10">
        <div className="container-x flex flex-col justify-between gap-8 text-sm text-muted md:flex-row md:items-start">
          <div>
            <p className="font-bold text-ink">杰子建站工作室</p>
            <p className="mt-4 max-w-xl leading-7">
              认真做好每一个网站，
              <br />
              也认真对待每一位客户。
            </p>
            <p className="mt-4 text-ink">—— 杰子建站工作室</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
