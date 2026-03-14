"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

// 共用動畫 variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 背景裝飾圓 */}
      {/* <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-warm-200/40 blur-3xl" />
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 rounded-full bg-warm-200/50 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-warm-100/30 blur-3xl" /> */}

      {/* 網格線裝飾 */}
      <div
        className="absolute inset-0 opacity-[0.1] z-[-1]"
        style={{
          backgroundImage: `
            linear-gradient(#b8844e 1px, transparent 1px),
            linear-gradient(90deg, #b8844e 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="flex-col-reverse sm:flex-row flex items-center sm:items-start justify-center gap-12 sm:gap-20 w-full h-full"
      >
        <motion.div
          className="relative z-10 max-w-5xl text-center sm:text-start"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* 標籤 */}
          {/* <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-warm-100 border border-warm-300 rounded-full text-sm text-warm-600 font-medium mb-8"
        >
          <Sparkles size={14} className="text-warm-500" />
          <span>台北 · 前端工程師</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-warm-500">開放機會</span>
        </motion.div> */}

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-3 font-display text-2xl"
          >
            Hi, I&apos;m
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="font-display text-5xl  md:text-7xl  font-bold text-espresso leading-[1.1] mb-6"
          >
            Ciro Jao
          </motion.h1>

          {/* 副標題 */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl mx-auto text-lg text-warm-600 leading-relaxed mb-10 font-display"
          >
            Frontend Engineer
          </motion.p>

          {/* 技術標籤 */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(
              (tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="px-3 py-1 bg-warm-100 border border-warm-200 rounded-full text-sm text-warm-700 font-mono cursor-default"
                >
                  {tech}
                </motion.span>
              ),
            )}
          </motion.div>

          {/* CTA 按鈕 */}
          {/* <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/projects"
              className="block px-8 py-3.5 bg-espresso hover:bg-espresso-light text-cream font-medium rounded-full transition-colors duration-200 shadow-warm hover:shadow-warm-lg"
            >
              查看作品集
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="block px-8 py-3.5 bg-warm-100 hover:bg-warm-200 border border-warm-300 text-espresso font-medium rounded-full transition-colors duration-200"
            >
              聯絡我
            </Link>
          </motion.div>
        </motion.div> */}
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <Image src={"/images/ciro.png"} width={200} height={200} alt="ciro" />
        </motion.div>
      </motion.div>

      {/* 向下捲動提示 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono tracking-widest uppercase">
            scroll
          </span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
