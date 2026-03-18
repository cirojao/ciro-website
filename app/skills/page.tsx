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
        level: 60,
        desc: "基本的型別設立與應用",
      },
      {
        name: "JavaScript",
        level: 85,
        desc: "熟悉 ES6+、非同步流程、陣列操作與瀏覽器執行邏輯",
      },
      {
        name: "HTML5",
        level: 80,
        desc: "理解語意化 HTML、無障礙基本觀念與頁面結構設計與MetaData設定",
      },
      {
        name: "CSS3",
        level: 86,
        desc: "熟悉 Flexbox、Grid、RWD、CSS Variables 與基礎動畫效果",
      },
    ],
  },
  {
    category: "框架與函式庫",
    emoji: "⚛️",
    skills: [
      {
        name: "React",
        level: 80,
        desc: "熟悉 Hooks、元件拆分、狀態管理與效能優化思維",
      },
      {
        name: "Next.js",
        level: 80,
        desc: "熟悉 App Router、SSR/SSG、路由規劃與頁面組織",
      },
      {
        name: "Redux",
        level: 78,
        desc: "具備全域狀態管理經驗，理解 reducer、action 與資料流設計",
      },
      {
        name: "Vite",
        level: 80,
        desc: "熟悉前端開發環境建置、模組化開發與打包流程",
      },
    ],
  },
  {
    category: "樣式方案",
    emoji: "🎨",
    skills: [
      {
        name: "Tailwind CSS",
        level: 86,
        desc: "主力樣式方案，能快速建立一致的版面與元件樣式",
      },
      {
        name: "CSS Modules",
        level: 84,
        desc: "熟悉元件級樣式隔離與大型專案的樣式維護方式",
      },
      { name: "SCSS / Sass", level: 60, desc: "了解 SCSS / Sass 基本語法" },
      {
        name: "MUI / shadcn/ui",
        level: 76,
        desc: "能搭配元件庫加速開發，並依需求客製細節",
      },
    ],
  },
  {
    category: "資料串接",
    emoji: "🔌",
    skills: [
      {
        name: "REST API",
        level: 85,
        desc: "熟悉前後端資料串接、錯誤處理與畫面資料狀態整理",
      },
      {
        name: "GraphQL",
        level: 74,
        desc: "具備查詢語法、資料結構理解與前端整合經驗",
      },
      {
        name: "TanStack Query",
        level: 78,
        desc: "可處理快取、loading/error state 與請求生命週期",
      },
    ],
  },
  {
    category: "Firebase",
    emoji: "🔥",
    skills: [
      {
        name: "Firebase Hosting",
        level: 72,
        desc: "具備靜態網站部署、環境設定與 GitHub Actions CI/CD 配置經驗",
      },
      {
        name: "Firebase Authentication",
        level: 70,
        desc: "了解登入驗證流程與常見身份驗證整合方式",
      },
      {
        name: "Firebase Messaging",
        level: 68,
        desc: "具備基礎推播通知串接與訊息流程理解",
      },
    ],
  },
  {
    category: "工具 & 測試",
    emoji: "🛠️",
    skills: [
      {
        name: "Git / GitHub",
        level: 86,
        desc: "日常使用版本控制、分支協作與 PR 流程",
      },
      {
        name: "ESLint / Prettier",
        level: 84,
        desc: "維持程式碼風格一致，提升團隊協作與可讀性",
      },
      {
        name: "GitHub Actions",
        level: 76,
        desc: "具備基礎 CI/CD 設定經驗，能協助自動化部署流程",
      },
      {
        name: "Vitest",
        level: 68,
        desc: "了解基本單元測試撰寫、測試案例設計與測試指令使用",
      },
      {
        name: "Docker",
        level: 65,
        desc: "目前持續學習中，已理解基礎容器化開發流程",
      },
    ],
  },
];

function SkillBar({ level }: { level: number }) {
  return (
    <div className="bg-warm-200 h-1.5 w-24 overflow-hidden rounded-full">
      <div
        className="from-warm-400 to-warm-600 h-full rounded-full bg-gradient-to-r transition-all duration-700"
        style={{ width: `${level}%` }}
      />
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-24 pb-16">
      {/* 頁首 */}
      <div className="mb-16">
        <h1 className="font-display text-espresso text-5xl font-bold md:text-6xl">
          Tech Stack
        </h1>
      </div>

      {/* 技術群組 */}
      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-2xl">{group.emoji}</span>
              <h2 className="font-display text-espresso text-2xl font-semibold">
                {group.category}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-warm-50 border-warm-200 hover:border-warm-400 hover:shadow-card group rounded-2xl border p-5 transition-all duration-300"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-espresso font-mono font-medium">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-warm-500 font-mono text-xs">
                        {skill.level}%
                      </span>
                      <SkillBar level={skill.level} />
                    </div>
                  </div>
                  <p className="text-warm-500 text-xs leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 其他技能標籤雲 */}
      <div className="bg-warm-100/60 border-warm-200 mt-16 rounded-3xl border p-8">
        <h2 className="font-display text-espresso mb-6 text-2xl font-semibold">
          其他熟悉工具
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Git",
            "VSCode",
            "Figma",
            "Notion",
            "Vercel",
            "Radix UI",
            "shadcn/ui",
            "sweetalert2",
            "swiperjs",
            "motions",
          ].map((item) => (
            <span
              key={item}
              className="bg-cream border-warm-200 text-warm-700 hover:border-warm-400 hover:bg-warm-50 cursor-default rounded-full border px-3 py-1.5 text-sm font-medium transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
