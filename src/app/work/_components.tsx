import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

export function DemoTopbar({
  brand,
  navItems,
  className,
  markClassName,
}: {
  brand: string;
  navItems: NavItem[];
  className: string;
  markClassName: string;
}) {
  return (
    <header className={`sticky top-0 z-40 border-b backdrop-blur-xl ${className}`}>
      <nav className="mx-auto flex w-[min(1120px,calc(100%-32px))] items-center justify-between gap-5 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="返回杰子建站工作室官网">
          <span className={`grid h-10 w-10 place-items-center rounded-2xl text-sm font-bold ${markClassName}`}>JZ</span>
          <span>
            <span className="block text-sm font-bold">{brand}</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] opacity-70">Studio Demo / 行业官网演示</span>
          </span>
        </Link>
        <div className="hidden items-center gap-5 text-sm font-semibold opacity-80 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:opacity-100">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/#contact" className="hidden rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 sm:inline-flex">
          联系我们
        </Link>
      </nav>
    </header>
  );
}

export function DemoBadge({ className }: { className: string }) {
  return <p className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${className}`}>Studio Demo / 行业官网演示</p>;
}

export function StudioCta({
  title,
  description,
  className,
  buttonClassName,
}: {
  title: string;
  description: string;
  className: string;
  buttonClassName: string;
}) {
  return (
    <section className={`rounded-[2rem] p-8 sm:p-10 ${className}`}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl leading-7 opacity-78">{description}</p>
        </div>
        <Link href="/#contact" className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${buttonClassName}`}>
          想做类似网站？联系杰子建站工作室
        </Link>
      </div>
    </section>
  );
}

export function BackHome({ className }: { className: string }) {
  return (
    <Link href="/" className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 ${className}`}>
      返回杰子建站工作室官网
    </Link>
  );
}

