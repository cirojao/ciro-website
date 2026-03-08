import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SkillsSnapshot from "@/components/sections/SkillsSnapshot";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import CallToAction from "@/components/sections/CallToAction";

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
