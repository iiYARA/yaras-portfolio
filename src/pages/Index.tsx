import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import bgPink from "@/assets/about/pink_radial_bg.png";
import MusicSketch from "@/components/MusicSketch";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <main style={{ overflowX: "clip" }}>
    <HeroSection />
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <AboutSection />
    </motion.div>
    <div
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{
        backgroundImage: `url(${bgPink})`,
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundRepeat: "repeat-y",
      }}
    >
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <MusicSketch />
    </div>
  </main>
);

export default Index;
