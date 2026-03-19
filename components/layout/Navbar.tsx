"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Tech Stack" },
  { href: "/projects", label: "Projects" },
  // { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/90 shadow-warm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="bg-espresso text-cream font-display flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-transform duration-300 group-hover:rotate-12">
            C
          </span>
          <span className="font-display text-espresso hidden font-bold tracking-wide sm:block">
            Ciro
          </span>
        </Link>

        {/* 桌面選單 */}
        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href} className="px-4 py-2">
                <Link
                  href={href}
                  className={clsx(
                    "group font-display relative inline-block rounded-sm text-center text-sm transition-colors duration-200",
                    active
                      ? "text-espresso font-semibold"
                      : "text-warm-800 hover:text-espresso",
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                >
                  <span
                    className="invisible block h-0 overflow-hidden font-semibold"
                    aria-hidden
                  >
                    {label}
                  </span>
                  <span>{label}</span>
                  {/* 底線：active 時全寬，hover 時從左長出 */}
                  <span
                    className={clsx(
                      "bg-espresso absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-300",
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <ThemeToggle />

        {/* 手機右側：ThemeToggle + 選單按鈕 */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            className="text-warm-800 hover:text-espresso p-2"
            onClick={() => setOpen(!open)}
            aria-label="選單"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* 手機選單 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="bg-cream/95 border-warm-200 shadow-warm-lg overflow-hidden border-t backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map(({ href, label }, i) => {
                const active = pathname === href;
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={href}
                      className={clsx(
                        "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        active
                          ? "bg-warm-200 text-espresso font-semibold"
                          : "text-warm-800 hover:bg-warm-100",
                      )}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
