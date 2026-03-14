import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stacks | Ciro",
  description: "Ciro的前端技術能力總覽",
};

const skillGroups = [
  {
    category: "核心語言",
    emoji: "💡",
    skills: [
      {
        name: "TypeScript",
        level: 95,
        desc: "日常主力語言，熟悉泛型、裝飾器、型別體操",
      },
      {
        name: "JavaScript",
        level: 95,
        desc: "ES2024+，深入理解事件循環、Prototype Chain",
      },
      { name: "HTML5", level: 90, desc: "語意標籤、無障礙 ARIA、SEO 最佳實踐" },
      {
        name: "CSS3",
        level: 88,
        desc: "Grid、Flexbox、CSS Variables、Animations",
      },
    ],
  },
  {
    category: "框架與函式庫",
    emoji: "⚛️",
    skills: [
      {
        name: "React",
        level: 95,
        desc: "Hooks、Context、Concurrent Mode、Server Components",
      },
      {
        name: "Next.js",
        level: 92,
        desc: "App Router、Server Actions、Edge Runtime",
      },
      { name: "Vue 3", level: 78, desc: "Composition API、Pinia 狀態管理" },
      { name: "Nuxt 3", level: 70, desc: "SSR / SSG、模組系統" },
    ],
  },
  {
    category: "樣式方案",
    emoji: "🎨",
    skills: [
      { name: "Tailwind CSS", level: 95, desc: "深度客製化配置、設計系統建置" },
      {
        name: "Framer Motion",
        level: 85,
        desc: "手勢動畫、頁面轉場、Scroll-triggered",
      },
      { name: "CSS Modules", level: 88, desc: "作用域隔離、主題切換" },
      { name: "SCSS / Sass", level: 82, desc: "Mixin、函數、模組化設計" },
    ],
  },
  {
    category: "後端 & 資料庫",
    emoji: "🔌",
    skills: [
      { name: "Node.js", level: 78, desc: "Express、Fastify、串流處理" },
      { name: "tRPC", level: 85, desc: "型別安全的端對端 API 設計" },
      { name: "GraphQL", level: 75, desc: "Schema 設計、Apollo Client" },
      { name: "Prisma", level: 72, desc: "ORM 建模、資料庫遷移" },
    ],
  },
  {
    category: "工具 & 測試",
    emoji: "🛠️",
    skills: [
      { name: "Vitest", level: 82, desc: "單元測試、模擬、覆蓋率報告" },
      { name: "Playwright", level: 78, desc: "E2E 測試、視覺回歸測試" },
      { name: "Docker", level: 70, desc: "容器化開發環境、CI 整合" },
      { name: "GitHub Actions", level: 80, desc: "CI/CD 流程自動化" },
    ],
  },
];

function SkillBar({ level }: { level: number }) {
  return (
    <div className="w-24 h-1.5 bg-warm-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-warm-400 to-warm-600 rounded-full transition-all duration-700"
        style={{ width: `${level}%` }}
      />
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="pt-24 pb-16 max-w-5xl mx-auto px-6">
      {/* 頁首 */}
      <div className="mb-16">
        <p className="text-sm font-mono text-warm-500 uppercase tracking-widest mb-3">
          技術能力
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-espresso font-bold">
          我的工具箱
        </h1>
      </div>

      {/* 技術群組 */}
      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{group.emoji}</span>
              <h2 className="font-display text-2xl text-espresso font-semibold">
                {group.category}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-warm-50 border border-warm-200 rounded-2xl p-5 hover:border-warm-400 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-medium text-espresso">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-warm-500 font-mono">
                        {skill.level}%
                      </span>
                      <SkillBar level={skill.level} />
                    </div>
                  </div>
                  <p className="text-xs text-warm-500 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 其他技能標籤雲 */}
      <div className="mt-16 p-8 bg-warm-100/60 rounded-3xl border border-warm-200">
        <h2 className="font-display text-2xl text-espresso font-semibold mb-6">
          其他熟悉工具
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Git",
            "VSCode",
            "Figma",
            "Notion",
            "Storybook",
            "Vercel",
            "Netlify",
            "Cloudflare Workers",
            "Redis",
            "PostgreSQL",
            "Supabase",
            "Stripe",
            "Zod",
            "React Hook Form",
            "Zustand",
            "Jotai",
            "SWR",
            "TanStack Query",
            "Radix UI",
            "shadcn/ui",
          ].map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 bg-cream border border-warm-200 rounded-full text-sm text-warm-700 font-medium hover:border-warm-400 hover:bg-warm-50 transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
