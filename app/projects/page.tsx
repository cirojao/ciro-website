import type { Metadata } from "next";
import Image from "next/image";
import type { IconType } from "react-icons";
import { BiCricketBall } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Projects | Ciro",
  description: "Ciro的前端開發作品集",
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
  desc: string;
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
    desc: "野獸國打造的會員系統，包含基本資料更新及優惠券兌換功能。利用GCP cloud run trigger 監聽github上的main分支，自動部署更新。",
    tags: ["Next.js", "Tailwind CSS", "MUI", "useContext", "GCP Cloud Run"],
    highlights: ["會員資料與優惠券流程", "自動部署流程串接", "商務功能落地"],
    github: "",
    demo: "https://shop.apilaunchpad.com/",
  },

  {
    id: "lobby",
    title: "Betigo",
    period: "2025",
    desc: "簡易遊戲大廳，提供各項遊戲入口等",
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
    desc: "虛擬貨幣錢包提供資訊、入金、交易記錄等功能",
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
    desc: "使用 mock API/WebSocket 模擬即時報價變動的遊戲平台",
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
                    src={project.image ?? "/images/ciro.png"}
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
