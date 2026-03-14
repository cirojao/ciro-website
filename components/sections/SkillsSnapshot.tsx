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
  return (
    <section className="py-24 bg-warm-100/60 border-y border-warm-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-espresso font-bold">
            技術能力
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
