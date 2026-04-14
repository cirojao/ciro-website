import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SkillsSnapshot from "@/components/sections/SkillsSnapshot";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import CallToAction from "@/components/sections/CallToAction";
import { getCanonicalPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ciro Jao | Frontend Engineer",
  description:
    "Ciro Jao 的前端工程師作品集，專注 React、Next.js、TypeScript 與使用者體驗優化。",
  alternates: {
    canonical: getCanonicalPath("/"),
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsSnapshot />
      <ExperienceTimeline />
      <CallToAction />
    </>
  );
}
