"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 訂閱函式：外部狀態變化時通知 React
function subscribe(callback: () => void) {
  // localStorage 沒有原生事件，用 storage event 跨分頁同步
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

// CSR 讀取快照
function getSnapshot() {
  return localStorage.getItem("theme") === "dark";
}

// SSR 快照：給伺服器一個安全預設值
function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = !dark;

    // 1. 操作外部系統
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");

    // 2. 手動通知 React 去重新讀快照
    window.dispatchEvent(new StorageEvent("storage"));
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "切換為亮色模式" : "切換為深色模式"}
      className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-500 hover:text-espresso hover:border-warm-500 hover:bg-warm-300 transition-all duration-200"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.18 }}
          className="block"
        >
          {dark ? <Moon size={16} /> : <Sun size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
