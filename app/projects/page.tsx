import type { Metadata } from "next";
import { Github, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Ciro",
  description: "Ciro的前端開發作品集",
};

const projects = [
  {
    id: "ecommerce",
    title: "野獸國BiBi Store",
    period: "2025",
    type: "前端應用",
    emoji: "🛒",
    desc: "野獸國打造的會員系統，包含基本資料更新及優惠券兌換功能。利用GCP cloud run trigger 監聽github上的main分支，自動部署更新。",
    tags: ["Next.js", , "Tailwind CSS", "MUI", "useContext", "GCP Cloud Run"],
    highlights: ["自動部署更新"],
    color: "from-warm-200 to-sand-300",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "sport",
    title: "Astrophant sport",
    period: "2024",
    type: "前端應用",
    emoji: "📊",
    desc: "為公司打造的體育平台，包含即時動畫顯示、時間篩選聯賽或賽事資訊以及購物車功能。",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Swiperjs",
      "TanStack Query",
      "Redux",
      "RESTful API",
      "GraphQL API",
      "Tailwind",
      "i18n",
    ],
    highlights: ["i18n多語系", "即時動畫", "購物車功能", "淺顯易懂的資料結構"],
    color: "from-sand-200 to-warm-300",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "wallet",
    title: "Quispay",
    period: "2025",
    type: "前端應用",
    emoji: "🎨",
    desc: "虛擬貨幣錢包提供資訊、入金、交易記錄等功能",
    tags: ["React", "Vite", "shadcn/ui", "TanStack Query", "Tailwind"],
    highlights: ["良好視覺及操作體驗"],
    color: "from-warm-100 to-sand-200",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "lobby",
    title: "Betigo",
    desc: "簡易遊戲大廳，提供各項遊戲入口等",
    tags: [
      "React",
      "Vite",
      "Firebase Authentication",
      "TanStack Query",
      "Tailwind",
    ],
    emoji: "🎨",
    type: "前端應用",
    highlights: ["良好視覺及操作體驗"],
    color: "from-warm-200 to-warm-400",
    image: "/images/betigo.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-24 pb-16">
      {/* 頁首 */}
      <div className="mb-16">
        <h1 className="font-display text-espresso text-5xl font-bold md:text-6xl">
          Projects
        </h1>
      </div>

      {/* 專案列表 */}
      <div className="space-y-8">
        {projects.map((project) => (
          <article
            id={project.id}
            key={project.id}
            className="group bg-warm-50 border-warm-200 hover:border-warm-400 hover:shadow-warm-lg overflow-hidden rounded-3xl border transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* 左側色塊 */}
              <div
                className={`h-40 bg-gradient-to-br md:h-auto md:w-56 ${project.color} flex flex-shrink-0 items-center justify-center text-6xl`}
              >
                {project.emoji}
              </div>

              {/* 內容 */}
              <div className="flex-1 p-6 md:p-8">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-warm-500 font-mono text-xs tracking-wider uppercase">
                        {project.type}
                      </span>
                      <span className="text-warm-300">·</span>
                      <span className="text-warm-400 font-mono text-xs">
                        {project.period}
                      </span>
                    </div>
                    <h2 className="font-display text-espresso group-hover:text-warm-600 text-2xl font-bold transition-colors">
                      {project.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-warm-300 text-warm-500 hover:text-espresso hover:border-warm-500 flex h-9 w-9 items-center justify-center rounded-full border transition-all"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-warm-300 text-warm-500 hover:text-espresso hover:border-warm-500 flex h-9 w-9 items-center justify-center rounded-full border transition-all"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-warm-600 mb-4 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* 亮點 */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-warm-600 bg-warm-100 border-warm-200 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs"
                    >
                      <span className="bg-warm-400 h-1.5 w-1.5 rounded-full" />
                      {h}
                    </span>
                  ))}
                </div>

                {/* 技術標籤 */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-warm-200 text-warm-700 rounded-full px-2.5 py-0.5 font-mono text-xs"
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
