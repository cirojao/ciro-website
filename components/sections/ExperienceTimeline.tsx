"use client";
import useFadeInView from "@/hooks/useFadeInView";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "2023 — 現在",
    role: "前端工程師",
    company: "喜馬拉雅科技有限公司",
    desc: "負責主導前端架構升級，將舊有 CSR 專案遷移至 Next.js 14 App Router；負責多項產品開發，配合需求採用不同技術棧",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Vite", "Firebase"],
  },
  // {
  //   period: "2020 — 2022",
  //   role: "前端工程師",
  //   company: "StartupXYZ",
  //   desc: "從零打造 B2B SaaS 前端，導入 TanStack Query 狀態管理，減少 60% 重複請求。",
  //   tags: ["React", "TanStack Query", "Chakra UI"],
  // },

  {
    period: "2021 — 2023",
    role: "銀行櫃員",
    company: "華泰銀行&聯邦銀行",
    desc: "擔任櫃員主任，管理分行現金等。在職期間意識到櫃員並無太多成長性可言，決定轉職成為前端工程師",
    tags: [],
  },
];

export default function ExperienceTimeline() {
  const { ref, opacity, y } = useFadeInView();

  return (
    <motion.section
      className="mx-auto max-w-6xl px-6 py-24"
      ref={ref}
      style={{ opacity, y }}
    >
      <div className="mb-14 text-center">
        <h2 className="font-display text-espresso text-4xl font-bold md:text-5xl">
          職涯旅程
        </h2>
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* 時間軸線 */}
        <div className="from-warm-300 via-warm-400 absolute top-0 bottom-0 left-0 ml-5 w-px bg-gradient-to-b to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex gap-8 pl-14">
              {/* 圓點 */}
              <div className="bg-warm-100 border-warm-400 text-warm-600 absolute left-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-mono text-xs font-bold">
                {String(experiences.length - i).padStart(2, "0")}
              </div>

              <div className="bg-warm-50 border-warm-200 hover:border-warm-400 hover:shadow-card flex-1 rounded-2xl border p-6 transition-all duration-300">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-espresso text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <span className="text-warm-600 text-sm font-medium">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-warm-500 bg-warm-100 border-warm-200 rounded-full border px-3 py-1 font-mono text-xs whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-warm-600 mb-4 text-sm leading-relaxed">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
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
          ))}
        </div>
      </div>
    </motion.section>
  );
}
