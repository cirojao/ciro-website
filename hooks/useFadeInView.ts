import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function useFadeInView() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    //       ↑ 元素底部進入視窗底部開始計算
    //                    ↑ 元素頂部離開視窗頂部結束計算
  });

  // 捲軸進度 → 透明度對應關係
  // [0, 0.15, 0.3, 0.7, 0.85, 1]
  //  ↑          ↑        ↑         ↑
  // 剛進入   完全顯示  完全顯示   離開完畢
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],

    [0, 0, 1, 1, 0, 0],
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],

    [40, 40, 0, 0, -40, -40],
  );

  return { ref, opacity, y };
}
