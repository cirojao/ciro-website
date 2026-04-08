import type { Metadata } from "next";
import Image from "next/image";
import type { IconType } from "react-icons";
import { BiCricketBall } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import JsonLd from "@/components/seo/JsonLd";
import { getCanonicalPath } from "@/lib/site";
import { getProjectsPageStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Projects | Ciro",
  description: "Ciro的前端開發作品集",
  alternates: {
    canonical: getCanonicalPath("/projects"),
  },
};

const lightProjectGradient = "from-warm-50 to-warm-200";
const darkProjectGradient = "from-warm-200 to-warm-400";

type Project = {
  id: string;
  title: string;
  period?: string;
  type: string;
  sideProjects: boolean;
  image?: string;
  icon?: IconType;
  desc: any;
  tags: string[];
  highlights: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    id: "sport",
    title: "Astrophant sport",
    period: "2024",
    type: "前端應用",
    sideProjects: false,
    image: "/images/aplogo.png",
    desc: (
      <>
        <li>
          根據不同 API
          回傳格式與狀態設計對應的錯誤處理與資料顯示機制，提升前端資料整合穩定性與使用者操作體驗。
        </li>
        <li>
          優化桌機與手機版操作流程，提升不同裝置上的瀏覽體驗與介面一致性。
        </li>
        <li>
          實作特殊格式回應資料解析機制，提升前端處理複雜資料來源的穩定性與整合效率。
        </li>
        <li>
          串接外部 API 與登入授權流程，處理 token
          傳遞、資料請求設定與前端狀態同步。
        </li>
      </>
    ),
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
    highlights: ["i18n 多語系支援", "即時動畫與賽事互動", "購物車與資料流整合"],
    github: "",
    demo: "https://sp-menu-online.firebaseapp.com/",
  },
  {
    id: "ecommerce",
    title: "野獸國BiBi Store",
    period: "2025",
    type: "前端應用",
    sideProjects: false,
    image: "/images/bklogo.png",
    desc: (
      <>
        <li>使用 React 建立會員系統，串接 API 完成註冊、登入流程</li>
        <li>處理表單驗證與錯誤狀態，提升使用者操作體驗</li>
        <li>管理使用者狀態與登入流程（token / auth flow）</li>
      </>
    ),
    tags: ["Next.js", "Tailwind CSS", "MUI", "useContext", "GCP Cloud Run"],
    highlights: ["會員資料與優惠券流程", "自動部署流程串接", "商務功能落地"],
    github: "",
    demo: "https://shop.apilaunchpad.com/",
  },

  {
    id: "lobby",
    title: "Betigo",
    period: "2025",
    desc: (
      <>
        <li>使用 React 建立遊戲大廳介面，整合多個遊戲入口與共用版型</li>
        <li>串接 Firebase Authentication 與資料查詢流程，處理登入狀態與頁面切換邏輯</li>
        <li>優化大廳導覽與元件拆分方式，提升維護性與使用者操作流暢度</li>
      </>
    ),
    tags: [
      "React",
      "Vite",
      "Firebase Authentication",
      "TanStack Query",
      "Tailwind",
    ],
    type: "前端應用",
    sideProjects: false,
    highlights: ["遊戲入口整合", "大廳導覽體驗優化", "Firebase 驗證串接"],
    image: "/images/betigo.png",
    github: "",
    demo: "https://betigo-1.web.app/",
  },
  {
    id: "wallet",
    title: "Quispay",
    period: "2025",
    type: "前端應用",
    sideProjects: false,
    image: "/images/quispaylogo.svg",
    desc: (
      <>
        <li>使用 React 建構虛擬貨幣錢包前端介面，整合帳戶資訊與交易資料顯示流程</li>
        <li>串接 API 處理入金與交易記錄查詢，整理資料狀態與頁面互動邏輯</li>
        <li>結合 shadcn/ui 與 Tailwind 建立一致的元件樣式，提升介面開發效率與維護性</li>
      </>
    ),
    tags: ["React", "Vite", "shadcn/ui", "TanStack Query", "Tailwind"],
    highlights: [
      "錢包資訊與交易紀錄",
      "入金流程介面設計",
      "shadcn/ui 元件整合",
    ],
    github: "",
    demo: "https://quispay.com/",
  },
  {
    id: "vci",
    title: "Virtual Crickets Games",
    period: "2025",
    type: "前端應用",
    sideProjects: true,
    icon: BiCricketBall,
    desc: (
      <>
        <li>使用 React 建立遊戲平台介面，模擬即時報價與互動式資料更新情境</li>
        <li>透過 mock API 與 WebSocket 實作前端資料流，練習即時狀態同步與事件處理</li>
        <li>拆分可重用元件與畫面邏輯，提升專案結構清晰度與後續擴充彈性</li>
      </>
    ),
    tags: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind",
      "WebSocket",
      "Mock Server",
    ],
    highlights: [
      "Mock API / WebSocket 模擬",
      "即時報價變動互動",
      "前端資料流練習",
    ],
    github: "https://github.com/cirojao/vci-project",
    demo: "",
  },
];

export default function ProjectsPage() {
  const projectsStructuredData = getProjectsPageStructuredData(
    projects.map((project) => ({
      title: project.title,
      description: project.highlights.join("、"),
      tags: project.tags,
      url: project.demo || project.github || undefined,
    })),
  );

  return (
    <>
      <JsonLd data={projectsStructuredData} />
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        {/* 頁首 */}
        <div className="mb-16">
          <h1 className="font-display text-espresso text-5xl font-bold md:text-6xl">
            Projects
          </h1>
        </div>

        {/* 專案列表 */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              id={project.id}
              key={project.id}
              className="group bg-warm-50 border-warm-200 hover:border-warm-400 hover:shadow-warm-lg overflow-hidden rounded-3xl border transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* 左側色塊 */}
                <div
                  className={`h-40 bg-linear-to-br md:h-auto md:w-56 ${index % 2 === 0 ? lightProjectGradient : darkProjectGradient} flex shrink-0 items-center justify-center text-6xl`}
                >
                  {project.icon ? (
                    <project.icon
                      size={88}
                      className="text-espresso/80"
                      aria-hidden="true"
                    />
                  ) : (
                    <Image
                      src={project.image ?? "/images/ciro_bg.png"}
                      alt={`${project.title} logo`}
                      width={88}
                      height={88}
                      className="h-auto max-h-24 w-auto max-w-[140px] object-contain"
                    />
                  )}
                </div>

                {/* 內容 */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        {project.sideProjects ? (
                          <>
                            <span className="bg-espresso text-cream border-espresso rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-wide uppercase">
                              Side Project
                            </span>
                            <span className="text-warm-300">·</span>
                          </>
                        ) : null}
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
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-warm-300 text-warm-500 hover:text-espresso hover:border-warm-500 flex h-9 w-9 items-center justify-center rounded-full border transition-all"
                        >
                          <SiGithub size={16} />
                        </a>
                      ) : null}
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-warm-300 text-warm-500 hover:text-espresso hover:border-warm-500 flex h-9 w-9 items-center justify-center rounded-full border transition-all"
                        >
                          <LuExternalLink size={16} />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <ul className="text-warm-600 mb-4 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                    {project.desc}
                  </ul>

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
    </>
  );
}
