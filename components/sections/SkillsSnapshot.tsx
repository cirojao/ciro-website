const skills = [
  {
    category: "前端框架",
    items: ["React 18", "Next.js 14", "Vue 3", "Nuxt 3"],
  },
  {
    category: "語言",
    items: ["TypeScript", "JavaScript ES2024", "HTML5", "CSS3"],
  },
  {
    category: "樣式",
    items: ["Tailwind CSS", "CSS Modules", "Framer Motion", "SCSS"],
  },
  {
    category: "工具鏈",
    items: ["Vite", "Webpack", "Turbopack", "ESLint", "Prettier"],
  },
  {
    category: "後端整合",
    items: ["Node.js", "tRPC", "GraphQL", "REST API", "Prisma"],
  },
  {
    category: "測試 & CI",
    items: ["Vitest", "Playwright", "GitHub Actions", "Docker"],
  },
];

export default function SkillsSnapshot() {
  return (
    <section className="py-24 bg-warm-100/60 border-y border-warm-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-warm-500 uppercase tracking-widest mb-2">
            技術能力
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-espresso font-bold">
            我的工具箱
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-cream rounded-2xl p-6 border border-warm-200 hover:border-warm-400 hover:shadow-card transition-all duration-300"
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-warm-100 border border-warm-200 rounded-lg text-sm text-warm-800 font-medium hover:bg-warm-200 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
