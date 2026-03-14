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
  { href: "/contact", label: "Contact" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-warm border-b border-warm-200/60"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-espresso flex items-center justify-center text-cream text-sm font-display font-bold transition-transform group-hover:rotate-12 duration-300">
            C
          </span>
          <span className="font-display text-espresso font-bold tracking-wide hidden sm:block">
            Ciro
          </span>
        </Link>

        {/* 桌面選單 */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href} className="px-4 py-2">
                <Link
                  href={href}
                  className={clsx(
                    "group relative  text-sm font-display transition-colors duration-200 rounded-sm inline-block text-center",
                    active
                      ? "text-espresso font-semibold "
                      : "text-warm-800 hover:text-espresso",
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                >
                  <span
                    className="block font-semibold invisible h-0 overflow-hidden"
                    aria-hidden
                  >
                    {label}
                  </span>
                  <span>{label}</span>
                  {/* 底線：active 時全寬，hover 時從左長出 */}
                  <span
                    className={clsx(
                      "absolute -bottom-1 left-0 h-px bg-espresso transition-transform duration-300 origin-left w-full",
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
        <div className="md:hidden flex items-center gap-1">
          <button
            className="p-2 text-warm-800 hover:text-espresso"
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
            className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-md border-t border-warm-200 shadow-warm-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
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
                        "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
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
