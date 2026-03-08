"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-anim]");
    items.forEach((item, i) => {
      setTimeout(
        () => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        },
        150 + i * 120,
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* 背景裝飾圓 */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-warm-200/40 blur-3xl" />
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 rounded-full bg-sand-200/50 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-warm-100/30 blur-3xl" />

      {/* 網格線裝飾 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#b8844e 1px, transparent 1px),
            linear-gradient(90deg, #b8844e 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* 標籤 */}
        <div
          data-anim
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-warm-100 border border-warm-300 rounded-full text-sm text-warm-600 font-medium mb-8"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <Sparkles size={14} className="text-warm-500" />
          <span>台北 · 前端工程師</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-warm-500">開放機會</span>
        </div>

        {/* 主標題 */}
        <div
          data-anim
          className="font-display text-5xl  font-bold text-espresso leading-[1.1] mb-6"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "all 0.6s ease",
          }}
        >
          打造令人
          <br />
          <span className="italic text-warm-500">難忘的</span>
          <br />
          網頁體驗
        </div>

        {/* 副標題 */}
        <p
          data-anim
          className="max-w-xl mx-auto text-lg text-warm-600 leading-relaxed mb-10 font-body"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          Hi，我是
          <strong className="text-espresso font-semibold">Ciro</strong>，
          一位擁有 5 年經驗的前端工程師。 熱衷於用 React 與 TypeScript
          構建高效、美觀的使用者介面。
        </p>

        {/* 技術標籤 */}
        <div
          data-anim
          className="flex flex-wrap justify-center gap-2 mb-10"
          style={{
            opacity: 0,
            transform: "translateY(16px)",
            transition: "all 0.6s ease",
          }}
        >
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-warm-100 border border-warm-200 rounded-full text-sm text-warm-700 font-mono"
              >
                {tech}
              </span>
            ),
          )}
        </div>

        {/* CTA 按鈕 */}
        <div
          data-anim
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: 0,
            transform: "translateY(16px)",
            transition: "all 0.6s ease",
          }}
        >
          <Link
            href="/projects"
            className="px-8 py-3.5 bg-espresso hover:bg-espresso-light text-cream font-medium rounded-full transition-all duration-200 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5"
          >
            查看作品集
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-warm-100 hover:bg-warm-200 border border-warm-300 text-espresso font-medium rounded-full transition-all duration-200"
          >
            聯絡我
          </Link>
        </div>
      </div>

      {/* 向下捲動提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-400 animate-bounce">
        <span className="text-xs font-mono tracking-widest uppercase">
          scroll
        </span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
