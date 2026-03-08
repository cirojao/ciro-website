import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative rounded-3xl bg-espresso p-12 md:p-16 overflow-hidden">
          {/* 背景裝飾 */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-warm-600/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-warm-400/10 blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <p className="text-warm-400 font-mono text-sm uppercase tracking-widest mb-4">
              開放合作
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mb-6 leading-tight">
              讓我們一起
              <br />
              <span className="italic text-warm-400">打造精彩</span>
            </h2>
            <p className="text-warm-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              無論是全職機會、自由接案還是技術顧問，我都很樂意聊聊！
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-warm-500 hover:bg-warm-400 text-cream font-medium rounded-full transition-all duration-200 shadow-warm group"
              >
                寫信給我
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-warm-600 hover:border-warm-400 text-warm-300 hover:text-cream font-medium rounded-full transition-all duration-200"
              >
                下載履歷
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
