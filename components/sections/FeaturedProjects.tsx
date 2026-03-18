"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import useFadeInView from "@/hooks/useFadeInView";

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
  // {
  //   id: "wallet",
  //   title: "QuisPay",
  //   desc: "虛擬貨幣錢包提供資訊、入金、交易記錄等功能",
  //   tags: ["React", "Vite", "shadcn/ui", "TanStack Query", "Tailwind"],
  //   color: "from-warm-200 to-warm-400",
  //   image: "/images/quispaylogo.svg",
  // },
  {
    id: "lobby",
    title: "Betigo",
    desc: "簡易遊戲大廳，提供各項遊戲入口等",
    tags: [
      "React",
      "Vite",
      "Firebase Authentication",
      "TanStack Query",
      "Tailwind",
    ],
    color: "from-warm-200 to-warm-400",
    image: "/images/betigo.png",
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
  const { ref, opacity, y } = useFadeInView();

  return (
    <motion.section
      className="mx-auto max-w-6xl px-6 py-24"
      ref={ref}
      style={{ opacity, y }}
    >
      {/* 標題 */}
      <motion.div
        className="mb-12 flex items-end justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20"></div>
        <div>
          <h2 className="font-display text-espresso text-4xl font-bold md:text-5xl">
            精選作品
          </h2>
        </div>
        <Link
          href="/projects"
          className="text-warm-600 hover:text-espresso group hidden items-center gap-1.5 text-sm font-medium transition-colors sm:flex"
        >
          查看全部
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </motion.div>

      {/* 卡片 */}
      <div className="grid gap-6 md:grid-cols-3">
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
              className="group border-warm-200 bg-warm-50 hover:border-warm-400 hover:shadow-card flex h-full flex-col overflow-hidden rounded-2xl border transition-colors duration-300"
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

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-body text-espresso group-hover:text-warm-600 mb-2 text-xl font-semibold transition-colors">
                  {p.title}
                </h3>
                <p className="text-warm-600 mb-4 text-sm leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-warm-200 text-warm-700 rounded-full px-2 py-0.5 font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-warm-500 group-hover:text-warm-700 mt-4 flex items-center gap-1 text-xs transition-colors">
                  查看詳情{" "}
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
          className="text-warm-600 border-warm-300 hover:bg-warm-100 inline-flex items-center gap-1.5 rounded-full border px-6 py-2.5 text-sm transition-colors"
        >
          查看全部作品
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </motion.section>
  );
}
