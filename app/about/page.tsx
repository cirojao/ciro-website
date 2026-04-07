import type { Metadata } from "next";
import Image from "next/image";
import { LuCode, LuCoffee, LuMapPin, LuMusic } from "react-icons/lu";

export const metadata: Metadata = {
  title: "About | Ciro",
  description: "Ciro的背景、興趣與工作哲學",
};

const values = [
  {
    icon: LuCode,
    title: "程式即藝術",
    desc: "我相信好的程式碼不只是能運行，更要可讀、可維護，具備優雅的結構。",
  },
  {
    icon: LuCoffee,
    title: "持續學習",
    desc: "前端技術日新月異，我享受這種不斷挑戰自己、追上新知識的過程。",
  },
  {
    icon: LuMusic,
    title: "設計敏感度",
    desc: "持續與UI/UX設計師溝通，理解設計師的思維，培養自身美感",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-24 pb-16">
      {/* 頁首 */}
      <div className="mb-16">
        <h1 className="font-display text-espresso mb-6 text-5xl font-bold md:text-6xl">
          About
        </h1>
        <div className="text-warm-500 flex items-center gap-2 text-sm">
          <LuMapPin size={14} />
          <span>台北市 · 內湖區</span>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="mb-20 grid gap-12 md:grid-cols-5">
        {/* 頭像 */}
        <div className="md:col-span-2">
          <div className="relative">
            <div className="from-warm-200 to-sand-300 shadow-warm-lg flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br text-8xl">
              <Image
                src={"/images/ciro_bg.png"}
                width={200}
                height={200}
                alt="ciro"
              />
            </div>
            {/* 浮動標籤 */}
            <div className="bg-cream border-warm-300 shadow-warm absolute -right-4 -bottom-4 rounded-2xl border px-4 py-3">
              <p className="text-warm-500 font-mono text-xs">經驗</p>
              <p className="font-display text-espresso text-2xl font-bold">
                2 Years
              </p>
            </div>
          </div>
        </div>

        {/* 文字 */}
        <div className="text-warm-700 flex flex-col items-center justify-center space-y-5 leading-relaxed md:col-span-3">
          <p>
            在新創公司的工作經驗，讓我培養出快速迭代、注重效能優化的工作方式。
            我習慣在開發前先理解商業需求，不只是「把功能做出來」，更在意產品能否真正解決用戶痛點。
          </p>
          <p>
            對於React及其相關生態系有一定了解，包含Redux、Next.Js、Vite及TypeScript等。
            專注於提升使用者體驗、減少網頁渲染次數、提升組件互通性。
            樂於使用不同技術，用以提升前端技能樹，像最近正在學習使用docker等。
          </p>
        </div>
      </div>

      {/* 核心價值 */}
      <div className="mb-16">
        <h2 className="font-display text-espresso mb-8 text-3xl font-bold">
          工作哲學
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-warm-50 border-warm-200 hover:border-warm-400 hover:shadow-card rounded-2xl border p-6 transition-all duration-300"
            >
              <div className="bg-warm-200 mb-4 flex h-10 w-10 items-center justify-center rounded-xl">
                <Icon size={20} className="text-warm-600" />
              </div>
              <h3 className="font-display text-espresso mb-2 text-lg font-semibold">
                {title}
              </h3>
              <p className="text-warm-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 學歷 */}
      <div>
        <h2 className="font-display text-espresso mb-8 text-3xl font-bold">
          學歷
        </h2>
        <div className="bg-warm-50 border-warm-200 hover:shadow-card rounded-2xl border p-6 transition-shadow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-espresso text-xl font-semibold">
                財務金融系
              </h3>
              <p className="text-warm-600">實踐大學</p>
            </div>
            <span className="text-warm-500 bg-warm-100 border-warm-200 rounded-full border px-3 py-1 font-mono text-xs whitespace-nowrap">
              2015 — 2019
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
