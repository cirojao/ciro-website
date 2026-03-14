import type { Metadata } from "next";
import { Github, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "作品集 — Ciro",
  description: "Ciro的前端開發作品集",
};

const projects = [
  {
    id: "ecommerce",
    title: "電商購物平台",
    period: "2023",
    type: "全端 Web 應用",
    emoji: "🛒",
    desc: "為中小型品牌打造的現代電商解決方案，整合 Stripe 金流、即時庫存管理，支援多幣別與多語言，月均交易量 NT$ 500 萬+。",
    tags: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    highlights: [
      "Lighthouse 效能評分 98+",
      "Core Web Vitals 全綠",
      "0.3s 首屏載入",
    ],
    color: "from-warm-200 to-sand-300",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "sport",
    title: "數據分析儀表板",
    period: "2023",
    type: "前端應用",
    emoji: "📊",
    desc: "為行銷團隊打造的多維度數據可視化平台，支援即時更新、自定義圖表佈局，日活用戶 800+。",
    tags: [
      "React",
      "D3.js",
      "Recharts",
      "TanStack Query",
      "WebSocket",
      "Zustand",
    ],
    highlights: ["即時資料推送", "可拖曳自訂佈局", "匯出 Excel/PDF"],
    color: "from-sand-200 to-warm-300",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "wallet",
    title: "企業元件庫",
    period: "2022",
    type: "開源 Library",
    emoji: "🎨",
    desc: "基於 Radix UI Primitives 打造，提供 40+ 可無障礙訪問的 UI 元件，完整 Storybook 文件，npm 週下載 1,200+。",
    tags: [
      "React",
      "TypeScript",
      "Radix UI",
      "Storybook",
      "Rollup",
      "Tailwind",
    ],
    highlights: ["WCAG 2.1 AA 合規", "完整 TypeScript 支援", "Dark Mode 支援"],
    color: "from-warm-100 to-sand-200",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "cms",
    title: "無頭 CMS 整合",
    period: "2022",
    type: "Web 應用",
    emoji: "📝",
    desc: "使用 Next.js App Router 整合 Contentful CMS，搭配 ISR 實現每分鐘內容更新，無需重新部署。",
    tags: ["Next.js", "Contentful", "ISR", "TypeScript", "GraphQL"],
    highlights: ["ISR 增量靜態生成", "SEO 最佳化", "多語系 i18n"],
    color: "from-warm-200 to-warm-300",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "pwa",
    title: "PWA 離線行事曆",
    period: "2021",
    type: "Progressive Web App",
    emoji: "📅",
    desc: "具備離線同步功能的行事曆 PWA，使用 IndexedDB 本地儲存，Service Worker 實現背景同步。",
    tags: ["React", "PWA", "IndexedDB", "Service Worker", "Workbox"],
    highlights: ["離線可用", "推播通知", "App Store 上架"],
    color: "from-sand-100 to-warm-200",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "ai-chat",
    title: "AI 客服聊天介面",
    period: "2024",
    type: "AI 整合",
    emoji: "🤖",
    desc: "整合 OpenAI Streaming API 的客服聊天 UI，支援 Markdown 渲染、程式碼語法高亮與對話歷程管理。",
    tags: [
      "Next.js",
      "OpenAI API",
      "Streaming",
      "React Markdown",
      "Vercel AI SDK",
    ],
    highlights: ["串流即時回應", "程式碼高亮", "多輪對話管理"],
    color: "from-warm-300 to-sand-300",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16 max-w-5xl mx-auto px-6">
      {/* 頁首 */}
      <div className="mb-16">
        <p className="text-sm font-mono text-warm-500 uppercase tracking-widest mb-3">
          作品集
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-espresso font-bold">
          我做過什麼
        </h1>
      </div>

      {/* 專案列表 */}
      <div className="space-y-8">
        {projects.map((project) => (
          <article
            id={project.id}
            key={project.id}
            className="group bg-warm-50 border border-warm-200 rounded-3xl overflow-hidden hover:border-warm-400 hover:shadow-warm-lg transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* 左側色塊 */}
              <div
                className={`md:w-56 h-40 md:h-auto bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl flex-shrink-0`}
              >
                {project.emoji}
              </div>

              {/* 內容 */}
              <div className="p-6 md:p-8 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-warm-500 uppercase tracking-wider">
                        {project.type}
                      </span>
                      <span className="text-warm-300">·</span>
                      <span className="text-xs font-mono text-warm-400">
                        {project.period}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-espresso group-hover:text-warm-600 transition-colors">
                      {project.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-500 hover:text-espresso hover:border-warm-500 transition-all"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-500 hover:text-espresso hover:border-warm-500 transition-all"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-warm-600 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* 亮點 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="flex items-center gap-1.5 text-xs text-warm-600 bg-warm-100 border border-warm-200 px-2.5 py-1 rounded-full"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-warm-400" />
                      {h}
                    </span>
                  ))}
                </div>

                {/* 技術標籤 */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-warm-200 text-warm-700 text-xs rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
