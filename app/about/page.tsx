import type { Metadata } from "next";
import { Code2, Coffee, Music, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "關於我 — Ciro",
  description: "Ciro的背景、興趣與工作哲學",
};

const values = [
  {
    icon: Code2,
    title: "程式即藝術",
    desc: "我相信好的程式碼不只是能運行，更要可讀、可維護，具備優雅的結構。",
  },
  {
    icon: Coffee,
    title: "持續學習",
    desc: "前端技術日新月異，我享受這種不斷挑戰自己、追上新知識的過程。",
  },
  {
    icon: Music,
    title: "設計敏感度",
    desc: "曾修習 UI/UX 課程，理解設計師的思維，讓溝通更高效。",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto px-6">
      {/* 頁首 */}
      <div className="mb-16">
        <p className="text-sm font-mono text-warm-500 uppercase tracking-widest mb-3">
          About Me
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-espresso font-bold mb-6">
          嗨，我是Ciro 👋
        </h1>
        <div className="flex items-center gap-2 text-warm-500 text-sm">
          <MapPin size={14} />
          <span>新北市 · 汐止區</span>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="grid md:grid-cols-5 gap-12 mb-20">
        {/* 頭像 */}
        <div className="md:col-span-2">
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-warm-200 to-sand-300 flex items-center justify-center text-8xl shadow-warm-lg">
              👨‍💻
            </div>
            {/* 浮動標籤 */}
            <div className="absolute -bottom-4 -right-4 bg-cream border border-warm-300 rounded-2xl px-4 py-3 shadow-warm">
              <p className="text-xs text-warm-500 font-mono">經驗</p>
              <p className="text-2xl font-display font-bold text-espresso">
                5 年+
              </p>
            </div>
          </div>
        </div>

        {/* 文字 */}
        <div className="md:col-span-3 space-y-5 text-warm-700 leading-relaxed">
          <p className="text-lg">
            我是一位擁有{" "}
            <strong className="text-espresso">5 年前端開發經驗</strong>
            的工程師， 專注於 React 生態系與現代 Web 技術。
          </p>
          <p>
            過去在新創與中型科技公司的工作經驗，讓我培養出快速迭代、注重效能優化的工作方式。
            我習慣在開發前先理解商業需求，不只是「把功能做出來」，更在意產品能否真正解決用戶痛點。
          </p>
          <p>
            閒暇時喜歡貢獻開源專案、寫技術文章，也會參加台北的前端社群 Meetup。
            最近對 Web Animation API 和 Edge Runtime 特別感興趣。
          </p>
          <p>偶爾也享受沖一杯手沖咖啡，在咖啡館裡讀設計書放空。</p>
        </div>
      </div>

      {/* 核心價值 */}
      <div className="mb-16">
        <h2 className="font-display text-3xl text-espresso font-bold mb-8">
          工作哲學
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-warm-50 border border-warm-200 rounded-2xl p-6 hover:border-warm-400 hover:shadow-card transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-warm-200 flex items-center justify-center mb-4">
                <Icon size={20} className="text-warm-600" />
              </div>
              <h3 className="font-display text-lg font-semibold text-espresso mb-2">
                {title}
              </h3>
              <p className="text-sm text-warm-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 學歷 */}
      <div>
        <h2 className="font-display text-3xl text-espresso font-bold mb-8">
          學歷
        </h2>
        <div className="bg-warm-50 border border-warm-200 rounded-2xl p-6 hover:shadow-card transition-shadow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-semibold text-espresso">
                財務金融系
              </h3>
              <p className="text-warm-600">實踐大學</p>
            </div>
            <span className="text-xs font-mono text-warm-500 bg-warm-100 border border-warm-200 px-3 py-1 rounded-full whitespace-nowrap">
              2015 — 2019
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
