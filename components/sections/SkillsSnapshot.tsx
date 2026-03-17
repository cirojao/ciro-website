"use client";
import useFadeInView from "@/hooks/useFadeInView";
import { motion } from "framer-motion";

const skills = [
  {
    category: "前端框架",
    items: ["React", "Next.js"],
  },
  {
    category: "語言",
    items: ["TypeScript", "JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    category: "樣式",
    items: ["Tailwind CSS", "CSS Modules", "MUI", "Bootstrap", "Shadcn/ui"],
  },
  {
    category: "開發工具",
    items: ["Vite", "ESLint", "Prettier"],
  },
  {
    category: "請求後端",
    items: ["GraphQL", "REST API", "tanstack/query"],
  },
  {
    category: "Deployment",
    items: ["GitHub Actions", "Docker", "Firebase Hosting", "GCP Cloud Run"],
  },
];

export default function SkillsSnapshot() {
  const { ref, opacity, y } = useFadeInView();

  return (
    <motion.section className="py-24" ref={ref} style={{ opacity, y }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-display text-espresso text-4xl font-bold md:text-5xl">
            技術能力
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-cream border-warm-200 hover:border-warm-400 hover:shadow-card rounded-2xl border p-6 transition-all duration-300"
            >
              <h3 className="text-warm-500 mb-4 font-mono text-xs tracking-widest uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="bg-warm-100 border-warm-200 text-warm-800 hover:bg-warm-200 cursor-default rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
