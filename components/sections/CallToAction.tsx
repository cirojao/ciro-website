"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import useFadeInView from "@/hooks/useFadeInView";

export default function CallToAction() {
  const { ref, opacity, y } = useFadeInView();

  return (
    <motion.section className="px-6 py-24" ref={ref} style={{ opacity, y }}>
      <div className="mx-auto max-w-3xl text-center">
        <div className="bg-espresso relative overflow-hidden rounded-3xl p-12 md:p-16">
          {/* 背景裝飾 */}
          <div className="bg-warm-600/20 absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
          <div className="bg-warm-400/10 absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-display text-cream mb-6 text-4xl leading-tight font-bold md:text-5xl">
              開放合作
              <br />
            </h2>
            <p className="text-warm-300 mx-auto mb-10 max-w-xl text-lg leading-relaxed">
              無論是全職機會、自由接案還是技術顧問，我都很樂意聊聊！
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="bg-warm-500 hover:bg-warm-400 text-cream shadow-warm group inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-medium transition-all duration-200"
              >
                寫信給我
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="border-warm-600 hover:border-warm-400 text-warm-300 hover:text-cream inline-flex items-center justify-center gap-2 rounded-full border px-8 py-3.5 font-medium transition-all duration-200"
              >
                下載履歷
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
