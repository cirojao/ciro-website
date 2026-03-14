"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "ecommerce",
    title: "野獸國扭蛋會員系統",
    desc: "提供優惠券兌換以及會員基本資料填寫",
    tags: ["Next.js", "MUI", "RESTful API"],
    color: "from-warm-200 to-warm-300",
    image: "/images/bklogo.png",
  },
  {
    id: "sport",
    title: "Astrophant sport",
    desc: "各類球種的賽事資訊平台",
    tags: ["React", "Vite", "Tailwind", "TanStack Query", "Typescript"],
    color: "from-warm-100 to-warm-200",
    image: "/images/aplogo.png",
  },
  {
    id: "wallet",
    title: "QuisPay",
    desc: "虛擬貨幣錢包提供資訊、入金、交易記錄等功能",
    tags: ["React", "Vite", "shadcn/ui", "TanStack Query", "Tailwind"],
    color: "from-warm-200 to-warm-400",
    image: "/images/quispaylogo.svg",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
      delay: i * 0.1,
    },
  }),
};

export default function FeaturedProjects() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      {/* 標題 */}
      <motion.div
        className="flex items-end justify-between mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-espresso font-bold">
            精選作品
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden sm:flex items-center gap-1.5 text-sm text-warm-600 hover:text-espresso transition-colors font-medium group"
        >
          查看全部
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </Link>
      </motion.div>

      {/* 卡片 */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <Link
              href={`/projects#${p.id}`}
              className="group flex flex-col rounded-2xl border border-warm-200 bg-warm-50 hover:border-warm-400 hover:shadow-card transition-colors duration-300 overflow-hidden h-full"
            >
              {/* 彩色頂部 */}
              <div
                className={`h-32 bg-linear-to-br ${p.color} flex items-center justify-center text-5xl`}
              >
                <Image
                  src={p.image}
                  alt="project snapshot"
                  width={50}
                  height={50}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-body text-xl font-semibold text-espresso mb-2 group-hover:text-warm-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-warm-600 leading-relaxed mb-4">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-warm-200 text-warm-700 text-xs rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs text-warm-500 group-hover:text-warm-700 transition-colors">
                  查看詳情{" "}
                  <ArrowUpRight
                    size={12}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* 手機版查看全部 */}
      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-warm-600 border border-warm-300 px-6 py-2.5 rounded-full hover:bg-warm-100 transition-colors"
        >
          查看全部作品
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
