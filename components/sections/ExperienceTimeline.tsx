const experiences = [
  {
    period: "2022 — 現在",
    role: "資深前端工程師",
    company: "Acme Tech Co.",
    desc: "負責主導前端架構升級，將舊有 CRA 專案遷移至 Next.js 14 App Router，效能提升 40%。帶領 3 人小組開發企業內部元件庫。",
    tags: ["Next.js", "TypeScript", "Radix UI"],
  },
  {
    period: "2020 — 2022",
    role: "前端工程師",
    company: "StartupXYZ",
    desc: "從零打造 B2B SaaS 前端，導入 TanStack Query 狀態管理，減少 60% 重複請求。",
    tags: ["React", "TanStack Query", "Chakra UI"],
  },
  {
    period: "2019 — 2020",
    role: "初級前端工程師",
    company: "Digital Agency",
    desc: "參與多個品牌官網開發，熟悉 Webflow CMS 整合與 GSAP 動畫實作。",
    tags: ["JavaScript", "GSAP", "Sass"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <p className="text-sm font-mono text-warm-500 uppercase tracking-widest mb-2">
          工作歷程
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-espresso font-bold">
          職涯旅程
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* 時間軸線 */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-warm-300 via-warm-400 to-transparent ml-5" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex gap-8 pl-14">
              {/* 圓點 */}
              <div className="absolute left-0 w-10 h-10 rounded-full bg-warm-100 border-2 border-warm-400 flex items-center justify-center text-warm-600 font-mono text-xs font-bold shrink-0">
                {String(experiences.length - i).padStart(2, "0")}
              </div>

              <div className="bg-warm-50 rounded-2xl border border-warm-200 p-6 flex-1 hover:border-warm-400 hover:shadow-card transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-espresso">
                      {exp.role}
                    </h3>
                    <span className="text-warm-600 font-medium text-sm">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-warm-500 bg-warm-100 border border-warm-200 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-warm-600 leading-relaxed mb-4">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
