"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於我" },
  { href: "/skills", label: "技術棧" },
  { href: "/projects", label: "作品集" },
  { href: "/contact", label: "聯絡我" },
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

  useEffect(() => {
    // setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-warm border-b border-warm-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between bg-white">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-warm-400 flex items-center justify-center text-cream text-sm font-display font-bold transition-transform group-hover:rotate-12 duration-300">
            C
          </span>
          <span className="font-display text-espresso font-semibold tracking-wide hidden sm:block">
            Ciro
          </span>
        </Link>

        {/* 桌面選單 */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-4 py-2 text-sm font-body transition-colors duration-200 rounded-full ${
                    active
                      ? "text-espresso font-medium"
                      : "text-warm-700 hover:text-espresso"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 bg-warm-200 rounded-full -z-10" />
                  )}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div></div>

        {/* 手機選單按鈕 */}
        <button
          className="md:hidden p-2 text-warm-700 hover:text-espresso"
          onClick={() => setOpen(!open)}
          aria-label="選單"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* 手機選單 */}
      {open && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-warm-200 px-6 py-4 flex flex-col gap-1 shadow-warm-lg">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? "bg-warm-100 text-espresso"
                    : "text-warm-700 hover:bg-warm-100"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="/contact"
            className="mt-2 px-4 py-3 bg-warm-500 text-cream text-sm rounded-xl text-center font-medium"
          >
            聊聊合作
          </a>
        </div>
      )}
    </header>
  );
}
