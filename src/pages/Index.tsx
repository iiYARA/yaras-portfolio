import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

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
    <ProjectsSection />
  </main>
);

export default Index;
