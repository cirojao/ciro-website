import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "ecommerce",
    title: "電商購物平台",
    desc: "整合 Stripe 金流與 Prisma ORM，支援即時庫存管理與購物車狀態同步。",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    color: "from-warm-200 to-sand-300",
    emoji: "🛒",
  },
  {
    id: "dashboard",
    title: "數據分析儀表板",
    desc: "使用 D3.js 繪製互動式圖表，支援多維度資料篩選與即時更新。",
    tags: ["React", "D3.js", "Recharts", "TanStack Query"],
    color: "from-sand-200 to-warm-300",
    emoji: "📊",
  },
  {
    id: "design-system",
    title: "企業元件庫",
    desc: "基於 Radix UI 打造可無障礙訪問的元件系統，完整 Storybook 文件。",
    tags: ["React", "Radix UI", "Storybook", "Tailwind"],
    color: "from-warm-100 to-sand-200",
    emoji: "🎨",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      {/* 標題 */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-sm font-mono text-warm-500 uppercase tracking-widest mb-2">
            精選作品
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-espresso font-bold">
            我做過什麼
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden sm:flex items-center gap-1.5 text-sm text-warm-600 hover:text-espresso transition-colors font-medium group"
        >
          查看全部
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </Link>
      </div>

      {/* 卡片 */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Link
            key={p.id}
            href={`/projects#${p.id}`}
            className="group relative rounded-2xl border border-warm-200 bg-warm-50 hover:border-warm-400 hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* 彩色頂部 */}
            <div
              className={`h-32 bg-gradient-to-br ${p.color} flex items-center justify-center text-5xl`}
            >
              {p.emoji}
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-espresso mb-2 group-hover:text-warm-600 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-warm-600 leading-relaxed mb-4">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-warm-200 text-warm-700 text-xs rounded-full font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs text-warm-500 group-hover:text-warm-700 transition-colors">
                查看詳情{" "}
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 手機版查看全部 */}
      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-warm-600 border border-warm-300 px-6 py-2.5 rounded-full hover:bg-warm-100 transition-colors"
        >
          查看全部作品
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
